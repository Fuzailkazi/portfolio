import { ImageResponse } from "next/og";

// Favicon: "F" in white on the brand accent.
export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#3B6FD4",
        color: "#FFFFFF",
        fontSize: 22,
        fontWeight: 600,
        borderRadius: 7,
      }}
    >
      F
    </div>,
    size,
  );
}
