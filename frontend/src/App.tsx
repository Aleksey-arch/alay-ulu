import { Navigate, Route, Routes } from 'react-router'
import './App.css'
import SignIn from './Pages/SignIn/SignIn.tsx'
import SignUp from './Pages/SignUp/SignUp.tsx'
import { AuthPage } from './Pages/AuthPage/AuthPage.tsx'
import { MainPage } from './Pages/Main/MainPage/MainPage.tsx'
import { MainHome } from './Pages/Main/MainHome/MainHome.tsx'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<AuthPage />}>
          <Route index element={<Navigate to="sign-in" />} />
          <Route path="sign-in" element={<SignIn />} />
          <Route path="sign-up" element={<SignUp />} />
        </Route>
        <Route path="main-page" element={<MainPage />}>
          <Route path="main-home" element={<MainHome />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
