import Link from "next/link";

const projects = [
  {
    number: "01",
    type: "VISUALIZATION EXPLAINED THROUGH A SIMPLE DATASET",
    title: "Musicians and Mortality",
    description:
      "A visual representation of musicians and how they die based on the genre. This is purely a visualization excersize and not an analysis",
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
    title: "Does alternative art stack against rigor of statistical approach?",
    description:
      "Taking an off handed comment made by a musician and testing it as a hypothesis (I'm looking at you Brian Eno).",
    href: "/journal",
  },
];

export default function HomePage() {
  return (
    <>
      <section className="hero section-wrap">
        <div className="eyebrow"><span className="signal-dot" /> Where creativity goes to die.</div>
        <h1>One source of truth<br />. <span>For stuff you never cared about.</span></h1>
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
          <div className="graphic-label label-right">I don't think this is what they meant by math rock...</div>
        </div>
      </section>

      <section className="section-wrap projects-section">
        <div className="section-heading">
          <span className="eyebrow">What's the frequenc,y Kanneth?</span>
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
          <p>Certain ideas should never get to see the light of day.<br /><span>Yet here we are...</span></p>
          <Link className="text-link" href="/about">Read our approach <span aria-hidden="true">↗</span></Link>
        </div>
      </section>
    </>
  );
}
