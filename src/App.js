import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import About from './Containers/About';
import AcHub from './Containers/AcHub';
import BlueCard from './Containers/BlueCard';
import Footer from './Containers/Footer';
import Header from './Containers/Header';
import Home from './Containers/Home';
import Logo from './Containers/Logo';
import Pink from './Containers/Pink';
import Switch from './Containers/Switch';
import data from "./dataFooter/dataFooter";

function App() {
  return (
    <div>
      <Header/>
      <Home />
      <About />
      <Switch />
      <Pink />
      <Logo />
      <AcHub />
      <BlueCard />
      <Footer  data={data} colProps="col-6 col-lg-6"/>
    </div>
  );
}

export default App;
