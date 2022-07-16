import React from 'react';
import  { useEffect, useState } from 'react';
import Product from '../Product/Product';
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
            
            <div className='grid lg:grid-cols-3  grid-cols-1 gap-3'>
                {
                    products.map(products=><Product products={products} ></Product>)
                }
            </div>
            </div>  
        </div>
    );
};

export default Products;