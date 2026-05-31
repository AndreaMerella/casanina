import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Casa Nina Carignano — Appartamento a Genova";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div style={{ display: "flex", width: "100%", height: "100%" }}>

        {/* ══════════════════════════════
            LEFT — pink facade
            ══════════════════════════════ */}
        <div style={{ width: 460, height: 630, background: "#252120", display: "flex", flexDirection: "column", overflow: "hidden" }}>

          {/* Sky with seagulls */}
          <div style={{ width: 460, height: 48, background: "#252120", display: "flex", alignItems: "center", paddingLeft: 200 }}>
            {/* Seagull 1 */}
            <div style={{ display: "flex", gap: 0 }}>
              <div style={{ width: 14, height: 6, borderTop: "2px solid #9a8070", borderRadius: "50% 50% 0 0", opacity: 0.45 }} />
              <div style={{ width: 14, height: 6, borderTop: "2px solid #9a8070", borderRadius: "50% 50% 0 0", opacity: 0.45 }} />
            </div>
            <div style={{ width: 20 }} />
            {/* Seagull 2 smaller */}
            <div style={{ display: "flex", gap: 0 }}>
              <div style={{ width: 10, height: 5, borderTop: "1.5px solid #9a8070", borderRadius: "50% 50% 0 0", opacity: 0.3 }} />
              <div style={{ width: 10, height: 5, borderTop: "1.5px solid #9a8070", borderRadius: "50% 50% 0 0", opacity: 0.3 }} />
            </div>
          </div>

          {/* PINK WALL */}
          <div style={{ flex: 1, background: "#e8a898", display: "flex", flexDirection: "column", padding: "18px 30px 0 30px" }}>

            {/* Cornice top */}
            <div style={{ width: 400, height: 6, background: "#c8887a" }} />

            {/* Window row */}
            <div style={{ display: "flex", gap: 18, marginTop: 14 }}>

              {/* Window 1 — fully open */}
              <div style={{ display: "flex", flexDirection: "column" }}>
                <div style={{ display: "flex" }}>
                  {/* Left shutter with slats */}
                  <div style={{ width: 42, height: 118, background: "#2d5a3a", display: "flex", flexDirection: "column", justifyContent: "space-evenly", padding: "8px 0" }}>
                    {[0,1,2,3,4,5,6,7,8].map(i => (
                      <div key={i} style={{ width: 42, height: 2, background: "#1a3822", opacity: 0.7 }} />
                    ))}
                  </div>
                  {/* Glass with cross */}
                  <div style={{ width: 72, height: 118, background: "#b8d4e2", display: "flex", flexDirection: "column" }}>
                    {/* Upper panes */}
                    <div style={{ flex: 1, display: "flex" }}>
                      <div style={{ flex: 1, borderRight: "3px solid #e8e0d4" }} />
                      <div style={{ flex: 1 }} />
                    </div>
                    {/* Middle bar */}
                    <div style={{ width: 72, height: 3, background: "#e8e0d4" }} />
                    {/* Lower panes */}
                    <div style={{ flex: 1, display: "flex" }}>
                      <div style={{ flex: 1, borderRight: "3px solid #e8e0d4" }} />
                      <div style={{ flex: 1 }} />
                    </div>
                  </div>
                  {/* Right shutter with slats */}
                  <div style={{ width: 42, height: 118, background: "#2d5a3a", display: "flex", flexDirection: "column", justifyContent: "space-evenly", padding: "8px 0" }}>
                    {[0,1,2,3,4,5,6,7,8].map(i => (
                      <div key={i} style={{ width: 42, height: 2, background: "#1a3822", opacity: 0.7 }} />
                    ))}
                  </div>
                </div>
                {/* Sill */}
                <div style={{ width: 158, height: 8, background: "#d4c8b4" }} />
              </div>

              {/* Window 2 — partial right */}
              <div style={{ display: "flex", flexDirection: "column" }}>
                <div style={{ display: "flex" }}>
                  <div style={{ width: 42, height: 118, background: "#2d5a3a", display: "flex", flexDirection: "column", justifyContent: "space-evenly", padding: "8px 0" }}>
                    {[0,1,2,3,4,5,6,7,8].map(i => (
                      <div key={i} style={{ width: 42, height: 2, background: "#1a3822", opacity: 0.7 }} />
                    ))}
                  </div>
                  <div style={{ width: 62, height: 118, background: "#b8d4e2", display: "flex", flexDirection: "column" }}>
                    <div style={{ flex: 1, display: "flex" }}>
                      <div style={{ flex: 1, borderRight: "3px solid #e8e0d4" }} />
                      <div style={{ flex: 1 }} />
                    </div>
                    <div style={{ width: 62, height: 3, background: "#e8e0d4" }} />
                    <div style={{ flex: 1 }} />
                  </div>
                </div>
                <div style={{ width: 106, height: 8, background: "#d4c8b4" }} />
              </div>

            </div>

            {/* Flower box */}
            <div style={{ display: "flex", flexDirection: "column", marginTop: 2 }}>
              {/* Flowers above box */}
              <div style={{ display: "flex", gap: 4, paddingLeft: 4 }}>
                {[0,1,2,3,4,5,6,7,8,9].map(i => (
                  <div key={i} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 2 }}>
                    <div style={{ width: 14, height: 14, borderRadius: 7, background: i % 3 === 1 ? "#e03355" : "#cc2233" }} />
                    <div style={{ width: 18, height: 12, borderRadius: 9, background: "#3a7040" }} />
                  </div>
                ))}
              </div>
              {/* Box */}
              <div style={{ width: 280, height: 18, background: "#8a6040", borderRadius: 2 }} />
              {/* Balcony rail */}
              <div style={{ width: 280, height: 3, background: "#b89870", marginTop: 4 }} />
              <div style={{ display: "flex", gap: 18, paddingLeft: 8, marginTop: 2 }}>
                {[0,1,2,3,4,5,6,7,8,9,10,11,12].map(i => (
                  <div key={i} style={{ width: 2, height: 14, background: "#b89870" }} />
                ))}
              </div>
              <div style={{ width: 280, height: 3, background: "#b89870" }} />
            </div>

            {/* Street number + string course */}
            <div style={{ display: "flex", alignItems: "center", marginTop: 18, gap: 0 }}>
              <div style={{ flex: 1, height: 3, background: "#c8887a", opacity: 0.55 }} />
              <div style={{ fontSize: 13, color: "#8a4030", fontFamily: "Georgia, serif", padding: "0 10px", opacity: 0.75, letterSpacing: "0.1em" }}>66</div>
              <div style={{ flex: 1, height: 3, background: "#c8887a", opacity: 0.55 }} />
            </div>

            {/* Awning + door row */}
            <div style={{ display: "flex", gap: 22, marginTop: 14, alignItems: "flex-start" }}>

              {/* Door section */}
              <div style={{ display: "flex", flexDirection: "column" }}>
                {/* Awning */}
                <div style={{ width: 92, height: 9, background: "#a8a49a" }} />
                <div style={{ width: 92, height: 4, background: "#c4c0b4" }} />
                {/* Door */}
                <div style={{ width: 82, height: 195, background: "#2d5a3a", display: "flex", flexDirection: "column", alignItems: "center", padding: "10px 8px", gap: 8 }}>
                  {/* Upper panel */}
                  <div style={{ width: 64, height: 55, background: "#265033", opacity: 0.45, borderRadius: 2 }} />
                  {/* Wreath */}
                  <div style={{ width: 38, height: 38, borderRadius: 19, border: "5px solid #1a3822" }} />
                  {/* Lower panel */}
                  <div style={{ width: 64, height: 60, background: "#265033", opacity: 0.45, borderRadius: 2 }} />
                  {/* Handle */}
                  <div style={{ width: 10, height: 10, borderRadius: 5, background: "#c89828", alignSelf: "flex-end", marginRight: 4 }} />
                </div>
                {/* Number plate */}
                <div style={{ width: 82, height: 16, background: "#c8887a", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <div style={{ fontSize: 10, color: "#faf8f4", fontFamily: "Georgia, serif", letterSpacing: "0.2em" }}>N° 66</div>
                </div>
              </div>

              {/* Ground flower stand */}
              <div style={{ display: "flex", flexDirection: "column", marginTop: 13 }}>
                <div style={{ display: "flex", gap: 5 }}>
                  {[0,1,2,3,4,5,6].map(i => (
                    <div key={i} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 3 }}>
                      <div style={{ width: 17, height: 17, borderRadius: 9, background: i % 2 === 0 ? "#cc2233" : "#e03355" }} />
                      <div style={{ width: 21, height: 14, borderRadius: 11, background: "#3a7040" }} />
                    </div>
                  ))}
                </div>
                <div style={{ width: 170, height: 14, background: "#8a6040", borderRadius: 2 }} />
                {/* Stand legs */}
                <div style={{ display: "flex", gap: 28, paddingLeft: 16 }}>
                  {[0,1,2,3].map(i => (
                    <div key={i} style={{ width: 4, height: 22, background: "#7a5030" }} />
                  ))}
                </div>
              </div>

            </div>

          </div>

          {/* Drain pipe */}
          <div style={{ position: "absolute", top: 48, left: 450, width: 7, height: 582, background: "#9a9088", borderRadius: 4 }} />
        </div>

        {/* Green divider */}
        <div style={{ width: 5, height: 630, background: "#2d5a3a" }} />

        {/* ══════════════════════════════
            RIGHT — text
            ══════════════════════════════ */}
        <div style={{
          flex: 1,
          height: 630,
          background: "#292524",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "0 80px",
        }}>
          <div style={{ width: 48, height: 1, background: "#faf8f4", opacity: 0.25, marginBottom: 40 }} />

          <div style={{ fontSize: 88, color: "#faf8f4", fontFamily: "Georgia, serif", lineHeight: 1, opacity: 0.92 }}>
            Casa Nina
          </div>

          <div style={{ fontSize: 18, color: "#faf8f4", letterSpacing: "0.28em", marginTop: 22, opacity: 0.38, fontFamily: "sans-serif" }}>
            CARIGNANO · GENOVA
          </div>

          <div style={{ width: 48, height: 1, background: "#faf8f4", opacity: 0.2, marginTop: 40 }} />

          <div style={{ fontSize: 14, color: "#faf8f4", letterSpacing: "0.08em", marginTop: 28, opacity: 0.22, fontFamily: "sans-serif" }}>
            casaninacarignano.com
          </div>
        </div>

      </div>
    ),
    { ...size }
  );
}
