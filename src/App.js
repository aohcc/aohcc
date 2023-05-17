import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar'
import About from './components/about'
import Therapist from './components/therapists'

function App() {
  return (
    <div className="App">
      <Navbar />
      <About />
      <div className="d-flex justify-content-center mb-5" id="therapists">
        <Therapist />
      </div>
    </div>
  );
}

export default App;
