import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import s from './SideBar.module.css';

const SideBar = (props) => {
  let navItems =
    [
      { link: '/profile', content: 'Профиль' },
      { link: '/dialogs', content: 'Сообщения' },
      { link: '/news', content: 'Новости' },
      { link: '/music', content: 'Музыка' },
      { link: '/settings', content: 'Настройки' },
      { link: '/about', content: 'О программе' },
    ];

  let navElements = navItems.map(item => <NavLink to={item.link} activeClassName={s.active}>{item.content}</NavLink>)
  let friends = props.state.friends.map(friend =><NavLink to='' className={s.friends}><img src={friend.avatar}></img> <p>{friend.name}</p></NavLink>)
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
      <div>
        <div>
          <h3>Друзья</h3>
        </div>
        <div className={s.friend}>
          {friends}
        </div>
      </div>

    </nav>
  )
}
export default SideBar;