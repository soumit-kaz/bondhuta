# Voice — Neural Network সিরিজ (observed, not prescribed)

`reference/voice-and-characters.md` is the law. This file records what the two
published episodes **actually do**, with verbatim evidence. Where the two
episodes disagree, পর্ব ২ is the target and the divergence is listed under
`## Drift observed`.

Evidence files:
- `src/pages/neural-network/NeuralNetworkIntro.tsx` (180 lines)
- `src/pages/neural-network/NeuralNetworkLearning.tsx` (843 lines)

---

## 1. Evidence — verbatim lines from the real episodes

**Q1 — পর্ব ১, `intro-text`, লাইন ১১–১৪** (the series' thesis, in ভতুর মুখে):

> মোটু এবার নতুন নেশায় পড়েছে — Neural Network শিখবে। কিন্তু শুরুতেই
> সবাই ভয় পায়, এত matrix, এত গণিত! ভতু আপু বললো — "ভয়ের কিছু নেই।
> পুরো Neural Network কিন্তু দাঁড়িয়ে আছে একটাই ছোট জিনিসের উপর — একটা neuron।
> আগে ওটাই বুঝে ফেল।"

**Q2 — পর্ব ১, লাইন ১৬৭–১৭০** (ভতু rewards a real question, then names the concept last):

> "দারুণ প্রশ্ন! 🙌 আসলে এই weight গুলো আমরা মুখে মুখে আন্দাজ করে ধরি না।
> অনেক student-এর data বিশ্লেষণ করে neuron নিজেই সিদ্ধান্ত নেয় — কোন factor-এর weight
> কত হওয়া উচিত, আর threshold-ই বা কত হওয়া উচিত। এই পুরো প্রক্রিয়াটাকেই বলে
> training।"

**Q3 — পর্ব ২, লাইন ১৭০–১৭৩** (ভতু asks for trust before payoff — "চল … ধৈর্য ধর"):

> "এই equation-টা গণিতের বিভিন্ন জগতে নানাভাবে লেখা যায়। যখন যেটা দিয়ে কাজ চালাতে
> সুবিধা, তখন সেটা ব্যবহার করবো। চল matrix দিয়ে লিখি — ধৈর্য ধর, আমার সাথে সাথে করতে
> থাক, বুঝে যাবি।"

**Q4 — পর্ব ২, লাইন ৩১৬–৩১৭** (মোটু catches something genuinely wrong — the reader's own objection):

> "দাঁড়াও আপু — attendance-এর weight 3, কিন্তু understanding-এর weight মাত্র 1?
> বোঝার চেয়ে ক্লাসে হাজিরা বেশি গুরুত্বপূর্ণ?! এটা তো উল্টো মনে হচ্ছে!"

**Q5 — পর্ব ২, লাইন ৭৮৬–৭৮৮** (the CONSOLIDATE beat — what changed, in plain Bangla):

> "একদম! আমরা মুখে আন্দাজ করে যা ভুল করেছিলাম, neuron data দেখে সেটা নিজেই শুধরে নিল।
> সে বুঝে গেল — A+ পেতে আসল ব্যাপার হলো পড়া আর বোঝা, নিছক হাজিরা ততটা না। কেউ ওকে এটা
> বলে দেয়নি — সে শুধু ভুল-শুধরে-শুধরে নিজেই শিখে নিয়েছে।"

**Q6 — পর্ব ২, লাইন ৮৩০–৮৩২** (how a question is deferred: admit its size, promise a whole episode):

> "(ভতু একটু থেমে মুচকি হাসলো।) উরে বাবা! তুই আজ এমন একটা প্রশ্ন করে ফেলেছিস, যেটা নিয়ে
> আজও বড় বড় গবেষকরা মাথা ঘামান। এর উত্তরটা এত সুন্দর আর এত জরুরি যে — ওটা আমি পুরো একটা
> পর্ব জুড়ে বলবো। আজ এটুকুই থাক, প্রশ্নটা মাথায় গেঁথে রাখ।"

**Q7 — পর্ব ২, লাইন ৬৩৪–৬৩৬** (a "খুব জরুরি প্রশ্ন" answered with mechanism first, name last):

> "খুব জরুরি প্রশ্ন! **এইমাত্র বদলানো নতুন weight দিয়েই**। neuron কিন্তু
> প্রতি ধাপে শিখেই যাচ্ছে — তাই পরের student সবসময় সবচেয়ে আপডেটেড weight-ই পায়, পুরনোটা
> নয়। এটাকে বলে **online learning** — একজন একজন করে শিখে এগোনো।"

**Q8 — পর্ব ১, লাইন ৬৪** (`note-text` — the narrator's honest shrug):

> (১০-ই কেন? এমনিতেই ধরলাম 😄 — পরে এর মান ঠিক করার নিয়ম শিখবো।)

---

## 2. What this series sounds like, in practice

### The engine is a worked example, not an analogy

দুই পর্বে **একটাই** analogy আছে — brain-এর neuron ("আমাদের মস্তিষ্কে যে neuron
থাকে, এটাও অনেকটা সেরকমই একটা জিনিস") — আর সেটা এক অনুচ্ছেদের বেশি টানা হয়নি।
বাকি পুরোটা analogy নয়, **numeric worked example**: আবুলের 0.60 / 0.95 / 0.20,
W = [-3.0, 2.0, 1.0, 3.0], আর ৬টা epoch-এর প্রতিটা সংখ্যা।

নতুন পর্বেও এই ভরটা একই জায়গায় রাখতে হবে: analogy কম, সংখ্যা বেশি, আর সংখ্যাগুলো
শেষ পর্যন্ত টানা।

### Name the concept last

তিনবারই একই ছাঁচ: ঘটনা → কারণ → তারপর ইংরেজি নামটা `<strong>` দিয়ে।
`weight` (পর্ব ১), `training` (পর্ব ১), `bias` / `online learning` /
`convergence` (পর্ব ২) — কোনোটাই সংজ্ঞা দিয়ে শুরু হয়নি।

### The reader's objection is spoken by মোটু, out loud

পর্ব ২-এর গোটা কাঠামোটা মোটুর তিনটা আপত্তির উপর দাঁড়িয়ে:
"মাইনাসটা প্লাস হয়ে গেল কীভাবে? 😮", "এগুলো কেন করছি আপু?",
"এবার বাবুলের হিসাব কোন weight দিয়ে করবো —শুরুর পুরনো weight, না এইমাত্র
আবুলের জন্য বদলানো নতুন weight?"

শেষেরটা লক্ষ করার মতো: এটা **সঠিক প্রশ্ন, ভুল সময়ে নয়** — বরং ঠিক সেই মুহূর্তে,
যখন পাঠকেরও ঠিক ওই খটকাটা লাগে। মোটুর প্রশ্ন না এলে পরের অনুচ্ছেদটা লেখার
কারণই থাকে না।

### Off-stage characters speak in prose, never in a dialog box

আবুল ফোনে কথা বলে, কিন্তু তার কথা `concept-box`-এর `<ul>`-এর ভেতর quote হিসেবে
(পর্ব ২, লাইন ২৫১–২৬৭)। মোটুর ফোনের লাইনটা সাধারণ `<p>`-তে:

> মোটু ফোন তুলেই বললো — "আবুল! তোর কোর্সের হিসাবগুলো বল তো ভাই।"

কারণটা structural: মোটু আর ভতু ছাড়া কারো জন্য CSS নেই। এই কৌশলটাই ব্যবহার
করতে হবে যখনই তৃতীয় কেউ কথা বলবে।

### Stage direction inside a dialog box

`(ভতু একটু থেমে মুচকি হাসলো।)` — ভতুর `<p>`-এর ভেতরেই, প্রথম বন্ধনীতে।
পর্ব ২-এ একবারই ব্যবহৃত, শেষ মুহূর্তে, ওজন বাড়ানোর জন্য। বিরল রাখতে হবে।

### Narrator moves between third person and তুমি

তৃতীয় পুরুষে মোটুর কথা বলা হয় — "মোটু ফোন রেখে দিল।", "মোটু একটা লম্বা শ্বাস
নিয়ে গুছিয়ে বললো —" — আর পাঠককে সরাসরি **তুমি**: "খেয়াল করো, তিনটাই কিন্তু
০–১০০ scale-এ মাপা", "ধরো, তোমার ক্লাসের ছাত্র আবুল"।

### Sentences are short. The em dash carries the beat.

দুই পর্বে em dash প্রায় প্রতি অনুচ্ছেদে — reveal-এর আগের নিঃশ্বাসটা ওটাই।
"তাহলে হাতে রইলো একটাই জিনিস — **w গুলো একটু বাড়িয়ে দিই**।"

### Small celebratory one-liners between formulas

"একটা গোটা যোগফল মাত্র দুই-অক্ষরে। 🎯"
"বাহ, এখন threshold-এর সাথে তুলনা করতে হচ্ছে না — সরাসরি **0-এর সাথে** তুলনা করলেই হচ্ছে। 😄"
"ব্যাস, একটা neuron তৈরি!"

---

## 3. Register — observed

| কে কাকে | সম্বোধন | প্রমাণ |
|---|---|---|
| ভতু → মোটু | **তুই** | "গুলিয়ে ফেলিস না", "ঠিক ধরেছিস!", "একদম ধরেছিস", "প্রশ্নটা মাথায় গেঁথে রাখ", "ফোন দে তো", "দাঁড়া —", "বুঝে যাবি" |
| মোটু → ভতু | **তুমি** + "আপু" | "আপু, তুমি বলেছিলে neuron নাকি নিজে নিজে শেখে", "দাঁড়াও আপু —" |
| narrator → reader | **তুমি** | "খেয়াল করো", "ধরো, তোমার ক্লাসের ছাত্র আবুল", "চলো ব্যাপারটাকে একটা mathematical form-এ লিখে ফেলি" |

পর্ব ১-এ ভতুর সম্বোধন একটু নরম ("না রে, এত সহজ না!" — তুই-ঘেঁষা কিন্তু ক্রিয়াপদ
নেই)। পর্ব ২-এ পুরোপুরি তুই। **পর্ব ২ target।**

চলিত ভাষা, ব্যতিক্রম নেই। সাধু ভাষা একবারও নেই।

---

## 4. Structural conventions actually observed

| convention | পর্ব ১ | পর্ব ২ |
|---|---|---|
| `h1 className="page-title"` starts with 🧠 | ✅ `🧠 একটা Neuron-এর গল্প` | ✅ `🧠 পর্ব ২: Neuron যেভাবে নিজে নিজে শেখে` |
| প্রতিটা `h2` একটা leading emoji দিয়ে শুরু | ✅ ৫টি h2, সবগুলো | ✅ ৮টি h2, সবগুলো |
| `h3` inside `concept-box` starts with an emoji | ✅ `📊 আবুলের তিনটা factor` | ✅ `📊 আবুলের রিপোর্ট` |
| `h3` outside a box also takes an emoji | — | ✅ `🔁 Epoch 1 — পুরোটা খুলে` |
| শেষ element `<p className="highlight-text">` | ✅ | ✅ |
| `highlight-text` শেষ হয় 🚀 দিয়ে | ✅ | ✅ |
| dialog `<p>` সবসময় straight double quote দিয়ে মোড়া | ✅ | ✅ |
| `dialog-name` স্প্যানে কোলন থাকে (`মোটু:` / `ভতু:`) | ✅ | ✅ |

**h2 emoji actually used** (do not repeat mechanically):
পর্ব ১ — 🔍 ✍️ 🤔 🎉, plus 📊 ⚖️ in concept-boxes।
পর্ব ২ — 🔧 🪄 🔢 📞 🧮 🤔 👥 🎓 🚀, plus 🔁 (h3), 📊 (concept-box), 🧠 (concept-box)।

**Math typography as written:**
- Unicode subscripts everywhere: `w₀ w₁ w₂ w₃ x₀ x₁ x₂ x₃`, `Wᵀ`
- `<sub>` used only where Unicode has no glyph: `W<sub>new</sub>`
- `formula-box`-এ গুণ চিহ্ন `·` (`w₁·x₁`), matrix equation-এ `×`
- ঋণাত্মক চিহ্ন prose আর `Matrix`-এ Unicode `−` (`−3.0`, `w₀ = −threshold`),
  কিন্তু `code-box`-এর `<pre>` ব্লকে ASCII `-` (`-3.0 + 1.20 + 0.95`)
- `&gt;` `&lt;` `&nbsp;` escaping consistently: `y = 1, &nbsp;যদি&nbsp; sum_term &gt; threshold`
- `⟹` implication arrow, `→` in code blocks, `✅` `❌` as per-row verdicts inside `<pre>`

**Coined variable names — must be reused verbatim, never renamed:**
`sum_term` → `weighted_sum_term` → `new_weighted_sum_term`. এই তিনটে নাম সিরিজের
নিজস্ব; পর্ব ৩-এ হঠাৎ `z` বা `net` লেখা মানে ধারাবাহিকতা ভাঙা।

**Symbols in play so far:** `W`, `X`, `Wᵀ`, `w₀..w₃`, `x₀..x₃`, `y`, `d`,
`Error`. `Error` একটি ইংরেজি শব্দ হিসেবেই লেখা হয় — কোনো গ্রিক চিহ্ন নয়।

---

## 5. Length

| পর্ব | TSX lines | dialog boxes | figures | tables | code-boxes |
|---|---|---|---|---|---|
| ১ | 180 | 6 (মোটু ৩, ভতু ৩) | 2 (imported PNG) | 0 | 0 |
| ২ | 843 | 22 (মোটু ১০, ভতু ১২) | 0 | 2 | 9 |

পর্ব ২ conventions-এর ৮৫০ লাইনের ছাদ ছুঁয়ে ফেলেছে। এটা ছাদ, লক্ষ্য নয়।

---

## Drift observed

এগুলো দুই পর্বের মধ্যে সত্যিকারের অসংগতি। প্রতিটার ক্ষেত্রে **পর্ব ২-ই target**,
যদি না আলাদা করে লেখা থাকে।

1. **শিরোনামে পর্ব-নম্বর।** পর্ব ১-এর `h1` — `🧠 একটা Neuron-এর গল্প` — কোনো
   পর্ব নম্বর নেই। পর্ব ২-এর `h1` — `🧠 পর্ব ২: Neuron যেভাবে নিজে নিজে শেখে` —
   আছে। **পর্ব ৩ থেকে `পর্ব ৩: …` ছাঁচই চলবে।** পর্ব ১-কে পিছিয়ে গিয়ে বদলানো
   হবে না; সেটা প্রকাশিত।
   `Sidebar.tsx`-এ কিন্তু **দুটোরই** নম্বর নেই — `'একটা Neuron-এর গল্প'` আর
   `'Neuron যেভাবে নিজে নিজে শেখে'`। sidebar title-এ পর্ব নম্বর যায় না।

2. **সংখ্যা: বাংলা না Latin।** সরাসরি পরস্পরবিরোধী, একই তথ্য নিয়ে —
   - পর্ব ১: "তিনটাই কিন্তু **০–১০০** scale-এ মাপা", "**১০০** ঘণ্টার মধ্যে সে কত ঘণ্টা পড়েছে"
   - পর্ব ২: "তিনটা সংখ্যাই কিন্তু শতাংশ, মানে **0 থেকে 100**-এর scale-এ",
     "**100** ঘণ্টার মধ্যে **60** ঘণ্টা", "**95%**", "এক epoch = **4**টা iteration"

   পর্ব ২-এর নিয়ম, যেটা মেনে চলতে হবে: **যে সংখ্যাটা হিসাবের অংশ, সেটা Latin —
   এমনকি prose-এর ভেতরেও।** গুনতির শব্দ (তিনজন, দুটো, একটা) বাংলাতেই থাকে
   ("আরও তিনজনের data জোগাড় করলো")। পর্ব সংখ্যা বাংলায় (`পর্ব ২`)।
   `voice-and-characters.md` §2-এর "prose-এ বাংলা সংখ্যা" নিয়মটা এই সিরিজে
   ডেটার ক্ষেত্রে পালিত হয় না — এটাই বাস্তব অবস্থা।

3. **Narrative prose-এর ভেতরে emoji।** আইন বলে "Never inside narrative prose"।
   বাস্তবে পর্ব ১-এর সাধারণ `<p>`-তে আছে —
   "(এই scale মেলানোর ব্যাপারটা পরে আরও সুন্দর করে আলোচনা করবো 😄)" — আর
   `note-text`-এ "(১০-ই কেন? এমনিতেই ধরলাম 😄 …)"। পর্ব ২-এও narrator-এর লাইনে
   "একটা গোটা যোগফল মাত্র দুই-অক্ষরে। 🎯"। প্রবণতা: **শুধু বন্ধনীর ভেতরের
   আড়ালে-বলা মন্তব্যে বা এক-লাইনের উল্লাসে**, ব্যাখ্যার মাঝখানে নয়। এটুকুই
   অনুমোদিত পরিসর।

4. **Figure বনাম কোনো figure নেই।** পর্ব ১-এ দুটো imported PNG
   (`single-neuron.png`, `neuron-weighted-sum.png`)। পর্ব ২-এ একটাও figure নেই —
   তার জায়গায় `Matrix` component আর `code-box`। `src/assets/`-এ আর কোনো ছবি
   নেই, কাজেই পর্ব ৩ থেকে ছবি মানে **inline SVG**, নতুন PNG নয়।

5. **দৈর্ঘ্য।** 180 → 843 লাইন। পর্ব ২ প্রায় ৫ গুণ। ছাদ ছোঁয়া হয়ে গেছে;
   পর্ব ৩-কে ওই ছাদে নিতে হবে না।

6. **Analogy বাঁধার নিয়ম পালিত হয়নি।** আইন §5 বলে প্রতিটা analogy একই পর্বে
   ভাঙতে হবে। পর্ব ১-এর brain-neuron analogy ("আমাদের মাথার ভেতরে যেটা থাকে,
   সেটা?" → "একদম তেমনই একটা জিনিস") কোথাও bound করা হয়নি — সত্যিকারের
   biological neuron যে এভাবে কাজ করে না, তা বলা হয়নি। এটা একটা **অপরিশোধিত ঋণ**,
   কল্পনা নয়। কোনো পরবর্তী পর্বে (স্বাভাবিক জায়গা: activation function-এর পর্ব)
   ভতুকে এটা বাঁধতে হবে।

7. **`নুব` / heavy Bangla-script English।** legacy `MainContent.tsx`-এ
   "মোটু একজন নুব ডেভেলপার", "কনটেইনার", "ডাউনলোড করো" — Bangla script-এ
   transliterated technical terms। **Neural Network সিরিজে এটা সম্পূর্ণ অনুপস্থিত**
   এবং আইনবিরুদ্ধ। `MainContent.tsx` কোনো ভাষা-মডেল নয়।

---

# ⚠️ USER RULING — 2026-09-09 — overrides the plugin's language law

The blog's author read পর্ব ৩ against পর্ব ১ (which he hand-wrote) and ruled পর্ব ৩'s
Bangla **stiff, boring and weird**. This section is his correction. Where it conflicts
with `reference/voice-and-characters.md` §2 or hard failure **F14**, **this wins.**

## What went wrong, measured

| | পর্ব ১ (author's own) | পর্ব ৩ (pipeline) |
|---|---|---|
| longest `dialog-box` | 7 lines | 12 lines |
| ধনাত্মক / ঋণাত্মক / ভগ্নাংশ / নিশ্চয়তা / ভারসাম্য / কাকতালীয় / সংশোধন / পরিমাণে / প্রত্যেকেই / স্বীকার / সূত্র / গুণক | **0** | **27** |
| তুমি-address to reader (ধরো, চলো, দেখো, খেয়াল করো) | 6 | 2 |

## The ruling

**Banglish in Bangla script is correct and wanted.** When a Bangladeshi engineer would
say an English word in a Bangla sentence, write it **in Bangla script** — do not
substitute a Sanskritized Bangla word for it.

The old F14 was written to stop `neuron` becoming `নিউরন`. That part still holds. But it
had an unintended effect: with Banglish forbidden, the writer reached for **textbook
Bangla** instead, which is far worse than either option.

### Three buckets, not two

1. **Terms of art -> stay in Latin.** `neuron`, `weight`, `bias`, `epoch`, `learning rate`,
   `dot product`, `matrix`, `threshold`, `input`, `output`, `data`, `feature`, `update`,
   `Error`. Unchanged — পর্ব ১ does exactly this. The reader googles these.
2. **Everyday English words Bangla speakers actually say -> Bangla script.** (new)

   | write this | not this |
   |---|---|
   | পজিটিভ / নেগেটিভ | ধনাত্মক / ঋণাত্মক |
   | ব্যালেন্স | ভারসাম্য |
   | গ্যারান্টি | নিশ্চয়তা |
   | কারেকশন | সংশোধন |
   | ফ্র্যাকশন | ভগ্নাংশ |
   | রুল / নিয়ম | সূত্র (when it means "the rule") |

3. **Ordinary Bangla stays Bangla.** গুরুত্বপূর্ণ, উদাহরণ, ভুল, ঠিক, জিনিস, ব্যাপার.

### Sentence and paragraph law, from পর্ব ১

- **Short sentences.** পর্ব ১ averages well under 20 words. Break anything longer.
- **One idea per paragraph**, then white space. Do not stack three ideas in a `<p>`.
- **Dialogue boxes stay 1-4 lines.** A 12-line ভতু box is a lecture, not a conversation.
  If ভতু has three things to say, she says one, মোটু reacts, then she says the next.
- **Address the reader as তুমি** and use it often — ধরো, চলো, দেখো, খেয়াল করো, ভাবো.
- **Verbs over nouns.** "সাহায্য করা আর যথেষ্ট সাহায্য করা এক কথা নয়" is nominalized
  and dead. "ঠিক দিকে ঠেলে, কিন্তু এক ধাক্কায় কাজ শেষ হয় না" is alive.
- Never a semicolon. Never সাধু. Em dash for the beat before a reveal.

### The test
Read the sentence aloud. If you would not say it to a junior at a tea stall, it is wrong —
**even if it is grammatically perfect and even if every technical term is correctly in
Latin.** পর্ব ১ is the reference recording. When in doubt, open it and match its sound.
