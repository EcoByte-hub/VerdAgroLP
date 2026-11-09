import { useEffect, useState } from 'react';
import ClickSpark from './components/reactbits/ClickSpark/ClickSpark';
import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import CarbonCredit from './components/sections/CarbonCredit';
import Problem from './components/sections/Problem';
import Solution from './components/sections/Solution';
import Diagnostico from './components/sections/Diagnostico';
import Traceability from './components/sections/Traceability';
import Business from './components/sections/Business';
import CTA from './components/sections/CTA';
import Footer from './components/layout/Footer';
import Styleguide from './pages/Styleguide';

const isStyleguide = () => window.location.hash === '#styleguide';

export default function App() {
  const [styleguide, setStyleguide] = useState(isStyleguide);

  useEffect(() => {
    const onHash = () => {
      const next = isStyleguide();
      setStyleguide(next);
      // troca de "página": começa do topo
      if (next || window.location.hash === '#topo') {
        requestAnimationFrame(() => window.scrollTo({ top: 0, behavior: 'instant' }));
      }
    };
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);

  return (
    <ClickSpark sparkColor={['#c5f25c', '#4f8a5b', '#e39a75']} sparkSize={9} sparkRadius={22} sparkCount={9} duration={500}>
      {styleguide ? <Styleguide /> : <Landing />}
    </ClickSpark>
  );
}

function Landing() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <CarbonCredit />
        <Problem />
        <Solution />
        <Diagnostico />
        <Traceability />
        <Business />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
