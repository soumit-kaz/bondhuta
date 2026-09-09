# Knowledge Map — Neural Network সিরিজ

দুই পর্ব পড়ে বানানো, general ML জ্ঞান থেকে নয়। প্রতিটা `introduced` সারির
পাশে ওই পর্বের লাইন-নম্বর আছে যাতে যাচাই করা যায়।

`status`: `taught` (পুরো ব্যাখ্যা হয়েছে) · `teased` (নাম বলা হয়েছে, ইচ্ছে করে
ব্যাখ্যা হয়নি — একটা প্রতিশ্রুতি) · `used-unnamed` (কাজটা দেখানো হয়েছে কিন্তু
পরিভাষা দেওয়া হয়নি) · `pending` (এখনো উচ্চারিতই হয়নি)

---

## ১. যা এখন পর্যন্ত শেখানো হয়েছে

| concept | status | introduced | evidence | deepened | prerequisite of |
|---|---|---|---|---|---|
| neuron | taught | ১ | L33–36 "এইটা একটা **neuron**" | ২ | সব |
| input / output line | taught | ১ | L38–43 | ২ | weighted sum |
| threshold | taught | ১ | L46–49; `threshold = 10` L61 | ২ (bias-এ রূপান্তরিত) | bias, decision boundary |
| binary output (y = 0 / 1) | taught | ১ | L69–71 formula-box | ২ | activation function, loss |
| weight | taught | ১ | L109–112 "একেই বলে — **weight**" | ২ | সব |
| weighted sum | taught | ১ | L131–136 | ২ | forward pass, layer |
| scale (একই মাপে আনা) | used-unnamed | ১ | L93–95 "০–১০০ scale-এ মাপা" | ২ (L275–278, ÷100) | learning rate, normalization |
| feature | used-unnamed | ২ | L147–148 "জোর করে এমন একটা feature নিয়ে এলাম" | — | input layer |
| training | taught | ১ | L167–170 "এই পুরো প্রক্রিয়াটাকেই বলে **training**" | ২ | সব |
| algebraic shift (threshold ওপাশে) | taught | ২ | L51–75 | — | bias |
| bias (w₀ = −threshold) | taught | ২ | L156–163 | — | decision boundary, layer |
| bias input (x₀ = 1) | taught | ২ | L146–154 | — | matrix form |
| matrix (4×1) | used-unnamed | ২ | L176–188 — কোনো সংজ্ঞা নেই | — | layer weight matrix |
| transpose | used-unnamed | ২ | L198–206 "মনে আছে transpose?" | — | Wᵀ X, backprop |
| matrix গুণ (1×4 × 4×1) | used-unnamed | ২ | L208–220 | — | forward pass |
| `new_weighted_sum_term = Wᵀ X` | taught | ২ | L232–234 | — | forward pass, layer |
| desired output (d) | taught | ২ | L422–426 "d = আসলে যা হওয়ার কথা ছিল" | — | Error, loss |
| Error = d − y | taught | ২ | L415–420, table L430–465 | — | loss function, gradient |
| weight update rule `W_new = W + Error × X` | taught | ২ | L467–471 | — | gradient descent, backprop |
| epoch | taught | ২ | L588–597 | — | training loop |
| iteration | taught | ২ | L588–597 | — | training loop |
| online learning | taught | ২ | L631–638 | — | batch vs online, interference |
| convergence | taught | ২ | L748–755 | — | convergence guarantee, XOR failure |

## ২. যা নাম না নিয়েই ঘটেছে — পরিভাষার ঋণ

এগুলো লিখে রাখা জরুরি, কারণ পরে যখন নামটা আসবে তখন "এটা তো তুমি আগেই করেছো"
বলে জুড়ে দিতে হবে, নতুন করে শেখানো যাবে না।

| যে জিনিসটা ঘটেছে | কোথায় | যে নামটা এখনো দেওয়া হয়নি |
|---|---|---|
| একটা neuron + step rule = গোটা model | পর্ব ১–২ | **perceptron** — শব্দটা দুই পর্বের কোথাও নেই |
| `y = 1 যদি sum > 0, নাহলে 0` | পর্ব ১ L69, পর্ব ২ L72–75 | **step / threshold activation function** |
| `W_new = W + Error × X` | পর্ব ২ L470 | **perceptron learning rule / delta rule** |
| ÷100 করে 0–1 scale | পর্ব ২ L275–278 | **normalization / feature scaling** |
| ৬ epoch পরে আর কোনো update নেই | পর্ব ২ L732–755 | **convergence guarantee ও তার শর্ত** |
| learning rate = 1 (নিঃশব্দে) | পর্ব ২ — `W + Error × X`-এ কোনো η নেই | **learning rate η** |

শেষেরটা সবচেয়ে গুরুত্বপূর্ণ: **পর্ব ২ কার্যত η = 1 ধরে নিয়েছে, কিন্তু সেটা
বলেনি।** পর্ব ৩-এ η আনার সময় এটা "নতুন কিছু" নয় — এটা "এতক্ষণ যে লুকানো 1-টা
ছিল, সেটাকে হাতে ধরা"।

## ৩. যা teased করা হয়েছে — খোলা প্রতিশ্রুতি

| প্রতিশ্রুতি (পাঠক যেভাবে পড়েছে) | কোথায় | কে দেবে |
|---|---|---|
| "এই scale মেলানোর ব্যাপারটা পরে আরও সুন্দর করে আলোচনা করবো 😄" | পর্ব ১ L94 | পর্ব ৩ |
| "(এই scale মেলানোর ব্যাপারটা পরে আরও বিস্তারিত দেখবো 😄)" — একই প্রতিশ্রুতি, দ্বিতীয়বার | পর্ব ২ L276–277 | পর্ব ৩ (আর পেছানো যাবে না) |
| "পরের পর্বে এই প্রশ্নেরই উত্তর খুঁজবো — neuron নতুন কিছু শিখতে গিয়ে পুরনো শেখা সত্যিই ভুলে যায় কিনা, আর গেলে আমরা কী করি!" | পর্ব ২ L836–838 | **পর্ব ৩ — বাধ্যতামূলক** |
| "পুরো Neural Network কিন্তু দাঁড়িয়ে আছে একটাই ছোট জিনিসের উপর — একটা neuron" → অর্থাৎ অনেক neuron আসছে | পর্ব ১ L12–14 | পর্ব ৬ |
| "এই equation-টা গণিতের বিভিন্ন জগতে নানাভাবে লেখা যায়। যখন যেটা দিয়ে কাজ চালাতে সুবিধা, তখন সেটা ব্যবহার করবো।" | পর্ব ২ L170–172 | চলমান, নির্দিষ্ট দেনা নয় |

পরিশোধিত: পর্ব ১-এর "পরে এর মান ঠিক করার নিয়ম শিখবো" (threshold) — পর্ব ২-এ
w₀ শিখে ফেলার মধ্য দিয়ে দেওয়া হয়েছে। পর্ব ১-এর highlight-text ("neuron কীভাবে
data থেকে নিজে নিজে weight আর threshold শিখে নেয়") — পর্ব ২ পুরোটাই।

## ৪. যা এখনো বাকি — pending

`interference`, `learning rate (η)`, `decision boundary`, `linear separability`,
`XOR`, `hidden layer`, `multi-layer network`, `layer weight matrix (2D)`,
`credit assignment`, `activation function`, `sigmoid`, `loss function`,
`derivative / slope`, `gradient descent`, `chain rule`, `backpropagation`,
`batch vs online`, `overfitting`, `perceptron` (শব্দ হিসেবে)।

কোনটা কোন পর্বে — `roadmap.md`। ওখান থেকেই প্রতিটা brief-এর
`must-not-teach-yet` তালিকা যান্ত্রিকভাবে বের করা যায়।

---

## ৫. Dependency graph

তীর মানে "বাঁয়েরটা না জানলে ডানেরটা পড়া যায় না"। বন্ধনীর সংখ্যা = যে পর্বে
শেখানো হয় / হবে।

```
neuron (১)
  └─ input/output (১)
       └─ threshold (১) ──────────────┐
       └─ weight (১)                  │
            └─ weighted sum (১)       │
                 └─ training (১)      │
                                      │
algebraic shift (২) ←─────────────────┘
  └─ bias w₀ = −threshold (২)
       └─ bias input x₀ = 1 (২)
            └─ matrix form Wᵀ X (২)      [needs: matrix, transpose — assumed]
                 └─ desired output d (২)
                      └─ Error = d − y (২)
                           └─ update rule W + Error × X (২)
                                ├─ epoch / iteration (২)
                                │    └─ online learning (২)
                                │         └─ convergence (২)
                                │              │
                                │              ├─ interference (৩)
                                │              │    └─ learning rate η (৩)
                                │              │         └─ scale / normalization (৩)  [pays পর্ব ১+২ promise]
                                │              │
                                └─ Wᵀ X = 0 as a line
                                     └─ decision boundary (৪)
                                          └─ linear separability (৫)
                                               └─ XOR failure (৫)
                                                    └─ hidden layer (৬)
                                                         └─ 2D weight matrix (৬)
                                                              └─ credit assignment problem (৭)
                                                                   └─ why step activation blocks learning (৭)
                                                                        └─ activation function / sigmoid (৮)
                                                                             └─ continuous output
                                                                                  └─ loss function MSE (৯)
                                                                                       └─ slope / derivative intuition (১০)
                                                                                            └─ gradient descent (১০)   [needs η from ৩]
                                                                                                 └─ chain rule (১১)
                                                                                                      └─ backpropagation (১২)
```

## ৬. Forward-dependency check

প্রতিটা পরিকল্পিত পর্বের requirement আগের কোনো পর্বে শেখানো — যাচাই করা হলো:

| পর্ব | requires | কোথায় শেখানো | ঠিক আছে? |
|---|---|---|---|
| ৩ | update rule, online learning, epoch, convergence, scale | ২, ২, ২, ২, ১+২ | ✅ |
| ৪ | weighted sum, bias, Wᵀ X, y = 0/1 | ১, ২, ২, ১ | ✅ |
| ৫ | decision boundary, convergence | ৪, ২ | ✅ |
| ৬ | XOR failure, decision boundary, Wᵀ X | ৫, ৪, ২ | ✅ |
| ৭ | hidden layer, Error = d − y, update rule | ৬, ২, ২ | ✅ |
| ৮ | credit assignment, step rule y = 0/1 | ৭, ১ | ✅ |
| ৯ | sigmoid (ভগ্নাংশ output), Error = d − y | ৮, ২ | ✅ |
| ১০ | loss, learning rate η, derivative-intuition (এখানেই শেখানো) | ৯, ৩, ১০ | ✅ |
| ১১ | gradient descent, hidden layer, sigmoid | ১০, ৬, ৮ | ✅ |
| ১২ | chain rule, সব উপরের | ১১ | ✅ |

কোনো forward dependency নেই।

## ৭. যে ঋণ সিরিজ শোধ না করে শেষ করতে পারবে না

- **brain-neuron analogy কোথায় ভাঙে** (পর্ব ১-এ ধার নেওয়া, এখনো bound করা হয়নি)।
  স্বাভাবিক জায়গা: পর্ব ৮, activation function-এর সাথে।
- **"perceptron" শব্দটা** — পাঠক দুই পর্ব ধরে একটা perceptron বানিয়েছে, নামটা
  জানে না। Google করতে গেলে দরকার হবে। পর্ব ৫-এ, XOR-এর প্রসঙ্গে দেওয়া
  স্বাভাবিক (Minsky–Papert)।
- **scale/normalization-এর প্রতিশ্রুতি**, দু'বার দেওয়া। পর্ব ৩।
