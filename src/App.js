import './App.css';
import { Home, Navbar, Scroll_nav } from './components/index';
import 'primeicons/primeicons.css';
import "primereact/resources/primereact.min.css";

function App() {
  return (
    <div className="gradient__bg" style={{height:"100vh"}}>
      {/* <Scroll_nav/> */}
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
