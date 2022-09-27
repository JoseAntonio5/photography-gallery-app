
import Gallery from './Components/Gallery';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Header from './Components/Header';
import './App.css';

function App() {
  return(
    <div className='App'>
      <Navbar />
      <div className='App-container'>
        <Header />
        <Gallery />
      </div>
      <Footer />
    </div>
  );
}

export default App;