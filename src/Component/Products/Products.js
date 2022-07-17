import React from 'react';
import  { useEffect, useState } from 'react';
import Product from '../Product/Product';
import { Row } from 'react-bootstrap';
import './Products.css'
const Products = () => {
    const [products,setProducts]=useState([]);
    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then(data => setProducts(data));
      
    },[])
    console.log(products)
    return (
        <div>
              <h2 className='text-center'>Top Products</h2>
            <div className='container mx-auto'>
            
            <Row xs={1} md={3} className="gy-4">
                {
                    products.map(products=><Product products={products} ></Product>)
                }
          </Row>
            </div>  
        </div>
    );
};

export default Products;