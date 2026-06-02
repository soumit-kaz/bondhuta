import singleNeuron from '../../assets/single-neuron.png'
import neuronWeightedSum from '../../assets/neuron-weighted-sum.png'

export default function NeuralNetworkIntro() {
  return (
    <>
      <h1 className="page-title">🧠 একটা Neuron-এর গল্প</h1>

      <article className="blog-content">
        <p className="intro-text">
          মোটু এবার নতুন নেশায় পড়েছে — Neural Network শিখবে। কিন্তু শুরুতেই
          সবাই ভয় পায়, এত matrix, এত গণিত! ভতু আপু বললো — "ভয়ের কিছু নেই।
          পুরো Neural Network কিন্তু দাঁড়িয়ে আছে একটাই ছোট জিনিসের উপর — একটা neuron।
          আগে ওটাই বুঝে ফেল।"
        </p>

        <div className="dialog-box motu">
          <span className="dialog-name">মোটু:</span>
          <p>"আপু, এই neuron জিনিসটা আসলে কী? আমাদের মাথার ভেতরে যেটা থাকে, সেটা?"</p>
        </div>

        <div className="dialog-box votu">
          <span className="dialog-name">ভতু:</span>
          <p>"একদম তেমনই একটা জিনিস। চল, ছবিটা দেখি — তাহলেই পরিষ্কার হয়ে যাবে।"</p>
        </div>

        <figure className="figure-box">
          <img src={singleNeuron} alt="তিনটি input ও একটি output সহ একটা single neuron" />
          <figcaption>একটা single neuron — তিনটা input (x₁, x₂, x₃) আর একটা output (Y)</figcaption>
        </figure>

        <h2>🔍 উপরের ছবিতে আমরা কী দেখছি?</h2>
        <p>
          এইটা একটা <strong>neuron</strong>। আমাদের মস্তিষ্কে যে neuron থাকে, এটাও অনেকটা
          সেরকমই একটা জিনিস।
        </p>
        <p>
          মস্তিষ্কের neuron-এ কী হয়? বিভিন্ন input line দিয়ে নানা রকম signal এসে ঢোকে।
          সেই signal গুলো একসাথে মিলেমিশে শেষমেশ একটা output তৈরি করে।
        </p>
        <p>
          এখানেও ঠিক একই ব্যাপার। আমরা যে neuron-টা বানিয়েছি, তাতে তিনটা input আছে।
          এই তিনটা input-এর উপর নির্ভর করেই ঠিক হবে — output line টা চালু হবে, নাকি বন্ধ থাকবে।
        </p>
        <p>
          তিনটা input মিলে যদি একটা নির্দিষ্ট <strong>threshold</strong>-এর চেয়ে বেশি হয়,
          তাহলে output line চালু হবে, মানে <code>y = 1</code>। আর যদি threshold-এর চেয়ে কম হয়,
          তাহলে output line বন্ধ থাকবে, মানে <code>y = 0</code>।
        </p>

        <h2>✍️ এবার একটু গণিতের ভাষায়</h2>
        <p>চলো ব্যাপারটাকে একটা mathematical form-এ লিখে ফেলি। ধরি,</p>

        <div className="formula-box">
          <p>sum_term = x₁ + x₂ + x₃</p>
        </div>

        <p>আর একটা threshold ধরে নিলাম,</p>

        <div className="formula-box">
          <p>threshold = 10</p>
        </div>

        <p className="note-text">(১০-ই কেন? এমনিতেই ধরলাম 😄 — পরে এর মান ঠিক করার নিয়ম শিখবো।)</p>

        <p>তাহলে আমাদের নিয়মটা দাঁড়ালো —</p>

        <div className="formula-box">
          <p>y = 1, &nbsp;যদি&nbsp; sum_term &gt; threshold</p>
          <p>y = 0, &nbsp;না হলে</p>
        </div>

        <h2>🤔 সব input কি সমান গুরুত্বপূর্ণ?</h2>
        <p>
          এবার একটা জরুরি প্রশ্ন এসে যায় — সব input কি আসলে একই রকম গুরুত্বপূর্ণ?
          একটা উদাহরণ দিয়ে ভাবা যাক।
        </p>
        <p>
          ধরো, তোমার ক্লাসের ছাত্র আবুল — সে Neural Network কোর্সে A+ পাবে কি না,
          তার সম্ভাবনা বের করতে চাই। আমরা তিনটা factor নিলাম —
        </p>

        <div className="concept-box">
          <h3>📊 আবুলের তিনটা factor</h3>
          <ul>
            <li><strong>x₁</strong> = ১০০ ঘণ্টার মধ্যে সে কত ঘণ্টা পড়েছে (study hours %)</li>
            <li><strong>x₂</strong> = যতটুকু পড়েছে, তার কত শতাংশ বুঝেছে (understanding %)</li>
            <li><strong>x₃</strong> = সে ক্লাসের কত শতাংশ attend করেছে (attendance %)</li>
          </ul>
        </div>

        <p>
          খেয়াল করো, তিনটাই কিন্তু ০–১০০ scale-এ মাপা — মানে একই scale ব্যবহার করেছি।
          (এই scale মেলানোর ব্যাপারটা পরে আরও সুন্দর করে আলোচনা করবো 😄)
        </p>

        <div className="dialog-box motu">
          <span className="dialog-name">মোটু:</span>
          <p>"তাহলে তো তিনটা যোগ করেই কাজ শেষ, তাই না আপু?"</p>
        </div>

        <div className="dialog-box votu">
          <span className="dialog-name">ভতু:</span>
          <p>"না রে, এত সহজ না! তিনটার গুরুত্ব তো এক না। বোঝা (understanding) যতটা জরুরি,
          নিছক attendance ততটা না।"</p>
        </div>

        <p>
          ঠিক এই কারণেই আমরা একটা নতুন ধারণা নিয়ে আসি — প্রতিটা input-এর সাথে একটা
          "গুরুত্বের মান" বা <strong>importance factor</strong> জুড়ে দেবো। Neural Network-এর
          ভাষায় একেই বলে — <strong>weight</strong>।
        </p>

        <figure className="figure-box">
          <img src={neuronWeightedSum} alt="প্রতিটা input line-এ weight (w₁, w₂, w₃) বসানো একটা neuron" />
          <figcaption>এবার প্রতিটা input line-এর সাথে একটা করে weight (w₁, w₂, w₃) জুড়ে গেছে</figcaption>
        </figure>

        <p>ধরি, weight গুলো এমন —</p>

        <div className="concept-box">
          <h3>⚖️ প্রতিটা input-এর weight</h3>
          <ul>
            <li><strong>w₁ = 90</strong> &nbsp;(পড়াশোনা বেশ জরুরি)</li>
            <li><strong>w₂ = 98</strong> &nbsp;(বোঝাটা সবচেয়ে জরুরি)</li>
            <li><strong>w₃ = 40</strong> &nbsp;(attendance তুলনায় কম জরুরি)</li>
          </ul>
        </div>

        <p>
          এখন আমরা আর শুধু যোগ (simple sum) করবো না — করবো <strong>weighted sum</strong>,
          মানে প্রতিটা input-কে তার weight দিয়ে গুণ করে তারপর যোগ করবো —
        </p>

        <div className="formula-box">
          <p>weighted_sum_term = (x₁ × w₁) + (x₂ × w₂) + (x₃ × w₃)</p>
        </div>

        <p>আর এবার সিদ্ধান্ত (decision) হবে এই weighted sum-এর উপর ভিত্তি করে —</p>

        <div className="formula-box">
          <p>y = 1, &nbsp;যদি&nbsp; weighted_sum_term &gt; threshold</p>
          <p>y = 0, &nbsp;না হলে</p>
        </div>

        <h2>🎉 ব্যাস, একটা neuron তৈরি!</h2>
        <p>
          এভাবেই আমরা একটা সহজ neuron বানিয়ে ফেললাম। Neural Network-এর প্রথম ধাপটা শেষ —
          একটা neuron কীভাবে input নেয়, কোনটা কতটা গুরুত্বপূর্ণ সেটা weight দিয়ে বুঝে নেয়,
          আর শেষে output চালু হবে কি হবে না সেই সিদ্ধান্ত নেয়।
        </p>

        <div className="dialog-box motu">
          <span className="dialog-name">মোটু:</span>
          <p>"আরে, এ তো ভয়েরই কিছু ছিল না! একটা neuron মানে দেখি — গুণ করো, যোগ করো, তারপর তুলনা করো। 😄"</p>
        </div>

        <p className="highlight-text">
          পরের পর্বে শিখবো — এই threshold আর weight গুলোর মান neuron নিজে কীভাবে শিখে নেয়,
          আর কেন এর নাম Perceptron! 🚀
        </p>
      </article>
    </>
  )
}
