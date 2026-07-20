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
import SlideObservations, { meta as mObs } from "./slides/Slide09Observations";
import SlideAligning, { meta as mAlign } from "./slides/Slide09Aligning";
import Slide09GTM, { meta as m09gtm } from "./slides/Slide09GTM";
import Slide09BizModel, { meta as m09biz } from "./slides/Slide09BusinessModel";
import Slide10, { meta as m10 } from "./slides/Slide10Market";
import Slide11, { meta as m11 } from "./slides/Slide11Competition";
import SlideCollaboration, { meta as mCollab } from "./slides/Slide10Collaboration";
import Slide11Moat, { meta as m11moat } from "./slides/Slide11Moat";
import Slide11Partnerships, { meta as m11partnerships } from "./slides/Slide11Partnerships";
import Slide11CostStructure, { meta as m11costs } from "./slides/Slide11CostStructure";
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
  // Act 1 — Make us care (Problem & Context)
  { Component: Slide01, meta: m01 },             // Hook: Silent photo · "She did everything right."
  { Component: Slide02, meta: m02 },             // Unexpected Insight: "99% outside hospitals"
  { Component: Slide03, meta: m03 },             // Fragmentation: Disconnected islands (Notebooks, WhatsApp, Memory)
  { Component: Slide04, meta: m04 },             // Mama Akinyi's journey timeline
  
  // Act 2 — The Revelation & Insight
  { Component: Slide05, meta: m05 },             // TotoAfya reveal: Journey becomes connected (magical green line & logo)
  { Component: Slide06, meta: m06 },             // Contrarian Insight: "Wrong problem vs Continuity of care"
  
  // Act 3 — Product Outcomes & Traction
  { Component: Slide07, meta: m07 },             // Outcome 1 (Nurse): "She knew before it became an emergency."
  { Component: Slide08, meta: m08 },             // Outcome 2 (Mother): "She never missed another visit."
  { Component: Slide09CHV, meta: m09chv },       // Outcome 3 (CHV/Offline): "Care continued even without internet."
  { Component: Slide09, meta: m09 },             // Traction: "Real people. Real care. Real proof."
  { Component: SlideObservations, meta: mObs },  // Credibility: "What we learned" observations
  { Component: SlideAligning, meta: mAlign },     // Alignment: "Everything is finally aligning" converging circles
  
  // Act 4 — The Business Case & Scale
  { Component: Slide09GTM, meta: m09gtm },       // Go-To-Market: acquiring 1,000 mothers
  { Component: Slide09BizModel, meta: m09biz },   // Business Model: diversified revenue streams & value metrics
  { Component: Slide10, meta: m10 },             // Market: Geographic scaling (Kenya -> East Africa -> Africa)
  { Component: Slide11, meta: m11 },             // Competition: Journey tracks comparison
  { Component: SlideCollaboration, meta: mCollab }, // Defensibility: "The Collaboration Layer"
  { Component: Slide11Moat, meta: m11moat },       // Moat: Technical and loop defensibility
  { Component: Slide11Partnerships, meta: m11partnerships }, // Partnerships: county MoH, CHVs, telecoms, Britam
  { Component: Slide11CostStructure, meta: m11costs }, // Cost Structure: fixed vs variable operational split
  { Component: Slide12, meta: m12 },             // Team: Obsession vs Credentials ("Built alongside...")
  { Component: Slide13, meta: m13 },             // The Ask: Seed funding
  { Component: Slide14, meta: m14 },             // Final Sentence: "Every mother deserves..." -> Black screen silence
];
