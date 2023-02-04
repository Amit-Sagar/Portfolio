import './App.css';
import Header from "./components/Header/Header"
import Nav from "./components/Nav/Nav"
import About from "./components/About/About"
import Experience from "./components/Experience/Experience"
import Portfolio from "./components/portfolio/Portfolio"
import Testimonial from "./components/testimonials/Testimonial"
import Contact  from "./components/contact/Contact"

function App() {
  return (
    <div>
     <Header/>
     <Nav/>
     <About/>
     <Experience/>
     <Portfolio/>
     <Testimonial/>
     <Contact/>
    </div>
  );
}

export default App;
