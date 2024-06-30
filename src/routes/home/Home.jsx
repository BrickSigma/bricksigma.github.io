import './Home.css';
import Header from '../Header';
import Title from './Title';
import About from './About';
import Projects from './Projects';

const Home = () => {
  return (
    <div id="app" className="App">
      <Header />
      <Title />
      <About />
      <Projects />
    </div>
  );
}

export default Home;