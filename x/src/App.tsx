
import { Route, Routes } from '../node_modules/react-router-dom/dist/index'
import './App.css'
import HomePage from './pages/Homepage'
import ProfilePage from './pages/ProfilePage'

function App() {


  return (
    <>
      <Routes>
        <Route path = "/Home" element = {<HomePage/>}></Route>
        <Route path = "/Profil" element = {<ProfilePage/>}></Route>
      </Routes>
    </>
  )
}

export default App
