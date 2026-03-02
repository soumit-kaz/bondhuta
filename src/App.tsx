import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import BlogLayout from './layouts/BlogLayout'
import { DockerIntro, DockerBasics, DockerImages, RedisIntro, ComingSoon } from './pages'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BlogLayout />}>
          <Route index element={<Navigate to="/docker/intro" replace />} />
          
          {/* Docker Series */}
          <Route path="docker/intro" element={<DockerIntro />} />
          <Route path="docker/basics" element={<DockerBasics />} />
          <Route path="docker/images" element={<DockerImages />} />
          <Route path="docker/containers" element={<ComingSoon />} />
          <Route path="docker/compose" element={<ComingSoon />} />
          <Route path="docker/networking" element={<ComingSoon />} />
          <Route path="docker/volumes" element={<ComingSoon />} />
          
          {/* Redis Series */}
          <Route path="redis/intro" element={<RedisIntro />} />
          <Route path="redis/data-types" element={<ComingSoon />} />
          <Route path="redis/commands" element={<ComingSoon />} />
          <Route path="redis/caching" element={<ComingSoon />} />
          <Route path="redis/pubsub" element={<ComingSoon />} />
          <Route path="redis/persistence" element={<ComingSoon />} />
          
          {/* Other */}
          <Route path="vater-alap" element={<ComingSoon />} />
          <Route path="*" element={<ComingSoon />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
