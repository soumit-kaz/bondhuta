# Premise — Neural Network সিরিজ

## Site config

```yaml
repo:     soumit-kaz/bondhuta
baseUrl:  https://bondhuta.vercel.app    # confirmed by the user at bootstrap, 2026-09-09
branch:   main
```

## What is live

| series | slug | status | evidence |
|---|---|---|---|
| Neural Network | `neural-network` | **active** | 2 live `<Route>` in `src/App.tsx`, the only entry in `navItems` in `Sidebar.tsx`, and `/` redirects to `/neural-network/intro` |
| Docker | `docker` | dormant | route block commented out in `App.tsx` (`{/* Docker Series — temporarily disabled`) |
| Redis | `redis` | dormant | route block commented out in `App.tsx` |

`src/pages/docker/` and `src/pages/redis/` still contain `.tsx` files, and
`src/components/MainContent/MainContent.tsx` still holds older, superseded copies
of the Docker/Redis pages. None of it is reachable. None of it is a style model.

## Reading order (from `App.tsx` + `Sidebar.tsx`, not filenames)

1. `/neural-network/intro` — `NeuralNetworkIntro` — **একটা Neuron-এর গল্প**
2. `/neural-network/learning` — `NeuralNetworkLearning` — **পর্ব ২: Neuron যেভাবে নিজে নিজে শেখে**

## সিরিজটা কীসের জন্য

একজন বাংলাভাষী developer বা student — যে Neural Network শব্দটা শুনলেই matrix আর
গণিত দেখে ভয় পায় — তাকে **একটা neuron থেকে শুরু করে একটা পুরো network পর্যন্ত**
নিয়ে যাওয়া, প্রতিটা ধাপে হাতে-কলমে সংখ্যা কষে।

সিরিজের নিজের ঘোষণা, পর্ব ১-এর `intro-text` থেকে হুবহু:

> "ভয়ের কিছু নেই। পুরো Neural Network কিন্তু দাঁড়িয়ে আছে একটাই ছোট জিনিসের উপর —
> একটা neuron। আগে ওটাই বুঝে ফেল।"

এই এক বাক্যেই সিরিজের প্রতিশ্রুতি: **নিচ থেকে উপরে**। library দিয়ে শুরু না,
`import tensorflow` দিয়ে শুরু না — একটা neuron, তিনটা input, আর একটা threshold
দিয়ে শুরু।

## সিরিজ যেভাবে শেখায় (দুই পর্বে যা প্রমাণিত)

- **একটাই worked example পুরো সিরিজ জুড়ে টানা হয়** — আবুল, বাবুল, কাবুল, দাবুল
  আর তাদের A+ পাওয়ার সম্ভাবনা। পর্ব ১-এ আবুলের তিনটা factor ধরা হয়, পর্ব ২-এ
  ঠিক সেই আবুলকে ফোন করে সংখ্যা নেওয়া হয়, তারপর ৬টা epoch ধরে সেই সংখ্যাই
  বয়ে নিয়ে যাওয়া হয়। নতুন পর্বে নতুন উদাহরণ বানানো হয় না।
- **কোনো code নেই।** দুই পর্বের কোথাও Python নেই, numpy নেই, কোনো library নেই।
  `code-box` শুধু হাতে করা হিসাব সাজিয়ে দেখাতে ব্যবহার হয়েছে।
- **প্রতিটা সংখ্যা শেষ পর্যন্ত কষা হয়** — পর্ব ২-এ ৬টা epoch, ২৪টা iteration,
  প্রতিটার sum, y, d, Error আর updated W লেখা আছে।
- **পর্ব শেষ হয় প্রশ্ন দিয়ে, সারাংশ দিয়ে নয়।** দুটো পর্বেরই শেষ element
  `<p className="highlight-text">`, আর দুটোতেই পরের পর্বের প্রশ্নটা রাখা আছে।

## কোথায় গিয়ে সিরিজ শেষ হবে

পাঠক শেষ পর্বের পরে **কাগজ-কলমে একটা দুই-স্তরের network-এ একবার forward pass আর
একবার backward pass চালিয়ে প্রতিটা weight নিজে হাতে update করতে পারবে** —
কোনো library ছাড়া, শুধু যোগ-গুণ আর একটা derivative দিয়ে। বিস্তারিত `roadmap.md`-এ।

## অচল সিরিজ সম্পর্কে

Docker/Redis সিরিজের শিক্ষক চরিত্র **বঠু**। `MainContent.css`-এ
`.dialog-box.bothu` বলে কোনো rule নেই — বঠুর box unstyled ধূসর বাক্স হয়ে render
হয়। Neural Network সিরিজে বঠু আসবে না। বিস্তারিত `characters.md`-এ।
