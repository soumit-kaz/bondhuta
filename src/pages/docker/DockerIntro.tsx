export default function DockerIntro() {
  return (
    <>
      <h1 className="page-title">🐳 Docker: মোটু টু ভতু</h1>
      
      <article className="blog-content">
        <p className="intro-text">
          মোটু একজন নুব ডেভেলপার। সে তার ল্যাপটপে একটা Node.js অ্যাপ বানিয়েছে। 
          লোকালে সব ঠিকঠাক চলছে। কিন্তু যখন সিনিয়র ভতু আপুর কাছে কোড পাঠালো...
        </p>

        <div className="dialog-box motu">
          <span className="dialog-name">মোটু:</span>
          <p>"ভতু আপু, কোড তো পাঠালাম। রান করেন!"</p>
        </div>

        <div className="dialog-box votu">
          <span className="dialog-name">ভতু:</span>
          <p>"ভাই, এরর দিচ্ছে। তোর Node version কত?"</p>
        </div>

        <div className="dialog-box motu">
          <span className="dialog-name">মোটু:</span>
          <p>"18... আপনার?"</p>
        </div>

        <div className="dialog-box votu">
          <span className="dialog-name">ভতু:</span>
          <p>"14 😅"</p>
        </div>

        <h2>😤 "আমার মেশিনে তো চলছিল!"</h2>
        <p>
          এই কথাটা প্রতিটা ডেভেলপার জীবনে অন্তত একবার বলেছে। আর এই সমস্যার সমাধানই হলো <strong>Docker</strong>!
        </p>

        <h2>🤔 Docker আসলে কী?</h2>
        <p>
          Docker হলো একটা <strong>containerization platform</strong>। সহজ ভাষায় বললে - 
          Docker তোমার অ্যাপ্লিকেশন এবং তার সব dependencies কে একটা "বাক্সে" ভরে দেয়। 
          এই বাক্স যেকোনো কম্পিউটারে একইভাবে চলবে!
        </p>

        <div className="concept-box">
          <h3>📦 Container = তোমার অ্যাপ + সব কিছু যা দরকার</h3>
          <ul>
            <li>Operating System এর একটা lightweight version</li>
            <li>Runtime (Node.js, Python, Java etc.)</li>
            <li>Libraries ও Dependencies</li>
            <li>তোমার কোড</li>
            <li>Environment variables</li>
          </ul>
        </div>

        <h2>🚢 Container vs Virtual Machine</h2>
        <p>
          অনেকে ভাবে Container আর VM একই জিনিস। কিন্তু না!
        </p>
        <ul>
          <li><strong>VM:</strong> পুরো একটা OS চালায় - ভারী, স্লো</li>
          <li><strong>Container:</strong> Host OS এর kernel শেয়ার করে - হালকা, ফাস্ট</li>
        </ul>

        <p className="highlight-text">
          পরের পর্বে আমরা দেখবো কিভাবে Docker install করতে হয় এবং প্রথম container চালাতে হয়! 🚀
        </p>
      </article>
    </>
  )
}
