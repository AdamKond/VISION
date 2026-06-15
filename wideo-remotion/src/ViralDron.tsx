import React from "react";
import {
  AbsoluteFill, interpolate, useCurrentFrame, Img, OffthreadVideo, Easing, staticFile,
} from "remotion";

// Trzy statyczne zdjęcia (nie ruszają się) + miejsce na przelot dronem na dole.
const PHOTOS = [staticFile("viral-1.png"), staticFile("viral-2.png"), staticFile("viral-3.png")];
// Przelot dronem wygenerowany w Higgsfield (Kling PRO, FPV przez salon).
const DRON_SRC: string | null = staticFile("dron-final-v2.mp4");

export const VIRAL_TOTAL = 300; // 10 s — Kling PRO, JEDNO zdjęcie (bez duplikacji), zwolniony 1,25x
const SANS = "Montserrat, 'Segoe UI', Arial, sans-serif";
const INK = "#2b2723";
const BG = "linear-gradient(180deg, #efe9e1 0%, #e7ded2 100%)";

const Thumb: React.FC<{ src: string; label: string }> = ({ src, label }) => (
  <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
    <div style={{ width: 220, height: 280, borderRadius: 14, overflow: "hidden", boxShadow: "0 12px 28px rgba(0,0,0,0.22)" }}>
      <Img src={src} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
    </div>
    <div style={{ fontFamily: SANS, fontWeight: 800, fontSize: 26, color: INK, letterSpacing: 1, marginTop: 12 }}>{label}</div>
  </div>
);

// Odręczna strzałka w dół, do panelu z filmem
const Arrow: React.FC = () => (
  <svg style={{ position: "absolute", left: "50%", top: 500, width: 200, height: 120, transform: "translateX(-50%)", overflow: "visible" }} viewBox="0 0 220 150">
    <path d="M30,10 C 150,0 200,70 110,130" fill="none" stroke={INK} strokeWidth="8" strokeLinecap="round" />
    <path d="M110,130 L 80,108 M110,130 L 130,96" fill="none" stroke={INK} strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const ViralDron: React.FC = () => {
  const f = useCurrentFrame();
  const fade = interpolate(f, [0, 16], [0, 1], { extrapolateRight: "clamp" });
  const up = interpolate(f, [0, 20], [18, 0], { easing: Easing.out(Easing.cubic), extrapolateRight: "clamp" });

  return (
    <AbsoluteFill style={{ background: BG, opacity: fade }}>
      <div style={{ transform: `translateY(${up}px)`, width: "100%", height: "100%" }}>
        {/* Nagłówek */}
        <div style={{ textAlign: "center", paddingTop: 50 }}>
          <div style={{ fontFamily: SANS, fontWeight: 900, fontSize: 54, color: INK, letterSpacing: 3 }}>PERFECT VIDEOS</div>
          <div style={{ fontFamily: SANS, fontWeight: 600, fontSize: 22, color: "#8a8178", letterSpacing: 8, marginTop: 8 }}>CREATED BY PHOTOS</div>
        </div>

        {/* 3 statyczne zdjęcia */}
        <div style={{ position: "absolute", top: 170, left: 0, right: 0, display: "flex", justifyContent: "center", gap: 30 }}>
          <Thumb src={PHOTOS[0]} label="1ST PHOTO" />
          <Thumb src={PHOTOS[1]} label="2ND PHOTO" />
          <Thumb src={PHOTOS[2]} label="3RD PHOTO" />
        </div>

        {/* Strzałka */}
        <Arrow />

        {/* Panel na film z drona — proporcje 9:16, cały salon widoczny */}
        <div style={{ position: "absolute", left: 190, top: 610, width: 700, height: 1244, borderRadius: 24, overflow: "hidden", boxShadow: "0 22px 60px rgba(0,0,0,0.28)", background: "#1a1714" }}>
          {DRON_SRC ? (
            <OffthreadVideo src={DRON_SRC} muted style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          ) : (
            <AbsoluteFill>
              <Img src={PHOTOS[0]} style={{ width: "100%", height: "100%", objectFit: "cover", filter: "brightness(0.55)" }} />
              <AbsoluteFill style={{ alignItems: "center", justifyContent: "center", flexDirection: "column" }}>
                <div style={{ width: 0, height: 0, borderLeft: "46px solid #fff", borderTop: "30px solid transparent", borderBottom: "30px solid transparent", marginBottom: 22, filter: "drop-shadow(0 4px 12px rgba(0,0,0,0.5))" }} />
                <div style={{ fontFamily: SANS, fontWeight: 800, fontSize: 40, color: "#fff", letterSpacing: 2, textShadow: "0 2px 14px rgba(0,0,0,0.6)" }}>PRZELOT DRONEM</div>
                <div style={{ fontFamily: SANS, fontWeight: 600, fontSize: 24, color: "#e9c84a", letterSpacing: 3, marginTop: 8 }}>(tu wygenerujemy shot)</div>
              </AbsoluteFill>
            </AbsoluteFill>
          )}
        </div>
      </div>
    </AbsoluteFill>
  );
};
