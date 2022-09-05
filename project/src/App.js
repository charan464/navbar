import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter ,Route,Routes} from 'react-router-dom';
import Home from './Pages/Home';
import Details  from './Pages/Details';
import Letter  from './Pages/Letter';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
      <Navbar/>
      <Routes>
      <Route path='/' exact  element={<Home/>}> </Route>
      <Route path='/details' element={<Details/>}> </Route>
      <Route path='/letter' element={<Letter/>}> </Route>
      </Routes>
      </BrowserRouter>

     
    </div>
  );
}

export default App;
