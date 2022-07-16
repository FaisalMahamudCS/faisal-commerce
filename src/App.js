import logo from './logo.svg';
import './App.css';
import { Route, Router, Routes } from 'react-router-dom';
import Header from './Component/Header/Header';
import Home from './Component/Home/Home';
function App() {
  return (
    <div className="App">
     <Header>
     </Header>
     <Routes>
     <Route path='/' element={<Home></Home>}></Route>
     </Routes>
    </div>
  );
}

export default App;
