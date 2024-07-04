import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import Home from './Components/Home';
import Header from './Components/Header';
import Footer from './Components/Footer';
import EnglishCourse from './Components/EnglishCourse';
import Project from './Components/Project';

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/english' element={<EnglishCourse />} />
          <Route path='/project' element={<Project />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
