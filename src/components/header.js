import React, { useState } from 'react'
import { Link } from 'gatsby'
import style from './header.module.scss'
import '../styles/hamburger.scss'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className={style.header}>
      <Link to="/">
        <p className={style.logo}>U.</p>
      </Link>
      <div className={style.ham} role="link" onClick={() => setIsOpen(!isOpen)}>
        <div class={isOpen ? 'wrapper-menu open' : 'wrapper-menu'}>
          <div class="line-menu half start"></div>
          <div class="line-menu"></div>
          <div class="line-menu half end"></div>
        </div>
      </div>
      <div className={style.links}>
        <ul className={style.navList}>
          <li className={style.listItem}>
            <Link activeClassName={style.linkActive} to="/">
              Home
            </Link>
          </li>
          <li className={style.listItem}>
            <Link activeClassName={style.linkActive} to="/about">
              About
            </Link>
          </li>
          <li className={style.listItem}>
            <Link activeClassName={style.linkActive} to="/projects">
              Projects
            </Link>
          </li>
          <li className={style.listItem}>
            <Link activeClassName={style.linkActive} to="/contact">
              Contact
            </Link>
          </li>
        </ul>
      </div>
      <div className={[style.offmenu, isOpen && style.open].join(' ')}>
        <aside className={style.aside}>
          <nav>
            <ul className={style.offul}>
              <li>
                <Link activeClassName={style.linkActive} to="/">
                  Home
                </Link>
              </li>
              <li>
                <Link activeClassName={style.linkActive} to="/about">
                  About
                </Link>
              </li>
              <li>
                <Link activeClassName={style.linkActive} to="/projects">
                  Projects
                </Link>
              </li>
              <li>
                <Link activeClassName={style.linkActive} to="/contact">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </aside>
      </div>
    </header>
  )
}
export default Header
