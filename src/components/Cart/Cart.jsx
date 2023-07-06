import React, { useContext, useEffect, useState } from 'react'
import { ApiContext } from '../../Context/ApiContext'
import Spaner from './../spaner/Spaner';
import { toast } from 'react-hot-toast';
export default function Cart() {

  
  let {addProduct ,deleteProduct ,upDateProduct,removeProduct} = useContext( ApiContext )
  const [productData, setproductData] = useState(null);
async function  addProductForCart(){

let  {data} = await addProduct()

setproductData(data)
 
if(productData){

    // console.log(productData);
    
  };

    }
    useEffect( ()=>{

      addProductForCart()

    },[])
async  function deleteProductForCart(prodId){

  let {data}  = await deleteProduct(prodId) ;

  setproductData(data);
  toast('DeleteProductForCart')
};


 async   function upDateProductForCart( id ,count){

let  {data} = await upDateProduct(id ,count)

setproductData(data);
toast('upDateProductForCart');
  
}

async  function removeProductForCart(){

  let {data} = await removeProduct()
 }


return<>
  {productData?<div className="container">
    <div>
    <h4>shop Cart :</h4>
     <h6 className='text-main'>total Cart Price : {productData.data.totalCartPrice} Egy</h6>
   {productData.data.products.map( (ahmed)=>{
return<>
<div className="row bg-main-light border-bottom " >
  <div className="col-md-2 m-2 ">
    <img src={ahmed.product.imageCover} className='w-75' alt="" />
  </div>
  <div className="col-md-9 pt-5">

 <div className='d-flex  justify-content-between'>
 <div className='align-items-center'>
    <h6 className=''> price :{ahmed.price}</h6>

   <h6> title :{ahmed.product.title}</h6>
     <h6> count :{ahmed.count}</h6>
   <button onClick={()=>deleteProductForCart(ahmed.product._id)} className='btn  m-0 p-0 text-main'> <i class="fa-solid fa-trash-can"></i> Remove</button>
   </div>
   <div>
    <button className='btn bg-main text-white m-2'  onClick={()=>upDateProductForCart(ahmed.product._id,ahmed.count+1)} >+</button>
  
    <button className='btn bg-main text-white m-2' onClick={()=>upDateProductForCart(ahmed.product._id,ahmed.count-1)}>-</button>
   </div>
 </div>
  </div>
</div>
</> 
  })}
    
  </div>
 </div>
  :<Spaner/>}


</>
  


  
  
  
 
}
