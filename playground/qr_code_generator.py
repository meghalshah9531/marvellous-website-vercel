from pathlib import Path

import qrcode
from PIL import Image, ImageOps
from qrcode.constants import ERROR_CORRECT_H


def escape_vcard(value: str) -> str:
    """Escape special characters in vCard text."""
    return (
        value.replace("\\", "\\\\")
        .replace("\r\n", "\n")
        .replace("\r", "\n")
        .replace("\n", "\\n")
        .replace(";", "\\;")
        .replace(",", "\\,")
    )


def fold_line(line: str) -> str:
    """Keep vCard lines within 75 UTF-8 bytes."""
    parts = []
    current = ""

    for character in line:
        if len((current + character).encode("utf-8")) > 75:
            parts.append(current)
            current = " "  # Continuation lines start with a space.
        current += character

    parts.append(current)
    return "\r\n".join(parts)


def create_qr_image(vcard: str, logo_path: Path) -> Image.Image:
    """Render a QR code with a centered logo in a borderless white badge."""
    qr = qrcode.QRCode(
        version=None,
        error_correction=ERROR_CORRECT_H,
        box_size=12,
        border=4,
    )
    qr.add_data(vcard)
    qr.make(fit=True)
    image = qr.make_image(
        fill_color="#285342",
        back_color="white",
    ).convert("RGBA")

    with Image.open(logo_path) as source:
        logo = source.convert("RGBA")

    # Ignore almost transparent export noise when finding the visible artwork.
    # Preserve the original alpha inside the crop for smooth logo edges.
    visible_alpha = logo.getchannel("A").point(
        lambda alpha: 255 if alpha > 8 else 0
    )
    bounds = visible_alpha.getbbox()
    if bounds is None:
        raise SystemExit("The logo image has no visible artwork.")
    logo = logo.crop(bounds)

    # Odd module counts keep every edge of the centered badge on the QR grid.
    plate_modules = max(7, round(qr.modules_count * 0.18))
    if plate_modules % 2 == 0:
        plate_modules -= 1
    plate_width = plate_modules * qr.box_size
    padding = 2 * qr.box_size
    logo = ImageOps.contain(
        logo,
        (plate_width - 2 * padding, plate_width - 2 * padding),
        Image.Resampling.LANCZOS,
    )

    # Follow the artwork's height so the white space is balanced on all sides.
    height_modules = (logo.height + 2 * padding + qr.box_size - 1) // qr.box_size
    if height_modules % 2 == 0:
        height_modules += 1
    plate_height = height_modules * qr.box_size
    plate = Image.new("RGBA", (plate_width, plate_height), "white")

    plate.alpha_composite(
        logo,
        ((plate_width - logo.width) // 2, (plate_height - logo.height) // 2),
    )
    image.alpha_composite(
        plate,
        ((image.width - plate_width) // 2, (image.height - plate_height) // 2),
    )
    return image.convert("RGB")


def main() -> None:
    script_dir = Path(__file__).resolve().parent
    logo_path = script_dir / "logo.png"
    output_dir = script_dir / "contact_qr_output"

    if not logo_path.is_file():
        raise SystemExit(
            "Place your company logo beside this script as logo.png."
        )

    full_name = input("Full name: ").strip()
    if not full_name:
        raise SystemExit("Full name is required.")

    # These help phones sort the contact correctly.
    given_name = input("Given/first name: ").strip()
    family_name = input("Family/last name: ").strip()

    fields = [
        ("TITLE", input("Job title: ").strip()),
        ("ORG", input("Company name: ").strip()),
        (
            "TEL;TYPE=CELL",
            input("Mobile number, including country code: ").strip(),
        ),
        (
            "TEL;TYPE=WORK,VOICE",
            input("Additional phone number: ").strip(),
        ),
        (
            "EMAIL;TYPE=INTERNET,PREF",
            input("Personal/professional email: ").strip(),
        ),
        (
            "EMAIL;TYPE=INTERNET,WORK",
            input("Company email: ").strip(),
        ),
        ("URL", input("Website (https://...): ").strip()),
    ]

    linkedin = input("LinkedIn URL (optional): ").strip()

    lines = [
        "BEGIN:VCARD",
        "VERSION:3.0",
        f"N:{escape_vcard(family_name)};{escape_vcard(given_name)};;;",
        f"FN:{escape_vcard(full_name)}",
    ]

    for key, value in fields:
        if value:
            lines.append(f"{key}:{escape_vcard(value)}")

    if linkedin:
        lines.append(
            f"NOTE:{escape_vcard('LinkedIn: ' + linkedin)}"
        )

    lines.append("END:VCARD")
    vcard = "\r\n".join(fold_line(line) for line in lines) + "\r\n"

    output_dir.mkdir(exist_ok=True)
    vcard_path = output_dir / "contact.vcf"
    image_path = output_dir / "contact-qr.png"

    if vcard_path.exists() or image_path.exists():
        raise SystemExit(
            "Output files already exist. Move or rename them before running again."
        )

    image = create_qr_image(vcard, logo_path)

    vcard_path.write_bytes(vcard.encode("utf-8"))
    image.save(image_path, dpi=(300, 300))

    print(f"\nQR image: {image_path}")
    print(f"Contact file: {vcard_path}")
    print("Test the QR on Android and iPhone before printing.")


if __name__ == "__main__":
    main()
