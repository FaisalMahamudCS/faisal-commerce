import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Rating } from 'react-simple-star-rating'
import ReactStars from 'react-stars'
import { Card, Col, Row } from 'react-bootstrap';
import '../Products/Products.css'
const Product = ({products}) => {

   const {category,description,id,image,price,rating,title}=products;

    const navigate=useNavigate();
    const   productdetails=(id)=>{
    navigate(`/ProductDetails/${id}`)
    
    } 
    return (
      <Col>
        <div class=" h-100 product text-center shadow-xl">
        <div className='thumbnail'>
        <img src={image} className='thumbnail' alt="Shoes" />
        </div>
        <div class="card-body  d-flex justify-content-between  flex-column">
          <h5 class="card-title">{title}</h5>
       <div className=''>
       <p className=''>Price:{price}$</p>
       </div>
      <div class=" mt-auto">
       
            <button class="btn btn-dark  " onClick={()=>productdetails(id)}>Buy Now</button>
            
          </div>
        </div>
      </div> 
      </Col>
    );
};

export default Product;