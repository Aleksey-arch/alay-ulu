import styless from './Layout.module.scss'
import { Outlet } from 'react-router'

function Layout() {
  return (
    <>
      <div className={styless.container}>
        <Outlet />
      </div>
    </>
  )
}

export { Layout }
