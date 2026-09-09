# Orchestrator ground-truth verification — episode 3

Run by `@orchestrator` on 2026-09-09 by direct simulation of পর্ব ২'s algorithm.
Deterministic. This file is the tie-breaker on all arithmetic in this episode.

Algorithm as পর্ব ২ defined it: `score = WᵀX`, `y = 1 if score > 0 else 0`,
`Error = d − y`, `W ← W + η · Error · X`, applied one example at a time, in the
order আবুল → বাবুল → কাবুল → দাবুল, repeating until an epoch passes with no update.

Dataset (x₀ = 1 for all):

| student | x₁ | x₂ | x₃ | d |
|---|---|---|---|---|
| আবুল | 0.60 | 0.95 | 0.20 | 1 |
| বাবুল | 0.30 | 0.40 | 0.90 | 0 |
| কাবুল | 0.80 | 0.85 | 0.70 | 1 |
| দাবুল | 0.20 | 0.25 | 0.30 | 0 |

---

## 1. পর্ব ২'s printed numbers are CORRECT

Every printed sum reconciles. Spot-checks against the published page:

| printed in পর্ব ২ | exact value | verdict |
|---|---|---|
| Epoch 1 আবুল `-0.25` | −0.25 | ✅ |
| Epoch 1 বাবুল `2.44` | 2.44 | ✅ |
| Epoch 1 কাবুল `1.77 (প্রায়)` | 1.7675 | ✅ |
| Epoch 1 দাবুল `-1.46 (প্রায়)` | −1.4625 | ✅ |
| Epoch 2 আবুল `0.31` | 0.3125 | ✅ |
| Epoch 2 বাবুল `0.38` | 0.38 | ✅ |
| Epoch 2 কাবুল `-0.44` | −0.4425 | ✅ |
| Epoch 3 বাবুল `0.53` | 0.53 | ✅ |
| Epoch 4 আবুল `-0.74` | −0.74 | ✅ |
| Epoch 5 আবুল `-0.18` | −0.1775 | ✅ |
| Epoch 6 all zero-error | confirmed | ✅ |
| final W `[−3.0, 3.40, 3.10, 0.70]` | exact | ✅ |

**পর্ব ৩ inherits no arithmetic debt.** The sequel may cite these numbers freely.

---

## 2. Every pair of students interferes. Always. — LOAD-BEARING

Inner products xᴬ·xᴮ including x₀ = 1:

|  | আবুল | বাবুল | কাবুল | দাবুল |
|---|---|---|---|---|
| **আবুল** | 2.3025 | 1.7400 | 2.4275 | 1.4175 |
| **বাবুল** | 1.7400 | 2.0600 | 2.2100 | 1.4300 |
| **কাবুল** | 2.4275 | 2.2100 | 2.8525 | 1.5825 |
| **দাবুল** | 1.4175 | 1.4300 | 1.5825 | 1.1925 |

**Not one of them is zero or negative.** Because x₀ = 1 for everybody and every
feature is a non-negative fraction, the inner product can never be zero here. So in
this dataset every single update on one student moves every other student's score —
interference is not an edge case, it is unavoidable and total.

An update on B changes A's score by exactly `η · Error_B · (xᴬ · xᴮ)`.

Worked, from পর্ব ২ Epoch 1: after আবুল's update, আবুল's score would be
−0.25 + 1 × 2.3025 = 2.0525. Then বাবুল errs with Error = −1, which moves আবুল's
score by 1 × (−1) × 1.7400 = **−1.7400**, leaving আবুল at 0.3125 — exactly the
`0.31` পর্ব ২ printed at the top of Epoch 2. আবুল survived, but only just.

**CORRECTION (@knowledge-architect, upheld):** an earlier version of this file and of
E-004 said "74% of what আবুল gained was taken back". That figure does not reconcile —
1.7400 / 2.3025 = 75.57% of the gain, or 1.7400 / 2.0525 = 84.77% of his standing at
that moment. **Use no percentage at all.** `2.0525 → 0.3125, a drop of 1.7400` is
exact, stronger, and unambiguous. Any draft printing a percentage here is an F01.

This single number — 2.0525 → 0.3125 — is the episode.

---

## 3. η from a ZERO start does nothing. — the trap

| start | η | epochs to converge | final W |
|---|---|---|---|
| W₀ = 0 | 1 | 3 | [0, 0.30, 0.55, −0.70] |
| W₀ = 0 | 0.5 | 3 | [0, 0.15, 0.275, −0.35] |

Same number of epochs, same mistakes, final weights **exactly scaled by 0.5**. The
decision is identical. From a zero start, η is a pure rescaling and changes nothing
that matters.

**Therefore "η ছোট করলে পুরনো শেখা কম নড়ে" is FALSE as a general claim.** It is
folklore imported from gradient descent. Any draft asserting it unconditionally is
an F01.

## 4. But η DOES matter from পর্ব ২'s nonzero start

| start | η | epochs | final W |
|---|---|---|---|
| W₀ = [−3, 2, 1, 3] | 1 | 6 | [−3.0, 3.40, 3.10, 0.70] |
| W₀ = [−3, 2, 1, 3] | 0.5 | 6 | [−3.5, 2.45, 1.90, 1.15] |

Same 6 epochs — but a **different answer**. η is not controlling "how much old
learning is protected". It is controlling **how fast the data is allowed to
overrule our initial guess**. Small η keeps the starting hunch influential for
longer; large η lets one student's data swamp it.

That is the honest framing, and it is more interesting than the folklore version.

η = 0.5 detail worth using: at Epoch 6 আবুল's score lands on **0.005** — correct by
a hair. Good material for showing how tight convergence can be.

---

## 5. Rulings this file forces

- The episode MUST NOT say a smaller η protects old learning. It may say a smaller η
  keeps the initial guess in play longer. @fact-checker: treat any other phrasing as
  a hard failure.
- The episode SHOULD use 2.0525 → 0.3125 as its worked example. It is real, it is
  already half-printed in পর্ব ২, and it makes interference visible without new data.
- The "every pair interferes because x₀ = 1 and features are positive" observation is
  original, correct, and specific to this series' dataset. It is the originality beat.
