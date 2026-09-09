# Episode 3 Brief

series: neural-network
episode: 3
teacher: ভতু
date: 2026-09-09

central-question: বাবুলের জন্য weight বদলালে আবুলের শেখাটা কি নষ্ট হয়ে যায় — আর গেলে আমরা কী করি?

reader-before: পর্ব ২-এ নিজে হাতে ৬টা epoch চালিয়ে convergence পর্যন্ত গেছে। কিন্তু শেষে
  মোটুর প্রশ্নটা ঝুলে আছে — একজনের জন্য weight ঠেলে দিলে আগের জনের শেখাটা কি মুছে যায়?
  সে `W_new = W + Error × X` নিয়মটা প্রয়োগ করতে পারে, কিন্তু নিয়মটার ভেতরে একটা
  লুকানো সিদ্ধান্ত আছে যেটা সে দেখেনি।

reader-after: বুঝবে প্রতিটা update সত্যিই আগের শেখাকে নাড়িয়ে দেয় (interference বাস্তব,
  কল্পনা নয়) — কিন্তু নাড়ানো মানেই মুছে যাওয়া নয়। বুঝবে পর্ব ২-এর নিয়মে একটা η
  নিঃশব্দে বসে ছিল, যার মান ছিল 1। নিজে হাতে η = 0.5 দিয়ে একটা update কষতে পারবে,
  আর বলতে পারবে কেন ÷100 করাটা প্রসাধনী ছিল না।

## The promise being paid — verbatim from পর্ব ২

মোটুর প্রশ্ন (NeuralNetworkLearning.tsx:818-824):
> "যখন বাবুলের data দিয়ে weight গুলো নতুন করে সাজালাম, তখন কি আবুলের ভুল থেকে neuron
> যা শিখেছিল ঠিক সেটাই নষ্ট করে দিলাম না? মানে — একজনকে নতুন কিছু শেখাতে গিয়ে neuron
> কি আগের জনের শেখাটা ভুলে যেতে পারে?"

ভতুর প্রতিশ্রুতি (:827-834):
> "তুই আজ এমন একটা প্রশ্ন করে ফেলেছিস, যেটা নিয়ে আজও বড় বড় গবেষকরা মাথা ঘামান।
> এর উত্তরটা এত সুন্দর আর এত জরুরি যে — ওটা আমি পুরো একটা পর্ব জুড়ে বলবো।"

`highlight-text` (:836-839):
> "পরের পর্বে এই প্রশ্নেরই উত্তর খুঁজবো — neuron নতুন কিছু শিখতে গিয়ে পুরনো শেখা
> সত্যিই ভুলে যায় কিনা, আর গেলে আমরা কী করি! 🚀"

ভতু promised a WHOLE episode on this. The episode must therefore actually answer it —
not name it and move on. F11 risk is the highest risk in this episode.

must-pay: OL-04 (in full — this is the episode's reason to exist)
must-pay-partially: OL-02 (scale) — explain why ÷100 controlled the *size of the update*.
  The full normalization treatment stays due পর্ব ৫. ভতু must re-commit it explicitly,
  or F08 fires. See the orchestrator ruling below.

must-teach:
  - interference — one example's update genuinely moves what another example taught,
    demonstrated with the real numbers from পর্ব ২
  - why it still converges anyway — the shared signal accumulates, the contradictory
    nudges cancel; "নড়া" ≠ "মোছা"
  - learning rate η — REVEALED, not imported. পর্ব ২ wrote W + Error × X; it was
    always W + η · Error × X with η = 1.
  - why input scale sets update magnitude (the partial OL-02 payment)

must-not-teach-yet:
  - decision boundary, "weight গুলো একটা দাগ আঁকে"          ← পর্ব ৪
  - linear separability, XOR, and the word **perceptron**    ← পর্ব ৫
  - layer, hidden layer, multi-layer network                 ← পর্ব ৬
  - activation function, sigmoid, "মসৃণ" output              ← পর্ব ৮
  - loss function, MSE, error surface                        ← পর্ব ৯
  - gradient, derivative, ঢাল, gradient descent              ← পর্ব ১০
  - chain rule                                               ← পর্ব ১১
  - backpropagation                                          ← পর্ব ১২

  η is a step-size on the পর্ব ২ update rule ONLY. It is not yet the learning rate of
  gradient descent. Do not connect it to slopes, derivatives or descent — পর্ব ১০ owns
  that second meaning, and taking it now steals পর্ব ১০'s reveal.

  "catastrophic forgetting" as a named modern phenomenon: ভতু may name it in one line
  as the grown-up version of মোটুর প্রশ্ন, and must then say it is not today's subject.
  Naming honestly is allowed; explaining it is not.

callbacks:
  - the আবুল/বাবুল/কাবুল/দাবুল dataset — EXACT numbers, no new dataset (premise.md:45)
  - initial W = [−3.0, 2.0, 1.0, 3.0], converged W = [−3.0, 3.40, 3.10, 0.70]
  - পর্ব ২ Epoch 1: আবুল pushes W up to [−2.0, 2.60, 1.95, 3.20], then বাবুল pulls it
    back to [−3.0, 2.30, 1.55, 2.30] — this IS the interference, already on the page,
    the reader just was not told to look at it
  - online learning (পর্ব ২), epoch/iteration (পর্ব ২), convergence (পর্ব ২)
  - the ÷100 scaling move, deferred twice

foreshadow: convergence had a condition attached that we never stated. That condition has
  a name, and there are datasets where η being small does not help at all — the neuron
  never stops. Name neither the condition nor the counterexample. পর্ব ৪–৫ own them.

## Beats the episode owes (voice-and-characters.md §4)

HOOK is মোটুর unresolved question — it must be the intro-text, not a new situation.
NEXT QUESTION must open পর্ব ৪, not summarise পর্ব ৩. F12 is a live risk here because
this episode's subject invites a recap.

## Constraints

length-band: 420–560 TSX lines
  পর্ব ১ was 180, পর্ব ২ was 843. continuity.md flags the jump as drift. পর্ব ৩ must not
  exceed পর্ব ২. Compression is expected to bite.

figure-plan: inline SVG ONLY. src/assets/ contains exactly logo.svg, neuron-weighted-sum.png,
  react.svg, single-neuron.png — verified by ls on 2026-09-09. No new image asset exists
  or may be invented. Suggested: the tug-of-war on a single weight across পর্ব ২'s
  iterations — one number line, আবুল pushing right, বাবুল pulling left, net drift.
  Under ~40 lines, viewBox, role="img", aria-label, palette #f59e0b / #ec4899 / #334155.

components available: Matrix, MatrixEq, Op, Var from '../../components/Matrix/Matrix'.
  Nothing else. No useState. No new npm package.

characters: মোটু + ভতু only. বঠু has no CSS (F21). Third voices go in a concept-box,
  the way আবুল spoke in পর্ব ২.

numerals: Bangla in prose (পর্ব ৩, তিনটা, ৬টা epoch), Latin in math/code (η = 0.5,
  w₁ = 2.60). Never mixed inside one expression.

## Orchestrator rulings recorded at brief time

RULING-1 — OL id collision. `series/roadmap.md` and `state/open-loops.md` numbered the
open loops differently (roadmap OL-02=threshold/OL-03=scale; open-loops.md OL-02=scale/
OL-03=threshold). `state/open-loops.md` is the owner of record per state-schema.md, so
its numbering is canonical: **OL-02 = scale (open), OL-04 = forgetting (open, due 3)**.
@memory-keeper must reconcile roadmap.md's table at Stage 10.

RULING-2 — scale due date. open-loops.md says OL-02 is due পর্ব ৫; roadmap says পর্ব ৩.
Ruling: পর্ব ৩ pays the part that belongs to it (scale determines update magnitude,
which is inseparable from η) and ভতু explicitly re-commits the remainder. OL-02 stays
`open`, due পর্ব ৫. A silent partial payment would be F08.

RULING-3 — `training` status. concepts.md marks `training` as `teased`. পর্ব ২ plainly
taught the training loop end to end. @continuity-reviewer should treat **training as
taught**, so re-defining it in পর্ব ৩ is F05. @memory-keeper to correct the row at
Stage 10.

RULING-4 — undischarged analogy. knowledge-map.md §7 flags that পর্ব ১'s brain-neuron
analogy was never bounded. That is পর্ব ১'s debt and the roadmap assigns the bounding to
পর্ব ৮. পর্ব ৩ must NOT bound it — doing so steals পর্ব ৮. Any analogy পর্ব ৩ introduces
itself must be bounded inside পর্ব ৩ (F09).
