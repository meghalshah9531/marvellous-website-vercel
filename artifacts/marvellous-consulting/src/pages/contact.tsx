import { useState } from "react"
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
import { Link } from "wouter"
import { useSubmitContact } from "@workspace/api-client-react"
import { useToast } from "@/hooks/use-toast"
import { CheckCircle2, Loader2 } from "lucide-react"

const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(100),
  companyName: z.string().max(150).optional(),
  email: z.string().email("Please enter a valid email address").max(254),
  phone: z.string().max(40).optional(),
  service: z.enum(["new_implementation", "improve_existing", "select_partner", "implementation_guidance", "partnership", "other"], {
    required_error: "Please select an enquiry type",
  }),
  message: z.string().min(10, "Message must be at least 10 characters").max(5000),
  website: z.string().max(200).optional(),
})

type ContactFormValues = z.infer<typeof contactFormSchema>

export default function Contact() {
  const { toast } = useToast()
  const submitContact = useSubmitContact()
  const [justSubmitted, setJustSubmitted] = useState(false)
  const [submissionId, setSubmissionId] = useState(0)

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      companyName: "",
      email: "",
      phone: "",
      service: undefined,
      message: "",
      website: "",
    },
  })

  function onSubmit(data: ContactFormValues) {
    submitContact.mutate(
      { data },
      {
        onSuccess: () => {
          form.reset()
          setJustSubmitted(true)
          setSubmissionId((id) => id + 1)
          setTimeout(() => setJustSubmitted(false), 5000)
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
      
      <div className="container mx-auto px-4 md:px-6 lg:px-10 xl:px-16 2xl:px-24 py-12 md:py-20">
        <ScrollReveal>
          <div className="max-w-2xl mx-auto text-center mb-16 space-y-4">
            <h1 className="text-4xl md:text-5xl font-serif font-medium text-foreground">
              Request a Consultation
            </h1>
            <p className="text-lg text-muted-foreground">
              Tell us what you’re planning or where your current system is falling short. We’ll review your enquiry and get in touch to discuss how we can help.
            </p>
          </div>
        </ScrollReveal>

        <div className="max-w-3xl mx-auto">
          <ScrollReveal delay={0.1}>
            <div className="bg-card p-8 md:p-10 rounded-2xl border border-border">
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
                          <FormLabel>Full Name <span className="text-destructive">*</span></FormLabel>
                          <FormControl>
                            <Input placeholder="Jane Doe" {...field} className="bg-background" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="companyName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Company Name <span className="text-muted-foreground font-normal">(Optional)</span></FormLabel>
                          <FormControl>
                            <Input placeholder="Acme Inc." {...field} className="bg-background" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email Address <span className="text-destructive">*</span></FormLabel>
                          <FormControl>
                            <Input placeholder="jane@example.com" type="email" {...field} className="bg-background" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Phone Number <span className="text-muted-foreground font-normal">(Optional)</span></FormLabel>
                          <FormControl>
                            <Input placeholder="Include country code" type="tel" {...field} className="bg-background" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="service"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>How can we help? <span className="text-destructive">*</span></FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="bg-background">
                              <SelectValue placeholder="Select an enquiry type" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="new_implementation">New ERP / Odoo implementation</SelectItem>
                            <SelectItem value="improve_existing">Improve an existing system</SelectItem>
                            <SelectItem value="select_partner">Select an implementation partner</SelectItem>
                            <SelectItem value="implementation_guidance">Implementation guidance</SelectItem>
                            <SelectItem value="partnership">Partnership opportunity</SelectItem>
                            <SelectItem value="other">Other / Not sure yet</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Tell us about your project <span className="text-destructive">*</span></FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="What would you like help with? You can mention your current system, main challenges, and preferred timeline."
                            className="min-h-[150px] resize-y bg-background"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                    <Button
                      type="submit"
                      size="lg"
                      className="w-full sm:w-auto min-w-[200px]"
                      disabled={submitContact.isPending}
                    >
                      {submitContact.isPending ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Submitting...
                        </>
                      ) : (
                        "Send Enquiry"
                      )}
                    </Button>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      We’ll use the information you provide to respond to your enquiry. See our{" "}
                      <Link href="/privacy" className="underline hover:text-primary transition-colors">Privacy Policy</Link> for details.
                      <br />
                      Please do not include passwords or sensitive business information.
                    </p>
                  </div>

                  {justSubmitted && (
                    <div
                      key={submissionId}
                      className="w-full md:w-auto md:min-w-[280px] overflow-hidden rounded-lg border border-green-200 bg-green-50 dark:border-green-800 dark:bg-green-950 animate-in fade-in slide-in-from-top-1 duration-300"
                    >
                      <div className="flex items-center gap-2 px-4 py-3">
                        <CheckCircle2 className="h-4 w-4 shrink-0 text-green-600 dark:text-green-400" />
                        <span className="text-sm font-medium text-green-900 dark:text-green-100">Message sent successfully</span>
                      </div>
                      <div className="h-1 bg-green-200 dark:bg-green-800">
                        <div className="h-full bg-green-500 animate-[contact-success-bar_5s_linear_forwards]" />
                      </div>
                    </div>
                  )}
                </form>
              </Form>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </div>
  )
}
