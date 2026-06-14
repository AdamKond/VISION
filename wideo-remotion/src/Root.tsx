import { Composition } from "remotion";
import { SlideShow } from "./SlideShow";

export const RemotionRoot = () => {
  return (
    <Composition
      id="SlideShow"
      component={SlideShow}
      durationInFrames={90 + 4 * 120}
      fps={30}
      width={1080}
      height={1920}
    />
  );
};
