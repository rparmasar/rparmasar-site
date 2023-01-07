import Jumbotron from './common/Jumbotron/Jumbotron';
import NavBar from './common/NavBar/NavBar';

import './App.css';
import Footer from './common/Footer/Footer';
import Section from './common/Section/Section';

function App() {
  return (
    <div className="App">
      <NavBar/>
      {/* <Jumbotron/> */}
      <Section include_cta_bw/>

      {/* <Footer/> */}
    </div>
  );
}

export default App;
