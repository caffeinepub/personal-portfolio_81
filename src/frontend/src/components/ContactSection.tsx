import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  AlertCircle,
  CheckCircle2,
  Clock,
  Loader2,
  Mail,
  MapPin,
  Phone,
  Send,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { SiInstagram, SiYoutube } from "react-icons/si";
import { useSubmitMessage } from "../hooks/useQueries";

const socialLinks = [
  {
    name: "YouTube",
    icon: SiYoutube,
    href: "https://youtube.com",
    color: "hover:text-red-400",
  },
  {
    name: "Instagram",
    icon: SiInstagram,
    href: "https://instagram.com",
    color: "hover:text-pink-400",
  },
];

const contactInfo = [
  { icon: Mail, label: "Email", value: "hiteshkumawat854@gmail.com" },
  { icon: Phone, label: "Phone", value: "+91 8655380331" },
  { icon: MapPin, label: "Location", value: "Mumbai, India" },
  { icon: Clock, label: "Response time", value: "Within 24 hours" },
];

export default function ContactSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const { mutateAsync, isPending, isError, error } = useSubmitMessage();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) return;

    try {
      await mutateAsync({
        name: name.trim(),
        email: email.trim(),
        message: message.trim(),
      });
      setSubmitted(true);
      setName("");
      setEmail("");
      setMessage("");
    } catch {
      // error handled via isError
    }
  };

  return (
    <section id="contact" className="py-28 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-surface/20" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] rounded-full bg-primary/4 blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-xs font-semibold mono tracking-widest uppercase text-gold mb-3">
            04 — Contact
          </p>
          <h2 className="text-4xl sm:text-5xl font-display font-bold text-foreground">
            Let's Work Together
          </h2>
          <div className="section-divider mt-4 max-w-xs" />
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10 items-start">
          {/* Left: Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-2 space-y-8"
          >
            <div className="space-y-4">
              <h3 className="text-xl font-display font-bold text-foreground">
                Have a project in mind?
              </h3>
              <p className="text-muted-foreground leading-relaxed text-sm">
                I'm always open to exciting opportunities — whether it's video
                editing for your YouTube channel, logo design, brand identity,
                or thumbnail creation. Let's make something great together.
              </p>
            </div>

            {/* Contact details */}
            <div className="space-y-4">
              {contactInfo.map((item) => (
                <div key={item.label} className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-4 h-4 text-gold" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground mono">
                      {item.label}
                    </p>
                    {item.label === "Email" ? (
                      <a
                        href={`mailto:${item.value}`}
                        className="text-sm font-medium text-foreground hover:text-gold transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : item.label === "Phone" ? (
                      <a
                        href={`tel:${item.value.replace(/\s/g, "")}`}
                        className="text-sm font-medium text-foreground hover:text-gold transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-sm font-medium text-foreground">
                        {item.value}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Social links */}
            <div className="space-y-3">
              <p className="text-xs font-semibold mono tracking-widest uppercase text-muted-foreground">
                Find me online
              </p>
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    title={social.name}
                    className={`w-10 h-10 rounded-lg glass-card flex items-center justify-center text-muted-foreground ${social.color} transition-all duration-200 hover:scale-110 hover:border-gold/20`}
                  >
                    <social.icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.65,
              delay: 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="lg:col-span-3"
          >
            <div className="glass-card rounded-2xl p-7 border border-border">
              <AnimatePresence mode="wait">
                {submitted ? (
                  /* Success state */
                  <motion.div
                    key="success"
                    data-ocid="contact.success_state"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.4, type: "spring", bounce: 0.3 }}
                    className="py-12 text-center space-y-4"
                  >
                    <div className="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-8 h-8 text-green-400" />
                    </div>
                    <h3 className="text-xl font-display font-bold text-foreground">
                      Message Sent!
                    </h3>
                    <p className="text-muted-foreground text-sm max-w-xs mx-auto">
                      Thanks for reaching out! Hitesh will get back to you
                      within 24 hours.
                    </p>
                    <button
                      type="button"
                      onClick={() => setSubmitted(false)}
                      className="mt-4 text-sm font-medium text-gold hover:underline"
                    >
                      Send another message
                    </button>
                  </motion.div>
                ) : (
                  /* Form */
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="space-y-5"
                  >
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label
                          htmlFor="contact-name"
                          className="text-sm font-medium text-muted-foreground"
                        >
                          Your Name *
                        </Label>
                        <Input
                          id="contact-name"
                          data-ocid="contact.name.input"
                          type="text"
                          placeholder="John Doe"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          required
                          className="bg-secondary border-border focus:border-gold/40 transition-colors"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label
                          htmlFor="contact-email"
                          className="text-sm font-medium text-muted-foreground"
                        >
                          Email Address *
                        </Label>
                        <Input
                          id="contact-email"
                          data-ocid="contact.email.input"
                          type="email"
                          placeholder="john@example.com"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                          className="bg-secondary border-border focus:border-gold/40 transition-colors"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label
                        htmlFor="contact-message"
                        className="text-sm font-medium text-muted-foreground"
                      >
                        Message *
                      </Label>
                      <Textarea
                        id="contact-message"
                        data-ocid="contact.message.textarea"
                        placeholder="Tell me about your project — YouTube channel, logo design, thumbnail work, or brand identity..."
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                        rows={5}
                        className="bg-secondary border-border focus:border-gold/40 transition-colors resize-none"
                      />
                    </div>

                    {/* Error state */}
                    <AnimatePresence>
                      {isError && (
                        <motion.div
                          data-ocid="contact.error_state"
                          initial={{ opacity: 0, y: -8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -8 }}
                          className="flex items-center gap-2.5 p-3 rounded-lg bg-destructive/10 border border-destructive/20 text-destructive text-sm"
                        >
                          <AlertCircle className="w-4 h-4 flex-shrink-0" />
                          <span>
                            {error instanceof Error
                              ? error.message
                              : "Failed to send message. Please try again."}
                          </span>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* Submit button */}
                    <button
                      type="submit"
                      data-ocid="contact.submit_button"
                      disabled={isPending || !name || !email || !message}
                      className="w-full flex items-center justify-center gap-2.5 py-3.5 rounded-lg bg-primary text-primary-foreground font-semibold text-sm transition-all duration-300 hover:bg-primary/90 hover:shadow-gold-sm disabled:opacity-50 disabled:cursor-not-allowed hover:scale-[1.01] active:scale-[0.99]"
                    >
                      {isPending ? (
                        <>
                          <Loader2
                            data-ocid="contact.loading_state"
                            className="w-4 h-4 animate-spin"
                          />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          Send Message
                        </>
                      )}
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
