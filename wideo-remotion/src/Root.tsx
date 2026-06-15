import { Composition } from "remotion";
import { SlideShow } from "./SlideShow";
import { DayVsNight, DVN_TOTAL } from "./DayVsNight";
import { Metamorfoza, META_TOTAL } from "./Metamorfoza";
import { ViralDron, VIRAL_TOTAL } from "./ViralDron";

export const RemotionRoot = () => {
  return (
    <>
      <Composition
        id="SlideShow"
        component={SlideShow}
        durationInFrames={90 + 4 * 120}
        fps={30}
        width={1080}
        height={1920}
      />
      <Composition
        id="DayVsNight"
        component={DayVsNight}
        durationInFrames={DVN_TOTAL}
        fps={30}
        width={1080}
        height={1920}
      />
      <Composition
        id="Metamorfoza"
        component={Metamorfoza}
        durationInFrames={META_TOTAL}
        fps={30}
        width={1080}
        height={1920}
      />
      <Composition
        id="ViralDron"
        component={ViralDron}
        durationInFrames={VIRAL_TOTAL}
        fps={30}
        width={1080}
        height={1920}
      />
    </>
  );
};
