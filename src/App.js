import './App.css';
import { About, AnimatedArrow, Home, Navbar, Skills, Qualification, Portfolio, Testimonial, Services, Contacts, Footer } from './components/index';
import 'primeicons/primeicons.css';
import "primereact/resources/primereact.min.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";


function App() {
  return (
    <>
      <div className="gradient__bg app" >
        {/* <AnimatedArrow /> */}

        <Navbar />
        <Home />
      </div>
      <About />
      <Skills />
      <Services />
      <Portfolio />
      <Qualification />
       <Testimonial />
       <Contacts/>
      <Footer/>
    </>
  );
}

export default App;
