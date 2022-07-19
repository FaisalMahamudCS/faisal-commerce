import logo from './logo.svg';
import './App.css';
import { Route, Router, Routes } from 'react-router-dom';
import Header from './Component/Header/Header';
import Home from './Component/Home/Home';
import ProductDetails from './Component/ProductDetails/ProductDetails';
import Product from './Component/Product/Product';
import Products from './Component/Products/Products';
function App() {
  return (
    <div className="App">
     <Header>
     </Header>
     <Routes>
     <Route path='/' element={<Home></Home>}></Route>
<Route path='/product' element={<Products></Products>}></Route>
      <Route path="ProductDetails/:id" element={<ProductDetails></ProductDetails>}></Route> 
     </Routes>
    </div>
  );
}

export default App;
