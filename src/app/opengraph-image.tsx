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
          background: "#292524",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            fontSize: 96,
            color: "#faf8f4",
            fontFamily: "Georgia, serif",
          }}
        >
          Casa Nina
        </div>
        <div
          style={{
            fontSize: 22,
            color: "#faf8f4",
            opacity: 0.4,
            letterSpacing: "0.3em",
            marginTop: 24,
            fontFamily: "sans-serif",
          }}
        >
          CARIGNANO · GENOVA
        </div>
      </div>
    ),
    { ...size }
  );
}
