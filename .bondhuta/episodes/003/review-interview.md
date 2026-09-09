# Review — Interview (পর্ব ৩)

Reviewer stance: senior engineer who has actually trained models, reading a beginner's
explanation of why online updates don't destroy each other. Draft read in full:
`src/pages/neural-network/NeuralNetworkInterference.tsx` (560 lines).

---

## The interview

### X-01  must-answer
episode-claim: smaller η "protects" আবুলের শেখা is false because scaling every weight
  by the same factor doesn't change any sign (lines 461–476), and because η never
  touches the arbitrary starting guess W₀ (lines 478–486).
quote: "ধরো সব weight অর্ধেক করে দিলাম। তাহলে প্রত্যেকের sum-ও অর্ধেক হয়ে যাবে —
  কিন্তু কারো চিহ্ন বদলাবে না." (lines 463–465), with its own caveat "এই যুক্তিটা
  তখনই খাটে যখন শুরুর W-টাকেও একই সাথে ছোট করা হয়" (lines 473–476).
question: The episode itself concedes this scale-invariance argument does **not**
  apply to the actual scenario it just computed (η halved, W₀ fixed) — that's exactly
  the η=0.5 example on lines 410–441. In that real, on-page example, বাবুলের
  interference genuinely dropped from 1.7400 to 0.8700 (line 438). A sharp মোটু has
  just watched a concrete number get smaller and is then handed an abstract
  hypothetical that admits it doesn't apply here. The two numbers the episode already
  computed — আবুলের own-update result 0.90125 (line 417) and বাবুলের interference at
  η=0.5, −0.8700 (line 438) — combine to 0.90125 − 0.8700 = 0.03125. That is a genuine,
  cheap, on-page number showing আবুল ends up *closer* to the boundary at η=0.5 than at
  η=1 (0.3125), i.e. objectively **less** safe, not more. The episode never computes
  this combined number, so its strongest, most concrete rebuttal to the misconception
  is left on the table in favour of a hypothetical the text itself flags as
  inapplicable.
why-it-matters: knowledge.md marks this misconception load-bearing #5 and explicitly
  "not shippable" without a fully convincing kill (E-003 blocking, roundtable ruling
  B: "if compression ever proposes cutting the η misconception while keeping η, cut η
  entirely instead"). As currently written, the refutation is *correct* but not as
  concrete as the episode's own worked numbers allow, and a careful reader who notices
  the caveat at lines 473–476 is left without a number that directly answers "but 0.87
  is less than 1.74 — isn't that less damage?"
suggested-answer-length: one line, computed from numbers already on screen
  (0.90125 − 0.8700 = 0.03125, "আরও কাছাকাছি চলে এলো 0-এর — নিরাপদ নয়, বরং আরও ঠুনকো")
where: immediately after line 441 ("ঠিক অর্ধেক"), before the section break at line 443

### X-02  should-answer
episode-claim: "যে নিজের ভুল শোধরাচ্ছে, তার নিজের sum কখনো ভুল দিকে যায় না... নিজের
  update নিজেকে কখনো ঠকায় না." (lines 304–309)
question: This is worded precisely — it claims the *direction* of a self-correction is
  always right, not that the *magnitude* is always sufficient to flip a prediction in
  one step. That precision is good, and the wording avoids the false claim tested for
  in banned-inference #1. But the episode never poses the natural senior follow-up: is
  "never fails" the same as "always fixes in one step"? কাবুলের case (line 312–314,
  "সে উঠে দাঁড়ালো") happens to be a full correction, and nothing in the text flags
  that this isn't guaranteed — a self-update could, in principle, move a very deep
  deficit toward zero without crossing it, needing another epoch. The dataset never
  actually demonstrates this case (all self-corrections shown do fully flip), so there
  is no false claim on the page — but a reader could easily conflate "direction
  guaranteed" with "correction guaranteed complete."
why-it-matters: this is exactly the gap the beat is built to close (নড়া ≠ মোছা), and
  leaving "always helps" ambiguous between "helps in direction" and "helps enough"
  undercuts the precision the rest of the episode works hard to maintain.
suggested-answer-length: one clause
where: right after line 309, folded into the same sentence — e.g. "...নিজেকে কখনো
  ঠকায় না — যদিও একবারে পুরোটা ঠিক না-ও হতে পারে, দিকটা সবসময় ঠিক।"

### X-03  deliberate and well-handled
episode-claim: η's real reason for existing, and where its value "should" be set, is
  never stated.
where-checked: lines 379–521 (the entire η section) contain no forward-promise about
  η's deeper meaning.
verdict: correctly silent. knowledge.md and roundtable E-021 explicitly forbid
  foreshadowing η's second meaning (owned by পর্ব ১০'s reveal), and the episode does
  not violate this — it reveals η existed, shows its scaling role, kills the folklore,
  and stops. The scale/normalisation debt (a different, adjacent topic) IS explicitly
  re-committed ("ওটা আমার ঋণ, আর ওটা আমি শোধ করবো", lines 518–519), which is the
  correct treatment for an *owed* topic. η itself owes the reader nothing yet because
  the brief forbids opening that loop. Not a hole.

### X-04  deliberate and well-handled
episode-claim: the settling shown is 6 epochs on 4 students; does the reader learn
  anything they're entitled to extrapolate to hundreds of students?
where-checked: every convergence statement is scoped — "আমাদের চারজনের ডেটায়" (line
  363–364), "এই চারজনের বেলায় কক্ষনো না" (line 148), the explicit unproven-assumption
  beat (lines 360–367).
verdict: well-handled. No sentence in the draft implies the six-epoch settling
  generalizes beyond this dataset; the assumption ("এমন একটা W আছে... আজ শুধু ধরেই
  নিচ্ছি, প্রমাণ করছি না") is stated as the main clause before the explanation, per
  E-013's ruling, and named as unconfirmed. This correctly refuses the reader a false
  universal conclusion.

### X-05  deliberate and well-handled
episode-claim: the fixed order আবুল→বাবুল→কাবুল→দাবুল is used throughout — does the
  episode imply the result is order-independent?
where-checked: lines 361–367 use "একটা W" (a W), never "the" or "সঠিক" W; no sentence
  claims the specific converged weights [−3.0, 3.40, 3.10, 0.70] would appear under a
  different order.
verdict: correctly silent in both directions, matching research §7 and banned
  inference #7. No overclaim found.

### X-06  should-answer (borderline out-of-scope)
episode-claim: "প্রথম ঘরটার দিকে তাকাও — 1×1... আর বাকি তিনটে ঘর প্রতিটাই দুটো ধনাত্মক
  ভগ্নাংশের গুণফল, কাজেই কোনোটা ঋণাত্মক হতে পারে না। তার মানে যোগফলটা সবসময় 1-এর সমান
  বা বেশি." (lines 166–169)
question: this "structurally impossible for interference to be zero" claim depends on
  ALL features being non-negative (percentages, in this dataset). A reader who has
  internalized "x₀ = 1 means no two examples can ever be independent" as a general law
  (rather than a property of this specific non-negative-feature dataset) would be
  wrong the moment they meet standardized/z-scored features with negative values,
  which is common in real practice. The scoping word "এই চারজনের বেলায়" (line 148) is
  present, but the *reason* the scoping is necessary (non-negativity, not just "these
  four") is not spelled out.
why-it-matters: the episode's own originality beat (x₀=1 ⟹ no independence) is the
  single most memorable structural claim in the piece; if a reader walks away
  believing it as a universal law of the bias trick rather than a property of
  non-negative features, that is a durable misconception this series would have
  planted rather than corrected.
suggested-answer-length: this genuinely belongs with normalisation/feature scaling —
  propose for `state/open-loops.md`, owned by পর্ব ৫ (which already owns OL-02), not a
  fix inside পর্ব ৩. Flagging here only so it isn't lost.
where: n/a — out-of-scope for this episode; do not file as a finding against the draft.

---

## Narrative and character

beats present: HOOK ✓ (intro-text, lines 7–12) · QUESTION ✓ (§ "নষ্ট হওয়া মাপবো
  কীসে?", line 22) · INTUITION ✓ (concept-box, lines 56–65) · MECHANISM ✓ (§3–4) ·
  WORKED EXAMPLE ✓ (§5 spine, lines 181–225) · THE "দাঁড়াও" ✓ (§7, line 257) ·
  DEEPER ✓ (§8, line 299) · LIMIT ✓ (§9–10, lines 337–377, plus §12 as LIMIT-২) ·
  CONSOLIDATE ✓ (§13, lines 488–534) · NEXT QUESTION ✓ (highlight-text, lines 553–556).
  All ten beats present, in the canonical order. No missing beat.

starts-at-confusion: yes. The intro-text (lines 7–12) opens directly on the gap
  between two numbers the reader already read in পর্ব ২ (2.05, then 0.31) rather than
  recapping or announcing a topic. No warm-up paragraphs.

মোটুর questions: counted 12 `dialog-box motu` turns (lines 26, 113, 137, 208, 283,
  327, 339, 421, 445, 490, 525, 538) against a blueprint plan of 10 — a minor drift
  from the plan, not a narrative defect (each turn still does work; not filing this as
  a finding since it is a planning-vs-draft accounting mismatch, not a reader-facing
  problem).
  - Line 137–143 ("এমন দুজন কি থাকতে পারে, যাদের একজন আরেকজনকে একটুও নাড়ায় না?") is
    the textbook example of "right question, wrong time" — it anticipates the
    structural x₀=1 claim one beat before ভতু gets there, and its answer *is* the next
    section. Best turn in the episode.
  - Line 421–427 (মোটুর নিজের শর্টকাট cross-check) and line 208–214 (recognizing 0.31)
    are lower-marginal-value — they don't introduce new information — but they are not
    decorative either: the first invites the reader to verify the formula by hand
    (the series' habit of making the reader do arithmetic), and the second is the
    emotional payoff of the episode's central promise ("তোর নিজের কষা সংখ্যা দিয়েই
    পুরোটা মিলিয়ে দেবো," line 17–18). Deleting either would cost the episode its
    "this is your own data" feeling. Zero turns are purely decorative by my count.

the two shocks: the spine (2.0525 → 0.3125) lands with both arithmetic (lines
  190–206) and an emotional beat — মোটুর "আরে!" (line 211) plus the SVG figure (lines
  227–255) visualizing the fall. The দাঁড়াও (কাবুল, 1.7675 → −0.4425) is set up with a
  direct rhetorical challenge before any number appears — "আবুল বেঁচে গেছে দেখে
  ভাবছিস... দাঁড়া — কাবুলের দিকে তাকা" (lines 261–264) — and মোটুর shocked reaction
  ("কিন্তু কাবুল তো একটাও ভুল করেনি!", lines 286–288) confirms the reader is meant to
  be rattled, not just shown a number. Both shocks are earned, not just computed.

ending: door, not receipt. highlight-text (lines 553–556) asks what a "working" W
  actually means and what the four converged numbers draw on paper — a question that
  only makes sense once this episode's content (0-as-boundary, the assumed W) has been
  absorbed. No F12 recap violation at the true ending.
  One thing to watch, not a violation: §13's CONSOLIDATE (lines 525–534) is motu
  summarizing "এক... দুই... আর তিন..." in prose inside a `dialog-box` rather than a
  `concept-box` — per roundtable E-019 this relocation was a deliberate F12 mitigation
  ("a boxed bullet list reads as a summary, speech does not"). It works, but the
  three-item enumerated structure still leans toward recap tone more than any other
  passage in the draft; it is the correct trade given CONSOLIDATE is a required beat,
  not a defect.

relief-earned: yes, mostly. §7→§8 correctly makes the reader sit with "কাবুলের ঠিক
  উত্তরটা ভেঙে গেল" before offering the repair (lines 291–309). The one place relief
  arrives slightly under-earned is the η misconception kill (X-01 above) — the
  rebuttal pivots to a hypothetical the text itself flags as not-quite-applicable
  instead of using the two numbers already computed on the same page.

---

## Originality

Web search performed on the core mechanism ("perceptron online learning interference
weight update dot product") surfaces the CIML textbook (ciml.info) explicitly
describing the same phenomenon in the same terms: an update computed from one example
can "inadvertently push the weight vector in a direction that misclassifies
previously-learned examples," derived via the same dot-product algebra
(`w ← w + yx`, `score(x) = w·x`). A second search on the η-misconception ("smaller
learning rate protects previous weights, myth") surfaces general-audience material
(MachineLearningMastery and others) that already states plainly that a smaller
learning rate is "simply a scaling factor" with "no special protective mechanism."

So: **the core interference mechanism (dot-product algebra explaining why one
update moves another example's score) is first-page material** — a reader could find
this exact derivation, in English, in a standard course PDF. The episode does not
overclaim novelty here and the compression/precision of presenting it via পর্ব ২'s own
already-taught `WᵀX` is good pedagogy, but it is not a new idea.

What is genuinely not on the first page:
- **The x₀ = 1 structural argument** (lines 166–179), tied explicitly back to পর্ব ২'s
  throwaway line "x₀ = 1 ... শুধু দেখতে সুন্দর হয়" (`NeuralNetworkLearning.tsx:147–150`,
  quoted almost verbatim at line 175). Turning a cosmetic aside from the previous
  episode into the structural reason interference is unavoidable in this dataset is a
  genuine connection between two things standard tutorials keep separate (the bias
  trick, taught as notational convenience, and interference, taught as a separate
  topic). This is real, series-specific originality — but per X-06, its scope
  (non-negative features) is left implicit, which slightly limits how much predictive
  power the reader actually walks away with.
- **Reconciling against numbers already printed in পর্ব ২** rather than a fresh toy
  example (the entire spine and দাঁড়াও sections use only numbers the reader has
  already seen and can flip back to check) is a structural device, not a content fact,
  but it is not something a generic tutorial does — most explain interference with a
  brand-new small example. This raises trust in a way search results can't replicate.
- The η misconception-kill argument (sign-invariance under uniform scaling, plus the
  "protects our guess, not আবুলের শেখা" reframing) is close to, but sharper than, the
  generic "LR is just a scale factor" material found on the first page — it is
  Bangladeshi-audience-appropriate and dataset-grounded, but the underlying insight
  (LR ≠ protection) is not new to English-language ML pedagogy.

Verdict: the episode clears the bar, but narrowly. Its originality rests almost
entirely on the x₀=1 callback and the reconcile-with-your-own-past-numbers structure;
strip those two devices and what remains (interference algebra, LR-doesn't-protect)
is standard material available on page one of a search.

---

## Scores

narrative-and-character: 87 / 100
  - −5: X-01's η misconception rebuttal reaches for an inapplicable hypothetical
    instead of the two numbers already on the page (lines 461–486), slightly
    under-earning the relief at that beat.
  - −3: X-02's "নিজের update নিজেকে কখনো ঠকায় না" (lines 304–309) is precise but
    leaves the direction-vs-sufficiency distinction implicit, a small ambiguity in the
    episode's most important resolution sentence.
  - −2: §13's CONSOLIDATE (lines 525–534), while correctly moved to dialogue per
    E-019, is still a three-item enumerated list and is the passage closest to F12
    recap tone in the draft, even though it does not violate the rule.
  - +: all ten beats present in order, starts at confusion, both shocks properly
    earned, ending is a genuine door, zero purely decorative dialogue turns found.

originality: 80 / 100
  - −12: the core mechanism (dot-product interference from an online update) is
    directly findable on the first page of English search results (CIML course
    material makes the same derivation in the same terms).
  - −5: the x₀=1 structural claim, this episode's best original beat, does not flag
    that it depends on non-negative features (X-06) — limiting how much of a portable
    prediction the reader actually gets to keep.
  - +: the x₀=1/পর্ব ২ callback and the reconcile-against-your-own-past-page structure
    are genuinely not obtainable from a generic search, and they are the reason this
    clears 75 rather than sitting below it.

---

## Iteration 2

Draft re-read in full at 600 lines (was 560; net +40). Line numbers below refer to
the current file.

### X-01 — RESOLVED

The section now (lines 457–489) does exactly what my suggested-answer-length asked
for, not a paraphrase of it — the writer used my own arithmetic. Sequence: মোটু states
the folklore (459–465) → ভতু concedes the trap with self-implication, "আমিও একসময়
এটাই ভাবতাম" (470, preserved verbatim as the orchestrator noted) → a compact two-line
`code-box` puts both epochs side by side (477–478: `η=1.0: ... = 0.31250` /
`η=0.5: ... = 0.03125`) → the kill lands in prose immediately after: "0 পেরিয়ে যাওয়ার
দশ গুণ বেশি কাছে... আরও নাজুক করে রেখে গেছে" (484–486). Only *then* does it pivot to
the sign-invariance generalisation ("এর একটা সাধারণ রূপ আছে," 486–487), which is now
correctly framed as the *general form* of a claim already demonstrated concretely,
not as the demonstration itself. This is the right order — concrete number first,
abstraction second — and it is exactly the gap I flagged.

Does it land warmly? Yes. The `code-box` is two lines, not a wall of arithmetic — it
doesn't compete with the emotional beat, it supplies it. And মোটু is not punished:
ভতু's line opens by putting herself in the same trap first, which is the series'
established way of correcting মোটু without condescension (the verdict's own note that
this line is "better than anything in পর্ব ২" still holds — it's unchanged). I do not
find a new problem at this anchor. **Closing this, per the regression guard.**

One residual, minor, not filed as a finding: after the "দশ গুণ কাছে" reveal (484–486)
there is no মোটু reaction before the section pivots into the sign-invariance
formula-box (491–501) and then a further ~25-line ভতু run through to line 515. The
sharpest emotional beat in the whole η section — মোটুর own hypothesis inverted with a
number — passes without him getting to react to it, unlike the parallel spine reveal
at line 211 ("আরে!"). This is real but small, and fixing it costs lines the file
cannot currently afford (see X-07 below on total length) — I'm noting it, not filing
it, because a should-answer here would just be asking for length the compression stage
will delete anyway.

### X-02 — unchanged, still open

The added back-reference at 306–310 ("এটা তুই দেখেই ফেলেছিস: আবুলের −0.25 থেকে
2.0525-এ ওঠাটা ঠিক এই জিনিস") ties the "নিজের update নিজেকে কখনো ঠকায় না" claim to a
concrete number, which is a good instinct — but it cites a case where the
self-correction happened to fully flip the sign in one step. That doesn't close the
direction-vs-sufficiency gap I flagged; if anything, anchoring the claim to a
full-flip example makes the unstated "always flips completely" reading slightly more
tempting, not less, since the reader's only concrete referent for the sentence is now
a case where direction-correct and magnitude-sufficient happened to coincide. I'm not
treating this as a new problem (same category, not worse in kind) — the deduction
carries over unchanged.

### CONSOLIDATE (§13) — improved, not fully closed

The beat (motu's three-point close, now at 566–575) is preceded by a ভতু turn
(555–562, re-committing the scale/normalisation debt) and a one-line narrative bridge
("মোটু একটু চুপ করে থেকে নিজের মতো করে গুছিয়ে বললো —", 564) that gives motu's summary
a diegetic reason to exist — he's processing অন্তর্দৃষ্টি out loud after being handed
new context, not reciting a recap on cue. That bridge line is doing real work and is
new. The content of the three-item "এক... দুই... আর তিন..." list itself is essentially
the same enumerated structure as before. Net: **better, not worse** — the setup now
earns the summary rather than just housing it in a `dialog-box`. I'm reducing this
deduction from −2 to −1; it is not fully closed because the list itself is still the
passage in the draft closest to recap tone, but the reason it isn't a violation is now
stronger than it was.

### The new ~40 lines (340–390) — a new pacing problem

This is the real finding of iteration 2. The additions the orchestrator pointed at —
the forward-pointer at 337–338 ("তবে ওর নিচে একটা শর্ত লুকিয়ে আছে — একটু পরেই
বলছি"), the condition clause at 366–367 ("না থামলে 'পরে ফিরে আসবে' কথাটার কোনো মানেই
থাকে না"), and the full cancellation-mechanism passage at 370–381 — are all placed
inside the same section ("🐢 কিন্তু ব্যাপারটা মসৃণ ছিল না", 340–390). The forward-
pointer and the condition clause are each one clause, cheap, and genuinely tighten the
logic (the condition clause in particular correctly makes explicit that "মোছে না" was
never unconditional — good precision, no complaint).

The cancellation-mechanism passage (370–381) is the problem, not for what it says —
the w₀-cancels/w₁-w₂-w₃-accumulate explanation is correct and adds real depth on *why*
6 non-monotonic epochs still settle — but for what it costs narratively. Counting
turns in this section: মোটু opens it (342–348), then ভতু answers across **four
consecutive dialog-box turns with zero মোটু interjection** (350–358, 360–368, 370–381,
383–390) — roughly 40 lines of unbroken monologue. This is the single longest
uninterrupted speaker run in the entire episode, and it lands in the one section whose
job is to model honesty about a rough edge ("আমি সেটা লুকাবো না"). The irony is that
the "here's an awkward thing I'm being straight with you about" beat is the least
dialogic stretch in the draft — it reads as a lecture at exactly the point the writing
is trying hardest to sound like a confession. This is a genuinely new problem: it did
not exist in iteration 1's 560-line draft, where this section was shorter and I did
not flag a consecutive-turn issue.

### X-07  should-answer
episode-claim: n/a — a structural/pacing issue, not a factual claim.
location: lines 340–390 ("🐢 কিন্তু ব্যাপারটা মসৃণ ছিল না")
question: four consecutive `dialog-box votu` turns (350–358, 360–368, 370–381,
  383–390) with no মোটু turn in between — does the reader stay inside the dialogue, or
  does this read as ভতু delivering a lecture?
why-it-matters: this is the series' signature mechanism (মোটু's question drives the
  next beat) going silent for its longest stretch, in the one section built around
  ভতু modelling honesty about an inconvenient result. It costs nothing factually, but
  it is a real dip in the thing this review is supposed to protect.
suggested-answer-length: cost-neutral. Do not add a line — split one of the existing
  votu turns (370–381 is the natural point, right after the w₀-cancels-but-w₁w₂w₃-
  accumulate explanation) with a 4–6 word motu beat carved from context, e.g. "মানে
  ওই বাকি অংশটাই জমে থাকছে?" — extracted from the surrounding prose rather than added
  net-new.
where: inside 370–381, before "w₁, w₂, w₃ কিন্তু ফেরেনি"

Note for the orchestrator, not a finding: the file is at 600 lines against an
authorised ceiling of "~585" (verdict.md, Budget ruling). X-07's fix must be
line-neutral for this reason — I am not asking for more room.

### F12 — still a door

The highlight-text (594–596) — "পরের পর্বে ওটাই খুঁজবো — একটা W 'কাজ করে' মানে ঠিক
কী, আর ওই 0-টাই বা কোথায় বসে আছে!" — no longer echoes মোটুর own words. মোটুর question
(579–587) used "সীমানা" and "কাগজে কী আঁকছে"; the highlight-text uses different
phrasing ("কাজ করে মানে ঠিক কী", "কোথায় বসে আছে"). This reads as ভতু reframing the
question in her own voice rather than restating it, which is the right texture for a
door. No F12 concern, improved over iteration 1's phrasing.

### Originality re-check — WebSearch performed

Two searches: (1) "smaller learning rate perceptron less safe closer to decision
boundary counterexample", (2) "learning rate does not protect previous weights online
update perceptron interference myth". Confirmed again: the *general* claim
("η is just a scale factor, it doesn't create a protective mechanism") is common,
first-page material — MachineLearningMastery-tier sources say this plainly, unchanged
from iteration 1's finding.

What I did **not** find on the first page, in either search: a simple worked numeric
example showing a specific point ending up measurably (here, 10×) closer to the
decision boundary under the smaller learning rate. The one related hit — a paper on
"the star-shaped space of solutions of the spherical negative perceptron" — makes a
structurally similar point (small learning rates can bias solutions toward the
minimum-margin boundary) but via a different, much more technical mechanism
(distribution of stabilities near a margin, atypical solutions close to
initialization) aimed at a research audience, not a worked two-epoch example a
beginner can reproduce by hand. This is not the same artifact as লাইন 477–486, and it
is not first-page-search material for the audience this episode is written for.

Verdict: this is a genuine, if narrow, originality gain. The underlying principle
(LR doesn't protect) was already credited in iteration 1 and stays not-new. What's new
is the concrete demonstration — a reader who searches for "does a smaller learning
rate protect earlier training" will find the correct general answer easily, but will
not find this specific "ten times closer to flipping" worked counterexample, which is
exactly the kind of number a search-literate reader remembers and repeats. Small bump,
not a category change.

---

## Scores (Iteration 2)

narrative-and-character: **89 / 100** (+2 from 87)
  - X-01 closed: recovers most of the −5 (residual −1 for the unclaimed motu-reaction
    beat after the "দশ গুণ কাছে" reveal, noted above but not filed, since fixing it
    costs lines the draft cannot spend).
  - X-02 unchanged: −3 stands: the back-reference doesn't address the direction-vs-
    sufficiency gap, and arguably anchors the sentence to a full-flip example that
    makes the unstated stronger reading slightly easier to default to.
  - CONSOLIDATE improved: −2 → −1 (the new bridge line at 564 earns the summary; the
    enumerated list itself is unchanged).
  - NEW −3: X-07, four consecutive ভতু turns at 340–390 with no মোটু interjection —
    the longest unbroken monologue in the draft, landing in the section built to model
    honesty/confession, which undercuts the dialogic texture there specifically.
  - Net: 87 − 5(closed, now −1) − 3(unchanged) − 2(now −1) − 3(new) ⇒ 87 + 4 + 1 − 3 = 89.

originality: **83 / 100** (+3 from 80)
  - Unchanged: −12 (core interference mechanism, first-page material) and −5 (x₀=1
    non-negativity scope left implicit, X-06, correctly deferred to open-loops and not
    re-litigated here).
  - NEW +3: the η=1 vs η=0.5 "ten times closer to flipping" worked counterexample
    (lines 477–486), verified by WebSearch to not be first-page material for this
    audience — a concrete, memorable, verifiable number layered onto an
    already-known principle. This is a genuine addition to the episode's stock of
    "couldn't get this from page one" material, on top of the x₀=1 callback and the
    reconcile-with-πর্ব-২'s-own-numbers structure already credited.

**Overall improvement across both dimensions I score: +5 (narrative +2, originality
+3).** Both remain above threshold (80 / 75) by a wider margin than iteration 1. I
consider X-01 genuinely resolved — this was the correct fix, not a reframing — and the
new X-07 is a real but cheap-to-fix cost of the lines added to earn that resolution.
