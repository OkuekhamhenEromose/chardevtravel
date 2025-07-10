import Header from './components/Header';
import Hero from './components/Hero';
import  About  from './components/About';
import TopDestinations from './components/TopDestination';
import Activities from './components/Activities';
import Services from './components/Services';
import News from './components/News';
import TrustedCompanies from './components/TrustedCompanies';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="overflow-x-hidden">
      <Header />
      <Hero />
      <About />
      <TopDestinations />
      <Activities />
      <Services />
      <News />
      <TrustedCompanies />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;