import { Route, Routes, useLocation } from 'react-router-dom';

import Jumbotron from './common/Jumbotron/Jumbotron';
import NavBar from './common/NavBar/NavBar';
import Footer from './common/Footer/Footer';

import ProjectListPage from './pages/ProjectList/ProjectListPage';
import AboutMePage from './pages/AboutMe/AboutMePage';
import ResumePage from './pages/Resume/ResumePage';

import './App.css';
import SingleProjectPage from './pages/SingleProject/SingleProjectPage';
import NotFoundPage from './pages/NotFound/NotFoundPage';

function App() {
  const show_footer = useLocation().pathname !== '/' ;

  return (
      <>
        <NavBar />
        <Routes>
          <Route path='/' element={<Jumbotron />} />
          
          <Route path='/projects' element={<ProjectListPage />} />
          <Route path='/projects/:name' element={<SingleProjectPage />} />
          
          <Route path='/about' element={<AboutMePage />} />
          <Route path='/resume' element={<ResumePage />} />
          
          <Route path='/test' element={<SingleProjectPage />} />

          <Route path='/*' element={<NotFoundPage />} />
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