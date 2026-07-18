import type { ReactElement } from "react";
import Slide01, { meta as m01 } from "./slides/Slide01Hook";
import Slide02, { meta as m02 } from "./slides/Slide02Stat";
import Slide03, { meta as m03 } from "./slides/Slide03Problem";
import Slide04, { meta as m04 } from "./slides/Slide04ProblemVisual";
import Slide05, { meta as m05 } from "./slides/Slide05Solution";
import Slide06, { meta as m06 } from "./slides/Slide06HowItWorks";
import Slide07, { meta as m07 } from "./slides/Slide07Outcome1";
import Slide08, { meta as m08 } from "./slides/Slide08Outcome2";
import Slide09CHV, { meta as m09chv } from "./slides/Slide07WhyNow";
import Slide09, { meta as m09 } from "./slides/Slide09Traction";
import Slide10, { meta as m10 } from "./slides/Slide10Market";
import Slide11, { meta as m11 } from "./slides/Slide11Competition";
import Slide12, { meta as m12 } from "./slides/Slide12Team";
import Slide13, { meta as m13 } from "./slides/Slide13Vision";
import Slide14, { meta as m14 } from "./slides/Slide14Final";

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
  // Act 1 — Make us care
  { Component: Slide01, meta: m01 },   // Silent photo · "She did everything right."
  { Component: Slide02, meta: m02 },   // 280,000+ mothers
  { Component: Slide03, meta: m03 },   // Fragmented chain — show don't tell
  { Component: Slide04, meta: m04 },   // Mama Akinyi's journey
  // Act 2 — Reveal
  { Component: Slide05, meta: m05 },   // TotoAfya revealed · green lines connect
  { Component: Slide06, meta: m06 },   // The contrarian insight
  // Act 3 — Product stories
  { Component: Slide07, meta: m07 },   // Nurse story · "She knew before"
  { Component: Slide08, meta: m08 },   // Mother story · "She didn't miss"
  { Component: Slide09CHV, meta: m09chv }, // CHV story · "Nobody slipped through"
  // Act 4 — The business
  { Component: Slide09, meta: m09 },   // Traction
  { Component: Slide10, meta: m10 },   // Market map
  { Component: Slide11, meta: m11 },   // Competition journey
  { Component: Slide12, meta: m12 },   // Team · obsession
  { Component: Slide13, meta: m13 },   // The ask
  { Component: Slide14, meta: m14 },   // Final sentence · silence
];
