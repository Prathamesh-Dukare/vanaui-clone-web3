import './App.css';
import BuiltWith from './components/header/BuiltWith';
import MainIntro from './components/header/MainIntro';
import Nav from './components/header/Nav';

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
