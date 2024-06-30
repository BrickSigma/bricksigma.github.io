import './App.css';
import Header from './components/Header';
import Title from './components/Title';
import About from './components/About';
import Projects from './components/Projects';

const App = () => {
  return (
    <div id="app" className="App">
      <Header />
      <Title />
      <About />
      <Projects />
    </div>
  );
}

export default App;