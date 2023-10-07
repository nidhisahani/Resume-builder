import './App.css';
import { BrowserRouter as Routers, Route,Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Templates from './Pages/Home/Templates';
import About from './Pages/About/About';
import DetailFillingPage from './Pages/DetailFillingPage';
import Resume1 from './ResumeTemplates/Resume1';

function App() {
  return (
    <Routers>
      <Navbar />
      <Routes>
        <Route path='/' element={<Resume1 />} />
        {/* <Route path='/' element={<Templates />} />
        <Route path='/about' element={<About />} />
        <Route path='/DetailFillingPage' element={<DetailFillingPage/>} /> */}
      </Routes>
    </Routers>
  );
}

export default App;
