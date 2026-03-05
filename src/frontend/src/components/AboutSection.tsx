import { Download, Film, Palette, Zap } from "lucide-react";
import { motion } from "motion/react";

const RESUME_URL =
  "https://f0ef7496-4050-4afd-884b-dd28d529f09f.filesusr.com/ugd/af1713_c5e9fe18c3754c46b4f8bd52b04b26a0.pdf";

const stats = [
  {
    value: "3+",
    label: "Years of Experience",
    icon: Film,
    color: "text-gold",
  },
  {
    value: "3",
    label: "Service Categories",
    icon: Palette,
    color: "text-teal",
  },
  { value: "50+", label: "YouTube Creators", icon: Zap, color: "text-gold" },
];

const highlights = [
  { label: "Location", value: "Mumbai, India" },
  { label: "Company", value: "Studio Shodwe" },
  { label: "Specialization", value: "Video Editing & Design" },
  { label: "Focus", value: "YouTube & Brand Identity" },
];

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  },
};

export default function AboutSection() {
  return (
    <section id="about" className="py-28 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-primary/3 blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-6xl">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-xs font-semibold mono tracking-widest uppercase text-gold mb-3">
            01 — About Me
          </p>
          <h2 className="text-4xl sm:text-5xl font-display font-bold text-foreground">
            Who I Am
          </h2>
          <div className="section-divider mt-4 max-w-xs" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            transition={{ staggerChildren: 0.1 }}
            className="space-y-6"
          >
            <motion.p
              variants={itemVariants}
              className="text-lg text-muted-foreground leading-relaxed"
            >
              I'm{" "}
              <span className="text-foreground font-semibold">
                Hitesh Kumawat
              </span>
              , a creative{" "}
              <span className="text-foreground font-semibold">
                Video Editor and Designer
              </span>{" "}
              with over three years of experience leading projects at Studio
              Shodwe. I specialize in brand development, logo design, motion
              graphics, and storytelling through visuals that captivate and
              connect with audiences.
            </motion.p>
            <motion.p
              variants={itemVariants}
              className="text-base text-muted-foreground leading-relaxed"
            >
              From crafting high-retention YouTube videos to designing modern,
              impactful logos and social media visuals, I combine creativity
              with strategy to elevate every project I work on. My editing style
              focuses on strong hooks, seamless pacing, and engaging
              storytelling — helping brands and creators boost their presence
              and audience engagement.
            </motion.p>
            <motion.p
              variants={itemVariants}
              className="text-base text-muted-foreground leading-relaxed"
            >
              Driven by curiosity and a love for continuous learning, I approach
              every project with an out-of-the-box mindset and a passion for
              creating visuals that make a lasting impression. Whether it's
              developing a complete brand identity or editing viral short-form
              content, I aim to deliver work that not only looks great but truly
              performs.
            </motion.p>

            {/* Quick highlights grid */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-2 gap-3 pt-4"
            >
              {highlights.map((h) => (
                <div
                  key={h.label}
                  className="bg-surface2 rounded-lg px-4 py-3 border border-border"
                >
                  <p className="text-xs text-muted-foreground mono mb-0.5">
                    {h.label}
                  </p>
                  <p className="text-sm font-semibold text-foreground">
                    {h.value}
                  </p>
                </div>
              ))}
            </motion.div>

            <motion.div variants={itemVariants}>
              <a
                href={RESUME_URL}
                target="_blank"
                rel="noopener noreferrer"
                data-ocid="about.resume.button"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-gold/30 text-gold text-sm font-semibold hover:bg-primary/10 transition-colors"
              >
                <Download className="w-4 h-4" />
                Download Résumé
              </a>
            </motion.div>
          </motion.div>

          {/* Right: Stats + Visual */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-5"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: i * 0.12,
                  duration: 0.6,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="glass-card rounded-2xl p-6 flex items-center gap-6 hover:border-gold/20 transition-colors group"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/15 transition-colors">
                  <stat.icon className={`w-6 h-6 ${stat.color}`} />
                </div>
                <div>
                  <p
                    className={`text-4xl font-display font-black ${stat.color}`}
                  >
                    {stat.value}
                  </p>
                  <p className="text-sm text-muted-foreground mt-0.5">
                    {stat.label}
                  </p>
                </div>
                {/* Decorative number */}
                <div className="ml-auto opacity-5 font-display font-black text-7xl text-foreground select-none">
                  {i + 1}
                </div>
              </motion.div>
            ))}

            {/* Creative info panel */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="bg-midnight rounded-2xl p-5 border border-border font-mono text-sm"
            >
              <div className="flex gap-1.5 mb-3">
                <div className="w-3 h-3 rounded-full bg-red-500/60" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                <div className="w-3 h-3 rounded-full bg-green-500/60" />
              </div>
              <div className="space-y-1">
                <p className="text-muted-foreground">
                  <span className="text-teal">const</span>{" "}
                  <span className="text-gold">creator</span>{" "}
                  <span className="text-foreground">= {"{"}</span>
                </p>
                <p className="text-muted-foreground pl-4">
                  <span className="text-foreground">name:</span>{" "}
                  <span className="text-green-400">"Hitesh Kumawat"</span>
                  <span className="text-foreground">,</span>
                </p>
                <p className="text-muted-foreground pl-4">
                  <span className="text-foreground">role:</span>{" "}
                  <span className="text-green-400">
                    "Video Editor & Designer"
                  </span>
                  <span className="text-foreground">,</span>
                </p>
                <p className="text-muted-foreground pl-4">
                  <span className="text-foreground">studio:</span>{" "}
                  <span className="text-teal">"Studio Shodwe"</span>
                  <span className="text-foreground">,</span>
                </p>
                <p className="text-muted-foreground pl-4">
                  <span className="text-foreground">available:</span>{" "}
                  <span className="text-teal">true</span>
                </p>
                <p className="text-foreground">
                  {"}"}
                  <span className="text-gold">;</span>
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
