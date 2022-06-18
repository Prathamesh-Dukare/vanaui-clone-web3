import './App.css';
import BuiltWith from './components/header/BuiltWith';
import MainIntro from './components/header/MainIntro';
import Nav from './components/header/Nav';
import MainInfo from './components/main/MainInfo';
import Timeline from './components/main/Timeline';
import CareerCard from './components/main/CareerCard';
import MainFooter from './components/footer/MainFooter';

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

      <main className=''>
        <MainInfo/>
        {/* <Timeline/> */}
        <CareerCard/>
        
      </main>

      <footer className='mb-36'>
        <MainFooter/>
      </footer>
    </div>
  );
}

export default App;
