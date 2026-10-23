import Link from "next/link";

const projects = [
  {
    number: "01",
    type: "DATA STUDY / IN DEVELOPMENT",
    title: "Mapping the independent signal",
    description:
      "A study of how independent releases move through labels, scenes, and time. The first dataset and methodology will be published with the results.",
    href: "/lab",
  },
  {
    number: "02",
    type: "ARCHIVE / SAMPLE COLLECTION",
    title: "Names, labels, connections",
    description:
      "A growing index of artists, releases, and independent labels—with source notes and a focus on context over completeness.",
    href: "/archive",
  },
  {
    number: "03",
    type: "JOURNAL / EDITORIAL",
    title: "Notes from the noise floor",
    description:
      "Essays and field notes at the intersection of sound, visual culture, technology, and statistical inquiry.",
    href: "/journal",
  },
];

export default function HomePage() {
  return (
    <>
      <section className="hero section-wrap">
        <div className="eyebrow"><span className="signal-dot" /> INDEPENDENT RESEARCH PLATFORM · EST. 2026</div>
        <h1>Culture makes<br />noise. <span>We measure it.</span></h1>
        <div className="hero-bottom">
          <p className="hero-intro">
            NumericNoise explores alternative music, art, and underground
            culture through data, research, and visual experimentation.
          </p>
          <Link className="text-link" href="/lab">Explore the Data Lab <span aria-hidden="true">↗</span></Link>
        </div>
        <div className="hero-graphic" aria-label="Decorative abstract signal graphic">
          <div className="graphic-label label-left">SIGNAL / 001</div>
          <div className="signal-bars" aria-hidden="true">
            {Array.from({ length: 54 }, (_, i) => (
              <span key={i} style={{ height: `${12 + ((i * 37 + i * i * 11) % 83)}%` }} />
            ))}
          </div>
          <div className="graphic-label label-right">NOISE IS INFORMATION</div>
        </div>
      </section>

      <section className="section-wrap projects-section">
        <div className="section-heading">
          <span className="eyebrow">THE CURRENT FREQUENCY</span>
          <span className="muted-index">PROJECTS / 001—003</span>
        </div>
        <div className="project-list">
          {projects.map((project) => (
            <article className="project-row" key={project.number}>
              <span className="project-number">{project.number}</span>
              <div className="project-copy">
                <span className="eyebrow">{project.type}</span>
                <h2><Link href={project.href}>{project.title}</Link></h2>
                <p>{project.description}</p>
              </div>
              <Link className="round-arrow" href={project.href} aria-label={`Open ${project.title}`}>↗</Link>
            </article>
          ))}
        </div>
      </section>

      <section className="manifesto">
        <div className="section-wrap manifesto-inner">
          <span className="eyebrow">A WORKING PRINCIPLE</span>
          <p>Not everything that matters is easy to count.<br /><span>Not everything countable tells the whole story.</span></p>
          <Link className="text-link" href="/about">Read our approach <span aria-hidden="true">↗</span></Link>
        </div>
      </section>
    </>
  );
}
