# Review — Bangla voice, clarity, humour (পর্ব ৩)

reviewer: `@bangla-voice-guardian`
draft: `src/pages/neural-network/NeuralNetworkInterference.tsx` (560 lines)
read in full: the draft; `series/voice.md`; `series/characters.md`; `state/humor-ledger.md`;
`src/pages/neural-network/NeuralNetworkIntro.tsx` (180); `src/pages/neural-network/NeuralNetworkLearning.tsx` (843);
`reference/voice-and-characters.md`; `episodes/003/blueprint.md`; `episodes/003/roundtable.md`.

**Verdict up front.** The voice is right. মোটু sounds like মোটু, ভতু sounds like ভতু, the
তুই/তুমি/আপু register never slips once, the dialogue carries the explanation instead of
decorating it, and there are half a dozen sentences here as good as anything in পর্ব ২
("ওই একটা সংখ্যাই তার ভাগ্য", "ছোট η আসলে আমাদের আন্দাজটাকেই বেশিদিন ক্ষমতায় রাখে",
"ঝাঁকুনি খেতে খেতে থেমেছিল, মসৃণভাবে নয়", "ওটা আমার ঋণ, আর ওটা আমি শোধ করবো").

What holds it under the gate is not the voice — it is four Bangla-script transliterations
that the law calls hard failures, a dialect form (`তিনটে`/`চারটে`) that appears ten times
and appears **zero** times in either published episode, and a cluster of translated-English
sentences and over-loaded paragraphs concentrated in §11–§13, exactly where the reader is
most tired.

**E-020 compliance confirmed, not re-litigated.** `দাগ` / `রেখা` / `সীমারেখা`: zero
occurrences anywhere in the file, including the SVG. The zero label at `:235` reads
`0 — এখানেই উত্তর বদলায়`, the approved string verbatim. `সীমানা` appears exactly once,
at `:543`, inside মোটুর closing question. Ruled and compliant.

---

## A. Language law — hard failures (F14)

### [V-01] F14 — a technical term transliterated into Bangla script
severity: high
anchor: `NeuralNetworkInterference.tsx:362-364`
claim: `ডেটা` appears twice in ভতুর F06-guard speech — the single most important
  paragraph in the episode for পর্ব ৫'s reveal.
current:
> "শর্তটার একটা নাম আছে, আর এমন **ডেটাও** আছে যেখানে neuron কোনোদিন থামে না। ওটা ধরে নিলে
> বাকিটা সোজা: আমাদের চারজনের **ডেটায়** প্রতিটা সংশোধন ওই W-এর দিকেই এক ধাপ"

  This is not a stylistic preference — the same file writes `data` in Latin four times
  (`:9` "নতুন কোনো data লাগবে না", `:481` "data থেকে আসেনি", `:482` "data-র সংশোধনগুলোকে",
  `:493` "সব data 100 দিয়ে ভাগ করেছিলাম"), and পর্ব ২ writes `data` / `dataset` in Latin
  without exception. The blueprint spelled it `ডেটা`; the blueprint is not the language law.
ask: rewrite as —
> "শর্তটার একটা নাম আছে, আর এমন **data**-ও আছে যেখানে neuron কোনোদিন থামে না। … আমাদের
> চারজনের **data**-য় প্রতিটা সংশোধন ওই W-এর দিকেই এক ধাপ"
because: a reader who wants to chase this concept googles `data`, and the episode's own
  other four uses have already taught them the Latin form. Two spellings of one word inside
  one page reads as carelessness before it reads as anything else.
---

### [V-02] F14 — `শর্টকাট`
severity: high
anchor: `NeuralNetworkInterference.tsx:424`
current:
> "দাঁড়াও, আমি একটা **শর্টকাট** মিলিয়ে দেখি — `−0.25 + 0.5 × 2.3025 = 0.90125`।"
claim: an ordinary English word in Bangla script. It is not a term of art, so it does not
  earn Latin either — and Bangla owns the idea outright.
ask:
> "দাঁড়াও, আমি একটু ছোট পথে মিলিয়ে দেখি — `−0.25 + 0.5 × 2.3025 = 0.90125`। মিলে গেল! 😄"
because: this is মোটুর best moment in the second half — the reader is meant to pick up a
  pencil here. A transliterated word is a speed bump at exactly the wrong beat.
---

### [V-03] F14 — `লিভার`, and an analogy nobody set up
severity: high
anchor: `NeuralNetworkInterference.tsx:513`
current:
> "কিন্তু না, দুটো এক **লিভার** নয় — আর পার্থক্যটা একটা ঘরে।"
claim: two problems in four words. (১) `লিভার` is a transliteration. (২) η has never been
  called a lever anywhere in this episode or the previous two, so the metaphor arrives
  fully formed at §13 with nothing behind it — and the blueprint declares
  `analogy: NONE` as a deliberate decision.
ask:
> "কিন্তু না, দুটো এক জিনিস নয় — আর পার্থক্যটা একটামাত্র ঘরে।"
because: an unannounced metaphor in the last third is the cheapest way to give a reader a
  wrong model three episodes later, and this one costs nothing to remove.
---

## B. Dialect and series consistency — the most audible drift

### [V-04] `তিনটে` / `চারটে` — ten times, and it is not this series' Bangla
severity: high
anchor: `:36, :48, :50, :168, :304, :352, :505, :514, :515, :528`
claim: the draft's dominant counting form is `-টে`. Both published episodes use `-টা`,
  without a single exception:
  - পর্ব ১ `:29` "**তিনটা** input", `:80` "**তিনটা** factor", `:84` "আবুলের **তিনটা** factor",
    `:93` "**তিনটাই** কিন্তু ০–১০০ scale-এ", `:99` "**তিনটা** যোগ করেই কাজ শেষ",
    `:104` "**তিনটার** গুরুত্ব তো এক না"
  - পর্ব ২ `:274` "**তিনটা** সংখ্যাই কিন্তু শতাংশ", `:467` "**তিনটা** ঘটনাকেই"

  `দুটো` is fine and matches (পর্ব ২ `:415`, `:594`). It is specifically `তিনটে`/`চারটে`
  that is wrong — it is the Kolkata form, and a Dhaka engineer at a tea stall says `তিনটা`.
  The draft also contradicts itself: `:543` and `:554` both write `চারটা সংখ্যায়`.
ask: replace all ten. Examples —
  - `:36` "বাকি **তিনটে** কোথায় গেল" → "বাকি **তিনটা** কোথায় গেল"
  - `:48` "**তিনটেই** সরে আছে" → "**তিনটাই** সরে আছে"
  - `:50` "গোটা `X` দিয়ে **চারটে** ঘর একসাথে নেড়েছে" → "…**চারটা** ঘর একসাথে নেড়েছে"
  - `:304` "এবার **তিনটে** জিনিস পাশাপাশি রাখ" → "এবার **তিনটা** জিনিস পাশাপাশি রাখ"
  - `:352` "টানা **চারটে** epoch-এ ভুল করে গেছে" → "টানা **চারটা** epoch-এ ভুল করে গেছে"
  - `:505` "মাত্র **তিনটে** মান নিতে পারে" → "মাত্র **তিনটা** মান নিতে পারে"
  - `:528` "নতুন **তিনটে** কাজ করতে পারি" → "নতুন **তিনটা** কাজ করতে পারি"
because: this is the one thing on the page a Bangladeshi reader hears in the first
  paragraph without being able to name it. It is not a grammar error — it is the wrong
  accent, and an accent that changes between পর্ব ২ and পর্ব ৩ is the loudest possible
  signal that a different hand wrote this one.
---

### [V-05] Semicolons in Bangla prose — five of them, zero in the series
severity: medium
anchor: `:49, :169, :322, :513, :531`
claim: neither পর্ব ১ nor পর্ব ২ contains a single semicolon in Bangla prose. This series
  runs on the em dash — voice.md records it as the beat before a reveal. Every one of these
  five is a place where the em dash or a full stop is what a person would actually speak.
current / ask:
  - `:49` "…নিজের feature-এর weight-টা নাড়ায়নি**;** গোটা `X` দিয়ে চারটে ঘর একসাথে নেড়েছে"
    → "…নিজের feature-এর weight-টা নাড়ায়নি — গোটা `X` দিয়ে চারটা ঘরই একসাথে নেড়েছে"
  - `:169` "বাকি ঘরগুলোও একই রকম**;** এই চারজনের সবচেয়ে ছোটটা 1.1925।"
    → "বাকি জোড়াগুলোর বেলায়ও একই কথা। এই চারজনের সবচেয়ে ছোট গুণফলটা 1.1925।"
  - `:322` "মোছা মানে 0 পেরিয়ে যাওয়া নয়**;** মোছা মানে 0 পেরিয়ে ওপারেই থেকে যাওয়া।"
    → "মোছা মানে 0 পেরিয়ে যাওয়া নয় — মোছা মানে 0 পেরিয়ে **ওপারেই থেকে যাওয়া**।"
  - `:513` "x₀ কখনো 100 দিয়ে ভাগ হয়নি**;** আমরা ভাগ করেছিলাম শুধু x₁, x₂, x₃-কে।"
    → "x₀ কখনো 100 দিয়ে ভাগ হয়নি। আমরা ভাগ করেছিলাম শুধু x₁, x₂, x₃-কে।"
  - `:531` "…সব ভেঙে পড়ছে**;** পর্ব ২-এর Epoch 4-এও তাই হয়েছিল"
    → "…সব ভেঙে পড়ছে — পর্ব ২-এর Epoch 4-এও তাই হয়েছিল"
because: `:322` is the episode's answer sentence. It deserves the em dash it has been
  denied, and the semicolon flattens the pause the whole definition arc has been building to.
---

### [V-06] `৬টা epoch` contradicts পর্ব ২'s own `4টা iteration`
severity: medium
anchor: `NeuralNetworkInterference.tsx:364`
current: > "**৬টা** epoch-এ সেটা থেমেছিল।"
claim: পর্ব ২ `:593-594` prints the identical construction with a Latin numeral —
  "আমাদের 4 জন student, কাজেই এক epoch = **4টা** iteration". voice.md's Drift note makes
  পর্ব ২ the target for exactly this question. The blueprint ruled `৬টা epoch`, but it
  ruled against the published precedent, and the returning reader has the precedent.
ask: "**6টা** epoch-এ সেটা থেমেছিল।" — and keep বাংলা numerals for `পর্ব ৩` and for pure
  counting words (`চারজন`), as the draft already does correctly.
because: a returning reader who saw `4টা iteration` two weeks ago and sees `৬টা epoch`
  today has to decide whether the difference means something. It doesn't, and that is
  wasted attention at the LIMIT beat.
---

### [V-07] Case endings attached with a space instead of a hyphen — twice
severity: low
anchor: `NeuralNetworkInterference.tsx:73`, `:313`
current:
> `:73` "ওদের feature-এর **matrix গুলো** তাহলে `X_A`, `X_B`, …"
> `:313` "পরের **epoch গুলোতে** তার sum — `0.20`, `0.42`, `2.85`।"
claim: the draft uses the hyphen everywhere else (`weight-টা`, `weight-এ`, `data-র`,
  `Error-এর`, `sum-এর`, `η-তে`). These two are the only holdouts, and the law prescribes
  the hyphen.
ask: `matrix-গুলো`, `epoch-গুলোতে`.
because: internal inconsistency inside one page is worse than either convention applied
  consistently.
---

### [V-08] `পঞ্চমটার` — a Bangla ordinal inside Latin-numbered epochs
severity: low
anchor: `NeuralNetworkInterference.tsx:353`
current: > "বাবুল তো টানা চারটে epoch-এ ভুল করে গেছে, **পঞ্চমটার** আগে থামেইনি।"
claim: everything around it names epochs as `Epoch 1` … `Epoch 4`. `পঞ্চমটা` forces the
  reader to translate back to `Epoch 5` mid-sentence.
ask: > "বাবুল তো টানা চারটা epoch-এ ভুল করে গেছে, **Epoch 5**-এর আগে থামেইনি।"
because: the whole sentence is a count of epochs; changing notation for the last one costs
  a beat for nothing.
---

### [V-09] `ও` for `আর`, inside one sentence that already used `আর`
severity: low
anchor: `NeuralNetworkInterference.tsx:219-220`
current: > "Epoch 1-এ আবুল **আর** বাবুলের পরে কাবুল **ও** দাবুল দুজনেরই Error ছিল 0"
ask: > "Epoch 1-এ আবুল আর বাবুলের পরে কাবুল **আর** দাবুল — দুজনেরই Error ছিল 0"
because: `ও` is the slightly written-register conjunction; the series is spoken-register
  throughout. Two different conjunctions for the same job in one sentence is audible.
---

### [V-10] A `তুই` imperative in an `h2` — narration must address the reader as তুমি
severity: medium
anchor: `NeuralNetworkInterference.tsx:257`
current: > `<h2>⛔ দাঁড়াও — কাবুলের দিকে **তাকা**</h2>`
claim: `তাকা` is ভতুর তুই-form addressed to মোটু. An `h2` is the narrator speaking to the
  reader, and the narrator's register in this series is তুমি (`খেয়াল করো`,
  `ধরো, তোমার ক্লাসের ছাত্র আবুল`) or first-person plural (পর্ব ২ `:767`
  "এখন একটু থেমে weight গুলোর দিকে **তাকাই**"). No heading in পর্ব ১ or ২ uses তুই.
ask: > `<h2>⛔ দাঁড়াও — এবার কাবুলের দিকে তাকাই</h2>`
  (ভতুর "কাবুলের দিকে তাকা" survives verbatim in her line at `:262`, which is where it
  belongs and where it lands harder.)
because: the heading is the reader's handhold. Being addressed as তুই there, once, in an
  episode that otherwise never slips, reads as the writer forgetting who is speaking.
---

## C. Translated-English prose (F16)

### [V-11] "ভালো চোখ।" — a calque of "Good eye."
severity: high
anchor: `NeuralNetworkInterference.tsx:350`
current: > "**ভালো চোখ।** হ্যাঁ, বেড়েছিল, আর আমি সেটা লুকাবো না।"
claim: no Bangladeshi teacher says this. It is the English sports idiom carried across
  word for word. ভতুর actual praise repertoire is on record: "দারুণ প্রশ্ন! 🙌",
  "খুব জরুরি প্রশ্ন!", "ঠিক ধরেছিস!", "বাহ, perfect example!", "একদম ধরেছিস।"
ask: > "**বাহ, চোখ আছে তোর!** হ্যাঁ, বেড়েছিল — আর আমি সেটা লুকাবো না। 😄"
because: this is meant to be the warm beat that opens the episode's hardest section. As
  written it is the flattest sentence on the page, and it is the second of only two
  attempts at relief across §7–§11 (see V-27).
---

### [V-12] "প্রসাধনী কাজ" — a calque of "cosmetic"
severity: high
anchor: `NeuralNetworkInterference.tsx:506`
current: > "তার মানে ÷100 কোনো **প্রসাধনী কাজ** ছিল না।"
claim: `প্রসাধনী` means cosmetics — the things in a dressing-table drawer. Applied to a
  computation it is a dictionary substitution, not Bangla. Nobody has ever said this.
ask: > "তার মানে ÷100 শুধু সাজিয়ে-গুছিয়ে রাখার ব্যাপার ছিল না।"
because: this sentence carries the CONSOLIDATE beat's whole point — that ÷100 was
  load-bearing. A phrase the reader has to decode kills the punch of the reveal.
---

### [V-13] Passive voice + formal register in ভতুর setup question
severity: high
anchor: `NeuralNetworkInterference.tsx:457`
current: > "কিন্তু একটা কথা ভাব — **সিদ্ধান্তটা আসলে নেওয়া হয় কীসের ভিত্তিতে?**"
claim: passive (`নেওয়া হয়`) plus a nominal adverbial (`কীসের ভিত্তিতে`). Bangla technical
  speech barely uses the passive, and ভতু has never used it in two episodes. Compare her
  actual mechanism questions: "একটু থেমে ভাব তো — neuron ভুল করলো ঠিক কোথায়?"
ask: > "কিন্তু একটা কথা ভাব — neuron সিদ্ধান্তটা আসলে নেয় কী দেখে?"
because: this is the pivot into the episode's most valuable beat (the η misconception).
  A passive construction here makes the teacher sound like a textbook at the exact moment
  she is supposed to sound like a friend catching you before you fall.
---

### [V-14] English word order — verb before subject
severity: medium
anchor: `NeuralNetworkInterference.tsx:505-506`
current:
> "কাজেই **এক ধাপের মাপ পুরোপুরি ঠিক করে দেয় বাকি দুটো জিনিস: η, আর `X`-এর মাপ।**"
claim: "the size of a step is entirely determined by the remaining two things" transcribed
  into Bangla with the English order left intact. Bangla is SOV; the subject
  (`বাকি দুটো জিনিস`) has ended up after its verb, and a colon has been used where Bangla
  would use an em dash.
ask: > "কাজেই **বাকি দুটো জিনিসই এক ধাপের মাপ ঠিক করে দেয় — η, আর `X`-এর মাপ।**"
because: this is the sentence the ÷100 payoff hangs on. Read aloud, the current version
  stalls halfway and the reader has to re-enter it from the right-hand side.
---

### [V-15] "ক্ষতিটা স্থগিত" — abstract noun where a verb belongs
severity: medium
anchor: `NeuralNetworkInterference.tsx:321`
current: > "কাজেই কারো ক্ষতি হলে সে চুপ করে সেটা মেনে নেয় না — নিজের পালায় সে আবার নিজের
> কথাটা বলে। **ক্ষতিটা স্থগিত, মোছা নয়।**"
claim: `স্থগিত` is what happens to a court hearing or a exam. "damage is deferred, not
  erased" has been rendered noun-for-noun. The two sentences before it are alive; this one
  is a legal notice.
ask: > "ক্ষতিটা থেকে যায় না — কিছুক্ষণের জন্য হয়, তারপর সে নিজেই তুলে নেয়।"
because: this is the resolution of the episode's emotional arc. It should sound like a
  person reassuring someone, not like a notice on a board.
---

### [V-16] "এবার একটা স্বীকারোক্তি।" — তৎসম noun-sentence, and a repeat
severity: medium
anchor: `NeuralNetworkInterference.tsx:384`
current: > "**এবার একটা স্বীকারোক্তি।** পর্ব ২-এর update নিয়মটার ভেতরে একটা গুণক নিঃশব্দে
> বসে ছিল…"
claim: `স্বীকারোক্তি` is a deposition. It is also the second স্বীকার- in two sections —
  `:360` already opened with "একটা জিনিস **স্বীকার** করে নিই". A verbless noun-sentence in
  a heavy তৎসম register is not how ভতু opens anything.
ask: > "**এবার তোকে একটা কথা বলি, যেটা পর্ব ২-এ চেপে গিয়েছিলাম।** update নিয়মটার ভেতরে
> একটা গুণক নিঃশব্দে বসে ছিল…"
because: the η reveal is a confession that should feel conspiratorial. The rewrite also
  removes the repetition and makes the reveal land as a secret rather than an announcement.
---

### [V-17] "সৎ মাপকাঠি" — "honest measure", translated
severity: medium
anchor: `NeuralNetworkInterference.tsx:51`
current: > "কাজেই একটা weight দেখে ঘোষণা দেওয়া যায় না। **একটাই সৎ মাপকাঠি** — আবুলের নিজের
> **sum**।"
claim: `সৎ` describes a person's character in Bangla, not a criterion. And
  "একটা weight দেখে **ঘোষণা দেওয়া** যায় না" — one does not "issue a declaration" about an
  arithmetic question.
ask: > "কাজেই একটা weight দেখে রায় দেওয়া যায় না। **মাপার সত্যিকারের জিনিস একটাই** —
> আবুলের নিজের **sum**।"
because: this sentence fixes the episode's measuring stick. It is the last sentence before
  the concept-box that defines নড়া and মোছা, so it has to be unambiguous, and `সৎ মাপকাঠি`
  makes the reader stop to check whether `সৎ` is a term.
---

### [V-18] "ছাপিয়েছিল" is the wrong verb — it means *surpassed*
severity: medium
anchor: `NeuralNetworkInterference.tsx:197`
current: > "**পর্ব ২ এই সংখ্যাটাই ছাপিয়েছিল**, দুই ঘর পর্যন্ত — **2.05**।"
claim: `ছাপা` → `ছেপেছিল` / `ছাপা হয়েছিল`. `ছাপিয়েছিল` reads as `ছাপিয়ে যাওয়া`, to exceed —
  which in a sentence full of numbers is an actively misleading verb. Separately,
  "পর্ব ২ ছাপিয়েছিল" personifies the episode as the printer, which is an English habit;
  the draft's own intro-text got this right at `:10` ("ওই পাতায় দুবার **ছাপা হয়েছিল**").
ask: > "**পর্ব ২-এর পাতায় এই সংখ্যাটাই ছাপা হয়েছিল**, একটু গোল করে — **2.05**।"
because: this is the recognition moment the whole spine has been walking toward. A verb
  that can be read as "exceeded" next to `2.0525` and `2.05` is the one place a wrong verb
  can actually cause a wrong reading.
---

### [V-19] "নিজের কথায় ধরে ফেলেছিস।" — the warmest beat in the episode, garbled
severity: medium
anchor: `NeuralNetworkInterference.tsx:334`
current:
> মোটু `:329`: "তাহলে... নড়ে, কিন্তু মোছে না?"
> ভতু `:334`: "**নিজের কথায় ধরে ফেলেছিস।** ওটাই আজকের উত্তর।"
claim: `ধরে ফেলেছিস` needs an object, and `নিজের কথায়` reads as *by means of your own
  words* — so the sentence parses as "you caught [me] out with your own words", which is
  the opposite of what is meant. মোটু has just coined the episode's title phrase; this is
  the payoff line for the entire নড়া/মোছা arc.
ask: > "**নিজের ভাষাতেই বলে ফেলেছিস।** ওটাই আজকের উত্তর। 🙌"
because: এটাই the sentence a reader will screenshot. It currently does not parse on first
  read, and the 🙌 is ভতুর recorded way of rewarding exactly this (পর্ব ১ `:167`).
---

### [V-20] "এটাই জায়গাটা" and other clipped calques
severity: low
anchor: `NeuralNetworkInterference.tsx:124`, `:268`, `:542`
current / ask:
  - `:124` "একদম ধরেছিস, **আর এটাই জায়গাটা।**" → "একদম ধরেছিস। **আর এখানেই আসল কথাটা।**"
    (ভতু already owns this move — পর্ব ২ `:358` "একদম। এখানেই আসল ঘটনা শুরু।")
  - `:268` "**সংখ্যাটা কোথা থেকে এলো, আজকের সূত্র দিয়েই বেরিয়ে আসে।**"
    → "সংখ্যাটা কোথা থেকে এলো? আজকের সূত্র দিয়েই বেরিয়ে আসে।" (an embedded question spliced
    onto a main clause with a comma is not a Bangla sentence)
  - `:542` "কিন্তু একটা W 'কাজ করে' **মানে তো এই যে** আবুলেরটা 0-এর ডানে পড়ে আর বাবুলেরটা বাঁয়ে।"
    → "কিন্তু একটা W 'কাজ করে' **মানে তো** — আবুলেরটা 0-এর ডানে পড়বে, বাবুলেরটা বাঁয়ে।"
because: individually small, but all three are in high-visibility positions (a ভতু
  correction, a section opener, and মোটুর closing question).
---

## D. Clarity — every one of these costs a reread

### [V-21] আবুলের `X` is listed with three numbers, then used with four
severity: high
anchor: `NeuralNetworkInterference.tsx:125` → `:161`
current:
> `:125` ভতু: "আবুলের এখানে শুধু তার `X`-টা আছে — **0.60, 0.95, 0.20**। ওটুকুই তার অংশ।"
> `:161` code-box: "`X_A · X_B = (1 × 1) + (0.60 × 0.30) + (0.95 × 0.40) + (0.20 × 0.90)`"
claim: the reader is handed a three-number `X`, and thirty-six lines later that same `X`
  produces a four-term product whose **first and most emphasised term is the `1 × 1` they
  were never given**. The whole `x₀ = 1` payoff at `:166-170` — the episode's best
  callback — lands on a reader who is still trying to work out where the fourth number
  came from. ভতু herself has already said at `:50` that `x₀ = 1` is in everyone's `X`.
ask: > "আবুলের এখানে শুধু তার `X`-টা আছে — **1, 0.60, 0.95, 0.20**। ওটুকুই তার অংশ।"
because: this is the single most expensive reread in the episode, because it is a
  *mismatch*, not a difficulty — the reader assumes they miscounted and goes back to check.
---

### [V-22] `ঘর` carries three different meanings on one page
severity: medium
anchor: `NeuralNetworkInterference.tsx:50`, `:167-169`, `:197`, `:513-515`
claim: the word does three jobs without ever being introduced for any of them:
  1. a component of `W`/`X` — `:50` "চারটে **ঘর** একসাথে নেড়েছে", `:167` "প্রথম **ঘর**টার
     দিকে তাকাও", `:515` "চারটে **ঘর**কেই সমানভাবে গুণ করে", `:513` "পার্থক্যটা একটা **ঘরে**"
  2. **a different pair of students** — `:169` "বাকি **ঘরগুলোও** একই রকম"
  3. a decimal place — `:197` "দুই **ঘর** পর্যন্ত"

  Sense 2 is the damaging one: it sits two sentences after sense 1 in the same paragraph
  ("বাকি তিনটে **ঘর** প্রতিটাই দুটো ধনাত্মক ভগ্নাংশের গুণফল … বাকি **ঘরগুলোও** একই রকম"),
  so the reader reasonably takes "বাকি ঘরগুলো" to mean the other cells of *this* product
  — and then `1.1925` makes no sense, because it is smaller than the `1 + …` they were just
  told is the floor.
ask: keep `ঘর` for sense 1 only.
  - `:169` → "**বাকি জোড়াগুলোর বেলায়ও একই কথা। এই চারজনের সবচেয়ে ছোট গুণফলটা 1.1925।**"
  - `:197` → "…**একটু গোল করে — 2.05**" (per V-18's rewrite, which removes sense 3)
because: `1.1925` is the number that carries the structural claim ("no pair is zero"). If
  the reader reads it as contradicting the floor they just derived, the whole `x₀ = 1`
  payoff inverts into a doubt.
---

### [V-23] The dot-product row is printed in an order that makes "দ্বিতীয়টা" wrong
severity: medium
anchor: `NeuralNetworkInterference.tsx:154-158`
current:
> ```
> X_A · X_A = 2.3025      X_A · X_C = 2.4275
> X_A · X_B = 1.7400      X_A · X_D = 1.4175
> ```
> `:158` "**দ্বিতীয়টা** খুলে দেখি, কারণ ওটাই আজ সবচেয়ে বেশি লাগবে —"
claim: read left-to-right, the second cell is `X_A · X_C = 2.4275`. `X_A · X_B` is
  bottom-left. The reader looks at 2.4275, then at the expansion below which is manifestly
  1.7400, and goes back up to re-scan the box.
ask: reorder so the reading order matches the naming order —
> ```
> X_A · X_A = 2.3025      X_A · X_B = 1.7400
> X_A · X_C = 2.4275      X_A · X_D = 1.4175
> ```
  — or drop the ordinal entirely: "**`X_A · X_B`-টা খুলে দেখি**, কারণ ওটাই আজ সবচেয়ে বেশি লাগবে —",
  which is better anyway because it names the thing instead of its position.
  (This also keeps `2.4275` un-spotlighted, as E-016 requires — naming `X_A · X_B` directly
  draws the eye away from the comparison rather than toward it.)
---

### [V-24] The distributivity clause is the most abstract sentence in the episode, at the load-bearing step
severity: medium
anchor: `NeuralNetworkInterference.tsx:99-103`
current:
> "তৃতীয় লাইনটায় একটু থামো। ওখানে আমরা **যোগফলটাকে ভেঙে দুটো আলাদা গুণে ছড়িয়ে দিলাম** —
> আগে যোগ করে গুণ করা, আর আলাদা আলাদা গুণ করে তারপর যোগ করা, দুটো একই জিনিস।"
claim: "যোগফলটাকে ভেঙে দুটো আলাদা গুণে ছড়িয়ে দেওয়া" is a description of distributivity in
  the vocabulary of someone who already knows distributivity. The reader's actual question
  is mechanical: *what happened to the bracket?* Say that, then generalise.
ask:
> "তৃতীয় লাইনটায় একটু থামো। ওখানে বন্ধনীটা খুলে দিলাম — ভেতরের দুটো জিনিসকেই আলাদা করে
> `X_A` দিয়ে গুণ করলাম। আগে যোগ করে গুণ করা, আর আলাদা আলাদা গুণ করে তারপর যোগ করা — দুটোয়
> একই ফল। পর্ব ২-এর `WᵀX`-টা যেভাবে `w₀·x₀ + w₁·x₁ + w₂·x₂ + w₃·x₃` করে খুলেছিলাম, ওভাবে
> খুললেই ঘরে ঘরে দেখা যায়।"
because: this is the one algebraic step in the derivation the reader cannot take on faith,
  and the blueprint made justifying it a hard constraint. It is justified — but in language
  a step above where the reader is standing.
---

### [V-25] ভতুর §13 block: 110 words, four jobs, one 33-word sentence
severity: high
anchor: `NeuralNetworkInterference.tsx:512-519`
claim: this single dialog box carries (১) the ÷100/η asymmetry, (২) why x₀ is exempt,
  (৩) the raw-0–100 prediction, and (৪) the OL-02 re-commit. The middle sentence runs
  ~33 words with three subordinate clauses —
> "এটা মাথায় রাখলে একটা জিনিস আগেভাগে বলে দিতে পারবি — raw 0–100 নিয়ে কাজ করলে feature-এর
> ধাপ এত বড় হয়ে যেত যে bias আর পাল্লাই দিতে পারতো না, কারণ bias-এর ধাপ থেকে যেত ±η-তে।"

  — and `±η` is never derived. The reader has to work out on their own that
  `η · Error × x₀ = η × (±1) × 1 = ±η`. That derivation is one clause and it is missing,
  in the paragraph that has the least room for it. Also `raw` is an ordinary English
  adjective where Bangla owns the word.
ask: split into two turns with মোটুর beat between, break the long sentence, and pay the
  `±η` debt —
> ভতু: "কিন্তু না, দুটো এক জিনিস নয় — আর পার্থক্যটা একটামাত্র ঘরে। x₀ কখনো 100 দিয়ে ভাগ
> হয়নি। আমরা ভাগ করেছিলাম শুধু x₁, x₂, x₃-কে। তাই ÷100 তিনটা feature-এর ধাপ 100 গুণ ছোট
> করেছে, আর bias-এর ধাপ রেখে দিয়েছে ঠিক ±η-তেই — কারণ bias-এর x₀ তো সবসময় 1, আর Error
> সবসময় ±1। η কিন্তু চারটা ঘরকেই সমানভাবে গুণ করে, bias সহ।"
>
> মোটু: "ওহ — তাহলে এটা মাথায় রাখলে আমি আগেভাগে একটা জিনিস বলে দিতে পারবো?"
>
> ভতু: "পারবি। আসল 0–100 নিয়ে কাজ করলে feature-এর ধাপ এত বড় হয়ে যেত যে bias আর পাল্লাই
> দিতে পারতো না। কারণ bias-এর ধাপ তখনো থাকতো ±η-তেই। সংখ্যা শুধু বড় হয় না — ভারসাম্যটাই
> ভেঙে যায়। আর scale মেলানোর পুরো গল্পটা আমি এখনো দিইনি, দুবার প্রতিশ্রুতি দিয়েও দিইনি।
> ওটা আমার ঋণ, আর ওটা আমি শোধ করবো।"
because: this is the densest block on the page and it sits at position 13 of 14, after the
  reader has already absorbed interference, the definition arc, convergence honesty and η.
  As written it is where a tired reader stops. Splitting it costs ~4 lines and there are
  ~12 lines of compression reserve.
---

### [V-26] "আজকের সূত্রটাও সাথে সাথে তার ভাগ পায়"
severity: medium
anchor: `NeuralNetworkInterference.tsx:394-396`
current: > "আর যেহেতু η গোটা `ΔW`-কে গুণ করে, **আজকের সূত্রটাও সাথে সাথে তার ভাগ পায়** —"
claim: "gets its share" of what? The reader cannot recover the intended meaning (the
  interference formula also picks up an η) without reading the formula box below and
  reasoning backwards. Separately, `ΔW` is used here and again at `:413` but is only
  written out as a formula at `:501`, two sections later — `Δ` was defined at `:111` for
  `Δsum`, so `ΔW` is inferable, but it is being inferred at the same moment as a new idea.
ask: > "আর যেহেতু η গোটা `ΔW`-কে — মানে weight-এর গোটা পরিবর্তনটাকেই — গুণ করে, **আজকের
> সূত্রটার ভেতরেও η ঢুকে পড়ে** —"
because: this sentence is the entire justification for why the η-form of the interference
  formula is true. If it is opaque, the formula below it becomes something to accept
  rather than something to see.
---

### [V-27] "না হলে দুটো জিনিস দুই scale-এ থেকে যায়" — which two things?
severity: medium
anchor: `NeuralNetworkInterference.tsx:473-476`
current: > "(এই যুক্তিটা তখনই খাটে যখন শুরুর W-টাকেও একই সাথে ছোট করা হয় — না হলে **দুটো
> জিনিস দুই scale-এ** থেকে যায়।)"
claim: the referents are never named, and this `note-text` is the mandatory scope clause on
  the episode's load-bearing misconception kill. A scope clause the reader cannot resolve
  is not a scope clause. Also `ছোট করা হয়` is passive where the narrator elsewhere says
  `করি`/`করলাম`.
ask: > "(এই যুক্তিটা তখনই খাটে যখন শুরুর W-টাকেও একই সাথে ছোট করি — না হলে আমাদের আন্দাজ
> করা W আর data-র সংশোধন, এই দুটো দুই মাপে থেকে যায়।)"
because: ভতু builds her honest positive on exactly this distinction three lines later
  ("η ওটাকে ছোঁয়ই না"). Naming the two things here makes that line land instead of arrive.
---

### [V-28] "বাকিটা সোজা" — the series' own honesty rule
severity: medium
anchor: `NeuralNetworkInterference.tsx:362-364`
current: > "ওটা ধরে নিলে **বাকিটা সোজা**: আমাদের চারজনের data-য় প্রতিটা সংশোধন ওই W-এর
> দিকেই এক ধাপ — কে ভুল করলো, মাঝপথে কোন weight কোন দিকে দুলে গেল, তাতে কিছু যায় আসে না।"
claim: two things. (১) The law is explicit: বন্ধুতা "never says খুব সোজা! about something
  that is not." What follows `সোজা` is the heaviest unproven claim in the episode, stated
  in one subordinate clause, and the reader has just been told it will not be proved. (২)
  As a result the clause is also the paragraph most likely to be reread — it is the answer
  to "কেন থামলো?" compressed into eleven words, immediately after a 30-word assumption.
ask: > "ওটা ধরে নিলে বাকিটা এভাবে দাঁড়ায় — আমাদের চারজনের data-য় প্রতিটা সংশোধন ওই W-এর
> দিকে এক ধাপ করে এগোয়। কে ভুল করলো, মাঝপথে কোন weight কোন দিকে দুলে গেল, তাতে কিছু যায়
> আসে না।"
because: `সোজা` here is the one word in the episode that promises the reader something the
  episode does not deliver, and the series' whole credibility is built on not doing that.
---

### [V-29] Who put `x₀ = 1` there — ভতু contradicts herself twenty-seven lines apart
severity: medium
anchor: `NeuralNetworkInterference.tsx:148` vs `:175`
current:
> `:148` ভতু: "আর কারণটা মজার — কারণটা **তুই নিজেই** পর্ব ২-এ বসিয়েছিলি।"
> `:175` ভতু: "পর্ব ২-এ x₀ = 1 বসানোর সময় **আমি** বলেছিলাম ওটা নাকি শুধু দেখতে সুন্দর হওয়ার জন্য।"
claim: in পর্ব ২ it is ভতু who introduces `x₀ = 1` (`:141-150`, "ওরও একটা সঙ্গী দরকার, না?"
  → "দিয়ে দিলাম একটা x₀"). মোটু only exclaims. So `:148` credits মোটু with something he did
  not do, and `:175` then corrects it without acknowledging the change. The reader who
  remembers পর্ব ২ — and this whole episode is addressed to that reader — notices.
  Separately `কারণটা মজার — কারণটা` repeats the same word twice in one breath.
ask: > "এই চারজনের বেলায় কক্ষনো না। আর মজার ব্যাপার হলো — কারণটা তুই পর্ব ২-এই নিজের চোখে
> দেখেছিস। আগে আবুলের সারিটা কষে দেখি।"
because: the `x₀ = 1` payoff is the episode's best callback. It should not open by getting
  the callback's own history wrong.
---

### [V-30] The integrity clause lists three exculpations, two of which are in the interval
severity: low
anchor: `NeuralNetworkInterference.tsx:219-222`
current: > "Epoch 1-এ আবুল আর বাবুলের পরে কাবুল ও দাবুল দুজনেরই Error ছিল 0, তাই ওরা
> weight-এ হাতই দেয়নি। **আর Epoch 2-এ আবুলের নিজের Error ছিল 0, কাজেই নিজেও নিজেকে তোলেনি।**"
claim: the third clause is doing a job the reader cannot see — it pre-empts "did আবুল's own
  Epoch-2 update happen before 0.31 was printed?" But nothing has raised that question, so
  the reader stops to work out why it is here.
ask: make the job visible in three words —
> "আর 0.31-টা মাপা হয়েছিল আবুলের Epoch 2-এর পালার একদম শুরুতে, নিজের update-এর আগে — আর
> সেই Epoch 2-এ তার নিজের Error ছিল 0, কাজেই নিজেও নিজেকে তোলেনি।"
because: the integrity clause is what makes the subtraction exact rather than approximate.
  It should read as airtight, not as one item too many.
---

### [V-31] "আজ তোর দ্বিতীয় প্রশ্নটাও" — which was the first?
severity: low
anchor: `NeuralNetworkInterference.tsx:550`
current: > "(ভতু হেসে ফেললো।) আজ তোর **দ্বিতীয়** প্রশ্নটাও পুরো একটা পর্ব চেয়ে বসলো।"
claim: মোটু asks eight questions in this episode. The intended sense — *the second question
  big enough to need its own episode, the first being the one from পর্ব ২* — is recoverable
  but not on first read.
ask: > "(ভতু হেসে ফেললো।) এক পর্বের ধার শোধ করলাম, আর তুই সাথে সাথে আরেকটা পর্ব চেয়ে বসলি।"
because: the bookend with `:9` ("পুরো একটা পর্ব চেয়ে নিয়েছিল") is a lovely structural rhyme
  and this rewrite makes it explicit instead of relying on an ordinal the reader has to count.
---

## E. Humour and warmth

### [V-32] Zero emoji in twenty-two character lines — a measurable drift
severity: medium
anchor: `NeuralNetworkInterference.tsx` — all `dialog-box` blocks
claim: the draft contains eleven `h2` emoji and one `concept-box h3` emoji, correctly
  placed and never inside narrative prose. But not one of মোটু's or ভতুর lines ends with an
  emoji. Both published episodes do this and voice.md records it as an observed convention:
  - পর্ব ১ `:155` মোটু "…তারপর তুলনা করো. **😄**", `:167` ভতু "দারুণ প্রশ্ন! **🙌**"
  - পর্ব ২ `:121` মোটু "মাইনাসটা প্লাস হয়ে গেল কীভাবে? **😮**", `:198` ভতু "ধৈর্য, ধৈর্য! **😄**"
  - characters.md lists `😄 😮` as মোটুর recorded tics and `😄 🙌` as ভতুর
ask: three, no more, at the beats that already earned them —
  - `:211-212` মোটু "আরে! 0.31 তো … কখনো ভাবিনি! **😮**"
  - `:334` ভতু "নিজের ভাষাতেই বলে ফেলেছিস। ওটাই আজকের উত্তর। **🙌**" (with V-19)
  - `:424-425` মোটু "মিলে গেল! … ঠিকঠাক কাজ করছে। **😄**" (with V-02)
because: this is a heavier episode than পর্ব ২ — the reader watches learning break twice —
  and the series' way of carrying that weight is warmth in the character lines. Stripping
  the emoji makes an already-serious episode read as solemn.
---

### [V-33] §7–§11 — five consecutive sections, no working relief
severity: medium
anchor: `NeuralNetworkInterference.tsx:257-441`
claim: humour distribution across the episode is otherwise good — roughly one moment per
  section, never two stacked, never replacing an explanation, and the ledger is respected:
  - `:72-73` "আ, বা, কা, দা — নামগুলো যেন ইচ্ছে করেই সাজানো ছিল!" — a deliberate callback to
    the naming gag the ledger marks "prime callback material", and it lands because it is
    doing new work (introducing the A/B/C/D notation) rather than repeating the old joke ✅
  - `:175-177` "আমি বলেছিলাম ওটা নাকি শুধু দেখতে সুন্দর হওয়ার জন্য … আসলে ওটাই কারণ" —
    technical irony, the good kind ✅
  - `:211-212` মোটু "আমি নিজে ওটা পড়েছি, কিন্তু কোথা থেকে এলো কখনো ভাবিনি!" ✅
  - `:456` ভতু "যুক্তিটা এত সুন্দর যে ভুলটা সবচেয়ে বেশি এখানেই হয়। আমিও একসময় এটাই ভাবতাম।" —
    the best line in the episode; it rescues মোটু by joining him ✅
  - `:550` "(ভতু হেসে ফেললো।)" — stage direction used once, at the end, as পর্ব ২ used it ✅

  Nothing is repeated from the ledger as if new. But between `:257` (কাবুল breaks) and
  `:441`, the two attempts at relief are `:350` "ভালো চোখ।" (V-11, a calque) and `:334`
  "নিজের কথায় ধরে ফেলেছিস।" (V-19, does not parse). So the stretch where the reader most
  needs air — কাবুল breaking, the definition being retracted, the mistake count going *up*,
  the η confession — has no relief that actually works.
ask: V-11, V-19 and V-32's three emoji fix this at zero line cost. Nothing new needs
  inventing; the beats are already written, they are just written flat.
because: this is the humour's actual job in this episode. It is not decoration here — it is
  what tells the reader that ভতু is not worried, so they need not be either.
---

### [V-34] মোটু is corrected twice without being mocked — confirmed
severity: none (pass, recorded)
anchor: `:29-36` and `:448-457`
what: both confidently-wrong moments are handled in the পর্ব ১/২ tradition. `:36`
"ফিরেছে তো শুধু ওই একটা রে। বাকি তিনটে কোথায় গেল, একবার দেখ —" corrects with a number, not
  a verdict. `:456` "যুক্তিটা এত সুন্দর যে ভুলটা সবচেয়ে বেশি এখানেই হয়। আমিও একসময় এটাই
  ভাবতাম।" is better than the standard — ভতু puts herself in the wrong alongside him before
  correcting. This is the series' warmth working exactly as designed, and no reviewer should
  touch either line.
---

### [V-35] Structure — intro-text and ending both pass
severity: none (pass, recorded)
anchor: `:7-12`, `:553-556`
what: the `intro-text` starts the episode rather than describing it — it re-asks মোটুর
  question in one sentence and then puts the knife in ("প্রথমে 2.05, তার একটু পরেই 0.31।
  মাঝখানে কে কী করলো, কেউ জিজ্ঞেস করেনি।"). No recap section, no "আজ আমরা শিখবো". The
  `highlight-text` is a door: no summary, no recap list, no receipt, ends with 🚀 as both
  published episodes do. Zero banned phrases from §7 anywhere in the file — I grepped all
  seven. মোটুর `:528-532` consolidation is ability-framed and in a `dialog-box`, which keeps
  it out of F12 territory. Its only fault is the semicolon (V-05).

  One low note, not a finding: `:554` repeats "যে চারটা সংখ্যায় গিয়ে neuron থেমেছিল" word
  for word from `:543-544` eleven lines above. পর্ব ২ rephrased between মোটুর question and
  the `highlight-text` rather than repeating. Worth a light rewording if a line is spare.
---

## Cross-review notes

- **To @compression-editor:** V-25 asks for ~4 more lines in §13, not fewer. If the budget
  is tight, take them from `:99-103` and `:219-222` where my rewrites are also shorter, or
  from the ~12-line reserve E-019 preserved. Do not compress ভতুর §13 block further — it is
  already the densest paragraph on the page and compressing it is what produced the problem.
- **To @depth-reviewer:** V-21 (`1, 0.60, 0.95, 0.20`) and V-25's `±η` derivation are both
  additions of one clause each. Neither reads as a lecture; both remove a stumble. If you
  want more than a clause in either place, that is a different argument and I would resist it.
- **E-020 is not reopened.** Compliance verified by grep; see the header.
- **On `৬টা epoch` (V-06):** the blueprint ruled Bangla, পর্ব ২ printed Latin. My ruling is
  that the published page wins, per voice.md's Drift note. If @continuity-reviewer disagrees,
  this is the one finding in this file I will concede without argument.

---

## Scores

```
clarity:          85 / 100   (threshold 88 — FAILS)
bangla-language:  82 / 100   (threshold 88 — FAILS)
humour:           72 / 100   (threshold 70 — passes, narrowly)
```

### clarity — 85

The spine works. A reader who follows `−0.25 → 2.0525 → 0.3125` will feel the episode land,
the নড়া/মোছা definition arc is genuinely well staged across `:56-65` → `:294-295` → `:322-323`,
and the SVG at `:227-255` earns its space. Deductions, all anchored:

- −5 `:125` vs `:161` (V-21) — আবুলের `X` given as three numbers and used as four. This is a
  mismatch, not a difficulty, so the reader stops and hunts rather than thinking.
- −4 `:512-519` (V-25) — 110 words, four jobs, a 33-word sentence, and `±η` asserted without
  its one-clause derivation, at position 13 of 14.
- −2 `:167-169` (V-22) — `ঘর` meaning "matrix cell" and "student pair" two sentences apart,
  which makes `1.1925` look like it contradicts the floor just derived.
- −2 `:154-158` (V-23) — "দ্বিতীয়টা" points at the third cell as laid out.
- −1 `:99-103` (V-24) — the distributivity clause is a step above the reader.
- −1 `:394-396` (V-26) — "তার ভাগ পায়" is not recoverable on first read.
- −1 `:473-476` (V-27) + `:362` (V-28) — an unresolvable scope clause, and `সোজা` attached to
  the heaviest unproven claim in the episode.

Seven paragraphs need a reread, five of them in §11–§13. That clustering is what puts this
below 88 rather than at it — the reader is asked to work hardest when they have least left.

### bangla-language — 82

The register is right and never slips: চলিত throughout, no সাধু anywhere, ভতু is তুই to মোটু
without a single lapse into আপনি or তুমি, মোটু is তুমি + আপু, the narrator is তুমি
(`:10` "খেয়াল করো", `:167` "তাকাও", `:463` "ধরো"). Technical terms are in Latin — `neuron`,
`weight`, `dot product`, `learning rate`, `catastrophic forgetting`, `epoch`, `feature`,
`bias`, `update` — and ordinary words are in Bangla (`গুণক`, `ভগ্নাংশ`, `ধনাত্মক`, `চিহ্ন`,
`সংজ্ঞা`, `ভারসাম্য`). Numerals are handled correctly nearly everywhere: `পর্ব ৩` in Bangla,
`2.0525` / `η = 0.5` / `−0.4425` in Latin, never mixed inside one expression. Deductions:

- −9 three F14 violations, each a hard failure: `ডেটা` ×2 at `:362-363` (V-01) — in the same
  file that writes `data` in Latin four times; `শর্টকাট` at `:424` (V-02); `লিভার` at `:513`
  (V-03).
- −5 `তিনটে`/`চারটে` ×10 (V-04). Zero occurrences in পর্ব ১ or ২, which use `তিনটা`/`তিনটাই`/
  `তিনটার` seven times between them — and the draft itself writes `চারটা` at `:543` and `:554`.
  This is the single most audible thing on the page for a Bangladeshi ear.
- −3 six translated-English sentences in high-visibility positions: `:350` "ভালো চোখ।" (V-11),
  `:506` "প্রসাধনী কাজ" (V-12), `:457` passive "নেওয়া হয় কীসের ভিত্তিতে" (V-13), `:505-506`
  V-S word order (V-14), `:321` "ক্ষতিটা স্থগিত" (V-15), `:51` "সৎ মাপকাঠি" (V-17).
- −1 `:197` "ছাপিয়েছিল" is the wrong verb — it reads as *surpassed*, next to two numbers
  (V-18).
- −1 five semicolons (V-05), including one in the episode's answer sentence at `:322`; zero
  in either published episode.
- −1 `:334` the payoff line for the whole নড়া/মোছা arc does not parse (V-19).
- −1 register/consistency small change: `:257` তুই imperative in an `h2` (V-10), `:364`
  `৬টা epoch` against পর্ব ২'s `4টা iteration` (V-06), `:73`/`:313` space-attached suffixes
  (V-07), `:353` `পঞ্চমটার` (V-08), `:219` `ও` for `আর` (V-09).

Every one of these has a rewrite above. None requires re-planning; this is a revision pass,
not a rewrite.

### humour — 72

Passes, but on the strength of the first half. Five moments across eleven sections, never two
stacked, never replacing an explanation, nothing from `humor-ledger.md` reused as if new, and
the one ledger callback — `:72-73` "আ, বা, কা, দা — নামগুলো যেন ইচ্ছে করেই সাজানো ছিল!" — is
the right way to do it: the gag carries new work (the A/B/C/D notation) instead of just
re-firing. `:456` "আমিও একসময় এটাই ভাবতাম" is the best line in the episode. Deductions:

- −14 `:257-441` (V-33) — five consecutive sections through the episode's heaviest material
  with no working relief, because the two attempts placed there are `:350` "ভালো চোখ।" (a
  calque) and `:334` "নিজের কথায় ধরে ফেলেছিস।" (does not parse). The humour is absent exactly
  where this episode needs it to do its job.
- −8 (V-32) — zero emoji across twenty-two character lines, against পর্ব ১'s three and
  পর্ব ২'s four, and against characters.md's recorded tics `😄 😮` (মোটু) and `😄 🙌` (ভতু).
  On its own that is small; combined with the flat stretch above it makes the episode read
  more solemn than the series is.
- −6 `:379-441` — the η reveal is the natural place for a lighter beat (ভতু confessing she
  hid a `1` for a whole episode is inherently funny) and `:384` spends it on
  "এবার একটা স্বীকারোক্তি।" (V-16), the stiffest noun-sentence on the page.

Fixing V-11, V-16, V-19 and V-32 costs no lines and would put this comfortably in the 80s.

---
---

# Iteration 2 — re-review

draft: `src/pages/neural-network/NeuralNetworkInterference.tsx` (600 lines, was 560)
read in full: the whole draft again; iteration-1 findings above; `episodes/003/verdict.md`;
`src/pages/neural-network/NeuralNetworkLearning.tsx`; `series/voice.md`; `state/humor-ledger.md`.

**Verdict up front: the episode improved, substantially, and the improvement is real rather
than cosmetic.** Every one of the thirty-three actionable iteration-1 findings verifies as
applied. The three F14 hard failures are gone. The `তিনটে`/`চারটে` dialect drift is gone.
The five semicolons are gone. Six translated-English sentences are gone. The `X` mismatch at
`:125`→`:161` is gone. The page now reads, aloud, like the same hand that wrote পর্ব ২ — which
it did not, in iteration 1.

Five findings remain, numbered V-36…V-40, plus one note. **Two of them are new problems
created by the fixes** and I say so explicitly against each. None is a hard failure, none is
a transliteration, none is passive or সাধু, and every one has a rewrite.

---

## Verification of iteration-1 findings — all applied

Grepped the file for every iteration-1 offender string. **Zero matches** for:
`ডেটা`, `শর্টকাট`, `লিভার`, `নিউরন`, `ওয়েট`, `গ্রেডিয়েন্ট`, `ইনপুট`, `আউটপুট`, `লেয়ার`,
`তিনটে`, `চারটে`, `;` (any semicolon anywhere in the file), `দাগ`, `রেখা`, `সীমারেখা`,
`প্রসাধনী`, `স্থগিত`, `স্বীকারোক্তি`, `ছাপিয়েছিল`, `সৎ মাপকাঠি`, `ভালো চোখ`, `পঞ্চম`.
Also zero matches for all seven §7 banned Bangla phrases, and zero for space-attached case
endings (`[a-z] গুলো|টা|এর|…` — V-07 clean at both `:73` `matrix-গুলো` and `:316`
`epoch-গুলোতে`).

Spot-verified individually, current text quoted:

| # | anchor now | verified |
|---|---|---|
| V-01 | `:365`, `:373` | "এমন **data**-ও আছে", "চারজনের **data**-য়" ✅ |
| V-02 | `:438` | "আমি **একটু ছোট পথে** মিলিয়ে দেখি" ✅ |
| V-03 | `:542` | "দুটো **এক জিনিস** নয় — আর পার্থক্যটা একটামাত্র ঘরে" ✅ metaphor removed, `analogy: NONE` intact |
| V-04 | all | `তিনটা`/`চারটা` throughout ✅ |
| V-05 | all | zero semicolons; `:326` now reads "মোছা মানে 0 পেরিয়ে **ওপারেই থেকে যাওয়া**" with the em dash it was denied ✅ |
| V-06 | `:377` | "**6টা** epoch-এ সেটা থেমেছিল" ✅ |
| V-08 | `:356` | "**Epoch 5**-এর আগে থামেইনি" ✅ |
| V-09 | `:220` | "কাবুল **আর** দাবুল — দুজনেরই" ✅ |
| V-10 | `:259` | `<h2>⛔ দাঁড়াও — এবার কাবুলের দিকে **তাকাই**</h2>`, and ভতুর `তাকা` survives at `:264` ✅ |
| V-11 | `:353` | "**বাহ, চোখ আছে তোর!** … 😄" ✅ |
| V-12 | `:535` | "শুধু **সাজিয়ে-গুছিয়ে রাখার ব্যাপার** ছিল না" ✅ |
| V-13 | `:487` | "neuron সিদ্ধান্তটা আসলে **নেয় কী দেখে?**" ✅ passive gone |
| V-14 | `:534` | "কাজেই **বাকি দুটো জিনিসই** এক ধাপের মাপ ঠিক করে দেয় — η, আর `X`-এর মাপ" ✅ SOV restored |
| V-15 | `:324` | "ক্ষতিটা থেকে যায় না — কিছুক্ষণের জন্য হয়, তারপর সে নিজেই তুলে নেয়" ✅ |
| V-16 | `:397` | "এবার তোকে একটা কথা বলি, **যেটা পর্ব ২-এ চেপে গিয়েছিলাম**" ✅ |
| V-17 | `:51` | "একটা weight দেখে **রায়** দেওয়া যায় না। **মাপার সত্যিকারের জিনিস একটাই**" ✅ |
| V-18 | `:198` | "পর্ব ২-এর পাতায় এই সংখ্যাটাই **ছাপা হয়েছিল**, একটু গোল করে" ✅ — also kills `ঘর` sense 3 |
| V-19 | `:337` | "**নিজের ভাষাতেই বলে ফেলেছিস।** ওটাই আজকের উত্তর। 🙌" ✅ |
| V-20 | `:271`, `:583` | "সংখ্যাটা কোথা থেকে এলো? আজকের সূত্র দিয়েই বেরিয়ে আসে।" / "মানে তো — আবুলেরটা 0-এর ডানে পড়বে, বাবুলেরটা বাঁয়ে।" ✅ |
| V-21 | `:126` | "তার `X`-টা আছে — **1**, 0.60, 0.95, 0.20" ✅ the four-term product at `:162` no longer ambushes |
| V-22 | `:170` | "**বাকি জোড়াগুলোর বেলায়ও একই কথা।** এই চারজনের সবচেয়ে ছোট **গুণফলটা** 1.1925।" ✅ `ঘর` now single-sense |
| V-23 | `:155-159` | box reordered **and** the ordinal dropped for the name: "`X_A · X_B`-টা খুলে দেখি" ✅ both halves taken |
| V-24 | `:100-103` | "ওখানে **বন্ধনীটা খুলে দিলাম** — ভেতরের দুটো জিনিসকেই আলাদা করে `X_A` দিয়ে গুণ করলাম" ✅ |
| V-25 | `:539-561` | split ভতু → মোটু → ভতু; `±η` debt paid — see V-39 below, which is a **new** problem at this anchor, not a re-raise |
| V-26 | `:408-409` | "η গোটা `ΔW`-কে — **মানে weight-এর গোটা পরিবর্তনটাকেই** — গুণ করে, আজকের সূত্রটার ভেতরেও η ঢুকে পড়ে" ✅ |
| V-27 | `:504-505` | "…**আমাদের আন্দাজ করা W আর data-র সংশোধন, এই দুটো** দুই মাপে থেকে যায়" ✅ passive also gone (`ছোট করি`) |
| V-28 | `:373` | "ওটা ধরে নিলে **বাকিটা এভাবে দাঁড়ায়** —" ✅ `সোজা` gone; the F06 guard at `:363-366` is untouched as the verdict required |
| V-29 | `:149` | "আর মজার ব্যাপার হলো — কারণটা **তুই পর্ব ২-এই নিজের চোখে দেখেছিস**" ✅ credit no longer misassigned |
| V-30 | `:221-223` | "আর 0.31-টা মাপা হয়েছিল আবুলের Epoch 2-এর পালার **একদম শুরুতে, নিজের update-এর আগে** —" ✅ |
| V-31 | `:591` | "এক পর্বের ধার শোধ করলাম, আর তুই সাথে সাথে আরেকটা পর্ব চেয়ে বসলি।" ✅ |
| V-32 | `:213 😮`, `:337 🙌`, `:353 😄`, `:439 😄` | four, all at the end of a character line, **zero inside narrative prose** ✅ |
| V-35 | `:584`, `:595` | the word-for-word repeat is gone; মোটু says it once at `:584` and the `highlight-text` rephrases ✅ |

**Structural bonus not asked for and worth recording:** the forward-pointer added at `:337`
("তবে ওর নিচে একটা শর্ত লুকিয়ে আছে — একটু পরেই বলছি।") is **paid** at `:363-366`
("আর একটু আগে যে বললাম 'মোছে না' — ওটাও এই ধরে নেওয়াটার উপরেই দাঁড়িয়ে আছে। না থামলে
'পরে ফিরে আসবে' কথাটার কোনো মানেই থাকে না।"). A promise made and kept twenty-six lines
apart, in ভতুর own voice, is exactly how this series carries a condition. Do not cut either half.

---

## Ruling on the one `applied-differently`

**ACCEPTED, and the writer's version is better than mine.** I asked for
"আর এখানেই আসল কথাটা" at `:124`; that string already existed at `:512`. The writer wrote
`:125` "একদম ধরেছিস। **এখানেই আসল ঘটনাটা।**" and moved `:511` to "আর এবার আসল কথাটা।"

Verified against ground truth: পর্ব ২ `:483` prints "**একদম ধরেছিস।**" and পর্ব ২ `:358`
prints "একদম। **এখানেই আসল ঘটনা শুরু।**" The writer's `:125` fuses two ভতু moves that are
both on the published page, which is a stronger echo for the returning reader than my
version was, and the two "আসল" lines no longer rhyme with each other across 386 lines.
No objection. This is the correct call.

---

## Remaining findings

### [V-36] `দোলা` arrives with a definite marker and no introduction — and is missing its object case
severity: medium — **new material, previously unreviewed** (`:370-380` is the added cancellation box)
anchor: `NeuralNetworkInterference.tsx:377`, recurring at `:573`
current:
> `:377` "কিন্তু যেটুকুতে চারজনের কারো আপত্তি নেই, সেটুকু কাটে না — সেটুকু প্রতি epoch-এ জমে।
> w₁, w₂, w₃ কিন্তু ফেরেনি, খেয়াল করেছিস? **ওই জমা অংশটাই শেষে দোলাটা ছাড়িয়ে যায়।**"
> `:573` মোটু: "যেটুকুতে সবাই একমত সেটুকু তো জমছেই, **দোলাটা তার উপরেই চড়ে আছে।**"

claim: two things, and the second is the one that costs a reread.

  (১) **Missing `-কে`.** `X ছাড়িয়ে যাওয়া` takes an object in `-কে`: *দোলাটা**কে** ছাড়িয়ে যায়*.
  Without it, `দোলাটা` reads for a beat as the **subject** of `ছাড়িয়ে যায়` — "the oscillation
  overtakes [something]" — which is the exact opposite of the claim. The `-ই` on
  `ওই জমা অংশটাই` lets the reader recover it, but only on the second pass.

  (২) **`দোলা` is a coinage introduced with a definite marker.** The noun has never appeared
  before `:377`. The iteration-1 draft carried "মাঝপথে কোন weight কোন দিকে **দুলে গেল**" in
  this same box; the V-28 rewrite dropped that clause, so the verb that would have licensed
  the noun is no longer on the page. What is on the page is the *picture* — "যেখানে দুজন
  উল্টো দিকে ঠেলছে, সেই দুই ধাক্কা অনেকটা কাটাকাটি হয়ে যায়" and w₀ going −3.0 → −2.0 → −3.0
  — so `দোলা` is inferable. But the reader is being asked to name a thing at the same moment
  they are being told it gets overtaken, and then মোটু reuses the bare noun 196 lines later
  at `:573` as if it were established vocabulary.

  **This is a new problem created by the V-28 fix**, not a re-raise: the V-28 anchor
  (`:362-364`, `বাকিটা সোজা`) is closed and correct; what is new is that removing
  `দুলে গেল` orphaned `দোলা`.
rewrite: name it in the same breath, in ভতুর own idiom, at zero line cost —
> `:377` "…সেটুকু প্রতি epoch-এ জমে। w₁, w₂, w₃ কিন্তু ফেরেনি, খেয়াল করেছিস? এই যে
> আগে-পিছে **দোলা** — ওই জমা অংশটাই শেষে **ওটাকে ছাড়িয়ে যায়**। 6টা epoch-এ সেটা থেমেছিল —
> ঝাঁকুনি খেতে খেতে থেমেছিল, মসৃণভাবে নয়।"

  `:573` then works as written, because মোটু is now reusing a word ভতু handed him — which is
  what মোটুর consolidation is supposed to sound like.
---

### [V-37] "দুই বেলাতেই" — the one phrase left that no Bangladeshi engineer would say
severity: medium — **new material** (`:481-488` is the rebuilt η-misconception box)
anchor: `NeuralNetworkInterference.tsx:484`
current:
> "**দুই বেলাতেই** আবুল বেঁচে গেছে, 0-এর ডান পাশেই আছে।"

claim: `বেলা` in this series is always possessed and always means *in the case of* —
`:29` "বাবুলের **বেলায়**", `:149` "এই চারজনের **বেলায়**", `:170` "বাকি জোড়াগুলোর **বেলায়ও**",
`:315` "কাবুলের **বেলায়**", and পর্ব ২ `:686` "বাবুলের **বেলায়** উল্টো কমলো". All correct.

  But **bare** `দুই বেলা`, with a numeral and no possessor, is a fixed expression that means
  *twice a day* / *two meals* — "দুই বেলা ভাত জোটে না". Read aloud, `দুই বেলাতেই আবুল বেঁচে
  গেছে` lands for half a beat as "আবুল survived both mealtimes." It is the only sentence left
  on the page where the Bangla itself trips, and it opens the paragraph that the orchestrator
  promoted to blocking — the η = 1 vs η = 0.5 comparison, the episode's load-bearing kill.
rewrite:
> "**দুবারই** আবুল বেঁচে গেছে, 0-এর ডান পাশেই আছে। কিন্তু কোথায় দাঁড়িয়ে আছে দেখ।"

  (`দুই ক্ষেত্রেই` also works and is unambiguous; `দুবারই` is the more spoken of the two and
  matches the `দুটো Epoch 1 পাশাপাশি` framing at `:472`.)
---

### [V-38] The subject changes mid-sentence at the misconception kill
severity: medium — **new material** (`:481-488`)
anchor: `NeuralNetworkInterference.tsx:485-486`
current:
> "**η ছোট করে আবুলের শেখাটা বাঁচেনি রে, উল্টো তাকে আরও নাজুক করে রেখে গেছে।**"

claim: the subject of `বাঁচেনি` is `আবুলের শেখাটা`. The subject of `রেখে গেছে` is an unnamed
  agent (the act of shrinking η), and `তাকে` now points at আবুল, not at his learning. So one
  sentence carries three referents — শেখাটা, an implied agent, and আবুল — with only one of
  them named. Read aloud it wobbles at the comma, and this is the sentence the whole
  misconception section exists to deliver.

  ভতুর own solution is already on the page eighteen lines later at `:512-513`:
  "**ছোট η** আসলে আমাদের আন্দাজটাকেই বেশিদিন ক্ষমতায় রাখে" — subject named, one clause,
  lands. Use the same construction.
rewrite:
> "**ছোট η আবুলের শেখাটা বাঁচায়নি রে — উল্টো তাকে আরও নাজুক করে রেখে গেছে।**"

  Now `ছোট η` is the subject of both verbs, `তাকে` unambiguously means আবুল, and the sentence
  pre-echoes `:512` instead of competing with it — the two become a matched pair, which is
  what a reader remembers.
---

### [V-39] The `±η` derivation was paid, but paid inside a 34-word sentence
severity: medium — **new problem created by the V-25 fix at the V-25 anchor**, stated explicitly as such
anchor: `NeuralNetworkInterference.tsx:543-546`
current:
> "তাই ÷100 তিনটা feature-এর ধাপ 100 গুণ ছোট করেছে, আর bias-এর ধাপ রেখে দিয়েছে ঠিক ±η-তেই —
> কারণ bias-এর x₀ তো সবসময় 1, আর Error সবসময় ±1, কাজেই `η · Error × x₀` মানে `η × (±1) × 1`।"

claim: **the split worked.** ভতুর first turn is down from ~110 words to ~68, মোটু now has a
  beat at `:552`, the four jobs are down to two per turn, and the `±η` debt I flagged is
  genuinely paid rather than asserted. That part of V-25 is closed and I am not reopening it.

  What is new is that the debt was paid by **appending** the derivation to the existing
  sentence with `কাজেই` rather than by starting a new one. My V-25 rewrite ended that sentence
  at "…আর Error সবসময় ±1।" The current sentence runs 34 words across four coordinated clauses
  (`তাই … আর … কারণ … আর … কাজেই …`), which is one word longer than the 33-word sentence V-25
  was raised against. The density is redistributed correctly across the block; it is this one
  sentence that did not get the full-stop treatment.

  This is not fatal — the clauses are additive rather than nested, so it does not force a
  reread the way the old one did — but it is over the ~25-word law and it is the last long
  sentence left in the episode.
rewrite: one full stop, zero lines —
> "তাই ÷100 তিনটা feature-এর ধাপ 100 গুণ ছোট করেছে, আর bias-এর ধাপ রেখে দিয়েছে ঠিক ±η-তেই।
> **কারণ bias-এর x₀ তো সবসময় 1, আর Error সবসময় ±1** — কাজেই `η · Error × x₀` মানে
> `η × (±1) × 1`। η কিন্তু চারটা ঘরকেই সমানভাবে গুণ করে, bias সহ।"
---

### [V-40] A line I named as one of the episode's best has been shaved, and the rhythm went with it
severity: medium — **new problem created during the revision**
anchor: `NeuralNetworkInterference.tsx:560`
current:
> "**ওটা আমার ঋণ, শোধ করবো।**"
was (iteration 1, `:519`, and in my own V-25 rewrite):
> "**ওটা আমার ঋণ, আর ওটা আমি শোধ করবো।**"

claim: I quoted the original in my iteration-1 header as one of six sentences "as good as
  anything in পর্ব ২", and my V-25 rewrite preserved it verbatim for that reason. Three words
  have since been cut. The music of the line was the repeated `ওটা` — *that* is my debt, and
  *that* I will repay — a two-beat construction that turns an admission into a promise. With
  the second `ওটা` and the `আমি` gone, the clause flattens into a fragment: `শোধ করবো` with no
  subject and no object, hanging off a comma.

  It also matters that this is the OL-02 spoken re-commit. The reader is being asked to
  believe a promise. A promise delivered as a three-word fragment is a weaker promise.

  I am ruling on this as the final authority on rhythm, per my cross-review remit: **three
  words is not a compression saving worth taking here.** If a line is genuinely needed, take
  it from V-39's rewrite, which is punctuation-only and net zero.
rewrite: restore verbatim —
> "আর scale মেলানোর পুরো গল্পটা আমি এখনো দিইনি, দুবার প্রতিশ্রুতি দিয়েও দিইনি।
> **ওটা আমার ঋণ, আর ওটা আমি শোধ করবো।**"
---

### [V-41] মোটু is silent for ninety-three lines — six consecutive ভতু boxes, and the revision added one
severity: high — **the largest remaining voice problem, and it worsened in iteration 2**
anchor: `NeuralNetworkInterference.tsx:342` (মোটুর last line) → `:435` (his next one)
claim: between মোটুর objection at `:342-347` and his next line at `:435-440`, there are **six
  consecutive ভতু dialog boxes** — `:350`, `:360`, `:370`, `:382`, `:394`, `:416` — spanning
  two `h2` sections (🐢 and 🎚️), two formula boxes and a narrative paragraph, with no মোটু
  turn anywhere in between.

  Measured against the target: I grepped every `dialog-box` in পর্ব ২. Its longest ভতু run is
  **three** (`:138`/`:156`/`:167`, `:227`/`:240`/`:271`), and each of those three is broken by
  a table or a `code-box` doing visible work. It never reaches four. পর্ব ৩ now reaches six.

  **The revision made this worse by exactly one box.** The V-25/V-28 split correctly moved the
  cancellation mechanism into its own turn at `:370-380`, which is the right thing to do to
  the *prose* — but it added a fifth-then-sixth teacher box to a run that was already the
  longest in the series. This is the classic failure of this format inverted: not prose with
  dialogue sprinkled on, but a lecture wearing dialogue's costume. Six `dialog-box votu`
  divs in a row is a monologue that has been given speech marks.

  It is also the mechanical cause of what is left of my iteration-1 V-33. The reader's proxy
  is absent for the convergence-honesty beat, the `catastrophic forgetting` bound, and the
  entire η reveal — the three hardest passages in the episode. মোটু is how this series says
  *you are allowed to not follow that yet*, and he is not there to say it.
rewrite: one মোটু beat, ~5 lines, dropped between `:368` and `:370` — where he is already
  overdue, because ভতু has just told him to assume something without proof and he has not
  reacted —
> ```tsx
> <div className="dialog-box motu">
>   <span className="dialog-name">মোটু:</span>
>   <p>"ঠিক আছে আপু, ধরে নিলাম। কিন্তু ভুল যখন বাড়ছিল, তখনো তো ওই W-এর দিকেই যাচ্ছিল বলছো —
>   তাহলে থামলো কীভাবে?"</p>
> </div>
> ```

  That single beat turns `:370-380` from ভতুর fifth uninterrupted paragraph into an **answer**,
  which is what the cancellation mechanism deserves to be. It also breaks the run into
  3 + 2 + 1, which is within পর্ব ২'s observed range.

  If only one more line-costing change is affordable in iteration 3, **this is the one.** It
  buys more than V-36 through V-40 combined, because it is the difference between the reader
  hearing a friend and the reader hearing a lecturer.
---

### [note, not a finding] "কিন্তু না" at `:542` answers a question nineteen lines back
anchor: `NeuralNetworkInterference.tsx:542`
মোটু asks at `:522-523` "ওটাও কি তাহলে η ছোট করারই আরেক রূপ?" The narrative at `:533-537`
then *agrees* with the premise ("÷100 … ওটাই ঠিক করে দিয়েছিল প্রতিটা update কত জোরে লাগবে"),
and only then does ভতু open with "**কিন্তু না**, দুটো এক জিনিস নয়". For a beat the `কিন্তু না`
reads as contradicting the sentence directly above it rather than মোটুর question nineteen
lines up. Naming the referent fixes it — "কিন্তু না — ÷100 আর ছোট η এক জিনিস নয়…".

**I am recording this as a note and deducting nothing for it**, because the same structure
existed in iteration 1 at `:505-513` and I did not deduct for it then. Raising it now would
manufacture a fake plateau in the score delta. Take the fix if a line is spare; ignore it
otherwise.

---

## Checked and cleared — do not reopen

- **Emoji placement.** Four in character lines (`:213 😮`, `:337 🙌`, `:353 😄`, `:439 😄`),
  eleven leading `h2`, one leading `concept-box h3` (`:57 📐`), one `🚀` closing the
  `highlight-text`, and `✅` at `:432` inside a `<pre>` — which voice.md §4 records as this
  series' per-row verdict convention. **Zero emoji inside narrative prose.** Clean.
- **No transliteration crept back in** anywhere, including in the ~40 new lines.
- **`analogy: NONE` holds.** `লিভার` is gone. The one figure left in the new material —
  `:471` "η শুধু বাবুলের **হাতটা** ছোট করে না রে — আবুলের নিজের হাতটাও ঠিক একই ভাবে ছোট করে"
  — is a single-sentence paired figure, not a model the reader can carry wrongly into পর্ব ৪.
  It does not need bounding. @depth-reviewer: please do not open this as an unbounded analogy.
- **Numerals.** Latin for everything computational, Bangla for counting words and the episode
  number: `6টা epoch` `:377`, `Epoch 5` `:356`, `2, 2, 1, 2, 1, 0` `:354`, against
  `চারজন` `:373`, `তিনটা কাজ` `:569`, `দুটো` `:534`, `পর্ব ৩` `:4`. No mixed expression. Clean.
- **Register.** তুই/তুমি/আপু never slips; narrator is তুমি (`:10` খেয়াল করো, `:168` তাকাও,
  `:493` ধরো). No সাধু, no passive left in narration. Clean.
- **Ledger.** Nothing newly spent, nothing re-fired. The `আ, বা, কা, দা` callback at `:72-73`
  is still the only ledger draw and still carries new work.
- **Structure.** `intro-text` still starts rather than describes; `highlight-text` at `:594-596`
  is still a door. F12 clean.

---

## Cross-review notes — iteration 2

- **To @compression-editor.** Three rulings, and language wins on all three.
  1. **V-40 is a compression cut I am reversing.** `:560` "ওটা আমার ঋণ, শোধ করবো।" must go back
     to "ওটা আমার ঋণ, আর ওটা আমি শোধ করবো।" Three words. Rhythm is not padding.
  2. **Do not re-compress `:539-561`.** I said this in iteration 1 and the split worked; the
     block is now readable for the first time. V-39's fix is a full stop, not a cut.
  3. **V-41 costs ~5 lines and I am asking for them anyway.** The file is at 600 against a
     ~585 target. If the ceiling must hold, my order of surrender is: the `:527` bridge line
     ("নিয়মটা আরেকবার দেখি, এবার অন্য চোখে —") can go, and `:406-410` can lose its parenthetical
     without damage. Do not take the five from a dialog box.
- **To @depth-reviewer.** V-36, V-38 and V-39 are all rewrites at equal or shorter length —
  none is an invitation to add explanation. V-41 adds a *question*, not an explanation; if it
  comes back as a মোটু line that explains something, I will object, because মোটু may only ask
  at that point in the episode.
- **V-06 and E-020 remain closed.** Not reopened, not re-verified beyond the grep above.

---

## Scores — Iteration 2

```
clarity:          91 / 100   (threshold 88 — PASSES)   iteration 1: 85   Δ +6
bangla-language:  93 / 100   (threshold 88 — PASSES)   iteration 1: 82   Δ +11
humour:           85 / 100   (threshold 70 — PASSES)   iteration 1: 72   Δ +13
```

**The L3 ≥ 2-point improvement requirement is met on all three dimensions, by margins that
are not close.** This is a genuine revision, not a cosmetic one.

### clarity — 91 (was 85)

All seven iteration-1 clarity deductions are closed and verified, and the two most expensive
are closed *well*: `:126` now hands the reader `1, 0.60, 0.95, 0.20` before `:162` uses four
terms, and `:539-561` is split three ways with মোটুর beat at `:552` and the `±η` derivation
present. The `ঘর` collision is resolved to a single sense. `:155-159` takes both halves of my
V-23 fix at once. Nothing in the episode now forces the kind of stop-and-hunt reread that
`:125`→`:161` forced. Deductions, anchored:

- −4 `:342` → `:435` (V-41) — মোটু silent for 93 lines across six consecutive ভতু boxes, over
  the convergence-honesty beat, the `catastrophic forgetting` bound and the whole η reveal.
  No single paragraph here is unclear; the cost is cumulative, and it lands on the reader
  exactly where iteration 1's `:512-519` used to — the place where a tired reader stops. The
  revision added one box to this run, so this is the one clarity number that moved the wrong
  way.
- −2 `:377` / `:573` (V-36) — `দোলাটা` is a coinage introduced with a definite marker and no
  case ending, so it momentarily reads as the subject of its own verb, and মোটু then reuses it
  at `:573` as established vocabulary.
- −2 `:543-546` (V-39) — a 34-word four-clause sentence; the last over-length sentence left.
- −1 `:485-486` (V-38) — three referents, one named, subject switching at the comma, in the
  sentence the misconception section exists to deliver.
- −1 residual `:542` (the "কিন্তু না" referent, recorded as a note above) and `:534-537`'s
  narrative agreeing with মোটু immediately before ভতু contradicts him — **this deduction is
  carried forward from iteration 1 unchanged, not newly imposed.**

Not 95, because V-41 is a real structural cost and it got worse. Not 88, because the reread
count went from seven paragraphs to zero and the remaining problems are half-beat stumbles
rather than stops.

### bangla-language — 93 (was 82)

The −9 for three F14 hard failures, the −5 for ten dialect errors, the −3 for six
translated-English sentences, the −1 for `ছাপিয়েছিল`, the −1 for five semicolons, the −1 for
the non-parsing payoff line and the −1 for five small consistency slips are **all closed and
grep-verified**. What is on the page now reads aloud as spoken Dhaka Bangla with the terms of
art left in Latin, which is the entire law. `:51`, `:198`, `:324`, `:337`, `:353`, `:397`,
`:487`, `:534`, `:535` are each measurably better sentences than what they replaced.
Deductions, anchored:

- −2 `:484` (V-37) — "দুই বেলাতেই", the one phrase left that a Bangladeshi reader hears as
  wrong, in the paragraph the orchestrator promoted to blocking. Bare `দুই বেলা` without a
  possessor means *twice a day*.
- −2 `:377` (V-36) — `দোলাটা ছাড়িয়ে যায়` is missing the object `-কে` that
  `X-কে ছাড়িয়ে যাওয়া` requires; a genuine grammatical gap, not a preference.
- −1 `:485-486` (V-38) — mid-sentence subject shift with an unnamed agent.
- −1 `:543-546` (V-39) — 34 words against the ~25-word law.
- −1 `:560` (V-40) — the `ওটা … আর ওটা আমি …` cadence cut down to a subjectless fragment.

Not higher, because V-37 is audible and V-36 is a real case-marking error. Not lower, because
there is no longer a single transliteration, semicolon, passive, সাধু form, calque, English
word order or wrong-verb on the page, and the ordinary-word/term-of-art boundary is held
without exception. This is the largest single-iteration language gain I have scored.

### humour — 85 (was 72)

The −14 flat stretch, the −8 zero-emoji drift and the −6 stiff η confession are all closed.
Working moments now, in order, none stacked, none replacing an explanation, nothing drawn
from the ledger as if new:

- `:72-73` "আ, বা, কা, দা — নামগুলো যেন ইচ্ছে করেই সাজানো ছিল!" — ledger callback doing new work
- `:149` + `:176-177` — ভতু admitting `x₀ = 1` was never "just for looks"; technical irony
- `:211-213` মোটু "আমি নিজে ওটা পড়েছি, কিন্তু কোথা থেকে এলো কখনো ভাবিনি! 😮"
- `:296-297` ভতু "এখানে আমাকে নিজের কথাটা নিজেই ফিরিয়ে নিতে হচ্ছে" — a teacher retracting her
  own definition on the page, which is funny because it is honest
- `:337` "নিজের ভাষাতেই বলে ফেলেছিস। ওটাই আজকের উত্তর। 🙌"
- `:353` "বাহ, চোখ আছে তোর! হ্যাঁ, বেড়েছিল — আর আমি সেটা লুকাবো না। 😄"
- `:438-439` মোটু checking ভতুর formula "একটু ছোট পথে" and crowing "মিলে গেল! … 😄"
- `:470` "যুক্তিটা এত সুন্দর যে ভুলটা সবচেয়ে বেশি এখানেই হয়। আমিও একসময় এটাই ভাবতাম।"
- `:591` "(ভতু হেসে ফেললো।) এক পর্বের ধার শোধ করলাম, আর তুই সাথে সাথে আরেকটা পর্ব চেয়ে বসলি।"
  — this is now the funniest line in the episode and it did not work at all in iteration 1

Deductions, anchored:

- −6 `:360-432` (the residue of V-33) — 73 lines carrying the assumption, the convergence
  mechanism, the `catastrophic forgetting` bound and the η reveal, with **zero** relief.
  The mechanical cause is V-41: মোটু is not there, and মোটুর honest confusion is this
  series' workhorse. `:353` sits just before this stretch, not inside it.
- −5 `:397` — "এবার তোকে একটা কথা বলি, যেটা পর্ব ২-এ চেপে গিয়েছিলাম" is a genuine
  improvement on "এবার একটা স্বীকারোক্তি।" and it is warm and conspiratorial, but it still
  does not *land* as a beat. ভতু admitting she hid a multiplier for an entire episode is the
  funniest premise available in this episode and it is still spent as a transition rather
  than as a joke. Compare `:591`, which does land.
- −4 distribution is back-loaded the wrong way: five moments across `:1-353` (~one per 70
  lines), two across `:392-596` (~one per 100), and the gap is precisely the hardest material.

Comfortably clear of the threshold, and for the right reason — the fixes were the ones that
cost nothing, exactly as I predicted. The remaining gap is structural (V-41), not a shortage
of jokes.
