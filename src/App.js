import './App.css';
import { About, AnimatedArrow, Home, Navbar, Skills, Qualification, Portfolio, Testimonial, Services, Contacts, Footer } from './components/index';
import 'primeicons/primeicons.css';
import "primereact/resources/primereact.min.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import { useEffect, useState } from 'react';
import { debounce } from 'lodash';

function App() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = debounce(() => {
    setScrollPosition(window.scrollY);
  }, 10); 

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <>
      <div className="gradient__bg app" >
        {/* <AnimatedArrow /> */}

        <Navbar />
        <Home />
      </div>
      <About from={{ opacity: 0, transform: 'translateX(-100%)' }} to={{ opacity: 1, transform: 'translateX(0%)' }}/>
      <Skills  from={{ opacity: 0, transform: 'translateX(-100%)' }} to={{ opacity: 1, transform: 'translateX(0%)' }} />
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
