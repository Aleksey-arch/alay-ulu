import styless from './Layout.module.scss'
import { Outlet } from 'react-router'
// import { useEffect } from 'react'

function Layout() {
  // const navigate = useNavigate()
  // useEffect(() => {
  //   navigate('/main-page')
  // })
  return (
    <>
      <div className={styless.container}>
        <Outlet />
      </div>
    </>
  )
}

export { Layout }
