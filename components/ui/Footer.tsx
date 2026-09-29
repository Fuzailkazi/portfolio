import { pmPortfolio } from "@/content/pm-portfolio";
import Link from "next/link";
import { site } from "@/content/site";
import { ContactLinks } from "./Header";

export function Footer() {
  return (
    <footer id="contact" className="site-footer">
      <div className="shell">
        <h2>{pmPortfolio.footer}</h2>
        <p>{pmPortfolio.footerDescription}</p>
        <ContactLinks />
        <div className="footer-bottom">
          <span>{site.name}</span>
          <Link href="/changelog">Changelog</Link>
        </div>
      </div>
    </footer>
  );
}
