import './App.css';
import Header from "./pages/Header/Header";
import About from "./pages/about/About";
import AboutMe from "./pages/AboutMe/AboutMe";
import Skill from './pages/Skill/Skill/Skill';
import SwiperSlides from "./pages/swipers/SwiperSlides";
import Contacts from "./pages/contacts/Contacts";
import Footer from "./pages/footer/Footer";
import SkillIcon from "./pages/SkillIcon/SkillIcon";
import Service from './pages/service/Service';

function App() {
  return (
    <div className="App">
      <Header/>
      <About/>
      <AboutMe/>
      <Service />
      <SkillIcon/>
      <Skill></Skill>
      <SwiperSlides/>
      <Contacts/>
      <Footer/>
    </div>
  );
}

export default App;
