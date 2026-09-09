# পর্ব ৩ — পুরনো শেখা কি মুছে যায়?

<!-- episode: /neural-network/interference -->
<!-- published: 2026-09-09 -->

## বাংলা

একটা neuron-কে দ্বিতীয় example শেখালাম। প্রথমটা ভুলে গেল।

হাতে কষা হিসাব। চারটা weight দিয়ে শুরু। আবুলের data দেখিয়ে একবার update করলাম — neuron তাকে চিনে ফেললো, sum দাঁড়ালো 2.0525।

এবার শুধু বাবুলকে শেখালাম। দুবার update লাগলো। বাবুল ঠিক হলো।

তারপর আবুলকে আবার জিজ্ঞেস করলাম। উত্তর এলো −1.4275। ভুল।

কারণটা সহজ, আর একটু ভয়ের। neuron-এর মাথায় আবুলের জন্য আলাদা কোনো খাতা নেই। সবার জন্য একটাই weight vector। ওটা বদলালে সবার উত্তরই বদলায়।

বাঁচার উপায়? পুরো dataset নিয়ে বারবার ঘোরা। আবুল আবার সামনে আসে, আবার নিজের কথা বলে।

তবে এটাকে catastrophic forgetting বলে ফেলা ঠিক হবে না। ওখানে পুরনো task-এর data আর ফেরতই আসে না — সেটাই আসল বিপদ।

আপনার কোনো model কি কখনো নতুন data শিখতে গিয়ে আগের কোনো case চুপচাপ ভেঙে ফেলেছিল?

#NeuralNetworks #MachineLearning #BanglaTech #Bondhuta

---

## English

I taught a neuron one example, then a second. It forgot the first.

Worked by hand, four weights. One update on student A and the neuron got him right — his score moved to 2.0525.

Then I trained only on student B. Two updates. B correct.

Went back and asked about A again: −1.4275. Wrong.

There is no separate memory per example. One weight vector answers for everybody, so moving it for B moves it for A. The learning was never stored anywhere it could be protected.

The fix is unglamorous — keep cycling the whole dataset so A comes back and re-states his case.

Worth being precise though: this is not catastrophic forgetting. That term is for the case where the old task's data never returns, and that absence is what makes it hard.

Where I'd like other people's experience: has anyone seen this bite in production — a model quietly losing an old case after training on new data, with no test catching it?

#NeuralNetworks #MachineLearning #BanglaTech #Bondhuta

---

### Suggested first comment

https://bondhuta.vercel.app/neural-network/interference

— পুরো হিসাবটা হাতে কষা আছে, আগের পর্বের সেই আবুল-বাবুলের data দিয়েই।
