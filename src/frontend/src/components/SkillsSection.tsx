import { Film, Palette, TrendingUp } from "lucide-react";
import { motion } from "motion/react";
import {
  SiAdobeaftereffects,
  SiAdobeillustrator,
  SiAdobephotoshop,
  SiAdobepremierepro,
  SiFigma,
  SiYoutube,
} from "react-icons/si";

// Custom icon components for tools without react-icons entries
function DaVinciIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      role="img"
      aria-label="DaVinci Resolve"
    >
      <title>DaVinci Resolve</title>
      <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 18c-4.418 0-8-3.582-8-8s3.582-8 8-8 8 3.582 8 8-3.582 8-8 8zm-1-13v6l5 3-1.5-1.5-3.5-2V7z" />
    </svg>
  );
}

const skillGroups = [
  {
    category: "Video Editing",
    icon: Film,
    color: "gold",
    borderClass: "border-gold/20",
    skills: [
      { name: "Adobe Premiere Pro", icon: SiAdobepremierepro, level: 95 },
      { name: "After Effects", icon: SiAdobeaftereffects, level: 88 },
      { name: "DaVinci Resolve", icon: DaVinciIcon, level: 85 },
      { name: "Motion Graphics", icon: Film, level: 90 },
      { name: "Color Grading", icon: Palette, level: 82 },
    ],
  },
  {
    category: "Design",
    icon: Palette,
    color: "teal",
    borderClass: "border-teal/20",
    skills: [
      { name: "Adobe Photoshop", icon: SiAdobephotoshop, level: 92 },
      { name: "Adobe Illustrator", icon: SiAdobeillustrator, level: 88 },
      { name: "Logo Design", icon: Palette, level: 90 },
      { name: "Brand Identity", icon: Palette, level: 85 },
      { name: "Thumbnail Design", icon: SiFigma, level: 95 },
    ],
  },
  {
    category: "Strategy",
    icon: TrendingUp,
    color: "gold",
    borderClass: "border-gold/15",
    skills: [
      { name: "YouTube SEO", icon: SiYoutube, level: 80 },
      { name: "Storytelling", icon: Film, level: 92 },
      { name: "Content Strategy", icon: TrendingUp, level: 85 },
      { name: "Brand Development", icon: Palette, level: 88 },
      { name: "Audience Engagement", icon: TrendingUp, level: 82 },
    ],
  },
];

function SkillBar({
  name,
  level,
  Icon,
  colorClass,
}: {
  name: string;
  level: number;
  Icon: React.ComponentType<{ className?: string }>;
  colorClass: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="group"
    >
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2.5">
          <Icon className={`w-4 h-4 ${colorClass}`} />
          <span className="text-sm font-medium text-foreground">{name}</span>
        </div>
        <span className="text-xs font-mono text-muted-foreground">
          {level}%
        </span>
      </div>
      <div className="h-1.5 bg-secondary rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1.1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className={`h-full rounded-full bg-gradient-to-r ${
            colorClass.includes("gold")
              ? "from-gold to-gold/60"
              : "from-teal to-teal/60"
          }`}
        />
      </div>
    </motion.div>
  );
}

export default function SkillsSection() {
  return (
    <section id="skills" className="py-28 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-primary/3 blur-[180px] pointer-events-none" />

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
            03 — Expertise
          </p>
          <h2 className="text-4xl sm:text-5xl font-display font-bold text-foreground">
            Skills & Tools
          </h2>
          <div className="section-divider mt-4 max-w-xs" />
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6">
          {skillGroups.map((group, groupIdx) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                delay: groupIdx * 0.12,
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1],
              }}
              className={`glass-card rounded-2xl p-6 border ${group.borderClass}`}
            >
              {/* Category header */}
              <div className="flex items-center gap-3 mb-6">
                <div
                  className={`w-2 h-8 rounded-full ${group.color === "gold" ? "bg-gold" : "bg-teal"}`}
                />
                <div>
                  <p className="text-xs mono text-muted-foreground uppercase tracking-widest">
                    Category {String(groupIdx + 1).padStart(2, "0")}
                  </p>
                  <h3 className="font-display font-bold text-lg text-foreground">
                    {group.category}
                  </h3>
                </div>
              </div>

              {/* Skills list */}
              <div className="space-y-5">
                {group.skills.map((skill) => (
                  <SkillBar
                    key={skill.name}
                    name={skill.name}
                    level={skill.level}
                    Icon={skill.icon}
                    colorClass={
                      group.color === "gold" ? "text-gold" : "text-teal"
                    }
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional tech badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-12 text-center"
        >
          <p className="text-sm text-muted-foreground mb-6">
            Also experienced with:
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {[
              "Short-form Content",
              "Social Media Visuals",
              "Reels Editing",
              "Color Theory",
              "Typography",
              "Visual Storytelling",
              "YouTube Optimization",
              "Hook Writing",
              "Cinematic Grading",
              "Motion Tracking",
              "Luts & Presets",
              "Viral Content Strategy",
            ].map((tech) => (
              <span
                key={tech}
                className="px-3 py-1.5 rounded-full text-xs font-mono font-medium bg-secondary text-muted-foreground border border-border hover:border-gold/30 hover:text-gold transition-colors cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
