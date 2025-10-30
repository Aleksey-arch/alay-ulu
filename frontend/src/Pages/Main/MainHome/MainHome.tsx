import styless from './MainHome.module.scss'
// import { Outlet } from 'react-router'

function MainHome() {
  return (
    <>
      <div className={styless.container}>
        <h1>Добро пожаловать!</h1>
      </div>
    </>
  )
}

export { MainHome }
