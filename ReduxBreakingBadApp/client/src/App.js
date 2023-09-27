
import './App.css';
import {Routes,Route,Link} from 'react-router-dom'
import Home from './pages/Home';
import Detail from './pages/Detail';
import Quotes from './pages/Quotes';


function App() {
  return (
    <>
      <nav>
        <ul>
          <li><Link to="/">Characters</Link></li>
          <li><Link to="/quotes">Quotes</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path='/' element={<Home/>}></Route> 
        <Route path='/char/:char_id' element={<Detail/>}></Route> 
        <Route path='/quotes' element={<Quotes/>}></Route> 
      </Routes>  
    </>
  );
}


export default App;
