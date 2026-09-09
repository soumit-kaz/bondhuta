# Contradictions log — Episode 3

Loop L1. Sources: research-primary.md, research-deep.md, research-contrarian.md,
adjudicated against roundtable.md (E-001–E-004, E-003-R1) and
orchestrator-verification.md (tie-breaker on all arithmetic).

---

## C-01 — η "protects old learning": contrarian's η=0.5 trace vs. orchestrator's simulation

**type: factual — RESOLVED (L1 iteration 1, already run before this merge)**
**severity: high (the only high-severity contradiction found)**

**claim A** (research-contrarian.md, F-01, original submission): from পর্ব ২'s
real nonzero W₀ = [−3, 2, 1, 3], η = 0.5 converges in only **3 epochs**, and
কাবুল "flips" mid-run — offered as evidence that halving η produces a
qualitatively gentler, faster-settling trajectory, in tension with the
episode's target premise.

**claim B** (`orchestrator-verification.md`, direct deterministic simulation
of পর্ব ২'s exact algorithm): same W₀, same order, η = 0.5 converges in
**6 epochs**, final W = [−3.5, 2.45, 1.90, 1.15], কাবুল never flips (Error = 0
in every epoch of that run).

**Only one could be right.** Escalated by @orchestrator as roundtable E-003
(blocking severity, anchored to orchestrator-verification.md).

**Resolution** (roundtable E-003-R1, @research-contrarian → @orchestrator):
contrarian re-derived its own η=0.5 Epoch-3 আবুল step by hand and found a
plain addition error — it had summed the same four numbers
(−3.5, 1.20, 1.02125, 0.44) as +0.16125 instead of the correct −0.83875. That
single slip made the run look "converged at epoch 3" with an incorrectly
error-free কাবুল; every step after it in the original submission was built on
the wrong W. Contrarian retracted "3 epochs" and "কাবুল flips" in full,
re-derived the corrected trace epoch-by-epoch, epochs 3–6, independently (not
by copying orchestrator's numbers), and it matched orchestrator's simulation
to the digit: final W = [−3.5, 2.45, 1.90, 1.15] after 6 epochs.

**Authority:** three independent computations now agree —
`orchestrator-verification.md`'s deterministic simulation,
research-contrarian's corrected hand-trace (epochs 3–6), and
research-deep.md's independent hand-check of Epoch 1 (which the corrected
trace also matches). research-primary.md made no epoch-count claim at η=0.5
so was never in conflict.

**What survives, unaffected by the correction:** F-01's actual conclusion was
never about epoch count. η = 1 and η = 0.5 both take 6 epochs from πর্ব ২'s
real W₀ but land on **different final weights**
([−3.0, 3.40, 3.10, 0.70] vs [−3.5, 2.45, 1.90, 1.15]). This is stronger
evidence against the folklore ("smaller η protects old learning") than the
retracted version was, because it shows η governs *destination*, not
*gentleness*. Recorded in research.md §4.

**No further escalation needed.** Zero high-severity contradictions remain
open after this resolution.

---

## Convergent findings — independently confirmed by two or more researchers, not contradictions

- **÷100 is asymmetric, not uniform (research.md §5).** Both research-primary
  (direct file read, NeuralNetworkLearning.tsx lines 288, ~605–620) and
  research-contrarian (direct file read, line ~148) independently found that
  x₀ = 1 is never divided by 100 while x₁, x₂, x₃ are — so ÷100 and a smaller
  η are not interchangeable levers. Two independent file reads agreeing;
  treated as settled, no escalation needed.
- **The interference formula and its reconciling number.** research-primary,
  research-deep, and orchestrator all independently derived
  `Δscore_A = η · Error_B · (A·B)` and all three arrived at the identical
  worked value: 2.0525 → 0.3125 ≈ পর্ব ২'s printed 0.31. Three independent
  derivations agreeing to the digit.
- **All six pairwise inner products, strictly positive, none near zero** —
  computed independently by research-primary, research-deep, and
  orchestrator; all three tables match to four decimal places.
- **πর্ব ২'s printed arithmetic across all 6 epochs is correct** — audited
  independently and in full by research-deep, research-contrarian, and
  orchestrator; zero discrepancies found across three independent full
  recomputations. Confirms brief's premise that পর্ব ৩ inherits no
  arithmetic debt.

---

## Premise pressure-tests — from research-contrarian only, not researcher-vs-researcher disagreements

These came only from research-contrarian.md, whose mandate is to attack the
target premise it was handed, not another researcher's claim. Neither
research-primary nor research-deep made any claim that conflicts with them —
they simply did not cover this ground. Recorded here because they change what
research.md is allowed to say (all folded into research.md §7).

| id | finding | type | resolution |
|---|---|---|---|
| F-02 | "epoch চালালে convergence আসে" is false as an unconditional law — true only for separable data (a term this episode may not use) | scope | scope every convergence statement to "এই ডেটাসেটে"; never state as universal law. Consistent with brief.md's own foreshadow clause. |
| F-03 | the brief's tug-of-war figure (one weight, one rope) implies each student only tugs "their" weight and that opposing pulls settle at a neutral midpoint | scope | both false: every update moves all four weight components (x₀ included); w₃ in Epoch 1 overshoots past its start (3.0→3.20→2.30) rather than settling to a midpoint. Figure/caption must show both facts if it ships. |
| F-04 | ÷100 and a smaller η are not the same lever | scope | see Convergent findings above — also independently found by research-primary. |
| F-05 | "catastrophic forgetting" (McCloskey & Cohen 1989 onward) is architecturally distinct from what happens in পর্ব ২/৩'s single linear unit rehearsed every epoch | level | both true, different levels: this system is mistake-bounded and provably settles on this data; the literature's phenomenon is about multi-layer nets where old data is gone by the time the new task trains — the opposite regime. Name it in one line only, flag the "old data no longer available" axis, no mechanism. |
| F-06 | বাবুল stays wrong for 4 straight epochs (1–4) before settling at epoch 5; কাবুল, correct in epoch 1 by coincidence, becomes wrong in epoch 2 from বাবুলের update | scope | confirmed against orchestrator's E-003 trace and the printed η=1 run. "নড়া মানে মোছা নয়" needs a patience clause — settling is not fast or smooth. |

---

## Unresolved

None. Every numeric claim across all three reports reconciles against
`orchestrator-verification.md`. The single genuine researcher-vs-researcher
disagreement (C-01) was resolved in L1 iteration 1 with three-way independent
confirmation. Zero high-severity contradictions remain open.
