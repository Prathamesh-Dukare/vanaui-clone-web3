import './App.css';
import MainIntro from './components/MainIntro';
import Nav from './components/Nav';

function App() {
  return (
    <div className="main-wrapper bg-primary font-sans">
      <header>
        <Nav/>
        <MainIntro/>
        
      </header>

      <main>

      </main>

      <footer>

      </footer>
    </div>
  );
}

export default App;
