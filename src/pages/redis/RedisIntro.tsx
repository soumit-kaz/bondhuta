export default function RedisIntro() {
  return (
    <>
      <h1 className="page-title">⚡ Redis পরিচিতি</h1>
      
      <article className="blog-content">
        <p className="intro-text">
          মোটু এখন Docker শিখে ফেলেছে। কিন্তু তার অ্যাপ এখনও স্লো! 
          ভতু আপু বললো - "Redis শেখ, সব সমস্যার সমাধান!"
        </p>

        <div className="dialog-box motu">
          <span className="dialog-name">মোটু:</span>
          <p>"ভতু আপু, আমার API এত স্লো কেন? Database থেকে data আনতেই ২ সেকেন্ড লাগে!"</p>
        </div>

        <div className="dialog-box votu">
          <span className="dialog-name">ভতু:</span>
          <p>"তুই কি বারবার same data database থেকে fetch করছিস? 🤦"</p>
        </div>

        <div className="dialog-box motu">
          <span className="dialog-name">মোটু:</span>
          <p>"হ্যাঁ... আর কিভাবে করব?"</p>
        </div>

        <div className="dialog-box votu">
          <span className="dialog-name">ভতু:</span>
          <p>"Redis দিয়ে cache কর! প্রথমবার database থেকে আনবি, তারপর Redis এ রাখবি। পরের বার Redis থেকেই পাবি - milliseconds এ!"</p>
        </div>

        <h2>🤔 Redis কী?</h2>
        <p>
          Redis হলো একটা <strong>in-memory data store</strong>। মানে এটা data RAM এ রাখে, 
          তাই অনেক দ্রুত read/write করতে পারে।
        </p>

        <div className="concept-box">
          <h3>🚀 Redis এত ফাস্ট কেন?</h3>
          <ul>
            <li><strong>In-memory:</strong> Data RAM এ থাকে, disk এ না</li>
            <li><strong>Single-threaded:</strong> No locking overhead</li>
            <li><strong>Simple data structures:</strong> Optimized operations</li>
            <li>সাধারণ database: ~10ms | Redis: ~1ms</li>
          </ul>
        </div>

        <h2>🎯 Redis কোথায় ব্যবহার হয়?</h2>
        <ul>
          <li><strong>Caching:</strong> Database results cache করা</li>
          <li><strong>Session Store:</strong> User session রাখা</li>
          <li><strong>Rate Limiting:</strong> API rate limit করা</li>
          <li><strong>Leaderboards:</strong> Game rankings</li>
          <li><strong>Pub/Sub:</strong> Real-time messaging</li>
        </ul>

        <h2>🐳 Redis চালাও Docker দিয়ে</h2>
        <div className="code-box">
          <code>docker run -d -p 6379:6379 redis</code>
        </div>

        <div className="dialog-box motu">
          <span className="dialog-name">মোটু:</span>
          <p>"Docker শিখে রাখা কাজে আসলো! 😄"</p>
        </div>

        <p className="highlight-text">
          পরের পর্বে শিখবো Redis এর বিভিন্ন Data Types - Strings, Lists, Sets, Hashes! 📚
        </p>
      </article>
    </>
  )
}
