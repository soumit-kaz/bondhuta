# Depth review — পর্ব ৩: পুরনো শেখা কি মুছে যায়?

owner: `@depth-reviewer`
draft reviewed: `src/pages/neural-network/NeuralNetworkInterference.tsx` (560 lines, read in full)
judged against: `knowledge.md` (the three depth ladders and the five load-bearing rungs),
`blueprint.md`, `research.md` §3 and §7, `brief.md` (must-teach / must-not-teach-yet),
`roundtable.md` E-001…E-021, and `NeuralNetworkLearning.tsx` (all 843 lines) as the
depth baseline the reader just came from.

**Do not write to roundtable.md** — findings below are in roundtable entry format for the
orchestrator to consolidate.

---

## Verdict in one paragraph

This is a genuinely explanatory episode, not a descriptive one. Every formula on the page
is derived from something the reader already holds and then exercised in numbers the reader
can check against a page they have read; the দাঁড়াও does real damage to the reader's model
and, unusually, to the episode's own stated definition; the limit section is honest before
it is reassuring. It is nowhere near the "names everything, explains nothing" failure this
review exists to catch. What holds it below threshold is one specific thing: **§9's answer
to "then why does it stop?" is half-delivered.** The brief's own must-teach asks for "the
shared signal accumulates, the contradictory nudges cancel"; the draft ships the first half
as an assertion and replaces the second half with a dismissal ("মাঝপথে কোন weight কোন দিকে
দুলে গেল, তাতে কিছু যায় আসে না", `:363`). The reader has just spent 300 lines learning that
corrections fight each other, and is then told the fighting does not matter, without being
told what survives it. Three smaller missing links compound it. All four asks are single
clauses using material already printed on the page; none asks for length and none asks for
পর্ব ৪/৫/১০ content.

---

## Per-concept axis scores

### 1. `interference` — PRIMARY

| axis | score | anchor and justification |
|---|---|---|
| **What** | 10 | `:108` prints `Δsum_A = Error_B × (X_A · X_B)`; `:111` reads the formula back in words ("ডান পাশে মাত্র দুটো জিনিস"); `:124–125` states the non-obvious consequence — আবুলের own right/wrongness plays no part in how much he loses. A beginner could restate this. |
| **How** | 9 | Genuinely derived, not asserted. `:78–88` puts the two পর্ব ২ facts on the table first (`sum_A = W · X_A`, `W_new = W + Error_B × X_B`); `:92–97` substitutes one into the other in four visible lines; `:99–103` justifies the distributive step in a clause that tells the reader how to check it ("পর্ব ২-এর `WᵀX`-টা যেভাবে `w₀·x₀ + …` করে খুলেছিলাম, ওভাবে খুললেই ঘরে ঘরে দেখা যায়") rather than walking past it. The dot product itself is opened cell-by-cell twice, at `:161–163` and `:274–276`. Docked one point only for D-05. |
| **Why** | 9 | `:49–51` — একটা update গোটা `X` দিয়ে চারটে ঘর একসাথে নাড়ায়, and x₀ = 1 is in everyone's X, so the bias moves too. `:167–177` completes it: interference is not a design choice, it is structurally unavoidable for these four, and the reason is পর্ব ২'s own throwaway line. The reader sees the pain and sees that it is the price of one shared W. |
| **Cost** | 7 | The cost is the whole episode and is never softened — `:222` "ঠিক 1.7400 কমলো", `:262–264` a correct student broken. The "give each student their own weights?" tradeoff was cut by knowledge.md (correctly — it needs generalisation, which the series never sets up), so 7 is the ceiling this rung was allowed to reach. |
| **Breaks** | 8 | Where interference is zero is delivered as the integrity clause (`:219–221`: কাবুল/দাবুল Error = 0 so they did not touch the weights) rather than as a separate section — that is the right economy. `:167–169` also tells the reader the *conditions* under which the ≥ 1 floor holds (x₀ = 1 and non-negative fractional features), so they know where the structural claim stops rather than over-generalising it. |

**Mean 8.6.** This concept is fully paid.

### 2. `নড়া ≠ মোছা` — PRIMARY

| axis | score | anchor and justification |
|---|---|---|
| **What** | 9 | `:56–65` states the criterion before it is needed; `:294–295` breaks it in ভতুর own mouth; `:321–323` repairs it ("মোছা মানে 0 পেরিয়ে **ওপারেই থেকে যাওয়া**"). The three-step definition arc is the strongest structural feature of the episode and it does the opposite of decoration — the reader's own criterion is what bites them. |
| **How** | 7 | Both halves present: (a) `:304–307` `X_C · X_C` cannot be zero or negative, so "নিজের update নিজেকে কখনো ঠকায় না" — correctly non-superlative, banned inference #1 disarmed by wording; (b) `:319–321` everyone returns because an epoch is a full pass, so damage is স্থগিত. Docked for D-02 (half (a) is never exercised on the number it was introduced to rescue) and D-04 (the leap from "deferred" to "not erased" quietly borrows §9's assumption). |
| **Why** | 6 | `:362–364` is the entire why-it-settles: "প্রতিটা সংশোধন ওই W-এর দিকেই এক ধাপ — কে ভুল করলো, মাঝপথে কোন weight কোন দিকে দুলে গেল, তাতে কিছু যায় আসে না।" The first clause is the assertion knowledge.md authorised; the second clause replaces the missing half of the explanation with a dismissal. See D-01 — this is the episode's load-bearing depth gap. |
| **Cost** | 7 | Honestly costed: `:350–353` prints 2·2·1·2·1·0, names Epoch 4 as worse than Epoch 3, prints আবুলের −0.74 relapse and বাবুলের four straight epochs; `:364–365` refuses the smooth story outright ("ঝাঁকুনি খেতে খেতে থেমেছিল, মসৃণভাবে নয়"). research §7's patience clause is satisfied. Docked because "স্থগিত" is given no horizon — আবুল was in fact on the wrong side at two consecutive evaluations (−0.74 and −0.18), and only the first is printed. |
| **Breaks** | 8 | `:360–362` — the assumption is the grammatical main clause (`ধরে নিচ্ছি`), sits **before** the explanation, has no intensifier, and the conclusion opens `ওটা ধরে নিলে`, making it syntactically conditional. E-013 is satisfied structurally, not cosmetically; a reader cannot skim past it because the following sentence is grammatically dependent on it. `:372–375` adds the real boundary condition via catastrophic forgetting — old examples gone vs. all four returning — which is a genuine limit, not a name-drop. Docked only for D-04. |

**Mean 7.4.**

### 3. `learning rate η` — SECONDARY

| axis | score | anchor and justification |
|---|---|---|
| **What** | 9 | `:384–385` reveals rather than imports ("একটা গুণক নিঃশব্দে বসে ছিল, আর তার মান আমরা ধরে নিয়েছিলাম 1"), and `:394` discharges the obvious worry — η = 1 gives পর্ব ২'s rule back exactly, so nothing the reader computed was wrong. |
| **How** | 8 | `:395` gives the reason η propagates into the interference formula (it multiplies the whole `ΔW`), then `:399` prints load-bearing #1 in full. Exercised twice: on its author `:411–418` with the reader's own cross-check at `:424`, and across two students `:438` (`0.5 × 1.7400 = 0.8700`) — E-015 fully paid. `:512–515` adds that η multiplies all four cells including bias, which is what makes the ÷100 contrast land. |
| **Why** | 5 | η's real reason for existing is a binding deferral to পর্ব ১০ and I am not scoring against the ruling. What survives is `:481–484` — η never touches our made-up W₀, so a small η keeps *our guess* in charge longer. That is a real and honest why, but it arrives as the tail of a correction rather than as the reason the knob exists, so the reader ends holding "η is a size dial" plus one caveat. Acceptable for a secondary concept under an explicit deferral. |
| **Cost** | 6 | `:481–484` is the only cost named, and it is the right one. The folklore cost ("small η is just slower") is banned because it is false on this data, so this axis was structurally capped. Acceptable. |
| **Breaks** | 8 | The misconception is put in মোটুর mouth immediately after `0.8700` (`:445–450`), which is exactly the staging E-015 asked for, and killed with an argument the reader can verify in one line: sign → y → Error → which update fires (`:461–470`). The mandatory scope clause rides with it at `:473–476`. Docked for D-03 — the kill never answers মোটু on the number he is holding. |

**Mean 7.2.** Half of η is not shippable, per E-007-B; the shippable half is present and complete.

---

## The five load-bearing rungs — delivered or merely mentioned?

| # | rung | verdict | anchor |
|---|---|---|---|
| 1 | `Δsum_A` derived from পর্ব ২'s own rule in three visible steps | **DELIVERED, derived.** Both inputs stated first (`:81`, `:87`), four-line substitution (`:92–97`), distributivity justified in a clause with a verification recipe, not asserted (`:99–103`). η-form printed once (`:399`) and exercised across two students (`:438`). | `:78–111`, `:399`, `:438` |
| 2 | spine 2.0525 → 0.3125 with the integrity clause | **DELIVERED in full.** Both endpoints tied to পর্ব ২'s printed 2.05 and 0.31 (`:197`, `:211`); the middle number derived with the formula, not announced; the integrity clause is explicit about *why* the subtraction is exact — কাবুল/দাবুল Error = 0 in Epoch 1, আবুল Error = 0 in Epoch 2, "বিয়োগটা আন্দাজ নয়, হুবহু". No percentage anywhere (E-006a honoured). | `:181–225` |
| 3 | (a) an update always helps its author; (b) everyone returns | **BOTH PRESENT**, (a) under-exercised. (a) `:304–307` with its reason (`X_C · X_C` cannot be ≤ 0); (b) `:319–321` with its reason (an epoch is a full pass, কেউ বাদ যায় না). See D-02. | `:301–325` |
| 4 | দাঁড়াও + the non-smooth pattern | **DELIVERED, and it is the best beat in the episode.** কাবুল 1.7675 → −0.4425 attributed correctly to বাবুলের **Epoch-2** update (E-006b honoured, `:269–270`), the dot product recomputed openly (`:274–276`), and the number matched to পর্ব ২'s printed −0.44 (`:281`). The mistake pattern 2·2·1·2·1·0 with Epoch 4 worse than Epoch 3 is at `:350–353`. | `:257–297`, `:350–353` |
| 5 | the η misconception killed by the sign argument | **DELIVERED**, with the scope clause. See D-03 for the one missing link. | `:443–486` |

No rung is missing. That is the single most important thing in this review.

---

## The four predictions the episode owes

| prediction | earned? | where |
|---|---|---|
| (a) compute how much one student's update moves another's score from two feature vectors | **YES, fully.** Formula (`:108`, `:399`), the operation opened cell-by-cell twice (`:161–163`, `:274–276`), applied four times in real numbers (`:191`, `:203`, `:278`, `:438`). The reader could do a fifth pair unaided. | — |
| (b) a currently-correct student can go wrong later | **YES.** `:262–264` is the demonstration, and মোটু states the transferable form himself at `:529–530`. | — |
| (c) what η does and does not change | **MOSTLY.** Does: scales every component of ΔW including bias (`:512–515`), scales interference (`:399`, `:438`), keeps the initial guess in power longer (`:481–484`). Does not: change direction (`:405`), change any decision if everything is scaled together (`:468–470`). Weakened by D-03. | — |
| (d) why ÷100 was not cosmetic | **YES.** `:504–507` gives the mechanism (Error is bounded to −1/0/+1, so step size is entirely η and \|X\|), and `:512–517` upgrades it from "numbers get big" to "bias আর পাল্লাই দিতে পারতো না" — the actual reason scaling matters. The cut of the 2 → −28 hypothetical (ruled at E-019) costs felt magnitude, not mechanism; I am not re-raising it. | — |

**F11 — is the central question answered concretely?** Yes. "নষ্ট হয়?" → yes, by exactly 1.7400, computed and matched to a number the reader already read. "মুছে যায়?" → no, and the criterion for "মুছে যাওয়া" is defined, broken, and repaired rather than asserted. মোটু is answered with arithmetic, not reassurance. E-001 is discharged.

**F10 — formula with no worked example?** None. Every one of the six formulas printed (`:81`, `:87`, `:108`, `:390`, `:399`, `:501`) is exercised in real numbers within the same or the next section.

**Overload / budget.** 3 concepts against a budget of 3, with `dot product` anchored to পর্ব ২'s `WᵀX` in the sentence that introduces it (`:132–134`) so it stays a free name, and input scale framed as a second reading of `ΔW = η · Error · X` (`:498–507`) so it stays a rung. 560 lines against a 500–560 band — at the ceiling, not over. **No finding against depth on overload grounds.**

**Mechanism before name.** Honoured throughout: the operation is described before "dot product" is uttered (`:131–134`); the multiplier's role is shown before "learning rate" is uttered (`:384–385`). The §2 concept-box (`:56–65`) is a stipulative measurement criterion arriving *after* মোটুর wrong yardstick has been killed with পর্ব ২'s own weights (`:39–51`), so it is earned, not an inverted definition.

**Out-of-scope creep.** None found. No perceptron, no দাগ/রেখা/সীমারেখা (the figure label is `0 — এখানেই উত্তর বদলায়`, `:235` — E-020 applied), "সীমানা" appears exactly once inside মোটুর question about a thing he cannot name (`:543`), the condition is unnamed (`:361`), convergence is scoped to "আমাদের চারজনের ডেটায়" (`:362`), no percentages, no superlative on self-help, no order-independence claim, catastrophic forgetting is one line carrying its distinguishing fact and ends "এটা আজকের বিষয় নয়" rather than "পরে দেখবো" (`:375`).

---

## Findings

### [D-01] @depth-reviewer → @episode-writer
status: OPEN
severity: high
anchor: src/pages/neural-network/NeuralNetworkInterference.tsx:362–364
claim: §9 gestures where it could explain, and the material it needs is already printed
  in §2 of the same episode. The episode spends 300 lines establishing that corrections
  fight each other — 1.7400 taken back from আবুল, 2.2100 taken from কাবুল — and then
  answers "so why does it stop?" with one assertion ("প্রতিটা সংশোধন ওই W-এর দিকেই এক
  ধাপ") followed by a dismissal ("মাঝপথে কোন weight কোন দিকে দুলে গেল, তাতে কিছু যায়
  আসে না"). Telling the reader the fighting is irrelevant is not the same as telling
  them what survives the fighting. brief.md's must-teach asks for **"the shared signal
  accumulates, the contradictory nudges cancel"** and knowledge.md's `why-it-exists`
  rung marks the same clause `[include]` — "the part everyone agrees on builds up, the
  tugs they disagree on partly cancel and partly overshoot". Only the first half shipped.
ask: One clause, connecting §9 back to §2's own numbers — which are the missing half,
  already on the page. §2 prints w₀ going −3.0 → −2.0 → −3.0 (`:40–42`): a contradictory
  pair of tugs that **cancelled exactly**, while w₁, w₂, w₃ did not return. ভতু has
  already used that as evidence for a different point ("একটা weight দেখে ঘোষণা দেওয়া
  যায় না"). Reuse it here: যেখানে দুজন উল্টো দিকে টানে সেখানে টানাটানিটা অনেকটা কাটাকাটি
  হয়ে যায় (w₀ পুরো ঘুরে ফিরেই এসেছিল), আর যেখানে চারজনেই একই দিকে টানে সেটুকু প্রতিবার
  জমতে থাকে — সেই জমা অংশটাই দোলাটা পেরিয়ে যায়। No new number, no norm, no √n
  accounting, no forbidden vocabulary — a back-reference to line 40.
because: without it, মোটুর third takeaway at `:531` — "মাঝপথে ভুলের সংখ্যা বেড়ে গেলে
  আমি আর ভাববো না যে সব ভেঙে পড়ছে" — is earned only by induction from one anecdote
  ("পর্ব ২-এর Epoch 4-এও তাই হয়েছিল"), while his first two takeaways are earned by
  mechanism. knowledge.md names that third one as "the genuinely valuable, transferable
  prediction" of the whole episode. With the clause, the reader can predict *why* a
  wobbling run is not a broken run, and can carry it to a run they have never seen.

---

### [D-02] @depth-reviewer → @episode-writer
status: OPEN
severity: medium
anchor: src/pages/neural-network/NeuralNetworkInterference.tsx:304–313
claim: Load-bearing #3(a) — "নিজের update নিজেকে কখনো ঠকায় না" — is stated with its
  reason (`X_C · X_C` cannot be ≤ 0) but never exercised on a number, and the numbers
  offered as evidence do not isolate it. `:313` supports কাবুলের recovery with "পরের
  epoch গুলোতে তার sum — 0.20, 0.42, 2.85", which are next-epoch measurements produced
  by *everybody's* updates, not by কাবুলের own. Every other mechanism in this episode is
  exercised in numbers the reader can check; this one is not. Meanwhile the episode has
  already shown exactly this mechanism firing, 120 lines earlier, and never says so:
  আবুলের −0.25 → 2.0525 (`:191–193`) IS an update helping its own author, with
  `X_A · X_A = 2.3025` in the multiplier slot.
ask: One back-reference at `:304–307` — "এটা তুই একবার দেখেই ফেলেছিস: আবুলের −0.25 থেকে
  2.0525-এ ওঠাটা ঠিক এই জিনিস, ওখানে গুণফলটা ছিল `X_A · X_A` = 2.3025." No new number,
  no new arithmetic; it converts an asserted rule into one the reader has already
  verified with their own hand.
because: right now the reader has "a rule I was told" and "some numbers that went up
  afterwards" as two separate items. Linked, they have a rule they have watched work,
  and can predict the sign of the next self-correction for any student from the feature
  table alone — which is the prediction this rung exists to buy.

---

### [D-03] @depth-reviewer → @episode-writer
status: OPEN
severity: high
anchor: src/pages/neural-network/NeuralNetworkInterference.tsx:453–470
claim: The kill argument never answers মোটু on the number he is holding. He has just
  watched বাবুলের hit on আবুল fall from 1.7400 to 0.8700 (`:438–441`) and concludes
  আবুল is safer. ভতু's reply changes the subject to a hypothetical in which *every*
  weight is halved — a different scenario, correct in itself, but the reader is left
  able to think "the damage really did get smaller and she answered something else."
  The one-step rebuttal is on the page already and is never said: η halves the hit
  আবুল **takes** and halves the lift আবুল **gets** by exactly the same factor, because
  both are `η · Error · (X · X)` — and মোটু computed the second one himself one screen
  earlier (`0.5 × 2.3025` at `:424`). η does not take anyone's side.
ask: One clause opening ভতুর reply at `:456`, before the sign argument: "η শুধু বাবুলের
  হাতটা ছোট করে না রে — আবুলের নিজের হাতটাও ঠিক একই ভাবে ছোট করে। 2.3025-এর জায়গায়
  আবুল পেত অর্ধেক, তুই নিজেই একটু আগে কষলি।" Then the sign argument as written.
because: this is load-bearing rung #5, the beat E-003 marks blocking and knowledge.md
  calls "the price of admission" for keeping η at all. Without the clause the sign
  argument reads as a change of subject and the folklore survives; with it, the reader
  can predict that η rescales both sides of every tug equally, which is the general form
  of the fact and the reason the folklore is false.

---

### [D-04] @depth-reviewer → @episode-writer
status: OPEN
severity: high
anchor: src/pages/neural-network/NeuralNetworkInterference.tsx:321–323 (with :360–362)
claim: §8 completes the definition — "মোছা মানে 0 পেরিয়ে ওপারেই থেকে যাওয়া" — and মোটু
  coins the answer sentence at `:329`. But the two mechanisms §8 has in hand only
  establish that damage is **deferred**: (a) a self-correction never fails its author,
  (b) everyone gets another turn. Deferred forever is still erased. What actually rules
  out "crossed and stayed" is that the run stops — and that is §9's material, resting on
  an assumption ভতু has not yet made when §8's conclusion is drawn. So the episode's one
  retained sentence, "নড়ে, কিন্তু মোছে না", is delivered unconditionally at `:329` and
  the condition it depends on arrives 30 lines later attached to a different claim.
  The F06 guard at `:360–362` is excellently built — main clause `ধরে নিচ্ছি`, no
  intensifier, the next sentence syntactically dependent on it — but it currently guards
  only the convergence sentence, not the headline answer.
ask: One clause inside the existing acknowledgement at `:362`, so no new beat is created:
  after "শর্তটার একটা নাম আছে…", add that the earlier answer rides on the same
  assumption — "আর একটু আগে যে বললাম 'মোছে না', ওটাও এই ধরে নেওয়াটার উপরেই দাঁড়িয়ে আছে।
  ওটা ধরে নিলে বাকিটা সোজা: …". Names nothing; steals nothing from পর্ব ৫.
because: the reader can otherwise leave with an unconditional "নড়ে কিন্তু মোছে না",
  which is the single wrong belief this series says it exists to avoid (E-010's own
  wording). With the clause they can predict the boundary of today's happy answer — the
  same boundary the catastrophic-forgetting line at `:374–375` is already pointing at,
  which makes the two limits reinforce each other instead of standing apart.

---

### [D-05] @depth-reviewer → @episode-writer
status: OPEN
severity: medium
anchor: src/pages/neural-network/NeuralNetworkInterference.tsx:81
claim: The load-bearing derivation is written in a notation the reader has not been told
  is theirs. `:81` prints `sum_A = W · X_A`, but পর্ব ২ only ever wrote `WᵀX`
  (`NeuralNetworkLearning.tsx:233`). The `·` is not anchored until `:132–134`, fifty
  lines and one whole derivation later — and the derivation's own justification step at
  `:101` leans on the `WᵀX` identity it has not yet stated. E-007-C's anchoring
  requirement is met for the *name* "dot product"; the *symbol* runs unanchored through
  the exact stretch where knowledge.md says the reader can least afford working-memory
  cost (E-017's reasoning, applied to notation rather than to subscripts).
ask: Half a clause at `:78–81`, where the two পর্ব ২ facts are being laid out: "পর্ব ২-এর
  সেই `WᵀX`-ই, ছোট করে `W · X_A` লিখছি।" Four words; the full "dot product" naming stays
  where it is in §4.
because: a reader who stalls on an unfamiliar symbol at line 81 stalls for the whole
  derivation, and the derivation is load-bearing #1. This costs nothing and removes the
  only place in the episode where the reader must take a piece of notation on faith.

---

## What I am deliberately not raising

- The √n-vs-n convergence accounting — deferred to পর্ব ৫ by E-007-A. D-01 asks for
  knowledge.md's `why-it-exists` clause, which is a separate, `[include]`-marked rung,
  and needs no norm and no growth-rate comparison.
- The 2.4275-vs-2.3025 comparison — cut at E-016, ruled inert at E-019. Not re-raised.
- The 2 → −28 raw-scale hypothetical — pre-authorised cut #1, ruled at E-019 to cost
  felt magnitude and not mechanism. I agree: `:504–517` carries the prediction.
- The two-run η table, η as a step on a slope, the name of the condition, what the four
  numbers draw — all owned by later episodes.
- Anything about prose, voice, or arithmetic verification — other lanes.

---

## Score

```
depth: 80 / 100
```

reasoning: `interference` scores 10/9/9/7/8 — derived at `:92–103` rather than asserted,
exercised four times in checkable numbers, and its structural claim at `:167–177` buys a
real prediction; this concept is fully paid and would carry the episode on its own.
`নড়া ≠ মোছা` scores 9/7/6/7/8 — the definition arc (`:56–65` → `:294–295` → `:321–323`)
is the best structural work in the episode and the দাঁড়াও genuinely destabilises rather
than restating, but the **Why** axis is the episode's weak point: `:362–364` asserts the
accumulating half and dismisses the cancelling half, leaving the reader's most valuable
takeaway (`:531`) resting on one anecdote (D-01, high). `learning rate η` scores
9/8/5/6/8; its low **Why** and **Cost** are binding deferrals to পর্ব ১০, not defects, and
I have not scored against the ruling — but the misconception rung, which knowledge.md
calls the price of admission for keeping η at all, changes the subject instead of
answering মোটু on his own number (D-03, high). All five load-bearing rungs are present
and delivered rather than mentioned; the concept budget holds at 3/3; no out-of-scope
material has crept in; no banned inference is committed; there is no F10 and F11 is
answered concretely. The gap between 80 and threshold is four single-clause links between
things this episode already says — none of them asks for a line of new length, a new
number, or a later episode's content. Fix D-01 and D-03 and this is a 90.

---
---

# Iteration 2 — re-review

draft reviewed: `src/pages/neural-network/NeuralNetworkInterference.tsx` (600 lines, read in
full). Iteration-1 findings above are retained unedited; all five are now closed. Line
anchors below are **iteration-2 line numbers** and do not correspond to the anchors above.

## Verdict in one paragraph

All five findings applied, and three of them applied better than I asked. The single most
important change is D-03: the η misconception rung has gone from the weakest load-bearing
beat in the episode to arguably the strongest argued one, because it now refutes the
folklore **on the folklore's own promise and on the episode's own definition of erasure** —
মোটু claims small η keeps আবুল safe, and the episode answers by printing where আবুল actually
stands in each run and measuring that against the 0 that §2 defined as the erasure line.
D-01's fix is likewise the right shape: it does not assert that opposing tugs cancel, it
*points at* w₀'s printed round trip as the cancellation and at w₁/w₂/w₃'s non-return as the
accumulation, so both halves are evidenced by numbers the reader has already read. The
episode now answers "why does it stop?" with a mechanism instead of a dismissal, and মোটুর
most valuable takeaway is rewired to that mechanism. One pre-existing medium gap remains
(D-06). The score moves 80 → 91.

## Verification of the five reported fixes

| # | reported | verified | judgement |
|---|---|---|---|
| D-01 | applied at :370–381 | **CONFIRMED**, :373–378 | Delivers both halves and links them. See detail below. **CLOSED.** |
| D-02 | applied at :309–310 | **CONFIRMED**, :309–310 verbatim to the ask | **CLOSED.** |
| D-03 | rebuilt at :467–489 | **CONFIRMED**, :470–472 (the clause) + :477–478 (the code-box) + :484–487 (the kill) | Exceeds the ask. See detail below. **CLOSED.** |
| D-04 | applied at :337 and :365–366 | **CONFIRMED**, both | The added sentence at :366 goes beyond the ask. **CLOSED.** |
| D-05 | applied at :78 | **CONFIRMED**, :78 | **CLOSED.** |

### D-01 — the cancellation half. Closed, and the metaphor-avoidance did not cost clarity.

:373–378 now reads, in sequence: every correction is a step toward that W → where two push
opposite ways the two shoves largely cancel → **evidence**: remember w₀, −3.0 → −2.0 → −3.0,
all the way round and back where it started → but whatever nobody objects to does not cancel,
it accumulates each epoch → **evidence**: w₁, w₂, w₃ did not come back, did you notice? →
that accumulated part is what eventually outgrows the wobble.

This is the mechanism, not a gesture. Both halves are asserted *and then evidenced*, and both
pieces of evidence are numbers already printed twice in this episode (:40–42 in the code-box,
:48 in ভতুর own mouth) — so the reader can check the claim without leaving the page. That is
the same standard the rest of the episode holds itself to.

On the metaphor question the writer raises: **no, avoiding "টানাটানি" as a noun cost nothing,
and it bought something.** `ঠেলছে` / `ধাক্কা` / `কাটাকাটি` / `জমে` are all verbs and verbal
nouns applied to the printed weight values themselves — `কাটাকাটি হয়ে যাওয়া` is ordinary
Bangla for terms cancelling in arithmetic, not an imported image. Because no named object is
introduced, the reader has nothing to over-extend, and the paragraph therefore needs no
bounding caption (research §7's requirement, which a named tug-of-war would have triggered).
Depth-wise this is strictly better: the sentence is about w₀, w₁, w₂, w₃ and not about a rope.

**The knock-on is the real prize.** মোটুর third takeaway at :572–573 is now "যেটুকুতে সবাই
একমত সেটুকু তো জমছেই, দোলাটা তার উপরেই চড়ে আছে" — the anecdote ("পর্ব ২-এর Epoch 4-এও তাই
হয়েছিল") is gone and the mechanism is in its place, using vocabulary (`জমছে`, `দোলা`) that
points straight back at :377. knowledge.md calls this takeaway "the genuinely valuable,
transferable prediction" of the episode; it is now earned by mechanism like the other two,
and a reader can carry it to a training run they have never seen.

### D-03 — the η kill. Closed, and it now answers the question মোটু actually asked.

Yes. Three things had to happen and all three did:

1. **:470–472** — the symmetry clause, before the code and before the generalisation:
   "η শুধু বাবুলের হাতটা ছোট করে না রে — আবুলের নিজের হাতটাও ঠিক একই ভাবে ছোট করে। দুটোই তো
   একই সূত্র, `η · Error · (X · X)`।" This is the missing link I asked for, and it is stated
   as a *reason* (same formula) rather than an assertion.
2. **:477–478** — both runs side by side, every operand of which is either printed earlier on
   this page (−0.25, 2.30250, 1.74000) or computed by মোটু himself twenty lines earlier
   (0.90125 at :438). The reader sees 2.30250 and 1.74000 *both* halve. The symmetry is not
   claimed, it is visible in two rows.
3. **:484–487** — the kill on the folklore's own promise: both runs leave আবুল correct, but
   η = 1 leaves him at 0.31250 and η = 0.5 leaves him at 0.03125, ten times nearer to
   crossing. "η ছোট করে আবুলের শেখাটা বাঁচেনি রে, উল্টো তাকে আরও নাজুক করে রেখে গেছে।"

The reason this is stronger than the fix I specified: it does not merely neutralise মোটুর
inference, it **reverses it, measured on the yardstick the episode itself built at :56–65**.
§2 defined মুছে যাওয়া as the sum crossing 0. "Ten times closer to 0" is therefore not a new
criterion smuggled in to win an argument — it is the episode's own definition of danger,
applied to মোটুর own two numbers. The loop from :61 to :485 closes exactly. This is the
tightest piece of reasoning in the episode.

Only after that does :487 generalise ("এটা কাকতালীয় নয়, এর একটা সাধারণ রূপ আছে") and hand off
to the sign argument at :491–500, which now reads as the *general form of a fact already
demonstrated* rather than as a change of subject. The scope clause still rides with it at
:503–506, and the honest-positive at :511–513 ("ছোট η আসলে আমাদের আন্দাজটাকেই বেশিদিন ক্ষমতায়
রাখে") is now *earned* rather than asserted — 0.03125 sitting near the −0.25 start is the
initial guess visibly still in charge. That single change lifts η's **Why** and **Cost**
axes, which iteration 1 recorded as structurally capped.

Load-bearing #5 is delivered. E-003 is discharged. knowledge.md's "half of this concept is
not shippable" test is passed.

### D-04 — the coinage is no longer unconditional. Closed, with a bonus.

:337 forward-points at the coinage itself ("তবে ওর নিচে একটা শর্ত লুকিয়ে আছে — একটু পরেই
বলছি"), so the sentence is flagged as conditional at the moment it is minted rather than
30 lines later. Then :365–366 states the condition and — this is beyond the ask — states
*why* the coinage depends on it: "না থামলে 'পরে ফিরে আসবে' কথাটার কোনো মানেই থাকে না।"
That converts the guard from a disclaimer into a mechanism the reader can follow: the "he
comes back later" argument is only an answer if there is a later at which the run is done.
The F06 guard the orchestrator told the writer not to rewrite is structurally intact —
`ধরে নিচ্ছি` is still the main clause at :363 and the following box still opens `ওটা ধরে
নিলে` at :373.

## Per-concept axis scores — iteration 2

### 1. `interference` — PRIMARY

| axis | it-1 | it-2 | note |
|---|---|---|---|
| **What** | 10 | 10 | unchanged; :109, :112, :125–126 |
| **How** | 9 | **10** | D-05 closed at :78 — `WᵀX` named as the same object in the sentence that first prints `·`, so the derivation at :93–96 no longer runs on unanchored notation |
| **Why** | 9 | 9 | unchanged; :49–52, :167–178 |
| **Cost** | 7 | 7 | ceiling set by knowledge.md's cut of the per-student-weights tradeoff; not a defect |
| **Breaks** | 8 | 8 | unchanged; integrity clause :220–225, the ≥ 1 conditions at :168–170 |

**Mean 8.8.**

### 2. `নড়া ≠ মোছা` — PRIMARY

| axis | it-1 | it-2 | note |
|---|---|---|---|
| **What** | 9 | 9 | the definition arc :56–65 → :296–297 → :325–326 is intact and is still the best structural work in the episode |
| **How** | 7 | **8** | D-02 closed at :309–310 — #3(a) is now exercised on 2.3025, a number the reader watched work at :192. Held off 9 by D-06 |
| **Why** | 6 | **8** | D-01 closed at :373–378 — both halves, each evidenced by printed numbers. Not 9 because the *existence* of the agreed-on direction is assumed rather than argued, which is knowledge.md's own binding deferral to পর্ব ৫, correctly honoured |
| **Cost** | 7 | 7 | unchanged; :353–356 still refuses the smooth story and prints 2·2·1·2·1·0, আবুলের −0.74, বাবুলের four epochs. The it-1 dock (স্থগিত has no horizon) stands but touches a number the orchestrator froze |
| **Breaks** | 8 | **9** | D-04 closed at :337 + :365–366; the "না থামলে 'পরে ফিরে আসবে' কথাটার মানেই থাকে না" sentence makes the boundary a mechanism. Reinforced by catastrophic forgetting at :386–388 |

**Mean 8.2.**

### 3. `learning rate η` — SECONDARY

| axis | it-1 | it-2 | note |
|---|---|---|---|
| **What** | 9 | 9 | :397–398 still reveals rather than imports; :407 discharges "was anything I computed wrong?" |
| **How** | 8 | 8 | :408–409 (η multiplies the whole ΔW) → :413 → worked at :425–432 with মোটুর own cross-check at :438 → across two students at :452 |
| **Why** | 5 | **6** | :511–513 is unchanged in wording but is now *demonstrated* by :477–478 — the reader has seen the guess still in charge at 0.03125. Still capped by the পর্ব ১০ deferral |
| **Cost** | 6 | **7** | the cost of a small η is now a printed number (ten times nearer the flip), not just a named caveat |
| **Breaks** | 8 | **9** | D-03 closed; the misconception is killed on its own promise and on §2's own erasure criterion, then generalised. Scope clause intact at :503–506 |

**Mean 7.8.** Both remaining low axes are binding deferrals, not defects, and I am not
scoring against the ruling.

## The five load-bearing rungs — iteration 2

| # | verdict | anchor |
|---|---|---|
| 1 | **DELIVERED**, now with its notation anchored | :78–112 |
| 2 | **DELIVERED in full**, untouched by the revision | :184–227 |
| 3 | **DELIVERED**; (a) now exercised on 2.3025 at :309–310, (b) at :322–324 | :303–326 |
| 4 | **DELIVERED**, untouched | :259–299, :353–356 |
| 5 | **DELIVERED**, and now the best-argued beat in the episode | :467–506 |

Prediction (c) — "what η does and does not change" — was graded MOSTLY in iteration 1 and is
now **YES**: does not change any decision when everything scales (:498–500); does change how
close the student sits to 0 relative to a fixed W₀ (:484–487, :511–513); scales all four cells
including bias (:545–546). All four predictions the episode owes are now fully earned.

## Regression and scope checks

- **Regression guard.** No finding below is raised against an anchor+category closed in
  iteration 1. The fixes created **no new problem at any fixed anchor** — checked each of the
  five individually. D-06 is **pre-existing, never previously raised, and not a regression**;
  I say so explicitly because it sits near D-02's anchor.
- **Out-of-scope table — clear.** The one genuine near-miss is the new code-box at :477–478,
  which superficially resembles "the η=1 vs η=0.5 two-run comparison table" that knowledge.md
  defers to পর্ব ১০. It is not that object. The deferred table is the two *final weight
  vectors* ([−3.0, 3.40, 3.10, 0.70] vs [−3.5, 2.45, 1.90, 1.15]), deferred on the stated
  ground that "those are the only numbers in the episode the reader could not verify against
  a page they have read". Every number in :477–478 is either printed earlier on this page or
  computed by মোটু himself at :438, and both subtractions are shown. It passes the exact test
  that was used to defer the table. No creep.
- **The √n race — still out.** :377's "ওই জমা অংশটাই শেষে দোলাটা ছাড়িয়ে যায়" is the top of
  the `[include]` `why-it-exists` rung, not the bottom of the deferred `proof` rung: no norm,
  no growth rate, no comparison of n against √n. And because :363–364 says out loud that this
  is assumed and not proved, পর্ব ৫ still owns the proof intact.
- **Banned inferences — none committed.** #1 (self-help is greatest) — :306–310 still says
  "কখনো ঠকায় না" with no superlative, and the new back-reference cites 2.3025 without
  comparing it to the 2.4275 printed at :156. #5 (small η protects old learning) — actively
  refuted at :484–487, which is the strongest possible form of not committing it. #6 (÷100 is
  another form of η) — refuted at :541–546. #8 (convergence is universal) — scoped at :373
  ("আমাদের চারজনের data-য়").
- **Mechanism before name.** Still honoured: :132–135 describes the operation before "dot
  product"; :397–398 shows the multiplier's role before "learning rate". Nothing in the 40
  added lines opens with a definition.
- **দাঁড়াও.** Untouched and still real: :296–297 revokes the episode's own definition.
- **Altitude of the added lines.** All 40 are links between things already on the page, at the
  same altitude as their neighbours. No new object, no new symbol, no new number that is not
  a subtraction of two printed ones. This is the correct kind of addition.

## Concept budget and line count

Still **3 concepts against a budget of 3**. `dot product` is still anchored to `WᵀX` in its
introducing sentence (:133–135, now reinforced at :78), and input scale is still a second
reading of `ΔW = η · Error × X` (:527–537), so neither becomes a fourth concept. **No finding
against depth on overload grounds.**

The file is 600 lines against the orchestrator's iteration-2 allowance of ~585. That is a
compression question, not a depth one, and I am not filing it — but for the record:
knowledge.md's pre-authorised compression #3 (the `A·B ≥ 1` derivation at :167–171, ~12 lines,
`[compress]`, claim retained) is still **unspent**, so L4 has the reserve to absorb the
overrun without touching anything load-bearing.

**One observation, flagged to @clarity-reviewer rather than filed by me**, because the fix
would cost lines and the remit is pacing, not mechanism: :350, :360, :370 and :382 are four
consecutive ভতু boxes with no মোটু interjection — the longest teacher-only stretch in the
episode, and it now carries the episode's densest reasoning (non-smoothness → the assumption
→ cancel/accumulate → catastrophic forgetting). In an episode whose method is "মোটু checks
the number", this is the one stretch where the reader-surrogate never speaks. The depth is
present and lands (মোটু demonstrates as much at :572–573); the concern is purely whether it
is *reachable* on first read, which is not my lane.

## Findings — iteration 2

### [D-06] @depth-reviewer → @episode-writer
status: OPEN
severity: medium
anchor: src/pages/neural-network/NeuralNetworkInterference.tsx:306–310 (with :324 and :355–356)
type: **pre-existing gap, not previously raised, not a regression.** Filed at a line range
  adjacent to the now-closed D-02, so flagging the distinction explicitly: D-02 was "rule
  never exercised on a number" and is closed; this is "the rule's boundary is never stated".
claim: The episode asserts two things fifty lines apart and never reconciles them, and a
  careful reader will notice. At :306–310: "যে নিজের ভুল শোধরাচ্ছে, তার নিজের sum কখনো ভুল
  দিকে যায় না … নিজের update নিজেকে কখনো ঠকায় না." At :324, the consequence: "ক্ষতিটা থেকে
  যায় না — কিছুক্ষণের জন্য হয়, তারপর সে নিজেই তুলে নেয়." Then at :355–356: "বাবুল তো টানা
  চারটা epoch-এ ভুল করে গেছে, Epoch 5-এর আগে থামেইনি." বাবুল fired his own correction on
  every one of those four turns, and by the episode's own rule each one helped him — and he
  was still wrong the next time round. The reader is left with a rule and a
  counter-shaped-fact, and no way to tell whether the rule is weaker than stated or the
  বাবুল line is an exception.
ask: One clause at :310, using material already on the page — **helping is not the same as
  helping enough**. An author's own turn lifts him by `η · (X_B · X_B)` and always in the
  right direction, but it need not carry him across 0 in one step, and the other three get
  their turns before his next one. That is the same interference formula the reader has been
  using all episode, read once in the other direction. No new number, no new symbol; it is
  the কাবুল story (crossed, came back) told for the case that crossed and did *not* come
  back yet.
because: without it the reader holds "his own turn always helps him" and "he was wrong four
  epochs running" as two facts in mild contradiction, and the honest resolution — that
  recovery is guaranteed in *direction* but not in *one step* — is exactly the prediction
  this rung exists to buy. With it, the reader can predict that a stubborn example can stay
  wrong for many epochs without anything being broken, which is the same shape as মোটুর third
  takeaway and would make the two reinforce each other. It also bounds :324's "তারপর সে
  নিজেই তুলে নেয়", which currently reads as an immediate guarantee and is only a directional
  one.
scope check: not পর্ব ৫ material (needs neither the termination proof nor the condition's
  name) and not পর্ব ১০ material. Sits inside knowledge.md ladder-2's `mechanism` (a)+(b)
  and `failure-mode` rungs, both `[include]`/load-bearing.
recommendation to @orchestrator: **this is worth roughly one point and does not justify an
  L3 iteration 3.** The episode is over threshold with it open. If the loop is closing, take
  it as an L4 note or drop it; the depth lane does not need another round.

## What I am deliberately not raising in iteration 2

- Everything in the iteration-1 "not raising" list, unchanged.
- The line count (600 vs ~585) — compression's lane, and the ~12-line reserve is unspent.
- The four-consecutive-ভতু-boxes pacing at :350–390 — clarity's lane; noted above, not filed.
- The `স্থগিত`-has-no-horizon dock on `নড়া ≠ মোছা` **Cost** — closing it means printing
  আবুলের second wrong-side reading, and the orchestrator froze the numbers. The dock stands
  in the score; the finding does not.

## Score

```
depth: 91 / 100   (iteration 1: 80 — improvement +11, well clear of the ≥ 2 requirement)
```

reasoning: `interference` scores 10/10/9/7/8 (mean 8.8) — the derivation now runs on notation
the reader has been told is theirs (:78), so there is no longer any point in the episode where
a piece of symbolism must be taken on faith. `নড়া ≠ মোছা` scores 9/8/8/7/9 (mean 8.2) — the
**Why** axis, which carried the episode's one high-severity depth gap at 6, is now paid with a
mechanism evidenced twice by numbers the reader has already read (:373–378), and the payoff
shows up where it matters: মোটুর third takeaway at :572–573 is now derived from that mechanism
instead of induced from one anecdote. `learning rate η` scores 9/8/6/7/9 (mean 7.8) — its
misconception rung, which knowledge.md calls the price of admission for keeping η at all, has
gone from changing the subject to refuting the folklore *on its own promise*, measured against
the erasure criterion the episode itself defined 400 lines earlier (:61 → :485). That is the
single largest quality change between iterations. All five load-bearing rungs delivered; all
four owed predictions now fully earned (prediction (c) upgraded from MOSTLY to YES); concept
budget holds at 3/3; no out-of-scope creep in the 40 added lines and the nearest miss (:477–478)
passes the exact test knowledge.md used to defer its lookalike; no banned inference committed
and one actively refuted; mechanism still precedes name everywhere; দাঁড়াও untouched and still
destabilising. What keeps this off 95 is four axes capped by rulings I am not scoring against
(interference **Cost**, নড়া **Cost**, η **Why** and **Cost**) plus one medium pre-existing gap
(D-06). Under this episode's constraints, a perfect draft scores about 93. **Pass.**
