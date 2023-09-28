import './App.css';
import {BrowserRouter as Router , Routes , Route } from 'react-router-dom' ;
import Home  from './components/home';
import About from './components/About';
import Bookingpage from './components/Bookingpage';


function App() {
  return (
    
       <Router>
          <Routes>
            <Route path= "/" element={<Home/>} />
            <Route path= "/About" element={<About/>} />
            <Route path= "/bookingpage" element ={<Bookingpage/>}/>
          </Routes>
       </Router>
      
  );
}

export default App;
