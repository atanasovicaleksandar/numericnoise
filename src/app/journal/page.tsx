import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Journal",
  description: "Essays, field notes, and research from NumericNoise.",
};

export default function JournalPage() {
  return (
    <section className="section-wrap page-section">
      <div className="eyebrow">PUBLICATION / 001</div>
      <h1 className="page-title">The <span>Journal.</span></h1>
      <p className="page-lede">
        Essays, field notes, interviews, and visual reports at the intersection
        of alternative culture and analytical thinking.
      </p>
      <article className="feature-article">
        <div className="article-meta">FIELD NOTE · EDITORIAL DIRECTION</div>
        <h2>Listening for patterns in the noise</h2>
        <p>
          NumericNoise is being built around a simple question: what can
          careful analysis reveal about culture—and what should remain open to
          interpretation?
        </p>
        <p className="muted-note">
          This is a starter feature, not a published research finding. Replace
          it with an original essay before launch.
        </p>
        <Link className="text-link" href="/about">About the project <span aria-hidden="true">↗</span></Link>
      </article>
    </section>
  );
}
