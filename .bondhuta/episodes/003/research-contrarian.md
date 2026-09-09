# Episode 3 — Contrarian Research Report

Target premise (verbatim, from the task):
> "হ্যাঁ, বাবুলের জন্য weight বদলালে আবুলের শেখাটা সত্যিই নড়ে যায় — interference বাস্তব।
> কিন্তু নড়া মানে মোছা নয়। সবাই যেটাতে একমত সেটা জমতে থাকে, আর যেটাতে দ্বিমত সেটা
> কাটাকাটি হয়ে যায় — তাই বারবার epoch চালালে শেষমেশ convergence আসে।
> আর পর্ব ২-এর নিয়মে একটা η নিঃশব্দে বসে ছিল যার মান ছিল 1। η ছোট করলে প্রতিটা ধাপ
> ছোট হয়, তাই পুরনো শেখা কম নড়ে।"

All arithmetic below is my own hand computation from পর্ব ২'র exact dataset
(`NeuralNetworkLearning.tsx`), independently reproduced, not taken from the printed page.

> **Correction notice (post-L1-challenge):** F-01's original evidence block contained an
> arithmetic slip (a mis-added sum in my own hand-simulated Epoch 3 at η=0.5), which produced
> a false "converges in 3 epochs, কাবুল flips" result. @orchestrator ran the same trace as
> executable code (logged as roundtable E-003) and got 6 epochs, final W=[−3.5, 2.45, 1.90,
> 1.15], কাবুল never in error. I independently re-derived every step of that corrected trace
> by hand and it is fully consistent — see the walk-through below. F-01's conclusion is
> unchanged; the evidence for it is rebuilt entirely on the corrected, orchestrator-verified
> numbers.

---

## Findings, ranked by damage

### F-01 — "η ছোট করলে ... পুরনো শেখা কম নড়ে" is folklore imported from the zero-init perceptron; it is false as a general mechanism on পর্ব ২'র own (nonzero-start) dataset
attack-type: comfortable lie / stale fact imported from the wrong theorem
severity: **blocking** (this is the episode's central payload — OL-04 + the η reveal)

**The claim as it will land on the page:** smaller η ⇒ gentler nudge ⇒ prior learning is
better protected — implying that shrinking η is a *safe, monotonic, protective* dial that
makes old learning stick around more.

**The one rigorous fact in perceptron theory, and exactly where it applies:**

When training starts from **W₀ = 0**, the entire weight trajectory scales linearly with η —
`sign(η·Wₖ·X) = sign(Wₖ·X)` for any η > 0 — so the sequence of examples misclassified, the
number of mistakes, and the number of epochs to convergence are all **exactly independent of
η**. This is precisely why Novikoff's mistake-bound proof (R²/γ², independent of η) is always
stated for W₀ = 0 — η cancels out of the geometry. Source: Novikoff, A.B.J. (1962), "On
convergence proofs on perceptrons," *Proc. Symposium on the Mathematical Theory of Automata*,
Vol. 12, pp. 615–622; standard restatements at
https://www.cis.upenn.edu/~danroth/Teaching/CS446-17/LectureNotes/04-Lec_p2.pdf and
https://svivek.com/teaching/machine-learning/lectures/slides/perceptron/perceptron-mistake-bound.pdf.

I confirmed this directly on পর্ব ২'র dataset, starting from **W₀ = [0,0,0,0]** instead of the
real initial guess: with η = 1, epoch 1 ends at W = [0, 0.30, 0.55, −0.70] and epoch 2 has
zero errors on all four students (converged). With η = 0.5, epoch 1 ends at
**W = [0, 0.15, 0.275, −0.35] — exactly half** of the η = 1 result, and epoch 2 again has zero
errors (converged in the same number of epochs). Same mistakes made, same students
misclassified in the same order, only the magnitude of W differs — proportionally. From a
zero start, η provably changes *nothing* about which old learning survives; it is
inconsequential, not protective.

**পর্ব ২ does not start from zero.** It starts from the guessed
`W₀ = [-3.0, 2.0, 1.0, 3.0]`. This is where the invariance breaks — and where my first attempt
to demonstrate that contained an arithmetic error that @orchestrator caught (roundtable
E-003) and I have now independently re-verified by hand, step by step:

```
η = 1 (পর্ব ২, as printed) — converges in 6 epochs, final W = [-3.0, 3.40, 3.10, 0.70]

η = 0.5, same dataset, same order, same W₀ = [-3.0, 2.0, 1.0, 3.0]:
Epoch 1: আবুল sum=-0.25 Err=+1 → W=[-2.5, 2.30, 1.475, 3.10]
         বাবুল sum=+1.57 Err=-1 → W=[-3.0, 2.15, 1.275, 2.65]
         কাবুল sum=+1.66 Err=0  · দাবুল sum=-1.46 Err=0
Epoch 2: আবুল sum=+0.03 Err=0 · বাবুল sum=+0.54 Err=-1 → W=[-3.5, 2.0, 1.075, 2.2]
         কাবুল sum=+0.55 Err=0 · দাবুল sum=-2.17 Err=0
Epoch 3: আবুল sum=-0.84 Err=+1 → W=[-3.0, 2.30, 1.55, 2.30]
         বাবুল sum=+0.38 Err=-1 → W=[-3.5, 2.15, 1.35, 1.85]
         কাবুল sum=+0.66 Err=0 · দাবুল sum=-2.18 Err=0
Epoch 4: আবুল sum=-0.56 Err=+1 → W=[-3.0, 2.45, 1.825, 1.95]
         বাবুল sum=+0.22 Err=-1 → W=[-3.5, 2.30, 1.625, 1.50]
         কাবুল sum=+0.77 Err=0 · দাবুল sum=-2.18 Err=0
Epoch 5: আবুল sum=-0.28 Err=+1 → W=[-3.0, 2.60, 2.10, 1.60]
         বাবুল sum=+0.06 Err=-1 → W=[-3.5, 2.45, 1.90, 1.15]
         কাবুল sum=+0.88 Err=0 · দাবুল sum=-2.19 Err=0
Epoch 6: all four Err=0 → CONVERGED. Final W = [-3.5, 2.45, 1.90, 1.15]
```

(My original submission incorrectly summed Epoch 3's আবুল step as −3.5+1.20+1.02125+0.44 =
+0.16, when the correct sum of those four terms is −0.83875 ≈ −0.84 — a plain addition error
that made আবুল look "already correct" and the whole run look converged three epochs early. I
have re-added every line above by hand and it matches @orchestrator's executable trace and
@research-deep's independent Epoch-1 hand-check exactly.)

**The corrected result:** with পর্ব ২'র real, nonzero starting weights, **η = 1 and η = 0.5
both take exactly 6 epochs to converge — but land on genuinely different final weights**:
`[-3.0, 3.40, 3.10, 0.70]` vs. `[-3.5, 2.45, 1.90, 1.15]`. Neither the "smaller η converges
faster" claim nor the "কাবুল flips" claim I originally reported survive — I retract both.
What *does* survive is the more basic and, for this episode, more important point: **η
changes which final weight vector the network lands on**, not just how big the steps feel
along the way. Concretely, the understanding-weight lands at 3.10 (η=1) vs. 1.90 (η=0.5), and
the attendance-weight at 0.70 (η=1) vs. 1.15 (η=0.5) — both are valid solutions that correctly
classify all four students, but they are not "the same lesson, gentler." η here is best
understood as **controlling how fast the accumulated data-driven corrections overrule the
fixed, arbitrary initial guess** — a small η lets the initial guess dominate longer before the
data's pull takes over, not a mechanism that "protects old learning" from later students.

**Why this matters for the episode:** if ভতু says "η ছোট করলে ধাপ ছোট হয়, তাই পুরনো শেখা কম
নড়ে" as a general protective mechanism, a reader will form the belief *"smaller η just makes
everything the same but gentler/slower, arriving at the same place."* That belief is false —
demonstrated above on পর্ব ২'র exact dataset — and it is exactly the belief that real
continual-learning research warns against: Kirkpatrick et al. (2017, "Overcoming catastrophic
forgetting in neural networks," PNAS, arXiv:1612.00796) had to build importance-weighted
*per-parameter* learning-rate reduction (EWC) precisely because a *uniform* small learning
rate is not sufficient to protect old knowledge in general networks — and follow-up work found
even EWC unreliable (see e.g. https://arxiv.org/pdf/2205.09029,
https://www.inference.vc/comment-on-overcoming-catastrophic-forgetting-in-nns-are-multiple-penalties-needed-2/).
This is a genuine confident-reversal source: mainstream continual-learning literature treats
"just shrink the learning rate" as an inadequate, sometimes-doesn't-even-help fix, not a
proven protective law.

**What the episode must do:** state only the trivially true, local claim — *"একটা single
update-এর আকার সরাসরি η-এর সমানুপাতিক (ΔW = η·Error·X), তাই η ছোট মানে সেই একটা ধাপ ছোট"* —
and connect it honestly to what small η actually does here: *"η ছোট করলে শুরুর আন্দাজ-করা W-কে
data ধীরে ধীরে ওভাররুল করে, একলাফে না।"* It must **not** claim that smaller η makes the final
answer the same-but-gentler, or that it protects specific prior learning from later
interference — both are false on the episode's own numbers.

---

### F-02 — "বারবার epoch চালালে শেষমেশ convergence আসে" is false as an unconditional law
attack-type: invisible precondition / confident reversal
severity: high

**The trap:** the sentence as given has no qualifier — it reads as a general property of
"running epochs," when it is in fact a property of *linearly separable data only* (a term
the brief forbids until পর্ব ৫). Source: the Perceptron Cycling Theorem — "if the training
data is not linearly separable, then the Perceptron learning algorithm will eventually repeat
the same set of weights and therefore enter an infinite loop" (documented at
https://web.engr.oregonstate.edu/~huanlian/teaching/ML/2024fall/unit2/convergence.html and
https://www.geeksforgeeks.org/deep-learning/perceptron-convergence-theorem-in-neural-networks/,
tracing to Rosenblatt 1958 / Novikoff 1962 / Block 1962). On non-separable data the algorithm
does not slow down, drift, or approximate — it **cycles forever**, revisiting the same
weight vectors.

**Damage if shipped unconditionally:** a reader who internalizes "epoch চালাও, convergence
আসবেই" will, in a later episode or in their own experiments (must-not-teach-yet section
literally schedules the counterexample for পর্ব ৪–৫, and XOR for পর্ব ৫), be surprised in a
way that reads as the show having lied to them, not as new information.

**Fix:** brief.md's own foreshadow paragraph already anticipates this ("convergence had a
condition attached... there are datasets where η being small does not help at all — the
neuron never stops") and explicitly forbids naming the condition or counterexample. That is
fine *as a deferral*, but only if the episode's convergence sentence is scoped
("**এই ডেটাসেটে** বারবার epoch চালালে..." / "আমাদের চারজনের ডেটাতে...") rather than stated as
a bare universal law. An unscoped sentence is the F-02 failure mode; a scoped one is not.

---

### F-03 — The brief's own figure analogy ("tug-of-war on a single weight") produces a specific, wrong belief about which weights move
attack-type: the analogy that betrays
severity: high (this is the mandated deliverable — the analogy-breaking moment)

**analogy** (brief.md figure-plan): a number line, আবুল pushing right, বাবুল pulling left,
net drift — visualized on **one** weight.

**holds-for:** it correctly conveys that two examples can push the *same* weight in opposite
directions across an epoch, and that the net position after both pushes is what survives —
this is literally what happens to, e.g., w₀ in Epoch 1 (−3.0 → −2.0 → −3.0).

**breaks-at:** a tug-of-war, by construction, is a contest over **one rope** (one weight).
But every real update in `W_new = W + Error × X` moves **all four components of W
simultaneously in a single vector step**, driven by that one student's entire X vector —
including x₀ = 1 (bias), which every single student tugs on every single time regardless of
whether that student is "about" bias at all. There is no such thing in this algorithm as a
student who only tugs "their" weight and leaves the others alone.

Verify on পর্ব ২'র own Epoch 1 numbers: আবুল pushes w₀: −3.0→−2.0, w₁: 2.0→2.60, w₂: 1.0→1.95,
w₃: 3.0→3.20 — **all four move**, not just "আবুলের feature." বাবুল then pulls all four again:
w₀: −2.0→−3.0 (a **full, exact** reversal, landing back at the original value), w₁:
2.60→2.30 (partial reversal, net gain over original survives), w₂: 1.95→1.55 (partial
reversal, net gain survives), w₃: 3.20→2.30 (**overshoots past** the original 3.0 — বাবুলের
pull does not just "cancel" আবুলের push on w₃, it drives w₃ below where it started).

**wrong-belief-it-produces:** *"প্রতিটা student মূলত তার নিজের সবচেয়ে গুরুত্বপূর্ণ feature-এর
weight-টাকেই টানে, বাকি weight গুলো অক্ষত থাকে"* (each student mainly tugs the weight tied to
their distinguishing feature; the rest stay untouched) — false, every component of X moves
together in lockstep on every mistake. A second wrong belief the tug-of-war invites:
*"দুইজনের বিপরীত টান মানেই একটা নিরপেক্ষ মাঝামাঝি জায়গায় থিতু হওয়া"* (opposing pulls settle
to a neutral midpoint) — false for w₃, where the second pull overshoots past the starting
point entirely.

**what the episode must do:** if the tug-of-war figure ships, it must show (even in one
panel, even briefly in caption text) that the SAME two examples are simultaneously pulling
on the *other* weights too, and that the "net drift" is not always a partial, midpoint-ish
cancellation — sometimes the later update wins outright and overshoots. Per RULING-4
(brief.md), any analogy পর্ব ৩ introduces must be bounded inside পর্ব ৩ (F09) — this bounding
is exactly what discharges that obligation.

---

### F-04 — ÷100 (input scaling) and η are NOT the same knob, because ÷100 was applied asymmetrically (bias x₀ untouched)
attack-type: the analogy that betrays / invisible precondition
severity: medium-high (directly threatens must-teach-partially item OL-02)

The brief plans to teach "why input scale sets update magnitude" as the partial OL-02
payment, in the same breath as η — both framed as "controls how big one nudge is." But look
at what ÷100 actually did in পর্ব ২: x₁, x₂, x₃ were divided by 100 (percentages → 0–1), while
**x₀ is defined to always equal 1**, untouched by any scaling scheme (`(w₀ × 1 = w₀, কাজেই
কিছু বদলায় না)`, line 148). So ÷100 shrank the update magnitude for w₁, w₂, w₃ by 100× while
leaving the update magnitude for the bias term w₀ completely unchanged (still `η·Error·1`).
η, by contrast, uniformly shrinks the update for **every** component, bias included.

**wrong-belief-it-produces:** *"÷100 আর η ছোট করা একই জিনিস — যেকোনো একটা করলেই যথেষ্ট"*
(scaling inputs down and shrinking η are interchangeable — either one suffices). False: ÷100
changes the *relative* step-size ratio between bias and features; η changes *all* step
sizes uniformly. A reader who conflates them will misjudge what happens to the bias term
specifically when only inputs are rescaled (a live issue, since w₀'s early convergence
behavior in পর্ব ২ — e.g., its exact round-trip in Epoch 1 — is itself a direct consequence of
x₀ being untouched by scaling).

**fix:** ভতু must not present ÷100 and η as two versions of the same lever. If both are
mentioned in the same breath, the episode should note explicitly that ÷100 acted only on
x₁,x₂,x₃, never on the bias input.

---

### F-05 — "catastrophic forgetting … grown-up version of your question" risks a category error the brief itself half-sees
attack-type: misattribution / analogy that betrays
severity: medium (brief already fences this: "naming honestly is allowed; explaining it is
not" — so the risk is in the *naming*, not an explanation the episode won't give)

McCloskey & Cohen (1989, "Catastrophic interference in connectionist networks: The sequential
learning problem," *Psychology of Learning and Motivation*, Vol. 24, pp. 109–165, Elsevier)
defined the phenomenon specifically for **sequential task learning** — task A's weights get
overwritten while training on task B, where A's data is *no longer present* during B's
training. The standard mitigation across the field (rehearsal/replay, interleaved training)
is literally to bring old data back into the training mix — see e.g. van de Ven et al. 2024
survey (arXiv:2403.05175) and Kirkpatrick et al. 2017 (arXiv:1612.00796).

পর্ব ২–৩'র setup is the **opposite regime**: one small, stationary, i.i.d. dataset, revisited
in full every single epoch, on a single linear threshold unit — this is already fully
interleaved/rehearsed training, which is precisely the antidote real catastrophic-forgetting
research prescribes. So মোটুর interference-and-recovery story here is resolved *because* all
four students keep reappearing every epoch; real catastrophic forgetting is dangerous
*because* the old task's examples are gone by the time the new task trains.

**wrong-belief-it-produces if named carelessly:** *"catastrophic forgetting-ও তো এরকম —
যথেষ্ট epoch চালালেই ঠিক হয়ে যায়"* (catastrophic forgetting is just this same wobble; enough
epochs fix it too) — false, and dangerous, because it's the opposite of what the field found:
even sophisticated per-parameter learning-rate protection (EWC) is inconsistently effective,
and naive continued training over only the *new* task's data does not recover old-task
performance (arXiv:2205.09029; https://www.inference.vc/comment-on-overcoming-catastrophic-forgetting-in-nns-are-multiple-penalties-needed-2/).

**the maximally honest one-line version:** *"এইটা সেই একই প্রশ্নের বড় ভাই — কিন্তু ওখানে
পুরনো data-টাই আর হাতে থাকে না, তাই সমাধানটা অনেক কঠিন।"* (Name it, and name the one axis on
which it's harder — data no longer being available — without explaining mechanism.) This
keeps the promise honest without stealing later material, and it inoculates the reader
against exactly the wrong belief above.

---

### F-06 — বাবুল stays *wrong* for four consecutive epochs (1–4) before settling — the reassurance "নড়া মানে মোছা নয়" needs a patience clause
attack-type: invisible precondition
severity: medium

**Measured from the η = 1 run (পর্ব ২ as printed), confirmed against @orchestrator's
independent trace in E-003:** বাবুল has Error ≠ 0 in epochs 1, 2, 3, **and** 4 — four straight
epochs of being reclassified wrong and re-corrected — before finally landing on Error = 0 from
epoch 5 onward. Meanwhile কাবুল, which was *correct* in epoch 1 by coincidence, becomes
*wrong* in epoch 2 purely because of বাবুলের epoch-1 update, and needs one correction before
settling. (This finding is unaffected by the F-01 correction above — it was never based on
the η=0.5 run, only on পর্ব ২'র own printed η=1 numbers, which I re-audited line by line and
found fully correct; see the arithmetic audit below.)

This does not break "নড়া মানে মোছা নয়" — both examples do eventually settle, and no example
oscillates forever, consistent with convergence for separable data. But if the episode's
prose implies settling is fast/clean ("সবাই যেটাতে একমত সেটা জমতে থাকে... তাই বারবার epoch
চালালে শেষমেশ convergence আসে" reads as smooth accumulation), a reader will be surprised that
বাবুল needed 4 of the total 6 epochs to lock in. This is not a false claim, but an
under-stated precondition: "মোছে না" is compatible with "নড়তেই থাকে বহু epoch ধরে, তারপর
থামে" — the episode should not imply single-epoch or few-epoch settling as the norm.

---

## Arithmetic audit of পর্ব ২

I recomputed every printed sum for all 6 epochs, all 4 students, from scratch against
`X = [1, x₁, x₂, x₃]` and the evolving `W`, using the exact dataset printed in
NeuralNetworkLearning.tsx (lines 552–581). This audit concerns only পর্ব ২'র printed η = 1
run and is unrelated to the F-01 correction above.

**Epoch 1 (full recompute):**
- আবুল: sum = −3.0(1) + 2.0(0.60) + 1.0(0.95) + 3.0(0.20) = −3.0+1.20+0.95+0.60 = **−0.25** ✓ matches. Error=+1, W→[−2.0,2.60,1.95,3.20] ✓.
- বাবুল: sum = −2.0(1)+2.60(0.30)+1.95(0.40)+3.20(0.90) = −2.0+0.78+0.78+2.88 = **2.44** ✓. Error=−1, W→[−3.0,2.30,1.55,2.30] ✓.
- কাবুল: sum = −3.0+2.30(0.80)+1.55(0.85)+2.30(0.70) = −3.0+1.84+1.3175+1.61 = **1.7675 ≈1.77** ✓, Error=0, no update ✓.
- দাবুল: sum = −3.0+2.30(0.20)+1.55(0.25)+2.30(0.30) = −3.0+0.46+0.3875+0.69 = **−1.4625 ≈ −1.46** ✓, Error=0 ✓.
End-of-epoch-1 W = [−3.0, 2.30, 1.55, 2.30] ✓ matches printed value.

**Epoch 2 (spot check, full recompute):**
- আবুল: −3.0+2.30(0.60)+1.55(0.95)+2.30(0.20) = −3.0+1.38+1.4725+0.46 = **0.3125≈0.31** ✓.
- বাবুল: −3.0+2.30(0.30)+1.55(0.40)+2.30(0.90) = −3.0+0.69+0.62+2.07 = **0.38** ✓. W→[−4.0,2.0,1.15,1.40] ✓.
- কাবুল: −4.0+2.0(0.80)+1.15(0.85)+1.40(0.70) = −4.0+1.60+0.9775+0.98 = **−0.4425≈−0.44** ✓. W→[−3.0,2.80,2.0,2.10] ✓.
- দাবুল: −3.0+2.80(0.20)+2.0(0.25)+2.10(0.30) = −3.0+0.56+0.50+0.63 = **−1.31** ✓.
End-of-epoch-2 W = [−3.0, 2.80, 2.00, 2.10] (not printed explicitly, but internally consistent).

**Epoch 3:** আবুল sum=−3.0+2.80(.60)+2.0(.95)+2.10(.20)=−3.0+1.68+1.90+0.42=**1.00** ✓. বাবুল sum=−3.0+2.80(.30)+2.0(.40)+2.10(.90)=−3.0+0.84+0.80+1.89=**0.53** ✓ → W→[−4.0,2.50,1.60,1.20] ✓. কাবুল sum=−4.0+2.50(.80)+1.60(.85)+1.20(.70)=−4.0+2.0+1.36+0.84=**0.20** ✓. দাবুল sum=−4.0+2.50(.20)+1.60(.25)+1.20(.30)=−4.0+0.50+0.40+0.36=**−2.74** ✓.

**Epoch 4:** আবুল sum=−4.0+2.50(.60)+1.60(.95)+1.20(.20)=−4.0+1.50+1.52+0.24=**−0.74** ✓ → W→[−3.0,3.10,2.55,1.40] ✓. বাবুল sum=−3.0+3.10(.30)+2.55(.40)+1.40(.90)=−3.0+0.93+1.02+1.26=**0.21** ✓ → W→[−4.0,2.80,2.15,0.50] ✓. কাবুল sum=−4.0+2.80(.80)+2.15(.85)+0.50(.70)=−4.0+2.24+1.8275+0.35=**0.4175≈0.42** ✓. দাবুল sum=−4.0+2.80(.20)+2.15(.25)+0.50(.30)=−4.0+0.56+0.5375+0.15=**−2.7525≈−2.75** ✓.

**Epoch 5:** আবুল sum=−4.0+2.80(.60)+2.15(.95)+0.50(.20)=−4.0+1.68+2.0425+0.10=**−0.1775≈−0.18** ✓ → W→[−3.0,3.40,3.10,0.70] ✓. বাবুল sum=−3.0+3.40(.30)+3.10(.40)+0.70(.90)=−3.0+1.02+1.24+0.63=**−0.11** ✓. কাবুল sum=−3.0+3.40(.80)+3.10(.85)+0.70(.70)=−3.0+2.72+2.635+0.49=**2.845≈2.85** ✓. দাবুল sum=−3.0+3.40(.20)+3.10(.25)+0.70(.30)=−3.0+0.68+0.775+0.21=**−1.335≈−1.34** ✓.

**Epoch 6:** W unchanged from end of epoch 5 = [−3.0,3.40,3.10,0.70]. আবুল sum=−3.0+3.40(.60)+3.10(.95)+0.70(.20)=−3.0+2.04+2.945+0.14=**2.125≈2.13** ✓; other three unchanged from epoch 5 since W is identical → −0.11, 2.85, −1.34 ✓, all Error=0 → converged.

**Verdict: every printed number in পর্ব ২, across all 6 epochs, checks out exactly.** No
arithmetic errors found. পর্ব ৩ can safely build on these numbers as ground truth. This also
confirms পর্ব ২'র dataset is genuinely linearly separable — the converged W = [−3.0, 3.40,
3.10, 0.70] correctly classifies all four students, matching the callback in brief.md.

I also independently confirmed that the "one epoch = 4 iterations" definition, the online-
learning claim (each student uses the most recently updated W, not the epoch-start W), and
the `w₀ = −threshold`, `x₀ = 1` bias derivation are all internally consistent and standard —
no error found in these mechanics.

---

## Misconceptions and their one-sentence antidotes

1. **"η ছোট মানে training নিরাপদ, পুরনো শেখা রক্ষা পায়"** (general law) →
   antidote: *"η সরাসরি শুধু একটা single ধাপের আকার ঠিক করে; পুরো ট্রেনিং শেষে কোন W-এ গিয়ে
   থামবে সেটা η, data, আর শুরুর W — তিনটে মিলিয়ে ঠিক হয়, শুধু η দিয়ে না।"*
2. **"যেকোনো dataset-এ epoch চালাতে থাকলে convergence আসবেই"** →
   antidote: *"আমাদের এই চারজনের dataset-এ এটা ঘটলো — সব dataset-এর জন্য এটা সত্যি, এমন প্রতিশ্রুতি
   এখনো দিচ্ছি না।"*
3. **"প্রতিটা student শুধু নিজের গুরুত্বপূর্ণ ফিচারের weight টানে"** (from the tug-of-war figure) →
   antidote: caption/line noting every update moves **সব কটা** weight simultaneously,
   bias-সহ, নির্দিষ্ট student-এর পুরো X vector দিয়ে।
4. **"÷100 আর η ছোট করা একই কাজ করে"** →
   antidote: one line noting ÷100 বাদ দিয়েছিল শুধু x₁,x₂,x₃-কে, x₀=1 কে না — তাই দুটো এক জিনিস না।
5. **"catastrophic forgetting ব্যাপারটাও যথেষ্ট epoch দিলে এমনিই ঠিক হয়ে যাবে"** →
   antidote: *"বড় নেটওয়ার্কে আসল সমস্যা হলো পুরনো ডেটাটাই তখন আর হাতে থাকে না — তাই শুধু বেশি
   epoch চালানো সেখানে কাজ করে না।"*
6. **"একবার কারো classification ঠিক হয়ে গেলে সেটা এমনি থেকে যায়"** (from কাবুলের case, correct
   in epoch1, wrong in epoch2) →
   antidote: *"একবার ঠিক মানেই চিরকাল ঠিক না — পরের কারো আপডেট আবার ভুল করে দিতে পারে, যতক্ষণ না
   পুরো dataset স্থির হয়ে যায়।"*
7. **"η ছোট করলে convergence তাড়াতাড়ি বা দেরিতে হবে, এটা predictable"** →
   antidote: *"পর্ব ২'র শুরুর W থেকে η=1 আর η=0.5 — দুটোই ৬ epoch লাগে, কিন্তু দুটো আলাদা জায়গায়
   গিয়ে থামে। η পাল্টালে গতি না, গন্তব্যই পাল্টে যেতে পারে।"*

---

## Clauses that survived, and their exact conditions

- **"বাবুলের জন্য weight বদলালে আবুলের শেখাটা সত্যিই নড়ে যায় — interference বাস্তব।"**
  Survives fully. Verified directly in the arithmetic audit (Epoch 1: আবুলের push, then
  বাবুলের pull on the very same W). No condition needed — this is just true, and it is the
  episode's strongest, most concretely demonstrable claim.

- **"নড়া মানে মোছা নয়"** (for THIS dataset, run to completion). Survives, with the F-06
  caveat: settling can take several epochs (বাবুল needs 4), and per-component movement is
  not simple partial cancellation (w₃ overshoots past its start in Epoch 1) — so the
  reassurance holds as "eventually stabilizes, no permanent erasure," not as "gently and
  quickly self-corrects."

- **The arithmetic itself (পর্ব ২'র printed η=1 run).** I could not find a single discrepancy
  across all 6 epochs, 4 students, all intermediate weight vectors. পর্ব ৩ inherits correct
  numbers. (My own supplementary η=0.5 hand-simulation was not error-free on first attempt —
  see the F-01 correction notice at the top of this file — but পর্ব ২'র own printed numbers,
  which is what পর্ব ৩ actually builds on, were correct throughout and were never in
  question.)

- **The dataset's separability / পর্ব ২'র convergence claim, scoped to this dataset.**
  Survives — verified the final W classifies all four students correctly. The attack only
  lands against an *unscoped*, general statement of "epoch চালালেই convergence আসে" (F-02),
  not against the specific factual claim that these four students' data converged in 6
  epochs.

- **"একটা single update-এর আকার η-এর সমানুপাতিক"** (ΔW = η·Error·X). Survives unconditionally
  — this is a tautology from the update rule itself, true regardless of W₀, order, or
  separability. This is the only part of the η claim that should ship as stated; the leap
  from "one step is smaller" to "therefore old learning is protected, or convergence is
  faster/slower in a predictable way" (F-01) is what does not survive.

- **Bias derivation, `w₀ = −threshold`, `x₀ = 1`, epoch/iteration terminology, online-learning
  definition.** All re-checked against the tsx source; all internally consistent, no
  contradiction found, safe for পর্ব ৩ to build on as settled.

- **What I deliberately did not attack:** I did not try to prove linear separability or XOR
  language should appear — the brief correctly reserves those for পর্ব ৪–৫, and omitting them
  here is by design, not an error. I also did not attack the "না-নামানো" treatment of
  perceptron/decision-boundary vocabulary, for the same reason.
