import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar'
import About from './components/about'
import Therapist from './components/therapists'
import Faq from './components/faq'

function App() {
  return (
    <div className="App">
      <Navbar />
      <About />
      <Therapist />
      <Faq />
    </div>
  );
}

export default App;
