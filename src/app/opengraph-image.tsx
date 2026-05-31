import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Casa Nina Carignano — Appartamento a Genova";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const SHUTTER = "#2d5a3a";
const SLAT    = "#1a3822";
const GLASS   = "#b8d4e2";
const SILL    = "#d4c8b4";
const RED     = "#cc2233";
const GREEN   = "#3a7040";
const BROWN   = "#8a6040";
const BRASS   = "#c89828";
const SAND    = "#e8d8c4";
const INK     = "#2d2820";
const SKY     = "#6a9ab8";
const MORTAR  = "#c2a882";

const BRICK_COLORS = ["#c07850","#b86840","#c88060","#bf7248","#ca8060","#b56838","#c07050","#b96845"];

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
        <div style={{ width: 460, height: 630, background: SKY, display: "flex", flexDirection: "column", overflow: "hidden" }}>

          {/* Sky */}
          <div style={{ width: 460, height: 44, background: SKY, display: "flex", alignItems: "center", paddingLeft: 170, gap: 28 }}>
            <div style={{ display: "flex", gap: 0 }}>
              <div style={{ width: 10, height: 5, borderTopLeftRadius: 10, borderTopRightRadius: 10, background: SKY, borderTop: "2px solid #c8c0b0" }} />
              <div style={{ width: 10, height: 5, borderTopLeftRadius: 10, borderTopRightRadius: 10, background: SKY, borderTop: "2px solid #c8c0b0" }} />
            </div>
            <div style={{ display: "flex", gap: 0 }}>
              <div style={{ width: 7, height: 4, borderTopLeftRadius: 7, borderTopRightRadius: 7, background: SKY, borderTop: "1.5px solid #c8c0b0" }} />
              <div style={{ width: 7, height: 4, borderTopLeftRadius: 7, borderTopRightRadius: 7, background: SKY, borderTop: "1.5px solid #c8c0b0" }} />
            </div>
          </div>

          {/* ── Brick wall layer (absolute, behind facade elements) ── */}
          <div style={{ position: "absolute", top: 44, left: 0, width: 460, height: 586, background: MORTAR, display: "flex", flexDirection: "column" }}>
            {Array.from({ length: 27 }).map((_, row) => {
              const isOdd = row % 2 === 1;
              return (
                <div key={row} style={{ display: "flex", height: 22, flexShrink: 0, overflow: "hidden" }}>
                  <div style={{ display: "flex", gap: 3, marginLeft: isOdd ? -38 : 0, flexShrink: 0 }}>
                    {Array.from({ length: 9 }).map((_, col) => (
                      <div
                        key={col}
                        style={{ width: 72, height: 19, flexShrink: 0, background: BRICK_COLORS[(row * 4 + col) % BRICK_COLORS.length] }}
                      />
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Wall content — transparent bg so bricks show through */}
          <div style={{ flex: 1, display: "flex", flexDirection: "column", padding: "0 28px" }}>

            {/* Trompe-l'œil 3D cornice — plaster covers bricks */}
            <div style={{ width: 404, height: 3, background: "#f4c0b0" }} />
            <div style={{ width: 404, height: 8, background: "#c8887a" }} />
            <div style={{ width: 404, height: 3, background: "#a06858" }} />

            {/* Windows */}
            <div style={{ display: "flex", gap: 16, marginTop: 10 }}>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <div style={{ display: "flex" }}>
                  <Shutter />
                  <Glass />
                  <Shutter />
                </div>
                <div style={{ width: 156, height: 8, background: SILL }} />
              </div>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <div style={{ display: "flex" }}>
                  <Shutter />
                  <Glass width={62} />
                  <Shutter />
                </div>
                <div style={{ width: 146, height: 8, background: SILL }} />
              </div>
            </div>

            {/* Flower box + balcony rail */}
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div style={{ display: "flex", gap: 5, paddingLeft: 4 }}>
                {[0,1,2,3,4,5,6,7,8,9].map(i => (
                  <div key={i} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 3 }}>
                    <Flower size={13} color={i % 3 === 1 ? "#e03355" : RED} />
                    <div style={{ width: 17, height: 11, borderRadius: 9, background: GREEN }} />
                  </div>
                ))}
              </div>
              <div style={{ width: 270, height: 16, background: BROWN, borderRadius: 2 }} />
              <div style={{ width: 270, height: 3, background: "#c0a880", marginTop: 5 }} />
              <div style={{ display: "flex", gap: 16, paddingLeft: 10, marginTop: 3 }}>
                {[0,1,2,3,4,5,6,7,8,9,10,11,12].map(i => (
                  <div key={i} style={{ width: 2, height: 14, background: "#c0a880", opacity: 0.7 }} />
                ))}
              </div>
              <div style={{ width: 270, height: 3, background: "#c0a880" }} />
            </div>

            {/* Botanical fresco panel + faded painted window */}
            <div style={{ display: "flex", gap: 18, marginTop: 12, alignItems: "flex-start" }}>

              {/* Botanical fresco: lemon branch */}
              <div style={{ width: 110, height: 86, background: "#d89e80", borderRadius: 3, display: "flex", flexDirection: "column", alignItems: "center", padding: "8px 10px", gap: 4 }}>
                <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
                  <div style={{ width: 14, height: 9, borderRadius: 7, background: "#4a7840", opacity: 0.85 }} />
                  <div style={{ width: 11, height: 11, borderRadius: 6, background: "#d4a832", opacity: 0.9 }} />
                  <div style={{ width: 14, height: 9, borderRadius: 7, background: "#4a7840", opacity: 0.85 }} />
                  <div style={{ width: 10, height: 10, borderRadius: 5, background: "#d4a832", opacity: 0.9 }} />
                  <div style={{ width: 12, height: 8, borderRadius: 6, background: "#4a7840", opacity: 0.85 }} />
                </div>
                <div style={{ width: 2, height: 10, background: "#4a7840", opacity: 0.7 }} />
                <div style={{ display: "flex", gap: 5, alignItems: "center" }}>
                  <div style={{ width: 18, height: 10, borderRadius: 9, background: "#4a7840", opacity: 0.8 }} />
                  <div style={{ width: 15, height: 15, borderRadius: 8, background: "#d4a832", opacity: 0.95 }} />
                  <div style={{ width: 18, height: 10, borderRadius: 9, background: "#4a7840", opacity: 0.8 }} />
                </div>
                <div style={{ width: 2, height: 8, background: "#4a7840", opacity: 0.7 }} />
                <div style={{ display: "flex", gap: 4, alignItems: "center" }}>
                  <div style={{ width: 22, height: 10, borderRadius: 10, background: "#4a7840", opacity: 0.75 }} />
                  <div style={{ width: 22, height: 10, borderRadius: 10, background: "#4a7840", opacity: 0.75 }} />
                </div>
                <div style={{ width: 90, height: 2, background: "#f0b8a0", marginTop: 2 }} />
                <div style={{ width: 90, height: 3, background: "#c8887a" }} />
              </div>

              {/* Faded painted window */}
              <div style={{ display: "flex", flexDirection: "column", opacity: 0.45 }}>
                <div style={{ display: "flex" }}>
                  <div style={{ width: 34, height: 88, background: SHUTTER, display: "flex", flexDirection: "column", gap: 10, padding: "8px 0" }}>
                    {[0,1,2,3,4,5,6].map(i => (
                      <div key={i} style={{ width: 34, height: 2, background: SLAT }} />
                    ))}
                  </div>
                  <div style={{ width: 34, height: 88, background: SHUTTER, display: "flex", flexDirection: "column", gap: 10, padding: "8px 0" }}>
                    {[0,1,2,3,4,5,6].map(i => (
                      <div key={i} style={{ width: 34, height: 2, background: SLAT }} />
                    ))}
                  </div>
                </div>
                <div style={{ width: 68, height: 5, background: SILL }} />
              </div>

            </div>

            {/* 3D string course */}
            <div style={{ width: 404, height: 2, background: "#f0b8a0", marginTop: 10 }} />
            <div style={{ width: 404, height: 4, background: "#c8887a" }} />
            <div style={{ width: 404, height: 2, background: "#a06858" }} />

            {/* Awning + door + flowers */}
            <div style={{ display: "flex", gap: 20, marginTop: 12 }}>

              <div style={{ display: "flex", flexDirection: "column" }}>
                <div style={{ width: 96, height: 6, background: "#c4c0b4" }} />
                <div style={{ width: 96, height: 7, background: "#9a9088" }} />
                <div style={{ width: 84, height: 210, background: SHUTTER, display: "flex", flexDirection: "column", alignItems: "center", padding: "6px 8px", gap: 5 }}>
                  <div style={{ fontSize: 16, color: BRASS, fontFamily: "Georgia, serif", letterSpacing: "0.25em" }}>66</div>
                  <div style={{ width: 66, height: 46, background: "#265033", opacity: 0.4, borderRadius: 2 }} />
                  <div style={{ width: 40, height: 40, borderRadius: 20, background: "#1a3822", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <div style={{ width: 24, height: 24, borderRadius: 12, background: SHUTTER }} />
                  </div>
                  <div style={{ width: 66, height: 64, background: "#265033", opacity: 0.4, borderRadius: 2 }} />
                  <div style={{ width: 10, height: 10, borderRadius: 5, background: BRASS, alignSelf: "flex-end", marginRight: 2 }} />
                </div>
              </div>

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

          </div>

          {/* Drain pipe */}
          <div style={{ position: "absolute", top: 44, left: 451, width: 7, height: 586, background: "#9a9088", borderRadius: 4 }} />
        </div>

        {/* Green divider */}
        <div style={{ width: 5, height: 630, background: SHUTTER }} />

        {/* ══ RIGHT — warm sand panel ══ */}
        <div style={{ flex: 1, height: 630, background: SAND, display: "flex", flexDirection: "column", justifyContent: "center", padding: "0 72px" }}>

          <div style={{ width: 40, height: 2, background: INK, opacity: 0.3, marginBottom: 24 }} />

          <div style={{ fontSize: 90, color: INK, fontFamily: "Georgia, serif", lineHeight: 1 }}>
            Casa Nina
          </div>

          <div style={{ fontSize: 18, color: INK, letterSpacing: "0.3em", marginTop: 16, opacity: 0.6, fontFamily: "sans-serif" }}>
            CARIGNANO · GENOVA
          </div>

          <div style={{ width: 40, height: 2, background: INK, opacity: 0.2, marginTop: 28 }} />

          <div style={{ fontSize: 14, color: INK, letterSpacing: "0.1em", marginTop: 18, opacity: 0.45, fontFamily: "sans-serif" }}>
            casaninacarignano.com
          </div>

        </div>

      </div>
    ),
    { ...size }
  );
}
