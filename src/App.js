import { BrowserRouter as Routers, Route,Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Templates from './Pages/Home/Templates';
import About from './Pages/About/About';
import DetailFillingPage from './Pages/DetailFillingPage';
import MyResumes from './Pages/MyResumes';


function App() {
  return (
    <Routers>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Templates />} />
        <Route path='/about' element={<About />} />
        <Route path='/DetailFillingPage' element={<DetailFillingPage />} />
        <Route path='/MyResumes' element={<MyResumes />}/>
      </Routes>
    </Routers>
  );
}

export default App;
