import './MainContent.css'

interface MainContentProps {
  activePage?: string
}

export default function MainContent({ activePage = 'docker-intro' }: MainContentProps) {
  return (
    <main className="main-content">
      <div className="content-body">
        {getPageContent(activePage)}
      </div>
    </main>
  )
}

function getPageContent(pageId: string) {
  switch (pageId) {
    case 'docker-intro':
      return <DockerIntroPage />
    case 'docker-basics':
      return <DockerBasicsPage />
    case 'docker-images':
      return <DockerImagesPage />
    case 'redis-intro':
      return <RedisIntroPage />
    default:
      return <ComingSoonPage />
  }
}

function DockerIntroPage() {
  return (
    <>
      <h1 className="page-title">🐳 Docker: মোটু টু বঠু</h1>
      
      <article className="blog-content">
        <p className="intro-text">
          মোটু একজন নুব ডেভেলপার। সে তার ল্যাপটপে একটা Node.js অ্যাপ বানিয়েছে। 
          লোকালে সব ঠিকঠাক চলছে। কিন্তু যখন সিনিয়র বঠু ভাইয়ের কাছে কোড পাঠালো...
        </p>

        <div className="dialog-box motu">
          <span className="dialog-name">মোটু:</span>
          <p>"বঠু ভাই, কোড তো পাঠালাম। রান করেন!"</p>
        </div>

        <div className="dialog-box bothu">
          <span className="dialog-name">বঠু:</span>
          <p>"ভাই, এরর দিচ্ছে। তোর Node version কত?"</p>
        </div>

        <div className="dialog-box motu">
          <span className="dialog-name">মোটু:</span>
          <p>"18... আপনার?"</p>
        </div>

        <div className="dialog-box bothu">
          <span className="dialog-name">বঠু:</span>
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

function DockerBasicsPage() {
  return (
    <>
      <h1 className="page-title">🔧 Docker এর বেসিক্স</h1>
      
      <article className="blog-content">
        <p className="intro-text">
          গত পর্বে মোটু জানলো Docker কী। এবার বঠু ভাই তাকে শেখাবে কিভাবে Docker ইন্সটল করতে হয় এবং প্রথম container চালাতে হয়।
        </p>

        <h2>📥 Docker Installation</h2>
        
        <div className="dialog-box motu">
          <span className="dialog-name">মোটু:</span>
          <p>"বঠু ভাই, Docker কিভাবে install করব?"</p>
        </div>

        <div className="dialog-box bothu">
          <span className="dialog-name">বঠু:</span>
          <p>"সোজা! Docker Desktop নামাও। Windows, Mac, Linux সবার জন্য আছে।"</p>
        </div>

        <div className="concept-box">
          <h3>🖥️ Docker Desktop Install করো</h3>
          <ul>
            <li><strong>Windows/Mac:</strong> docker.com থেকে Docker Desktop ডাউনলোড করো</li>
            <li><strong>Linux:</strong> Terminal এ apt বা yum দিয়ে install করো</li>
          </ul>
        </div>

        <h2>🏃 প্রথম Container চালাও</h2>
        <p>Install হয়ে গেলে, terminal খোলো এবং লেখো:</p>

        <div className="code-box">
          <code>docker run hello-world</code>
        </div>

        <div className="dialog-box motu">
          <span className="dialog-name">মোটু:</span>
          <p>"ওয়াও! কিছু একটা প্রিন্ট হলো! কিন্তু এটা কী করলো?"</p>
        </div>

        <div className="dialog-box bothu">
          <span className="dialog-name">বঠু:</span>
          <p>"Docker প্রথমে hello-world image খুঁজলো locally। না পেয়ে Docker Hub থেকে download করলো। তারপর সেই image থেকে container বানিয়ে run করলো!"</p>
        </div>

        <h2>🔑 মূল Commands</h2>
        <ul>
          <li><code>docker pull [image]</code> - Image download করো</li>
          <li><code>docker run [image]</code> - Container চালাও</li>
          <li><code>docker ps</code> - Running containers দেখো</li>
          <li><code>docker ps -a</code> - সব containers দেখো</li>
          <li><code>docker stop [container_id]</code> - Container থামাও</li>
        </ul>

        <p className="highlight-text">
          পরের পর্বে শিখবো Docker Images নিয়ে - কিভাবে নিজের image বানাতে হয়! 📦
        </p>
      </article>
    </>
  )
}

function DockerImagesPage() {
  return (
    <>
      <h1 className="page-title">📦 Docker Images</h1>
      
      <article className="blog-content">
        <p className="intro-text">
          মোটু এখন Docker চালাতে পারে। কিন্তু hello-world দিয়ে তো আর কাজ হবে না! 
          এবার বঠু ভাই শেখাবে কিভাবে নিজের অ্যাপের জন্য Docker Image বানাতে হয়।
        </p>

        <h2>🤔 Image আর Container এর পার্থক্য কী?</h2>

        <div className="dialog-box motu">
          <span className="dialog-name">মোটু:</span>
          <p>"বঠু ভাই, Image আর Container কি একই জিনিস?"</p>
        </div>

        <div className="dialog-box bothu">
          <span className="dialog-name">বঠু:</span>
          <p>"না ভাই! Image হলো blueprint বা recipe, আর Container হলো সেই recipe থেকে বানানো dish! একটা Image থেকে অনেক Container বানাতে পারবে।"</p>
        </div>

        <div className="concept-box">
          <h3>🍕 সহজ উদাহরণ</h3>
          <ul>
            <li><strong>Image:</strong> পিৎজার recipe 📜</li>
            <li><strong>Container:</strong> আসল পিৎজা 🍕</li>
            <li>একই recipe থেকে ১০০টা পিৎজা বানাতে পারো!</li>
          </ul>
        </div>

        <h2>📝 Dockerfile কী?</h2>
        <p>
          Dockerfile হলো একটা text file যেখানে step by step লেখা থাকে কিভাবে তোমার Image তৈরি হবে।
        </p>

        <div className="code-box">
          <pre>{`# Base image
FROM node:18-alpine

# Working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy source code
COPY . .

# Expose port
EXPOSE 3000

# Start command
CMD ["npm", "start"]`}</pre>
        </div>

        <h2>🏗️ Image Build করো</h2>

        <div className="dialog-box bothu">
          <span className="dialog-name">বঠু:</span>
          <p>"Dockerfile লেখা হলে, এবার build করো:"</p>
        </div>

        <div className="code-box">
          <code>docker build -t my-app:v1 .</code>
        </div>

        <ul>
          <li><code>-t my-app:v1</code> - Image এর নাম এবং tag</li>
          <li><code>.</code> - Current directory তে Dockerfile আছে</li>
        </ul>

        <div className="dialog-box motu">
          <span className="dialog-name">মোটু:</span>
          <p>"ইয়েস! এখন আমার অ্যাপ Docker এ চলবে! 🎉"</p>
        </div>

        <p className="highlight-text">
          পরের পর্বে শিখবো কিভাবে Container চালাতে হয় এবং ports, volumes নিয়ে কাজ করতে হয়! 🚀
        </p>
      </article>
    </>
  )
}

function RedisIntroPage() {
  return (
    <>
      <h1 className="page-title">⚡ Redis পরিচিতি</h1>
      
      <article className="blog-content">
        <p className="intro-text">
          মোটু এখন Docker শিখে ফেলেছে। কিন্তু তার অ্যাপ এখনও স্লো! 
          বঠু ভাই বললো - "Redis শেখ, সব সমস্যার সমাধান!"
        </p>

        <div className="dialog-box motu">
          <span className="dialog-name">মোটু:</span>
          <p>"বঠু ভাই, আমার API এত স্লো কেন? Database থেকে data আনতেই ২ সেকেন্ড লাগে!"</p>
        </div>

        <div className="dialog-box bothu">
          <span className="dialog-name">বঠু:</span>
          <p>"তুই কি বারবার same data database থেকে fetch করছিস? 🤦"</p>
        </div>

        <div className="dialog-box motu">
          <span className="dialog-name">মোটু:</span>
          <p>"হ্যাঁ... আর কিভাবে করব?"</p>
        </div>

        <div className="dialog-box bothu">
          <span className="dialog-name">বঠু:</span>
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

function ComingSoonPage() {
  return (
    <>
      <h1 className="page-title">🚧 শীঘ্রই আসছে...</h1>
      
      <article className="blog-content">
        <div className="coming-soon-box">
          <p>এই পেজের কন্টেন্ট এখনও তৈরি হচ্ছে।</p>
          <p>মোটু আর বঠু ভাই মিলে লিখছে! ✍️</p>
        </div>
      </article>
    </>
  )
}
