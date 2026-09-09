# Research pack — Episode 3: পুরনো শেখা কি মুছে যায়?

Merged from research-primary.md, research-deep.md, research-contrarian.md.
Tie-breaker on every number: `orchestrator-verification.md` (direct deterministic
simulation, run 2026-09-09). Every number below was rechecked against it.

---

## 1. The answer to মোটুর question, in one paragraph

Yes — বাবুলের update genuinely moves আবুলের score. This is not a possibility to
hedge about, it is unavoidable arithmetic in this exact dataset: every student's
score changes by a precise, computable amount whenever anyone else's weight
update fires, and in পর্ব ২'s data that amount is never zero. Concretely: right
after আবুলের own Epoch 1 correction his score stood at 2.0525; বাবুলের very next
correction took 1.7400 of that straight back, leaving 0.3125 — the `0.31`
পর্ব ২ already printed at the top of Epoch 2. Almost three-quarters of আবুলের
gain, gone in one step. And yet আবুল survived — his score stayed positive, his
prediction stayed correct. Repeat this tug for six epochs and the system settles
at one fixed W that gets all four students right. So: নড়া হয়, বাস্তব; কিন্তু
মোছা হয় না, কারণ moved is measured against zero, and every corrective step is
also pulling the whole system toward an answer that works for everyone — the
sturdy stuff builds up faster than the give-and-take beats it back down. That is
the honest, arithmetic answer to মোটুর question — not a reassurance, a
demonstration on numbers already on the reader's screen.

---

## 2. Interference — the exact mechanism

One line of algebra, no new vocabulary, built directly on পর্ব ২'s own rule:

```
W_new = W + η · Error_B · B          (the update, triggered by student B)

score_A(W_new) = W_new · A
               = W · A + η · Error_B · (B · A)
               = score_A(W) + η · Error_B · (A · B)
```

So: **Δscore_A = η · Error_B · (A · B)**

Reading each factor:
- **η** — a positive scalar, the size of one nudge. Scales the size of the
  interference, never its direction.
- **Error_B ∈ {+1, 0, −1}** — B's own correction direction. If B was already
  correct (Error_B = 0), Δscore_A = 0 exactly — a correct prediction never
  touches anyone else's score. Interference only ever originates from a
  mistake.
- **A·B** — the one number, per pair of students, that決定s whether B's
  correction drags A the same way or the opposite way, and how hard.

**When is interference zero?** Only when A·B = 0 (the two students'
input vectors are orthogonal) — or B was already correct. **Neither can
happen for a mistake-driven update between any two of these four students,
ever**, because x₀ = 1 for everybody and x₁, x₂, x₃ are all non-negative
fractions: `A·B = 1 + (sum of non-negative products) ≥ 1`, strictly, for
every pair. Orthogonality is not rare in this dataset — it is structurally
impossible. Every update always moves every other student's score by some
nonzero amount; the only thing that varies is how much.

**The reconciling number (safe to show in full):**
```
score_আবুল after আবুলের own update  = −0.25 + (আবুল·আবুল) = −0.25 + 2.3025 = 2.0525
বাবুলের update, Error = −1        : Δscore_আবুল = 1 × (−1) × (আবুল·বাবুল) = −1.7400
2.0525 − 1.7400 = 0.3125 ≈ 0.31   ← exactly পর্ব ২'s printed Epoch-2 আবুল sum
```

---

## 3. Why it converges anyway

**Do not use: margin, separability, perceptron, gradient.** (E-002)

The raw weights genuinely oscillate — w₀ swings −3.0 → −2.0 → −3.0 in Epoch 1
alone, a full round trip. That oscillation is real, not noise, and it is
exactly the mechanism in §2. But convergence is not "the oscillations get
small." It is a race between two things neither of which looks at any single
raw weight component:

- Every mistake, no matter which student caused it, is by definition a step
  taken on the wrong side of *some* workable answer for the whole dataset —
  so correcting it is *always* a step toward that answer, measured the right
  way. This "toward-ness" accumulates steadily: one fixed-size step of
  progress per mistake, regardless of who made it or how the raw weights
  wobble along the way.
- Meanwhile, the overall "size" of the weight vector can only grow as fast as
  the individual student causing each mistake allows — and because each
  single nudge is bounded, the total size can only creep up roughly with the
  square root of the number of mistakes, not in step with them.

A quantity that grows by a steady, guaranteed amount every mistake eventually
outpaces a quantity that can only creep up slower than that. That is the whole
mechanism: **the part every student secretly agrees on (that some fixed answer
exists that works for the whole class) accumulates step by step; the part they
disagree on (the specific mid-training tug on any one raw weight) partly
cancels and partly overshoots, but never derails the accumulating part.**
Eventually the corrections become both smaller and rarer, and the system
stops moving. This is provable, not lucky, for datasets shaped like this one —
but the episode may not name the condition that makes it provable (foreshadow
only).

---

## 4. η — what it really does

**FALSIFIED, do not write or imply this:** "η ছোট করলে পুরনো শেখা কম নড়ে"
(smaller η protects old learning). This was research-contrarian's original
target-premise claim, and briefly its own F-01 evidence (see
`contradictions.md` C-01) — it does not survive. Treat any phrasing of it as
a hard failure.

**What is actually true, in two cases:**

- **From a zero start (W₀ = 0):** η is a pure rescaling and changes *nothing*
  that matters. Same students err in the same order, same number of mistakes,
  same number of epochs — the entire trajectory for any η > 0 is just the
  η = 1 trajectory multiplied by η. η = 1 and η = 0.5 both converge in 3
  epochs to W = [0, 0.30, 0.55, −0.70] and W = [0, 0.15, 0.275, −0.35]
  respectively — exactly proportional, identical decisions throughout.
- **From পর্ব ২'s actual nonzero start (W₀ = [−3, 2, 1, 3]):** η matters, but
  not the way the folklore says. η = 1 and η = 0.5 both take 6 epochs — but
  land on **genuinely different final weights**: [−3.0, 3.40, 3.10, 0.70]
  versus [−3.5, 2.45, 1.90, 1.15]. η is not protecting anything; it is
  controlling **how fast the accumulated data-driven correction is allowed to
  overrule the fixed, arbitrary initial guess.** A smaller η keeps the
  starting hunch influential for longer; a larger η lets the data swamp it
  sooner.

**One thing about η that IS safely, tautologically true and may be stated as
stated:** a single update's size is directly proportional to η
(`ΔW = η · Error · X`) — smaller η makes *that one step* smaller. It is the
leap from "one step is smaller" to "therefore old learning is protected" that
is false.

**Usable detail:** at Epoch 6 of the η = 0.5 run, আবুলের score lands on
**0.005** — correct by a hair. Good material for showing how tight
convergence can be, without needing new numbers.

---

## 5. Scale — why ÷100 was not cosmetic

`ΔW = η · Error · X`. Error is bounded to {−1, 0, +1}; the whole size of an
update is controlled by η and the size of X. Multiplying X's entries by a
constant has the same mechanical effect on update size as multiplying η by
that constant — **except for one coordinate.** x₀ is defined to always equal
1, and it was **not** divided by 100, while x₁, x₂, x₃ (study/understanding/
attendance, as percentages) were. So ÷100 shrank the update magnitude for
w₁, w₂, w₃ by 100× while leaving the bias update (`η · Error · 1`)
completely untouched.

**This means ÷100 and η are not the same lever, and must not be presented as
two versions of the same thing.** η scales *every* component of an update
uniformly, bias included. ÷100 changed only the *relative* size of the
feature-step versus the bias-step. If both are mentioned in the same breath,
the episode must say explicitly that ÷100 acted only on x₁, x₂, x₃, never on
the bias input.

**Illustrative only (not for direct episode use unless a single punchy number
is wanted, per research-deep's own caution):** without ÷100, using raw
0–100 percentages with the same W₀, বাবুলের first mistake alone would send
the study weight from 2 straight to −28 — a lurch two orders of magnitude
larger than পর্ব ২'s actual, gentle 2.0 → 2.60. The bias weight would still
only move by ±1, since x₀ is exempt from any rescaling — so un-scaled inputs
don't just make numbers bigger, they badly distort the balance between how
much influence the threshold (bias) and the features can have.

---

## 6. Numbers the writer may use directly

All values below reconciled against `orchestrator-verification.md` (dated
2026-09-09) — the tie-breaker.

**Dataset** (x₀ = 1 for all):

| student | x₁ | x₂ | x₃ | d |
|---|---|---|---|---|
| আবুল | 0.60 | 0.95 | 0.20 | 1 |
| বাবুল | 0.30 | 0.40 | 0.90 | 0 |
| কাবুল | 0.80 | 0.85 | 0.70 | 1 |
| দাবুল | 0.20 | 0.25 | 0.30 | 0 |

**Convergence runs, W₀ = [−3.0, 2.0, 1.0, 3.0]** (পর্ব ২'s real start):

| η | epochs | final W |
|---|---|---|
| 1 | 6 | [−3.0, 3.40, 3.10, 0.70] |
| 0.5 | 6 | [−3.5, 2.45, 1.90, 1.15] (আবুলের Epoch-6 score lands on 0.005) |

**Convergence runs, W₀ = [0, 0, 0, 0]** (the trap case):

| η | epochs | final W |
|---|---|---|
| 1 | 3 | [0, 0.30, 0.55, −0.70] |
| 0.5 | 3 | [0, 0.15, 0.275, −0.35]  (exactly half; identical decisions) |

**Pairwise inner products (including x₀=1), all strictly positive:**

|  | আবুল | বাবুল | কাবুল | দাবুল |
|---|---|---|---|---|
| **আবুল** | 2.3025 | 1.7400 | 2.4275 | 1.4175 |
| **বাবুল** | 1.7400 | 2.0600 | 2.2100 | 1.4300 |
| **কাবুল** | 2.4275 | 2.2100 | 2.8525 | 1.5825 |
| **দাবুল** | 1.4175 | 1.4300 | 1.5825 | 1.1925 |

**The spine (the episode's central worked example), all η = 1, পর্ব ২ Epoch 1
→ 2:**
```
আবুলের own update lifts his score:  −0.25 → 2.0525
বাবুলের very next update:           2.0525 − 1.7400 = 0.3125 ≈ 0.31
```
This is exactly পর্ব ২'s printed Epoch-2 আবুল sum, and 1.7400 is exactly
আবুল·বাবুল — no coincidence, the algebra guarantees it.

**Epoch pattern (η = 1 run, needed for the patience clause in §7):** বাবুল
has Error ≠ 0 in epochs 1, 2, 3, and 4 — four straight epochs of being
reclassified wrong and corrected — before settling with Error = 0 from
epoch 5 onward. কাবুল, correct by coincidence in epoch 1, becomes wrong in
epoch 2 purely from বাবুলের epoch-1 update, and needs one correction before
settling.

---

## 7. Hard limits on what this episode may claim

- **Convergence is NOT unconditional.** "বারবার epoch চালালে convergence আসে"
  must be scoped ("এই ডেটাসেটে...", "আমাদের চারজনের ডেটাতে...") — never stated
  as a bare universal law. The condition that makes it work has a name; the
  episode must not name it (foreshadow only, per brief and E-002/E-003).
- **η/scale conflation is banned.** Do not present ÷100 and a smaller η as
  two versions of the same lever (§5). If mentioned together, state the
  asymmetry (x₀ exempt from ÷100) explicitly.
- **The "smaller η protects old learning" claim is banned outright** (§4).
  The only safe η-and-magnitude sentence is the tautological one: a smaller
  η makes one step smaller.
- **Patience clause on "নড়া মানে মোছা নয়".** বাবুল stays wrong for 4 straight
  epochs before settling (§6). The reassurance must not imply fast or smooth
  settling — "eventually stabilizes, no permanent erasure" is honest; "gently
  and quickly self-corrects" is not.
- **Catastrophic forgetting may be named in exactly one line**, as the grown-
  up version of মোটুর question, with the one honest distinguishing fact: in
  the real, dangerous version, the old data is no longer available when the
  new thing is learned — that's what makes it hard. Do not explain mechanism,
  do not name EWC or any mitigation. পর্ব ২/৩'s setup is the opposite regime
  (all four students reappear every single epoch), which is exactly why this
  system's version resolves and the grown-up version often doesn't.
- **Do not claim the converged weights are order-independent.** The specific
  numbers ([−3.0, 3.40, 3.10, 0.70], etc.) are a product of the specific
  student order আবুল→বাবুল→কাবুল→দাবুল. A different order is not guaranteed to
  land on the same final numbers (though this dataset is guaranteed to
  eventually stop making mistakes).
- **Do not print or derive a numeric mistake-bound** for this dataset — not
  computed by any researcher, and doing so would require separability/margin
  language forbidden this episode.
- **Forbidden vocabulary this episode** (brief E-002, unchanged): perceptron,
  decision boundary, linear separability, XOR, layer/hidden layer, activation
  function, loss/MSE, gradient, derivative, ঢাল, gradient descent, chain
  rule, backpropagation, margin.

**Analogy verdict — the brief's tug-of-war figure (one number line, আবুল
pushing right, বাবুল pulling left, net drift on a single weight):**

*Holds for:* showing that two examples can push the *same* weight in
opposite directions across an epoch, and that what survives is the net
position after both pushes. This literally happens to w₀ in Epoch 1
(−3.0 → −2.0 → −3.0, a full round trip).

*Breaks at the sentence:* "so বাবুল only really affects the weight tied to
বাবুলের own feature." **False** — every update moves **all four** components
of W simultaneously, in a single vector step, driven by that student's
entire X (bias included, since x₀ = 1 always). Verified on পর্ব ২'s own
Epoch 1: আবুল moves w₀, w₁, w₂ AND w₃ (all four); বাবুল then moves all four
again — and on w₃ specifically, বাবুলের pull does not settle to a neutral
midpoint, it **overshoots past আবুলের starting point** (3.0 → 3.20 → 2.30).

*If the figure ships:* it must show or caption, even briefly, that the same
two students are simultaneously pulling on the *other* weights too, and that
the "net drift" is sometimes an overshoot past the start, not a
partial-cancellation-to-midpoint. This is the exact discharge of RULING-4
(F09) — the analogy must be bounded inside পর্ব ৩ itself.

---

## 8. Sources

- Novikoff, A.B.J. (1962). "On convergence proofs on perceptrons." *Proc.
  Symposium on the Mathematical Theory of Automata*, Vol. 12, pp. 615–622,
  Polytechnic Institute of Brooklyn. (internal-confidence use only — not
  citable in-episode by name per brief)
- Rosenblatt, F. (1958). "The Perceptron: A Probabilistic Model for
  Information Storage and Organization in the Brain." *Psychological
  Review*, 65(6), 386–408. DOI: 10.1037/h0042519.
- Mohri, M. & Rostamizadeh, A. "Perceptron Mistake Bounds."
  arXiv:1305.0208 / cs.nyu.edu/~mohri/pub/pmb.pdf.
- Oregon State University ML course notes, "Perceptron Convergence Theorem
  and Proof" and the Perceptron Cycling Theorem page:
  web.engr.oregonstate.edu/~huanlian/teaching/ML/2024fall/unit2/convergence.html
- Columbia CS4252 lecture notes; Michael Collins' perceptron convergence
  notes (course-tier corroboration of the nonzero-w₀ extension).
- scikit-learn documentation, `sklearn.linear_model.Perceptron` (`eta0`
  default = 1; equivalence to `SGDClassifier(loss="perceptron", eta0=1,
  learning_rate="constant", penalty=None)`) — scikit-learn.org/stable/
  modules/generated/sklearn.linear_model.Perceptron.html, v1.9.
- Murphy, "Verified Perceptron Convergence Theorem" (Coq formalization,
  generalizes to arbitrary w₀), ACM CPP 2018.
  dl.acm.org/doi/pdf/10.1145/3088525.3088673.
- McCloskey, M., & Cohen, N. J. (1989). "Catastrophic interference in
  connectionist networks: The sequential learning problem." *The Psychology
  of Learning and Motivation*, Vol. 24, pp. 109–165. Academic Press.
- Ratcliff, R. (1990). "Connectionist models of recognition memory:
  Constraints imposed by learning and forgetting functions." *Psychological
  Review*, 97(2), 285–308. DOI: 10.1037/0033-295X.97.2.285.
- French, R. M. (1999). "Catastrophic forgetting in connectionist networks."
  *Trends in Cognitive Sciences*, 3(4), 128–135.
  DOI: 10.1016/S1364-6613(99)01294-2.
- Kirkpatrick, J. et al. (2017). "Overcoming catastrophic forgetting in
  neural networks." *PNAS* / arXiv:1612.00796.
- Direct source-code verification: `src/pages/neural-network/
  NeuralNetworkLearning.tsx` (all three researchers independently read and
  verified this file: dataset, update rule, x₀=1 bias definition, and all
  six epochs of printed arithmetic).
- `.bondhuta/episodes/003/orchestrator-verification.md` — the tie-breaker,
  direct deterministic simulation, run 2026-09-09.

---

## 9. Unresolved

**None at high severity.** The single factual contradiction found this round
(research-contrarian's original η=0.5 trace, "3 epochs / কাবুল flips") was
escalated in roundtable L1 iteration 1 (E-003), resolved by researcher
retraction (E-003-R1), and independently re-verified by three separate
computations (orchestrator's simulation, contrarian's corrected hand-trace,
deep's independent Epoch-1 hand-check) that now agree to the digit. Full
detail in `contradictions.md`.

Gaps flagged by researchers as genuinely unestablished — not contradictions,
do not fill with a plausible sentence, do not use in the episode regardless
of the brief's constraints:
- No citation-grade closed-form of Novikoff's mistake bound for nonzero W₀
  exists in what was retrieved (a qualitative shape was derived by
  research-deep and corroborated as a standard exercise, not attributed to
  one paper).
- No verified account of Rosenblatt's original 1958/1962 notation for η, or
  of why the original algorithm updated one example at a time rather than in
  batches.
- Not computed: the actual max-margin separator or a real mistake-bound
  number for this specific 4-student dataset (moot anyway — forbidden
  vocabulary this episode).
