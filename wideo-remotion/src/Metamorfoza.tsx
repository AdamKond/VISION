import React from "react";
import {
  AbsoluteFill, OffthreadVideo, interpolate, useCurrentFrame, Easing, staticFile,
} from "remotion";

const CLIP = staticFile("meta-clip.mp4");
const CLIP_FRAMES = 240;          // 8 s @ 30 fps
export const META_TOTAL = CLIP_FRAMES;

const SANS = "Montserrat, 'Segoe UI', Arial, sans-serif";

const Hook: React.FC = () => {
  const f = useCurrentFrame();
  // Hook na starcie (0–3,5 s), potem znika
  const op = interpolate(f, [6, 22, 95, 110], [0, 1, 1, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const up = interpolate(f, [6, 24], [22, 0], { easing: Easing.out(Easing.cubic), extrapolateRight: "clamp" });
  return (
    <AbsoluteFill style={{ alignItems: "center", justifyContent: "flex-start", paddingTop: 150 }}>
      <div style={{ textAlign: "center", opacity: op, transform: `translateY(${up}px)`, padding: "0 60px" }}>
        <div style={{ fontFamily: SANS, fontWeight: 800, fontSize: 76, color: "#fff", letterSpacing: -1, lineHeight: 1.05, textShadow: "0 3px 18px rgba(0,0,0,0.7)" }}>
          Stary dom na wsi?
        </div>
        <div style={{ fontFamily: SANS, fontWeight: 600, fontSize: 46, color: "#F5C518", marginTop: 14, textShadow: "0 3px 18px rgba(0,0,0,0.7)" }}>
          Zobacz, co potrafi AI
        </div>
      </div>
    </AbsoluteFill>
  );
};

const Outro: React.FC = () => {
  const f = useCurrentFrame();
  // Etykieta finałowa (ostatnie ~2,5 s)
  const op = interpolate(f, [CLIP_FRAMES - 70, CLIP_FRAMES - 52], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const up = interpolate(f, [CLIP_FRAMES - 70, CLIP_FRAMES - 48], [18, 0], { easing: Easing.out(Easing.cubic), extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  return (
    <AbsoluteFill style={{ alignItems: "center", justifyContent: "flex-end", paddingBottom: 180 }}>
      <div style={{ textAlign: "center", opacity: op, transform: `translateY(${up}px)` }}>
        <div style={{ fontFamily: SANS, fontWeight: 800, fontSize: 84, color: "#fff", letterSpacing: 2, textShadow: "0 3px 20px rgba(0,0,0,0.8)" }}>
          METAMORFOZA
        </div>
      </div>
    </AbsoluteFill>
  );
};

export const Metamorfoza: React.FC = () => (
  <AbsoluteFill style={{ background: "#000" }}>
    {/* Rozmyte tło wypełniające pionowy kadr 9:16 */}
    <AbsoluteFill>
      <OffthreadVideo src={CLIP} muted style={{ width: "100%", height: "100%", objectFit: "cover", transform: "scale(1.15)", filter: "blur(45px) brightness(0.5)" }} />
    </AbsoluteFill>
    {/* Właściwy film 16:9 w centrum, bez napisów */}
    <AbsoluteFill style={{ alignItems: "center", justifyContent: "center" }}>
      <OffthreadVideo src={CLIP} muted style={{ width: "100%", height: "auto", objectFit: "contain", boxShadow: "0 30px 90px rgba(0,0,0,0.6)" }} />
    </AbsoluteFill>
  </AbsoluteFill>
);
