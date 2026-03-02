import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import bondhutaLogo from '../../assets/logo.svg'
import './Sidebar.css'

interface NavItem {
  id: string
  title: string
  path?: string
  children?: NavItem[]
}

const navItems: NavItem[] = [
  {
    id: 'docker',
    title: 'Docker সিরিজ',
    children: [
      { id: 'docker-intro', title: 'Docker: মোটু টু ভতু', path: '/docker/intro' },
      { id: 'docker-basics', title: 'Docker এর বেসিক্স', path: '/docker/basics' },
      { id: 'docker-images', title: 'Docker Images', path: '/docker/images' },
      { id: 'docker-containers', title: 'Containers চালানো', path: '/docker/containers' },
      { id: 'docker-compose', title: 'Docker Compose', path: '/docker/compose' },
      { id: 'docker-networking', title: 'Docker Networking', path: '/docker/networking' },
      { id: 'docker-volumes', title: 'Volumes ও Data', path: '/docker/volumes' },
    ],
  },
  {
    id: 'redis',
    title: 'Redis সিরিজ',
    children: [
      { id: 'redis-intro', title: 'Redis পরিচিতি', path: '/redis/intro' },
      { id: 'redis-data-types', title: 'Data Types', path: '/redis/data-types' },
      { id: 'redis-commands', title: 'Redis Commands', path: '/redis/commands' },
      { id: 'redis-caching', title: 'Caching with Redis', path: '/redis/caching' },
      { id: 'redis-pubsub', title: 'Pub/Sub', path: '/redis/pubsub' },
      { id: 'redis-persistence', title: 'Persistence', path: '/redis/persistence' },
    ],
  },
  { id: 'vater-alap', title: 'বন্ধুদের ভাটের আলাপ', path: '/vater-alap' },
]

export default function Sidebar() {
  const [expandedItems, setExpandedItems] = useState<string[]>(['docker'])

  const toggleExpand = (id: string) => {
    setExpandedItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    )
  }

  const renderNavItem = (item: NavItem, level = 0) => {
    const hasChildren = item.children && item.children.length > 0
    const isExpanded = expandedItems.includes(item.id)

    return (
      <li key={item.id} className="nav-item">
        {item.path ? (
          <NavLink
            to={item.path}
            className={({ isActive }) => 
              `nav-link ${isActive ? 'active' : ''} ${level > 0 ? 'sub-item' : ''}`
            }
          >
            <span className="nav-title">{item.title}</span>
          </NavLink>
        ) : (
          <button
            className={`nav-link ${level > 0 ? 'sub-item' : ''}`}
            onClick={() => toggleExpand(item.id)}
          >
            <span className="nav-title">{item.title}</span>
            {hasChildren && (
              <span className={`nav-arrow ${isExpanded ? 'expanded' : ''}`}>
                <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor">
                  <path d="M4.5 2L8.5 6L4.5 10" stroke="currentColor" strokeWidth="1.5" fill="none" />
                </svg>
              </span>
            )}
          </button>
        )}
        {hasChildren && isExpanded && (
          <ul className="nav-children">
            {item.children!.map((child) => renderNavItem(child, level + 1))}
          </ul>
        )}
      </li>
    )
  }

  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <img src={bondhutaLogo} alt="Bondhuta Logo" className="sidebar-logo" />
        <h1 className="sidebar-title">বন্ধুতা - Tech Blog</h1>
      </div>
      <nav className="sidebar-nav">
        <ul className="nav-list">
          {navItems.map((item) => renderNavItem(item))}
        </ul>
      </nav>
    </aside>
  )
}
