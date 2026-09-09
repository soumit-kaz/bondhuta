# Knowledge Base — Neural Network সিরিজ

Durable technical facts and settled values the series may reuse across episodes.
Sourced and verified per episode's research pack.

---

## Settled Dataset (Canonical)

**Four students, three features each (x₀ = 1 for bias, always):**

| Student | study (x₁) | understanding (x₂) | attendance (x₃) | A+? (d) |
|---|---|---|---|---|
| আবুল | 0.60 | 0.95 | 0.20 | 1 |
| বাবুল | 0.30 | 0.40 | 0.90 | 0 |
| কাবুল | 0.80 | 0.85 | 0.70 | 1 |
| দাবুল | 0.20 | 0.25 | 0.30 | 0 |

**Initial weight (arbitrary guess):** W₀ = [−3.0, 2.0, 1.0, 3.0]

**Convergence (η = 1 run, episode 2 context):** 6 epochs to W = [−3.0, 3.40, 3.10, 0.70]

Convergence verified by: all four students Error = 0 at Epoch 6. Sourced from `orchestrator-verification.md`.

---

## The Interference Mechanism (Episode 3 core)

**Formula:** `Δsum_A = η · Error_B · (A · B)`

Where:
- **η** = learning rate (positive scalar)
- **Error_B** ∈ {−1, 0, +1} = B's prediction error
- **A · B** = dot product of feature vectors

**Key insight:** A correct update (Error = 0) produces zero interference. Only mistakes propagate to others.

**Verified on this dataset:** No pair of students has orthogonal feature vectors (all A·B ≥ 1.1925), so interference is nonzero for every mistake-driven update.

Sourced: Episode 3 blueprint (E-004), research.md §2, orchestrator-verification.md.

---

## Learning Rate η: Zero-Start Scale Invariance

**The counter-intuitive fact:** From W₀ = [0, 0, 0, 0], η is a pure rescaling.

Both η = 1 and η = 0.5 from zero:
- Same student error sequence
- Same convergence epoch count (3 epochs)
- Final weights exactly proportional: W(η=1) = 2 × W(η=0.5)
- Identical decision boundaries throughout

**Why this matters:** Folklore ("smaller η protects old learning") is FALSE from zero start. Both trajectories are identical in all decisions; only the final magnitude differs.

**From non-zero start (like W₀ = [−3, 2, 1, 3]):** η controls how fast data-driven corrections override the initial guess. Smaller η = initial guess stays influential longer. Both η=1 and η=0.5 still take 6 epochs but land on genuinely different W.

Sourced: Episode 3 research.md §4, orchestrator-verification.md, research-contrarian.md (with F-01 retraction documented).

---

## Dot Products (Pairwise Inner Products, all positive)

Computed for the four-student dataset. All strictly positive because x₀ = 1 for all and other features are non-negative fractions.

```
        আবুল    বাবুল    কাবুল    দাবুল
আবুল   2.3025  1.7400  2.4275  1.4175
বাবুল  1.7400  2.0600  2.2100  1.4300
কাবুল  2.4275  2.2100  2.8525  1.5825
দাবুল  1.4175  1.4300  1.5825  1.1925
```

**Minimum value:** 1.1925 (দাবুল·দাবুল)
**Structural fact:** All ≥ 1.1925 because `X_i · X_j ≥ 1` always (due to x₀ = 1).

Sourced: Episode 3 research.md §6, orchestrator-verification.md.

---

## The Spine: আবুলের Sum Trajectory (Epoch 1→2, η = 1)

```
Before any update:           −0.25
After আবুলের own update:    2.0525  (gained +2.3025 = X_A · X_A)
After বাবুলের update:       0.3125  (lost −1.7400 = X_A · X_B)
```

**Printed values in episode 2:** 2.05, 0.31 (rounded).

**Exact reconciliation:** 1.7400 = X_A · X_B exactly; no coincidence, algebra guarantees it.

Sourced: Episode 2 printed page, Episode 3 blueprint (E-004), orchestrator-verification.md.

---

## ÷100 Asymmetry: Feature Scaling is Not Learning Rate

**Update rule:** `ΔW = η · Error · X`

**Key asymmetry:** x₀ = 1 is NOT divided by 100; x₁, x₂, x₃ ARE.

Therefore:
- η scales ALL components uniformly (bias included)
- ÷100 scales only feature components, leaving bias step at ±η

**Without ÷100, raw 0–100 inputs:** Study weight would jump from 2 → −28 in one correction (100× larger than পর্ব ২'s actual 2 → 2.60). Bias still only ±η. This destroys balance.

**Conclusion:** ÷100 and η are different levers. Must not be presented as equivalent.

Sourced: Episode 3 research.md §5, blueprint.md (E-015 discussion).

---

## Convergence Condition (Unnamed in Episode 3)

**Fact:** This four-student dataset exhibits convergence (reaches Error = 0 for all, at Epoch 6, from W₀ = [−3, 2, 1, 3]).

**What is assumed but not named:** A setting of the four weights exists that satisfies all four students simultaneously. This condition (linear separability) is NOT universal; datasets where no such W exists will cycle forever.

**Why unnamed in Episode 3:** The condition has a formal name; episode foreshadows it for Episode 5. Using the name would pre-spend Episode 5's reveal.

**Patience clause:** Convergence is not smooth. In this run, বাবুল errs for 4 consecutive epochs (Epochs 1–4) before settling. Per-epoch mistake count: 2·2·1·2·1·0.

Sourced: Episode 3 blueprint, knowledge.md (Depth ladder 2), research.md §3 & §7.

---

## Catastrophic Forgetting Boundary

**The dangerous version (grown-up networks):** When new training data arrives, old data is no longer accessible. Correcting new mistakes can erase learned responses to old data permanently.

**This series' version:** All four students reappear every single epoch. So after any damage, the damaged student gets a turn to self-correct. Damage is temporary.

**Why mentioned once in Episode 3:** To discharge পর্ব ২'s own foreshadow ("গবেষকরা মাথা ঘামান"). Episode 3 shows why the problem doesn't arise here.

Sourced: Episode 3 research.md §7 (Judgement call D), McCloskey & Cohen (1989), Kirkpatrick et al. (2017).

