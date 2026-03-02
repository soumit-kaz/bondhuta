export default function DockerImages() {
  return (
    <>
      <h1 className="page-title">📦 Docker Images</h1>
      
      <article className="blog-content">
        <p className="intro-text">
          মোটু এখন Docker চালাতে পারে। কিন্তু hello-world দিয়ে তো আর কাজ হবে না! 
          এবার ভতু আপু শেখাবে কিভাবে নিজের অ্যাপের জন্য Docker Image বানাতে হয়।
        </p>

        <h2>🤔 Image আর Container এর পার্থক্য কী?</h2>

        <div className="dialog-box motu">
          <span className="dialog-name">মোটু:</span>
          <p>"ভতু আপু, Image আর Container কি একই জিনিস?"</p>
        </div>

        <div className="dialog-box votu">
          <span className="dialog-name">ভতু:</span>
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

        <div className="dialog-box votu">
          <span className="dialog-name">ভতু:</span>
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
