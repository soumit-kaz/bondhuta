export default function DockerBasics() {
  return (
    <>
      <h1 className="page-title">🔧 Docker এর বেসিক্স</h1>
      
      <article className="blog-content">
        <p className="intro-text">
          গত পর্বে মোটু জানলো Docker কী। এবার ভতু আপু তাকে শেখাবে কিভাবে Docker ইন্সটল করতে হয় এবং প্রথম container চালাতে হয়।
        </p>

        <h2>📥 Docker Installation</h2>
        
        <div className="dialog-box motu">
          <span className="dialog-name">মোটু:</span>
          <p>"বঠু ভাই, Docker কিভাবে install করব?"</p>
        </div>

        <div className="dialog-box votu">
          <span className="dialog-name">ভতু:</span>
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

        <div className="dialog-box votu">
          <span className="dialog-name">ভতু:</span>
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
