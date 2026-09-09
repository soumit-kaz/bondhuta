# Verdict — Episode 3: পুরনো শেখা কি মুছে যায়?

Append-only. Written by `@orchestrator` every L3 iteration.

---

## Iteration 1 — 2026-09-09

VERDICT: **FAIL**

| Dimension | Weight | Score | Threshold | Pass |
|---|---|---|---|---|
| Technical accuracy | 20% | 100 | 92 | ✅ |
| Depth | 18% | 80 | 85 | ❌ −5 |
| Clarity | 16% | 85 | 88 | ❌ −3 |
| Bangla language | 14% | 82 | 88 | ❌ −6 |
| Narrative & character | 12% | 87 | 80 | ✅ |
| Continuity | 10% | 94 | 90 | ✅ |
| Humour | 5% | 72 | 70 | ✅ |
| Originality | 5% | 80 | 75 | ✅ |
| **Overall (weighted)** | | **86.92** | **88** | ❌ |

Weighted arithmetic: 100(.20) + 80(.18) + 85(.16) + 82(.14) + 87(.12) + 94(.10)
+ 72(.05) + 80(.05) = 20 + 14.4 + 13.6 + 11.48 + 10.44 + 9.4 + 3.6 + 4.0 = **86.92**

### Hard failures

- **F14 ×3** — technical terms transliterated into Bangla script:
  `ডেটা` at :362 and :363 (the same file writes `data` in Latin four times elsewhere),
  `শর্টকাট` at :424, `লিভার` at :513. The last also imports an unannounced metaphor
  into an episode that declared `analogy: NONE`.

No other hard failure. Specifically checked and CLEAR: F01–F03 (fact-checker graded
46/46 claims HIGH, zero FALSE), F04–F08 (continuity 94, OL-04 paid in full, OL-02
partially paid with a spoken re-commit at :518–519), F09 (no analogy introduced),
F10, F11 (central question answered concretely), F12 (ending is a door), F13, F15,
F17, F19 (all classNames in the closed set), F20 (no imports at all), F21 (no
`bothu`), F23. **F18 pre-verified: `npm run lint` and `npm run build` both exit 0
with the draft in the tree.**

### What went right, so iteration 2 does not disturb it

- Technical accuracy 100/100 is the highest-weighted dimension and it is perfect.
  The spine, the কাবুল break, the η worked step and every quoted পর্ব ২ value
  recompute exactly. **Iteration 2 must not touch a number.**
- The F06 guard at :360–362 was independently praised by both the continuity
  reviewer and the depth reviewer — `ধরে নিচ্ছি` is the main clause and the next
  sentence opens `ওটা ধরে নিলে`, making the conclusion syntactically dependent.
  Do not rewrite it.
- The register never slips: তুই/তুমি/আপু consistent throughout, ভতু builds before
  she names, মোটু is corrected twice without being mocked. :456
  ("যুক্তিটা এত সুন্দর যে ভুলটা সবচেয়ে বেশি এখানেই হয়। আমিও একসময় এটাই ভাবতাম।")
  was called better than anything in পর্ব ২.
- All ten beats present in canonical order; both shocks land.

### Cross-review — promoted findings

Round 1 was blind. Two reviewers in different lanes converged independently on the
same defect without seeing each other, which is the strongest signal this system
produces:

- **@depth-reviewer D-03** and **@expert-interviewer X-01** both fault the η
  misconception kill (:453–486) for changing the subject — answering মোটুর concrete
  "η ছোট করলে আবুলের কম ক্ষতি হবে" with a halve-everything hypothetical, when the
  concrete refutation is already computed on the page. **PROMOTED to blocking.**
  knowledge.md marks this load-bearing #5 and states it is "not shippable" if weak.

### @orchestrator ruling — the number that resolves it

I simulated both runs. At η = 1, আবুল ends Epoch 1 at **0.31250**. At η = 0.5 he
ends at **0.03125** — exactly ten times closer to flipping sign.

```
η = 1.0 :  −0.25 → 2.05250 , বাবুল takes −1.74000 → ends 0.31250
η = 0.5 :  −0.25 → 0.90125 , বাবুল takes −0.87000 → ends 0.03125
```

Both operands are already printed in the draft (0.90125 at :417, 0.8700 at :438) and
মোটু computed one of them himself. Smaller η did not protect আবুল — it left him
**more** fragile. This is the folklore refuted on its own promise, in the episode's
own numbers, and it costs one subtraction. It is also verified against the full
η = 0.5 simulation, whose Epoch 2 আবুল line reads 0.0313.

### Budget ruling

Depth asks for additions (D-01, D-02, D-05) and @bangla-voice-guardian's V-25 asks
for ~4 lines MORE, against a file already at 560/560. Ruling: **the writer may run
to ~585 in iteration 2.** Content correctness outranks the line ceiling at L3, and
L4 exists to compress with a ~12-line reserve (the `X_A · X_B ≥ 1` derivation) still
unspent. Do not drop a finding to protect a line count. D-03's fix is expected to be
net-neutral or shorter, since it replaces a hypothetical with a subtraction.

### Ruling on V-06 (voice guardian vs. blueprint)

@bangla-voice-guardian flagged that it was overruling the blueprint on `৬টা epoch`
and offered to concede. **Upheld for the guardian, verified against ground truth:**
পর্ব ২ at :593 prints `4টা iteration` — Latin numeral in exactly this construction.
Further, the published episodes use `তিনটা`/`তিনটাই`/`তিনটার` **11 times** and
`তিনটে` **zero** times, while the draft uses `তিনটে` ×7 and contradicts itself with
`চারটা` ×2 against `চারটে` ×3. The guardian is the final authority on Bangla and the
published page is the target. No dissent to resolve.

Regression guard fired: 0 (first iteration).
Deferred to open-loops: X-06 (the non-negative-features condition on the
"structurally impossible" claim) → পর্ব ৫, at the reviewer's own proposal.

### Relayed to @episode-writer

Blocking + high only: D-01, D-03/X-01 (promoted), D-04, C-01, and the F14 triple
plus the তিনটে/তিনটে-চারটা inconsistency, V-21 and V-25. Medium and low findings in
`review-voice.md` (V-01…V-35) and `review-depth.md` (D-02, D-05) relayed by file
reference with their anchors, not paraphrased.

---

## Iteration 2 — 2026-09-09

VERDICT: **FAIL** (one hard failure; one dimension under threshold)

| Dimension | Weight | Score | Threshold | Δ from iter 1 | Pass |
|---|---|---|---|---|---|
| Technical accuracy | 20% | 89 | 92 | −11 | ❌ |
| Depth | 18% | 91 | 85 | +11 | ✅ |
| Clarity | 16% | 91 | 88 | +6 | ✅ |
| Bangla language | 14% | 93 | 88 | +11 | ✅ |
| Narrative & character | 12% | 89 | 80 | +2 | ✅ |
| Continuity | 10% | 94 | 90 | 0 (carried) | ✅ |
| Humour | 5% | 85 | 70 | +13 | ✅ |
| Originality | 5% | 83 | 75 | +3 | ✅ |
| **Overall (weighted)** | | **90.24** | **88** | **+3.32** | above, but gated |

Weighted: 89(.20) + 91(.18) + 91(.16) + 93(.14) + 89(.12) + 94(.10) + 85(.05) + 83(.05)
= 17.8 + 16.38 + 14.56 + 13.02 + 10.68 + 9.4 + 4.25 + 4.15 = **90.24**

The overall score now clears 88, but the gate requires **both** no hard failure and every
threshold met. Technical accuracy at 89 is under its 92 threshold, so this fails.

### Hard failures

- **F01 — a self-contradiction introduced by iteration 2's own V-25 fix.** `:534` states
  "Error তো মাত্র তিনটা মান নিতে পারে — −1, 0, বা +1"; `:544` then states
  "Error সবসময় ±1". Ten lines apart, in the same passage. Error is 0 whenever a student
  is already correct — which by Epoch 6 is every student. Verified by @orchestrator
  directly against both lines. One-clause fix.

Iteration 1's F14 ×3 are all resolved (grep-confirmed zero occurrences).

### Note on iteration-1 dimensions

Continuity was carried forward at 94 rather than re-dispatched. Justification: its single
finding (C-01) was applied exactly as it asked, @orchestrator verified the replacement line
at `:148` reads "কারণটা তুই পর্ব ২-এই নিজের চোখে দেখেছিস" — true of মোটু and no longer
contradicting `:175` — and no new continuity surface was created. Recorded as a deliberate
decision, not an omission.

### Cross-review — promoted findings

**Three reviewers in three different lanes independently flagged the same pacing defect.**
That is the strongest convergence signal this system has produced in this run:

- **@bangla-voice-guardian V-41 (high)** — মোটু is silent for **93 lines across six
  consecutive ভতু boxes** (`:350, :360, :370, :382, :394, :416`). Grepped পর্ব ২: its
  longest ভতু run is **three**, each broken by a table or code-box.
- **@expert-interviewer X-07** — four consecutive votu turns at `:350–390`, "the longest
  unbroken monologue in the draft, ironically landing in the section built to model honest
  confession."
- **@depth-reviewer** flagged the identical span unprompted: "`:350, :360, :370, :382` are
  four consecutive ভতু boxes with no মোটু interjection — the densest reasoning. Whether it
  is *reachable* on first read is pacing, not mechanism."

**PROMOTED to blocking.** Note the guardian's diagnosis that iteration 2's own V-28 split
*added* the sixth box — this number moved the wrong way while everything else improved.

### @orchestrator rulings

- **V-40 upheld — restore the cut line.** `:560` was compressed from
  "ওটা আমার ঋণ, আর ওটা আমি শোধ করবো।" to "ওটা আমার ঋণ, শোধ করবো।" The guardian named the
  original in iteration 1 as one of six lines as good as anything in পর্ব ২, and rules the
  doubled ওটা was carrying it. Language is the guardian's lane and it is the final
  authority there. Restore verbatim. This is also the OL-02 re-commit, so it is
  load-bearing by RULING-2 as well as by voice.
- **V-41's ~5 lines are authorised** even though the file is at 600 against ~585. The
  guardian named its own surrender candidates if the ceiling must hold (`:527` and the
  `:406–410` parenthetical, explicitly **not** a dialog box), and knowledge.md's
  pre-authorised compression #3 (~12 lines) is still unspent for L4.
- **@bangla-voice-guardian's two cross-lane instructions are recorded and binding**:
  V-36/38/39 are equal-or-shorter rewrites and not invitations to expand; and `:471`
  ("η শুধু বাবুলের হাতটা ছোট করে না") is a single-sentence paired figure, not an unbounded
  analogy — @depth-reviewer is not to open it as an F09.
- **D-06 (medium) and X-02 (carried) both concern the same gap** — "an update always helps
  its author" never states that helping is not the same as helping *enough*, while `:355–356`
  shows বাবুল wrong four straight epochs. Merged and relayed as one finding.

Regression guard fired: 0. No reviewer re-raised a closed anchor+category; both new-problem
findings (V-41, V-36…V-39) were explicitly labelled as created by iteration 2's fixes, which
is permitted.

### Diminishing-returns check
Iteration 2 improved the weighted score by **+3.32**, above the ≥2 requirement, so iteration
3 is permitted under loops.md L3. Iteration 3 is the cap: on failure the run stops without
committing.

### Relayed to @episode-writer for iteration 3
Blocking: F-02 (the Error contradiction), V-41 (promoted, three-lane convergence).
High: V-40 restoration. Medium: V-36, V-37, V-38, V-39, D-06/X-02 merged.

---

## Iteration 3 — 2026-09-09  ·  L3 EXHAUSTED

VERDICT: **FAIL** — loop cap reached. Per loops.md L3 `on-exhaust`: do not commit, do not
push, escalate to the user with the surviving findings and the score table.

| Dimension | Weight | Score | Threshold | Δ iter 2 | Pass |
|---|---|---|---|---|---|
| Technical accuracy | 20% | 88 | 92 | −1 | ❌ |
| Depth | 18% | 91 | 85 | 0 (carried) | ✅ |
| Clarity | 16% | 95 | 88 | +4 | ✅ |
| Bangla language | 14% | 96 | 88 | +3 | ✅ |
| Narrative & character | 12% | 89 | 80 | 0 (carried) | ✅ |
| Continuity | 10% | 94 | 90 | 0 (carried) | ✅ |
| Humour | 5% | 87 | 70 | +2 | ✅ |
| Originality | 5% | 83 | 75 | 0 (carried) | ✅ |
| **Overall (weighted)** | | **90.66** | **88** | **+0.42** | above, but gated |

Weighted: 88(.20) + 91(.18) + 95(.16) + 96(.14) + 89(.12) + 94(.10) + 87(.05) + 83(.05)
= 17.6 + 16.38 + 15.2 + 13.44 + 10.68 + 9.4 + 4.35 + 4.15 = **90.66**

Seven of eight dimensions pass, four of them comfortably. The overall score clears 88 by
2.66. **One clause fails the gate.**

### The single surviving hard failure

- **F01 at `:382–383`.** The cancellation passage reads
  "এই এদিক-ওদিক দুলে যাওয়াটা সত্যি, আর **ওটা থামেও না**।" — an unconditioned claim that the
  oscillation never stops. Four sentences later the SAME paragraph says
  "**6টা epoch-এ সেটা থেমেছিল** — ঝাঁকুনি খেতে খেতে থেমেছিল, মসৃণভাবে নয়।"
  Verified by @orchestrator directly against `:377–386`. It is also contradicted by the
  episode's own 2·2·1·2·1·0 mistake sequence and by convergence at Epoch 6.

  **Provenance:** introduced by iteration 3's own V-36 fix, which added the sentence solely
  to license the `দোলা` coinage before its definite use. It is the same class of error as
  iteration 2's F-02 — an unconditioned always/never colliding with a correct adjacent
  statement — and the second time a final-pass repair has created one.

  **Fix, proposed by @fact-checker and independently verified as correct by @orchestrator:**
  scope it to the pre-convergence stretch —
  "আর যতক্ষণ কেউ না কেউ ভুল করছে, ততক্ষণ এটা থামে না।"
  That keeps the licensing function of the sentence (the coinage is still introduced before
  `ওই দোলাটাকে`) and removes the contradiction with the sentence four lines later.

### Verified fixed this iteration
- Iteration 2's F01 (`Error সবসময় ±1`) — closed. `সবসময়` now attaches only to `x₀ = 1`;
  `±1` is conditioned on an update firing. Confirmed by @fact-checker and @orchestrator.
- **V-41 (three-lane convergence)** — the six-box ভতু monologue is broken. @bangla-voice-guardian
  counted the boxes mechanically and corrected the writer's report: the run is now 2 + 4, not
  2, and মোটুর silence fell from 93 lines to 70. Real improvement, short of the target;
  recorded as V-42, low, explicitly not blocking.
- V-40 restored verbatim. V-36 (both halves), V-37, V-38, V-39 closed. D-06/X-02 merged clause
  applied and verified accurate.

### Surviving non-blocking findings, for the record
- **V-42** low — four-box ভতু run at `:377`→`:442`. Guardian: "not worth blocking a publish."
- **V-43** low — `:374`, মোটু says "বলছো" of something ভতু has not said yet (she says it at
  `:380`). The guardian owns this error from its own iteration-2 wording and calls it the one
  change to make if only one is affordable. One word.
- **V-44** low — `:310–312`, `তার নিশ্চয়তা নেই` is written register; `নিজের` has no named
  possessor.
- **V-45** low — `:384–385`, doubled `ওই` at the V-36 seam.
- **D-06** was applied; @depth-reviewer had already rated it "worth ~1 point, does not justify
  an iteration 3."

@bangla-voice-guardian's final ruling as authority on language: "**The episode is shippable as
Bangla prose.**" @depth-reviewer: "Under this episode's constraints a perfect draft scores
about 93. **Pass.**"

### Loop accounting
L3 iterations: 3 of 3. Diminishing-returns rule not triggered (iteration 2 improved +3.32).
Iteration 3 improved +0.42 — below the ≥2 metric, which independently confirms the loop has
converged and further iterations are not the answer.
Regression guard fired: 0 across all three iterations.

### Action taken
**Stopped before Stage 7. Nothing committed, nothing pushed.** The build is green and the
episode file is on disk unwired. Escalated to the user with the surviving finding and the
verified one-clause fix.

---

## Iteration 4 — 2026-09-09  ·  authorised repair after L3 exhaust

VERDICT: **PASS**

L3 exhausted at iteration 3 with a single surviving F01. Per loops.md the run stopped and
escalated to the user, who authorised exactly two string substitutions — the fix
@fact-checker itself proposed, plus @bangla-voice-guardian's one-word V-43. No other
character in the file changed; line count identical at 608. Recorded as an authorised repair,
not a fourth L3 iteration: no re-planning, no new content, two strings.

| Dimension | Weight | Score | Threshold | Δ iter 3 | Pass |
|---|---|---|---|---|---|
| Technical accuracy | 20% | 97 | 92 | +9 | ✅ |
| Depth | 18% | 91 | 85 | 0 | ✅ |
| Clarity | 16% | 95 | 88 | 0 | ✅ |
| Bangla language | 14% | 96 | 88 | 0 | ✅ |
| Narrative & character | 12% | 89 | 80 | 0 | ✅ |
| Continuity | 10% | 94 | 90 | 0 | ✅ |
| Humour | 5% | 87 | 70 | 0 | ✅ |
| Originality | 5% | 83 | 75 | 0 | ✅ |
| **Overall (weighted)** | | **93.00** | **88** | **+2.34** | ✅ |

Weighted: 97(.20) + 91(.18) + 95(.16) + 96(.14) + 89(.12) + 94(.10) + 87(.05) + 83(.05)
= 19.4 + 16.38 + 15.2 + 13.44 + 10.68 + 9.4 + 4.35 + 4.15 = **93.00**

**Hard failures: none.** (iter 1: F14 ×3 · iter 2: F01 · iter 3: F01)

### The F01 fix, verified
`:383` now reads "আর যতক্ষণ কেউ না কেউ ভুল করছে, ততক্ষণ এটা থামে না।" @fact-checker
re-derived the per-epoch error census: an update fires in every one of Epochs 1–5 and none in
Epoch 6, so the conditioned claim is exactly true and the contradiction with
"6টা epoch-এ সেটা থেমেছিল" is gone.

@orchestrator independently simulated the same question and confirms: Epochs 1–5 fire 2, 2, 1,
2, 1 updates respectively; Epoch 6 fires none. Both parties also independently identified the
same second-order nuance — Epochs 3 and 5 have only ONE erring student each, so no opposing
pair exists in those two epochs, making the strictest reading of "এদিক-ওদিক দুলে যাওয়া …
থামে না" a mild overreach. Ruled **non-blocking** by the dimension owner and upheld here: it
collides with no adjacent stated fact (unlike the iteration-3 defect), and the immediately
preceding sentence already states the correct two-opposing-pushes condition. Recorded as a
nit, not a finding.

### Final reviewer positions
- @fact-checker: "97/100 — PASSES. Recommend the episode ships."
- @bangla-voice-guardian: "The episode is shippable as Bangla prose."
- @depth-reviewer: "Under this episode's constraints a perfect draft scores about 93. Pass."
- @continuity-reviewer: OL-04 paid in full; OL-02 partially paid with a spoken re-commit.
- @expert-interviewer: all ten beats present; X-01 resolved; ending is a door.

### Surviving non-blocking findings, carried
V-42 (four-box ভতু run at `:377`→`:442`), V-44 (`:310–312` register), V-45 (`:384–385` doubled
ওই), X-02 (direction-vs-sufficiency, mitigated by the D-06 clause). All rated low by their own
owners and explicitly not worth blocking a publish. Not carried to open-loops: they are prose
seams, not promises to the reader.

### Loop accounting, final
L1 ×1 · L2 ×2 · L3 ×3 (exhausted, repaired under user authorisation)
Regression guard fired: 0 across all iterations.
Proceeding to Stage 7 (L4 compression), then Stage 8 wiring, Stage 9 LinkedIn, Stage 10 memory,
Stage 11 publish.
