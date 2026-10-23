import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Data Lab",
  description: "Statistical studies and visual experiments from NumericNoise.",
};

const steps = [
  ["01", "Question", "State what is being investigated and why it matters."],
  ["02", "Data", "Document sources, collection dates, definitions, and gaps."],
  ["03", "Analysis", "Show the method, assumptions, and uncertainty."],
  ["04", "Interpretation", "Explain what the results can—and cannot—tell us."],
];

export default function LabPage() {
  return (
    <section className="section-wrap page-section">
      <div className="eyebrow">RESEARCH / EXPERIMENTS / VISUALIZATION</div>
      <h1 className="page-title">The Data <span>Lab.</span></h1>
      <p className="page-lede">
        A working space for statistical inquiry into independent music,
        alternative art, and the cultural networks around them.
      </p>
      <div className="lab-panel">
        <div className="panel-top"><span>PROJECT 001</span><span>IN DEVELOPMENT</span></div>
        <h2>Mapping the independent signal</h2>
        <p>
          A proposed study of release activity across a carefully defined
          sample of independent labels. The published version will include
          the dataset, code or method notes, visualizations, and limitations.
        </p>
        <div className="placeholder-chart" aria-label="Decorative placeholder chart">
          {[32, 58, 41, 76, 53, 88, 47, 66, 37, 72, 55, 93, 45, 62, 35, 78, 50, 69, 42, 84, 57, 73, 38, 64].map((height, i) => (
            <span key={i} style={{ height: `${height}%` }} />
          ))}
        </div>
        <p className="chart-caption">ILLUSTRATIVE GRAPHIC — NOT REAL DATA</p>
      </div>
      <h2 className="subheading">The research standard</h2>
      <div className="method-grid">
        {steps.map(([number, title, description]) => (
          <div className="method-item" key={number}>
            <span className="project-number">{number}</span>
            <h3>{title}</h3>
            <p>{description}</p>
          </div>
        ))}
      </div>
      <p className="small-note">No results are presented as factual until the underlying data and method are documented.</p>
      <Link className="text-link" href="/archive">Explore the sample archive <span aria-hidden="true">↗</span></Link>
    </section>
  );
}
