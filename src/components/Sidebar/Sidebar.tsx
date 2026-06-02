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
    id: 'neural-network',
    title: 'Neural Network সিরিজ',
    children: [
      { id: 'nn-intro', title: 'একটা Neuron-এর গল্প', path: '/neural-network/intro' },
    ],
  },
]

export default function Sidebar() {
  const [expandedItems, setExpandedItems] = useState<string[]>(['neural-network'])
  const [isMobileOpen, setIsMobileOpen] = useState(false)

  const toggleExpand = (id: string) => {
    setExpandedItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    )
  }

  const closeMobileNav = () => setIsMobileOpen(false)

  const renderNavItem = (item: NavItem, level = 0) => {
    const hasChildren = item.children && item.children.length > 0
    const isExpanded = expandedItems.includes(item.id)

    return (
      <li key={item.id} className="nav-item">
        {item.path ? (
          <NavLink
            to={item.path}
            onClick={closeMobileNav}
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
    <>
      {/* Mobile top bar with hamburger toggle */}
      <header className="mobile-topbar">
        <button
          className="mobile-menu-toggle"
          aria-label="Toggle navigation menu"
          aria-expanded={isMobileOpen}
          onClick={() => setIsMobileOpen((prev) => !prev)}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </button>
        <img src={bondhutaLogo} alt="Bondhuta Logo" className="mobile-topbar-logo" />
        <span className="mobile-topbar-title">বন্ধুতা - Tech Blog</span>
      </header>

      {/* Backdrop shown when the mobile nav is open */}
      {isMobileOpen && <div className="sidebar-overlay" onClick={closeMobileNav} />}

      <aside className={`sidebar ${isMobileOpen ? 'open' : ''}`}>
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
    </>
  )
}
