import logo from './logo.svg';
import Login2 from './Login2';
import Home from './Home';
import Register from './register';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div>

        {/* <Login2/> */}
        {/* <Register/> */}
        <Router>
          <Routes>
          <Route exact path='/' element={<Register/>}></Route>
          <Route exact path='/login' element={<Login2/>}></Route>
          <Route exact path='/home' element={<Home/>}></Route>
        </Routes>
        </Router>
    </div>
  );
}

export default App;
