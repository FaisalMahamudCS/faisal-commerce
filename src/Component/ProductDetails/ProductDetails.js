
import React ,{useEffect,useState} from 'react';
import {useParams} from 'react-router-dom';
const ProductDetails = () => {
    const { id } = useParams();
const [productDetails,setProductDetails]=useState([]);
    useEffect(()=>{
        fetch(`https://fakestoreapi.com/products/${id}`)
        .then(res=>res.json())
        .then(
            data=>{setProductDetails(data)
         
           })
      
       },[id]) 
       const {category,description,image,price,rating,title}=productDetails;

    return (
        <div>
            <div className=''>
        <div className='container mx-auto'>
            <div class="card lg:card-side bg-base-100 shadow-xl">
            <figure><img className='object-cover h-48 w-96' src={image} alt="Movie"/></figure>
              <div class="card-body">
              <h2 class="card-title">{title}</h2>
    <p>{description}</p>
    <p>Price:{price}$</p>
    
  </div>
</div>
         
</div>
</div> 
        </div>
    );
};

export default ProductDetails;