import styless from './MainPage.module.scss'
import NavBarLeftMain from '../NavBarLeftMain/NavBarLeftMain.tsx'
import { Outlet } from 'react-router'
// import { MainHome } from '../MainHome/MainHome.tsx'

function MainPage() {
  return (
    <>
      <div className={styless.container}>
        <NavBarLeftMain />
        <main>
          <Outlet />
        </main>
      </div>
    </>
  )
}

export { MainPage }
