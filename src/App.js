import './App.css';
import Header from "./pages/Header/Header";
import About from "./pages/about/About";
import AboutMe from "./pages/AboutMe/AboutMe";
import Skill from './pages/Skill/Skill/Skill';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <About></About>
      <AboutMe></AboutMe>
      <Skill></Skill>
    </div>
  );
}

export default App;
