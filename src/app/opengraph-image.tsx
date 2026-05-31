import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Casa Nina Carignano — Appartamento a Genova";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const SHUTTER = "#2d5a3a";
const SLAT    = "#1a3822";
const GLASS   = "#b8d4e2";
const PINK    = "#e8a898";
const SILL    = "#d4c8b4";
const RED     = "#cc2233";
const GREEN   = "#3a7040";
const BROWN   = "#8a6040";
const BRASS   = "#c89828";
const DARK    = "#292524";
const CREAM   = "#faf8f4";

function Shutter({ height = 118 }: { height?: number }) {
  return (
    <div style={{ width: 42, height, background: SHUTTER, display: "flex", flexDirection: "column", gap: 11, padding: "8px 0" }}>
      {[0,1,2,3,4,5,6,7].map(i => (
        <div key={i} style={{ width: 42, height: 2, background: SLAT, opacity: 0.65 }} />
      ))}
    </div>
  );
}

function Glass({ width = 72, height = 118 }: { width?: number; height?: number }) {
  return (
    <div style={{ width, height, background: GLASS, display: "flex", flexDirection: "column" }}>
      <div style={{ flex: 1, display: "flex" }}>
        <div style={{ flex: 1 }} />
        <div style={{ width: 3, height: "100%", background: "#e8e0d4", opacity: 0.8 }} />
        <div style={{ flex: 1 }} />
      </div>
      <div style={{ width, height: 3, background: "#e8e0d4", opacity: 0.8 }} />
      <div style={{ flex: 1 }} />
    </div>
  );
}

function Flower({ size: s = 14, color = RED }: { size?: number; color?: string }) {
  return <div style={{ width: s, height: s, borderRadius: s / 2, background: color }} />;
}

export default function OGImage() {
  return new ImageResponse(
    (
      <div style={{ display: "flex", width: "100%", height: "100%" }}>

        {/* ══ LEFT — facade ══ */}
        <div style={{ width: 460, height: 630, background: "#1e1c1a", display: "flex", flexDirection: "column", overflow: "hidden" }}>

          {/* Sky */}
          <div style={{ width: 460, height: 44, background: "#1e1c1a", display: "flex", alignItems: "center", paddingLeft: 170, gap: 28 }}>
            <div style={{ display: "flex", gap: 0 }}>
              <div style={{ width: 13, height: 7, borderRadius: "50% 50% 0 0", background: "#1e1c1a", boxShadow: "0 -2px 0 #8a7870" }} />
              <div style={{ width: 13, height: 7, borderRadius: "50% 50% 0 0", background: "#1e1c1a", boxShadow: "0 -2px 0 #8a7870" }} />
            </div>
            <div style={{ display: "flex", gap: 0 }}>
              <div style={{ width: 9, height: 5, borderRadius: "50% 50% 0 0", background: "#1e1c1a", boxShadow: "0 -1.5px 0 #8a7870" }} />
              <div style={{ width: 9, height: 5, borderRadius: "50% 50% 0 0", background: "#1e1c1a", boxShadow: "0 -1.5px 0 #8a7870" }} />
            </div>
          </div>

          {/* Wall */}
          <div style={{ flex: 1, background: PINK, display: "flex", flexDirection: "column", padding: "0 0" }}>

            {/* Trompe-l'œil 3D cornice — layered strips for depth illusion */}
            <div style={{ width: 460, height: 4, background: "#f4c0b0" }} />{/* highlight top */}
            <div style={{ width: 460, height: 8, background: "#c8887a" }} />{/* main cornice */}
            <div style={{ width: 460, height: 3, background: "#a06858" }} />{/* shadow */}
            <div style={{ width: 460, height: 2, background: "#c8887a", opacity: 0.5 }} />

            {/* Trompe-l'œil pilasters — flanking columns painted on wall */}
            <div style={{ display: "flex", flex: 1 }}>
              {/* Left pilaster */}
              <div style={{ display: "flex" }}>
                <div style={{ width: 14, height: "100%", background: "#f0b4a0" }} />{/* highlight face */}
                <div style={{ width: 3, height: "100%", background: "#a86858" }} />{/* shadow edge */}
              </div>

              {/* Main wall content */}
              <div style={{ flex: 1, display: "flex", flexDirection: "column", padding: "12px 12px 0 12px" }}>

            {/* Windows */}
            <div style={{ display: "flex", gap: 16, marginTop: 12 }}>
              {/* Window 1 full */}
              <div style={{ display: "flex", flexDirection: "column" }}>
                <div style={{ display: "flex" }}>
                  <Shutter />
                  <Glass />
                  <Shutter />
                </div>
                <div style={{ width: 156, height: 8, background: SILL }} />
              </div>
              {/* Window 2 partial */}
              <div style={{ display: "flex", flexDirection: "column" }}>
                <div style={{ display: "flex" }}>
                  <Shutter />
                  <Glass width={62} />
                </div>
                <div style={{ width: 104, height: 8, background: SILL }} />
              </div>
            </div>

            {/* Flower box */}
            <div style={{ display: "flex", flexDirection: "column", marginTop: 0 }}>
              <div style={{ display: "flex", gap: 5, paddingLeft: 4 }}>
                {[0,1,2,3,4,5,6,7,8,9].map(i => (
                  <div key={i} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 3 }}>
                    <Flower size={13} color={i % 3 === 1 ? "#e03355" : RED} />
                    <div style={{ width: 17, height: 11, borderRadius: 9, background: GREEN }} />
                  </div>
                ))}
              </div>
              <div style={{ width: 270, height: 16, background: BROWN, borderRadius: 2 }} />
              {/* Balcony railing */}
              <div style={{ width: 270, height: 3, background: "#c0a880", marginTop: 5 }} />
              <div style={{ display: "flex", gap: 16, paddingLeft: 10, marginTop: 3 }}>
                {[0,1,2,3,4,5,6,7,8,9,10,11,12].map(i => (
                  <div key={i} style={{ width: 2, height: 14, background: "#c0a880", opacity: 0.7 }} />
                ))}
              </div>
              <div style={{ width: 270, height: 3, background: "#c0a880" }} />
            </div>

            {/* Trompe-l'œil painted arch niche — classic Ligurian wall painting */}
            <div style={{ display: "flex", gap: 18, marginTop: 14, alignItems: "flex-start" }}>
              {/* Painted niche: arch + recessed interior + urn */}
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                {/* Arch shadow frame (outer) */}
                <div style={{ width: 58, height: 28, borderTopLeftRadius: 29, borderTopRightRadius: 29, background: "#a06858" }}>
                  {/* Arch highlight (inner) */}
                  <div style={{ width: 48, height: 24, borderTopLeftRadius: 24, borderTopRightRadius: 24, background: "#c8887a", margin: "2px auto 0" }}>
                    {/* Arch interior — deep recessed colour */}
                    <div style={{ width: 40, height: 20, borderTopLeftRadius: 20, borderTopRightRadius: 20, background: "#9a5848", margin: "2px auto 0" }} />
                  </div>
                </div>
                {/* Niche body */}
                <div style={{ width: 58, height: 52, background: "#a06858", display: "flex", justifyContent: "center", alignItems: "flex-start" }}>
                  <div style={{ width: 48, height: 52, background: "#c8887a", display: "flex", justifyContent: "center", alignItems: "flex-start" }}>
                    <div style={{ width: 40, height: 52, background: "#9a5848", display: "flex", flexDirection: "column", alignItems: "center", paddingTop: 6, gap: 4 }}>
                      {/* Urn / vase shape */}
                      <div style={{ width: 18, height: 8, background: "#c89060", borderRadius: 4 }} />{/* rim */}
                      <div style={{ width: 24, height: 20, background: "#c89060", borderRadius: "0 0 12px 12px" }} />{/* body */}
                      <div style={{ width: 10, height: 6, background: "#b07850" }} />{/* base */}
                    </div>
                  </div>
                </div>
                {/* Niche base shelf — trompe-l'œil shadow */}
                <div style={{ width: 58, height: 5, background: "#a06858" }} />
                <div style={{ width: 64, height: 3, background: "#c8887a" }} />{/* shelf highlight */}
                <div style={{ width: 64, height: 2, background: "#884840" }} />{/* shelf shadow */}
              </div>

              {/* Painted fake window (trompe-l'œil, slightly faded) — shutter closed */}
              <div style={{ display: "flex", flexDirection: "column", opacity: 0.55 }}>
                {/* Frame */}
                <div style={{ width: 72, height: 88, background: "#c8887a", display: "flex", padding: 3 }}>
                  <div style={{ flex: 1, background: "#2d5a3a", display: "flex", flexDirection: "column", gap: 8, padding: "8px 0" }}>
                    {[0,1,2,3,4,5].map(i => (
                      <div key={i} style={{ width: "100%", height: 2, background: "#1a3822" }} />
                    ))}
                  </div>
                  <div style={{ width: 3, background: "#c8887a" }} />
                  <div style={{ flex: 1, background: "#2d5a3a", display: "flex", flexDirection: "column", gap: 8, padding: "8px 0" }}>
                    {[0,1,2,3,4,5].map(i => (
                      <div key={i} style={{ width: "100%", height: 2, background: "#1a3822" }} />
                    ))}
                  </div>
                </div>
                <div style={{ width: 72, height: 5, background: SILL }} />
              </div>
            </div>

            {/* String course with trompe-l'œil 3D shadow */}
            <div style={{ width: 404, height: 2, background: "#f0b8a0", marginTop: 12 }} />{/* highlight */}
            <div style={{ width: 404, height: 4, background: "#c8887a" }} />
            <div style={{ width: 404, height: 2, background: "#a06858" }} />{/* shadow */}

            {/* Awning + door + flowers */}
            <div style={{ display: "flex", gap: 20, marginTop: 14 }}>

              {/* Door group */}
              <div style={{ display: "flex", flexDirection: "column" }}>
                {/* Awning */}
                <div style={{ width: 96, height: 6, background: "#c4c0b4" }} />
                <div style={{ width: 96, height: 7, background: "#9a9088" }} />
                {/* Door */}
                <div style={{ width: 84, height: 210, background: SHUTTER, display: "flex", flexDirection: "column", alignItems: "center", padding: "6px 8px", gap: 5 }}>
                  {/* Gold 66 at very top */}
                  <div style={{ fontSize: 16, color: BRASS, fontFamily: "Georgia, serif", letterSpacing: "0.25em" }}>66</div>
                  {/* Upper panel */}
                  <div style={{ width: 66, height: 46, background: "#265033", opacity: 0.4, borderRadius: 2 }} />
                  {/* Wreath */}
                  <div style={{ width: 40, height: 40, borderRadius: 20, background: "#1a3822", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <div style={{ width: 24, height: 24, borderRadius: 12, background: SHUTTER }} />
                  </div>
                  {/* Lower panel */}
                  <div style={{ width: 66, height: 64, background: "#265033", opacity: 0.4, borderRadius: 2 }} />
                  {/* Handle */}
                  <div style={{ width: 10, height: 10, borderRadius: 5, background: BRASS, alignSelf: "flex-end", marginRight: 2 }} />
                </div>
              </div>

              {/* Ground flower stand */}
              <div style={{ display: "flex", flexDirection: "column", marginTop: 13 }}>
                <div style={{ display: "flex", gap: 5 }}>
                  {[0,1,2,3,4,5,6].map(i => (
                    <div key={i} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 3 }}>
                      <Flower size={17} color={i % 2 === 0 ? RED : "#e03355"} />
                      <div style={{ width: 21, height: 14, borderRadius: 10, background: GREEN }} />
                    </div>
                  ))}
                </div>
                <div style={{ width: 168, height: 14, background: BROWN, borderRadius: 2 }} />
                <div style={{ display: "flex", gap: 26, paddingLeft: 14 }}>
                  {[0,1,2,3].map(i => (
                    <div key={i} style={{ width: 4, height: 20, background: "#7a5030" }} />
                  ))}
                </div>
              </div>

            </div>

              </div>{/* end main wall content */}

              {/* Right pilaster */}
              <div style={{ display: "flex" }}>
                <div style={{ width: 3, height: "100%", background: "#a86858" }} />{/* shadow edge */}
                <div style={{ width: 14, height: "100%", background: "#f0b4a0" }} />{/* highlight face */}
              </div>
            </div>{/* end pilaster row */}

          </div>

          {/* Drain pipe */}
          <div style={{ position: "absolute", top: 44, left: 451, width: 7, height: 586, background: "#9a9088", borderRadius: 4 }} />
        </div>

        {/* Green divider */}
        <div style={{ width: 5, height: 630, background: SHUTTER }} />

        {/* ══ RIGHT — text ══ */}
        <div style={{ flex: 1, height: 630, background: DARK, display: "flex", flexDirection: "column", justifyContent: "center", padding: "0 80px" }}>
          <div style={{ width: 48, height: 1, background: CREAM, opacity: 0.25, marginBottom: 40 }} />

          <div style={{ fontSize: 88, color: CREAM, fontFamily: "Georgia, serif", lineHeight: 1, opacity: 0.92 }}>
            Casa Nina
          </div>

          <div style={{ fontSize: 18, color: CREAM, letterSpacing: "0.28em", marginTop: 22, opacity: 0.38, fontFamily: "sans-serif" }}>
            CARIGNANO · GENOVA
          </div>

          <div style={{ width: 48, height: 1, background: CREAM, opacity: 0.2, marginTop: 40 }} />

          <div style={{ fontSize: 14, color: CREAM, letterSpacing: "0.08em", marginTop: 28, opacity: 0.22, fontFamily: "sans-serif" }}>
            casaninacarignano.com
          </div>
        </div>

      </div>
    ),
    { ...size }
  );
}
