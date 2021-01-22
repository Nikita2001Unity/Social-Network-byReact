import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import s from './SideBar.module.css';

const SideBar = () => {
  let navItems =
    [
      { link: '/profile', content: 'Profile' },
      { link: '/dialogs', content: 'Messages' },
      { link: '/news', content: 'News' },
      { link: '/music', content: 'Music' },
      { link: '/settings', content: 'Settings' },
      { link: '/about', content: 'About' },
    ];

  let navElements = navItems.map(item => <NavLink to={item.link} activeClassName={s.active}>{item.content}</NavLink>)
  return (
    <nav className={s.nav}>
      <div className={s.item}>
        {navElements[0]}
      </div>
      <div className={s.item}>
        {navElements[1]}
      </div>
      <div className={s.item}>
        {navElements[2]}
      </div>
      <div className={s.item}>
        {navElements[3]}
      </div>
      <div className={s.item}>
        {navElements[4]}
      </div>
      <div className={s.item}>
        {navElements[5]}
      </div>
      
    </nav>
  )
}
export default SideBar;