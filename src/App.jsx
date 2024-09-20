
import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Navigation from './Navigation.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import Portfolio from './pages/Portfolio.jsx'
import Resume from './pages/Resume.jsx'
import { Route, Routes }  from 'react-router-dom'


function App() {
  return (
    <>
     <Header/>
     <Navigation/>
      <div className = "container">
     <Routes>
        <Route path = "/" element = {<About/>}/>
        <Route path = "/portfolio" element = {<Portfolio/>}/>
        <Route path = "/contact" element = {<Contact/>}/>
        <Route path = "/resume" element = {<Resume/>}/>
     </Routes>
     </div>
     <Footer/>
     </>

  )
  }

export default App
