import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Casa Nina Carignano — Appartamento a Genova";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#1c1917",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          fontFamily: "Georgia, 'Times New Roman', serif",
        }}
      >
        {/* Top rule */}
        <div style={{ width: 80, height: 1, background: "#faf8f4", opacity: 0.3, marginBottom: 48 }} />

        {/* Main title */}
        <div
          style={{
            fontSize: 96,
            color: "#faf8f4",
            letterSpacing: "0.02em",
            lineHeight: 1,
            opacity: 0.92,
          }}
        >
          Casa Nina
        </div>

        {/* Subtitle */}
        <div
          style={{
            fontSize: 22,
            color: "#faf8f4",
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            marginTop: 24,
            opacity: 0.4,
            fontFamily: "Helvetica, Arial, sans-serif",
          }}
        >
          Carignano · Genova
        </div>

        {/* Bottom rule */}
        <div style={{ width: 80, height: 1, background: "#faf8f4", opacity: 0.3, marginTop: 48 }} />
      </div>
    ),
    { ...size }
  );
}
