// import logo from './logo.svg';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './soildetailsproject/Header';
import Login from './soildetailsproject/Login';
// import About from './soildetailsproject/about';


function App() {
  return (
    <div className="App">
      {/* <Router>
      <Routes> */}
        {/* <Route path='/login1' element={<Login/>}></Route> */}
        {/* <Route path='/login1' element={<About/>}></Route> */}
        {/* <Route path='/' element={<Header/>}></Route>
        <Route path='/login1' element={<Login/>}></Route>
      </Routes>
      </Router> */}
      <Header/>
        {/* <Header/>  */}
    </div>
  );
}

export default App;
