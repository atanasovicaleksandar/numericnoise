import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "NumericNoise — Data, sound & alternative culture",
    template: "%s — NumericNoise.Net",
  },
  description:
    "An independent research and publishing project exploring alternative music, art, scenes, and statistics.",
  metadataBase: new URL("https://numericnoise.net"),
};

const navItems = [
  { href: "/journal", label: "Journal" },
  { href: "/lab", label: "Data Lab" },
  { href: "/archive", label: "Archive" },
  { href: "/about", label: "About" },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="site-shell">
          <header className="site-header">
            <Link className="wordmark" href="/" aria-label="NumericNoise home">
              NUMERIC<span>NOISE</span><i>.</i>
            </Link>
            <nav className="main-nav" aria-label="Main navigation">
              {navItems.map((item) => (
                <Link key={item.href} href={item.href}>
                  {item.label}
                </Link>
              ))}
            </nav>
            <span className="header-index">DARK AND METRICS</span>
          </header>
          <main>{children}</main>
          <footer className="site-footer">
            <Link className="footer-mark" href="/">NUMERICNOISE.NET</Link>
            <p>Everything can be made boring if you really set your mind to it.</p>
            <span>Neverending math equation.</span>
          </footer>
        </div>
      </body>
    </html>
  );
}
