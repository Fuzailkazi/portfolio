import { site } from "@/content/site";
import { pmPortfolio } from "@/content/pm-portfolio";

export function ContactActions() {
  const resumeUrl = process.env.RESUME_URL;
  return (
    <div className="profile-links contact-actions">
      <a href={`mailto:${site.social.email}`}>{pmPortfolio.actions.email}</a>
      {resumeUrl ? (
        <a href={resumeUrl} target="_blank" rel="noreferrer">
          {pmPortfolio.actions.resume}
        </a>
      ) : (
        <a
          href={`mailto:${site.social.email}?subject=${encodeURIComponent(pmPortfolio.actions.resumeSubject)}`}
        >
          {pmPortfolio.actions.requestResume}
        </a>
      )}
    </div>
  );
}
