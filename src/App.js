import './App.css';
import Header from "./pages/Header/Header";
import About from "./pages/about/About";
import AboutMe from "./pages/AboutMe/AboutMe";
import Skill from './pages/Skill/Skill/Skill';
import SwiperSlides from "./pages/swipers/SwiperSlides";
import Contacts from "./pages/contacts/Contacts";
import Footer from "./pages/footer/Footer";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <About></About>
      <AboutMe></AboutMe>
      <Skill></Skill>
      <SwiperSlides></SwiperSlides>
      <Contacts></Contacts>
      <Footer></Footer>
    </div>
  );
}

export default App;
