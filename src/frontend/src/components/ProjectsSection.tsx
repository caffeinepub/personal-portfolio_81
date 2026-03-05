import { ExternalLink, Play } from "lucide-react";
import { motion } from "motion/react";

const projects = [
  {
    title: "Video Editing",
    type: "Video Edit",
    year: "2025",
    description:
      "High-retention YouTube video editing with strong hooks, seamless pacing, and engaging storytelling to boost creator presence and audience engagement.",
    tags: ["Adobe Premiere Pro", "DaVinci Resolve", "After Effects"],
    gradient: "from-gold/20 to-teal/10",
    accent: "border-gold/20",
    number: "01",
    image: "/assets/generated/project-video-edit.dim_800x500.jpg",
    samplesLink:
      "https://drive.google.com/drive/folders/17sGkK0NKEoOIaesrC_Ymn02tWfvR4nny?usp=sharing",
  },
  {
    title: "Logo Design",
    type: "Logo",
    year: "2022–2025",
    description:
      "Modern, impactful logo design and complete brand identity development for creators and businesses. From concept to complete visual identity.",
    tags: ["Photoshop", "Illustrator", "Brand Identity"],
    gradient: "from-teal/20 to-primary/10",
    accent: "border-teal/20",
    number: "02",
    image: "/assets/generated/project-logo-design.dim_800x500.jpg",
    samplesLink: null,
  },
  {
    title: "Thumbnail Design",
    type: "Thumbnail Design",
    year: "2022–2025",
    description:
      "Eye-catching YouTube thumbnail designs crafted to maximize click-through rates and audience engagement for creators across multiple niches.",
    tags: ["Photoshop", "Typography", "CTR Optimization"],
    gradient: "from-primary/15 to-gold/10",
    accent: "border-gold/15",
    number: "03",
    image: "/assets/generated/project-thumbnail.dim_800x500.jpg",
    samplesLink: null,
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-28 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-surface/30" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-teal/3 blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 flex flex-col sm:flex-row sm:items-end gap-4 justify-between"
        >
          <div>
            <p className="text-xs font-semibold mono tracking-widest uppercase text-gold mb-3">
              02 — Work
            </p>
            <h2 className="text-4xl sm:text-5xl font-display font-bold text-foreground">
              Featured Work
            </h2>
            <div className="section-divider mt-4 max-w-xs" />
          </div>
          <p className="text-sm font-medium text-muted-foreground">
            Studio Shodwe · Mumbai, India
          </p>
        </motion.div>

        {/* Projects grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project, i) => (
            <motion.article
              key={project.title}
              data-ocid={`projects.item.${i + 1}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                delay: i * 0.08,
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
              className={`group relative glass-card rounded-2xl overflow-hidden border ${project.accent} hover:shadow-xl transition-shadow cursor-default`}
            >
              {/* Project Image */}
              <div className="relative h-44 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-50`}
                />
                {/* Year badge */}
                <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-background/70 backdrop-blur-sm text-xs font-mono text-muted-foreground border border-border">
                  {project.year}
                </div>
                {/* Type badge */}
                <div className="absolute top-3 right-3 px-2.5 py-1 rounded-md bg-primary/20 backdrop-blur-sm text-xs font-semibold text-gold border border-gold/20">
                  {project.type}
                </div>
              </div>

              {/* Background gradient on hover */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
              />

              <div className="relative p-6 flex flex-col h-full">
                {/* Number */}
                <span className="absolute top-4 right-5 font-display font-black text-5xl text-foreground/5 select-none group-hover:text-foreground/8 transition-colors">
                  {project.number}
                </span>

                {/* Title */}
                <h3 className="text-lg font-display font-bold text-foreground mb-3 pr-10 group-hover:text-gold transition-colors duration-300">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-muted-foreground leading-relaxed flex-1 mb-5">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-md text-xs font-mono font-medium bg-secondary text-muted-foreground border border-border"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex gap-2">
                  {project.samplesLink ? (
                    <a
                      href={project.samplesLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      data-ocid={`projects.item.${i + 1}.button`}
                      className="flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-semibold bg-primary/10 text-gold border border-gold/20 hover:bg-primary/20 transition-colors"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      View Samples
                    </a>
                  ) : (
                    <button
                      type="button"
                      className="flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-semibold bg-primary/10 text-gold border border-gold/20 hover:bg-primary/20 transition-colors"
                      onClick={() => {
                        document
                          .getElementById("contact")
                          ?.scrollIntoView({ behavior: "smooth" });
                      }}
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      View Work
                    </button>
                  )}
                  <button
                    type="button"
                    className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-semibold bg-secondary text-muted-foreground border border-border hover:text-foreground transition-colors"
                    onClick={() => {
                      document
                        .getElementById("contact")
                        ?.scrollIntoView({ behavior: "smooth" });
                    }}
                  >
                    <Play className="w-3.5 h-3.5" />
                    Inquire
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
