export default function NeuralNetworkInterference() {
  return (
    <>
      <h1 className="page-title">🧠 পর্ব ৩: পুরনো শেখা কি মুছে যায়?</h1>

      <article className="blog-content">
        <p className="intro-text">
          গত পর্বের শেষে মোটু একটা অদ্ভুত প্রশ্ন করেছিল — একজনকে নতুন কিছু শেখাতে গিয়ে neuron কি আগের
          জনের শেখা ভুলে যেতে পারে? ভতু বলেছিল, "এই প্রশ্নের উত্তরটা পুরো একটা পর্ব জুড়ে বলবো।" আজ সেই
          দিন। 😄
        </p>

        <h2>🧠 শেখা মানেই কিন্তু শুধু মনে রাখা নয়</h2>

        <div className="dialog-box motu">
          <span className="dialog-name">মোটু:</span>
          <p>
            "আপু, গত পর্বে দেখলাম neuron ভুল করলে weight বদলে ফেলে। কিন্তু আমার প্রশ্নটা এখনো আছে। ধরো,
            আবুলের data দেখে neuron কিছু শিখলো। তারপর বাবুলের data দেখে weight আবার বদলালো। তাহলে
            বাবুলকে শেখানোর সময় আবুলের শেখাটা কি নষ্ট হয়ে যেতে পারে?"
          </p>
        </div>

        <div className="dialog-box votu">
          <span className="dialog-name">ভতু:</span>
          <p>"হ্যাঁ... <strong>পারে।</strong>"</p>
        </div>

        <div className="dialog-box motu">
          <span className="dialog-name">মোটু:</span>
          <p>"সত্যি?! 😮"</p>
        </div>

        <div className="dialog-box votu">
          <span className="dialog-name">ভতু:</span>
          <p>
            "তবে একটু সাবধানে বুঝতে হবে। Weight-এর প্রতিটা পরিবর্তন পুরো neuron-এর আচরণ বদলে দেয়। তাই
            নতুন একটা example ঠিক করতে গিয়ে পুরনো কোনো example-এর prediction ভুল হয়ে যেতে পারে।"
          </p>
        </div>

        <div className="dialog-box motu">
          <span className="dialog-name">মোটু:</span>
          <p>"মানে neuron একজনকে পড়াতে গিয়ে আরেকজনের উত্তর ভুলে যেতে পারে?"</p>
        </div>

        <div className="dialog-box votu">
          <span className="dialog-name">ভতু:</span>
          <p>"একদম! আজ সেটাই নিজের চোখে দেখবো।"</p>
        </div>

        <h2>👦 আগে শুধু আবুলকে শেখাই</h2>

        <p>চলো আগের সেই starting weight-এই ফিরে যাই —</p>

        <div className="formula-box">
          <p>W = [ -3.0, &nbsp;2.0, &nbsp;1.0, &nbsp;3.0 ]</p>
        </div>

        <p>আবুলের data ছিল —</p>

        <div className="formula-box">
          <p>X<sub>A</sub> = [ 1, &nbsp;0.60, &nbsp;0.95, &nbsp;0.20 ]</p>
          <p>d<sub>A</sub> = 1</p>
        </div>

        <p>প্রথমে neuron হিসাব করলো —</p>

        <div className="code-box">
          <pre>{`sum = (-3.0×1) + (2.0×0.60) + (1.0×0.95) + (3.0×0.20)
    = -3.0 + 1.20 + 0.95 + 0.60
    = -0.25            →  -0.25 < 0  ⟹  y = 0`}</pre>
        </div>

        <p>কিন্তু আবুলের আসল উত্তর d = 1। তাই —</p>

        <div className="formula-box">
          <p>Error = d − y = 1 − 0 = +1</p>
        </div>

        <div className="code-box">
          <pre>{`W_new = W + Error × X
      = [-3.0, 2.0, 1.0, 3.0] + [1, 0.60, 0.95, 0.20]
      = [-2.0, 2.60, 1.95, 3.20]`}</pre>
        </div>

        <p>আবার আবুলকে পরীক্ষা করি —</p>

        <div className="code-box">
          <pre>{`sum = (-2.0×1) + (2.60×0.60) + (1.95×0.95) + (3.20×0.20)
    = -2.0 + 1.56 + 1.8525 + 0.64
    = 2.0525           →  2.0525 > 0  ⟹  y = 1 ✅`}</pre>
        </div>

        <div className="dialog-box motu">
          <span className="dialog-name">মোটু:</span>
          <p>"ইয়েস! আবুলকে neuron চিনে ফেলেছে!"</p>
        </div>

        <div className="dialog-box votu">
          <span className="dialog-name">ভতু:</span>
          <p>
            "হ্যাঁ। এখন ধরে নে, এই মুহূর্তে neuron-এর কাছে আবুলের শেখাটা হলো — <strong>আবুল → A+ →
            1</strong> ✅"
          </p>
        </div>

        <h2>👦 এবার শুধু বাবুলকে শেখাই</h2>

        <div className="dialog-box votu">
          <span className="dialog-name">ভতু:</span>
          <p>"এবার আবুলকে আপাতত একপাশে রেখে শুধু বাবুলকে শেখাই।"</p>
        </div>

        <p>বাবুলের data —</p>

        <div className="formula-box">
          <p>X<sub>B</sub> = [ 1, &nbsp;0.30, &nbsp;0.40, &nbsp;0.90 ]</p>
          <p>d<sub>B</sub> = 0</p>
        </div>

        <p>
          খেয়াল করো, neuron-এর এখনকার weight কিন্তু আবুলের কাছ থেকে শেখা —{' '}
          <code>W = [-2.0, 2.60, 1.95, 3.20]</code>। বাবুলের জন্য হিসাব করি —
        </p>

        <div className="code-box">
          <pre>{`sum = (-2.0×1) + (2.60×0.30) + (1.95×0.40) + (3.20×0.90)
    = -2.0 + 0.78 + 0.78 + 2.88
    = 2.44             →  y = 1`}</pre>
        </div>

        <p>কিন্তু বাবুলের আসল উত্তর d = 0। অর্থাৎ neuron ভুল করেছে। 😬</p>

        <div className="code-box">
          <pre>{`Error = 0 - 1 = -1

W_new = W - X
      = [-2.0, 2.60, 1.95, 3.20] - [1, 0.30, 0.40, 0.90]
      = [-3.0, 2.30, 1.55, 2.30]`}</pre>
        </div>

        <div className="dialog-box motu">
          <span className="dialog-name">মোটু:</span>
          <p>"ঠিক আছে। বাবুলও এবার ঠিক হলো।"</p>
        </div>

        <div className="dialog-box votu">
          <span className="dialog-name">ভতু:</span>
          <p>"একবার পরীক্ষা করে দেখি।"</p>
        </div>

        <div className="code-box">
          <pre>{`sum = (-3.0×1) + (2.30×0.30) + (1.55×0.40) + (2.30×0.90)
    = -3.0 + 0.69 + 0.62 + 2.07
    = 0.38             →  y = 1`}</pre>
        </div>

        <div className="dialog-box motu">
          <span className="dialog-name">মোটু:</span>
          <p>"ওমা! এখনো ভুল!"</p>
        </div>

        <div className="dialog-box votu">
          <span className="dialog-name">ভতু:</span>
          <p>
            "ঠিক ধরেছিস। একবার update করলেই সবসময় সঙ্গে সঙ্গে ঠিক হয়ে যায় না। আবার update করি।"
          </p>
        </div>

        <div className="code-box">
          <pre>{`Error = -1 আবার

W_new = W - X
      = [-3.0, 2.30, 1.55, 2.30] - [1, 0.30, 0.40, 0.90]
      = [-4.0, 2.0, 1.15, 1.40]`}</pre>
        </div>

        <p>এবার বাবুলকে পরীক্ষা করি —</p>

        <div className="code-box">
          <pre>{`sum = (-4.0×1) + (2.0×0.30) + (1.15×0.40) + (1.40×0.90)
    = -4.0 + 0.60 + 0.46 + 1.26
    = -1.68            →  -1.68 < 0  ⟹  y = 0 ✅`}</pre>
        </div>

        <div className="dialog-box motu">
          <span className="dialog-name">মোটু:</span>
          <p>"এইবার বাবুল ঠিক!"</p>
        </div>

        <div className="dialog-box votu">
          <span className="dialog-name">ভতু:</span>
          <p>"হ্যাঁ। কিন্তু এবার আসল প্রশ্নটা করি।"</p>
        </div>

        <h2>😱 আবুলকে কি আমরা ভুলিয়ে দিলাম?</h2>

        <div className="dialog-box votu">
          <span className="dialog-name">ভতু:</span>
          <p>
            "এই যে বাবুলকে ঠিক করতে করতে weight হয়ে গেল <code>W = [-4.0, 2.0, 1.15, 1.40]</code> — এখন
            আবার আবুলকে পরীক্ষা কর।"
          </p>
        </div>

        <div className="code-box">
          <pre>{`sum = (-4.0×1) + (2.0×0.60) + (1.15×0.95) + (1.40×0.20)
    = -4.0 + 1.20 + 1.0925 + 0.28
    = -1.4275          →  -1.4275 < 0  ⟹  y = 0 ❌`}</pre>
        </div>

        <div className="dialog-box motu">
          <span className="dialog-name">মোটু:</span>
          <p>"আআআ! 😱 আবুল তো A+ ছিল! এখন neuron বলছে A+ না!"</p>
        </div>

        <div className="dialog-box votu">
          <span className="dialog-name">ভতু:</span>
          <p>"হ্যাঁ।"</p>
        </div>

        <div className="dialog-box motu">
          <span className="dialog-name">মোটু:</span>
          <p>"মানে বাবুলকে শেখাতে গিয়ে আবুলের শেখাটা সত্যিই নষ্ট হয়ে গেল?!"</p>
        </div>

        <div className="dialog-box votu">
          <span className="dialog-name">ভতু:</span>
          <p>"এই উদাহরণে <strong>হ্যাঁ, সাময়িকভাবে</strong>।"</p>
        </div>

        <h2>🧠 আসলে কী হলো?</h2>

        <div className="dialog-box votu">
          <span className="dialog-name">ভতু:</span>
          <p>
            "দেখ, neuron-এর মাথায় আলাদা আলাদা করে লেখা নেই — আবুলের জন্য এই weight, বাবুলের জন্য ওই
            weight, কাবুলের জন্য আরেক weight। neuron-এর কাছে সবার জন্য একটাই weight vector।"
          </p>
        </div>

        <div className="formula-box">
          <p>W = [ w₀, &nbsp;w₁, &nbsp;w₂, &nbsp;w₃ ]</p>
        </div>

        <p>
          এই একটা W দিয়েই <strong>সব student-এর</strong> prediction তৈরি হয়। তাই W বদলালে শুধু নতুন
          student-এর prediction বদলায় না — পুরনো student-এর prediction-ও বদলে যায়।
        </p>

        <div className="dialog-box motu">
          <span className="dialog-name">মোটু:</span>
          <p>"ওহ! মানে একটা shared notebook-এর মতো?"</p>
        </div>

        <div className="dialog-box votu">
          <span className="dialog-name">ভতু:</span>
          <p>
            "দারুণ analogy! 😄 একটা notebook-এ নতুন করে কিছু লিখলে আগের লেখাটা সরাসরি না মুছলেও পুরো
            notebook-এর ব্যবহার বদলে যেতে পারে। neuron-এর বেলায় সেই notebook হলো তার{' '}
            <strong>weights</strong>।"
          </p>
        </div>

        <div className="dialog-box votu">
          <span className="dialog-name">ভতু:</span>
          <p>
            "তবে analogy-টা এখানেই ছেড়ে দিতে হবে। notebook-এ পুরনো লেখা আর নতুন লেখা আলাদা জায়গায়
            থাকে। neuron-এ থাকে না — একই চারটা সংখ্যা সবার হয়ে কথা বলে। তাই ওখানে জায়গা ভাগ করা যায়,
            এখানে যায় না।"
          </p>
        </div>

        <h2>🔄 তাহলে কি সবসময় নতুনটা শিখে পুরনোটা ভুলে যাবে?</h2>

        <div className="dialog-box motu">
          <span className="dialog-name">মোটু:</span>
          <p>
            "তাহলে তো বিপদ! একজনকে শেখালাম, তারপর আরেকজনকে শেখালাম — শেষে প্রথমজনের সব ভুলে যাবে!"
          </p>
        </div>

        <div className="dialog-box votu">
          <span className="dialog-name">ভতু:</span>
          <p>
            "এতটা ভয় পাওয়ার দরকার নেই। কারণ আমরা একটা কাজ ইচ্ছে করে করিনি — বাবুলকে শেখানোর পর আবুলকে
            আর দেখাইনি।"
          </p>
        </div>

        <div className="dialog-box motu">
          <span className="dialog-name">মোটু:</span>
          <p>"মানে?"</p>
        </div>

        <div className="dialog-box votu">
          <span className="dialog-name">ভতু:</span>
          <p>
            "আমরা যদি পুরো dataset নিয়ে বারবার ঘুরি, তাহলে আবুল আবার সামনে আসবে। তখন neuron দেখবে
            আবুলের জন্য y = 0, অথচ d = 1। তাই আবার Error = +1, আর weight আবার আবুলের দিকে ঠেলে যাবে।"
          </p>
        </div>

        <h2>🔁 এবার পুরো dataset-কে আবার সামনে আনি</h2>

        <div className="dialog-box votu">
          <span className="dialog-name">ভতু:</span>
          <p>
            "এই জন্যই training-এ আমরা শুধু একজনকে দেখে থেমে যাই না। পুরো dataset-এর উপর বারবার ঘুরি।"
          </p>
        </div>

        <p>আমাদের dataset আবার মনে করো —</p>

        <div className="table-wrap">
          <table className="data-table">
            <thead>
              <tr>
                <th>Student</th>
                <th>study (x₁)</th>
                <th>understanding (x₂)</th>
                <th>attendance (x₃)</th>
                <th>আসলে A+? (d)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>আবুল</td>
                <td>0.60</td>
                <td>0.95</td>
                <td>0.20</td>
                <td>1</td>
              </tr>
              <tr>
                <td>বাবুল</td>
                <td>0.30</td>
                <td>0.40</td>
                <td>0.90</td>
                <td>0</td>
              </tr>
              <tr>
                <td>কাবুল</td>
                <td>0.80</td>
                <td>0.85</td>
                <td>0.70</td>
                <td>1</td>
              </tr>
              <tr>
                <td>দাবুল</td>
                <td>0.20</td>
                <td>0.25</td>
                <td>0.30</td>
                <td>0</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="dialog-box motu">
          <span className="dialog-name">মোটু:</span>
          <p>"মানে আবুলকে আবার দেখাবো, তারপর বাবুল, তারপর কাবুল, তারপর দাবুল?"</p>
        </div>

        <div className="dialog-box votu">
          <span className="dialog-name">ভতু:</span>
          <p>
            "ঠিক তাই। আর এই জন্যই গত পর্বে <strong>epoch</strong>-এর কথা বলেছিলাম। একটা epoch মানে পুরো
            dataset-এর উপর একবার ঘোরা। আর প্রতিটা student-এর জন্য prediction → error → update — এক
            একটা <strong>iteration</strong>।"
          </p>
        </div>

        <h2>🎢 ভুল করে, আবার শেখে</h2>

        <p>ধরো, বাবুলকে শেখাতে গিয়ে আবুলের prediction নষ্ট হয়ে গেল। তারপর আবুল আবার dataset-এ এলো।</p>

        <p>আবুল বললো — "আমার আসল উত্তর তো 1!" neuron বললো — "আমি 0 বলেছি।"</p>

        <div className="formula-box">
          <p>Error = 1 − 0 = +1</p>
        </div>

        <p>তাই neuron weight আবার বাড়ানোর দিকে ঠেলবে। অর্থাৎ —</p>

        <div className="code-box">
          <pre>{`বাবুল শেখা  →  আবুল ভুল
আবুল শেখা   →  বাবুল আবার ভুল হতে পারে`}</pre>
        </div>

        <p>
          এভাবে প্রথমে ব্যাপারটা একটু দোলনার মতো হতে পারে। 😄 একদিকে weight ঠেলছে আবুলের জন্য, অন্যদিকে
          বাবুলের জন্য আবার উল্টো দিকে।
        </p>

        <p>
          কিন্তু dataset যদি এমন হয় যে একটা নির্দিষ্ট <strong>decision boundary</strong> দিয়ে সবাইকে
          আলাদা করা সম্ভব, তাহলে শেষ পর্যন্ত এমন একটা weight পাওয়া যেতে পারে যেখানে সবাই ঠিকঠাক
          classified হয়। সেই অবস্থায় আর update লাগে না।
        </p>

        <p>এটাই গত পর্বে দেখেছিলাম — <strong>convergence</strong>।</p>

        <h2>🎯 আগের training-টাই আসলে এর প্রমাণ</h2>

        <p>গত পর্বে কী হয়েছিল মনে আছে? Epoch 1 শেষে —</p>

        <div className="formula-box">
          <p>W = [ -3.0, &nbsp;2.30, &nbsp;1.55, &nbsp;2.30 ]</p>
        </div>

        <p>
          তারপর বারবার student-দের সামনে আনা হলো। কখনো আবুলের জন্য weight বাড়লো। কখনো বাবুলের জন্য
          কমলো। কখনো কাবুল এসে দেখলো prediction ঠিক — কোনো update হলো না। দাবুলও কখনো কিছু বদলালো না।
        </p>

        <p>শেষে Epoch 5-এর পর —</p>

        <div className="formula-box">
          <p>W = [ -3.0, &nbsp;3.40, &nbsp;3.10, &nbsp;0.70 ]</p>
        </div>

        <p>তারপর Epoch 6-এ —</p>

        <div className="code-box">
          <pre>{`আবুল  →  ঠিক ✅
বাবুল →  ঠিক ✅
কাবুল →  ঠিক ✅
দাবুল →  ঠিক ✅`}</pre>
        </div>

        <p>কেউ Error দিল না। তাই আর কোনো weight update দরকার হলো না। এটাই convergence।</p>

        <h2>🧩 একটা গুরুত্বপূর্ণ পার্থক্য</h2>

        <div className="dialog-box motu">
          <span className="dialog-name">মোটু:</span>
          <p>"আপু, তাহলে এটাকেই কি বলে catastrophic forgetting?"</p>
        </div>

        <div className="dialog-box votu">
          <span className="dialog-name">ভতু:</span>
          <p>
            "দারুণ প্রশ্ন! কিন্তু এখানেই একটু সাবধান হতে হবে। আমরা যেটা দেখলাম — নতুন example শেখার
            ফলে পুরনো example-এর prediction খারাপ হয়ে যাওয়া — সেটা forgetting-এর একটা সহজ উদাহরণ।"
          </p>
        </div>

        <div className="dialog-box votu">
          <span className="dialog-name">ভতু:</span>
          <p>
            "কিন্তু machine learning-এ <strong>catastrophic forgetting</strong> বলতে সাধারণত আরও গুরুতর
            একটা ব্যাপার বোঝায়।"
          </p>
        </div>

        <div className="dialog-box motu">
          <span className="dialog-name">মোটু:</span>
          <p>"কী রকম?"</p>
        </div>

        <div className="dialog-box votu">
          <span className="dialog-name">ভতু:</span>
          <p>
            "ধর, একটা বড় neural network-কে প্রথমে অনেকদিন ধরে <strong>Task A</strong> শেখানো হলো। সে
            Task A খুব ভালো পারে। তারপর তাকে <strong>Task B</strong>-এর data দিয়ে অনেকক্ষণ training
            করানো হলো।"
          </p>
        </div>

        <div className="dialog-box votu">
          <span className="dialog-name">ভতু:</span>
          <p>
            "Training শেষে দেখা গেল — Task B সে দারুণ পারে, কিন্তু Task A-তে performance ভীষণ খারাপ হয়ে
            গেছে। নতুন task শেখার সময় পুরনো task-এর শেখা ব্যাপকভাবে নষ্ট হয়ে গেছে। এটাই broadly
            catastrophic forgetting।"
          </p>
        </div>

        <h2>🧠 তাহলে পার্থক্যটা কোথায়?</h2>

        <div className="dialog-box motu">
          <span className="dialog-name">মোটু:</span>
          <p>"আমাদের ছোট্ট neuron-এও তো forgetting হলো। তাহলে দুটো এক জিনিস নয় কেন?"</p>
        </div>

        <div className="dialog-box votu">
          <span className="dialog-name">ভতু:</span>
          <p>
            "কারণ আমাদের example খুব ছোট আর পরিষ্কার। আর আমরা একই dataset বারবার দেখাচ্ছি। কিন্তু বড়
            neural network-এ হাজার হাজার, এমনকি কোটি কোটি parameter থাকতে পারে।"
          </p>
        </div>

        <div className="dialog-box votu">
          <span className="dialog-name">ভতু:</span>
          <p>
            "সেখানে এক task-এর জন্য শেখা representation-গুলো নতুন task শেখার সময় ব্যাপকভাবে বদলে যেতে
            পারে। আর পুরনো task-এর data যদি আর training-এ ফেরত না আসে, network-এর পক্ষে পুরনো শেখাটা
            ধরে রাখা কঠিন হয়ে যায়।"
          </p>
        </div>

        <div className="dialog-box motu">
          <span className="dialog-name">মোটু:</span>
          <p>
            "মানে পুরনো ছাত্রকে যদি আর কখনো ক্লাসেই না ডাকি, নতুন ছাত্রদের পড়াতে পড়াতে ওকে ভুলে যাওয়ার
            চান্স বেশি?"
          </p>
        </div>

        <div className="dialog-box votu">
          <span className="dialog-name">ভতু:</span>
          <p>"একদম! 😄 এই analogy-টা মাথায় রাখিস।"</p>
        </div>

        <h2>📚 পুরো ব্যাপারটা এক নজরে</h2>

        <div className="code-box">
          <pre>{`আবুল  → শেখানো হলো  → neuron জানে আবুল A+   ✅
বাবুল → শেখানো হলো  → weight বদলালো
                     → আবুল এখন ভুল          ❌
আবুল  → আবার এলো    → আবার শেখানো হলো       ✅
বাবুল → আবার এলো    → আবার ঠিক করা হলো      ✅`}</pre>
        </div>

        <p>এই বারবার correction-টাই training-এর একটা স্বাভাবিক অংশ।</p>

        <h2>🛠️ তাহলে forgetting কমানোর উপায় কী?</h2>

        <div className="dialog-box motu">
          <span className="dialog-name">মোটু:</span>
          <p>"আচ্ছা, যদি সত্যিই পুরনো শেখা হারিয়ে যায়, তাহলে সেটা আটকাবো কীভাবে?"</p>
        </div>

        <div className="dialog-box votu">
          <span className="dialog-name">ভতু:</span>
          <p>"এই প্রশ্নের উত্তরটাও বেশ মজার। অনেক ধরনের উপায় আছে।"</p>
        </div>

        <div className="concept-box">
          <h3>💡 উপায় ১ — পুরনো data আবার দেখানো</h3>
          <ul>
            <li>নতুন data শেখানোর সময় পুরনো data-র কিছু অংশও training-এ রাখি।</li>
            <li>তাহলে network শুধু নতুন জিনিস নিয়ে ভাববে না, পুরনোটাও বারবার মনে করবে।</li>
            <li>অনেকটা — "নতুন অধ্যায় পড়, কিন্তু আগেরটার revision-ও কর।"</li>
          </ul>
        </div>

        <div className="concept-box">
          <h3>🔒 উপায় ২ — পুরনো শেখাকে শক্ত করে ধরে রাখা</h3>
          <ul>
            <li>কোন parameter-গুলো পুরনো task-এর জন্য গুরুত্বপূর্ণ ছিল, সেটা হিসাব করে রাখা হয়।</li>
            <li>তারপর নতুন task শেখানোর সময় ওগুলোকে খুব বেশি বদলাতে দেওয়া হয় না।</li>
            <li>মানে — "এই weight-টা খুব গুরুত্বপূর্ণ, এটাকে বেশি নাড়াচাড়া করিস না!"</li>
          </ul>
        </div>

        <div className="concept-box">
          <h3>🆕 উপায় ৩ — নতুন task-এর জন্য আলাদা জায়গা</h3>
          <ul>
            <li>নতুন task শেখানোর জন্য কিছু নতুন parameter বা আলাদা অংশ ব্যবহার করা।</li>
            <li>তাহলে পুরনো শেখা আর নতুন শেখার মধ্যে সংঘর্ষ কম হয়।</li>
          </ul>
        </div>

        <div className="dialog-box motu">
          <span className="dialog-name">মোটু:</span>
          <p>"মানে একই notebook-এ পুরনো লেখার উপর না লিখে নতুন page ব্যবহার করা?"</p>
        </div>

        <div className="dialog-box votu">
          <span className="dialog-name">ভতু:</span>
          <p>"একদম! 😄"</p>
        </div>

        <h2>🤯 কিন্তু আরও গভীর একটা সমস্যা আছে</h2>

        <div className="dialog-box motu">
          <span className="dialog-name">মোটু:</span>
          <p>
            "আপু, একটা জিনিস বুঝলাম। কিন্তু আমাদের neuron তো ভুল করলে সঙ্গে সঙ্গে weight update করছে।
            তাহলে কি সবসময় <code>Error = d − y</code> ব্যবহার করলেই হবে?"
          </p>
        </div>

        <div className="dialog-box votu">
          <span className="dialog-name">ভতু:</span>
          <p>
            "না। এখানেই গল্পটা আরও বড় হয়ে যায়। আমাদের এই neuron-টা খুবই সরল। এটা শুধু 0 বা 1 output
            দেয়। আর weight update-ও খুব সোজা —"
          </p>
        </div>

        <div className="formula-box">
          <p>W<sub>new</sub> = W + Error × X</p>
        </div>

        <div className="dialog-box votu">
          <span className="dialog-name">ভতু:</span>
          <p>
            "কিন্তু বড় neural network-এ অনেক layer থাকে, অনেক neuron থাকে, আর parameter থাকে প্রচুর।
            সেখানে শুধু একটা neuron-এর weight একটু বাড়িয়ে বা কমিয়ে দিলেই কাজ হয় না।"
          </p>
        </div>

        <div className="dialog-box motu">
          <span className="dialog-name">মোটু:</span>
          <p>"তাহলে?"</p>
        </div>

        <div className="dialog-box votu">
          <span className="dialog-name">ভতু:</span>
          <p>
            "তখন জানতে হয় — <strong>কোন weight কতটা বদলাবে?</strong> একটু বেশি বদলালে training অস্থির
            হতে পারে। আবার খুব কম বদলালে শেখা খুব ধীরে হয়। আর সেখান থেকেই আসে{' '}
            <strong>learning rate</strong>, <strong>gradient</strong>,{' '}
            <strong>gradient descent</strong>, <strong>backpropagation</strong>-এর মতো জিনিস।"
          </p>
        </div>

        <div className="dialog-box motu">
          <span className="dialog-name">মোটু:</span>
          <p>"ওহ! 😳"</p>
        </div>

        <h2>🚦 আজকের গল্পের আসল শিক্ষা</h2>

        <p>মোটু এবার নিজের খাতায় লিখতে শুরু করলো।</p>

        <div className="concept-box">
          <h3>🧠 Neuron-এর memory আসলে কোথায়?</h3>
          <ul>
            <li>Neuron-এর আলাদা কোনো খাতা নেই।</li>
            <li>তার শেখা পুরোটাই তার <strong>weights</strong>-এর মধ্যে encoded থাকে।</li>
          </ul>
        </div>

        <div className="concept-box">
          <h3>🔄 Weight বদলালে কী হয়?</h3>
          <ul>
            <li>Weight বদলালে neuron-এর decision boundary বদলে যায়।</li>
            <li>তাই নতুন data শেখার সময় পুরনো data-র prediction-ও বদলে যেতে পারে।</li>
            <li>হ্যাঁ — পুরনো কোনো example-এর উত্তর ভুল হয়ে যেতে পারে।</li>
          </ul>
        </div>

        <div className="concept-box">
          <h3>🔁 তাহলে কী করি?</h3>
          <ul>
            <li>পুরো dataset-এর উপর বারবার training চালাই।</li>
            <li>পুরনো example আবার আসে, ভুল হলে আবার weight update হয়।</li>
            <li>সবাই ঠিক classified হলে আমরা convergence পাই।</li>
          </ul>
        </div>

        <p className="note-text">
          (আর catastrophic forgetting আরও বড় সমস্যা — বিশেষ করে sequential বা continual learning-এ,
          যেখানে নতুন task শেখার ফলে পুরনো task-এর শেখা ব্যাপকভাবে হারিয়ে যেতে পারে।)
        </p>

        <h2>🎓 আজকের গল্পটা এক লাইনে</h2>

        <div className="formula-box">
          <p>Neuron-এর শেখা weight-এর মধ্যে থাকে।</p>
          <p>Weight বদলালে পুরনো শেখার উপরও প্রভাব পড়ে।</p>
        </div>

        <div className="dialog-box motu">
          <span className="dialog-name">মোটু:</span>
          <p>"মানে neuron-এর memory খুব অদ্ভুত!"</p>
        </div>

        <div className="dialog-box votu">
          <span className="dialog-name">ভতু:</span>
          <p>"কেন?"</p>
        </div>

        <div className="dialog-box motu">
          <span className="dialog-name">মোটু:</span>
          <p>"ওর memory-তে নতুন কিছু ঢোকাতে গেলে পুরনো memory-ও একটু নড়েচড়ে বসে!"</p>
        </div>

        <div className="dialog-box votu">
          <span className="dialog-name">ভতু:</span>
          <p>
            "হাহা! ঠিক তাই। 😄 আর এই কারণেই machine learning-এ শুধু 'কীভাবে শেখাবো' জানলেই হয় না।
            ভাবতে হয় — যা শিখেছে, সেটা কীভাবে ধরে রাখবে?"
          </p>
        </div>

        <p>মোটু কিছুক্ষণ চুপ করে রইলো। তারপর বললো —</p>

        <div className="dialog-box motu">
          <span className="dialog-name">মোটু:</span>
          <p>
            "আচ্ছা আপু... neuron তো ভুল করলে weight বদলায়। কিন্তু যদি আমরা weight-টা একবারে অনেকটা না
            বদলে একটু একটু করে বদলাই?"
          </p>
        </div>

        <div className="dialog-box votu">
          <span className="dialog-name">ভতু:</span>
          <p>
            "(চোখ বড় করে) ওহ! এবার তুই ঠিক এমন একটা প্রশ্ন করলি, যেটা আমাদের নিয়ে যাবে{' '}
            <strong>learning rate</strong>-এর কাছে!"
          </p>
        </div>

        <div className="dialog-box motu">
          <span className="dialog-name">মোটু:</span>
          <p>"মানে weight কতটা বদলাবে — সেটাও ঠিক করে দিতে হয়?"</p>
        </div>

        <div className="dialog-box votu">
          <span className="dialog-name">ভতু:</span>
          <p>"হ্যাঁ। কারণ বেশি জোরে শিখতে গেলে সমস্যা, আবার খুব আস্তে শিখলেও সমস্যা।"</p>
        </div>

        <div className="dialog-box motu">
          <span className="dialog-name">মোটু:</span>
          <p>"তাহলে পরের পর্বে neuron কতটা করে শেখে — সেটা?"</p>
        </div>

        <div className="dialog-box votu">
          <span className="dialog-name">ভতু:</span>
          <p>
            "ঠিক তাই। এবার দেখবি, neuron-কে শুধু <strong>কোন দিকে</strong> যেতে হবে বললেই হয় না —{' '}
            <strong>কতটা দূর</strong> যেতে হবে, সেটাও জানতে হয়।"
          </p>
        </div>

        <p className="highlight-text">
          পরের পর্বে তাই দেখবো — neuron কতটা করে শেখে? Error হলো, কিন্তু weight ঠিক কতটা বদলাবো? সেই
          learning rate η কোথা থেকে এলো, খুব বড় হলে কী হয়, খুব ছোট হলে কেন শেখা ধীর হয়ে যায় — আর শেষ
          পর্যন্ত gradient descent আসলে কী করতে চায়! 🚀
        </p>
      </article>
    </>
  )
}
