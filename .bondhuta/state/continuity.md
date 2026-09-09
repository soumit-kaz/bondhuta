# Continuity Ledger

## মোটু

**Knows:**
- neuron, input, output, threshold, weight, weighted sum, bias, bias input
- matrix, transpose, matrix multiplication
- desired output (d), Error = d − y
- perceptron update rule (W_new = W + Error × X), now with explicit η = 1
- epoch, iteration, online learning, convergence
- feature scaling (named, deliberately deferred)
- interference: how one student's update changes another's score (`Δsum_A = η · Error_B · (X_A · X_B)`)
- dot product (anchored to পর্ব ২'s `WᵀX` operation)
- learning rate η (revealed as hidden 1 in পর্ব ২'s algorithm)
- নড়া vs মোছা distinction (moved ≠ permanently erased)
- that a correct student's update changes nothing for anyone
- that every update helps its own author in direction but not necessarily enough
- that smaller η does not protect old learning (sign argument)
- that ÷100 set update size (not η; different levers)

**Does not know:**
- what the weights draw on paper
- the name of the convergence condition (linear separability)
- anything about layers, activations, loss, or gradients
- the mechanism of catastrophic forgetting (grown-up version with absent old data)

**Running threads:**
- worries about getting initial weight guesses right ("attendance-এর weight এত কম কেন" প্রশ্ন)
- now obsessed with a deeper question: does learning new data erase the learning from old data?

## ভতু

**Has promised:**
- to explain how neurons learn weights and threshold from data (OL-01, paid in episode 2)
- to give a full episode ("পুরো একটা পর্ব জুড়ে") to explain whether neurons forget old learning when learning new things (OL-04, paid in episode 3)

**Has spent (episode 3):**
- the hook of পর্ব ২'s two printed numbers: 2.05 vs 0.31
- "দোলা" coinage for oscillation without erasure
- the confession that η = 1 was withheld in পর্ব ২ for pedagogy
- explicit re-commitment to full normalisation story (line 560–561: "ওটা আমার ঋণ, আর ওটা আমি শোধ করবো")

**Analogies:**
- **পর্ব ৩ introduced no analogy at all** (deliberate choice per blueprint)
- threshold-কে weight-এর দলে ভিড়িয়ে দেওয়া (from পর্ব ২, carried forward) — not explicitly broken yet, but conceptually integrated into the mathematics
- পর্ব ১'s brain-neuron analogy remains unbounded and is owed by পর্ব ৮

**Speech patterns and devices used:**
- "দাঁড়া —" (pause before revealing something) — line 91
- "ধৈর্য ধর" (patience, keep following me) — line 171
- "ধৈর্য, ধৈর্য! 😄 করতে বলছি, কর" (patience + encouragement + do as I say) — line 198
- "একদম ধরেছিস" (you got it exactly right) — acknowledging մოտু's correct guess
- "গুলিয়ে ফেলিস না" (don't get confused) — gentle correction

**Forms of address to মোটু:**
- তুই/তুমি forms (warm, elder-sibling tone): "গুলিয়ে ফেলিস না", "ঠিক ধরেছিস", "প্রশ্নটা মাথায় গেঁথে রাখ"

## Dataset in play

**আবুল/বাবুল/কাবুল/দাবুল dataset (4 students, 3 features + 1 label):**

| Student | study (x₁) | understanding (x₂) | attendance (x₃) | A+? (d) |
|---|---|---|---|---|
| আবুল | 0.60 | 0.95 | 0.20 | 1 |
| বাবুল | 0.30 | 0.40 | 0.90 | 0 |
| কাবুল | 0.80 | 0.85 | 0.70 | 1 |
| দাবুল | 0.20 | 0.25 | 0.30 | 0 |

**Initial weights:** W = [−3.0, 2.0, 1.0, 3.0]  
(meaning: bias = −3.0, study weight = 2.0, understanding weight = 1.0, attendance weight = 3.0)

**Final converged weights after episode 2:** W = [−3.0, 3.40, 3.10, 0.70]  
(meaning: bias = −3.0, study weight = 3.40, understanding weight = 3.10, attendance weight = 0.70)

The convergence happened at epoch 6, when all four students produced correct predictions with Error = 0 for all.

**Derived values পর্ব ৩ put in play (for later episodes not to contradict):**

Dot products (inner products, all strictly positive):
- X_A · X_A = 2.3025,  X_A · X_B = 1.7400,  X_A · X_C = 2.4275,  X_A · X_D = 1.4175
- Smallest pair: 1.1925 (between দাবুল and দাবুল)

Spine: আবুলের sum trajectory Epoch 1→2 (η = 1):
- −0.25 (after আবুল's evaluation in Epoch 1)
- 2.0525 (after আবুলের own update)
- 0.3125 (after বাবুলের update) — printed as 0.31 in পর্ব ২

কাবুলের flip (Epoch 1→2, caused by বাবুলের Epoch-2 update):
- 1.7675 → −0.4425 (printed as −0.44 in পর্ব ২)
- কাবুলের recovery: 0.20 → 0.42 → 2.85 (Epochs 2→3→4)

Epoch pattern (mistakes per epoch): 2·2·1·2·1·0

Learning rate η = 0.5 check:
- আবুলের self-update at η = 0.5: 0.5 × 2.3025 = 1.15125, final sum 0.90125
- বাবুলের interference at η = 0.5: 0.5 × 1.7400 = 0.8700

## Tone drift watch

- Episode 1: 180 TSX lines
- Episode 2: 843 TSX lines
- Episode 3: 601 TSX lines

**Compression check:** পর্ব ৩ came in over its 480–560 blueprint band (608 final lines after L3 authoring). The compression editor judged 601 to be the natural length rather than padding — compression reserve preserved for L4.

**Analogy account:** পর্ব ৩ introduced no analogy at all (deliberate, per blueprint). পর্ব ১'s brain-neuron analogy remains unbounded and is owed by পর্ব ৮.
