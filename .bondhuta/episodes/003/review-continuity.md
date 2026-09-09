# Continuity Review — পর্ব ৩: পুরনো শেখা কি মুছে যায়?

Reviewed: `src/pages/neural-network/NeuralNetworkInterference.tsx` (560 lines) against
`.bondhuta/state/concepts.md`, `.bondhuta/state/open-loops.md`, `.bondhuta/state/continuity.md`,
`.bondhuta/series/glossary.md`, `.bondhuta/series/roadmap.md`,
`src/pages/neural-network/NeuralNetworkLearning.tsx` (843 lines, full),
`src/pages/neural-network/NeuralNetworkIntro.tsx` (full), and `.bondhuta/episodes/003/`
blueprint.md, knowledge.md, roundtable.md (E-001…E-021).

## OL-04 ruling — PAID, not gestured at

`state/open-loops.md:8` — OL-04, due পর্ব ৩ — "neuron নতুন কিছু শিখতে গিয়ে পুরনো শেখা সত্যিই
ভুলে যায় কিনা, আর গেলে আমরা কী করি". The draft pays this with real arithmetic, not
reassurance: `Δsum_A = Error_B × (X_A · X_B)` is derived at :80–108, then exercised end-to-end
on পর্ব ২'s own printed numbers (2.0525 → 0.3125 at :191–205, matching
`NeuralNetworkLearning.tsx:516` and `:702`). The "নড়া ≠ মোছা" arc is completed honestly across
three sections (§2 states the criterion at :56–65, §7 breaks the reader's naive model with
কাবুল at :259–297, §8 repairs the definition at :301–325) — this matches the roundtable's
E-012(b)/E-018 resolution exactly, word for word in places. **Ruling: OL-04 fully paid.**

## OL-02 ruling — partial payment, re-committed out loud (compliant with RULING-2)

`state/open-loops.md:6` — OL-02, due পর্ব ৫. The draft pays only the update-size half
(`ΔW = η · Error × X`, the x₀-exempt ÷100 asymmetry, :461–517) and ভতু explicitly says the rest
is still owed: *"আর scale মেলানোর পুরো গল্পটা আমি এখনো দিইনি, দুবার প্রতিশ্রুতি দিয়েও দিইনি। ওটা
আমার ঋণ, আর ওটা আমি শোধ করবো।"* (:518–519). This is a spoken re-commit, not a silent partial
payment — **no F08 here**.

Flagging for `memory-keeper`, not the draft's fault: `roadmap.md`'s পর্ব ৫ block (lines 102–120)
does not currently list scale/normalisation among its `teaches:`, and `roundtable.md`'s
**E-008 is still status: OPEN** (unresolved) asking exactly for this to be reconciled. This
episode's promise has nowhere on the roadmap to land yet. See Ledger updates below.

## §9 linear-separability foreshadow — the sharpest F06 risk, checked and clear

`:360–367`. The assumption is the grammatical main clause (*"আমি ধরে নিচ্ছি — আর আজ শুধু ধরেই
নিচ্ছি, প্রমাণ করছি না — যে চারজনকে একসাথে খুশি করে এমন একটা W আছে"*), no `সত্যিই`, and it
comes **before** the convergence explanation (*"ওটা ধরে নিলে বাকিটা সোজা..."* follows it). This
matches `roundtable.md` E-013's structural requirement and E-019's acceptance exactly. Every
convergence statement in the episode is scoped to "আমাদের চারজনের ডেটায়" (:363, :360–365) — no
bare-law phrasing (banned inference #8 avoided). `linear separability`, `perceptron`, `XOR`,
`decision boundary` do not appear anywhere in the draft (checked against `concepts.md:26–33`,
all still correctly `pending`). **No F06 violation.**

## Findings

### [C-01] anchor: NeuralNetworkInterference.tsx:148–149
severity: medium
claim: ভতু tells মোটু "কারণটা তুই নিজেই পর্ব ২-এ বসিয়েছিলি" (you yourself put x₀ = 1 in, in
  পর্ব ২), crediting মোটু with introducing bias input x₀ = 1.
ask: Attribute the idea to ভতু (or leave it unattributed/collaborative — "আমরা বসিয়েছিলাম"),
  or drop the "তুই নিজেই" framing.
because: `NeuralNetworkLearning.tsx:138–150` shows this decision made in a `votu` dialog-box
  ("ওরও একটা সঙ্গী দরকার, না?") followed by neutral first-person narration ("দিয়ে দিলাম একটা
  x₀") — never a মোটু line. This is the same class of error `roundtable.md` E-006(b) caught and
  corrected (কাবুলের break wrongly attributed to বাবুলের Epoch-1 instead of Epoch-2 update): a
  charming callback that does not survive a check against the actual printed page, and this
  series' whole premise is that its readers do check.

## Contradictions (F04)
none beyond C-01 — checked weight, bias, bias input, Error, weight update rule, epoch,
iteration, online learning, convergence, matrix/transpose/WᵀX, scale against
`series/glossary.md` line by line and against `NeuralNetworkLearning.tsx` in full. Every
callback (`:100–103` distributivity via `WᵀX`, `:166–179` x₀ = 1's "শুধু দেখতে সুন্দর হয়"
payoff, `:513–517` the ÷100 asymmetry) matches the source text's wording and numbers exactly.

## Re-teaching (F05)
none. `bias`/`bias input`/`WᵀX`/`matrix multiplication` are all deepened (used as inherited
tools, or given one clause of new structural meaning — "cosmetic → structural" per
`knowledge.md:419–421`) but never re-defined from scratch. `training` — RULING-3 says treat as
`taught`, ledger row stale; the draft does not use the literal word "training" at all, so no
re-teaching risk either way. No `concept-box` re-explains anything পর্ব ১–২ already taught.

## Untaught concepts used (F06)
none. `learning rate η` is `pending` in `concepts.md:25` and is properly taught here (first use
at :384–387, after being deliberately withheld through §§1–10 per the blueprint's sequencing
rule — confirmed: no `η` symbol appears before line 384). `dot product` is a free name because
it is anchored to `WᵀX` in its introducing sentence (:132–135), matching
`roundtable.md` E-007(C)/E-009(C). `linear separability` is leaned on but explicitly
foreshadowed, not used silently (see ruling above). `interference` and `নড়া ≠ মোছা` are new
names taught in full within the episode, not assumed.

## Character knowledge (F07)
Checked every মোটু line (12 total: :26–32, :113–119, :137–143, :208–214, :283–289, :327–330,
:339–345, :421–427, :445–451, :490–496, :525–534, :538–546) against `continuity.md`'s "Knows"
list. He asks, cross-checks arithmetic, and once completes ভতুর sentence ("নড়ে, কিন্তু মোছে
না?" :329, immediately after she supplies both halves of the mechanism at :304–325) — he never
explains unprompted. No mention of derivative, decision boundary, layer, perceptron, or any
geometric "line" language from him. Both his confidently-wrong moments (w₀ returned so nothing
lost, :29–31; smaller η protects old learning, :447–450) are present and correctly rescued by
ভতু with arithmetic, not ridicule — matches `continuity.md`'s established correction register
("গুলিয়ে ফেলিস না") and `roundtable.md` E-003/E-018's binding rulings. No `dialog-box bothu`
anywhere (F21) — আবুল/বাবুল/কাবুল/দাবুল never speak. Forms of address (তুই/তুমি) consistent
with `continuity.md:38–39`. Aside from C-01 above (an attribution error inside a ভতু line, not
a মোটু-knows-too-much violation), no F07 issue found.

## Open loops (F08)
OL-04 due this episode: **PAID** — see ruling above.
OL-02 due পর্ব ৫: **partially paid, re-committed explicitly at :518–519** — compliant with
RULING-2, no silent partial payment.
Episode's own new loop: the ending hook (:553–556, `highlight-text`) hands পর্ব ৪ an unanswered
question ("একটা W 'কাজ করে' মানে ঠিক কী... চারটা সংখ্যা কাগজে কী আঁকছে?") without naming
`decision boundary`, matching `roadmap.md`'s পর্ব ৪ central-question exactly
(`roadmap.md:88`, "weight গুলো কাগজে আসলে কী আঁকছে?"). `সীমানা` appears exactly once, inside
মোটুর question (:543), matching `roundtable.md` E-020's ruling; the banned near-synonyms
"দাগ"/"রেখা"/"সীমারেখা" do not appear anywhere in the draft (checked the SVG label at :235,
which correctly reads "0 — এখানেই উত্তর বদলায়", not the rejected "0 — এই দাগটাই সিদ্ধান্ত
নেয়" from `roundtable.md` E-020's original complaint).

## Dataset / numeric integrity
Initial W, converged W, all four students' feature rows match `continuity.md:41–56` exactly.
Spot-checked every dot product printed against the dataset table by hand:
`X_A·X_A = 2.3025`, `X_A·X_B = 1.7400`, `X_A·X_C = 2.4275`, `X_A·X_D = 1.4175`,
`X_C·X_B = 2.2100` — all correct. Epoch-1/2 weight trajectory (:40–42) matches
`NeuralNetworkLearning.tsx:619–651`. Mistake counts 2·2·1·2·1·0 (:350–351) and কাবুলের
Epoch-2 attribution (:270, correctly the Epoch-2 update per `roundtable.md` E-006(b), not the
misattributed Epoch-1 version research.md originally had) are both correct against the source
episode. No percentage anywhere (E-006(a) compliance confirmed by full-text scan). Variable
names `sum`/`sum_A` preserved as পর্ব ২'s own shorthand, no rename to `z`/`net`.

## Ledger updates needed after publish

`state/open-loops.md`:
- OL-04 → **paid** (episode 3)
- OL-02 → stays **open**, due পর্ব ৫, note "partial payment in পর্ব ৩ (update-size/÷100
  asymmetry); full normalisation still owed"

`state/concepts.md`:
- `learning rate` → **taught**, introduced 3 (was `pending`)
- add row: `interference` → **taught**, introduced 3, prerequisite of: — 
- add row: `নড়া ≠ মোছা` (coined pair) → **taught**, introduced 3
- `training` row → **taught** (RULING-3; row was stale at `teased`, independent of this draft)
- `feature scaling / normalisation` stays **teased** (partial mechanism taught, full concept
  still owed পর্ব ৫)
- `perceptron update rule` row label still contains the internal word "perceptron" — confirm
  it stays internal-only per `roundtable.md` E-010/E-010-R1; not surfaced on any page yet

**Outstanding, not caused by this episode, flagged for reconciliation:**
- `roundtable.md` **E-008 is still status: OPEN** — `roadmap.md`'s পর্ব ৫ block (lines 102–120)
  has no scale/normalisation content in its `teaches:` line. OL-02's re-commit in this episode
  now has no documented destination beat.
- `series/glossary.md`'s `scale` entry (lines 172–180) says *"দুবার প্রতিশ্রুত (OL-03) — পর্ব
  ৩-এ শোধ"* — this is stale against `state/open-loops.md`'s canonical numbering (RULING-1),
  where scale is OL-02, due পর্ব ৫, and পর্ব ৩ only partially pays it. `roadmap.md`'s own OL
  table (lines 9–15) also numbers scale as OL-03 due পর্ব ৩, conflicting with
  `open-loops.md`'s OL-02/due-৫. Recommend memory-keeper update both `glossary.md` and
  `roadmap.md`'s OL table to match `open-loops.md` at Stage 10.

## Score

continuity: 94 / 100

One medium finding (C-01, a character-attribution slip inside a ভতু line, checkable against
পর্ব ২'s actual text). No blocking or high-severity F04–F08 violations. Every explicit ruling
from the episode's own roundtable (E-001 through E-021) — the η-folklore ban, the কাবুল
attribution fix, the figcaption honesty fix, the F06 foreshadow structure, the সীমানা/দাগ
vocabulary ruling — is faithfully implemented in the shipped prose.
