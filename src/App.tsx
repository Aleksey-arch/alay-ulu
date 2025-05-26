import { Route, Routes } from 'react-router'

import { Layout } from './Pages/Layout/Layout.tsx'
import './App.css'
import SignIn from './Pages/SignIn/SignIn.tsx'
import SignUp from './Pages/SignUp/SignUp.tsx'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path={['/', 'login'].join('')}  element={<SignIn />} />
          <Route path="register" element={<SignUp />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
