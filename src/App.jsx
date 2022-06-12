import './App.css';
import BuiltWith from './components/BuiltWith';
import MainIntro from './components/MainIntro';
import Nav from './components/Nav';

function App() {
  return (
    <div className="main-wrapper font-sans">
      <header className='mb-32'>
        <section className="bg-primary">
          <Nav />
          <MainIntro />
        </section>
        <BuiltWith />
      </header>

      <main>

      </main>

      <footer>

      </footer>
    </div>
  );
}

export default App;
