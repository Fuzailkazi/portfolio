import { ImageResponse } from "next/og";
import { site } from "@/content/site";

// Clean OG card: name + role only, on the brand background.
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = `${site.name} — ${site.role}`;

export default function OpengraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        background: "#FFFFFF",
        padding: "96px",
      }}
    >
      <div style={{ display: "flex", fontSize: 72, fontWeight: 600, color: "#333336" }}>
        {site.name}
      </div>
      <div style={{ display: "flex", marginTop: 16, fontSize: 34, color: "#6E6E73" }}>
        {site.role}
      </div>
    </div>,
    size,
  );
}
