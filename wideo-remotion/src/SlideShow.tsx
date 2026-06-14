import React from "react";
import {
  AbsoluteFill, interpolate, useCurrentFrame,
  Img, Video, Easing, staticFile, Sequence,
} from "remotion";

const INTRO_DUR = 90;  // 3 s intro
const SLIDE_DUR = 120; // 4 s @ 30fps
const TRANS     = 8;

const BG     = "#e8e6e2";
const B_W    = 330;  const B_H = 570;  const B_X = 56;  const B_Y = 530;
const A_W    = 594;  const A_H = 1020; const A_X = 432; const A_Y = 300;
const RADIUS = 50;
const SHADOW = "0 28px 80px rgba(0,0,0,0.20), 0 6px 18px rgba(0,0,0,0.10)";

const pairs = [
  { beforeImg: staticFile("before-b09.jpg"), afterVid: staticFile("after-vid-korytarz.mp4")         },
  { beforeImg: staticFile("before-b01.jpg"), afterVid: staticFile("after-vid-salon.mp4")            },
  { beforeImg: staticFile("before-b11.jpg"), afterVid: staticFile("after-vid-taras-jadalnia.mp4")   },
  { beforeImg: staticFile("before-b12.jpg"), afterVid: staticFile("after-vid-taras-wypoczynek.mp4") },
];

const LightSweep: React.FC<{ localFrame: number }> = ({ localFrame }) => {
  if (localFrame > 55) return null;
  const pos = interpolate(localFrame, [5, 50], [-0.5, 1.5], {
    easing: Easing.out(Easing.quad),
    extrapolateLeft: "clamp", extrapolateRight: "clamp",
  });
  const alpha = interpolate(localFrame, [5, 12, 44, 55], [0, 0.20, 0.20, 0], {
    extrapolateLeft: "clamp", extrapolateRight: "clamp",
  });
  return (
    <div style={{ position: "absolute", inset: 0, overflow: "hidden", pointerEvents: "none" }}>
      <div style={{
        position: "absolute",
        left: `${pos * 100}%`, top: "-20%",
        width: 120, height: "140%",
        background: "linear-gradient(105deg, transparent 0%, rgba(255,255,255,0.95) 50%, transparent 100%)",
        transform: "translateX(-50%) skewX(-12deg)",
        opacity: alpha,
      }} />
    </div>
  );
};

const cardStyle = (x: number, y: number, w: number, h: number) => ({
  position: "absolute" as const,
  left: x, top: y, width: w, height: h,
  borderRadius: RADIUS, overflow: "hidden" as const,
  boxShadow: SHADOW,
});

// Jeden slajd — useCurrentFrame() zwraca 0-119 wewnątrz Sequence
const PairSlide: React.FC<{ pair: typeof pairs[0] }> = ({ pair }) => {
  const f = useCurrentFrame();

  const opacity = f < TRANS
    ? interpolate(f, [0, TRANS], [0, 1], { extrapolateRight: "clamp" })
    : f > SLIDE_DUR - TRANS
    ? interpolate(f, [SLIDE_DUR - TRANS, SLIDE_DUR], [1, 0], { extrapolateRight: "clamp" })
    : 1;

  return (
    <>
      {/* Before label */}
      <div style={{
        position: "absolute", left: B_X, top: B_Y - 92,
        fontFamily: "sans-serif", fontWeight: 800, fontSize: 68,
        color: "#111", letterSpacing: -2, lineHeight: 1, opacity,
      }}>Before</div>

      {/* Before — statyczne zdjęcie */}
      <div style={{ ...cardStyle(B_X, B_Y, B_W, B_H), opacity }}>
        <Img src={pair.beforeImg} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
      </div>

      {/* After label */}
      <div style={{
        position: "absolute", left: A_X, top: A_Y - 116,
        fontFamily: "sans-serif", fontWeight: 800, fontSize: 114,
        color: "#111", letterSpacing: -4, lineHeight: 1, opacity,
      }}>After</div>

      {/* After — film AI z ruchem kamery, startFrom={0} działa bo Sequence resetuje zegar */}
      <div style={{ ...cardStyle(A_X, A_Y, A_W, A_H), opacity }}>
        <Video
          src={pair.afterVid}
          startFrom={0}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
          muted
        />
        <LightSweep localFrame={f} />
      </div>
    </>
  );
};

const Intro: React.FC = () => {
  const f = useCurrentFrame();

  const fadeIn  = interpolate(f, [0, 18], [0, 1], { extrapolateRight: "clamp" });
  const fadeOut = interpolate(f, [INTRO_DUR - 14, INTRO_DUR], [1, 0], { extrapolateRight: "clamp" });
  const opacity = Math.min(fadeIn, fadeOut);

  const slideUp = interpolate(f, [0, 22], [40, 0], {
    easing: Easing.out(Easing.cubic),
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill style={{ background: BG, alignItems: "center", justifyContent: "center" }}>
      <div style={{ opacity, transform: `translateY(${slideUp}px)`, textAlign: "center", padding: "0 80px" }}>
        <div style={{
          fontFamily: "sans-serif", fontWeight: 900, fontSize: 52,
          color: "#888", letterSpacing: 10, textTransform: "uppercase",
          marginBottom: 24,
        }}>Home Staging</div>

        <div style={{
          fontFamily: "sans-serif", fontWeight: 800, fontSize: 128,
          color: "#111", letterSpacing: -4, lineHeight: 1,
          marginBottom: 32,
        }}>ul. Różana</div>

        <div style={{
          fontFamily: "sans-serif", fontWeight: 400, fontSize: 52,
          color: "#555", letterSpacing: 2,
          marginBottom: 48,
        }}>Lublin · Czuby</div>

        <div style={{
          fontFamily: "sans-serif", fontWeight: 900, fontSize: 96,
          color: "#111", letterSpacing: -2, lineHeight: 1,
        }}>774 000 zł</div>

        <div style={{
          fontFamily: "sans-serif", fontWeight: 400, fontSize: 44,
          color: "#888", letterSpacing: 1,
          marginTop: 16,
        }}>64,47 m²</div>
      </div>
    </AbsoluteFill>
  );
};

export const SlideShow: React.FC = () => (
  <AbsoluteFill style={{ background: BG }}>
    <Sequence from={0} durationInFrames={INTRO_DUR}>
      <Intro />
    </Sequence>
    {pairs.map((pair, i) => (
      <Sequence key={i} from={INTRO_DUR + i * SLIDE_DUR} durationInFrames={SLIDE_DUR}>
        <PairSlide pair={pair} />
      </Sequence>
    ))}
  </AbsoluteFill>
);
