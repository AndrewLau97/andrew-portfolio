import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Homepage from './pages/Homepage'
import About from './pages/About'
import ProjectPage from './pages/ProjectsPage'
import Contact from './pages/Contact'


function App() {

  return (
    <>
      <Header/>
      <Homepage/>
      <ProjectPage/>
      <About/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App
