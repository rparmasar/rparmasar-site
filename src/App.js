import { Route, Routes, useLocation } from 'react-router-dom';

import Jumbotron from './common/Jumbotron/Jumbotron';
import NavBar from './common/NavBar/NavBar';
import Footer from './common/Footer/Footer';

import ProjectListPage from './pages/ProjectList/ProjectListPage';
import AboutMe from './pages/AboutMe/AboutMePage';
import ResumePage from './pages/Resume/ResumePage';

import './App.css';

function App() {
  const show_footer = useLocation().pathname !== '/' ;

  return (
      <>
        <NavBar />
        <Routes>
          <Route path='/' element={<Jumbotron />} />
          <Route path='/projects' element={<ProjectListPage />} />
          <Route path='/about' element={<AboutMe />} />
          <Route path='/resume' element={<ResumePage />} />
        </Routes>
        {show_footer && <Footer />}
      </>
    );
  }
  
  export default App;
  
// <div className="App">
//   <NavBar/>
//   {/* <Jumbotron/> */}
//   <ProjectListPage/>
//   <Footer/>
// </div>