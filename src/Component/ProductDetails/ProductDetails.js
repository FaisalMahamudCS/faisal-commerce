
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
        <div className='container mx-auto w-4/5'>
            <div class="row">
            <div className="col-lg-6 col-12  d-flex align-items-center flex-column" >
            <figure><img className='detail ' src={image} alt="Movie"/></figure>
            </div>
            <div  className="col-lg-6 col-12" >
              <div class="card-body">
              <h3 class="card-title">{title}</h3>
              <h5 class="card-title"> {category}</h5>

    <p>{description}</p>
    <p className='text-bold'>Price:{price}$</p>
    <button className='btn btn-dark px-5'> Buy</button>
  </div>
</div>
</div>   
</div>
</div> 
        </div>
    );
};

export default ProductDetails;