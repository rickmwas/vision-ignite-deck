import type { ReactElement } from "react";
import Slide01, { meta as m01 } from "./slides/Slide01Hook";
import Slide02, { meta as m02 } from "./slides/Slide02Stat";
import Slide03, { meta as m03 } from "./slides/Slide03Problem";
import Slide04, { meta as m04 } from "./slides/Slide04ProblemVisual";
import Slide05, { meta as m05 } from "./slides/Slide05Solution";
import Slide06, { meta as m06 } from "./slides/Slide06HowItWorks";
import Slide07WhyNow, { meta as m07wn } from "./slides/Slide07WhyNow";
import Slide07, { meta as m07 } from "./slides/Slide07Outcome1";
import Slide08, { meta as m08 } from "./slides/Slide08Outcome2";
import Slide09, { meta as m09 } from "./slides/Slide09Traction";
import Slide10, { meta as m10 } from "./slides/Slide10Market";
import Slide11, { meta as m11 } from "./slides/Slide11Competition";
import Slide12, { meta as m12 } from "./slides/Slide12Team";
import Slide13, { meta as m13 } from "./slides/Slide13Vision";

export type SlideMeta = {
  objective: string;
  headline: string;
  emotionalGoal: string;
};

export type SlideEntry = {
  Component: (props: { index: number; total: number }) => ReactElement;
  meta: SlideMeta;
};

export const slides: SlideEntry[] = [
  { Component: Slide01, meta: m01 },
  { Component: Slide02, meta: m02 },
  { Component: Slide03, meta: m03 },
  { Component: Slide04, meta: m04 },
  { Component: Slide05, meta: m05 },
  { Component: Slide06, meta: m06 },
  { Component: Slide07WhyNow, meta: m07wn },
  { Component: Slide07, meta: m07 },
  { Component: Slide08, meta: m08 },
  { Component: Slide09, meta: m09 },
  { Component: Slide10, meta: m10 },
  { Component: Slide11, meta: m11 },
  { Component: Slide12, meta: m12 },
  { Component: Slide13, meta: m13 },
];
