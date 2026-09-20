import { z } from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { SEO } from "@/components/seo"
import { ScrollReveal } from "@/components/scroll-reveal"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { useSubmitContact } from "@workspace/api-client-react"
import { useToast } from "@/hooks/use-toast"
import { Loader2 } from "lucide-react"
import { ContactSidebar } from "@/components/contact-sidebar"

const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(100),
  email: z.string().email("Please enter a valid email address").max(254),
  phone: z.string().max(40).optional(),
  service: z.enum(["erp_advisory", "implementation_coordination", "system_audit", "other"], {
    required_error: "Please select an area of interest",
  }),
  message: z.string().min(10, "Message must be at least 10 characters").max(5000),
  consent: z.literal(true, {
    errorMap: () => ({ message: "You must accept the terms to proceed" }),
  }),
  website: z.string().max(200).optional(),
})

type ContactFormValues = z.infer<typeof contactFormSchema>

export default function Contact() {
  const { toast } = useToast()
  const submitContact = useSubmitContact()

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      service: undefined,
      message: "",
      consent: undefined,
      website: "",
    },
  })

  function onSubmit(data: ContactFormValues) {
    submitContact.mutate(
      { data },
      {
        onSuccess: () => {
          toast({
            title: "Inquiry received",
            description: "Your message has been sent. We will get back to you as soon as possible.",
          })
          form.reset()
        },
        onError: () => {
          toast({
            variant: "destructive",
            title: "Submission failed",
            description: "There was an error sending your message. Please try again or contact us directly via email.",
          })
        }
      }
    )
  }

  return (
    <div className="pt-24 min-h-screen bg-background">
      <SEO 
        title="Contact" 
        description="Schedule a confidential consultation for ERP Advisory & Implementation Coordination."
      />
      
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-20">
        <ScrollReveal>
          <div className="max-w-2xl mx-auto text-center mb-16 space-y-4">
            <h1 className="text-4xl md:text-5xl font-serif font-medium text-foreground">
              Request a Consultation
            </h1>
            <p className="text-lg text-muted-foreground">
              All inquiries are strictly confidential. Please provide preliminary details below so we may prepare for our initial discussion.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-[1fr_2fr] gap-12 max-w-6xl mx-auto">
          {/* Contact Info Sidebar */}
          <ScrollReveal delay={0.1}>
            <ContactSidebar />
          </ScrollReveal>

          {/* Form */}
          <ScrollReveal delay={0.2}>
            <div className="bg-card p-8 md:p-10 rounded-2xl border border-border h-full">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="absolute -left-[10000px]" aria-hidden="true">
                    <label htmlFor="contact-website">Website</label>
                    <input id="contact-website" tabIndex={-1} autoComplete="off" {...form.register("website")} />
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Full Name / Company</FormLabel>
                          <FormControl>
                            <Input placeholder="Jane Doe" {...field} className="bg-background" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email Address</FormLabel>
                          <FormControl>
                            <Input placeholder="jane@example.com" type="email" {...field} className="bg-background" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Phone Number <span className="text-muted-foreground font-normal">(Optional)</span></FormLabel>
                          <FormControl>
                            <Input placeholder="+1 (555) 000-0000" type="tel" {...field} className="bg-background" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="service"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Area of Interest</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger className="bg-background">
                                <SelectValue placeholder="Select a practice area" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="erp_advisory">ERP Advisory & Strategy</SelectItem>
                              <SelectItem value="implementation_coordination">Implementation Coordination</SelectItem>
                              <SelectItem value="system_audit">System Audit & Rescue</SelectItem>
                              <SelectItem value="other">General Inquiry</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Brief Description of Needs</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Please briefly describe your current systems and operational objectives..." 
                            className="min-h-[150px] resize-y bg-background" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="consent"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border border-border p-4 bg-background">
                        <FormControl>
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                        </FormControl>
                        <div className="space-y-1 leading-none">
                          <FormLabel className="text-sm font-normal text-muted-foreground">
                            I understand that this inquiry does not constitute formal advisory advice, and does not form a professional-client relationship until an engagement letter is signed.
                          </FormLabel>
                          <FormMessage />
                        </div>
                      </FormItem>
                    )}
                  />

                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full md:w-auto min-w-[200px]"
                    disabled={submitContact.isPending}
                  >
                    {submitContact.isPending ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      "Submit Inquiry"
                    )}
                  </Button>
                </form>
              </Form>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </div>
  )
}
