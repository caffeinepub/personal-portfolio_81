import { Film, Heart } from "lucide-react";
import { SiInstagram, SiYoutube } from "react-icons/si";

const socialLinks = [
  { name: "YouTube", icon: SiYoutube, href: "https://youtube.com" },
  { name: "Instagram", icon: SiInstagram, href: "https://instagram.com" },
];

const quickLinks = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

const RESUME_URL =
  "https://f0ef7496-4050-4afd-884b-dd28d529f09f.filesusr.com/ugd/af1713_c5e9fe18c3754c46b4f8bd52b04b26a0.pdf";

export default function Footer() {
  const year = new Date().getFullYear();

  const handleNavClick = (href: string) => {
    const id = href.replace("#", "");
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-border bg-midnight">
      <div className="container mx-auto px-6 max-w-6xl py-12">
        <div className="grid sm:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div className="space-y-4">
            <button
              type="button"
              onClick={() => handleNavClick("#home")}
              className="flex items-center gap-2 group w-fit"
            >
              <div className="w-8 h-8 rounded-md bg-primary flex items-center justify-center shadow-gold-sm">
                <Film className="w-4 h-4 text-primary-foreground" />
              </div>
              <span className="font-display font-bold text-lg text-foreground group-hover:text-gold transition-colors">
                HK<span className="text-gold">.</span>
              </span>
            </button>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              Video Editor & Designer at Studio Shodwe, Mumbai. Crafting
              high-retention content and memorable brand identities.
            </p>
            <div className="flex gap-2">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="w-9 h-9 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-surface2 transition-all hover:scale-110"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div className="space-y-4">
            <h4 className="font-display font-bold text-sm text-foreground">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.href);
                    }}
                    className="text-sm text-muted-foreground hover:text-gold transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={RESUME_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-gold transition-colors"
                >
                  Download Resume
                </a>
              </li>
            </ul>
          </div>

          {/* CTA */}
          <div className="space-y-4">
            <h4 className="font-display font-bold text-sm text-foreground">
              Let's Connect
            </h4>
            <p className="text-sm text-muted-foreground">
              Need a video editor or designer? I'd love to work with you.
            </p>
            <p className="text-sm text-muted-foreground">
              <a
                href="mailto:hiteshkumawat854@gmail.com"
                className="text-gold hover:underline"
              >
                hiteshkumawat854@gmail.com
              </a>
            </p>
            <button
              type="button"
              onClick={() => handleNavClick("#contact")}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary/10 text-gold border border-gold/20 text-sm font-semibold hover:bg-primary/20 transition-colors"
            >
              Get in Touch
            </button>
          </div>
        </div>

        {/* Divider */}
        <div className="section-divider mb-6" />

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
          <p>© {year} Hitesh Kumawat · Studio Shodwe. All rights reserved.</p>
          <p className="flex items-center gap-1.5">
            Built with <Heart className="w-3 h-3 text-gold fill-gold" /> using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(window.location.hostname)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold hover:underline"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
