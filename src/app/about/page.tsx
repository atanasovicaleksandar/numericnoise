import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "About NumericNoise, its editorial mission, and research methods.",
};

export default function AboutPage() {
  return (
    <section className="section-wrap page-section about-page">
      <div className="eyebrow">PURPOSE / METHOD / POSITION</div>
      <h1 className="page-title">Numbers are tools.<br /><span>Culture is the context.</span></h1>
      <p className="page-lede">
        NumericNoise is an independent platform for exploring alternative
        music, visual art, and underground culture through data and editorial
        research.
      </p>
      <div className="about-columns">
        <div>
          <h2>Why NumericNoise?</h2>
          <p>
            Cultural scenes generate traces: releases, collaborations, venues,
            formats, dates, networks, and documents. Statistical methods can
            help us notice patterns in those traces, provided we remember what
            the data leaves out.
          </p>
        </div>
        <div>
          <h2>How we work</h2>
          <p>
            Research should state its sources, explain its methods, distinguish
            observations from interpretations, and disclose uncertainty.
            Archives should preserve context instead of pretending to be
            complete.
          </p>
        </div>
      </div>
      <div className="about-note">
        <span className="eyebrow">EDITORIAL PRINCIPLE</span>
        <p>Make the method visible. Make the interpretation debatable.</p>
      </div>
    </section>
  );
}
