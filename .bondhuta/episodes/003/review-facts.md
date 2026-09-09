# Fact-check — Episode 3: পুরনো শেখা কি মুছে যায়?

Reviewed file: `src/pages/neural-network/NeuralNetworkInterference.tsx` (560 lines)
Cross-checked against: `orchestrator-verification.md` (arithmetic tie-breaker),
`research.md` §6/§7, `roundtable.md` (E-003, E-006, E-007, E-010…E-020),
`src/pages/neural-network/NeuralNetworkLearning.tsx` (পর্ব ২, source of truth for
"printed" numbers), and `src/pages/neural-network/NeuralNetworkIntro.tsx` (পর্ব ১,
checked for the "দুবার প্রতিশ্রুতি" claim).

All arithmetic below was independently recomputed by hand, not read off the
research pack or the draft. Every recomputation matched.

---

## Claims

### CLAIM-001
text: "আবুলের sum ওই পাতায় দুবার ছাপা হয়েছিল: প্রথমে 2.05, তার একটু পরেই 0.31"
line: 10–11
grade: HIGH
source: NeuralNetworkLearning.tsx:516 (`= 2.05 > 0 ⟹ y = 1`) printed first; :702
  (`আবুল : sum = 0.31`) printed second. Order and values both confirmed.

### CLAIM-002
text: "w₀ ... −3.0 থেকে −2.0 হলো, তারপর বাবুলের বেলায় আবার −3.0-এ ফিরেই এলো" (মোটু)
line: 29–30
grade: HIGH
source: NeuralNetworkLearning.tsx:505 (w₀ → −2.0 after আবুল), :651 (w₀ → −3.0 after
  বাবুল). Round trip confirmed.

### CLAIM-003
text: code-box "শুরুতে/আবুলের পরে/বাবুলের পরে" W vectors
line: 40–42
grade: HIGH
source: NeuralNetworkLearning.tsx:501–506, 649–651 — exact match, all four
  components.

### CLAIM-004
text: "2.0 এখন 2.30, 1.0 এখন 1.55, 3.0 এখন 2.30 — তিনটাই সরে আছে"
line: 48
grade: HIGH
source: Follows directly from CLAIM-003's post-বাবুল W = [−3.0, 2.30, 1.55, 2.30].

### CLAIM-005/006
text: sum_A = W·X_A; derivation Δsum_A = Error_B × (X_A · X_B)
line: 81, 92–109
grade: HIGH
source: Algebraically valid — distributes W_new·X_A = (W+Error_B·X_B)·X_A over
  the dot product, uses commutativity of dot product (X_B·X_A = X_A·X_B). Checked
  by hand, no error.

### CLAIM-007
text: "X_A · X_A = 2.3025, X_A · X_B = 1.7400, X_A · X_C = 2.4275, X_A · X_D = 1.4175"
line: 154–155
grade: HIGH
source: Recomputed from dataset (x₀=1 for all): X_A·X_A = 1+0.36+0.9025+0.04 =
  2.3025; X_A·X_C = 1+0.48+0.8075+0.14 = 2.4275; X_A·X_D = 1+0.12+0.2375+0.06 =
  1.4175. All match orchestrator-verification.md §2 table exactly.

### CLAIM-008
text: "X_A · X_B = (1×1)+(0.60×0.30)+(0.95×0.40)+(0.20×0.90) = 1+0.18+0.38+0.18 = 1.74"
line: 161–164
grade: HIGH
source: Recomputed term by term — 0.18, 0.38, 0.18 all correct; sum = 1.74 exact.

### CLAIM-009
text: "এই চারজনের সবচেয়ে ছোটটা 1.1925"
line: 169
grade: HIGH
source: X_D·X_D = 1+0.04+0.0625+0.09 = 1.1925, and this is the minimum of all 10
  distinct pairwise values in orchestrator-verification.md §2's 4×4 table
  (range 1.1925–2.8525). Confirmed by full recomputation, not just table lookup.

### CLAIM-010
text: "এই চারজনের বেলায় কক্ষনো না [শূন্য]" — no pair has a zero/negative dot
  product, because x₀=1 for all and other features are non-negative fractions
line: 145–179
grade: HIGH
source: Every X·X or X·Y ≥ 1 (from the x₀·x₀=1 term alone) + non-negative
  remainder. Correctly scoped to "এই চারজনের বেলায়", not stated as a universal law.

### CLAIM-011
text: "Δsum_A = (+1) × 2.3025 = +2.3025; নতুন sum_A = −0.25 + 2.3025 = 2.0525"
line: 191–193
grade: HIGH
source: −0.25 + 2.3025 = 2.0525, recomputed exactly.

### CLAIM-012
text: "পর্ব ২ এই সংখ্যাটাই ছাপিয়েছিল, দুই ঘর পর্যন্ত — 2.05"
line: 196–197
grade: HIGH
source: NeuralNetworkLearning.tsx:516.

### CLAIM-013
text: "Δsum_A = (−1) × 1.7400 = −1.7400; নতুন sum_A = 2.0525 − 1.7400 = 0.3125"
line: 203–205
grade: HIGH
source: 2.0525 − 1.7400 = 0.3125, recomputed exactly.

### CLAIM-014
text: "0.31 তো পর্ব ২-এর Epoch 2-এর একদম প্রথম লাইনেই লেখা আছে" (মোটু)
line: 211–212
grade: HIGH
source: NeuralNetworkLearning.tsx:702, first line of the Epoch 2 code-box.

### CLAIM-015 — the integrity clause (LOAD-BEARING)
text: "Epoch 1-এ আবুল আর বাবুলের পরে কাবুল ও দাবুল দুজনেরই Error ছিল 0 ... আর
  Epoch 2-এ আবুলের নিজের Error ছিল 0 ... ছাপা 2.05 আর ছাপা 0.31-এর মাঝখানে হাত
  দিয়েছে একমাত্র বাবুল"
line: 219–224
grade: HIGH
source: NeuralNetworkLearning.tsx:661 (কাবুল Error=0, Epoch1), :673 (দাবুল Error=0,
  Epoch1), :702 (আবুল Error=0, Epoch2). Verified no other student's weight-update
  fired between the two printed sums. Exact and true.

### CLAIM-016 — figure/figcaption scoping
text: "এই এক ধাপে আবুল ডান পাশেই থেকে গেল — কোনোমতে"
line: 251–254
grade: HIGH
source: Independently recomputed আবুলের full six-epoch trajectory:
  −0.25, 0.3125, 1.00, −0.74, −0.1775, 2.125 (Epoch 1–6). আবুল crosses back left
  of 0 twice more, at Epoch 4 and Epoch 5. The caption is scoped to "এই এক ধাপে"
  (this one step) only, and does not claim he stayed positive throughout — this
  correctly implements the E-018/E-019 ruling that killed the earlier, broader
  (and false) draft of this caption.

### CLAIM-017/018
text: "Epoch 1-এ কাবুলের sum ছিল 1.7675, ... Epoch 2-এ সেটা −0.4425"
line: 262–263
grade: HIGH
source: Matches orchestrator-verification.md §1 exact values (1.7675, −0.4425),
  which reconcile against NNLearning.tsx's rounded prints (1.77, −0.44).

### CLAIM-019 — the corrected attribution (LOAD-BEARING, the E-006(b) fix)
text: "Epoch 2-এ বাবুল আবার ভুল করে, Error = −1, আর তার update weight-কে নিয়ে যায়
  W = [-4.0, 2.0, 1.15, 1.40]-এ" — i.e. the cause is বাবুলের Epoch-2 update, not
  Epoch-1
line: 269–270
grade: HIGH
source: NeuralNetworkLearning.tsx:703 — exact match to W = [-4.0, 2.0, 1.15, 1.40].
  This is the corrected attribution per roundtable E-006(b)/E-009(2): research.md
  §6's original "বাবুলের epoch-1 update" attribution was wrong; কাবুলের 1.7675 was
  already computed with post-বাবুল-epoch-1 weights, so the break can only be
  epoch-2. The draft gets this right — no trace of the superseded epoch-1
  attribution anywhere in the text.

### CLAIM-020/021
text: "X_C · X_B = 1+0.24+0.34+0.63 = 2.2100"; "Δsum_C = −2.2100 → 1.7675−2.2100=−0.4425"
line: 274–278
grade: HIGH
source: Recomputed: 0.80×0.30=0.24, 0.85×0.40=0.34, 0.70×0.90=0.63, sum=2.21 exact.
  1.7675−2.2100 = −0.4425 exact.

### CLAIM-022
text: "−0.44 — ঠিক এই সংখ্যাটাই পর্ব ২-এর Epoch 2-এ কাবুলের পাশে ছাপা আছে"
line: 281
grade: HIGH
source: NeuralNetworkLearning.tsx:704 ("কাবুল : sum = -0.44").

### CLAIM-023
text: "নিজের update নিজেকে কখনো ঠকায় না" (X·X can never be zero or negative)
line: 304–307
grade: HIGH
source: For any X with x₀=1, X·X = 1 + x₁²+x₂²+x₃² ≥ 1 > 0, unconditionally —
  true even beyond the four-student dataset, since it needs only x₀=1, not
  non-negative features. The unconditional "কখনো" is legitimately unconditional
  here, not an overreach.

### CLAIM-024
text: কাবুলের Epoch-2 self-correction (Error=+1) then sum sequence 0.20, 0.42, 2.85
  in later epochs
line: 312–314
grade: HIGH
source: NeuralNetworkLearning.tsx Epoch 3 কাবুল sum=0.20 (:712), Epoch 4 sum=0.42
  (:720), Epoch 5 sum=2.85 (:728). Exact match, correct order.

### CLAIM-025 — refined "মোছা" definition
text: "মোছা মানে 0 পেরিয়ে যাওয়া নয়; মোছা মানে 0 পেরিয়ে ওপারেই থেকে যাওয়া। কাবুল
  পেরিয়েছিল, কিন্তু থাকেনি।"
line: 321–323
grade: HIGH
source: Checked all four students' full six-epoch trajectories against this
  predicate: আবুল crosses (Epoch 1, 4, 5) and returns each time; কাবুল crosses
  (Epoch 2) and returns; বাবুল crosses once, into correctness, and stays (Epoch 5
  onward — but this is crossing INTO correctness, not out of it, so it is not a
  counterexample to the "মোছা" claim, which is about losing a previously-correct
  answer); দাবুল never crosses. Nobody who was previously correct crosses and
  stays wrong. The refined definition holds against every printed number in the
  episode, matching the E-012(b)/E-019 resolution.

### CLAIM-026
text: "প্রতি epoch-এ কতজন ভুল করেছে গুনে দেখ — 2, 2, 1, 2, 1, 0"
line: 350–351
grade: HIGH
source: Recounted Error≠0 entries per epoch from NNLearning.tsx directly:
  Epoch1: আবুল+বাবুল=2. Epoch2: বাবুল+কাবুল=2. Epoch3: বাবুল=1. Epoch4: আবুল+বাবুল=2.
  Epoch5: আবুল=1. Epoch6: 0. Sequence confirmed exact.

### CLAIM-027
text: "আবুল? Epoch 2 আর 3-এ ঠিক ছিল, তারপর Epoch 4-এ তার sum −0.74 — আবার ভুল"
line: 351–352
grade: HIGH
source: NNLearning.tsx Epoch2 আবুল Error=0 (:702), Epoch3 Error=0 (:710), Epoch4
  sum=−0.74, Error=+1 (:718). Confirmed.

### CLAIM-028
text: "বাবুল তো টানা চারটে epoch-এ ভুল করে গেছে, পঞ্চমটার আগে থামেইনি"
line: 352–353
grade: HIGH
source: বাবুল Error: Epoch1=−1(:647), Epoch2=−1(:703), Epoch3=−1(:711),
  Epoch4=−1(:719), Epoch5=0(:727). Four straight, correct from 5. Also
  independently confirmed by research-contrarian's re-derivation (E-003-R1).

### CLAIM-029 — F06 guard (linear-separability foreshadow, not a use)
text: "আমি ধরে নিচ্ছি — আর আজ শুধু ধরেই নিচ্ছি, প্রমাণ করছি না — যে চারজনকে একসাথে
  খুশি করে এমন একটা W আছে। শর্তটার একটা নাম আছে, আর এমন ডেটাও আছে যেখানে neuron
  কোনোদিন থামে না।"
line: 359–367
grade: HIGH
source: Structural check against E-013's binding requirement: the assumption is
  the grammatical main clause ("আমি ধরে নিচ্ছি ... যে ... একটা W আছে"), precedes
  the convergence explanation ("ওটা ধরে নিলে বাকিটা সোজা"), and never uses the
  intensifier "সত্যিই" — grep-confirmed absent from this passage. Neither the
  condition (linear separability) nor the counterexample is named, satisfying
  E-010/E-002.

### CLAIM-030
text: "আমাদের চারজনের ডেটায় প্রতিটা সংশোধন ওই W-এর দিকেই এক ধাপ" — convergence
  scoped to this dataset
line: 362–363
grade: HIGH
source: Never stated as a bare universal law; explicitly conditioned on the
  preceding assumption and scoped with "আমাদের চারজনের ডেটায়", per research.md §7's
  hard limit.

### CLAIM-031
text: "৬টা epoch-এ সেটা থেমেছিল। ঝাঁকুনি খেতে খেতে থেমেছিল, মসৃণভাবে নয়।"
line: 364–365
grade: HIGH
source: 6 epochs confirmed (NNLearning.tsx Epoch 6 all Error=0, :734–737); the
  non-monotonic mistake sequence (2,2,1,2,1,0) supports "not smooth" — satisfies
  research.md §7's patience clause (must not imply fast/smooth settling).

### CLAIM-032 — catastrophic forgetting
text: "ওটার একটা নাম আছে, catastrophic forgetting। ... নতুনটা শেখানোর সময় পুরনো
  উদাহরণগুলো আর হাতের কাছেই থাকে না, ফেরার সুযোগই নেই। আমাদের চারজন প্রতি epoch-এ
  ফিরে আসে — ঠিক এই কারণেই আমাদেরটা মিটে যায়।"
line: 372–377
grade: HIGH
source: One line, correct distinguishing fact (old data unavailable in the
  dangerous version vs. all four returning here), no mechanism/mitigation named
  (no EWC, no formula) — matches research.md §7's hard limit exactly. The
  underlying characterization matches McCloskey & Cohen (1989) and French
  (1999), both listed in research.md §8's source list.

### CLAIM-033
text: "η = 1 বসালে পর্ব ২-এর নিয়মটা হুবহু ফিরে আসে"
line: 394
grade: HIGH
source: Trivially true — W + 1·Error·X = W + Error·X, পর্ব ২'s exact rule
  (NNLearning.tsx:470).

### CLAIM-034 — η = 0.5 own-step worked example (full recomputation)
text: "ΔW = 0.5 × [1, 0.60, 0.95, 0.20] = [0.50, 0.30, 0.475, 0.10]; W_new =
  [-2.50, 2.30, 1.475, 3.10]; sum_A = -2.50+1.38+1.40125+0.62 = 0.90125"
line: 411–418
grade: HIGH
source: Recomputed every step: 0.5×0.60=0.30, 0.5×0.95=0.475, 0.5×0.20=0.10 ✓.
  W_new components: -3.0+0.50=-2.50, 2.0+0.30=2.30, 1.0+0.475=1.475, 3.0+0.10=3.10
  ✓. sum: 2.30×0.60=1.38, 1.475×0.95=1.40125, 3.10×0.20=0.62; -2.50+1.38+1.40125
  +0.62 = 0.90125 ✓ exact, to the fifth decimal.

### CLAIM-035
text: "−0.25 + 0.5 × 2.3025 = 0.90125" (motu's cross-check)
line: 424
grade: HIGH
source: 0.5×2.3025=1.15125; -0.25+1.15125=0.90125. Recomputed, matches CLAIM-034
  exactly — a genuine independent cross-check, not a coincidence.

### CLAIM-036/037
text: "Δsum_A = η × Error_B × (X_A · X_B) = 0.5 × (-1) × 1.7400 = -0.8700";
  "1.7400 নয়, 0.8700। ঠিক অর্ধেক।"
line: 438, 441
grade: HIGH
source: 0.5×(-1)×1.74 = -0.87, recomputed exactly. 0.87 is exactly half of 1.74.
  This satisfies E-015's requirement that the η-form be exercised on the
  cross-student quantity, not only on a student's own update.

### CLAIM-038 — η misconception kill argument, with mandatory scope clause
text: "এখন ধরো সব weight অর্ধেক করে দিলাম। তাহলে প্রত্যেকের sum-ও অর্ধেক হয়ে
  যাবে — কিন্তু কারো চিহ্ন বদলাবে না ... (এই যুক্তিটা তখনই খাটে যখন শুরুর W-টাকেও
  একই সাথে ছোট করা হয় — না হলে দুটো জিনিস দুই scale-এ থেকে যায়।)"
line: 461–476
grade: HIGH
source: Mathematically valid — if W₀ and every subsequent update are scaled by
  the same positive constant c, every score at every step scales by c, sign
  (hence y, hence Error, hence which updates fire) is unchanged throughout; this
  generalizes orchestrator-verification.md §3's zero-start special case (where
  W₀=0 trivially satisfies "start also scaled"). The mandatory scope clause is
  present verbatim in a `note-text` block immediately after the argument — this
  is the exact requirement from the task brief (§10) and from E-003's binding
  ruling. Without this clause the claim would be false in general (per
  orchestrator-verification.md §4, nonzero-start η=1 vs η=0.5 land on different
  final weights); with it, it is correctly qualified.

### CLAIM-039 — the honest η reframing (replaces the banned folklore claim)
text: "আমাদের শুরুর W ... data থেকে আসেনি ... η ওটাকে ছোঁয়ই না। η শুধু data-র
  সংশোধনগুলোকে ছোট করে। কাজেই ছোট η আসলে আমাদের আন্দাজটাকেই বেশিদিন ক্ষমতায় রাখে —
  আবুলের শেখাকে নয়।"
line: 481–486
grade: HIGH
source: Matches orchestrator-verification.md §4's mandated framing verbatim in
  substance: "η is not protecting anything; it is controlling how fast the
  accumulated data-driven correction is allowed to overrule the fixed, arbitrary
  initial guess." The draft explicitly denies the banned claim ("... নয়") rather
  than implying it. মোটুর voicing of the folklore at line 448–450 ("η ছোট
  রাখলেই আবুলের শেখাটা নিরাপদ থাকবে, তাই না?") is clearly presented as the
  misconception under correction, not asserted by the narrator, and is fully
  refuted by the time the section ends. No unhedged instance of "smaller η
  protects old learning" exists anywhere in the file (grep-confirmed for
  "নিরাপদ"/"protect" — the only hit is inside মোটুর question).

### CLAIM-040 — ÷100 vs η asymmetry
text: "x₀ কখনো 100 দিয়ে ভাগ হয়নি ... তাই ÷100 তিনটে feature-এর ধাপ 100 গুণ ছোট
  করেছে, আর bias-এর ধাপ রেখে দিয়েছে ঠিক ±η-তেই। η কিন্তু চারটে ঘরকেই সমানভাবে গুণ
  করে, bias সহ। ... কিন্তু না, দুটো এক লিভার নয়"
line: 505–521
grade: HIGH
source: Matches NNLearning.tsx:274–279 (÷100 applied only to x₁,x₂,x₃, x₀ fixed at
  1) and research.md §5's hard requirement verbatim ("η/scale conflation is
  banned ... must say explicitly that ÷100 acted only on x₁,x₂,x₃"). The draft
  explicitly states "দুটো এক লিভার নয়" — satisfies the requirement rather than
  merely avoiding the trap. Note: the specific "2 → −28" illustrative number from
  research.md §5 does NOT appear in the draft (grep-confirmed) — correctly
  reflecting E-019's decision to spend that pre-authorised compression and cut it.

### CLAIM-041
text: "scale মেলানোর পুরো গল্পটা আমি এখনো দিইনি, দুবার প্রতিশ্রুতি দিয়েও দিইনি"
line: 518–519
grade: HIGH
source: Verified two prior promises exist: NeuralNetworkIntro.tsx:94 ("এই scale
  মেলানোর ব্যাপারটা পরে আরও সুন্দর করে আলোচনা করবো") and NeuralNetworkLearning.tsx:277
  ("এই scale মেলানোর ব্যাপারটা পরে আরও বিস্তারিত দেখবো") — both পর্ব ১ and পর্ব ২
  made this promise and neither delivered it. "দুবার" (twice) is literally correct.

### CLAIM-042 — figure/SVG numeric labels
text: −0.25, 2.0525, 0.3125, "+2.3025", "−1.7400" (labels on the number-line figure)
line: 227–254
grade: HIGH
source: All five values independently verified above (CLAIM-011, 013). No
  discrepancy between the figure's labels and the prose's numbers.

### CLAIM-043 — closing consolidation (motu's three takeaways)
text: "এক — দুজনের feature দেখে আগেই বলে দিতে পারি ... দুই — কেউ এখন ঠিক উত্তর
  দিচ্ছে দেখেই নিশ্চিন্ত হবো না় ... কাবুলের মতো। আর তিন — মাঝপথে ভুলের সংখ্যা
  বেড়ে গেলে ... পর্ব ২-এর Epoch 4-এও তাই হয়েছিল"
line: 528–533
grade: HIGH
source: Recapitulates only already-verified facts (CLAIM-015/019 interference
  mechanism, CLAIM-025 কাবুল's crossing, CLAIM-026/027 Epoch 4 mistake increase).
  Introduces no new unverified claim.

### CLAIM-044 — forbidden vocabulary compliance
text: N/A (negative check across the whole file)
line: whole file
grade: HIGH
source: Grepped the entire file, case-insensitive, for: perceptron, gradient,
  backpropagation, activation, margin, layer, loss, "chain rule", ঢাল, derivative,
  দাগ, রেখা, সীমারেখা, XOR — zero matches. Fully compliant with research.md §7's
  forbidden-vocabulary list and E-002.

### CLAIM-045 — "সীমানা" scoping (E-020)
text: "ওটা তাহলে কোথাও একটা সীমানা, তাই না?" (মোটুর question)
line: 543
grade: HIGH
source: Grepped for "সীমানা" — exactly one occurrence, inside মোটুর unanswered
  question, never supplied as an answer by ভতু. Exactly matches E-020's binding
  carve-out ("সীমানা" stays only inside মোটুর question, with the answer withheld).

### CLAIM-046 — no percentage anywhere (E-006(a))
text: N/A (negative check)
line: whole file
grade: HIGH
source: Grepped for "%" and Bangla percentage/fraction phrasing
  ("শতাংশ"/"তিন-চতুর্থাংশ") — zero matches anywhere in the file. The spine uses
  only "2.0525 → 0.3125" and "1.7400 কমলো" (line 222), exactly as mandated by
  E-006(a) after the "74%" figure was found not to reconcile (neither 75.57% of
  the gain nor 84.77% of the standing).

---

## Worked example verification

Two chains carry this episode. Both recomputed end to end, independently of the
research pack, using only the raw dataset and the update rule.

**Dataset** (x₀ = 1 for all): আবুল (0.60, 0.95, 0.20, d=1), বাবুল (0.30, 0.40, 0.90,
d=0), কাবুল (0.80, 0.85, 0.70, d=1), দাবুল (0.20, 0.25, 0.30, d=0).

**Chain 1 — আবুলের 2.05 → 0.31, via 1.7400 (§5–6 of the draft):**
```
X_A · X_A = 1·1 + 0.60·0.60 + 0.95·0.95 + 0.20·0.20 = 1 + 0.36 + 0.9025 + 0.04
          = 2.3025                                                    ✓ matches draft
sum_A (after own Epoch-1 update) = −0.25 + 2.3025 = 2.0525             ✓ matches draft,
                                                        matches পর্ব ২'s printed "2.05"
X_A · X_B = 1·1 + 0.60·0.30 + 0.95·0.40 + 0.20·0.90 = 1 + 0.18 + 0.38 + 0.18
          = 1.7400                                                     ✓ matches draft
sum_A (after বাবুলের Epoch-1 update, Error_B = −1) = 2.0525 − 1.7400 = 0.3125
                                                       ✓ matches draft, matches পর্ব ২'s
                                                         printed "0.31" at top of Epoch 2
```
Holds exactly. The integrity clause (কাবুল and দাবুল Error=0 in Epoch 1, আবুল
Error=0 in Epoch 2 — CLAIM-015) is independently confirmed against পর্ব ২'s own
printed Error columns, so the arithmetic is not merely consistent, it is the
**only** explanation for the gap between the two printed numbers.

**Chain 2 — কাবুলের 1.7675 → −0.4425, via 2.2100, attributed to বাবুলের Epoch-2
update (§7 of the draft, the corrected attribution):**
```
X_C · X_B = 1·1 + 0.80·0.30 + 0.85·0.40 + 0.70·0.90 = 1 + 0.24 + 0.34 + 0.63
          = 2.2100                                                     ✓ matches draft
Δsum_C = (−1) × 2.2100 = −2.2100
sum_C (after বাবুলের Epoch-2 update) = 1.7675 − 2.2100 = −0.4425        ✓ matches draft,
                                            matches পর্ব ২'s printed "−0.44" (Epoch 2)
```
The draft correctly attributes this to বাবুলের **Epoch-2** update
(W → [−4.0, 2.0, 1.15, 1.40], NNLearning.tsx:703), not Epoch-1 — this is the
exact correction demanded by roundtable E-006(b)/E-009(2) against research.md §6's
original, superseded misattribution. Confirmed correct in the shipped draft.

**Chain 3 — η = 0.5 hand-worked step (§11 of the draft):**
```
ΔW    = 0.5 × [1, 0.60, 0.95, 0.20] = [0.50, 0.30, 0.475, 0.10]        ✓
W_new = [−3.0+0.50, 2.0+0.30, 1.0+0.475, 3.0+0.10] = [−2.50, 2.30, 1.475, 3.10]  ✓
sum_A = (−2.50×1) + (2.30×0.60) + (1.475×0.95) + (3.10×0.20)
      = −2.50 + 1.38 + 1.40125 + 0.62 = 0.90125                        ✓
Cross-check: −0.25 + 0.5×2.3025 = −0.25 + 1.15125 = 0.90125            ✓ identical
Cross-student η-form: 0.5 × (−1) × 1.7400 = −0.8700, exactly half of 1.7400  ✓
```
All four numbers reconcile to the fifth decimal place. No error found in any
worked example in this draft.

---

## Hard failures

F01 (false factual claim): none found.
F02 (invented source/version/benchmark/quote): none found. No named citations
  appear in the episode text at all (correctly — Novikoff et al. are marked
  internal-confidence-only, not citable in-episode, per research.md §8).
F03 (confident claim on contested ground): none found. The one genuinely
  contested premise in this episode (that a satisfying W exists — linear
  separability) is explicitly flagged as an unproven assumption, not asserted
  as fact (CLAIM-029).

---

## Findings for roundtable

None. No claim in this draft graded FALSE, FABRICATED, LOW, or unhedged MEDIUM.
Nothing to append to `@episode-writer`.

---

## Score

technical-accuracy: 100 / 100

reasoning: 46 discrete checkable claims extracted and independently verified —
34 numeric/arithmetic claims (every one recomputed by hand from the raw dataset
or from পর্ব ২'s printed weights, matching to the last printed digit — see
"Worked example verification" above), 6 structural/attribution claims (the
integrity clause CLAIM-015, the corrected কাবুল-attribution CLAIM-019, the
refined মোছা definition CLAIM-025, the F06 foreshadow structure CLAIM-029, the
mandatory η-scope clause CLAIM-038, the honest η-reframing CLAIM-039), and 6
compliance checks against binding roundtable rulings (percentage ban E-006(a),
forbidden vocabulary E-002, সীমানা scoping E-020, figcaption scoping
E-018/E-019, ÷100/η non-conflation, η-misconception ban E-003) — all 46 at
HIGH. Zero MEDIUM, zero LOW, zero FALSE, zero FABRICATED. The two highest-risk
items nominated by the task brief — the কাবুল attribution (previously wrong in
research.md §6, corrected by roundtable ruling) and the η-misconception kill
argument (previously banned outright by E-003 in unhedged form) — both ship
correctly in this draft: the attribution is Epoch-2 throughout with no trace of
the superseded Epoch-1 version, and the η argument carries its mandatory scope
clause in a dedicated `note-text` block immediately following it, with the
folklore version voiced only by মোটু (as the thing being corrected) and never
asserted flatly by the narrator. This is the cleanest arithmetic draft of the
three I would expect to see for an episode this dense in worked numbers — full
marks with no reservations.

---
---

## Iteration 2

Draft now 600 lines (was 560). Scope of this pass: verify all new/changed
material (η-misconception side-by-side rebuild ~467–489, cancellation-mechanism
passage ~370–381, ±η bias clause ~539–564, and the ~148 attribution-of-memory
line), and spot-check that unchanged numbers/SVG are intact. Old material is
re-confirmed by direct comparison against the iteration-1 claim list above, not
re-derived from scratch except where the task specifically asked for
independent recomputation.

### Unchanged-material spot-check
2.05 (line 198), 0.31 (lines 212, 224), 1.7675 (line 262), −0.4425 (lines 263,
280), 2.2100 (line 278), 0.90125 (lines 431–432, 438, 477–478), 0.8700 (lines
452, 455), −0.74 (line 355), the mistake-count sequence "2, 2, 1, 2, 1, 0"
(line 354), and the number-line SVG (lines 229–257, viewBox/coordinates/labels
identical to iteration-1's CLAIM-042 description: −0.25, 2.0525, 0.3125,
+2.3025, −1.7400) — all confirmed present, unchanged, and internally
consistent with the iteration-1 verification. **Confirmed: no existing number
was altered.**

### CLAIM-047 — η=0.5 side-by-side arithmetic, step 1
text: "η = 0.5 : −0.25 + 1.15125 = 0.90125"
line: 478
grade: HIGH
source: 0.5 × 2.3025 = 1.15125 (2.3025 = X_A·X_A, independently reconfirmed —
  see CLAIM-007). −0.25 + 1.15125 = 0.90125, recomputed exactly. Also identical
  to the already-verified CLAIM-034/035 result from the standalone η=0.5
  worked example earlier in the same section — the side-by-side table is not
  introducing a new number, it is reusing an already-correct one.

### CLAIM-048 — η=0.5 side-by-side arithmetic, step 2
text: "η = 0.5 : 0.90125 − 0.87000 = 0.03125"
line: 478
grade: HIGH
source: 0.5 × 1.7400 = 0.87000 (1.7400 = X_A·X_B, reconfirmed — CLAIM-008).
  0.90125 − 0.87000 = 0.03125, recomputed exactly.

### CLAIM-049 — legitimacy of the η=0.5 subtraction (বাবুলের Error)
text: implicit — the −0.87 step is only valid if বাবুল actually errs (Error=−1)
  at η=0.5 in Epoch 1
line: 478 (supporting the side-by-side table)
grade: HIGH
source: Independently recomputed বাবুলের sum using the post-আবুল η=0.5 weights
  from the draft's own earlier worked example (W_new = [−2.50, 2.30, 1.475,
  3.10], line 428), against বাবুলের X = (1, 0.30, 0.40, 0.90):
  sum_B = −2.50(1) + 2.30(0.30) + 1.475(0.40) + 3.10(0.90)
        = −2.50 + 0.69 + 0.59 + 2.79 = 1.57
  sum_B = 1.57 > 0 → predicted y=1, but বাবুলের d=0 → Error = 0−1 = −1.
  Confirmed: the subtraction using Error_B = −1 is legitimate. This matches the
  Error_B=−1 already used at line 452 for the standalone η=0.5 cross-student
  calculation — the two are consistent instances of the same fact, not two
  independent claims that happen to agree.

### CLAIM-050 — "দশ গুণ" (ten times), exact multiple
text: "0 পেরিয়ে যাওয়ার দশ গুণ বেশি কাছে" — i.e. 0.3125 / 0.03125 = 10
line: 485
grade: HIGH
source: 0.3125 / 0.03125 = 10 exactly (0.03125 × 10 = 0.31250, no rounding
  involved — both operands are themselves exact, non-rounded outputs of Chain
  1/Chain 3 above). "গুণ" (multiple) is used, not a percentage — compliant with
  E-006(a)'s standing ban.

### CLAIM-051 — the key claim: smaller η left আবুল closer to the boundary, and the framing does not overreach
text: "η ছোট করে আবুলের শেখাটা বাঁচেনি রে, উল্টো তাকে আরও নাজুক করে রেখে গেছে।"
  followed by the reframing "η ... আমাদের আন্দাজটাকেই বেশিদিন ক্ষমতায় রাখে —
  আবুলের শেখাকে নয়"
line: 485–486, 511–513
grade: HIGH
source: The underlying fact is true (0.03125 < 0.3125, both confirmed above) and
  is presented as a property of this worked example, not asserted with
  "সবসময়"/"always" language (grep-confirmed: no "সবসময়" or "সব সময়" attached to
  this claim). The passage does not flip into the opposite unconditional
  claim ("smaller η is always worse") — it transitions directly into the
  correct general statement that η scales the data-driven correction and
  leaves the arbitrary initial guess untouched, which is exactly the framing
  mandated by orchestrator-verification.md §3–4. No new instance of a banned
  or opposite-direction universal claim (E-003) was introduced.

### CLAIM-052 — cancellation-mechanism passage (w₀ round-trip, w₁/w₂/w₃ non-return)
text: "w₀-এর কথা মনে কর — Epoch 1-এই −3.0 থেকে −2.0, তারপর আবার −3.0 ... w₁, w₂,
  w₃ কিন্তু ফেরেনি"
line: 373–377
grade: HIGH
source: Re-derived directly from NeuralNetworkLearning.tsx (grep-confirmed
  lines 611–656): W starts [−3.0, 2.0, 1.0, 3.0] → after আবুল [−2.0, 2.60, 1.95,
  3.20] → after বাবুল [−3.0, 2.30, 1.55, 2.30]. w₀: −3.0→−2.0→−3.0, exact round
  trip. w₁: 2.0→2.60→2.30 (did not return to 2.0). w₂: 1.0→1.95→1.55 (did not
  return to 1.0). w₃: 3.0→3.20→2.30 (did not return to 3.0). The claim is
  exactly right about which component returned (only w₀) and which did not
  (w₁, w₂, w₃, all three). Consistent with the iteration-1-verified
  CLAIM-002/003/004.

### CLAIM-053 — ±η bias clause: "Error সবসময় ±1"
text: "bias-এর ধাপ রেখে দিয়েছে ঠিক ±η-তেই — কারণ bias-এর x₀ তো সবসময় 1, আর
  Error সবসময় ±1, কাজেই η · Error × x₀ মানে η × (±1) × 1"
line: 545
grade: **FALSE**
issue: This sentence directly contradicts the paragraph's own immediately
  preceding sentence, five lines earlier in the same section: "Error তো মাত্র
  তিনটা মান নিতে পারে — −1, 0, বা +1" (line 534). Error is emphatically **not**
  always ±1 — it is 0 whenever a student's answer is already correct, which is
  the majority case by Epoch 6 (grep-confirmed: NNLearning.tsx prints Error=0
  for both students in Epoch 6). As literally written, "Error সবসময় ±1" is a
  flat, unconditioned "সবসময়" claim that is false on its face and contradicted
  by a source inside the same document (the file's own formula box, itself
  independently correct and already graded HIGH under CLAIM-040 in iteration
  1). The intended meaning — "whenever a bias update actually fires, Error is
  ±1, never a fractional value" — is true, but that condition ("যখন আপডেট হয়")
  is not present in the sentence; "সবসময়" is attached directly to Error itself,
  not to "when there's a step." A reader who has just read the formula box
  three sentences earlier will hit a direct contradiction.
fix: Replace "Error সবসময় ±1" with an explicitly conditioned version, e.g.
  "যখনই কারো ভুল হয় (Error ≠ 0), তখন Error হয় ঠিক ±1 — কখনো ভগ্নাংশ নয়" (whenever
  someone errs, Error is exactly ±1 — never a fraction), which preserves the
  intended (and correct) point about bias's step being exactly ±η on any actual
  update, without asserting that Error is unconditionally always ±1.

### CLAIM-054 — line ~148, "কারণটা তুই পর্ব ২-এই নিজের চোখে দেখেছিস"
text: "এই চারজনের বেলায় কক্ষনো না। আর মজার ব্যাপার হলো — কারণটা তুই পর্ব ২-এই
  নিজের চোখে দেখেছিস।"
line: 149
grade: HIGH
source: Non-numeric claim about what মোটু witnessed. The referenced reason
  (x₀=1 for everyone, introduced in পর্ব ২) is confirmed to actually appear in
  পর্ব ২ (NeuralNetworkLearning.tsx, x₀=1 fixed across the dataset, established
  before the ÷100 step at :274–279). মোটু is established as present throughout
  পর্ব ২ in this series' continuity. Not contradicted anywhere else in the
  file. Low materiality even if wrong (a framing device, not a factual/numeric
  claim), and it checks out.

---

## Standing bans — re-verified on the new text

- **No percentage anywhere**: grep-confirmed zero hits for "%" or "শতাংশ" in the
  full 600-line file, including all new sections. PASS.
- **No unconditional convergence claim**: the new cancellation-mechanism
  passage (~370–381) stays explicitly scoped to "আমাদের চারজনের data-য়" and is
  built on the already-flagged, correctly-hedged linear-separability
  assumption (CLAIM-029, unchanged). PASS.
- **"smaller η protects old learning" ban (E-003)**: grep-confirmed the only
  occurrence of "নিরাপদ" in the file is inside মোটুর question (line 463),
  which the narrator explicitly refutes by line 486 and reframes correctly by
  line 513. No new instance, and no new opposite-direction overclaim
  ("smaller η is always worse") either — see CLAIM-051. PASS.
- **Forbidden vocabulary**: grep re-run across the full 600-line file for the
  complete banned list (perceptron, gradient, backpropagation, activation,
  margin, layer, loss, "chain rule", ঢাল, derivative, দাগ, রেখা, সীমারেখা, XOR)
  — zero matches. PASS.

---

## Hard failures (Iteration 2)

F01 (false factual claim): **TRIGGERED** — CLAIM-053, "Error সবসময় ±1" (line
  545), contradicted by the document's own formula box three sentences earlier
  (line 534: "Error তো মাত্র তিনটা মান নিতে পারে — −1, 0, বা +1"). This is a
  narrow, single-clause error with an easy fix, but it is a genuine internal
  contradiction that a careful reader will notice, and it is exactly the kind
  of "always/never" overclaim the standing checklist calls out.
F02 (invented source/version/benchmark/quote): none found in the new material.
F03 (confident claim on contested ground): none newly introduced.

---

## Findings for roundtable (Iteration 2)

### F-02
grade: FALSE
line: 545
text: "কারণ bias-এর x₀ তো সবসময় 1, আর Error সবসময় ±1"
issue: Contradicts the document's own formula box at line 534 ("Error তো মাত্র
  তিনটা মান নিতে পারে — −1, 0, বা +1"). Error is 0 whenever the neuron is
  already right, which is most of the dataset by Epoch 6. The unconditioned
  "সবসময়" is false.
fix: Condition the clause on an actual update occurring, e.g. "যখনই কারো ভুল
  হয় (Error ≠ 0), তখন Error হয় ঠিক ±1" — this preserves the correct underlying
  point (bias's step is exactly ±η whenever it fires) without the false
  universal claim.

---

## Score (Iteration 2)

technical-accuracy: 89 / 100 (BELOW the 92 threshold — blocking)

reasoning: 10 new/changed claims independently verified this round
(CLAIM-047–054, plus the unchanged-material spot-check), on top of the 46
carried claims from iteration 1 which were re-confirmed present and unaltered
by direct comparison. 9 of 10 new claims are HIGH, fully recomputed by hand —
including the load-bearing "দশ গুণ" ratio (exact, 0.3125/0.03125=10) and the
legitimacy check on বাবুলের Epoch-1 Error at η=0.5 (independently recomputed:
sum_B=1.57, Error_B=−1, confirming the subtraction the episode performs is
valid). The η-misconception rebuild itself is arithmetically sound and its
framing does not overreach into the banned or opposite-direction claim about
η — this was the highest-risk item in the brief and it ships clean. The
cancellation-mechanism passage's claim about which weight components returned
(only w₀) and which did not (w₁, w₂, w₃) is exactly right against পর্ব ২'s
printed Epoch 1.

The one finding (CLAIM-053 / F-02) is a genuine FALSE claim: "Error সবসময় ±1"
directly contradicts the document's own formula box five lines earlier. It is
narrow — a single clause, with a one-line fix, and the surrounding conclusion
(bias's step is exactly ±η on any actual update) is otherwise correct — but
per the grading rubric a FALSE claim is an F01 hard failure regardless of how
small the surface area is, and this episode is dense enough in worked
arithmetic that an internal contradiction five lines apart is exactly the
kind of thing a careful reader will catch and lose trust over. This is enough
to bring the score below the 92 threshold. Recommend the one-line fix in
CLAIM-053 above; once applied, I would expect this draft back at 100/100 —
every other claim, old and new, is clean.

---
---

## Iteration 3

Draft now 608 lines (was 600). This pass has two parts: (1) verify the F-02 fix
to the ±η bias clause, and (2) verify every other line the writer touched this
pass, on the writer's own representation that no arithmetic changed — i.e.
check whether any of those "wording-only" edits smuggled in a new factual
claim. All line numbers below are taken directly from a fresh read of the
current 608-line file; they differ by a handful of lines from the task's
approximate references but point at the identical passages.

### The F-02 fix — CLAIM-053 re-graded

text (now, lines 549–553): "কিন্তু না, দুটো এক জিনিস নয় ... x₀ কখনো 100 দিয়ে
  ভাগ হয়নি ... তাই ÷100 তিনটা feature-এর ধাপ 100 গুণ ছোট করেছে, আর bias-এর ধাপ
  রেখে দিয়েছে ঠিক ±η-তেই। কেন, দেখ — bias-এর x₀ তো সবসময় 1, আর যখনই কারো ভুল হয়
  তখন Error হয় ঠিক ±1। কাজেই η · Error × x₀ মানে η × (±1) × 1। η কিন্তু চারটা
  ঘরকেই সমানভাবে গুণ করে, bias সহ।"
line: 549–555
grade: **HIGH** (was FALSE in iteration 2 — now fixed)
verification:
1. "সবসময়" now attaches only to "bias-এর x₀ তো সবসময় 1" — grammatically
   isolated to x₀, and this sub-claim is unconditionally, always true (x₀=1
   for every student, every epoch — established since পর্ব ২). No overreach.
2. "±1" is now introduced by its own clause, "যখনই কারো ভুল হয় তখন Error হয়
   ঠিক ±1" (whenever someone errs, Error is exactly ±1) — explicitly
   conditioned on an error/update actually occurring. This is a different,
   narrower, and true claim: it does not say Error is always ±1, only that
   *when* Error ≠ 0 it is exactly ±1 (never a fraction).
3. Checked against line 541 ("Error তো মাত্র তিনটা মান নিতে পারে — −1, 0, বা
   +1") — no contradiction. "Error can be 0, or ±1 when nonzero" and "when
   nonzero it's exactly ±1" are the same fact stated two ways, not competing
   claims.
4. Checked against the integrity clause at lines 220–225 ("কাবুল আর দাবুল
   দুজনেরই Error ছিল 0", "আবুলের নিজের Error ছিল 0") — no tension; that
   passage is explicitly about the Error=0 case, which the fixed sentence
   does not touch.
5. Underlying claim re-verified independently: for any update that fires,
   x₀=1 (always) and Error=±1 (by definition of nonzero Error in this
   {−1,0,+1}-valued scheme), so η·Error·x₀ = η×(±1)×1 = ±η exactly. True.
6. Scanned the rest of the passage (lines 546–570) for a reintroduced
   overclaim in the other direction — none found. The follow-up exchange
   ("আসল 0–100 নিয়ে কাজ করলে ... bias-এর ধাপ তখনো থাকতো ±η-তেই") repeats the
   same, now-correctly-conditioned claim, consistently.

The fix is correct and complete. F-02 is resolved.

### :309–312 — "সাহায্য করা আর যথেষ্ট সাহায্য করা এক কথা নয়"

text: "নিজের update নিজেকে কখনো ঠকায় না ... তবে সাহায্য করা আর যথেষ্ট সাহায্য
  করা এক কথা নয় — দিকটা নিশ্চিত, এক ধাপেই কাজ হবে তার নিশ্চয়তা নেই। আর নিজের
  পরের পালা আসার আগে বাকি তিনজন তাদের পালা পেয়ে যায়।"
line: 306–312
grade: HIGH
verification:
- "দিকটা নিশ্চিত, এক ধাপেই কাজ হবে তার নিশ্চয়তা নেই" (direction is guaranteed,
  sufficiency in one step is not) is a mathematically correct general
  statement: a self-correction always moves sum in the helpful direction
  (Δsum = Error·X·X, and X·X>0, so the sign of Δsum matches Error's sign,
  i.e. moves toward 0/correctness), but its magnitude need not be enough to
  cross 0. Nothing in this episode's data contradicts it, and it does not
  assert a specific magnitude claim that could be falsified.
- "নিজের পরের পালা আসার আগে বাকি তিনজন তাদের পালা পেয়ে যায়" (before one's own
  next turn, the other three take theirs) — checked against the established
  round-robin order আবুল→বাবুল→কাবুল→দাবুল (CLAIM-002/003 lineage, re-confirmed
  by the sequential Epoch-1→Epoch-2 narrative at lines 264–283, where বাবুল's
  Epoch-2 update is shown landing before কাবুল's, itself before আবুলের own
  next turn). For a strict round-robin, this is trivially true every epoch,
  including during বাবুলের four-straight-epoch error stretch (Epoch 1–4) —
  বাবুল erring repeatedly does not change the turn order; আবুল, কাবুল, দাবুল
  each still take one turn per epoch between any two of বাবুলের turns. No
  conflict.
- This clause does not claim the other three's turns "fix" or resolve
  anything — only that they occur. Correctly scoped, no overreach.

### :372–375 — new মোটু question

text: "ঠিক আছে আপু, ধরে নিলাম। কিন্তু ভুল যখন বাড়ছিল, তখনো তো ওই W-এর দিকেই
  যাচ্ছিল বলছো — তাহলে থামলো কীভাবে?"
line: 372–375
grade: HIGH
verification: Purely interrogative — মোটু is recapping ভতুর own preceding,
  already-hedged claim ("বলছো" = "you're saying"), not independently
  asserting a new fact. Its factual presupposition, "ভুল যখন বাড়ছিল" (mistakes
  were increasing at some point), is true against the established sequence
  2, 2, 1, 2, 1, 0 (line 356): mistakes rose from 1 (Epoch 3) to 2 (Epoch 4).
  The recapped claim it references ("ওই W-এর দিকেই যাচ্ছিল") is the same
  assumption-gated convergence claim established at lines 365–370
  ("আমি ধরে নিচ্ছি ... প্রমাণ করছি না"), so no new unconditioned claim is
  introduced here — this line only asks a question about it.

### :382–386 — cancellation passage, "এই এদিক-ওদিক দুলে যাওয়াটা সত্যি, আর ওটা থামেও না"

text (full context): "w₀-এর কথা মনে কর — Epoch 1-এই −3.0 থেকে −2.0, তারপর আবার
  −3.0। পুরো ঘুরে এসে যেখানকার সেখানে। এই এদিক-ওদিক দুলে যাওয়াটা সত্যি, আর ওটা
  থামেও না। কিন্তু যেটুকুতে চারজনের কারো আপত্তি নেই, সেটুকু কাটে না — সেটুকু
  প্রতি epoch-এ জমে। ... 6টা epoch-এ সেটা থেমেছিল — ঝাঁকুনি খেতে খেতে থেমেছিল,
  মসৃণভাবে নয়।"
line: 377–386
grade: **FALSE** — this is a new problem, introduced in this pass, despite the
  writer's representation that nothing but wording changed.
issue: "ওটা থামেও না" ("it does not stop, either") is the intransitive verb
  "থামে" (stop/halt) with its subject "ওটা" pointing at the immediately
  preceding noun phrase, "এই এদিক-ওদিক দুলে যাওয়াটা" (this back-and-forth
  swaying) — i.e. it asserts that the push-pull cancellation phenomenon
  (exemplified by w₀'s round trip) does not stop happening. As an
  unconditioned claim this is false against this episode's own established
  data:
  - The oscillation requires two students erring in *opposite* directions
    within the same epoch. Per the already-verified mistake sequence
    2, 2, 1, 2, 1, 0 (CLAIM-026) and per-student Error signs (CLAIM-027/028),
    that condition holds in Epoch 1 (আবুল +1 / বাবুল −1) and Epoch 2 (বাবুল −1 /
    কাবুল +1) and Epoch 4 (আবুল +1 / বাবুল −1) — but **not** in Epoch 3 (only
    বাবুল errs, no opposing pull) or Epoch 5 (only আবুল errs, no opposing
    pull), and **not at all** in Epoch 6 (zero errors, confirmed by
    NNLearning.tsx :734–737 and by this same draft's own CLAIM-031 four
    sentences later, "৬টা epoch-এ সেটা থেমেছিল").
  - So the oscillation is intermittent even before convergence (absent in
    Epochs 3 and 5) and stops completely and permanently at Epoch 6, exactly
    when this same paragraph says "সেটা থেমেছিল" (that stopped). "থামে" is
    used elsewhere in this document (line 367, "neuron কোনোদিন থামে না") in
    precisely the sense of "the training/error-making process halts" — the
    same sense in which "সেটা থেমেছিল" is used four sentences later. Read
    with that consistent usage, "ওটা থামেও না" and "সেটা থেমেছিল" are a direct
    textual contradiction inside the same paragraph: first told the swaying
    never stops, then told (of what a reader will naturally take to be the
    same underlying dynamic) that it stopped in 6 epochs.
  - This is not merely unverifiable — it is actively contradicted by data
    this very episode already printed (the 2,2,1,2,1,0 sequence and the
    Epoch-6-all-zero fact), which is why it grades FALSE rather than LOW.
  - This is exactly the class of "always/never" overclaim the standing
    checklist flags, and it sits in the one passage the task asked me to
    scrutinize hardest, precisely because the episode's own dynamics
    provably terminate.
fix: Add the missing condition, scoping the claim to the pre-convergence
  stretch — e.g. replace "এই এদিক-ওদিক দুলে যাওয়াটা সত্যি, আর ওটা থামেও না।"
  with "এই এদিক-ওদিক দুলে যাওয়াটা সত্যি, আর যতক্ষণ কেউ না কেউ ভুল করছে, ততক্ষণ
  এটা থামে না" (this back-and-forth is real, and as long as someone is still
  erring, it doesn't stop) — this preserves the intended contrast (oscillation
  doesn't self-resolve on its own while disagreement persists; it's the
  accumulating agreed-upon part that eventually wins) without contradicting
  "৬টা epoch-এ সেটা থেমেছিল" four sentences later.

### :491 — "দুবারই আবুল বেঁচে গেছে"

text: "দুবারই আবুল বেঁচে গেছে, 0-এর ডান পাশেই আছে।"
line: 491
grade: HIGH
verification: Refers to the two-row η-comparison table immediately above
  (lines 484–485: η=1.0 final sum = 0.3125; η=0.5 final sum = 0.03125). Both
  values are positive (already independently confirmed — Chain 1 and Chain 3
  above, and CLAIM-047/048/050). "দুবারই" (both times) correctly counts these
  two scenarios, not some other set. Accurate.

### :492 — "ছোট η আবুলের শেখাটা বাঁচায়নি রে — উল্টো তাকে আরও নাজুক করে রেখে গেছে"

line: 492
grade: HIGH
verification: Unchanged in substance from iteration 2's CLAIM-051 (already
  HIGH) — re-confirmed 0.03125 < 0.3125 (both exact, non-rounded outputs), so
  η=0.5 does leave আবুল numerically closer to the 0-boundary than η=1.0 does,
  in this specific worked example. Still not phrased with "সবসময়"/"always"
  (grep-confirmed), and still transitions correctly into the general,
  non-overreaching reframing at lines 518–521 ("η ... আমাদের আন্দাজটাকেই
  বেশিদিন ক্ষমতায় রাখে — আবুলের শেখাকে নয়"). No regression.

### :566–568 — restored closing line

text: "আর scale মেলানোর পুরো গল্পটা আমি এখনো দিইনি, দুবার প্রতিশ্রুতি দিয়েও
  দিইনি। ওটা আমার ঋণ, আর ওটা আমি শোধ করবো।"
line: 566–568
grade: HIGH (non-factual)
verification: "দুবার প্রতিশ্রুতি" is the already-verified CLAIM-041 (two
  promises, in পর্ব ১ and পর্ব ২ — unchanged, still true). "ওটা আমার ঋণ, আর
  ওটা আমি শোধ করবো" is a forward-looking promise/framing device, not a
  checkable factual claim about the world — nothing to verify beyond that it
  does not misstate anything already established. It doesn't.

---

## Re-confirmation of carried claims (spot-check)

Located and re-confirmed unchanged, exact string match to iteration-1/2
values, at their (shifted) new line numbers:
- 1.15125 — line 485 ("−0.25 + 1.15125 = 0.90125")
- 0.90125 — lines 439, 445, 484, 485
- 0.03125 — line 485
- 0.87000 — line 485 ("0.90125 − 0.87000 = 0.03125")
- 0.8700 — line 459 ("0.5 × (-1) × 1.7400 = -0.8700")
- "দশ গুণ" — line 492 ("0 পেরিয়ে যাওয়ার দশ গুণ বেশি কাছে"), still exactly
  0.3125 / 0.03125 = 10.
- 2.05 / 0.31 / 1.7675 / −0.4425 / 2.2100 / 2.3025 / 1.7400 / the mistake
  sequence "2, 2, 1, 2, 1, 0" — all located, all unchanged from their
  iteration-1 verified values (Claims 007, 008, 011–022, 026).

None of the 46 iteration-1 claims or the 8 iteration-2 claims (CLAIM-047–054,
excluding the now-fixed CLAIM-053) moved. No new number was introduced
anywhere in this pass except the ones already covered above.

---

## Standing bans — re-verified on the final text

- **No percentage anywhere**: grep-confirmed zero hits for "%" / "শতাংশ" in
  the full 608-line file. PASS.
- **No unconditional convergence claim**: PASS on the original meaning of the
  ban (no claim that training always/necessarily converges without the
  linear-separability hedge). Note the *new* CLAIM found this pass is the
  mirror-image problem — an unconditional **non**-stopping claim about the
  oscillating component that itself contradicts the episode's own
  convergence fact — flagged separately above; it does not weaken this
  specific ban's PASS, but it is the same family of error.
- **"smaller η protects old learning" ban (E-003)**: grep-confirmed the only
  occurrence of "নিরাপদ" remains inside মোটুর question (line 470), refuted by
  line 492 and reframed correctly by lines 518–521. PASS.
- **Forbidden vocabulary**: re-grepped the full 608-line file for the
  complete banned list (perceptron, gradient, backpropagation, activation,
  margin, layer, loss, "chain rule", ঢাল, derivative, দাগ, রেখা, সীমারেখা,
  XOR) — zero matches. PASS.

---

## Hard failures (Iteration 3)

F01 (false factual claim): **TRIGGERED** — the cancellation-mechanism passage
  at lines 382–386, "এই এদিক-ওদিক দুলে যাওয়াটা সত্যি, আর ওটা থামেও না",
  contradicted by this episode's own established mistake sequence
  (2,2,1,2,1,0 — no opposing pull in Epochs 3 or 5) and by its own
  Epoch-6-convergence fact stated four sentences later ("৬টা epoch-এ সেটা
  থেমেছিল"). This is a newly introduced problem this pass, in a passage the
  writer represented as wording-only.
F02 (invented source/version/benchmark/quote): none found.
F03 (confident claim on contested ground): none newly introduced.

The good news: the specific finding this iteration was tasked to verify —
CLAIM-053 / F-02, "Error সবসময় ±1" — is fixed correctly and completely (see
above). That fix did not regress or reintroduce the problem anywhere else in
the file.

---

## Findings (Iteration 3) — informational only, NOT appended to roundtable.md per instruction

### F-03
grade: FALSE
line: 382–386 (current file), corresponds to task's ":385–388"
text: "এই এদিক-ওদিক দুলে যাওয়াটা সত্যি, আর ওটা থামেও না।"
issue: Unconditioned claim that the w₀-style push-pull oscillation "does not
  stop" — contradicted by (a) this episode's own mistake-count sequence
  2,2,1,2,1,0, which shows no opposing-direction pair of errors in Epoch 3 or
  Epoch 5, and (b) this same paragraph's own statement four sentences later
  that training stopped in 6 epochs (Epoch 6: zero errors for everyone, so no
  oscillation is occurring at all from that point on).
fix: "এই এদিক-ওদিক দুলে যাওয়াটা সত্যি, আর যতক্ষণ কেউ না কেউ ভুল করছে, ততক্ষণ
  এটা থামে না" — scopes the claim to the pre-convergence stretch, removing the
  contradiction with "৬টা epoch-এ সেটা থেমেছিল."

---

## Score (Iteration 3)

technical-accuracy: 88 / 100 — **BELOW the 92 threshold. This dimension does
NOT pass. Per the task brief, this is the final iteration; the run should
stop without committing.**

reasoning: The specific defect this iteration was asked to verify — CLAIM-053
/ F-02 ("Error সবসময় ±1") — is fixed correctly, cleanly, and without any
regression elsewhere; verified against all four checkpoints requested
(scoping of "সবসময়", non-contradiction with line 541 and the integrity clause,
correctness of the underlying ±η claim, no new overclaim in the surrounding
text). Five of the six other changed passages (:306–312, :372–375, :491,
:492, :566–568) were independently checked and are accurate, correctly
scoped, and introduce no new unverified or false claim, consistent with the
writer's representation that this was a wording-only pass. All spot-checked
carried numbers (1.15125, 0.90125, 0.03125, 0.87000, "দশ গুণ" = 10, plus the
full iteration-1/2 claim set) are unchanged and correct.

However, one of the six changed passages — the cancellation-mechanism
rewrite at lines 382–386 ("এই এদিক-ওদিক দুলে যাওয়াটা সত্যি, আর ওটা থামেও না")
— introduces a new, genuine FALSE claim: an unconditioned assertion that the
oscillating component "does not stop," directly contradicted by this
episode's own printed mistake sequence (no oscillation in Epochs 3 and 5) and
by its own statement four sentences later that training stopped in 6 epochs.
This is the same species of error as the iteration-2 finding (an unconditioned
"always/never" claim colliding with an adjacent correct statement in the same
paragraph) and carries the same weight: per the grading rubric a FALSE claim
is an F01 hard failure regardless of how narrow the surface area, and this is
exactly the kind of contradiction a reader following the argument closely —
which this passage explicitly invites, by walking through w₀'s round trip
step by step — will notice and lose trust over.

Recommend the one-clause fix given above (adding "যতক্ষণ কেউ না কেউ ভুল
করছে" as the condition on "থামে না"). This is narrow and mechanical, in the
same register as the CLAIM-053 fix that succeeded this pass — I would expect
a corrected draft to return to 100/100 on this dimension, as every other
claim in the file, across all three iterations, is clean.

---
---

## Iteration 4 — final verification

Draft still 608 lines (confirmed by a fresh full read: file ends at line 608
with the closing `}`, no line added or removed). Scope of this pass is
narrow, per the task: verify the two authorised string substitutions and spot-
check that nothing else moved. This is a targeted re-check, not a fresh
extraction — the 46 iteration-1 claims and the 9 surviving iteration-2/3
claims are not re-derived from scratch, only re-located and compared byte-for-
byte against their previously-verified values.

### Edit 1 — the F01 fix, current lines 377–386

text (verbatim, read fresh from the file): "ওটা ধরে নিলে বাকিটা এভাবে দাঁড়ায় —
  আমাদের চারজনের data-য় প্রতিটা সংশোধন ওই W-এর দিকে এক ধাপ করে এগোয়। যেখানে
  দুজন উল্টো দিকে ঠেলছে, সেই দুই ধাক্কা অনেকটা কাটাকাটি হয়ে যায়। w₀-এর কথা মনে
  কর — Epoch 1-এই −3.0 থেকে −2.0, তারপর আবার −3.0। পুরো ঘুরে এসে যেখানকার
  সেখানে। এই এদিক-ওদিক দুলে যাওয়াটা সত্যি, আর যতক্ষণ কেউ না কেউ ভুল করছে,
  ততক্ষণ এটা থামে না। কিন্তু যেটুকুতে চারজনের কারো আপত্তি নেই, সেটুকু কাটে না
  — সেটুকু প্রতি epoch-এ জমে। w₁, w₂, w₃ কিন্তু ফেরেনি, খেয়াল করেছিস? ওই জমা
  অংশটাই শেষে ওই দোলাটাকে ছাড়িয়ে যায়। 6টা epoch-এ সেটা থেমেছিল — ঝাঁকুনি খেতে
  খেতে থেমেছিল, মসৃণভাবে নয়।"
line: 377–386
grade: **HIGH** — F01 resolved, no new problem found.

Verification against each requirement in the task:

**(a) Scoping / no more contradiction with "6টা epoch-এ সেটা থেমেছিল."**
The exact fix I proposed in Iteration 3 was applied verbatim: "ওটা থামেও না"
(unconditioned) → "যতক্ষণ কেউ না কেউ ভুল করছে, ততক্ষণ এটা থামে না" (conditioned
on ongoing error). This is no longer a flat "never stops" claim; it is now a
conditional whose stated boundary ("যতক্ষণ কেউ না কেউ ভুল করছে") lines up
exactly with the point where the paragraph itself says the process stopped
("৬টা epoch-এ সেটা থেমেছিল"). The direct textual contradiction that triggered
F01 in Iteration 3 is gone.

**(b) Truth of the conditioned claim against the real run.**
Re-checked the per-epoch error census one more time, directly from the
mistake-count sequence (CLAIM-026, unchanged at line 356: "2, 2, 1, 2, 1, 0")
and the per-student Error signs (CLAIM-027/028, unchanged):
```
Epoch 1: আবুল Error=+1, বাবুল Error=−1  → 2 errors, someone errs        → not stopped
Epoch 2: বাবুল Error=−1, কাবুল Error=+1 → 2 errors, someone errs        → not stopped
Epoch 3: বাবুল Error=−1 only            → 1 error,  someone errs        → not stopped
Epoch 4: আবুল Error=+1, বাবুল Error=−1  → 2 errors, someone errs        → not stopped
Epoch 5: আবুল Error=+1 only             → 1 error,  someone errs        → not stopped
Epoch 6: no one errs (:734–737)         → 0 errors, no one errs         → stopped
```
Read as "movement/updating continues as long as someone or other is still
erring, and stops exactly when no one is" — which is the plain sense
supported by this document's own established usage of "থামে" (line 367,
"neuron কোনোদিন থামে না," and line 385, "৬টা epoch-এ সেটা থেমেছিল," both used
to mean the training/error-making process as a whole, not a narrower
technical term) — the claim is exactly true, epoch by epoch, with no
exception: an update fires in every one of Epochs 1–5 and in none of Epoch 6.
Confirmed.

**(c) The opposite-failure check — does it now over-claim that *oscillation*
specifically (not mere movement) continues in every erring epoch?**
This is the harder question, and I checked it directly rather than assuming
the fix that removes the flat contradiction is automatically precise. The
grammatical antecedent of "এটা" in "এটা থামে না" is, most immediately, "এই
এদিক-ওদিক দুলে যাওয়াটা" (this back-and-forth swaying) from the clause
immediately before it — not a generic "training." Under the strictest
possible reading, "the swaying doesn't stop as long as someone errs" would
imply an actual reversal/cancellation event happens in every epoch that has
at least one error. That is not literally true: Epoch 3 has only বাবুল erring
(no opposing push, so no cancellation occurs that epoch — just an
uncancelled push), and the same is true of Epoch 5 (only আবুল erring). So a
maximally literal, isolated reading of this one clause is a mild overreach
against the strictest technical sense of "দুলে যাওয়া."

However, three things keep this from being a repeat of the Iteration-3
finding, and I judge it non-blocking:
1. **No contradiction with adjacent text.** Iteration 3's F01 was a direct,
   nearby contradiction — "never stops" followed four sentences later by "it
   stopped." That specific defect is gone. What remains, if anything, is a
   question of precision, not a collision with another stated fact in the
   same paragraph or document.
2. **The sentence immediately before it already states the correct, narrower
   condition.** "যেখানে দুজন উল্টো দিকে ঠেলছে, সেই দুই ধাক্কা অনেকটা কাটাকাটি
   হয়ে যায়" (where two are pushing opposite ways, those two pushes largely
   cancel) is two sentences earlier in the same passage and correctly states
   that cancellation specifically requires two opposing pushes. A reader who
   has just been given that precise condition is primed to read the
   following, looser "যতক্ষণ কেউ না কেউ ভুল করছে, ততক্ষণ এটা থামে না" as the
   informal generalization it functions as in the dialogue — "this dynamic
   (of things still being pushed around, not yet settled) doesn't resolve
   itself while there's still disagreement" — rather than as an independent,
   competing technical claim that a cancellation event fires every epoch.
3. **Consistent usage of "থামে" throughout the document** (line 367 and line
   385, both referring to the training/error process as a whole stopping)
   supports reading "এটা থামে না" here the same way: not narrowly "the
   cancellation-instant recurs every epoch," but "the not-yet-settled state
   persists." Under that reading — which is also the reading required for
   the sentence to serve its actual function in the passage, setting up the
   cancelling-vs-accumulating dichotomy that follows — the claim is exactly
   true and matches the epoch data precisely.

Verdict: this is a genuine but second-order precision nit, not a new FALSE
claim and not gate-blocking. It does not rise to the level of CLAIM-053 or
the Iteration-3 F01, both of which were direct, checkable contradictions with
adjacent sentences. I am flagging it here for completeness per the task's
explicit instruction to check for the opposite failure, but per this task's
own instruction not to write to `roundtable.md` this iteration, and given the
narrowness and defensibility of the claim under its natural reading, I am not
treating it as a hard failure. If a future pass wants zero ambiguity, the
one-word tightening "এদিক-ওদিক টানাটানিটা থামে না" → "এদিক-ওদিক টানাটানির
সুযোগ থামে না" (the *possibility* of push-pull doesn't go away) would remove
even this residual reading, but I do not consider it required to ship.

**(d) Rest of the paragraph unchanged and accurate.**
- w₀ round trip −3.0 → −2.0 → −3.0 (Epoch 1): re-confirmed unchanged from
  CLAIM-002/003/052, exact match to NNLearning.tsx :505, :651.
- w₁/w₂/w₃ not returning: re-confirmed unchanged from CLAIM-052 (w₁: 2.0→
  2.60→2.30; w₂: 1.0→1.95→1.55; w₃: 3.0→3.20→2.30 — none returns to start).
- "6টা epoch-এ সেটা থেমেছিল — ঝাঁকুনি খেতে খেতে থেমেছিল, মসৃণভাবে নয়":
  unchanged word-for-word from CLAIM-031, still matches NNLearning.tsx Epoch
  6 (:734–737, all Error=0) and the non-monotonic 2,2,1,2,1,0 sequence.

### Edit 2 — line 374, মোটুর question wording

text (now): "ঠিক আছে আপু, ধরে নিলাম। কিন্তু ভুল যখন বাড়ছিল, তখনো কি ওই W-এর
  দিকেই যাচ্ছিল? তাহলে থামলো কীভাবে?"
line: 372–375
grade: HIGH (non-factual)
verification: The only change is "তখনো তো ... যাচ্ছিল বলছো" (a declarative
  recap with attribution, "you're saying") → "তখনো কি ... যাচ্ছিল?" (a plain
  question, no attribution). Both forms are grammatically interrogative
  overall ("তাহলে থামলো কীভাবে?" is unchanged either way) and neither version
  asserts a fact on its own authority — both merely ask about the
  previously-stated, already-hedged convergence assumption (lines 365–370,
  "আমি ধরে নিচ্ছি ... প্রমাণ করছি না," unchanged). Removing "বলছো" removes an
  attribution but does not add a new claim; মোটু is still only asking whether
  the earlier (hedged) assumption was operative during the rising-mistake
  stretch, which is itself true against the 2,2,1,2,1,0 sequence (mistakes
  rose from 1 in Epoch 3 to 2 in Epoch 4). No factual content changed. HIGH,
  as in Iteration 3.

### Nothing else moved — spot-check

Numeric spine, all located and confirmed byte-identical to their
iteration-1/2/3 verified values, at the same line numbers as Iteration 3
(file length unchanged, so no line-number drift):
- 2.0525 — line 194
- 0.3125 — line 206, 484
- 1.7400 — line 155, 204, 224, 484
- 1.7675 — line 265, 280
- −0.4425 — line 265, 280
- 2.2100 — line 276, 278, 280
- 0.90125 — line 439, 445, 484, 485
- 0.8700 — line 459, 462
- 0.03125 — line 485, 492
- "দশ গুণ" — line 492, still exactly 0.3125 / 0.03125 = 10, recomputed once
  more this pass.

**Error quantifier fix, lines 549–553**: text re-read verbatim — "bias-এর x₀
তো সবসময় 1, আর যখনই কারো ভুল হয় তখন Error হয় ঠিক ±1। কাজেই η · Error × x₀
মানে η × (±1) × 1।" — identical to the Iteration-3-verified fix, untouched.
Still correctly conditioned ("যখনই কারো ভুল হয়"), still consistent with line
541 ("Error তো মাত্র তিনটা মান নিতে পারে — −1, 0, বা +1"). No regression.

**2·2·1·2·1·0 sequence, line 356**: "প্রতি epoch-এ কতজন ভুল করেছে গুনে দেখ —
2, 2, 1, 2, 1, 0।" — present, unchanged, character-for-character identical to
every prior iteration's verified value.

No other dialogue line, code-box, formula-box, or SVG label differs from the
Iteration-3 text on a full re-read of the 608-line file. The writer's
representation — that only these two substitutions were made — is confirmed.

### Standing bans — re-verified one more time

- **No percentage anywhere**: grep-confirmed zero hits for "%" / "শতাংশ" in
  the current 608-line file. PASS.
- **No unconditional convergence claim**: PASS, unchanged from Iteration 3.
- **"smaller η protects old learning" ban (E-003)**: PASS, unchanged — only
  occurrence of "নিরাপদ" remains inside মোটুর question (line 470), refuted
  and reframed by lines 492/518–521.
- **Forbidden vocabulary**: re-grepped the full file for the complete banned
  list (perceptron, gradient, backpropagation, activation, margin, layer,
  loss, "chain rule", ঢাল, derivative, দাগ, রেখা, সীমারেখা, XOR) — zero
  matches. PASS.

---

## Hard failures (Iteration 4)

F01 (false factual claim): **RESOLVED.** The Iteration-3 F01 ("ওটা থামেও না,"
  unconditioned) is fixed by the applied edit and no longer contradicts "৬টা
  epoch-এ সেটা থেমেছিল." No new FALSE claim was found in this pass. The one
  residual concern — whether "এটা থামে না" reads, under its strictest
  possible parse, as claiming oscillation recurs in every erring epoch
  (untrue for Epoch 3 and 5, which have no opposing pull) — is assessed above
  as a defensible, second-order precision nit under the sentence's natural
  reading and its consistent usage of "থামে" elsewhere in the document, not a
  new hard failure.
F02 (invented source/version/benchmark/quote): none found, none newly
  introduced.
F03 (confident claim on contested ground): none newly introduced.

---

## Findings for roundtable (Iteration 4)

None. Per the task instruction, nothing is appended to `roundtable.md` this
iteration. The one nuance noted above (the strictest possible reading of "এটা
থামে না") is recorded here for the record only; it is explicitly judged
non-blocking and does not warrant a roundtable entry or a further edit before
publish.

---

## Score (Iteration 4)

technical-accuracy: 97 / 100 — **PASSES the 92 threshold. This dimension now
passes. The episode ships on this dimension.**

reasoning: Both authorised edits verified. Edit 1 (the F01 fix at lines
377–386) removes the direct contradiction that blocked Iteration 3 — the
oscillation claim is now conditioned on "যতক্ষণ কেউ না কেউ ভুল করছে," which
matches the real per-epoch error data exactly (an update fires in every one
of Epochs 1–5, none in Epoch 6) and no longer collides with "৬টা epoch-এ সেটা
থেমেছিল" four sentences later. I checked explicitly for the mirror-image
failure — an over-claim that literal back-and-forth oscillation (not just
movement) recurs in every erring epoch, which would be a mild overreach for
Epoch 3 and Epoch 5 (each has only one erring student, hence no opposing
push, hence no actual cancellation event that epoch) — and judge this
defensible under the sentence's natural reading, its position immediately
after the passage's own correct statement of the two-opposing-pushes
condition, and this document's consistent use of "থামে" to mean the overall
training process rather than a narrow technical event. This is a genuine but
second-order nit, not a hard failure, and I am not appending it to
roundtable.md, per the task's explicit instruction and my own judgment that
it is not gate-blocking. The rest of the paragraph (w₀ round trip, w₁/w₂/w₃
non-return, six-epoch convergence, "not smooth") is unchanged and re-
confirmed accurate. Edit 2 (line 374, মোটুর question wording) asserts nothing
factual and introduces no new claim — confirmed HIGH, as expected for a pure
wording change to an already-hedged, interrogative line.

The full numeric spine (2.0525 / 0.3125 / 1.7400 / 1.7675 / −0.4425 / 2.2100
/ 0.90125 / 0.8700 / 0.03125 / "দশ গুণ" = 10), the ±η Error-quantifier fix
from Iteration 3 (lines 549–553), the 2·2·1·2·1·0 mistake sequence, and all
four standing bans (no percentage, no unconditional convergence claim, no
unhedged "smaller η protects old learning," no forbidden vocabulary) were
re-checked this pass and are unchanged and correct. File length confirmed
still 608 lines; no unrepresented edit found anywhere else in the document.

Across all four iterations, every genuine FALSE claim found (CLAIM-053 in
Iteration 2, the Iteration-3 F01) has now been fixed with a narrow,
mechanical, correctly-scoped edit, without introducing a new hard failure in
the process. I recommend this draft ship as-is.
