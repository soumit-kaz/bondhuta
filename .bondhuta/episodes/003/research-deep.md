## The mechanism, layer by layer

**Layer 0 (পর্ব ২'s level).** `W_new = W + Error × X`. One example's update visibly changes W. The reader has seen this move a *specific weight* up and down (bias: −3 → −2 → −3 in Epoch 1) but has not been told this is a general fact about *every* pair of examples, nor been shown the size of the effect on an unrelated example's *score*.

**Layer 1 (what this episode should teach).** An update triggered by example B changes the *score* of a completely different example A by an exact, computable amount:

```
Δscore_A = η · Error_B · (A·B)
```

where `A·B` is the ordinary dot product of the two students' input vectors (including x₀=1). This is not a metaphor — it is the literal algebraic consequence of the update rule, one substitution deep. `A·B` is a single number per pair of students; its sign and size fully determine whether "interference" pushes A the same way B needed to move, or the opposite way, and by how much.

**Layer 2 (why the sign of A·B is never in question here).** Because x₀=1 for every student and every other feature is a percentage rescaled to [0,1] (so all ≥0), `A·B = 1 + (sum of products of non‑negative numbers) ≥ 1` for *every pair* of students in this dataset. It is structurally impossible for any two rows of this dataset to be orthogonal (A·B=0), let alone negative. That is one level deeper than "interference happens" — it is *why* interference is the guaranteed default in this dataset and not a special case that a luckier weight initialization could avoid.

**Layer 3 (why it still converges — the level below "it just does").** The raw weight vector genuinely oscillates component-by-component (bias: −3→−2→−3 is not noise, it is exactly this mechanism). Convergence is not "the oscillations get small" — it is a race between two quantities that never look at the raw components at all: the projection of W onto *some* hypothetical correct separator grows by a fixed minimum amount on every mistake regardless of which student caused it (because a mistake, by definition, was on the "wrong" side of that separator, so correcting it is *always* a step toward it), while ‖W‖ itself can only grow slowly, bounded by the size of the offending example. One is linear in mistakes, the other is a square root. This is Novikoff's argument (see Derivations).

**Where I stopped descending.** Below this is the formal margin/linear-separability apparatus (Novikoff's γ and R, the explicit assumption of a separating hyperplane) — this is legitimately the next rung, and it is explicitly পর্ব ৫'s territory per the brief (`must-not-teach-yet`: linear separability, perceptron, XOR). I derived it below for the writer's private confidence that "it converges because of a race, not luck" is *actually true and provable*, not for direct use in পর্ব ৩'s prose. The brief's foreshadow line ("convergence had a condition attached that we never stated") is exactly this margin condition — do not name γ or "separability" in the episode.

---

## Derivations

### 1. The exact algebra of interference

Score of any student S under weights W is `score_S(W) = W·S` (dot product, S includes x₀=1).

An update triggered by B changes the weights: `W_new = W + η·Error_B·B`.

Score of a *different* student A under the new weights:

```
score_A(W_new) = W_new · A
               = (W + η·Error_B·B) · A
               = W·A + η·Error_B·(B·A)
               = score_A(W) + η·Error_B·(A·B)
```

(dot product is symmetric and distributes over addition — that's the entire derivation, one line of algebra, but it is the line the reader has never been shown).

So:

```
Δscore_A = η · Error_B · (A·B)
```

**Reading each factor:**

- `η` — a positive scalar (size of one nudge). It scales the size of the interference but never its direction.
- `Error_B ∈ {+1, 0, −1}` — B's own correction direction. If B needed to go up, Error_B=+1 and *everything* A·B-correlated with B gets pushed the same way B got pushed. If B was already correct, Error_B=0 and Δscore_A=0 exactly — a correct example never touches anyone else's score. This is worth surfacing: interference only ever originates from a mistake, never from a correct prediction.
- `A·B` — the geometric term. This is the one thing not already visible in পর্ব ২'s prose.

**Interpreting A·B:**

- **A·B large and positive** — A and B are "similar" students (high on the same features). Learning B strongly drags A's score in whatever direction B's own correction went. This is পর্ব ২'s printed Epoch 1 case exactly: বাবুল needed correcting *down*, and A·B=1.74>0, so আবুলের score got dragged down too.
- **A·B = 0** — orthogonal input vectors. Correcting B has *zero* effect on A's score — provably, not approximately, since Δscore_A=0 exactly in that case. This is the one clean geometric condition under which "learning B leaves A completely alone."
- **A·B < 0** — A and B are "opposite" students. Correcting B *helps* A move in whatever direction A separately needed, or hurts it, depending on what A needed — the point is the push is in the *opposite* direction from what B itself experienced.

**Why A·B=0 is unreachable in this dataset (and in general, with a bias input and non-negative features):** every student vector's first coordinate is x₀=1 (always), and every other coordinate is a percentage rescaled to [0,1] (so ≥0, never negative). Therefore
```
A·B = (1×1) + (x₁ᴬx₁ᴮ + x₂ᴬx₂ᴮ + x₃ᴬx₃ᴮ) ≥ 1 + 0 = 1
```
strictly, for any two students. Orthogonality is not merely rare here — it is impossible. The only thing that varies pair to pair is the *size* of A·B (in this dataset it ranges 1.4175 to 2.4275 — see table below), never its sign. So the honest statement for this dataset is: **every example always interferes with every other example, in a direction fixed entirely by the causing example's own Error — the only free variable is how much.** "Avoiding" interference by choosing inputs carefully is off the table once a bias input is present and features are non-negative; the only lever left is keeping the interference *small relative to the correctness margin*, which is exactly what more epochs of averaging-out eventually buys you.

### 2. Pairwise inner products (including x₀=1) for the actual dataset

```
আবুল A = [1, 0.60, 0.95, 0.20]
বাবুল B = [1, 0.30, 0.40, 0.90]
কাবুল C = [1, 0.80, 0.85, 0.70]
দাবুল D = [1, 0.20, 0.25, 0.30]

A·B = 1 + 0.18 + 0.38  + 0.18  = 1.7400
A·C = 1 + 0.48 + 0.8075 + 0.14  = 2.4275
A·D = 1 + 0.12 + 0.2375 + 0.06  = 1.4175
B·C = 1 + 0.24 + 0.34  + 0.63  = 2.2100
B·D = 1 + 0.06 + 0.10  + 0.27  = 1.4300
C·D = 1 + 0.16 + 0.2125 + 0.21  = 1.5825
```

All six pairs: strictly ≥1.4175. No pair is close to zero. Confirms the claim above with real numbers, not just the abstract argument.

### 3. Novikoff's convergence argument, in full (background depth — not for direct use in পর্ব ৩'s prose)

Standard reference: **A.B.J. Novikoff, "On convergence proofs on perceptrons," Proceedings of the Symposium on the Mathematical Theory of Automata, vol. 12, pp. 615–622, 1962.** (Verified via web search against multiple independent course-note restatements — e.g. Mohri & Rostamizadeh's survey "Perceptron Mistake Bounds"; Columbia CS4252 notes; Michael Collins' convergence notes. All state the theorem identically in substance.)

Setup (translated to this episode's notation): assume there exists *some* weight vector v (not necessarily the one the algorithm finds) that correctly separates every training example with a strictly positive margin γ — i.e. for every example S with label d_S mapped to ±1, `d_S·(v·S) ≥ γ`. Let R = the largest ‖S‖ over all training examples.

Two claims, each proved by induction over mistakes only (correct predictions never change W, so they're irrelevant to the count):

**Claim 1 — alignment with v grows linearly in mistakes.** Suppose a mistake occurs on example S at step k (so before the update, S was on the wrong side). After the update `W_k = W_{k-1} + η·Error_S·S`:
```
v·W_k = v·W_{k-1} + η·Error_S·(v·S) ≥ v·W_{k-1} + η·γ
```
The inequality holds because Error_S has exactly the sign needed to make Error_S·(v·S) ≥ γ — that's what "v separates with margin γ" means. Crucially, this holds *no matter which example caused the mistake* — the projection onto v cannot fail to grow, regardless of interference on the raw components. After M mistakes, starting from W₀ (possibly non-zero):
```
v·W_M ≥ v·W₀ + η·M·γ
```

**Claim 2 — ‖W‖² grows at most like M (not M²).** Expand:
```
‖W_k‖² = ‖W_{k-1}‖² + 2η·Error_S·(W_{k-1}·S) + η²‖S‖²
```
A mistake at step k means, by definition, the *old* weights predicted wrong on S — that is precisely the condition `Error_S·(W_{k-1}·S) ≤ 0` (if it had been ≥0 in the needed direction, it wouldn't have been a mistake). So the middle term is ≤0, and:
```
‖W_k‖² ≤ ‖W_{k-1}‖² + η²R²
```
After M mistakes:
```
‖W_M‖² ≤ ‖W₀‖² + η²·M·R²
```

**Combine via Cauchy–Schwarz** (v·W ≤ ‖v‖‖W‖ always, for any two vectors):
```
η·M·γ + v·W₀  ≤  ‖v‖ · sqrt(‖W₀‖² + η²MR²)
```
For the clean textbook case W₀=0, ‖v‖=1: `ηMγ ≤ ηR√M` ⟹ `M ≤ (R/γ)²`. **η cancels out completely** — this is the "provably does not change" half of question 4 below, confirmed independently by this bound.

**Mechanical translation for the reader's mental model (not the formal proof, the *plain* version):** every mistake, whichever example caused it, is guaranteed to be a step of at least a fixed size *toward* some correct answer, when measured the right way (projected onto the true separator). Meanwhile no mistake can ever make the weight vector's total size balloon by more than that one example's own size. Growth that is guaranteed-forward beats growth that is merely bounded, eventually — so the tug-of-war (আবুল up, বাবুল down) is not evidence against convergence, it is completely compatible with it, because "up" and "down" in the *raw* bias coordinate are not the quantity that is actually accumulating. The accumulating quantity is invisible in পর্ব ২'s printed numbers; it only becomes visible if you project every update onto the eventual answer, which the reader does not have until the network has already converged.

**Effect of a non-zero starting W₀ on this bound (পর্ব ২'s actual situation):** re-deriving with W₀≠0 (verified via web search against course-note derivations, e.g. Oregon State ML notes, CS4252 notes — this specific extension is a standard textbook exercise, not independently attributed to a single named paper the way the zero-start case is attributed to Novikoff):
```
ηMγ + v·W₀ ≤ ‖v‖·sqrt(‖W₀‖² + η²MR²)
```
Now η no longer cancels — it multiplies the *growing* part of the bound (Mγ) but is squared inside the *fixed* part contributed by W₀. A poorly-chosen W₀ that starts out anti-aligned with the true answer (v·W₀ very negative) only ever adds a fixed penalty; a small η makes the "signal" side (ηMγ) grow more slowly relative to that fixed penalty, meaning more mistakes are needed before the same crossover point is reached. This is the rigorous form of "η matters more, and differently, once you don't start at zero" — see question 4 below for what this means concretely for পর্ব ২'s run.

**Sanity check against পর্ব ২'s actual numbers (illustrative only, NOT a claim this bound is tight):** taking পর্ব ২'s own converged W=[−3.0, 3.40, 3.10, 0.70] as a (non-optimal) example of a working separator v: its four raw scores are 2.13, −0.11, 2.85, −1.34 (Epoch 6, verified below); the tightest margin is বাবুলের 0.11, tiny relative to ‖W‖≈5.54. Plugging into the bound gives a wildly loose upper estimate — order of several thousand mistakes permitted — against the 8 actual mistakes needed. This mismatch is *expected and normal*: Novikoff's bound is a worst-case guarantee, and using the algorithm's own (non-max-margin) endpoint as if it were the best possible separator makes the bound far looser than it needs to be. I flag this explicitly under "What I could not establish" — do not let this number leak into the episode as if it predicts anything about this dataset.

### 4. What η actually does, mechanically

**Case W₀ = 0.** Claim: scaling η by a positive constant λ scales the *entire trajectory* of W by λ, and changes nothing else — not which example errs at which step, not the total number of mistakes, not the final decision boundary.

Proof sketch by induction: suppose after some number of steps, W_k(η) = η·V_k where V_k is the trajectory computed with η=1 (base case: W₀=0=η·0 trivially). Whether the next example is a "mistake" depends only on the *sign* of `W_k(η)·X = η·(V_k·X)`. Since η>0, multiplying by η never changes a sign (except at the knife-edge case sum=0 exactly, which doesn't occur in this dataset). So the same example makes the same kind of error with the same Error value, regardless of η. The update is `W_{k+1}(η) = η·V_k + η·Error·X = η·(V_k + Error·X) = η·V_{k+1}`, closing the induction. So for W₀=0, **η is provably irrelevant to the learning dynamics** — it only rescales the numbers in the final answer, never the story of how they got there. (This matches the Novikoff bound above, where η canceled out algebraically for W₀=0 — two independent derivations agreeing is a good confidence check.)

**Case W₀ ≠ 0 (পর্ব ২'s actual situation, W₀=[−3.0, 2.0, 1.0, 3.0]).** The induction above breaks at the very first step: `score(W₀) = W₀·X` does *not* scale with η at all — it's the same fixed number regardless of what η you pick for the *update* rule. Every subsequent score is `W₀·X + η·(accumulated correction)·X`. So whether a given example is misclassified now depends on the *ratio* between the fixed W₀ contribution and the η-scaled contribution from corrections made so far. Concretely: **η controls how quickly the update-driven term can overtake the original (possibly badly-guessed) W₀ term.** A small η means the initial guess has more relative inertia and it takes more mistakes to override it; a large η lets one or two corrections swamp the original guess almost immediately. Expressed as a ratio: what matters at any step is `η·(size of one update's contribution to a score, i.e. X·A) / (W₀·A, the fixed contribution from the initial guess to that same score)`.

**Hand-simulation of Epoch 1 at η=0.5** (starting from the same W₀=[−3.0, 2.0, 1.0, 3.0], same dataset order আবুল→বাবুল→কাবুল→দাবুল):

```
আবুল:  score = W₀·A = -0.25 (unchanged — depends only on W₀, not η)
       y=0, d=1, Error=+1
       ΔW = 0.5 × A = [0.5, 0.30, 0.475, 0.10]
       W₁ = [-3.0+0.5, 2.0+0.30, 1.0+0.475, 3.0+0.10] = [-2.5, 2.30, 1.475, 3.10]

বাবুল: score = W₁·B = -2.5 + 0.69 + 0.59 + 2.79 = 1.57
       y=1, d=0, Error=-1
       ΔW = -0.5 × B = [-0.5, -0.15, -0.20, -0.45]
       W₂ = [-2.5-0.5, 2.30-0.15, 1.475-0.20, 3.10-0.45] = [-3.0, 2.15, 1.275, 2.65]

কাবুল: score = W₂·C = -3.0 + 1.72 + 1.08375 + 1.855 = 1.65875 ≈ 1.66
       y=1, d=1, Error=0 → no update

দাবুল: score = W₂·D = -3.0 + 0.43 + 0.31875 + 0.795 = -1.45625 ≈ -1.46
       y=0, d=0, Error=0 → no update
```

**End of Epoch 1 at η=0.5: W = [-3.0, 2.15, 1.275, 2.65]**

Compare to পর্ব ২'s printed Epoch-1 result at η=1: `W = [-3.0, 2.30, 1.55, 2.30]`. The update sizes at η=0.5 are *exactly half* of the η=1 updates (ΔW=0.5×A vs ΔW=1×A — trivially true by the formula, but seeing it side by side is the point of the exercise). Both runs happen to have the *same mistake pattern* in Epoch 1 (আবুল errs, then বাবুল errs, then কাবুল and দাবুল are both already correct) — this is not guaranteed in general once W₀≠0, it's a property of this particular Epoch 1, and it is worth the writer flagging that later epochs are not guaranteed to keep matching (the two trajectories have already diverged in magnitude by end of Epoch 1, and their future mistake patterns can, in principle, differ).

**A secondary, useful observation for the writer:** দাবুলের score barely moved between the η=1 run (−1.46) and the η=0.5 run (−1.46, i.e. essentially identical to two decimals) despite the different η — দাবুল is a clear, well-separated case, far from the decision boundary, so halving the step size barely shows up in its score. কাবুল moved more visibly (1.77 → 1.66) since it's closer to the boundary. This is a nice concrete way to say "η's effect is largest exactly where a case is a close call" without invoking margin/separability by name.

### 5. Input magnitude — why ÷100 is not cosmetic

The update is `ΔW = η·Error·X`. Error is always in {−1,0,+1} — bounded, and doesn't grow with input scale. So the *entire* size of one update is controlled by `η` and `‖X‖`, and multiplying X's entries by a constant c has *the same mechanical effect on the update size as multiplying η by c* — **except for one coordinate**: x₀ is defined to be always 1, structurally, independent of any rescaling applied to the *measured* features (study/understanding/attendance). So dividing the raw percentages by 100 does not scale all four coordinates uniformly — it scales three of them and leaves the fourth (bias) alone. That asymmetry is the deeper reason ÷100 matters beyond "smaller numbers are nicer":

**Concrete illustration (not for direct episode use unless the writer wants a stress-test example) — what if the raw 0–100 percentages had been used directly, without ÷100, keeping the same W₀=[−3,2,1,3] chosen for the 0–1 scale:**
```
score_আবুল(raw) = -3×1 + 2×60 + 1×95 + 3×20 = -3+120+95+60 = 272   (still y=1, d=1, correct — no update happens, by luck of a large positive score)
score_বাবুল(raw, same W₀ since আবুল made no update) = -3×1+2×30+1×40+3×90 = -3+60+40+270 = 367
   y=1, d=0, Error=-1
   W₁ = W₀ - X_বাবুল(raw) = [-3-1, 2-30, 1-40, 3-90] = [-4, -28, -39, -87]
```
One mistake and the study-weight jumps from 2 to −28 — a lurch two orders of magnitude larger than পর্ব ২'s gentle 2.0→2.60. The bias component still only moves by ±1 (η=1) since x₀ is exempt from the scaling — so raw-scale inputs don't just make updates bigger, they make the *feature* weights swing wildly while the *bias* weight crawls, badly distorting the relative influence the model can give to the threshold versus the features. That distortion — not merely "big numbers" — is what breaks. Separability of the data itself is unaffected by input scale (scaling doesn't change which side of a plane a point falls on), but the *path* the online update rule takes to find a working boundary becomes violent and (per the Novikoff-style accounting above, since R grows roughly 100× while the achievable margin doesn't scale proportionally because the bias coordinate is exempt) can require far more corrective mistakes in principle.

**If the already-scaled (0–1) inputs were multiplied by 100 again:** identical situation to the "raw" case just shown — it undoes exactly the calibration পর্ব ২ did. What would *not* break: whether a working W eventually exists (separability is scale-invariant). What *would* break: the size of every update relative to a "reasonable" starting guess, the relative influence of bias versus features, and (per Claim 2 in the Novikoff derivation) how many mistakes are needed before ‖W‖'s growth catches up with — i.e. stabilizes against — the signal accumulating in the correct direction.

---

## Verified arithmetic against পর্ব ২

Every score printed on পর্ব ২'s page was independently recomputed from the weight vector active at that step and checked against the printed value. All of the following reconcile exactly (to the printed rounding):

| Step | Weights used | My computed sum | পর্ব ২'s printed sum | Match |
|---|---|---|---|---|
| Epoch1 আবুল | [-3,2,1,3] | -0.25 | -0.25 | exact |
| Epoch1 বাবুল | [-2.0,2.60,1.95,3.20] | 2.44 | 2.44 | exact |
| Epoch1 কাবুল | [-3.0,2.30,1.55,2.30] | 1.7675 | 1.77 (প্রায়) | matches |
| Epoch1 দাবুল | [-3.0,2.30,1.55,2.30] | -1.4625 | -1.46 (প্রায়) | matches |
| Epoch2 আবুল | [-3.0,2.30,1.55,2.30] | **0.3125** | **0.31** | matches — see derivation below |
| Epoch2 বাবুল | same (no change, আবুল Error=0) | 0.38 | 0.38 | exact |
| Epoch2 কাবুল | [-4.0,2.0,1.15,1.40] | -0.4425 | -0.44 | matches |
| Epoch2 দাবুল | [-3.0,2.80,2.0,2.10] | -1.31 | -1.31 | exact |
| Epoch3 আবুল | [-3.0,2.80,2.0,2.10] | 1.00 | 1.00 | exact |
| Epoch3 বাবুল | same | 0.53 | 0.53 | exact |
| Epoch3 কাবুল | [-4.0,2.50,1.60,1.20] | 0.20 | 0.20 | exact |
| Epoch3 দাবুল | same | -2.74 | -2.74 | exact |
| Epoch4 আবুল | [-4.0,2.50,1.60,1.20] | -0.74 | -0.74 | exact |
| Epoch4 বাবুল | [-3.0,3.10,2.55,1.40] | 0.21 | 0.21 | exact |
| Epoch4 কাবুল | [-4.0,2.80,2.15,0.50] | 0.4175 | 0.42 | matches |
| Epoch4 দাবুল | same | -2.7525 | -2.75 | matches |
| Epoch5 আবুল | [-4.0,2.80,2.15,0.50] | -0.1775 | -0.18 | matches |
| Epoch5 বাবুল | [-3.0,3.40,3.10,0.70] | -0.11 | -0.11 | exact |
| Epoch5 কাবুল | same | 2.845 | 2.85 | matches (round-half-up) |
| Epoch5 দাবুল | same | -1.335 | -1.34 | matches (round-half-away-from-zero) |

Every intermediate weight vector printed in Epoch 1–5 (আবুলের [-2.0,2.60,1.95,3.20], বাবুলের [-3.0,2.30,1.55,2.30], and every subsequent update through the Epoch5 result W=[-3.0,3.40,3.10,0.70]) was recomputed and matches exactly.

**Conclusion: I found no arithmetic error in পর্ব ২. Every printed number reconciles.** The series is safe to build পর্ব ৩ on these numbers as-is.

**The specific reconciliation the brief asked for (0.31 line), shown by the interference formula:**
```
score_আবুল(after আবুলের own update)      = 2.0525  (≈2.05, printed on the page)
score_আবুল(after বাবুলের update, same epoch) = score_আবুল(prev) + Error_বাবুল · (আবুল·বাবুল)
                                       = 2.0525 + (-1) × 1.74
                                       = 0.3125  ≈ 0.31   ✓ matches printed Epoch-2 value exactly
```
আবুলের prediction **survived** — its score dropped from 2.05 to 0.31 (a drop of 1.74, entirely accounted for by the interference formula above) but stayed positive, so y stayed 1 and d=1 still matched, hence পর্ব ২ correctly prints Error=0 for আবুল at the top of Epoch 2. This is the single cleanest, most concrete demonstration available in the existing data: interference is real (1.74 units is not nothing — it's most of আবুলের original margin) but "moved" ≠ "erased." A smaller original margin, or one more অনুরূপ neighbor's update, would have flipped it.

---

## Numbers the writer can use directly

- **Interference formula:** `Δscore_A = η · Error_B · (A·B)` — one line of algebra from `W_new = W + η·Error·X`, safe to show in full since it only uses dot products and the update rule পর্ব ২ already taught.
- **The reconciling calculation:** 2.0525 (আবুলের score right after its own Epoch-1 update, page rounds to 2.05) − 1.74 (interference from বাবুলের correction) = 0.3125 ≈ 0.31 (পর্ব ২'s printed Epoch-2 value). This is a ready-made "let's do the arithmetic together" beat.
- **আবুল·বাবুল = 1.74**, and the general fact that all six pairwise inner products in this dataset are ≥1.4175 — because x₀=1 always and every other feature is non-negative, so orthogonality (zero interference) is impossible in this dataset. Safe, self-contained, no forward-reference needed.
- **η=0.5 hand-simulation of Epoch 1**, full numbers above — ready for a "you try it" exercise, ends at W=[-3.0, 2.15, 1.275, 2.65] versus পর্ব ২'s η=1 result [-3.0, 2.30, 1.55, 2.30]. Both trajectories make the same two mistakes (আবুল, then বাবুল) in Epoch 1; the update sizes are exactly half.
- **Scale illustration:** without ÷100, one mistake sends a weight from 2 to −28 (shown above) — usable as a punchy, concrete number if ভতু wants a single "look how bad this would be" line rather than an abstract argument. Keep it to this one number; the full R/γ mechanism behind *why* it's worse than just "big numbers" is background only.
- **W₀=0 fact (safe to state without margin/separability language):** if you start every weight at zero, choosing η=1 vs η=0.5 changes only how big the final numbers are, never which student causes which mistake or how many epochs it takes. This flips once you start from a non-zero guess (পর্ব ২'s actual situation) — η then also controls how fast the learned corrections can overtake the original guess.

---

## What I could not establish

- **No canonical single-paper citation for the non-zero-start extension of Novikoff's bound.** The zero-start bound is cleanly attributed to Novikoff (1962), confirmed via multiple independent course-note sources. The non-zero-start generalization I derived (and cross-checked against course notes from Oregon State, Columbia CS4252, and Michael Collins' lecture notes) is standard and appears as a routine exercise, but I could not find one paper it's uniquely attributed to — treat it as a derivable extension, not a "named result."
- **The Novikoff bound computed against পর্ব ২'s own converged W (~thousands of allowed mistakes vs 8 actual) is not a tight or meaningful prediction for this dataset** — it uses the algorithm's own endpoint as a stand-in for the true max-margin separator, which is not the same thing and makes the bound far looser than it needs to be. I could not compute the actual max-margin separator for this 4-point dataset without solving a small optimization problem, which felt out of scope and, per the brief, is পর্ব ৫'s territory (linear separability) regardless.
- **Whether later epochs at η=0.5 keep the same mistake pattern as η=1** — I verified only Epoch 1 by hand (as requested). The two trajectories diverge in magnitude after Epoch 1, and I did not carry the η=0.5 simulation further; I cannot promise the mistake pattern (or epoch count to convergence) stays identical beyond Epoch 1, and the writer should not imply it does without simulating further if that claim is made.
- **I did not find a documented historical account of *why* Rosenblatt's original formulation used the online, one-at-a-time update rather than accumulating errors over a full pass before updating** — this felt like a plausible "why was it built this way" thread but I could not verify a specific claim about it in this session, so I'm leaving it out rather than guessing.
