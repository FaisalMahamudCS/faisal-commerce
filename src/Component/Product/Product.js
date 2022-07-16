import React from 'react';
import { useNavigate } from 'react-router-dom';
const Product = ({products}) => {

   const {category,description,id,image,price,rating,title}=products;

    const navigate=useNavigate();
    const   productdetails=(id)=>{
    navigate(`/ProductDetails/${id}`)
    
    } 
    return (
        <div class="card w-96 bg-base-100 shadow-xl">
        <figure><img src={image} alt="Shoes" /></figure>
        <div class="card-body">
          <h2 class="card-title">{title}</h2>
          <p>Description: {description}</p>
        
      
          <p>Price:{price}$</p>
      
          <div class="card-actions justify-center">
            <button class="btn btn-primary" onClick={()=>productdetails(id)}>Buy Now</button>
          </div>
        </div>
      </div> 
    );
};

export default Product;