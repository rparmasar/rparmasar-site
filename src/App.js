import Jumbotron from './common/Jumbotron/Jumbotron';
import NavBar from './common/NavBar/NavBar';

import './App.css';
import Footer from './common/Footer/Footer';
import Section from './common/Section/Section';
import ProjectListPage from './pages/ProjectList/ProjectListPage';

function App() {
  return (
    <div className="App">
      <NavBar/>
      {/* <Jumbotron/> */}
      <ProjectListPage/>
      <Footer/>
    </div>
  );
}

export default App;
