import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import Home from './Components/Home';
import Header from './Components/Header';
import Footer from './Components/Footer';
import EnglishCourse from './Components/EnglishCourse';
import ProjectCourse from './Components/ProjectCourse';
import ItCareerCourse from './Components/ItCareerCourse';

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/englishCourse' element={<EnglishCourse />} />
          <Route path='/projectCourse' element={<ProjectCourse />} />
          <Route path='/itCareerCourse' element={<ItCareerCourse />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
