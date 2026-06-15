import React from "react";
import {
  AbsoluteFill, interpolate, useCurrentFrame, OffthreadVideo, Easing, staticFile, Sequence,
} from "remotion";

// Klipy z Higgsfield: powolne wgłębienie do środka. Najpierw DZIEŃ, potem NOC.
const CLIPS = [
  staticFile("dvn-mv-day-1.mp4"), staticFile("dvn-mv-day-2.mp4"),
  staticFile("dvn-mv-day-3.mp4"), staticFile("dvn-mv-day-4.mp4"),
  staticFile("dvn-mv-night-1.mp4"), staticFile("dvn-mv-night-2.mp4"),
  staticFile("dvn-mv-night-3.mp4"), staticFile("dvn-mv-night-4.mp4"),
];
const DAY_COUNT = 4;

const DISP = 120;                // 4 s na ujęcie (pełny klip PRO)
const XF   = 12;                 // przenikanie 0,4 s
const STEP = DISP - XF;          // 60
const TOTAL = (CLIPS.length - 1) * STEP + DISP;   // 495 ≈ 16,5 s
const BOUNDARY = DAY_COUNT * STEP;                // dzień→noc ≈ 240

const SERIF = "Georgia, 'Times New Roman', serif";

// Jedno ujęcie — klip wideo z przenikaniem na brzegach
const Shot: React.FC<{ src: string }> = ({ src }) => {
  const f = useCurrentFrame();
  const opacity =
    f < XF ? interpolate(f, [0, XF], [0, 1]) :
    f > DISP - XF ? interpolate(f, [DISP - XF, DISP], [1, 0]) : 1;
  return (
    <AbsoluteFill style={{ opacity }}>
      <OffthreadVideo src={src} muted style={{ width: "100%", height: "100%", objectFit: "cover" }} />
    </AbsoluteFill>
  );
};

// Napis na środku: "Day / vs / Night" — Day w dzień, Night w nocy
const CenterLabel: React.FC = () => {
  const gf = useCurrentFrame();
  const dayOp   = interpolate(gf, [12, 30, BOUNDARY - 10, BOUNDARY + 14], [0, 1, 1, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const nightOp = interpolate(gf, [BOUNDARY - 2, BOUNDARY + 20], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });

  const word: React.CSSProperties = {
    fontFamily: SERIF, fontWeight: 500, fontSize: 100, color: "#fff",
    letterSpacing: 2, lineHeight: 1.12, textShadow: "0 2px 28px rgba(0,0,0,0.6)",
  };
  return (
    <AbsoluteFill style={{ alignItems: "center", justifyContent: "center" }}>
      <div style={{ textAlign: "center" }}>
        <div style={{ ...word, opacity: dayOp }}>Day</div>
        <div style={{ ...word, fontStyle: "italic", fontSize: 54, margin: "6px 0", opacity: 0.95 }}>vs</div>
        <div style={{ ...word, opacity: nightOp }}>Night</div>
      </div>
    </AbsoluteFill>
  );
};

export const DayVsNight: React.FC = () => (
  <AbsoluteFill style={{ background: "#000" }}>
    {CLIPS.map((src, i) => (
      <Sequence key={i} from={i * STEP} durationInFrames={DISP}>
        <Shot src={src} />
      </Sequence>
    ))}

    {/* Delikatna winieta pod tekst */}
    <AbsoluteFill style={{ background: "radial-gradient(70% 50% at 50% 50%, rgba(0,0,0,0.28) 0%, transparent 60%)" }} />

    <CenterLabel />
  </AbsoluteFill>
);

export const DVN_TOTAL = TOTAL;
