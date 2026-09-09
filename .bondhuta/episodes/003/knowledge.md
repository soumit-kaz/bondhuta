# Knowledge architecture — পর্ব ৩: পুরনো শেখা কি মুছে যায়?

owner: `@knowledge-architect`
inputs read: brief.md, research.md, orchestrator-verification.md, roundtable.md (E-001–E-005),
state/concepts.md, state/open-loops.md, series/audience.md, series/roadmap.md,
src/pages/neural-network/NeuralNetworkLearning.tsx (all 843 lines)

---

## The one thing

> **একজনের ভুল শোধরালে বাকি সবার score সত্যিই নড়ে — ঠিক `η · Error · (দুজনের X গুণফল)` পরিমাণে
> — কিন্তু নড়া মানে মোছা নয়, কারণ প্রতি epoch-এ প্রত্যেকে ফিরে এসে আবার নিজের কথা বলে।**

Everything else in this episode is scaffolding for that sentence. The Bangla coinage
**নড়ে, কিন্তু মোছে না** is the retained phrase — but it must be *earned by arithmetic on
পর্ব ২'s printed numbers*, never asserted as reassurance. If a draft states it before the
reader has watched 2.0525 fall to 0.3125, the episode has failed E-001.

---

## Cognitive load budget

```
new concepts this episode: 3
budget: 3
→ NO spare slot. The ceiling is hit exactly.
→ "input scale" is deliberately NOT a fourth concept — it is a rung of the η ladder
  (ΔW = η · Error · X: the step size is set by η AND by X; that is one product the
  reader is already holding, read twice, not a second idea).
→ Any attempt to add a fourth concept — dot-product-as-similarity, batch vs online,
  order-dependence of the final W, catastrophic-forgetting mechanism — is rejected in
  advance. See "Explicitly out of scope".
```

The three:

1. **interference** — PRIMARY. `Δscore_A = η · Error_B · (A·B)`
2. **নড়া ≠ মোছা** — PRIMARY. Why it settles anyway, honestly, without the forbidden vocabulary.
3. **η** — SECONDARY. Revealed as having always been 1, never imported.

Concepts that are *free* because they are new **names** for things already `taught`:

- **dot product** = the পর্ব ২ `WᵀX` operation with another student's `X` in place of `W`.
  Free ONLY if the writer anchors it that way in the same sentence it is introduced.
  If it arrives unanchored it becomes a fourth concept and the budget breaks.

---

## Depth ladder 1 — interference (PRIMARY)

```
surface:        একজনের জন্য weight বদলালে বাকি সবার score-ও বদলে যায়।       [include]

mechanism:      W_new = W + η · Error_B · B
                score_A(W_new) = W·A + η · Error_B · (B·A)
                ⟹ Δscore_A = η · Error_B · (A · B)
                Derived in three lines from পর্ব ২'s own rule, no new
                machinery.                                                  [load-bearing #1]

why-it-exists:  Not a design choice and not a bug — it is what "একটাই W সবার
                জন্য" mathematically costs. One weight vector serves four
                students; touching it for one touches it for all.           [include]

implementation: THE SPINE (E-004). পর্ব ২ Epoch 1→2, η = 1:
                  আবুল pre-update   : −0.25
                  আবুলের own update : −0.25 + 2.3025 = 2.0525   (পর্ব ২ printed 2.05)
                  বাবুলের update    : 2.0525 − 1.7400 = 0.3125  (পর্ব ২ printed 0.31)
                and 1.7400 IS আবুল·বাবুল — the reader computes it and watches
                it match. Both endpoints are already on পর্ব ২'s page; only
                the middle number is new.                                   [load-bearing #2]

                Integrity condition (may not be dropped): কাবুল and দাবুল had
                Error = 0 in Epoch 1 and আবুল had Error = 0 in Epoch 2, so
                বাবুল is the ONLY contributor between those two printed
                numbers. That is why the subtraction is exact and not
                approximate. Without this clause the worked example is a
                coincidence, not a demonstration.

structural fact: Every pair of these four has a strictly positive dot
                product (1.1925 to 2.8525). Reason: x₀ = 1 for everyone and
                every feature is a non-negative fraction, so
                A·B = 1 + (non-negative terms) ≥ 1. Zero interference is not
                rare here — it is structurally impossible.                  [include]
                This is the series' originality beat AND the payoff of পর্ব ২'s
                throwaway line "x₀ = 1 … শুধু দেখতে সুন্দর হয়". The cosmetic
                thing turns out to be the reason nobody can be independent.
                If compression bites, the DERIVATION may go; the CLAIM
                ("চারজনের কোনো জোড়াই শূন্য নয়") may not.

failure-mode:   An update fired by a CORRECT student changes nothing for
                anybody — Error_B = 0 ⟹ Δscore_A = 0 exactly. Interference
                only ever originates from a mistake.                        [include]
                Folded into the integrity condition above; carried as one
                clause, not a section.

misconception:  "বাবুল শুধু বাবুলের নিজের feature-এর weight-টা নাড়ায়" —
                FALSE (research F-03). Every update moves all four
                components at once, bias included, because x₀ = 1 is in
                every X. One clause, discharged by the vector form already
                on screen.                                                  [include]

tradeoff:       Could we avoid interference by giving each student their own
                weights?                                                    [defer → not in series]
                Cut, not deferred: answering it needs the idea of
                generalisation, which this series never sets up. It adds a
                word, not a prediction.

interview-edge: A·B read as a similarity measure; orthogonality as
                independence.                                               [CUT]
                Test applied: after reading it, what can the reader predict
                that they could not before? Nothing. They only gain the word
                "similarity". The number 1.7400 in its role — "exactly how
                much বাবুল moves আবুল" — carries the whole mechanism.
```

**Answer to judgement call C.** Keep the operation, keep the structural claim, keep the
`x₀ = 1` reason. Drop the similarity interpretation. The reader does need a name for
`A·B` (they will otherwise have no handle for it across three beats) and **dot product**
in Latin script is the right token — the audience file requires Googleable terms. But the
name is free only because it is the same `WᵀX` they did six times in পর্ব ২; the writer
must say so in the introducing sentence. `1.7400` alone cannot carry it: without the
general claim the reader concludes আবুল and বাবুল *happened* to clash, and gains no
prediction. With it, the reader can predict that any pair of these four will clash, always,
by a computable amount. That is the difference between an anecdote and a model.

---

## Depth ladder 2 — নড়া ≠ মোছা (PRIMARY)

```
surface:        নড়ে, কিন্তু মোছে না।                                        [include]
                Worthless on its own. It is the conclusion, not the content.

mechanism:      Two halves, both verifiable on পর্ব ২'s printed page:
                (a) An update fired by B ALWAYS helps B, guaranteed, because
                    Δscore_B = η · Error_B · (B·B) and B·B > 0 always. The
                    correction never fails its own author.
                (b) Everyone reappears in the very next epoch. So a student
                    who was damaged gets a turn and fires their own
                    correction. Damage is DEFERRED, not erased.
                (a) is why progress is real; (b) is why loss is temporary.   [load-bearing #3]

দাঁড়াও:         কাবুল, Epoch 1: sum = 1.7675, ✅ correct.
                কাবুল, Epoch 2: sum = −0.4425, ❌ WRONG.
                Cause: বাবুলের Epoch-2 update alone —
                  1.7675 − (1 × 1 × 2.2100) = −0.4425
                and −0.44 is exactly what পর্ব ২ printed.
                So মোটুর fear is not merely "damaged" — a correct answer was
                genuinely BROKEN by someone else's learning. The reader's
                fresh "নড়ে কিন্তু মোছে না" model is shown incomplete before
                it is repaired.                                             [load-bearing #4]
                (Resolution: কাবুল fires his own correction later in that same
                Epoch 2 and is correct again from Epoch 3 — 0.20, then 0.42,
                then 2.85. He came back.)

failure-mode:   It is NOT smooth and the episode must not imply it is
                (research §7 patience clause). Mistakes per epoch on পর্ব ২'s
                own printed page:
                  Epoch  1  2  3  4  5  6
                  ভুল    2  2  1  2  1  0
                Epoch 4 was WORSE than Epoch 3. আবুল, correct in epochs 2 and
                3, was wrong again in epoch 4 (sum = −0.74). বাবুল was wrong
                four straight epochs before settling.                        [folded into #4]
                This is the same load-bearing mark as দাঁড়াও — one beat, two
                pieces of evidence. Counted once.

why-it-exists:  It settles because, for THIS class of four, there exists a
                setting of the four weights that satisfies all four at once,
                and every correction is a step toward it — the part everyone
                agrees on builds up, the tugs they disagree on partly cancel
                and partly overshoot.                                        [include]
                Scoped, always: "আমাদের চারজনের ডেটায়" — never as a universal
                law (§7).

foreshadow:     "সেই সাজানো W একটা আছে — এটা আজ আমরা ধরে নিলাম, প্রমাণ করিনি।
                শর্তটার একটা নাম আছে, আর এমন ডেটাও আছে যেখানে neuron কোনোদিন
                থামে না।" Name neither.                                      [include]
                This is also the F06 guard: linear separability is `pending`
                and is being LEANED ON. Acknowledging it as an unstated
                condition converts a use into a foreshadow. If the draft
                asserts convergence without this acknowledgement, F06 fires.

proof:          The two-part race — progress accumulates linearly in the
                number of mistakes while the size of W can only grow like
                √(mistakes), so one outruns the other (research §3).        [defer → পর্ব ৫]

misconception:  "প্রতি epoch-এ ভুল কমে" — FALSE here, 2·2·1·2·1·0.          [folded into #4]

interview-edge: Order-dependence of the final W; a numeric mistake bound.    [CUT, §7 bans both]
```

**Answer to judgement call A — the single most important decision in this episode.**

**Chosen rung: `mechanism` (a)+(b) + `দাঁড়াও` + `failure-mode` + the one-sentence
`why-it-exists`. The √n race is deferred to পর্ব ৫.**

*What is lost at the rung below* ("assert that it settles and show it settling"): nothing is
gained at all — পর্ব ২ **already showed it settling**, in six printed epochs. Re-showing it is
a recap, which is F12, and it answers মোটুর question by reassurance, which is exactly what
E-001 forbids. The rung below is not a cheaper version of the argument; it is the absence of
the argument.

*What breaks at the rung above* (the full two-part race): three separate things.
1. **It cannot be told honestly under this episode's constraints.** Step one of the race is
   "every mistake is a step toward *some* answer that works for the whole class" — which
   presupposes such an answer exists. That presupposition **is** linear separability. It is
   `pending` in concepts.md, owned by পর্ব ৫, and forbidden by E-002. Delivered without its
   condition, the race *sounds* like a proof while being an assumption in disguise. A
   hand-wave that resembles a proof is worse than an honest assertion, and this series ships
   into a language with almost no correction mechanism (E-003's own reasoning).
2. **It needs an object the reader has no handle on.** "The size of the weight vector" is a
   norm. The reader has HSC algebra and matrices and no calculus. Building a norm, then a
   growth-rate comparison of n against √n, is two more concepts on top of a budget already
   at 3/3.
3. **It does not survive the line band.** The race needs its own section — roughly +100
   lines — and পর্ব ৩ must come in under 560 against পর্ব ২'s 843. The band independently
   confirms the same call.

*What the chosen rung buys the reader — the test that matters.* After this rung they can
**predict**, not merely recite:
- that a currently-correct student can become wrong again later (and they can check it
  against পর্ব ২'s own Epoch 4);
- that a correct student's turn changes nothing for anyone;
- the exact size of the damage one example does to another, from two feature vectors;
- that training which is going *backwards* this epoch is not necessarily broken.

That last one is the genuinely valuable, transferable prediction, and it does not need the
√n accounting to land. পর্ব ৫ inherits the race with its condition finally nameable, which
is where it becomes a proof instead of a gesture. That is a deferral with a destination, and
পর্ব ৫'s roadmap block already says `pays-off: পর্ব ৩-এর "কিছু dataset কখনো থামে না"`.

---

## Depth ladder 3 — learning rate η (SECONDARY)

```
surface:        পর্ব ২-এর নিয়মটা আসলে ছিল W_new = W + η · Error × X, আর
                η-এর মান আমরা নিঃশব্দে 1 ধরেছিলাম। লুকানো জিনিস, নতুন জিনিস
                নয়।                                                         [include]

mechanism:      η multiplies every component of ΔW uniformly — bias included.
                It is also the leading factor in Δscore_A = η · Error_B ·(A·B),
                so it scales the SIZE of interference and never its
                direction. This is the only safely tautological η statement
                (§4) and it is enough.                                       [include]

implementation: One hand-worked update at η = 0.5, on পর্ব ২'s Epoch-1 আবুল step:
                  W = [−3, 2, 1, 3], sum = −0.25, Error = +1
                  ΔW = 0.5 × [1, 0.60, 0.95, 0.20] = [0.50, 0.30, 0.475, 0.10]
                  W_new = [−2.50, 2.30, 1.475, 3.10]
                  আবুলের নতুন sum = 0.90125   (still > 0, still correct)
                Cross-check the reader can do themselves:
                  −0.25 + 0.5 × 2.3025 = 0.90125  ✓
                This single calculation exercises concept 1 AND concept 3
                simultaneously, and the cross-check is the reader watching
                the interference formula hold at η ≠ 1. Highest
                value-per-line in the episode.                               [include]

misconception:  "η ছোট করলে পুরনো শেখা কম নড়ে / বেশি সুরক্ষিত থাকে."
                BANNED (E-003, blocking). The kill argument, verifiable by
                the reader in one line and needing no unshown run:
                  সব weight অর্ধেক করে দিলে সব sum অর্ধেক হয় — কিন্তু চিহ্ন
                  বদলায় না। চিহ্ন না বদলালে y বদলায় না, Error বদলায় না,
                  কাজেই কোনো সিদ্ধান্তই বদলায় না।                            [load-bearing #5]
                Scope clause that MUST ride with it: this holds only if the
                starting W is scaled too.

honest-positive: পর্ব ২ did NOT scale its starting W. W₀ = [−3, 2, 1, 3] was
                our made-up hunch and η never touches it. So a smaller η
                makes the data's corrections smaller *relative to that fixed
                hunch* — it keeps our guess in charge longer. η protects our
                initial guess, not আবুলের শেখা.                              [include]
                Carried as a CLAUSE. The two-run comparison table
                (η=1 → [−3.0,3.40,3.10,0.70] vs η=0.5 → [−3.5,2.45,1.90,1.15])
                is DEFERRED — those are the only numbers in the episode the
                reader could not verify against a page they have read, and
                audience.md forbids leaving numbers unworked. The clause
                carries the whole idea; the table only proves we ran it.      [defer → পর্ব ১০]

why-it-exists:  The real reason η exists — controlling a step against a
                curved surface.                                              [defer → পর্ব ১০]

tradeoff:       "বড় η লাফিয়ে পেরিয়ে যায়, ছোট η ধীর।"                        [defer → পর্ব ১০]
                Not merely a budget cut — it is FALSE here. From a zero start
                both η converge in the same number of epochs. This is
                gradient-descent folklore and it must not appear.
                পর্ব ১০'s roadmap block already owns it as its LIMIT beat.

interview-edge: η as the step size on a slope; adaptive η.                   [defer → পর্ব ১০]
                পর্ব ১০ requires `learning rate η (৩)` and pays off
                "পর্ব ৩-এর η এখানে নতুন অর্থ পায়". Taking it now steals that.
```

**Answer to judgement call B — η stays, at exactly four rungs.**

The cut argument is real but it loses. η is not a second topic in this episode because **it
is already inside the primary formula**: `Δscore_A = η · Error_B · (A·B)`. Writing the spine
without η means either an unexplained symbol or a formula that cannot express the scale beat.
Revealing a factor the reader has been using for 843 lines without knowing it is also the
cheapest kind of teaching there is — no new idea enters working memory, a hidden one becomes
visible.

But keeping η carries an obligation, and this is the load-bearing part: **the moment the
reader learns η scales the size of the hit বাবুল lands on আবুল, they will derive the folklore
themselves.** "Make η small and আবুল gets hurt less" is one inference away, it is false, and
E-003 makes it blocking. So the misconception rung is not optional decoration — it is the
price of admission. If the compression editor ever proposes cutting the η misconception while
keeping η, the correct answer is **cut η entirely instead**. Half of this concept is not
shippable.

`why-it-exists`, `tradeoff` and `interview-edge` all go to পর্ব ১০, which the roadmap already
lists as requiring η from পর্ব ৩ and paying off its second meaning.

---

## Rung 4 — input scale (TERTIARY, partial payment of OL-02)

Not a fourth concept. A second reading of `ΔW = η · Error · X`, which is by then on screen.

```
surface:        Error ∈ {−1, 0, +1}, so the size of one step is set entirely
                by η and by the size of X. ÷100 was therefore not cosmetic —
                it set how hard every update hits.                           [include]

asymmetry:      x₀ is defined to be 1 and was never divided by 100. Only
                x₁, x₂, x₃ were. So ÷100 shrank the three feature steps by
                100× and left the bias step at exactly ±η.                    [include, conditional]
                CONDITIONAL-LOAD-BEARING: research §7 bans presenting ÷100 and
                η as two versions of the same lever. Because ΔW = η·Error·X
                puts both in one product, the episode WILL mention them
                together — and then this line becomes mandatory. It may only
                be cut if the entire scale beat is cut with it.

prediction:     With raw 0–100 inputs, one mistake moves w₁ by ±30 while w₀
                still moves by only ±1 — the bias can never keep up.
                Unscaled data does not just make numbers bigger, it destroys
                the balance between threshold and features.                   [include]

illustrative:   Raw বাবুল, W₀ = [−3, 2, 1, 3]: sum = 367, Error = −1,
                and the study weight goes 2 → −28 in one step, while the bias
                goes −3 → −4. (Verified: −3 − 1, 2 − 30, 1 − 40, 3 − 90.)     [compress]
                First thing to cut if the band is tight. One vivid number,
                but it is a hypothetical the reader cannot check against
                পর্ব ২.

re-commit:      ভতু must say out loud that the full normalisation story is
                still owed. Silent partial payment is F08 (RULING-2).
                OL-02 stays `open`, due পর্ব ৫.                               [load-bearing by ruling]
                See roundtable note: পর্ব ৫'s roadmap block does not currently
                mention scale. Flagged to @orchestrator / @memory-keeper.

full-treatment: normalisation properly.                                       [defer → পর্ব ৫]
```

**Answer to judgement call E — keep the asymmetry, but as a rung of the same product, not
a beat of its own.**

The version without the asymmetry ("update size is proportional to input size, properly in
পর্ব ৫") is a legitimate honest payment, and I would take it if it were cheaper. It is not
meaningfully cheaper: by the time this beat arrives, `x₀ = 1` has already been spotlighted
twice — once as the reason no pair of students can be independent, once as the reason every
update moves all four weights. The asymmetry rides on an already-paid idea, so it costs a
clause, not a concept. And it upgrades the reader's prediction from "numbers get big" to "the
bias becomes powerless to compete", which is the actual reason scaling matters. Additionally
§7 makes it mandatory the moment η and ÷100 share a sentence, which they will.

---

## Judgement call D — catastrophic forgetting

**One line. Confirmed, and it may not be reduced to zero, nor to a bare name.**

Zero is wrong because ভতু herself, in পর্ব ২, told the reader that "আজও বড় বড় গবেষকরা মাথা
ঘামান" about this question. If পর্ব ৩ answers "নড়ে কিন্তু মোছে না, চিন্তা নেই" and never says
why anyone still worries, ভতুর own পর্ব ২ line becomes retroactively oversold. The line
discharges a claim the teacher already made.

More than one line is wrong because there is no episode that owns the mechanism — the roadmap
ends at পর্ব ১২ with backprop and never returns to it. Explaining it would open a loop nobody
can close.

The line must contain the distinguishing fact or it is name-dropping: **in the dangerous
grown-up version, the old examples are gone by the time the new thing is learned. Here all
four students come back every single epoch — which is exactly why ours resolves.** That fact
does work: it tells the reader the boundary condition of today's happy answer.

Instruction to `@compression-editor`: cut the whole line, or keep the distinguishing fact.
Never keep the name alone. `[include]`

Instruction to `@episode-writer`: do **not** phrase it as "পরে দেখবো" or any variant. It
would create an open loop with no owner. "এটা আজকের বিষয় নয়" and stop.

---

## Load-bearing list (5 — the full allowance)

| # | concept | rung | why the episode fails without it | anchor |
|---|---|---|---|---|
| 1 | interference | mechanism: `Δscore_A = η · Error_B · (A·B)` | Without it মোটু gets reassurance instead of arithmetic — the exact failure E-001 forbids | E-001 |
| 2 | interference | implementation: 2.0525 → 0.3125 via 1.7400, plus the "কাবুল/দাবুল contributed nothing" integrity clause | This IS the episode; the orchestrator specified it and both endpoints are already on পর্ব ২'s page | E-004, verification §5 |
| 3 | নড়া ≠ মোছা | mechanism (a) an update always helps its own author, `B·B > 0`; (b) everyone returns next epoch | The two halves of the answer. Without (a) there is no progress; without (b) "not erased" is unsupported | E-001 |
| 4 | নড়া ≠ মোছা | দাঁড়াও + patience: কাবুল 1.7675 → −0.4425 (correct→wrong), and mistakes 2·2·1·2·1·0 | Without it the episode teaches a comforting fact instead of a model, and violates §7's patience clause | research §7 |
| 5 | η | misconception: smaller η does not protect old learning; scaling everything changes no decision | E-003 is blocking and the reader will self-generate the folklore the moment η's scaling role lands | E-003 |

No sixth. The conditional mark on the ÷100 asymmetry and the ruling-driven mark on the OL-02
re-commit are noted in place and are not counted here.

---

## Prerequisite check

Checked row by row against `state/concepts.md`.

| concept used | ledger status | verdict |
|---|---|---|
| neuron | taught (1, 2) | ok |
| weight | taught (1, 2) | ok |
| bias w₀ | taught (2) | ok — **deepened** here (cosmetic → structural). A deepen, not a redefinition; no F05 |
| bias input x₀ = 1 | taught (2) | ok — deepened, same note |
| weighted sum / `WᵀX` | taught (2) | ok — dot product must be anchored to this or it becomes untaught |
| matrix, transpose, matrix multiplication | taught (2) | ok |
| desired output d | taught (2) | ok |
| Error = d − y | taught (2) | ok |
| update rule `W_new = W + Error × X` | taught (2) | ok. **The ledger's row label contains the word "perceptron" — that label is internal. E-002 forbids the word on the page.** |
| epoch | taught (2) | ok — load-bearing #3(b) depends on it |
| iteration | taught (2) | ok |
| online learning | taught (2) | ok |
| convergence | taught (2) | ok — must be re-scoped ("আমাদের চারজনের ডেটায়"), not redefined |
| training | ledger says `teased`; RULING-3 says treat as **taught** | ok — do not re-define, F05 |
| feature scaling / normalisation | `teased` (1, 2) | partial payment here, explicitly re-committed. Stays `teased`, OL-02 open, due পর্ব ৫ |
| **learning rate η** | **`pending`** | **taught here.** This is the only pending concept promoted, and it is concept 3 |
| **linear separability** | **`pending`** | **NOT taught, and it is being leaned on.** The convergence argument presupposes a workable W exists. Resolved by the `foreshadow` rung: the condition is explicitly acknowledged as unstated and unnamed. Without that acknowledgement this is F06. This is the single sharpest prerequisite risk in the episode |
| dot product / inner product | absent from ledger | a new **name** for `WᵀX`, which is taught. Free — but only if anchored in the introducing sentence |
| decision boundary, XOR, layer, activation, loss, gradient, chain rule, backprop | pending, all forbidden | not used |

`@memory-keeper` at Stage 10: `learning rate` → `taught`, introduced 3. Add row
`interference` → `taught`, introduced 3. `training` row → `taught` (RULING-3).
`feature scaling` stays `teased`.

---

## Explicitly out of scope — with the episode that owns each

| kept out | owner | why the writer will drift into it |
|---|---|---|
| The √n-vs-n convergence accounting | পর্ব ৫ | research.md §3 is right there and reads like the "real" answer |
| The name of the condition (linear separability) | পর্ব ৫ | it is the natural next word after "একটা W আছে ধরে নিলাম" |
| A dataset that never converges | পর্ব ৫ | the LIMIT beat begs for an example |
| The word **perceptron** | পর্ব ৫ | it is in the concepts.md row label |
| What the four converged weights *draw* | পর্ব ৪ | this is the ending hook; naming the answer kills পর্ব ৪ |
| η as step size on a slope; big η overshoots; adaptive η | পর্ব ১০ | universally known folklore, and false here |
| The η=1 vs η=0.5 two-run comparison table | পর্ব ১০ | research §4 and verification §4 both foreground it |
| Full normalisation treatment | পর্ব ৫ (RULING-2) | the scale beat naturally wants to finish itself |
| Catastrophic forgetting mechanism, EWC, any mitigation | **nobody — named once, never promised** | one line invites a paragraph |
| Bounding পর্ব ১'s brain-neuron analogy | পর্ব ৮ | RULING-4 — doing it here steals পর্ব ৮ |
| Dot product as a similarity measure | **cut, no owner** | adds a word, not a prediction |
| Batch vs online updates | **cut, no owner** | "what if we updated after all four?" is the obvious next thought |
| Order-dependence of the final W | **cut** | §7 bans the claim in either direction |
| A numeric mistake bound | **cut** | §7; needs forbidden vocabulary |

---

## Banned inferences — traps a writer or planner will fall into

Each of these is a plausible sentence that is **false on this dataset**, checked against the
printed page. Flagged now because they are cheaper to prevent than to fact-check out.

1. **"নিজের update নিজেকেই সবচেয়ে বেশি সাহায্য করে."** FALSE.
   কাবুল·আবুল = 2.4275 > আবুল·আবুল = 2.3025. কাবুলের correction moves আবুলের score *more*
   than আবুলের own does. Say "an update always helps its author" (true, `B·B > 0`), never
   "helps its author most".
2. **"প্রতি epoch-এ ভুলের সংখ্যা কমে."** FALSE. 2, 2, 1, 2, 1, 0. Epoch 4 was worse than 3.
3. **"আবুলের লাভের ৭৪% বাবুল ফিরিয়ে নিল."** The 74% figure in E-004 and
   orchestrator-verification §2 does not reconcile: 1.7400 / 2.3025 = **75.6%** of the gain,
   or 84.8% of his standing at that moment. **Recommendation: use no percentage at all.**
   2.0525 → 0.3125, a drop of 1.7400, is stronger and unambiguous. Raised to @orchestrator.
4. **"কাবুল ভুল হলো বাবুলের epoch-1 update-এর জন্য."** research.md §6 says this; it is
   misattributed. কাবুলের Epoch-1 sum (1.7675) was **already computed with post-বাবুল-epoch-1
   weights**. The break is caused by বাবুলের **Epoch-2** update: 1.7675 − 2.2100 = −0.4425.
   Raised to @orchestrator.
5. **"η ছোট করলে পুরনো শেখা কম নষ্ট হয়."** E-003, blocking.
6. **"÷100 করাটা আসলে η ছোট করারই আরেক রূপ."** §7. They are different levers; x₀ is exempt
   from ÷100 and is not exempt from η.
7. **"এই W-ই সঠিক উত্তর."** §7 — the converged W is *an* answer, and it depends on the order
   আবুল→বাবুল→কাবুল→দাবুল.
8. **"বারবার epoch চালালে convergence আসে."** Must always be scoped to this dataset.

---

## Depth positions on structure (advisory to `@episode-planner`, not binding)

**The figure should plot আবুলের score, not a raw weight.** The brief suggests a tug-of-war on
one weight; research §7's analogy verdict then requires a bounding caption (all four weights
move; the net drift can overshoot past the start, e.g. w₃: 3.0 → 3.20 → 2.30). A score
number-line — `−0.25 → 2.0525 → 0.3125`, with the 1.7400 drop drawn as the long arrow —
carries the concept the episode is actually about, needs no bounding because it is a plot and
not an analogy, and removes the F-03 risk and the F09/RULING-4 obligation outright. Saves
roughly 15 lines and one failure mode. If the planner keeps the tug-of-war anyway, §7's
breaking sentence becomes mandatory.

**The ending must hand off to পর্ব ৪, not summarise.** The content-native next question:
*আমরা বারবার বললাম "চারজনের সবার জন্য কাজ করে এমন একটা W আছে" — কিন্তু একটা W "কাজ করে" মানে
ঠিক কী? চারটা সংখ্যা আসলে কী জিনিস আঁকছে?* That opens পর্ব ৪ (decision boundary) and carries
the unnamed condition forward to পর্ব ৫ at the same time. F12 is a live risk here — this
episode's subject invites a recap more than any other.

---

## Line budget — the band is a consequence of these decisions

Band: 420–560. পর্ব ২ was 843; this must not approach it.

| beat | lines |
|---|---|
| HOOK — মোটুর question, verbatim callback; "আজ উত্তর দেবো" | 30 |
| What would "নষ্ট হওয়া" even mean? Fix the quantity: আবুলের score | 25 |
| MECHANISM — derive `Δscore_A = η · Error_B · (A·B)` | 55 |
| Dot product as `WᵀX` with another X; the pair values; all positive; the x₀ = 1 reason | 50 |
| WORKED EXAMPLE (spine) — 2.0525 → 0.3125, with the integrity clause | 55 |
| দাঁড়াও — কাবুল 1.7675 → −0.4425, correct broken | 35 |
| RESOLUTION — B·B > 0; everyone returns each epoch; নড়া ≠ মোছা | 50 |
| HONESTY — 2·2·1·2·1·0; আবুলের Epoch-4 relapse; the unstated condition | 45 |
| Catastrophic forgetting, one line with the distinguishing fact | 15 |
| η revealed + the η = 0.5 worked update with cross-check | 55 |
| η misconception (the sign argument) + the honest-positive clause | 40 |
| Scale — ΔW = η·Error·X; x₀ exempt from ÷100; OL-02 re-commit to পর্ব ৫ | 40 |
| SVG figure | 40 |
| NEXT QUESTION → পর্ব ৪ | 25 |
| **total** | **≈ 560** |

**It fits — at the ceiling, with no slack.** It fits only because three things were already
taken out: the √n race (~100 lines), the two-run η table (~25), and the tug-of-war bounding
caption (~15). Pre-authorised compressions, in order, if the draft overruns:

1. the raw-scale illustrative number (2 → −28) — ~8 lines, `[compress]`
2. the pairwise table reduced to আবুলের row only — ~20 lines, `[compress]`
3. the `A·B ≥ 1` derivation, keeping the claim — ~12 lines, `[compress]`

Nothing on the load-bearing list, and nothing on the η misconception, may be taken without
asking me (loop L4).
