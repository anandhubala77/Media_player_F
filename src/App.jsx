
import './index.css'
import '@fortawesome/fontawesome-free/css/all.min.css';
import Home from './pages/Home'
import LandingPage from './pages/LandingPage'
import WatchHistory from './pages/WatchHistory'
import Header from './components/Header'
import Footer from './components/Footer'
import { Route, Routes } from 'react-router-dom';


function App() {


  return (
    <>

      <Header />
      <Routes>

        <Route path='/landingpage' element={<LandingPage />} />
        <Route path='/home' element={<Home />} />
        <Route path='/watch' element={<WatchHistory />} />

      </Routes>
      <Footer />


    </>
  )
}

export default App
