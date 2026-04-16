import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { MapPin, Phone, Clock, Mail, Send } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact & Location — Uptown Fresh Market" },
      { name: "description", content: "Find Uptown Fresh Market at 4501 Clarksville Pike, Nashville, TN. Get directions, hours, phone number, and send us a message." },
      { property: "og:title", content: "Contact & Location — Uptown Fresh Market" },
      { property: "og:description", content: "Find us at 4501 Clarksville Pike, Nashville. Get directions, hours & contact info." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formState.name.trim()) newErrors.name = "Name is required";
    if (!formState.email.trim()) newErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formState.email)) newErrors.email = "Invalid email";
    if (!formState.message.trim()) newErrors.message = "Message is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setSubmitted(true);
      setFormState({ name: "", email: "", message: "" });
    }
  };

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <SectionHeading
        title="Contact & Location"
        subtitle="We'd love to hear from you — visit us or send a message"
      />

      <div className="mt-10 grid gap-8 lg:grid-cols-2">
        {/* Info + Map */}
        <div className="space-y-6">
          <Card className="border-border">
            <CardContent className="space-y-5 p-6">
              <div className="flex gap-3">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <div>
                  <h3 className="font-semibold text-foreground">Address</h3>
                  <p className="text-sm text-muted-foreground">4501 Clarksville Pike<br />Nashville, TN 37218</p>
                  <a
                    href="https://www.google.com/maps/dir/?api=1&destination=4501+Clarksville+Pike+Nashville+TN+37218"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 inline-block text-sm font-medium text-primary hover:underline"
                  >
                    Get Directions →
                  </a>
                </div>
              </div>

              <div className="flex gap-3">
                <Phone className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <div>
                  <h3 className="font-semibold text-foreground">Phone</h3>
                  <a href="tel:+16155551234" className="text-sm text-muted-foreground hover:text-primary">(615) 555-1234</a>
                  <div className="mt-1">
                    <a href="tel:+16155551234">
                      <Button size="sm" variant="outline" className="gap-1.5 sm:hidden">
                        <Phone className="h-3.5 w-3.5" /> Call Now
                      </Button>
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex gap-3">
                <Mail className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <div>
                  <h3 className="font-semibold text-foreground">Email</h3>
                  <a href="mailto:hello@uptownfreshmarket.com" className="text-sm text-muted-foreground hover:text-primary">hello@uptownfreshmarket.com</a>
                </div>
              </div>

              <div className="flex gap-3">
                <Clock className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <div>
                  <h3 className="font-semibold text-foreground">Hours</h3>
                  <div className="text-sm text-muted-foreground space-y-0.5">
                    <p>Monday – Saturday: 7:00 AM – 9:00 PM</p>
                    <p>Sunday: 8:00 AM – 8:00 PM</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Map */}
          <div className="aspect-[16/10] overflow-hidden rounded-lg border border-border">
            <iframe
              title="Uptown Fresh Market Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3220.5!2d-86.83!3d36.2!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzbCsDEyJzAwLjAiTiA4NsKwNDknNDguMCJX!5e0!3m2!1sen!2sus!4v1"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        {/* Feedback Form */}
        <Card className="border-border">
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold text-foreground">Send Us a Message</h3>
            <p className="mt-1 text-sm text-muted-foreground">Questions, feedback, or catering inquiries — we're here to help.</p>

            {submitted ? (
              <div className="mt-8 rounded-lg bg-primary/10 p-6 text-center">
                <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-primary/20">
                  <Send className="h-6 w-6 text-primary" />
                </div>
                <h4 className="font-semibold text-foreground">Message Sent!</h4>
                <p className="mt-1 text-sm text-muted-foreground">Thanks for reaching out. We'll get back to you soon.</p>
                <Button variant="outline" className="mt-4" onClick={() => setSubmitted(false)}>
                  Send Another Message
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-6 space-y-4" noValidate>
                <div>
                  <Label htmlFor="name">Name *</Label>
                  <Input
                    id="name"
                    value={formState.name}
                    onChange={(e) => setFormState((s) => ({ ...s, name: e.target.value }))}
                    placeholder="Your name"
                    maxLength={100}
                    aria-invalid={!!errors.name}
                  />
                  {errors.name && <p className="mt-1 text-xs text-destructive">{errors.name}</p>}
                </div>

                <div>
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formState.email}
                    onChange={(e) => setFormState((s) => ({ ...s, email: e.target.value }))}
                    placeholder="you@example.com"
                    maxLength={255}
                    aria-invalid={!!errors.email}
                  />
                  {errors.email && <p className="mt-1 text-xs text-destructive">{errors.email}</p>}
                </div>

                <div>
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    value={formState.message}
                    onChange={(e) => setFormState((s) => ({ ...s, message: e.target.value }))}
                    placeholder="How can we help?"
                    rows={5}
                    maxLength={1000}
                    aria-invalid={!!errors.message}
                  />
                  {errors.message && <p className="mt-1 text-xs text-destructive">{errors.message}</p>}
                </div>

                <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90 gap-2">
                  <Send className="h-4 w-4" /> Send Message
                </Button>
              </form>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
