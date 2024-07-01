import './Home.css';
import Header from '../Header';
import Title from './Title';
import About from './About';
import Projects from './Projects';
import Footer from '../Footer';

const Home = () => {
  return (
    <div id="app" className="App">
      <Header />
      <Title />
      <About />
      <Projects />
      <Footer />
    </div>
  );
}

export default Home;