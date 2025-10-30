import styless from './AuthPage.module.scss'
import { Outlet } from 'react-router'

function AuthPage() {
  return (
    <>
      <div className={styless.container}>
        <Outlet />
      </div>
    </>
  )
}

export { AuthPage }
