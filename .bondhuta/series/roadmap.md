# Roadmap — Neural Network সিরিজ

মোট ১২ পর্ব। ১–২ প্রকাশিত, ৩–১২ পরিকল্পিত।
পর্ব ৩-এর প্রশ্ন **নির্ধারিত** — পর্ব ২ সেটা লিখিতভাবে প্রতিশ্রুতি দিয়েছে।

Open-loop id গুলো এই ফাইলে সংজ্ঞায়িত; `state/open-loops.md`-এর মালিক
`memory-keeper`।

| id | প্রতিশ্রুতি | কোথায় | কে দেবে |
|---|---|---|---|
| OL-01 | neuron কীভাবে নিজে weight আর threshold শিখে নেয় | ১ | ২ ✅ |
| OL-02 | threshold-এর মান ঠিক করার নিয়ম ("১০-ই কেন?") | ১ | ২ ✅ |
| OL-03 | scale মেলানোর ব্যাপারটা বিস্তারিত (দু'বার দেওয়া) | ১, ২ | ৩ |
| OL-04 | নতুন শিখতে গিয়ে পুরনো শেখা ভুলে যায় কিনা | ২ | ৩ |
| OL-05 | অনেক neuron একসাথে জুড়লে কী হয় | ১ (implicit) | ৬ |

---

### পর্ব ১ — একটা Neuron-এর গল্প
```
route:            neural-network/intro
component:        NeuralNetworkIntro
file:             src/pages/neural-network/NeuralNetworkIntro.tsx
sidebar-id:       nn-intro
sidebar-title:    একটা Neuron-এর গল্প
h1:               🧠 একটা Neuron-এর গল্প        (পর্ব নম্বর নেই — Drift, voice.md দেখো)
central-question: একটা neuron আসলে কী, আর সে সিদ্ধান্ত নেয় কীভাবে?
teaches:          neuron, input/output, threshold, weight, weighted sum, training (নাম দিয়ে)
requires:         —
pays-off:         —
teases:           OL-01 (training), OL-02 (threshold-এর মান), OL-03 (scale)
reader-after:     কাগজে w আর x গুণ করে যোগ করে threshold-এর সাথে তুলনা করে y বলতে পারবে
length:           180 lines
status:           published
```

### পর্ব ২ — Neuron যেভাবে নিজে নিজে শেখে
```
route:            neural-network/learning
component:        NeuralNetworkLearning
file:             src/pages/neural-network/NeuralNetworkLearning.tsx
sidebar-id:       nn-learning
sidebar-title:    Neuron যেভাবে নিজে নিজে শেখে
h1:               🧠 পর্ব ২: Neuron যেভাবে নিজে নিজে শেখে
central-question: "শেখা" মানে ঠিক কী — neuron কী বদলায়, আর কীসের ভিত্তিতে বদলায়?
teaches:          bias (w₀ = −threshold), bias input x₀ = 1, Wᵀ X রূপ, desired output d,
                  Error = d − y, W_new = W + Error × X, epoch, iteration,
                  online learning, convergence
requires:         weighted sum (১), threshold (১), weight (১); matrix ও transpose — ধরে নেওয়া
pays-off:         OL-01, OL-02
teases:           OL-04 (interference), OL-03 আবার
reader-after:     একটা ছোট dataset-এ নিজে হাতে epoch চালিয়ে weight update করে
                  convergence পর্যন্ত নিতে পারবে
length:           843 lines
status:           published
```

---

### পর্ব ৩ — পুরনো শেখা কি মুছে যায়?
```
route:            neural-network/interference
component:        NeuralNetworkInterference
sidebar-id:       nn-interference
sidebar-title:    পুরনো শেখা কি মুছে যায়?
central-question: বাবুলের জন্য weight বদলালে আবুলের শেখাটা কি নষ্ট হয়ে যায় — আর গেলে আমরা কী করি?
teaches:          interference (এক update আগেরটাকে কতটা ঠেলে দেয়), learning rate η,
                  dot product, scale/normalization কেন update-এর মাপ ঠিক করে
requires:         W_new = W + Error × X (২), online learning (২), epoch (২),
                  convergence (২), ÷100 scaling (২)
pays-off:         OL-04, OL-02 (partial: update-size asymmetry)
teases:           OL-05 (converged weights' meaning), OL-06 (convergence condition unnamed)
reader-after:     বুঝবে প্রতিটা update সত্যিই আগেরটাকে নাড়ায়, η ছোট করলে নাড়াটা ছোট হয়,
                  আর নিজে হাতে η = 0.5 দিয়ে পর্ব ২-এর epoch গুলো আবার চালাতে পারবে
must-not-teach:   decision boundary, XOR, layer, activation, loss, gradient
notes:            পর্ব ২ নিঃশব্দে η = 1 ধরেছিল। এখানে সেটা প্রকাশ করা — নতুন জিনিস নয়,
                  লুকানো জিনিস। LIMIT beat: η ছোট করলেও কিছু dataset কখনো থামে না —
                  সেটাই পর্ব ৪–৫-এর দরজা।
status:           published (2026-09-09, verdict score 93.00)
```

### পর্ব ৪ — Neuron আসলে একটা দাগ টানে
```
route:            neural-network/decision-boundary
component:        NeuralNetworkBoundary
sidebar-id:       nn-boundary
sidebar-title:    Neuron যে দাগটা টানে
central-question: weight গুলো কাগজে আসলে কী আঁকছে?
teaches:          decision boundary, Wᵀ X = 0 মানে একটা সরলরেখা, bias মানে রেখাটার সরে যাওয়া
requires:         Wᵀ X (২), bias (২), y = 0/1 (১), weight update (২)
pays-off:         —
teases:           "এমন কোনো সাজানো বিন্দু আছে যেটা কোনো দাগেই আলাদা করা যায় না?" → পর্ব ৫
reader-after:     দুটো input-এর ক্ষেত্রে w₀ + w₁x₁ + w₂x₂ = 0 রেখাটা নিজে এঁকে বলতে পারবে
                  কোন দিকে y = 1
must-not-teach:   linear separability শব্দটা, XOR, layer, activation, loss
notes:            training-কে "রেখাটা ঠেলে সরানো" হিসেবে দেখানো — পর্ব ২-এর সংখ্যাগুলোই
                  জ্যামিতিতে অনুবাদ। figure-plan: inline SVG, নতুন PNG নয়।
                  x₃ বাদ দিয়ে দুই-মাত্রায় নামা লাগবে (আবুলদের study আর understanding)।
status:           planned
```

### পর্ব ৫ — যে দাগ কোনোদিন টানা যায় না
```
route:            neural-network/xor
component:        NeuralNetworkXor
sidebar-id:       nn-xor
sidebar-title:    যে দাগ টানা যায় না
central-question: এমন কোনো প্রশ্ন আছে কি, যার উত্তর একটা neuron কোনোদিনই শিখতে পারবে না?
teaches:          linear separability, XOR সমস্যা, perceptron শব্দটা ও তার সীমা,
                  feature scaling / normalisation (full treatment)
requires:         decision boundary (৪), convergence (২), interference/η (৩)
pays-off:         পর্ব ३-এর "কিছু dataset কখনো থামে না" — এখানে কারণটা, OL-02 সম্পূর্ণ (full normalisation)
teases:           OL-05 — "একটা দাগে না হলে?" → পর্ব ৬
reader-after:     চারটা XOR বিন্দু এঁকে নিজেই দেখাতে পারবে কোনো সরলরেখা ওদের আলাদা করে না,
                  আর বুঝবে কেন training চিরকাল চলতে থাকে
must-not-teach:   hidden layer কীভাবে কাজ করে, activation, loss, gradient
notes:            এখানেই পাঠককে "perceptron" নামটা দেওয়া — দুই পর্ব ধরে সে যেটা বানিয়েছে
                  তার নাম, যাতে সে Google করতে পারে। ঐতিহাসিক প্রসঙ্গ (Minsky–Papert)
                  এক অনুচ্ছেদের বেশি নয়।
status:           planned
```

### পর্ব ৬ — একটা দাগে না হলে, দুটো
```
route:            neural-network/layers
component:        NeuralNetworkLayers
sidebar-id:       nn-layers
sidebar-title:    দুটো দাগ, দুই স্তর
central-question: দুটো neuron পাশাপাশি বসিয়ে তাদের output-কে তৃতীয় একটার input বানালে কী হয়?
teaches:          hidden layer, layer হিসেবে neuron সাজানো, 2D weight matrix
requires:         XOR (৫), decision boundary (৪), Wᵀ X (২), matrix গুণ (২)
pays-off:         OL-05
teases:           "এই weight গুলো তো আমি হাতে বসালাম — শিখবে কীভাবে?" → পর্ব ৭
reader-after:     হাতে বসানো weight দিয়ে একটা 2-2-1 network-এ XOR-এর চারটা input চালিয়ে
                  ঠিক output বের করতে পারবে
must-not-teach:   কীভাবে hidden weight শেখা যায়, activation function, loss, gradient
notes:            weight গুলো ভতু **হাতে বসাবে**, শেখাবে না — এবং সেটা স্পষ্ট করে বলবে।
                  এই অসততাটুকু স্বীকার করাই পর্ব ৭-এর hook।
                  ৪×১ matrix থেকে 2D matrix-এ যাওয়াটা এখানে সাবধানে দেখাতে হবে।
status:           planned
```

### পর্ব ৭ — ভেতরের neuron-এর ভুল কে মাপবে?
```
route:            neural-network/credit-assignment
component:        NeuralNetworkCreditAssignment
sidebar-id:       nn-credit
sidebar-title:    ভেতরের ভুল কে মাপবে?
central-question: Error = d − y তো শুধু শেষ neuron-এর জন্য — ভেতরের neuron-এর d কে বলে দেবে?
teaches:          credit assignment problem, কেন পুরনো নিয়ম hidden layer-এ খাটে না,
                  step function-এর all-or-nothing স্বভাব শেখাকে আটকায়
requires:         hidden layer (৬), Error = d − y (২), W_new = W + Error × X (২)
pays-off:         পর্ব ৬-এর "হাতে বসালাম" স্বীকারোক্তি
teases:           "output-টা যদি 0/1 না হয়ে মাঝামাঝি হতে পারতো?" → পর্ব ৮
reader-after:     নিজে বলতে পারবে কেন পর্ব ২-এর নিয়ম দিয়ে hidden weight নাড়ানো যায় না —
                  দুটো কারণেই: d নেই, আর ছোট নড়াচড়ায় output-এ কিছুই বদলায় না
must-not-teach:   sigmoid, loss, derivative, chain rule, backprop
notes:            এটাই সিরিজের **bridge episode** — "পর্ব ৩ পর্যন্ত সহজ, তারপর খাদ"
                  সমস্যাটা এখানেই সামলানো হয়। কোনো নতুন যন্ত্র নয়, শুধু সমস্যাটা
                  নিখুঁতভাবে দাঁড় করানো। ছোট পর্ব হতে পারে (৩০০–৪৫০ লাইন) এবং সেটাই ঠিক।
                  হাতে-কলমে দেখাতে হবে: hidden weight-এ 0.01 যোগ করলে output অবিকল একই থাকে।
status:           planned
```

### পর্ব ৮ — ধাপ ভেঙে মসৃণ ঢাল
```
route:            neural-network/activation
component:        NeuralNetworkActivation
sidebar-id:       nn-activation
sidebar-title:    ধাপ ভেঙে মসৃণ ঢাল
central-question: output-কে 0 আর 1-এর মাঝামাঝি হতে দিলে কী লাভ?
teaches:          activation function (ধারণা ও নাম), step function-কে পিছিয়ে গিয়ে নাম দেওয়া,
                  sigmoid
requires:         credit assignment (৭), y = 0/1 (১), weighted sum (২)
pays-off:         পর্ব ১-এর brain-neuron analogy এখানে ভাঙা হবে — আসল neuron
                  sigmoid দিয়ে চলে না, এটা আমাদের গাণিতিক সুবিধা
teases:           "y = 0.73, d = 1 — তাহলে ভুলটা কত?" → পর্ব ৯
reader-after:     আবুলের sum = −0.25-এ sigmoid বসিয়ে 0.44 বের করতে পারবে, আর বলতে পারবে
                  weight একটু নাড়ালে এবার output-ও একটু নড়ে
must-not-teach:   derivative of sigmoid, loss, gradient descent, chain rule
notes:            LIMIT beat বাধ্যতামূলক: sigmoid-এর দুই প্রান্ত চ্যাপ্টা — ওখানে নড়াচড়া
                  প্রায় থেমে যায়। এটা পর্ব ১০-এর জন্য বীজ।
                  পর্ব ১-এর analogy-ঋণ এখানেই শোধ (voice.md → Drift observed §6)।
status:           planned
```

### পর্ব ৯ — ভুল মাপার যন্ত্র
```
route:            neural-network/loss
component:        NeuralNetworkLoss
sidebar-id:       nn-loss
sidebar-title:    ভুল মাপার যন্ত্র
central-question: y এখন 0.73 — তাহলে "কতটা ভুল" মানে ঠিক কী সংখ্যা?
teaches:          loss function, MSE, পুরো dataset-এর উপর মোট loss
requires:         sigmoid (৮), desired output d (২), Error = d − y (২)
pays-off:         —
teases:           "loss তো মাপলাম, কমাবো কোন দিকে গিয়ে?" → পর্ব ১০
reader-after:     আবুল-বাবুল-কাবুল-দাবুলের জন্য নিজে হাতে মোট loss বের করতে পারবে
must-not-teach:   derivative, gradient descent, chain rule, cross-entropy
notes:            Error = d − y ইতিমধ্যেই শেখানো — loss হলো ওটাকে বর্গ করে যোগ করা।
                  বর্গ কেন, absolute কেন নয় — এই প্রশ্নটা মোটুর মুখে দিতে হবে।
                  ভুল ধারণা ভাঙা: "loss শূন্য হলেই সেরা model" — না।
status:           planned
```

### পর্ব ১০ — ঢাল বেয়ে নামা
```
route:            neural-network/gradient-descent
component:        NeuralNetworkGradientDescent
sidebar-id:       nn-gradient
sidebar-title:    ঢাল বেয়ে নামা
central-question: loss তো মাপলাম — এখন কোন দিকে weight নাড়ালে সেটা কমবে?
teaches:          slope/derivative-এর intuition (এখানেই শূন্য থেকে), gradient,
                  gradient descent step
requires:         loss (৯), learning rate η (৩), weight (১), sigmoid-এর ঢাল (৮)
pays-off:         পর্ব ৩-এর η এখানে "step-এর মাপ" হিসেবে নতুন অর্থ পায়
teases:           "একটা weight-এর জন্য পারলাম — ভেতরের weight-এর জন্য?" → পর্ব ১১
reader-after:     একটা weight-এর জন্য নিজে হাতে দুটো gradient descent step চালিয়ে
                  loss কমতে দেখতে পারবে
must-not-teach:   chain rule আনুষ্ঠানিকভাবে, backprop, momentum/Adam
notes:            পাঠকের calculus নেই (audience.md)। derivative এখানে "একটু ডানে সরালে
                  loss কতটা বদলায়" — সংখ্যা দিয়ে, সীমা-তত্ত্ব ছাড়া।
                  η খুব বড় হলে লাফিয়ে পেরিয়ে যাওয়া — এটাই LIMIT beat, আর এটা
                  পর্ব ৩-এর interference-এর সরাসরি প্রতিধ্বনি।
status:           planned
```

### পর্ব ১১ — শেকল ধরে পেছনে হাঁটা
```
route:            neural-network/chain-rule
component:        NeuralNetworkChainRule
sidebar-id:       nn-chain-rule
sidebar-title:    শেকল ধরে পেছনে
central-question: শেষের ভুলটা ভেতরের weight পর্যন্ত পৌঁছাবে কোন পথ ধরে?
teaches:          chain rule (intuition + একটা যান্ত্রিক নিয়ম), একটা hidden weight-এর
                  উপর loss-এর নির্ভরতার শেকল
requires:         gradient descent (১০), hidden layer (৬), sigmoid (৮),
                  credit assignment (৭)
pays-off:         পর্ব ৭-এর প্রশ্নের আসল উত্তর
teases:           "পুরো network-এ একবারে চালালে?" → পর্ব ১২
reader-after:     একটা hidden weight-এর জন্য শেকলটা নিজে লিখে ফেলতে পারবে —
                  loss → output → hidden output → hidden weight
must-not-teach:   পুরো matrix-রূপে backprop, একাধিক layer-এর সাধারণ সূত্র
notes:            একটাই weight, একটাই পথ। সাধারণীকরণ পর্ব ১২-এর কাজ।
                  পর্ব ২-এর "একলা w₀-র সঙ্গী দরকার" ঘরানার personification এখানে
                  আবার কাজে লাগানো যায়।
status:           planned
```

### পর্ব ১২ — Backpropagation: পুরো হিসাব একবার
```
route:            neural-network/backprop
component:        NeuralNetworkBackprop
sidebar-id:       nn-backprop
sidebar-title:    পুরো হিসাব, একবার
central-question: শুরু থেকে শেষ পর্যন্ত একবার চালালে ঠিক কী কী ঘটে?
teaches:          forward pass ও backward pass এক নামে, backpropagation, প্রতিটা weight-এর
                  update একই epoch-এ
requires:         chain rule (১১), gradient descent (১০), hidden layer (৬), loss (৯),
                  sigmoid (৮), epoch (২)
pays-off:         পর্ব ১-এর "পুরো Neural Network দাঁড়িয়ে আছে একটা neuron-এর উপর"
teases:           সিরিজের পরে কী — code, deep network, অন্য activation (নাম মাত্র, দেনা নয়)
reader-after:     একটা 2-2-1 network-এ, একটা training example নিয়ে, কাগজ-কলমে একবার
                  forward pass আর একবার backward pass চালিয়ে **প্রতিটা weight নিজে হাতে
                  update করতে পারবে** — কোনো library ছাড়া
must-not-teach:   —  (এটাই শেষ পর্ব)
notes:            সিরিজের সবচেয়ে দীর্ঘ পর্ব হবে, ৮৫০ লাইনের ছাদ ছোঁবে। যদি ছাড়িয়ে যায়,
                  ১২ক/১২খ নয় — forward pass আর backward pass আলাদা দুই পর্ব করতে হবে
                  এবং roadmap ১৩ পর্বে বাড়াতে হবে।
                  আবুল-বাবুল-কাবুল-দাবুলের সংখ্যাতেই শেষ হওয়া উচিত — যেখান থেকে শুরু।
status:           planned
```

---

## সিরিজ কোথায় শেষ

পর্ব ১২-এর পরে পাঠক একটা ছোট network কাগজে সম্পূর্ণ train করতে পারে। সেটাই
শেষ — "আরও কিছু আছে" বলে ঝুলিয়ে রাখা নয়। code, framework, deep network, CNN —
এগুলো হলে **নতুন সিরিজ**, এই সিরিজের লেজ নয়।

## যেখানে ভাঙার ঝুঁকি

- **পর্ব ৪–৫**: জ্যামিতিতে যাওয়া। পাঠকের কাছে এতক্ষণ সব ছিল সংখ্যার তালিকা;
  হঠাৎ ছবি। পর্ব ৪-কে ছোট আর একমুখী রাখতে হবে।
- **পর্ব ৭**: আসল খাদ। এই পর্বে কোনো নতুন যন্ত্র নেই, শুধু সমস্যাটা দাঁড় করানো।
  এটাকে "reference material" হয়ে যেতে দেওয়া যাবে না — মোটুর হতাশাটাই এর প্রাণ।
- **পর্ব ৯–১০**: calculus-এর ছায়া। পাঠকের calculus নেই। derivative শব্দটার আগে
  সংখ্যা দিয়ে ঢাল দেখাতে হবে।
- **পর্ব ৬**: matrix ৪×১ থেকে 2D-তে যাওয়া। পর্ব ২-এ matrix শেখানোই হয়নি,
  ধরে নেওয়া হয়েছে (knowledge-map §১)। এখানে সেই ধরে নেওয়াটা টান খাবে।
