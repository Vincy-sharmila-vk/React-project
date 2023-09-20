import './App.css';
import About from './Components/About';
import Cards from './Components/Cards';
import Detail from './Components/Detail';
import Home from './Components/Home';
import Navbar from './Components/Navbar';


function App() {
  return (
    <div>
      <Home />
      <Navbar />
      <About />
      <Detail />
      <Cards />
    </div>

  );
}

export default App;
