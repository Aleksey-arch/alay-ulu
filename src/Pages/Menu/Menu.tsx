import styless from './Menu.module.scss'
import { Link } from 'react-router'

function Menu() {
  return (
    <div className={styless.container}>
      <form>
        <div>
          <label className={styless.label} htmlFor="login">
            Логин:
          </label>
          <input
            className={styless.input}
            type="text"
            name="login"
            id="login"
            placeholder="Login"
          />
        </div>
        <div>
          <label className={styless.label} htmlFor="password">
            Пароль:
          </label>
          <input
            className={styless.input}
            type="text"
            name="password"
            id="password"
            placeholder="Password"
          />
        </div>

        <button className={styless.btn} type="submit">
          Войти
        </button>
      </form>
      <div className={styless.toRegister}>Нет профиля?
        <Link to="/register">Регистрация</Link>
      </div>
    </div>
  )
}

export default Menu
