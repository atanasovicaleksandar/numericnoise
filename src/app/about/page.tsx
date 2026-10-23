import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "About NumericNoise, its editorial mission, and research methods.",
};

export default function AboutPage() {
  return (
    <section className="section-wrap page-section about-page">
      <div className="eyebrow">What do we do?</div>
      <h1 className="page-title">We take something creative and free as alternative art.<br /><span>Then suck every joy out of it by conducting rigorous statistical analysis.</span></h1>
      <p className="page-lede">
        NumericNoise is built with the aim to approach data through a medium more reserved for creatives.
      </p>
      <div className="about-columns">
        <div>
          <h2>Why?</h2>
          <p>
            Quite easy. Infodumping in a structured form.
            Having a way to go over certain topics and ideas,
            while also learning about statistical approaches and data analysis
          </p>
        </div>
        <div>
          <h2>What we do?</h2>
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
