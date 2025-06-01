import styless from './NavBarLeftMain.module.scss'
import { Link, NavLink } from 'react-router-dom'

function NavBarLeftMain() {
  return (
    <div className={styless.container}>
      <ul className={styless.list}>
        <NavLink
          to={'main-home'}
          className={({ isActive }) =>
            isActive ? [styless.listItemActive].join(' ') : styless.listItem
          }
        >
          Home
        </NavLink>
        <a className={styless.listItem}>🔎</a>
        <a className={styless.listItem}>+</a>
        <Link className={styless.listItem} to="/sign-in">
          Вой
        </Link>
        <Link className={styless.listItem} to="/sign-up">
          Рег
        </Link>
        <Link className={[styless.userProfile, styless.listItem].join(' ')} to="">
          P
        </Link>
      </ul>
    </div>
  )
}

export default NavBarLeftMain
