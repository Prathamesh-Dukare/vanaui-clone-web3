import './App.css';
import BuiltWith from './components/header/BuiltWith';
import MainIntro from './components/header/MainIntro';
import Nav from './components/header/Nav';
import MainInfo from './components/main/MainInfo';
import Timeline from './components/main/Timeline';
import CareerCard from './components/main/CareerCard';

function App() {
  return (
    <div className="main-wrapper font-sans">
      <header className=''>
        <section className="bg-primary">
          <Nav />
          <MainIntro />
        </section>
        <BuiltWith />
      </header>

      <main className='mb-36'>
        <MainInfo/>
        {/* <Timeline/>
        <CareerCard/> */}
      </main>

      <footer>

      </footer>
    </div>
  );
}

export default App;
