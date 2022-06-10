import { Route, Routes } from 'react-router-dom';
import './App.css';
import ContactMe from './Pages/Home/ContactMe/ContactMe';
import Home from './Pages/Home/Home';
import Myself from './Pages/Home/Myself/Myself';
import Projects from './Pages/Home/Projects/Projects';
import Footer from './Pages/Sheared/Footer/Footer';
import Header from './Pages/Sheared/Header/Header';
import NotFound from './Pages/Sheared/NotFound/NotFound';


function App() {
  return (
    <div className="App">

      <Header></Header>

      <Routes>

        <Route path='/' element={<Home />}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/about' element={<Myself />}></Route>
        <Route path='/projects' element={<Projects />}></Route>
        <Route path='/contact' element={<ContactMe />}></Route>




        <Route path='*' element={<NotFound />}></Route>

      </Routes>

      <Footer></Footer>

    </div>
  );
}

export default App;
