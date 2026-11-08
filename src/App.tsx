import ClickSpark from './components/reactbits/ClickSpark/ClickSpark';
import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';

export default function App() {
  return (
    <ClickSpark sparkColor={['#c5f25c', '#4f8a5b', '#e39a75']} sparkSize={9} sparkRadius={22} sparkCount={9} duration={500}>
      <Navbar />
      <main>
        <Hero />
      </main>
    </ClickSpark>
  );
}
