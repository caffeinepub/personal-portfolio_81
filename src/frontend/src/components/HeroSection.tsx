import { ArrowDown, Download, Sparkles } from "lucide-react";
import { motion } from "motion/react";
import { useEffect, useState } from "react";

const TAGLINES = [
  "Video Editor",
  "Graphic Designer",
  "Motion Graphics Artist",
  "Brand Identity Creator",
];

function useTypewriter(words: string[], speed = 80, pause = 2000) {
  const [display, setDisplay] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIndex % words.length];

    const timeout = setTimeout(
      () => {
        if (!deleting) {
          if (charIndex < current.length) {
            setDisplay(current.slice(0, charIndex + 1));
            setCharIndex((c) => c + 1);
          } else {
            setTimeout(() => setDeleting(true), pause);
          }
        } else {
          if (charIndex > 0) {
            setDisplay(current.slice(0, charIndex - 1));
            setCharIndex((c) => c - 1);
          } else {
            setDeleting(false);
            setWordIndex((w) => (w + 1) % words.length);
          }
        }
      },
      deleting ? speed / 2 : speed,
    );

    return () => clearTimeout(timeout);
  }, [charIndex, deleting, wordIndex, words, speed, pause]);

  return display;
}

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.3 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  },
};

const RESUME_URL =
  "https://f0ef7496-4050-4afd-884b-dd28d529f09f.filesusr.com/ugd/af1713_c5e9fe18c3754c46b4f8bd52b04b26a0.pdf";

export default function HeroSection() {
  const typewriterText = useTypewriter(TAGLINES);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/assets/generated/hero-bg.dim_1920x1080.jpg')",
        }}
      />
      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
      {/* Radial glow */}
      <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 w-[400px] h-[400px] rounded-full bg-accent/5 blur-[100px] pointer-events-none" />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(oklch(var(--gold)) 1px, transparent 1px), linear-gradient(90deg, oklch(var(--gold)) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      <div className="container mx-auto px-6 max-w-6xl relative z-10 pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-6"
          >
            {/* Badge */}
            <motion.div variants={itemVariants}>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold mono bg-primary/10 text-gold border border-gold/20">
                <Sparkles className="w-3 h-3" />
                Available for hire
              </span>
            </motion.div>

            {/* Heading */}
            <motion.div variants={itemVariants} className="space-y-1">
              <p className="text-muted-foreground text-sm font-medium tracking-widest uppercase mono">
                Hello, I'm
              </p>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-display font-black leading-none tracking-tight">
                <span className="text-foreground">HITESH</span>
                <br />
                <span className="gradient-text glow-gold">KUMAWAT</span>
              </h1>
            </motion.div>

            {/* Typewriter tagline */}
            <motion.div variants={itemVariants} className="h-8">
              <p className="text-xl sm:text-2xl font-semibold text-muted-foreground">
                <span className="text-foreground">{typewriterText}</span>
                <span className="animate-blink text-gold ml-0.5">|</span>
              </p>
            </motion.div>

            {/* Bio */}
            <motion.p
              variants={itemVariants}
              className="text-base text-muted-foreground leading-relaxed max-w-lg"
            >
              Digital Artist and Multidisciplinary Designer with over 3 years of
              experience working with YouTube creators. Specializing in brand
              development, motion graphics, and storytelling through visuals
              that captivate and connect.
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-3"
            >
              <button
                type="button"
                data-ocid="hero.primary_button"
                onClick={() => scrollToSection("projects")}
                className="group flex items-center gap-2 px-7 py-3.5 rounded-lg bg-primary text-primary-foreground font-semibold text-sm transition-all duration-300 hover:scale-105 shadow-gold-sm hover:shadow-gold-lg"
              >
                View My Work
                <ArrowDown className="w-4 h-4 rotate-[-90deg] group-hover:translate-x-1 transition-transform" />
              </button>
              <a
                href={RESUME_URL}
                target="_blank"
                rel="noopener noreferrer"
                data-ocid="hero.secondary_button"
                className="flex items-center gap-2 px-7 py-3.5 rounded-lg border border-border text-foreground font-semibold text-sm transition-all duration-300 hover:border-gold/40 hover:bg-secondary hover:scale-105"
              >
                <Download className="w-4 h-4" />
                Download CV
              </a>
            </motion.div>

            {/* Stats row */}
            <motion.div
              variants={itemVariants}
              className="flex gap-8 pt-4 border-t border-border"
            >
              {[
                { value: "3+", label: "Years Experience" },
                { value: "3", label: "Service Categories" },
                { value: "50+", label: "YouTube Creators" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="text-2xl font-display font-bold text-gold">
                    {stat.value}
                  </p>
                  <p className="text-xs text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: Avatar */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85, x: 40 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="flex justify-center lg:justify-end relative"
          >
            {/* Decorative rings */}
            <div
              className="absolute w-[340px] h-[340px] rounded-full border border-gold/10 animate-float"
              style={{ animationDelay: "0s" }}
            />
            <div
              className="absolute w-[380px] h-[380px] rounded-full border border-teal/10 animate-float"
              style={{ animationDelay: "-1.5s" }}
            />
            <div
              className="absolute w-[420px] h-[420px] rounded-full border border-gold/5 animate-float"
              style={{ animationDelay: "-3s" }}
            />

            {/* Avatar container */}
            <div className="relative w-[280px] h-[280px] sm:w-[320px] sm:h-[320px]">
              {/* Glow behind avatar */}
              <div className="absolute inset-4 rounded-full bg-primary/20 blur-2xl animate-pulse-glow" />

              {/* Avatar image */}
              <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-gold/30 shadow-gold-lg">
                <img
                  src="/assets/generated/avatar-hitesh.dim_400x400.png"
                  alt="Hitesh Kumawat"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/20" />
              </div>

              {/* Floating badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2, type: "spring", bounce: 0.5 }}
                className="absolute -bottom-2 -right-4 glass-card rounded-xl px-3 py-2 shadow-xl border border-border"
              >
                <p className="text-xs font-semibold text-foreground">
                  Video Editor
                </p>
                <div className="flex items-center gap-1 mt-0.5">
                  <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  <p className="text-xs text-muted-foreground">Open to work</p>
                </div>
              </motion.div>

              {/* Studio badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.5, type: "spring", bounce: 0.5 }}
                className="absolute -top-2 -left-4 glass-card rounded-xl px-3 py-2 shadow-xl border border-gold/20"
              >
                <p className="text-xs font-mono text-gold font-bold">
                  Studio Shodwe
                </p>
                <p className="text-xs text-muted-foreground">Mumbai, India</p>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <p className="text-xs text-muted-foreground tracking-widest uppercase mono">
            Scroll
          </p>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{
              repeat: Number.POSITIVE_INFINITY,
              duration: 1.5,
              ease: "easeInOut",
            }}
          >
            <ArrowDown className="w-4 h-4 text-gold/60" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
