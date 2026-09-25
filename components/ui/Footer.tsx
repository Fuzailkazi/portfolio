import Link from "next/link";
import { site } from "@/content/site";
import { ContactLinks } from "./Header";

export function Footer() {
  return (
    <footer id="contact" className="site-footer">
      <div className="shell">
        <h2>Get in touch</h2>
        <p>For roles, collaborations, or a conversation about something I’m building.</p>
        <ContactLinks />
        <div className="footer-bottom">
          <span>{site.name}</span>
          <Link href="/changelog">Changelog</Link>
        </div>
      </div>
    </footer>
  );
}
