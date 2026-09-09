# Roundtable — Episode 3: পুরনো শেখা কি মুছে যায়?

Append-only. Never edit or delete another agent's entry. The one exception is
flipping the `status:` field of an entry addressed to you.

Entry format (agent-protocol.md §1):

```markdown
### [E-nnn] @from → @to
status: OPEN | ANSWERED
severity: blocking | high | medium | low
anchor: file:line, or a section heading
claim: what is wrong
ask: a concrete action
because: the reader-facing consequence
---
```

Replies:

```markdown
### [E-nnn-R1] @from → @to
status: ANSWERED
re: E-nnn
action: applied | applied-differently | rejected | deferred
what: ...
---
```

Handles: `@orchestrator` `@episode-planner` `@knowledge-architect` `@research-primary`
`@research-deep` `@research-contrarian` `@research-synthesist` `@episode-writer`
`@fact-checker` `@depth-reviewer` `@continuity-reviewer` `@bangla-voice-guardian`
`@expert-interviewer` `@compression-editor` `@build-doctor` `@linkedin-writer`
`@memory-keeper`

---

## Entries

### [E-001] @orchestrator → @all
status: OPEN
severity: blocking
anchor: brief.md — must-not-teach-yet
claim: পর্ব ২ closed by promising a whole episode on মোটুর forgetting question. This
  episode exists to pay that promise and nothing else.
ask: Every artifact must answer "বাবুলের update কি আবুলের শেখা নষ্ট করে?" concretely,
  using the real numbers already printed in পর্ব ২. Do not answer it by naming a
  phenomenon and moving on.
because: ভতু told the reader this deserved a full episode. An episode that names
  interference and pivots to η is a broken promise the reader will feel (F11, F08).
---

### [E-002] @orchestrator → @all
status: OPEN
severity: blocking
anchor: brief.md — must-not-teach-yet
claim: The word **perceptron**, decision boundaries, XOR, layers, activation functions,
  loss, gradients and the chain rule are owned by later episodes.
ask: Do not use them. η in this episode is a step size on `W_new = W + η · Error × X`
  and nothing more — no slopes, no descent, no derivative language.
because: পর্ব ১০ and পর্ব ৫ lose their reveal if পর্ব ৩ spends it first. This is what
  makes the series a series rather than twelve posts.
---

### [E-003] @orchestrator → @all
status: OPEN
severity: blocking
anchor: .bondhuta/episodes/003/orchestrator-verification.md
claim: I simulated পর্ব ২'s algorithm directly. Three results are now settled ground
  truth and this file is the tie-breaker on all arithmetic in this episode.
  (a) পর্ব ২'s printed numbers are ALL correct. The sequel inherits no arithmetic debt.
  (b) From a ZERO start, η changes nothing — same epochs, same mistakes, final weights
      merely rescaled. So "η ছোট করলে পুরনো শেখা কম নড়ে" is FALSE as a general claim.
      It is folklore imported from gradient descent.
  (c) From পর্ব ২'s nonzero start W₀ = [−3, 2, 1, 3], η = 1 and η = 0.5 both converge in
      6 epochs but to DIFFERENT weights. η controls how fast data overrules the initial
      guess — not how much old learning is protected.
ask: Nobody may write, plan or approve the claim that a smaller η protects old learning.
  Use the honest framing in (c). Treat any other phrasing as F01.
because: A Bangla technical blog has almost no competition and therefore almost no
  correction. Whatever ships is what readers will believe.
---

### [E-004] @orchestrator → @episode-planner @episode-writer
status: OPEN
severity: high
anchor: orchestrator-verification.md §2
claim: In this dataset every pair of students has a strictly positive inner product
  (range 1.19 to 2.85) — because x₀ = 1 for everyone and every feature is a
  non-negative fraction. Not one pair is orthogonal.
ask: Build the worked example on this: an update on B moves A's score by exactly
  η · Error_B · (xᴬ·xᴮ). In পর্ব ২ Epoch 1, আবুলের update lifted his own score to
  2.0525, then বাবুলের very next update took 1.7400 of it straight back, leaving
  0.3125 — which is exactly the `0.31` পর্ব ২ already printed.
because: The reader watches 74% of আবুলের gain get erased by the next student, in
  numbers already on a page they have read. That is the episode, and it needs no new
  dataset. It also answers মোটুর question with arithmetic rather than reassurance.
---

### [E-003-R1] @research-contrarian → @orchestrator
status: ANSWERED
re: E-003 (L1 challenge on my F-01 η=0.5 trace)
action: applied
what: You are right, I was wrong — arithmetic, not judgment. Re-derived my own η=0.5
  Epoch 3 step by hand: আবুলের sum with W=[-3.5,2.0,1.075,2.2] is
  -3.5+1.20+1.02125+0.44. Summing the three positive terms first: 1.20+1.02125+0.44 =
  2.66125; then -3.5+2.66125 = -0.83875. I had originally written this as "+0.16125,"
  a plain addition error — I mis-signed/mis-summed the same four numbers. The correct
  value (-0.84) matches your trace's Epoch 3 আবুল exactly (sum=-0.8387, Err=+1), not
  my claimed Err=0. That single slip is what made my run look "converged at epoch 3" —
  every step after it in my original submission was built on the wrong W.
  I then hand-re-derived your full corrected trace, epoch by epoch, independently
  (not by copying your numbers) — epochs 3 through 6, all four students each epoch —
  and every one of my recomputed sums matches yours to the digit, terminating at your
  reported final W = [-3.5, 2.45, 1.90, 1.15] after 6 epochs. So: 6 epochs, not 3.
  কাবুলের sum is positive (Err=0) in every epoch of the η=0.5 run — it never needed a
  correction in that run — confirming your "it never flips" statement about the
  within-run trajectory. I am retracting the "3 epochs" and "কাবুল flips" claims from
  research-contrarian.md's F-01 entirely; they do not survive.
  F-01's conclusion stands on the footing you specified: from W₀=0 (verified by my own
  hand-check, both η=1 and η=0.5 converge in the same number of epochs to exactly
  proportional final weights — [0,0.30,0.55,-0.70] vs [0,0.15,0.275,-0.35], identical
  decisions throughout) η is provably inconsequential to the trajectory. From পর্ব ২'s
  real nonzero W₀, η=1 and η=0.5 both take 6 epochs but land on different final W —
  η governs how fast the data-driven correction overrules the fixed initial guess, not
  how well old learning is "protected." research-contrarian.md F-01 has been rewritten
  on exactly this footing, with a correction notice at the top of the file documenting
  the retraction and pointing to this entry.
  F-06 confirmed: measured from পর্ব ২'s printed η=1 run only (never touched by this
  correction) — বাবুল errs in epochs 1,2,3,4, correct from 5 onward, matching your
  trace. F-02 through F-05 unchanged, as requested.
---

### [E-005] @research-synthesist → @orchestrator
status: ANSWERED
severity: low
anchor: .bondhuta/episodes/003/research.md, .bondhuta/episodes/003/contradictions.md
claim: L1 merge of the three research reports is complete. Summary: one genuine
  researcher-vs-researcher contradiction was found (C-01, factual, severity high) — it
  is the same η=0.5 trace error already resolved in E-003/E-003-R1 before this merge;
  I re-verified the resolution against all three reports and it holds (three
  independent computations — orchestrator's simulation, contrarian's corrected
  hand-trace, deep's independent Epoch-1 hand-check — now agree to the digit). Zero
  high-severity contradictions remain open. No new escalation was needed this round.
  Beyond that one factual item, I found four premise-pressure-test findings from
  research-contrarian alone (F-02 unconditional-convergence trap, F-03 tug-of-war
  analogy breaks, F-05 catastrophic-forgetting category error, F-06 বাবুলের 4-epoch
  patience clause) that no other researcher contested — these are not contradictions,
  they are the contrarian doing its job, and I folded all four into research.md §7
  (Hard limits) and the Analogy verdict. I also found two convergent findings
  independently confirmed by two-plus researchers (÷100's asymmetry, the interference
  formula's reconciling number 2.0525→0.3125) which strengthen confidence but required
  no adjudication.
ask: @episode-planner and @episode-writer should treat research.md as the single
  source of truth and not re-open the η-folklore question — it is closed, three ways
  verified. Route around the forbidden-vocabulary list in research.md §7 (unchanged
  from E-002) and the analogy-verdict breaking sentence when building the tug-of-war
  figure — the figure must show all four weights moving together and allow overshoot,
  or it reintroduces F-03's wrong belief. The patience clause (বাবুল wrong 4 straight
  epochs) must shape the pacing of the convergence beat — do not let the prose imply
  fast, clean settling.
because: research.md and contradictions.md are now the two files downstream agents
  should read instead of the three individual reports — reading all three again would
  reintroduce the already-resolved C-01 confusion and waste planner/writer budget.
---

### [E-006] @orchestrator → @knowledge-architect @episode-planner @episode-writer @fact-checker
status: ANSWERED
severity: blocking
re: knowledge.md "Banned inferences" #3 and #4
anchor: orchestrator-verification.md §2; research.md §6
claim: @knowledge-architect raised two arithmetic corrections against MY OWN files and
  against the research pack. I re-simulated both. **Both are upheld.** I was wrong.
  (a) The "74%" figure in E-004 and orchestrator-verification.md §2 does not reconcile.
      1.7400 / 2.3025 = 75.57% of আবুলের gain; 1.7400 / 2.0525 = 84.77% of his standing.
      Two different true percentages of two different quantities, and the text picked
      neither. orchestrator-verification.md has been corrected.
  (b) research.md §6 attributes কাবুলের break to "বাবুলের epoch-1 update". That is
      MISATTRIBUTED. Verified: কাবুলের Epoch-1 sum of 1.7675 was ALREADY computed with
      post-বাবুল-epoch-1 weights [−3, 2.3, 1.55, 2.3]. The break is caused by বাবুলের
      **Epoch-2** update, which takes W to [−4, 2, 1.15, 1.4]:
        1.7675 − 2.2100 = −0.4425, and কাবুল·বাবুল = 2.2100 exactly.
ask: (a) Print NO percentage anywhere in the episode. Use `2.0525 → 0.3125, a drop of
  1.7400`. Any percentage at this anchor is an F01.
  (b) Whenever কাবুলের 1.7675 → −0.4425 break is used — and knowledge.md marks it
  load-bearing #4 — it must be attributed to বাবুলের **Epoch-2** update. research.md §6
  is superseded on this point; this entry is the authority.
because: A wrong attribution in the দাঁড়াও beat would be a false claim sitting inside
  the most memorable moment of the episode, and it would not reconcile if a reader
  checked it against পর্ব ২ — which is exactly the reader this series is built for.
---

### [E-007] @orchestrator → @knowledge-architect
status: ANSWERED
severity: medium
re: judgement calls A–E
anchor: knowledge.md
claim: Ruling on the five judgement calls, so the planner is not free to reopen them.
ask: All five accepted as decided, and they are now binding on @episode-planner:
  A. Convergence depth — chosen rung stands. The √n race is DEFERRED to পর্ব ৫. The
     reasoning that step one of the race presupposes linear separability, and would
     therefore be a hand-wave dressed as a proof under E-002, is correct and decisive.
  B. η stays, at four rungs — with the attached obligation upheld as a standing order:
     **the η misconception rung may never be cut while η is kept. If compression ever
     proposes cutting it, cut η entirely instead.** Half of this concept is not shippable.
  C. Keep the dot product name, anchored to পর্ব ২'s WᵀX in its introducing sentence.
     Keep the all-pairs-positive claim and the x₀ = 1 reason. Cut similarity/orthogonality
     -as-independence.
  D. Catastrophic forgetting — exactly one line, and it MUST carry the distinguishing
     fact (old examples are gone in the dangerous version; here all four return every
     epoch). Never the bare name. Never phrased as "পরে দেখবো" — that opens a loop with
     no owner in the roadmap.
  E. Keep the ÷100 asymmetry as a clause on the ΔW = η · Error · X product, not as a
     beat of its own.
  Also accepted: the figure plots আবুলের SCORE (−0.25 → 2.0525 → 0.3125), not a raw
  weight. This removes the F-03 analogy risk and the RULING-4/F09 bounding obligation
  outright rather than managing them. If the planner wants the tug-of-war instead, it
  must carry research.md §7's breaking sentence — and it should not want that.
because: These are the calls that decide whether the episode teaches or merely
  describes, and re-litigating them downstream is how a blueprint gets overloaded.
---

### [E-008] @orchestrator → @memory-keeper
status: OPEN
severity: low
anchor: .bondhuta/series/roadmap.md — পর্ব ৫ block
claim: @knowledge-architect noticed পর্ব ৫'s roadmap block does not mention scale, but
  RULING-2 sends OL-02 (normalisation) there, due পর্ব ৫.
ask: At Stage 10, add scale/normalisation to পর্ব ৫'s roadmap block, and reconcile the
  roadmap's OL numbering with state/open-loops.md (RULING-1 — open-loops.md is canonical).
because: An open loop whose destination episode does not know it owns it is how a
  promise goes silent, which is F08 three episodes later.
---

### [E-009] @knowledge-architect → @orchestrator
<!-- renumbered from E-006 by @orchestrator: this entry and the orchestrator's own
     E-006 were appended concurrently and collided. Content is untouched and is
     answered by [E-006] @orchestrator (both corrections upheld). -->

status: OPEN
severity: medium
anchor: .bondhuta/episodes/003/knowledge.md
claim: Depth decisions for পর্ব ৩ are set. Budget is 3/3 with no spare slot:
  interference, নড়া ≠ মোছা, η. Input scale is deliberately structured as a rung of the
  η ladder (a second reading of `ΔW = η · Error · X`), not a fourth concept — that is
  the only way OL-02's partial payment fits under the ceiling.
  **Load-bearing (5, the full allowance):** (1) interference/mechanism —
  `Δscore_A = η · Error_B · (A·B)` derived in three lines from পর্ব ২'s own rule;
  (2) interference/implementation — the spine 2.0525 → 0.3125 via 1.7400, together
  with the integrity clause that কাবুল and দাবুল had Error = 0 so বাবুল is the only
  contributor between those two printed numbers; (3) নড়া≠মোছা/mechanism — an update
  always helps its own author (`B·B > 0`) AND everyone reappears next epoch, so damage
  is deferred not erased; (4) নড়া≠মোছা/দাঁড়াও+patience — কাবুল 1.7675 → −0.4425, a
  correct answer genuinely broken by বাবুল, plus mistakes-per-epoch 2·2·1·2·1·0 and
  আবুলের Epoch-4 relapse; (5) η/misconception — smaller η does not protect old
  learning, killed by the reader-verifiable sign argument (halve every weight, halve
  every sum, no sign changes, no decision changes).
  **A — convergence depth:** rung = mechanism (a)+(b) + দাঁড়াও + the non-smooth
  failure-mode + a one-sentence why-it-exists; the √n-vs-n race is deferred to পর্ব ৫.
  Below this rung the episode only re-shows পর্ব ২'s settling, which is recap (F12) and
  reassurance (F01/E-001); above it, step one of the race presupposes that a workable W
  exists — which IS linear separability, `pending` and forbidden — so the race would
  read as a proof while being an assumption in disguise, would need a norm the reader
  has no handle on, and would cost ~100 lines against a 560 ceiling.
  **B — η stays**, at four rungs: the reveal (it was always there, at 1), the
  tautological mechanism (η scales every component of ΔW and the size of interference,
  never its direction), one hand-worked η = 0.5 update on আবুলের Epoch-1 step
  (W → [−2.50, 2.30, 1.475, 3.10], sum 0.90125, cross-checkable as −0.25 + 0.5×2.3025),
  and the misconception. η is not a second topic because it already sits inside the
  primary formula. But it is only shippable WITH the misconception rung: the reader
  self-generates the folklore the instant η's scaling role lands. If compression ever
  proposes cutting the η misconception while keeping η, cut η entirely instead.
  η's why-it-exists, tradeoff and the two-run comparison table all defer to পর্ব ১০.
  **C — inner product:** keep the operation, the structural claim (no pair is zero) and
  the x₀ = 1 reason; cut the similarity interpretation. The reader does need the name
  `dot product` in Latin script, but it is free only if anchored as "সেই `WᵀX`-ই, শুধু
  W-এর জায়গায় আরেকজনের X" in the sentence that introduces it — unanchored it becomes a
  fourth concept and the budget breaks. 1.7400 alone cannot carry it: without the
  structural claim the reader concludes আবুল and বাবুল happened to clash and gains no
  prediction. It is also the payoff of পর্ব ২'s throwaway "x₀ = 1 … শুধু দেখতে সুন্দর হয়".
  **D — catastrophic forgetting: one line, confirmed, and it may not be zero.** ভতু
  herself said in পর্ব ২ that researchers still worry about this; an episode that ends
  "চিন্তা নেই" without saying why anyone worries makes her own line retroactively
  oversold. The line must carry the distinguishing fact (in the dangerous version the
  old data is gone when the new thing is learned; here all four return every epoch,
  which is exactly why ours resolves) or it is name-dropping. It must NOT be phrased as
  "পরে দেখবো" — no episode owns the mechanism, so a promise there is unpayable.
  **E — the ÷100 asymmetry is in, as conditional-load-bearing.** research §7 bans
  presenting ÷100 and η as the same lever, and `ΔW = η · Error · X` puts both in one
  product, so the moment they share a sentence the asymmetry line is mandatory. It is
  also nearly free: by then x₀ = 1 has already been spotlighted twice, so it costs a
  clause, not a concept — and it upgrades the reader's prediction from "numbers get
  big" to "the bias can never keep up", which is the actual reason scaling matters.
  **Length:** the ladder fits at ≈ 560, the ceiling, with no slack — only because the
  √n race, the two-run η table and the tug-of-war bounding caption are all out. Three
  pre-authorised compressions are listed in knowledge.md in cut order.
ask: Four items need your ruling or correction.
  (1) **E-004's "74%" does not reconcile.** 1.7400 / 2.3025 = 75.6% of আবুলের gain, or
      84.8% of his standing at that moment. Neither is 74. Recommend the episode use no
      percentage at all — "2.0525 → 0.3125, a drop of 1.7400" is stronger and
      unambiguous. Please confirm so @fact-checker and @episode-writer do not inherit it.
  (2) **research.md §6 misattributes কাবুলের flip.** It says কাবুল "becomes wrong in
      epoch 2 purely from বাবুলের epoch-1 update". কাবুলের Epoch-1 sum (1.7675) was
      already computed with post-বাবুল-epoch-1 weights; the break is বাবুলের **Epoch-2**
      update: 1.7675 − 2.2100 = −0.4425, exactly পর্ব ২'s printed −0.44. I have used the
      corrected attribution as load-bearing #4 and it is the episode's দাঁড়াও.
  (3) **RULING-2 sends OL-02 to পর্ব ৫, but পর্ব ৫'s roadmap block contains no scale
      content** (it is XOR / separability / the perceptron name). Either পর্ব ৫ must
      absorb normalisation or the re-commit needs a different destination. Your call —
      I am not overriding a ruling, but ভতু is about to say a number out loud and a
      deferral without a real destination is an omission.
  (4) **Advisory, planner's lane:** the figure should plot আবুলের score
      (−0.25 → 2.0525 → 0.3125, the 1.7400 drop as one long arrow) rather than the
      tug-of-war on a raw weight. A plot needs no bounding; an analogy does, and §7's
      bounding caption plus the F-03 risk cost ~15 lines the budget does not have.
because: (1) and (2) are numbers that would otherwise reach the page and be believed —
  E-003's own reasoning about an uncorrected Bangla technical blog applies to them
  exactly. (3) is an open loop the reader will be told is owed to a specific episode.
  (4) removes a failure mode rather than managing one.
---

### [E-010] @knowledge-architect → @episode-planner
<!-- renumbered from E-007 by @orchestrator: concurrent-append collision with the
     orchestrator's own E-007. Content untouched. Next free id is E-011. -->

status: ANSWERED
severity: high
anchor: .bondhuta/episodes/003/knowledge.md — "Prerequisite check"
claim: One prerequisite risk dominates all others in this episode. The convergence
  argument LEANS ON the existence of a W that satisfies all four students at once.
  That premise is linear separability. It is `pending` in state/concepts.md and is
  forbidden this episode by E-002. Using it silently is F06.
ask: The blueprint must contain an explicit beat in which ভতু acknowledges the
  condition as unstated and unnamed — "সেই সাজানো W একটা আছে, এটা আজ আমরা ধরে নিলাম,
  প্রমাণ করিনি; শর্তটার একটা নাম আছে, আর এমন ডেটাও আছে যেখানে neuron কোনোদিন থামে না" —
  naming neither the condition nor the counterexample. That acknowledgement is what
  converts a use into a foreshadow. Also: every convergence statement must be scoped
  ("আমাদের চারজনের ডেটায়"), never stated as a bare law (§7).
  Separately: state/concepts.md labels the পর্ব ২ update rule row "perceptron update
  rule". That label is internal only — the word is banned on the page until পর্ব ৫.
because: without the acknowledgement the episode quietly spends পর্ব ৫'s reveal and
  tells the reader that convergence is automatic — the single most common wrong belief
  a first perceptron tutorial leaves behind, and the one this series exists to avoid.
---

### [E-010-R1] @episode-planner → @knowledge-architect
status: ANSWERED
re: E-010
action: applied
what: The acknowledgement is a named, mandatory beat in the blueprint, not a clause the
  writer may drop. Section 9 (LIMIT, 45 lines) ends with ভতু saying, after the
  2·2·1·2·1·0 evidence: "আমাদের চারজনের ডেটায় থেমেছিল, কারণ চারজনকেই একসাথে খুশি করে
  এমন একটা W সত্যিই আছে। ওটা আজ ধরে নিলাম, প্রমাণ করিনি। শর্তটার একটা নাম আছে, আর এমন
  ডেটাও আছে যেখানে neuron কোনোদিন থামে না." Neither name is given, and the blueprint's
  `foreshadow` field marks both as পর্ব ৫'s property.
  Reinforced in three further places so it cannot rot in the draft: (a) the
  forbidden-vocabulary block extends the ban to the Bangla near-synonyms as well
  ("দাগ", "রেখা", "সীমারেখা"), since the natural next Bangla word is as damaging as the
  English one; (b) "F06 guard" is written as a standalone hard constraint stating that
  without §9's acknowledgement the convergence argument stands silently on a `pending`
  concept; (c) every convergence sentence in the blueprint is scoped to "আমাদের চারজনের
  ডেটায়", and banned inference #8 is listed with its neutralising location.
  On the `state/concepts.md` row label: noted and honoured — the blueprint states
  explicitly that the "perceptron" in that row label is internal and may not reach the
  page until পর্ব ৫. The ending hook uses the word "সীমানা" once, inside মোটুর question
  only, as the thing he cannot yet name — never as an answer, never as a noun ভতু
  supplies.
---

### [E-011] @episode-planner → @knowledge-architect
status: OPEN
severity: high
anchor: .bondhuta/episodes/003/blueprint.md
claim: The blueprint for পর্ব ৩ is complete and ready for L2 review. Every field required
  by state-schema.md is present: title, component, file, route, sidebar-id,
  sidebar-title (২৪ chars), central-question, opening-hook, beats, concepts,
  worked-example, analogy, analogy-breaks-at, misconception, dialogue-plan, figure,
  callbacks, foreshadow, ending-hook, length-band. Concept count is 3/3 — no fourth
  concept, no split proposed. E-006 and E-007 (@orchestrator) are implemented as
  written and not reopened; E-004's worked example is the spine; E-004's "74%" is
  dropped per E-006(a) and no percentage appears anywhere.
  **The ten beats, one line each (full text in the blueprint):**
  1. HOOK — `intro-text` brings মোটুর পর্ব ২ question back in one sentence, then puts
     the reader's own two printed numbers side by side: আবুলের sum was `2.05`, then it
     was `0.31` — today's episode is the gap.
  2. QUESTION — মোটু proposes the wrong yardstick ("w₀ went −3.0 → −2.0 → −3.0, so
     nothing was lost"), ভতু shows the other three weights did not come back, and fixes
     the only honest quantity: আবুলের own `sum`.
  3. INTUITION — আবুলের whole fate is one number, and 0 is the line that decides;
     "নষ্ট" = that number sliding back toward 0, "মুছে যাওয়া" = crossing it. The whole
     episode lives in that distinction.
  4. MECHANISM — ভতু substitutes পর্ব ২'s own update rule inside আবুলের sum and gets
     `Δsum_A = Error_B × (X_A · X_B)` in three lines (η deliberately withheld until §11).
  5. MECHANISM/deeper — `dot product` named in the same sentence that anchors it to
     `WᵀX`; the 16-cell pair table; every cell ≥ 1 because x₀ = 1 — পর্ব ২'s "শুধু দেখতে
     সুন্দর হয়" turns out to be the reason nobody can be independent.
  6. WORKED EXAMPLE — −0.25 → 2.0525 (+2.3025) → 0.3125 (−1.7400), with the integrity
     clause (কাবুল/দাবুল Error = 0 in Epoch 1, আবুল Error = 0 in Epoch 2) making the
     subtraction exact rather than approximate.
  7. দাঁড়াও — "আবুল বেঁচে গেছে বলে ভাবছিস নড়া মানে বড়জোর একটু কমে যাওয়া? দাঁড়া — কাবুলের
     দিকে তাকা": 1.7675 ✅ → −0.4425 ❌, caused by বাবুলের **Epoch-2** update
     (1.7675 − 2.2100), কাবুল making no mistake of his own.
  8. DEEPER — (a) a correction never fails its own author, `X_B · X_B` is never zero, so
     কাবুল rises again in that same Epoch 2 (0.20, 0.42, 2.85); (b) everyone returns next
     epoch, so damage is deferred, not erased — and মোটু coins "নড়ে, কিন্তু মোছে না"
     himself.
  9. LIMIT — 2·2·1·2·1·0, Epoch 4 worse than Epoch 3, আবুলের −0.74 relapse, বাবুলের four
     straight epochs; then the unstated, unnamed condition (see E-010-R1).
  10. LIMIT/clause — catastrophic forgetting named once with its distinguishing fact
     (old examples are gone there; all four return here), then "এটা আজকের বিষয় নয়" —
     never "পরে দেখবো".
  11. DEEPER-2 — η revealed as having always been 1, both formulas gain their η, and the
     η = 0.5 hand-worked update lands on 0.90125 with the reader's own cross-check
     `−0.25 + 0.5 × 2.3025`.
  12. LIMIT-2 — মোটু derives the folklore out loud ("η ছোট করলেই তো আবুলের কম ক্ষতি
     হবে!") and is rescued by the sign argument, with the scope clause and the honest
     positive (η protects our initial guess, not আবুলের শেখা).
  13. CONSOLIDATE — the second reading of `ΔW = η · Error × X`, the mandatory x₀-exempt
     asymmetry pulled in by মোটুর "÷100 কি η-রই আরেক রূপ?", ভতুর explicit OL-02
     re-commit, then মোটু listing in his own words what he can now do.
  14. NEXT QUESTION — মোটু: "একটা W 'কাজ করে' মানে কী? যে চারটা সংখ্যায় neuron থেমেছিল,
     ওরা কাগজে কী আঁকছে?" → `highlight-text`, পর্ব ৪-এর দরজা.
  **Total costed line count: 558**, inside the 420–560 band. Declared length-band
  480–560. Your costed table is the skeleton, with exactly two changes: HOOK 30 → 25 and
  the figure 40 → 35 (the SVG spec in the blueprint is ~35 lines), and those 10 lines
  fund a CONSOLIDATE beat your table had no row for. The three pre-authorised
  compressions stay in your cut order.
ask: L2 review — ACCEPT, or name the failing field. Four planner calls I want you to
  check specifically, since each touches your ladder:
  (1) **η withheld until §11.** §4 derives `Δsum_A = Error_B × (X_A · X_B)` in exactly
      the form পর্ব ২ wrote its rule, and §11 puts η into both formulas and prints
      load-bearing #1 in full. Load-bearing #1 is therefore paid at §11, not §4. If you
      want the full form at §4 instead, say so — but then the η reveal is pre-spent.
  (2) **`sum` as the short name.** পর্ব ২'s own epoch code-boxes print `আবুল : sum = 0.31`,
      so `sum_A` is a callback and not a rename of `new_weighted_sum_term` (voice.md
      forbids silently introducing `z` or `net`). The introducing sentence still ties it
      to `WᵀX`. Confirm you read this the same way.
  (3) **Banned inference #1 turned into a beat instead of a silence.** In §8 ভতু points
      at the table herself — কাবুল-আবুল 2.4275 is larger than আবুল-আবুল 2.3025 — so the
      claim is "নিজের update নিজেকে কখনো ঠকায় না", never "সবচেয়ে বেশি সাহায্য করে". It
      costs one clause on a table already on screen. Confirm it does not breach 3/3.
  (4) **No analogy at all, declared.** The figure is a plot (E-007), "নড়ে কিন্তু মোছে না"
      is a coinage about a number the reader watched move, and the blueprint
      pre-rejects রশি-টানাটানি/কম্বল-টানাটানি by name so the writer cannot import one.
      পর্ব ১'s brain analogy stays untouched (RULING-4). If you consider the coinage an
      analogy needing an F09 bound, say so now — I have costed one honest bounding
      clause into §7 already ("মোছে না — কিন্তু 'ক্ষতি হয় না' নয়") and it can carry the
      weight without new lines.
because: The writer may not start until this file is accepted, and every one of the four
  calls above is the kind of thing that is cheap to change now and expensive to change
  after a 558-line draft exists.
---

### [E-012] @knowledge-architect → @episode-planner
status: OPEN
severity: high
re: E-011 (L2 review)
anchor: blueprint.md — "figure", figcaption; and §2 INTUITION vs §8 DEEPER
claim: Two related problems, one definitional and one factual, both around the
  "মুছে যাওয়া = 0 পেরিয়ে যাওয়া" criterion introduced in §2.
  (a) The figcaption reads "আবুলের sum একবারও 0-এর বাঁ পাশে ফিরে যায়নি". That is
      FALSE about the run. আবুলের sum goes −0.25 → 2.0525 → 0.3125 → 1.00 → −0.74
      → −0.18 → 2.13. He crosses back left of 0 twice, in Epochs 4 and 5 — and
      §9 prints the −0.74 itself, three sections later. The caption pre-emptively
      falsifies load-bearing #4.
  (b) By §2's own definition, কাবুলের case IS erasure — he crossed 0. The episode's
      answer sentence is "নড়ে, কিন্তু মোছে না". Those contradict, and §7's limit
      clause ("ক্ষতি হয় না নয়") concedes damage without resolving the contradiction.
ask: (a) Scope the caption to the three points it draws — it is a claim about the
  figure, not about the run. (b) Complete the definition in §8: erasure is not
  "crossed 0 once", it is "crossed 0 and stayed there". কাবুল crossed and came back
  (0.20 → 0.42 → 2.85), and that material is already in §8. One clause. The coinage
  then means precisely: কেউ 0 পেরিয়ে গেলেও ওপারে থেকে যায় না.
  Note this is not a loss — with an honestly scoped caption, §6's figure becomes the
  SETUP for §7: it shows a survivor, then §7 immediately produces someone who did not.
because: (a) is the single item in this blueprint I would most regret shipping — a
  figcaption is the most-read text on any page, and this one contradicts a
  load-bearing beat. (b) leaves a live self-contradiction between the episode's own
  definition and its own conclusion, and this series' reader is exactly the reader
  who finds those.
---

### [E-013] @knowledge-architect → @episode-planner
status: OPEN
severity: high
re: E-011 (L2 review)
anchor: blueprint.md — beats/LIMIT (§9), and "foreshadow" bullet 1
claim: The F06 guard is present but its wording is still an assertion with a
  disclaimer bolted on: "চারজনকেই একসাথে খুশি করে এমন একটা W সত্যিই আছে; ওটা আজ
  ধরে নিলাম, প্রমাণ করিনি।" The intensifier সত্যিই states existence in the
  indicative, and the retraction arrives as a trailing concession. A reader takes
  the main clause and discards the concession — which is precisely how a `pending`,
  forbidden concept gets used silently.
ask: Two structural requirements on §9, not prose I am writing for you:
  (1) The assumption must be the grammatical MAIN clause and the existence must
      never appear in the indicative with an intensifier. Drop সত্যিই.
  (2) The acknowledgement must come BEFORE the convergence explanation in §9, not
      after it. A disclaimer trailing a conclusion reads as a hedge; a stated
      assumption preceding a conclusion reads as honest scoping — and only the
      second one is a foreshadow rather than a use.
  The "শর্তটার একটা নাম আছে / এমন ডেটাও আছে যেখানে neuron কোনোদিন থামে না" pair is
  correct as written and should not change.
because: this is the sharpest prerequisite risk in the episode (E-010). It is what
  converts leaning on linear separability into a foreshadow, and it is the difference
  between পর্ব ৫ having a reveal and পর্ব ৫ having a recap.
---

### [E-014] @knowledge-architect → @episode-planner @orchestrator
status: OPEN
severity: high
re: E-011 (L2 review)
anchor: blueprint.md — "Section order and line budget", total 558
claim: 558 is optimistic by roughly 30–40 lines. Three sections are under-costed
  against the jobs assigned to them, measured against পর্ব ২'s actual TSX.
  - §4 at 50 — under by ~20, the serious one. পর্ব ২'s 5-column, 4-row
    `data-table` (`NeuralNetworkLearning.tsx:539–581`) is 43 lines. A 16-cell
    pairwise table is the same shape and will cost the same. That leaves ~7 lines
    for the naming sentence, the `WᵀX` anchoring, dialogue #5, dialogue #6 and the
    `X_A · X_B ≥ 1` derivation. §4 needs ~70 as specified.
  - §2 at 25 — under by ~7. It now carries four jobs, not three: মোটুর wrong
    criterion (dialogue #2, ~7), ভতুর correction quoting three weights (#3, ~10),
    fixing আবুলের sum as the measure, AND the new নষ্ট/মুছে distinction. The fourth
    job arrived with the knowledge.md cost unchanged.
  - §13 at 48 — under by ~5. Five jobs including মোটুর closing consolidation,
    which in পর্ব ২ was a 15-line `concept-box` on its own (`:796–810`), plus the
    raw-0–100 prediction display.
  Realistic total ≈ 590–600 against a 560 ceiling. The stated slack of two lines is
  negative slack of ~30–40.
ask: Take the reserve cut NOW, in the blueprint, rather than at L4. Specifically:
  reduce the 16-cell table to আবুলের row only (4 cells) plus one sentence giving
  the range — "বাকি ঘরগুলোও একই রকম; সবচেয়ে ছোটটা 1.1925". That is my
  pre-authorised cut #2 and it costs no rung: knowledge.md permits the derivation to
  go while the CLAIM ("চারজনের কোনো জোড়াই শূন্য নয়") stays, and the claim is what
  carries the prediction. Saves ~30. Then re-cost §4 at ~45 with the room it needs
  for the derivation and the two dialogue turns, §2 at 32, §13 at 53.
  Explicitly: this is NOT a split signal. The content fits; a display element does
  not. No rung is lost and no concept moves out.
because: if the writer starts against a 558 plan that is really ~595, the writer
  produces ~595 lines and the compression editor arrives at L4 with the emergency
  reserve already consumed — which is exactly the situation in which load-bearing
  material gets eaten, because there is nothing else left to take.
---

### [E-015] @knowledge-architect → @episode-planner
status: OPEN
severity: high
re: E-011 (L2 review)
anchor: blueprint.md — "Sequencing rule", §11 DEEPER-২
claim: The split of the formula across §3 and §11 is CORRECT and I endorse it — η in
  §3 would kill the reveal, and the η = 1 form is true, not incomplete. But
  load-bearing #1 is satisfied by the full form being printed once in §11 and never
  exercised across two students. §11's hand-worked step and its cross-check
  (−0.25 + 0.5 × 2.3025 = 0.90125) both use `X_আবুল · X_আবুল` — the formula applied
  to a student's own update. The reader never sees the η-form applied to the
  cross-student quantity, which is the only quantity §12's misconception is about.
  So §12's kill argument stands on a formula the reader watched once and never used.
ask: Add ONE line to §11, after the η = 0.5 self-step: at η = 0.5, বাবুলের update
  would take 0.5 × 1.7400 = 0.8700 from আবুল instead of 1.7400. One multiplication,
  ~3 lines, and it puts the exact quantity §12 is about on the page in η-form.
  It also makes মোটুর wrong inference in #17 MORE seductive — he will have just
  watched 1.7400 become 0.8700 — which makes ভতুর correction land harder rather than
  softer. This is the cheapest three lines in the episode.
because: a load-bearing rung that is printed but never used is a rung the reader has
  seen, not one they can apply. My own test: after §11 as written, can the reader
  predict what η = 0.5 does to the interference between two students? Not from a
  worked number, no.
---

### [E-016] @knowledge-architect → @episode-planner
status: OPEN
severity: medium
re: E-011 (L2 review)
anchor: blueprint.md — "Banned inferences" row 1, placed in §8
claim: The defusal of banned inference #1 is correct in content and wrong in
  position. Showing that কাবুল·আবুল (2.4275) exceeds আবুল·আবুল (2.3025) inside §8 —
  the resolution beat — re-opens the wound at the exact moment the episode is closing
  it. The reader has just been shocked twice (§5 spine, §7 কাবুলের flip); §8 is the
  repair. "Someone else can move you more than you move yourself" invites an obvious
  follow-up ("then why does আবুল need his own correction at all?") that costs ~10
  more lines to answer and is not owed today.
ask: Cut the numeric comparison. My banned-inferences list asked for a WORDING rule,
  not a demonstration — and the blueprint's own dialogue #10 already meets it:
  "নিজের update নিজেকে কখনো ঠকায় না" avoids the superlative entirely and is
  exactly true (X_B · X_B is always positive). The trap is disarmed by never making
  the claim, at zero cost. Recovers ~7 lines toward E-014.
because: over-delivering on a defusal in the one section where over-delivering costs
  is a real trade against the episode's most fragile beat. The 2.4275 cell stays in
  the table where a curious reader can find it; it does not need a spotlight.
---

### [E-017] @knowledge-architect → @episode-planner
status: OPEN
severity: low
re: E-011 (L2 review)
anchor: blueprint.md — "Notation"
claim: The A/B/C/D notation is free and forced (the language law bars Bangla letters
  inside expressions, so the subscripts had to be Latin), and the mnemonic
  "আ, বা, কা, দা" is a good touch. But no section is assigned the introduction, and
  the notation first appears in §3, where it is load-bearing to the derivation.
ask: Pin ভতুর one-line introduction to the opening of §3, before the derivation
  begins — not §4, and not left to the writer's discretion.
because: a subscript the reader has to look up is working-memory cost even when it
  is not a concept, and §3 is where the reader can least afford it.
---

### [E-018] @orchestrator → @episode-planner @knowledge-architect
status: OPEN
severity: high
re: E-012 (a)
anchor: blueprint.md — figure/figcaption
claim: I independently re-simulated আবুলের sum at the moment he is evaluated in each
  epoch of the η = 1 run. @knowledge-architect is RIGHT and the proposed figcaption
  is false:
    Epoch 1: −0.2500 বাঁয়ে    Epoch 2: 0.3125 ডানে    Epoch 3: 1.0000 ডানে
    Epoch 4: −0.7400 বাঁয়ে    Epoch 5: −0.1775 বাঁয়ে   Epoch 6: 2.1250 ডানে
  আবুল crosses back left of 0 in BOTH Epoch 4 and Epoch 5 — not once, twice. The
  caption would have sat under the figure asserting the opposite of what §9 prints
  three sections later.
ask: E-012 through E-017 are all UPHELD and are binding on @episode-planner.
  E-014's reserve cut (16-cell table → আবুলের row plus the range sentence) is
  APPROVED and is to be taken now, in the blueprint, not deferred to L4.
  Numbering note: @knowledge-architect submitted these six as E-011…E-016 while
  @episode-planner concurrently claimed E-011 for its L2 request. I renumbered the
  architect's six to E-012…E-017; content is untouched. Next free id is E-019.
because: this is exactly what L2 exists for — the blueprint is the highest-leverage
  artifact in the system, and this was caught before a word of prose was written. A
  figcaption is the most-read text on a page, and this one would have been
  checkably false against the same episode's own printed numbers, by the precise
  reader this series is written for.
---

### [E-019] @knowledge-architect → @orchestrator
status: ANSWERED
severity: low
re: E-012 … E-018 (L2 iteration 2)
position: ACCEPT
what: Re-read the revised blueprint in full and verified each change rather than
  trusting the index.
  - E-012(a) — caption now claims only what the figure draws; "এই এক ধাপে" scopes it,
    "কোনোমতে" turns it into the §7 door. The six evaluated sums added under the figure
    spec (−0.2500, 0.3125, 1.0000, −0.7400, −0.1775, 2.1250) all check out against
    পর্ব ২. Banned inference #9 closes it.
  - E-012(b) — RESOLVED, not relocated. Tested the refined predicate against all four
    students' full trajectories: আবুল crosses at Epochs 4–5 and returns; কাবুল crosses
    at Epoch 2 and returns; বাবুল crosses into correctness at Epoch 5; দাবুল never
    crosses. Nobody crosses and stays, so "মোছা = 0 পেরিয়ে ওপারেই থেকে যাওয়া" is
    consistent with every number the episode prints and the category is honestly empty.
    Bonus for the writer: §8's "stayed there" and §10's "the old examples are no longer
    available" are the same idea, so the catastrophic-forgetting line now has structural
    support instead of being a bolted-on aside.
  - E-013 — the F06 guard now reads as a foreshadow for a STRUCTURAL reason: the main
    verb is ধরে নিচ্ছি and the existence claim sits in complement position as the
    content of the assumption, never as an independent proposition. The planner went
    further than asked — the downstream sentence opens "ওটা ধরে নিলে", making the
    conclusion syntactically conditional. Satisfied.
  - E-014 — column re-checked, sums to 557, and the sections are now honestly costed.
    The unasked-for move that actually made §13 fit was relocating মোটুর consolidation
    from `concept-box` to `dialog-box`, which also lowers F12 risk: a boxed bullet list
    reads as a summary, speech does not.
  - E-015 — 0.5 × 1.7400 = 0.8700 verified, in §11 and dialogue #16, with §12 firing
    immediately after. LB#1 is now printed AND exercised across two students.
  - E-016 — comparison gone, claim is wording-only. Note for @depth-reviewer so it is
    not re-raised: §4's আবুল row still prints 2.4275 beside 2.3025, and that is inert —
    the claim it could contradict does not arrive until §8 and is non-superlative when
    it does.
  - E-017 — pinned to §3's opening, with "§4-এ নয়, writer-এর বিবেচনায় নয়" in Hard
    constraints.
  Rulings requested by @orchestrator: (1) spending pre-authorised compression #1
  (the 2 → −28 hypothetical) was the right trade and the only good option — cut #3 is
  what makes the x₀ = 1 payoff land, and shaving 8 lines across sections thins
  everything instead of removing one thing cleanly. #1 was correctly ranked first by
  the series' own law: it is the one number a reader cannot check against পর্ব ২.
  (2) The scale rung still carries its prediction — what was cut is a magnitude, not a
  mechanism; the surviving sentence supplies the reason ("bias-এর ধাপ থেকে যেত ±η-তে")
  and it is checkable against ΔW = η · Error × X on the same screen. What is lost is
  felt scale, and that belongs to পর্ব ৫, which owns OL-02 in full.
  All five load-bearing rungs are staged as beats, the budget is 3/3 with nothing
  crossing, every banned inference is designed against rather than avoided, and 557 is
  a real number with compression #3 (~12 lines) intact as L4's reserve.
  **The writer may start.**
---

### [E-020] @orchestrator → @episode-writer
status: OPEN
severity: high
anchor: blueprint.md — figure spec, the zero-mark label
claim: The blueprint contradicts itself in exactly one string, caught by
  @knowledge-architect on its way to ACCEPT. Hard constraints ban the Bangla synonyms
  "দাগ", "রেখা", "সীমারেখা" — but the figure spec labels the zero mark
  `0 — এই দাগটাই সিদ্ধান্ত নেয়`. On a number line "দাগ" as an axis tick is innocuous;
  "এই দাগটাই সিদ্ধান্ত নেয়" ASSERTS that the mark is what decides, which is the
  brief's must-not-teach-yet almost verbatim ("weight গুলো একটা দাগ আঁকে") sitting in a
  figure label — high-salience text that gets copied from blueprints unchanged.
ask: Name the number, not the mark. Use `0` alone, or `0 — এখানেই উত্তর বদলায়`.
  Do NOT use দাগ / রেখা / সীমারেখা anywhere in the figure or the prose.
  Contrast, and this is deliberate: **"সীমানা" in the ending hook stays.** It appears
  once, inside মোটুর question, about a thing he explicitly cannot name, with the answer
  banned. A question that gestures is a foreshadow; a label that asserts is a use.
  @bangla-voice-guardian and @continuity-reviewer: this is ruled, do not re-litigate it
  in opposite directions at L3.
because: পর্ব ৪'s entire reveal is what the four numbers draw. A figure label that
  hands the reader "the mark decides" spends that reveal one episode early, in the text
  most likely to be read and remembered.
---

### [E-021] @orchestrator → @all
status: ANSWERED
severity: low
anchor: loops.md L2
claim: L2 closed. Iteration 1: 0 blocking, 4 high, 1 medium, 1 low objections
  (E-012…E-017), all upheld by @orchestrator at E-018 and all applied by
  @episode-planner. Iteration 2: ACCEPT at E-019. Blueprint total 557 lines against a
  560 ceiling, with ~12 lines of compression reserve deliberately preserved for L4.
ask: Stage 5 begins. @episode-writer is the only agent that may author prose, and it
  stays alive across the whole of L3 — revisions are relayed into it, never re-spawned.
because: L2 is the cheapest place to buy quality — two planning artifacts and no
  prose — and it did its job here: it killed a false figcaption, a silent use of a
  forbidden concept, a 40-line budget overrun, and an unexercised load-bearing formula
  before a single line was written.
---
