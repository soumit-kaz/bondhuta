export default function NeuralNetworkLearning() {
  return (
    <>
      <h1 className="page-title">🧠 পর্ব ২: Neuron যেভাবে নিজে নিজে শেখে</h1>

      <article className="blog-content">
        <p className="intro-text">
          গত পর্বে আমরা একটা neuron বানিয়ে ফেলেছিলাম। কিন্তু শেষে মোটুর মনে একটা খচখচানি রয়ে
          গিয়েছিল — weight গুলো তো আমরা নিজেরা আন্দাজ করে বসিয়েছি, এগুলো ঠিক কিনা কে জানে!
          আজ সেই খচখচানিরই সমাধান।
        </p>

        <div className="dialog-box motu">
          <span className="dialog-name">মোটু:</span>
          <p>
            "আপু, তুমি বলেছিলে neuron নাকি নিজে নিজে শেখে। এই 'শেখা' ব্যাপারটা আসলে কী?
            একটা neuron আবার কী শেখে?"
          </p>
        </div>

        <div className="dialog-box votu">
          <span className="dialog-name">ভতু:</span>
          <p>
            "দারুণ প্রশ্ন! Neuron যেটা শেখে সেটা হলো — তার weight গুলো। মানে কোন input কতটা
            গুরুত্বপূর্ণ, সেটাই সে data দেখে দেখে ঠিক করে নেয়। চল, আস্তে আস্তে দেখি কীভাবে।
            তবে তার আগে গত পর্বের formula-টা একটু সাজিয়ে নিতে হবে।"
          </p>
        </div>

        <h2>🔧 একটু সাজানো-গোছানো</h2>
        <p>গত পর্বের নিয়মটা মনে আছে তো?</p>

        <div className="formula-box">
          <p>y = 1, &nbsp;যদি&nbsp; weighted_sum_term &gt; threshold</p>
          <p>y = 0, &nbsp;না হলে</p>
        </div>

        <p>আর,</p>

        <div className="formula-box">
          <p>weighted_sum_term = w₁·x₁ + w₂·x₂ + w₃·x₃</p>
        </div>

        <div className="dialog-box votu">
          <span className="dialog-name">ভতু:</span>
          <p>"এবার একটা ছোট্ট খেলা খেলি। দেখ তো —"</p>
        </div>

        <p>
          <code>weighted_sum_term &gt; threshold</code> — এই কথাটা আর{' '}
          <code>weighted_sum_term − threshold &gt; 0</code> — এই কথাটা কি একই না?
        </p>
        <p>
          একদম একই! একপাশ থেকে threshold-টা অন্যপাশে নিয়ে গেলাম, ব্যাস। তাহলে আমরা লিখতে পারি —
        </p>

        <div className="formula-box">
          <p>y = 1, &nbsp;যদি&nbsp; weighted_sum_term − threshold &gt; 0</p>
          <p>y = 0, &nbsp;যদি&nbsp; weighted_sum_term − threshold ≤ 0</p>
        </div>

        <p>এবার ধরি,</p>

        <div className="formula-box">
          <p>new_weighted_sum_term = weighted_sum_term − threshold</p>
        </div>

        <p>তাহলে আরও সংক্ষেপে —</p>

        <div className="formula-box">
          <p>y = 1, &nbsp;যদি&nbsp; new_weighted_sum_term &gt; 0</p>
          <p>y = 0, &nbsp;যদি&nbsp; new_weighted_sum_term ≤ 0</p>
        </div>

        <p>
          বাহ, এখন threshold-এর সাথে তুলনা করতে হচ্ছে না — সরাসরি <strong>০-এর সাথে</strong>{' '}
          তুলনা করলেই হচ্ছে। 😄
        </p>

        <h2>🪄 threshold-কে weight বানিয়ে ফেলা</h2>

        <div className="dialog-box motu">
          <span className="dialog-name">মোটু:</span>
          <p>"কিন্তু আপু, এই new_weighted_sum_term-টা পুরো খুলে লিখলে দেখতে কেমন হবে?"</p>
        </div>

        <div className="dialog-box votu">
          <span className="dialog-name">ভতু:</span>
          <p>"খুলে লিখি দাঁড়া —"</p>
        </div>

        <div className="formula-box">
          <p>new_weighted_sum_term = w₁·x₁ + w₂·x₂ + w₃·x₃ − threshold</p>
        </div>

        <div className="dialog-box votu">
          <span className="dialog-name">ভতু:</span>
          <p>
            "এই equation-টা দেখতে কেমন বেমানান লাগছে, না? শেষে ওই একলা threshold-টা পড়ে আছে।
            একটু সুন্দর করি। ধর — threshold নিজেও একটা weight! জোর করে ধরে নিই।"
          </p>
        </div>

        <p>ধরি,</p>

        <div className="formula-box">
          <p>w₀ = −threshold</p>
        </div>

        <p>তাহলে —</p>

        <div className="code-box">
          <pre>{`new_weighted_sum_term = w₁·x₁ + w₂·x₂ + w₃·x₃ − threshold
                      = w₁·x₁ + w₂·x₂ + w₃·x₃ + w₀`}</pre>
        </div>

        <div className="dialog-box motu">
          <span className="dialog-name">মোটু:</span>
          <p>"আরে! মাইনাসটা প্লাস হয়ে গেল কীভাবে? 😮"</p>
        </div>

        <div className="dialog-box votu">
          <span className="dialog-name">ভতু:</span>
          <p>
            "গুলিয়ে ফেলিস না — আমরা <code>w₀ = threshold</code> ধরিনি, ধরেছি{' '}
            <code>w₀ = −threshold</code>। তাই <code>−threshold</code> মানেই <code>+w₀</code>। ব্যাস!"
          </p>
        </div>

        <p>একটু সাজিয়ে লিখি —</p>

        <div className="formula-box">
          <p>new_weighted_sum_term = w₀ + w₁·x₁ + w₂·x₂ + w₃·x₃</p>
        </div>

        <div className="dialog-box votu">
          <span className="dialog-name">ভতু:</span>
          <p>
            "এবার তাকিয়ে দেখ — w₁-এর সাথে x₁ আছে, w₂-এর সাথে x₂ আছে, কিন্তু বেচারা w₀-এর সাথে
            কোনো x নেই। একা একা! ওরও একটা সঙ্গী দরকার, না?"
          </p>
        </div>

        <p>
          দিয়ে দিলাম একটা <code>x₀</code>। আর এই x₀-এর মান <strong>সবসময় ১</strong>। মানে জোর করে
          এমন একটা feature নিয়ে এলাম যার value সবসময় ১। (<code>w₀ × 1 = w₀</code>, কাজেই কিছু
          বদলায় না, শুধু দেখতে সুন্দর হয়।)
        </p>

        <div className="formula-box">
          <p>new_weighted_sum_term = w₀·x₀ + w₁·x₁ + w₂·x₂ + w₃·x₃</p>
        </div>

        <div className="dialog-box votu">
          <span className="dialog-name">ভতু:</span>
          <p>
            "এই w₀-কে আদর করে একটা নাম দেওয়া হয় — <strong>bias</strong>। আর x₀ = ১-কে বলে bias
            input। কাজ একটাই: threshold-টাকে weight-এর দলে ভিড়িয়ে দেওয়া, যাতে সব input-কে
            একইভাবে handle করা যায়।"
          </p>
        </div>

        <h2>🔢 Matrix-এর ভাষায়</h2>

        <div className="dialog-box votu">
          <span className="dialog-name">ভতু:</span>
          <p>
            "এই equation-টা গণিতের বিভিন্ন জগতে নানাভাবে লেখা যায়। যখন যেটা দিয়ে কাজ চালাতে
            সুবিধা, তখন সেটা ব্যবহার করবো। চল matrix দিয়ে লিখি — ধৈর্য ধর, আমার সাথে সাথে করতে
            থাক, বুঝে যাবি।"
          </p>
        </div>

        <p>ধরি একটা ৪×১ matrix —</p>

        <div className="code-box">
          <pre>{`W = [ w₀ ]
    [ w₁ ]
    [ w₂ ]
    [ w₃ ]`}</pre>
        </div>

        <p>আর আরেকটা ৪×১ matrix —</p>

        <div className="code-box">
          <pre>{`X = [ x₀ ]
    [ x₁ ]
    [ x₂ ]
    [ x₃ ]`}</pre>
        </div>

        <div className="dialog-box motu">
          <span className="dialog-name">মোটু:</span>
          <p>"এগুলো কেন করছি আপু?"</p>
        </div>

        <div className="dialog-box votu">
          <span className="dialog-name">ভতু:</span>
          <p>
            "ধৈর্য, ধৈর্য! 😄 করতে বলছি, কর। এবার W-কে transpose করি। মনে আছে transpose?
            দাঁড় করানো matrix-টা শুইয়ে দিলেই হলো —"
          </p>
        </div>

        <div className="code-box">
          <pre>{`Wᵀ = [ w₀  w₁  w₂  w₃ ]   ← এটা এখন ১×৪`}</pre>
        </div>

        <p>এবার Wᵀ আর X-কে গুণ করি —</p>

        <div className="code-box">
          <pre>{`Wᵀ X = [ w₀  w₁  w₂  w₃ ]   ×   [ x₀ ]
         (1×4)                    [ x₁ ]
                                  [ x₂ ]
                                  [ x₃ ]
                                   (4×1)

     = [ w₀·x₀ + w₁·x₁ + w₂·x₂ + w₃·x₃ ]   ← (1×1)`}</pre>
        </div>

        <div className="dialog-box motu">
          <span className="dialog-name">মোটু:</span>
          <p>"ওমা! এটা তো হুবহু new_weighted_sum_term-এর formula হয়ে গেল!"</p>
        </div>

        <div className="dialog-box votu">
          <span className="dialog-name">ভতু:</span>
          <p>"ঠিক ধরেছিস! এই জন্যই এত কসরত। এখন আমরা সাহস করে লিখতে পারি —"</p>
        </div>

        <div className="formula-box">
          <p>new_weighted_sum_term = Wᵀ X</p>
        </div>

        <p>একটা গোটা যোগফল মাত্র দুই-অক্ষরে। 🎯</p>

        <h2>📞 আবুলকে ফোন দাও</h2>

        <div className="dialog-box votu">
          <span className="dialog-name">ভতু:</span>
          <p>
            "তত্ত্ব অনেক হলো। এবার একটা সত্যিকারের পরীক্ষা। মোটু, তোর বন্ধু আবুলকে ফোন দে তো —
            ওর data গুলো লাগবে।"
          </p>
        </div>

        <p>মোটু ফোন তুলেই বললো — "আবুল! তোর কোর্সের হিসাবগুলো বল তো ভাই।"</p>
        <p>ওপাশ থেকে আবুল হাঁপাতে হাঁপাতে শুরু করলো —</p>

        <div className="concept-box">
          <h3>📊 আবুলের রিপোর্ট</h3>
          <ul>
            <li>
              "দোস্ত, পড়াশোনা মোটামুটি করেছি — ১০০ ঘণ্টার মধ্যে <strong>৬০ ঘণ্টা</strong> চাপিয়ে
              দিয়েছি (x₁)।
            </li>
            <li>
              আর যেটুকু পড়েছি, পুরোটাই মাথায় ঢুকেছে — <strong>৯৫%</strong> বুঝে ফেলেছি (x₂)!
              এ ব্যাপারে আমি ক্লাসের সেরা। 😎
            </li>
            <li>
              তবে... ইয়ে... ক্লাসে যাওয়াটা একটু কম হয়ে গেছে — মাত্র <strong>২০%</strong> (x₃)।
              রাত জেগে পড়ি তো, সকালে আর চোখ খোলে না রে! 😴"
            </li>
          </ul>
        </div>

        <p>মোটু ফোন রেখে দিল।</p>

        <div className="dialog-box votu">
          <span className="dialog-name">ভতু:</span>
          <p>
            "বাহ, perfect example! খেয়াল কর — তিনটা সংখ্যাই কিন্তু শতাংশ, মানে ০ থেকে ১০০-এর
            scale-এ। আমরা একটা ছোট কাজ করবো — প্রতিটাকে ১০০ দিয়ে ভাগ করে ০ থেকে ১-এর scale-এ
            নামিয়ে আনবো। এতে সংখ্যাগুলো ছোট আর handle করতে সহজ থাকে। (এই scale মেলানোর ব্যাপারটা
            পরে আরও বিস্তারিত দেখবো 😄)"
          </p>
        </div>

        <p>তাহলে —</p>

        <div className="code-box">
          <pre>{`X = [ 1    ]   ← x₀, সবসময় ১ (bias input)
    [ 0.60 ]   ← study
    [ 0.95 ]   ← understanding
    [ 0.20 ]   ← attendance`}</pre>
        </div>

        <p>
          আর আমাদের আন্দাজ করা weight গুলো (threshold ধরলাম ৩, কাজেই w₀ = −threshold = −৩) —
        </p>

        <div className="code-box">
          <pre>{`W = [ -3.0 ]   ← w₀ (bias)
    [  2.0 ]   ← study-র গুরুত্ব
    [  1.0 ]   ← understanding-এর গুরুত্ব
    [  3.0 ]   ← attendance-এর গুরুত্ব`}</pre>
        </div>

        <div className="dialog-box motu">
          <span className="dialog-name">মোটু:</span>
          <p>
            "দাঁড়াও আপু — attendance-এর weight ৩, কিন্তু understanding-এর weight মাত্র ১?
            বোঝার চেয়ে ক্লাসে হাজিরা বেশি গুরুত্বপূর্ণ?! এটা তো উল্টো মনে হচ্ছে!"
          </p>
        </div>

        <div className="dialog-box votu">
          <span className="dialog-name">ভতু:</span>
          <p>
            "হ্যাঁ রে, এটাই তো মজা! আমরা তো এগুলো নিজের খেয়ালখুশি মতো আন্দাজ করে বসিয়েছি।
            ঠিক আছে কিনা কে জানে! চল, neuron-কে দিয়ে আবুলের ফল বের করিয়ে দেখি — মিলবে কিনা।"
          </p>
        </div>

        <h2>🧮 হিসাব মেলানো</h2>

        <div className="code-box">
          <pre>{`Wᵀ = [ -3.0   2.0   1.0   3.0 ]

new_weighted_sum_term = Wᵀ X
  = (-3.0 × 1) + (2.0 × 0.60) + (1.0 × 0.95) + (3.0 × 0.20)
  = -3.0 + 1.20 + 0.95 + 0.60
  = -0.25`}</pre>
        </div>

        <p>এখন —</p>

        <div className="formula-box">
          <p>-0.25 &lt; 0 &nbsp; ⟹ &nbsp; y = 0</p>
        </div>

        <p>মানে neuron বলছে, আবুল A+ পায়নি।</p>

        <div className="dialog-box motu">
          <span className="dialog-name">মোটু:</span>
          <p>"কিন্তু আবুল তো ফোনে বললো সে A+ পেয়েছে! তাহলে neuron ভুল বললো?"</p>
        </div>

        <div className="dialog-box votu">
          <span className="dialog-name">ভতু:</span>
          <p>"একদম। এখানেই আসল ঘটনা শুরু।"</p>
        </div>

        <h2>🤔 neuron ভুল করলো কেন? আর ঠিক করবো কীভাবে?</h2>

        <div className="dialog-box votu">
          <span className="dialog-name">ভতু:</span>
          <p>
            "একটু থেমে ভাব তো — neuron ভুল করলো ঠিক কোথায়? আমাদের new_weighted_sum_term-এর
            মান এসেছে <strong>−0.25</strong>, মানে ০-এর চেয়ে কম। তাই y হলো ০। অথচ আমরা চাইছিলাম
            y = ১, মানে চাইছিলাম যোগফলটা ০-এর <strong>চেয়ে বেশি</strong> হোক।"
          </p>
        </div>

        <div className="dialog-box motu">
          <span className="dialog-name">মোটু:</span>
          <p>
            "তাহলে... যদি কোনোভাবে new_weighted_sum_term-এর মানটা বাড়ানো যেত, তাহলেই তো neuron
            ঠিক উত্তর দিত!"
          </p>
        </div>

        <div className="dialog-box votu">
          <span className="dialog-name">ভতু:</span>
          <p>
            "একদম! এখন প্রশ্ন — মানটা বাড়াবো কীভাবে? যোগফলটা তো তৈরিই হচ্ছে w আর x গুণ করে।
            x তো আবুলের সত্যিকারের data, ওটা ছোঁয়া যাবে না। তাহলে হাতে রইলো একটাই জিনিস —{' '}
            <strong>w গুলো একটু বাড়িয়ে দিই</strong>। weight বাড়লে গুণফলগুলোও বাড়বে, ফলে পুরো
            যোগফলটাও উপরের দিকে উঠবে।"
          </p>
        </div>

        <p>সবচেয়ে সহজ উপায় — প্রতিটা weight-এর সাথে তার নিজের x-টা যোগ করে দাও:</p>

        <div className="formula-box">
          <p>W_new = W + X</p>
        </div>

        <div className="dialog-box motu">
          <span className="dialog-name">মোটু:</span>
          <p>
            "আর যদি উল্টো ঘটনা হতো? মানে neuron বললো y = ১, কিন্তু হওয়ার কথা ছিল ০? তখন তো
            যোগফলটা উল্টো <strong>কমাতে</strong> হবে!"
          </p>
        </div>

        <div className="dialog-box votu">
          <span className="dialog-name">ভতু:</span>
          <p>"ঠিক! তখন উল্টোটা করবো — x বিয়োগ করে weight কমিয়ে দেবো:"</p>
        </div>

        <div className="formula-box">
          <p>W_new = W − X</p>
        </div>

        <div className="dialog-box votu">
          <span className="dialog-name">ভতু:</span>
          <p>"এই দুটো ঘটনাকে একসাথে এক সুতোয় বাঁধা যায়। একটা <strong>Error</strong> বানাই —"</p>
        </div>

        <div className="formula-box">
          <p>Error = d − y</p>
        </div>

        <p>এখানে —</p>
        <ul>
          <li><strong>y</strong> = neuron যা বললো</li>
          <li><strong>d</strong> = আসলে যা হওয়ার কথা ছিল (desired output)</li>
        </ul>

        <p>দেখ কেমন সুন্দর খাপে খাপে মিলে যায় —</p>

        <div className="table-wrap">
          <table className="data-table">
            <thead>
              <tr>
                <th>অবস্থা</th>
                <th>y</th>
                <th>d</th>
                <th>Error = d − y</th>
                <th>কী করতে হবে</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>যোগফল বাড়ানো দরকার</td>
                <td>0</td>
                <td>1</td>
                <td><strong>+1</strong></td>
                <td>W + X</td>
              </tr>
              <tr>
                <td>যোগফল কমানো দরকার</td>
                <td>1</td>
                <td>0</td>
                <td><strong>−1</strong></td>
                <td>W − X</td>
              </tr>
              <tr>
                <td>ঠিকই আছে</td>
                <td>সমান</td>
                <td>সমান</td>
                <td><strong>0</strong></td>
                <td>কিছুই করবো না</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>কাজেই তিনটা ঘটনাকেই <strong>একটা</strong> নিয়মে লেখা যায় —</p>

        <div className="formula-box">
          <p>W_new = W + Error × X</p>
        </div>

        <div className="dialog-box motu">
          <span className="dialog-name">মোটু:</span>
          <p>
            "বাহ! Error যদি +১ হয় তাহলে W + X, −১ হলে W − X, আর ০ হলে weight একটুও নড়বে না —
            মানে যেখানে neuron ঠিক বলছে সেখানে হাতই দেবো না!"
          </p>
        </div>

        <div className="dialog-box votu">
          <span className="dialog-name">ভতু:</span>
          <p>"একদম ধরেছিস। এবার আবুলের ক্ষেত্রে প্রয়োগ করি।"</p>
        </div>

        <h2>⚙️ আবুলের জন্য weight আপডেট</h2>

        <p>আবুলের ক্ষেত্রে y = ০, কিন্তু d = ১। তাই —</p>

        <div className="formula-box">
          <p>Error = d − y = 1 − 0 = +1</p>
        </div>

        <div className="code-box">
          <pre>{`W_new = W + Error × X
      = [ -3.0 ]       [ 1    ]     [ -2.0 ]
        [  2.0 ]  +  1 × [ 0.60 ]  =  [  2.60 ]
        [  1.0 ]       [ 0.95 ]     [  1.95 ]
        [  3.0 ]       [ 0.20 ]     [  3.20 ]`}</pre>
        </div>

        <p>
          খেয়াল কর — understanding-এর weight ১ থেকে বেড়ে ১.৯৫ হলো, bias-ও −৩ থেকে −২ হলো।
          নতুন weight দিয়ে আবার আবুলের ফল বের করি —
        </p>

        <div className="code-box">
          <pre>{`new_weighted_sum_term = (-2.0×1) + (2.60×0.60) + (1.95×0.95) + (3.20×0.20)
                      = -2.0 + 1.56 + 1.8525 + 0.64
                      = 2.05   >  0   ⟹   y = 1 ✅`}</pre>
        </div>

        <div className="dialog-box motu">
          <span className="dialog-name">মোটু:</span>
          <p>"আরে! একবার ঠেলা দিতেই neuron সঠিক উত্তর দিয়ে দিল!"</p>
        </div>

        <div className="dialog-box votu">
          <span className="dialog-name">ভতু:</span>
          <p>
            "হ্যাঁ — তবে এখানে একটা ফাঁদ আছে। আমরা শুধু <strong>একজনের</strong> data দিয়ে weight
            ঠিক করলাম। এই নতুন weight দিয়ে কি বাকি সব student-এর উত্তরও ঠিক আসবে? নাকি একজনকে
            ঠিক করতে গিয়ে আরেকজনকে ভুল করে ফেলবে? চল, ক্লাসের আরও কয়েকজনকে ডেকে দেখি।"
          </p>
        </div>

        <h2>👥 পুরো ক্লাসের data — এক epoch</h2>

        <p>
          ভতু আবুলের সাথে আরও তিনজনের data জোগাড় করলো (সবই ১০০ দিয়ে ভাগ করে ০–১ scale-এ আনা) —
        </p>

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
                <td>১</td>
              </tr>
              <tr>
                <td>বাবুল</td>
                <td>0.30</td>
                <td>0.40</td>
                <td>0.90</td>
                <td>০</td>
              </tr>
              <tr>
                <td>কাবুল</td>
                <td>0.80</td>
                <td>0.85</td>
                <td>0.70</td>
                <td>১</td>
              </tr>
              <tr>
                <td>দাবুল</td>
                <td>0.20</td>
                <td>0.25</td>
                <td>0.30</td>
                <td>০</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="note-text">
          (বাবুল ক্লাসে নিয়মিত গেলেও পড়া বোঝে কম — A+ পায়নি। কাবুল সবদিকেই ভালো — A+।
          দাবুল সবদিকেই দুর্বল — A+ নয়।)
        </p>

        <div className="dialog-box votu">
          <span className="dialog-name">ভতু:</span>
          <p>
            "এখন একটা শব্দ শিখে রাখ। পুরো dataset-এর উপর একবার শুরু থেকে শেষ পর্যন্ত ঘুরে আসাকে
            বলে এক <strong>epoch</strong>। আর ভেতরে প্রতিটা student-কে নিয়ে একটা করে ধাপ — সেই এক
            একটা ধাপকে বলে এক <strong>iteration</strong>। আমাদের ৪ জন student, কাজেই এক epoch =
            ৪টা iteration। (অনেকে ঢিলেঢালাভাবে দুটোকে একই অর্থে বলে ফেলে, কিন্তু পরিষ্কার করে বললে
            এটাই নিয়ম।)"
          </p>
        </div>

        <div className="dialog-box votu">
          <span className="dialog-name">ভতু:</span>
          <p>"চল প্রথম epoch শুরু করি। শুরুর weight সেই আন্দাজ করা মানগুলো:"</p>
        </div>

        <div className="formula-box">
          <p>W = [ -3.0, &nbsp;2.0, &nbsp;1.0, &nbsp;3.0 ]</p>
        </div>

        <h3>🔁 Epoch ১ — পুরোটা খুলে</h3>

        <p>
          <strong>👦 আবুল</strong> — চলতি weight <code>W = [-3.0, 2.0, 1.0, 3.0]</code> দিয়ে:
        </p>
        <div className="code-box">
          <pre>{`sum = (-3.0×1) + (2.0×0.60) + (1.0×0.95) + (3.0×0.20)
    = -3.0 + 1.20 + 0.95 + 0.60
    = -0.25            → y = 0,  d = 1,  Error = +1   ❌

W_new = W + X
      = [-3.0, 2.0, 1.0, 3.0] + [1, 0.60, 0.95, 0.20]
      = [-2.0, 2.60, 1.95, 3.20]`}</pre>
        </div>

        <div className="dialog-box motu">
          <span className="dialog-name">মোটু:</span>
          <p>
            "আপু, এবার বাবুলের হিসাব কোন weight দিয়ে করবো — শুরুর পুরনো weight, না এইমাত্র আবুলের
            জন্য বদলানো নতুন weight?"
          </p>
        </div>

        <div className="dialog-box votu">
          <span className="dialog-name">ভতু:</span>
          <p>
            "খুব জরুরি প্রশ্ন! <strong>এইমাত্র বদলানো নতুন weight দিয়েই</strong>। neuron কিন্তু
            প্রতি ধাপে শিখেই যাচ্ছে — তাই পরের student সবসময় সবচেয়ে আপডেটেড weight-ই পায়, পুরনোটা
            নয়। এটাকে বলে <strong>online learning</strong> — একজন একজন করে শিখে এগোনো।"
          </p>
        </div>

        <p>
          <strong>👦 বাবুল</strong> — আবুলের আপডেটের পরের weight{' '}
          <code>W = [-2.0, 2.60, 1.95, 3.20]</code> দিয়ে:
        </p>
        <div className="code-box">
          <pre>{`sum = (-2.0×1) + (2.60×0.30) + (1.95×0.40) + (3.20×0.90)
    = -2.0 + 0.78 + 0.78 + 2.88
    = 2.44             → y = 1,  d = 0,  Error = -1   ❌

W_new = W − X
      = [-2.0, 2.60, 1.95, 3.20] − [1, 0.30, 0.40, 0.90]
      = [-3.0, 2.30, 1.55, 2.30]`}</pre>
        </div>

        <p>
          <strong>👦 কাবুল</strong> — বাবুলের আপডেটের পরের weight{' '}
          <code>W = [-3.0, 2.30, 1.55, 2.30]</code> দিয়ে:
        </p>
        <div className="code-box">
          <pre>{`sum = (-3.0×1) + (2.30×0.80) + (1.55×0.85) + (2.30×0.70)
    = -3.0 + 1.84 + 1.3175 + 1.61
    = 1.77 (প্রায়)     → y = 1,  d = 1,  Error = 0    ✅

কোনো ভুল নেই → weight একটুও নড়লো না, আগের মানই থাকলো।`}</pre>
        </div>

        <p>
          <strong>👦 দাবুল</strong> — একই weight <code>W = [-3.0, 2.30, 1.55, 2.30]</code> দিয়ে
          (কাবুলে কিছু বদলায়নি):
        </p>
        <div className="code-box">
          <pre>{`sum = (-3.0×1) + (2.30×0.20) + (1.55×0.25) + (2.30×0.30)
    = -3.0 + 0.46 + 0.3875 + 0.69
    = -1.46 (প্রায়)    → y = 0,  d = 0,  Error = 0    ✅

আবারও কোনো ভুল নেই → weight অপরিবর্তিত।`}</pre>
        </div>

        <p>এক epoch শেষে weight দাঁড়ালো —</p>
        <div className="formula-box">
          <p>W = [ -3.0, &nbsp;2.30, &nbsp;1.55, &nbsp;2.30 ]</p>
        </div>

        <div className="dialog-box motu">
          <span className="dialog-name">মোটু:</span>
          <p>
            "দেখো আপু — আবুলকে ঠিক করতে গিয়ে weight বাড়লো, আবার বাবুলের বেলায় উল্টো কমলো!
            একটা epoch শেষেও কিন্তু সবাই ঠিক হলো না নিশ্চিত — শুরুর weight দিয়ে দেখলে বাবুল তো
            ভুলই ছিল।"
          </p>
        </div>

        <div className="dialog-box votu">
          <span className="dialog-name">ভতু:</span>
          <p>
            "ঠিক! এক epoch-এ সাধারণত কাজ শেষ হয় না। তাই আবার শুরু থেকে পুরো dataset-এর উপর ঘুরি —
            epoch ২। এবার থেকে প্রতিটা ধাপ একই নিয়মে চলবে, তাই শুধু ফলগুলো সংক্ষেপে সাজিয়ে দিই
            (প্রতিটা sum কিন্তু ঠিক আগের মতোই সেই মুহূর্তের সবচেয়ে নতুন weight দিয়ে বের করা):"
          </p>
        </div>

        <h3>🔁 Epoch ২:</h3>
        <div className="code-box">
          <pre>{`আবুল : sum =  0.31  → y=1, d=1, Error= 0  → ঠিক
বাবুল : sum =  0.38  → y=1, d=0, Error=-1  → আপডেট  W = [-4.0, 2.0, 1.15, 1.40]
কাবুল : sum = -0.44  → y=0, d=1, Error=+1  → আপডেট  W = [-3.0, 2.80, 2.0, 2.10]
দাবুল : sum = -1.31  → y=0, d=0, Error= 0  → ঠিক`}</pre>
        </div>

        <div className="dialog-box motu">
          <span className="dialog-name">মোটু:</span>
          <p>
            "আপু, দাঁড়াও! একটা গোলমাল দেখছি — কাবুল তো epoch ১-এ একদম ঠিক ছিল (Error ০)। অথচ
            এই epoch ২-এ সে আবার ভুল হয়ে গেল (sum −0.44)! আমরা কি তাহলে বাবুলকে শেখাতে গিয়ে
            কাবুলের শেখাটা নষ্ট করে ফেললাম? neuron কি আগেরটা ভুলে যাচ্ছে?"
          </p>
        </div>

        <div className="dialog-box votu">
          <span className="dialog-name">ভতু:</span>
          <p>
            "দারুণ চোখ! 👏 হ্যাঁ — এটাই আসল একটা মজার ব্যাপার। একজনের জন্য weight ঠেলতে গিয়ে আগে-ঠিক-
            হওয়া আরেকজন সাময়িকভাবে ভুল হয়ে যেতেই পারে। neuron যেন এক পা এগোয়, আধ পা পিছায়।
            তাহলে কাজটা কখনো শেষ হবে কি? এই data-র জন্য একটা সুন্দর গ্যারান্টি আছে — সেই গল্পটা
            তুলে রাখছি পরের পর্বের জন্য। আপাতত শুধু দেখি, ঘুরতে ঘুরতে শেষে কী হয়।"
          </p>
        </div>

        <h3>🔁 Epoch ৩:</h3>
        <div className="code-box">
          <pre>{`আবুল : sum =  1.00  → y=1, d=1, Error= 0  → ঠিক
বাবুল : sum =  0.53  → y=1, d=0, Error=-1  → আপডেট  W = [-4.0, 2.50, 1.60, 1.20]
কাবুল : sum =  0.20  → y=1, d=1, Error= 0  → ঠিক
দাবুল : sum = -2.74  → y=0, d=0, Error= 0  → ঠিক`}</pre>
        </div>

        <h3>🔁 Epoch ৪:</h3>
        <div className="code-box">
          <pre>{`আবুল : sum = -0.74  → y=0, d=1, Error=+1  → আপডেট  W = [-3.0, 3.10, 2.55, 1.40]
বাবুল : sum =  0.21  → y=1, d=0, Error=-1  → আপডেট  W = [-4.0, 2.80, 2.15, 0.50]
কাবুল : sum =  0.42  → y=1, d=1, Error= 0  → ঠিক
দাবুল : sum = -2.75  → y=0, d=0, Error= 0  → ঠিক`}</pre>
        </div>

        <h3>🔁 Epoch ৫:</h3>
        <div className="code-box">
          <pre>{`আবুল : sum = -0.18  → y=0, d=1, Error=+1  → আপডেট  W = [-3.0, 3.40, 3.10, 0.70]
বাবুল : sum = -0.11  → y=0, d=0, Error= 0  → ঠিক
কাবুল : sum =  2.85  → y=1, d=1, Error= 0  → ঠিক
দাবুল : sum = -1.34  → y=0, d=0, Error= 0  → ঠিক`}</pre>
        </div>

        <h3>🔁 Epoch ৬:</h3>
        <div className="code-box">
          <pre>{`আবুল : sum =  2.13  → y=1, d=1, Error= 0  → ঠিক
বাবুল : sum = -0.11  → y=0, d=0, Error= 0  → ঠিক
কাবুল : sum =  2.85  → y=1, d=1, Error= 0  → ঠিক
দাবুল : sum = -1.34  → y=0, d=0, Error= 0  → ঠিক`}</pre>
        </div>

        <div className="dialog-box motu">
          <span className="dialog-name">মোটু:</span>
          <p>
            "এই epoch-এ তো কারো জন্যই Error হলো না — সবার Error শূন্য! মানে weight আর একটুও
            নড়লো না!"
          </p>
        </div>

        <div className="dialog-box votu">
          <span className="dialog-name">ভতু:</span>
          <p>
            "একদম। যখন একটা গোটা epoch-এ আর কোনো আপডেট লাগে না — অর্থাৎ সবাইকে neuron
            ঠিকঠাক চিনে ফেলেছে — তখন আমরা বলি neuron <strong>শিখে ফেলেছে</strong>, training শেষ।
            একে বলে <strong>convergence</strong>। আর খেয়াল কর — তোর সেই 'ভুলে যাওয়া'-র দুশ্চিন্তা
            শেষমেশ মিটে গেল: ঘুরতে ঘুরতে neuron এমন এক weight খুঁজে পেল যেখানে সবাই একসাথে ঠিক।"
          </p>
        </div>

        <p>চূড়ান্ত weight দাঁড়ালো —</p>

        <div className="code-box">
          <pre>{`W = [ -3.0,  3.40,  3.10,  0.70 ]
       bias  study  underst. attend.`}</pre>
        </div>

        <h2>🎓 এখন একটু থেমে weight গুলোর দিকে তাকাই</h2>

        <div className="dialog-box motu">
          <span className="dialog-name">মোটু:</span>
          <p>
            "আরে আপু, মজার ব্যাপার! শুরুতে আমরা ভুল করে attendance-এর গুরুত্ব সবচেয়ে বেশি (৩)
            আর understanding-এর সবচেয়ে কম (১) ধরেছিলাম। কিন্তু neuron নিজে নিজে শিখে উল্টে দিল —"
          </p>
        </div>

        <ul>
          <li>study-র weight: 2.0 → <strong>3.40</strong> (বাড়লো)</li>
          <li>understanding-এর weight: 1.0 → <strong>3.10</strong> (অনেক বাড়লো!)</li>
          <li>attendance-এর weight: 3.0 → <strong>0.70</strong> (অনেক কমলো!)</li>
        </ul>

        <div className="dialog-box votu">
          <span className="dialog-name">ভতু:</span>
          <p>
            "একদম! আমরা মুখে আন্দাজ করে যা ভুল করেছিলাম, neuron data দেখে সেটা নিজেই শুধরে নিল।
            সে বুঝে গেল — A+ পেতে আসল ব্যাপার হলো পড়া আর বোঝা, নিছক হাজিরা ততটা না। কেউ ওকে এটা
            বলে দেয়নি — সে শুধু ভুল-শুধরে-শুধরে নিজেই শিখে নিয়েছে।"
          </p>
        </div>

        <h2>🚀 তাহলে আজ কী শিখলাম?</h2>

        <p>মোটু একটা লম্বা শ্বাস নিয়ে গুছিয়ে বললো —</p>

        <div className="concept-box">
          <h3>🧠 Neuron-এর শেখা মানে আসলে weight ঠিক করে নেওয়া</h3>
          <ul>
            <li>১. data দেখে একটা উত্তর (y) বের করে,</li>
            <li>২. সঠিক উত্তরের (d) সাথে মিলিয়ে Error = d − y বের করে,</li>
            <li>
              ৩. সেই Error অনুযায়ী weight ঠেলে দেয় — <code>W_new = W + Error × X</code>{' '}
              (বাড়াতে হলে +X, কমাতে হলে −X, ঠিক থাকলে কিছুই না),
            </li>
            <li>
              ৪. পুরো dataset-এর উপর বারবার epoch চালায়, যতক্ষণ না আর কোনো Error থাকে —
              মানে convergence।
            </li>
          </ul>
        </div>

        <div className="dialog-box votu">
          <span className="dialog-name">ভতু:</span>
          <p>
            "চমৎকার গুছিয়েছিস! তবে তিনটে প্রশ্ন এখনো ঝুলে আছে — (১) প্রতিবার আমরা পুরো X
            যোগ/বিয়োগ করছি, এতে weight কি মাঝে মাঝে অনেক বেশি লাফিয়ে যাচ্ছে না? (২) তুই যে
            'একজনকে শেখাতে গিয়ে আরেকজনকে ভুলে যাওয়া' ধরেছিলি — এবার সুন্দরভাবে মিটে গেল ঠিকই,
            কিন্তু সবসময় কি এমন মিটবে? নাকি neuron চিরকাল এক পা এগিয়ে আধ পা পিছিয়ে ঘুরপাক খেতেই
            থাকবে? (৩) ছোট, সাজানো একটা dataset-এ তো convergence হলো — কিন্তু data যদি এমন হয় যে
            কোনো সরল রেখা দিয়ে দুই দল আলাদাই করা যায় না, তখন?"
          </p>
        </div>

        <p className="highlight-text">
          সেই গল্পই আসবে পরের পর্বে — <strong>learning rate</strong> দিয়ে weight-এর লাফ মেপে রাখা,
          আর <strong>Perceptron Convergence</strong>-এর সেই গ্যারান্টি (কখন neuron নিশ্চিত শিখবে,
          আর কোন data সে কোনোদিনই শিখতে পারবে না — সেই সীমানার কথা)! 🚀
        </p>
      </article>
    </>
  )
}
