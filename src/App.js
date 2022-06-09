import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home';
import Header from './Pages/Sheared/Header/Header';
import NotFound from './Pages/Sheared/NotFound/NotFound';

function App() {
  return (
    <div className="App">

      <Header></Header>

      <Routes>

        <Route path='/' element={<Home />}></Route>
        <Route path='/home' element={<Home />}></Route>




        <Route path='*' element={<NotFound />}></Route>

      </Routes>


    </div>
  );
}

export default App;
