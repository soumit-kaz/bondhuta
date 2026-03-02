import { Outlet } from 'react-router-dom'
import Sidebar from '../../components/Sidebar'
import '../../components/MainContent/MainContent.css'
import './BlogLayout.css'

export default function BlogLayout() {
  return (
    <div className="blog-layout">
      <Sidebar />
      <main className="main-content">
        <div className="content-body">
          <Outlet />
        </div>
      </main>
    </div>
  )
}
