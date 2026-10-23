import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Archive",
  description: "A developing index of independent artists, releases, and labels.",
};

const sampleRecords = [
  { type: "ARTIST", name: "Example Artist A", detail: "Electronic / Sample record", year: "—" },
  { type: "RELEASE", name: "Untitled Study 01", detail: "Independent / Sample record", year: "2024" },
  { type: "LABEL", name: "Signal Practice", detail: "Independent / Sample record", year: "—" },
];

export default function ArchivePage() {
  return (
    <section className="section-wrap page-section">
      <div className="eyebrow">INDEX / CATALOGUE / CONNECTIONS</div>
      <h1 className="page-title">The <span>Archive.</span></h1>
      <p className="page-lede">
        A structured, source-aware index of artists, releases, and labels.
        This starter uses illustrative records to establish the layout.
      </p>
      <div className="archive-notice">
        <strong>DEMO RECORDS</strong>
        <span>The entries below are fictional examples. Replace them with verified records and source links before launch.</span>
      </div>
      <div className="archive-table" role="table" aria-label="Sample archive records">
        <div className="archive-row archive-header" role="row">
          <span role="columnheader">TYPE</span><span role="columnheader">NAME</span><span role="columnheader">DETAIL</span><span role="columnheader">YEAR</span>
        </div>
        {sampleRecords.map((record) => (
          <div className="archive-row" role="row" key={record.name}>
            <span className="record-type" role="cell">{record.type}</span>
            <strong role="cell">{record.name}</strong>
            <span role="cell">{record.detail}</span>
            <span role="cell">{record.year}</span>
          </div>
        ))}
      </div>
      <p className="small-note">
        Next implementation: load records from the JSON files in `/data`, then
        add search and filters for type, year, genre, and location.
      </p>
    </section>
  );
}
