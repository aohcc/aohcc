import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar'
import About from './components/about'
import Therapist from './components/therapists'
import Faq from './components/faq'
import Contact from './components/contact'
import Footer from './components/footer'

function App() {
  return (
    <div className="App">
      <Navbar />
      <About />
      <Therapist />
      <Faq />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
