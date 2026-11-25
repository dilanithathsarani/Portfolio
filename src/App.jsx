import './App.css'
import Navbar from './component/nav'
import ScrollProgressBar from './component/ScrollProgressBar'
import Home from './component/home'
import About from './component/about'
import Services from './component/Services'
import Certificates from './component/certificates'
import Footer from './component/footer'
import Skills from './component/skills'
import Projects from './component/projects'
import Contact from './component/contact'

function App() {

  return (
    <>
    <ScrollProgressBar />
    <Navbar />
    <Home />
    <About />
    <Services />
    <Certificates />
    <Skills />
    <Projects />
    <Contact />
    <Footer />
    </>
  )
}

export default App
