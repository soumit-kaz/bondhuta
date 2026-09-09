# পর্ব ৩ — পুরনো শেখা কি মুছে যায়?

<!-- episode: /neural-network/interference -->
<!-- published: 2026-09-09 -->

## বাংলা

ছোট learning rate পুরনো শেখা বাঁচায় — এই কথাটা ভুল।

প্রায় সবাই বলে, η ছোট রাখলে model-এর আগের শেখাটা কম নড়ে, বেশি নিরাপদ থাকে। যুক্তিটা এত স্বাভাবিক শোনায় যে কেউ উল্টে দেখে না।

একটা ছোট neuron-কে পরপর দুজন example দেখালাম। η = 1 হলে প্রথম জনের score শেষমেশ দাঁড়ায় 0.3125। শুধু η = 0.5 করলেই সেই score দাঁড়ায় 0.03125 — 0 পেরিয়ে উল্টে যাওয়ার দশ গুণ কাছে। কারণ η শুধু data থেকে আসা correction-টাকে ছোট করে, শুরুর weight-টাকে ছোঁয়ই না।

তার মানে η কমালে model সাবধানী হয় না — শুধু আপনার শুরুর guess-টা বেশিদিন ক্ষমতায় থেকে যায়। যেটা আসলে protect হচ্ছে, সেটা model-এর শেখা না, আপনার hunch।

আপনার কোনো model-এ কি কখনো ছোট learning rate আসলে নতুন data-কে না বলে পুরনো bias-টাকেই বেশিদিন টিকিয়ে রেখেছিল?

#NeuralNetworks #MachineLearning #BanglaTech #Bondhuta

---

## English

Halving the learning rate made this score ten times more fragile.

The standard advice: lower your learning rate and old learning survives new updates better. It sounds obviously true.

Train a single neuron on two examples in sequence. At η = 1, the first example's score ends at 0.3125 — barely on the right side of zero. Drop η to 0.5, expecting more protection, and it ends at 0.03125. Ten times closer to flipping sign. η only scales the correction from data; it never touches the weights you started with.

So a smaller η doesn't protect what the model has learned — it protects your initial guess, for longer.

If you're lowering learning rate to fight forgetting, check what's actually staying fixed — the data's correction, or your initialization.

Has anyone tracked this past a toy example — does it hold at scale, or does something else take over once real data enters?

#NeuralNetworks #MachineLearning #BanglaTech #Bondhuta

---

### Suggested first comment

https://bondhuta.vercel.app/neural-network/interference — আজকের পুরো হিসাবটা, পর্ব ২-এর সংখ্যা দিয়েই।
