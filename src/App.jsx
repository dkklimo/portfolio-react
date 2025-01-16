import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-100 to-gray-200">
      <Navbar />
      <div className="container mx-auto px-4">
        <Hero />
        <Skills />
        <Portfolio />
        <Contact />
      </div>
    </div>
  );
}

export default App; 