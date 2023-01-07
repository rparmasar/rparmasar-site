import Jumbotron from './common/Jumbotron/Jumbotron';
import NavBar from './common/NavBar/NavBar';

import './App.css';
import Footer from './common/Footer/Footer';
import Section from './common/Section/Section';
import SectionImageCard from './common/Section/SectionImage/SectionImage';

function App() {
  return (
    <div className="App">
      <NavBar/>
      {/* <Jumbotron/> */}
      {/* <Footer/> */}
      <Section/>
      {/* <SectionImageCard/> */}
    </div>
  );
}

export default App;
