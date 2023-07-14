import React, { useContext, useEffect, useState } from 'react'
import { ApiContext } from '../../Context/ApiContext'
import { toast } from 'react-hot-toast';
import Spaner from './../spaner/Spaner';
export default function Cart() {

  let { addProduct, deleteProduct, upDateProduct, deleteToCart } = useContext(ApiContext);
  const [productData, setproductData] = useState(null);

  async function addProductForCart() {

    let { data } = await addProduct()
    setproductData(data);
    console.log(data.status);
    if (data.status === "success") {
      setproductData(data);
    };


  };

  useEffect(() => {

   
      addProductForCart()

  }, []);


  async function deleteProductForCart(prodId) {

    let { data } = await deleteProduct(prodId);

    setproductData(data);
    toast('DeleteProductForCart')
  };


  async function upDateProductForCart(id, count) {

    let { data } = await upDateProduct(id, count)

    setproductData(data);
    toast('upDateProductForCart');

  };


  async function deleteToCartOne() {

    let { data } = await deleteToCart()
    // console.log(data);
    setproductData(null)
toast.success( 'remove All Cart ')

  }


  if (productData === null) {

    toast.success( 'this page is for adding productrs to it')











  }



  return <>


    {productData ? <div className="container">
      <div>

        <h4>shop Cart :</h4>

        {productData.numOfCartItems > 0 ? <h6 className='text-main'>total Cart Price : <span className='fw-bold'>{productData.data.totalCartPrice} Egy</span></h6> : <h6 className='text-center text-danger fw-bold'>No Product to show</h6>}
        <button onClick={() => deleteToCartOne()} className='btn btn-danger my-2'>   Clear All cart</button>

        {productData.data.products.map((ahmed) => {

          return <>

            <div className="row bg-main-light border-bottom mb-3 rounded-4 " >

              <div className="col-md-2 m-2 ">
                <img src={ahmed.product.imageCover} className='w-75' alt="" />
              </div>
              <div className="col-md-9 pt-5">

                <div className='d-flex  justify-content-between'>

                  <div className='align-items-center'>
                    <h6 className=''> price :{ahmed.price}</h6>
                    <h6> title :{ahmed.product.title}</h6>
                    <h6> count :{ahmed.count}</h6>
                    <button onClick={() => deleteProductForCart(ahmed.product._id)} className='btn  m-0 p-0 btn-danger px-3 py-1'> <i class="fa-solid fa-trash-can"></i> Remove</button>
                  </div>

                  <div>

                    <button className='btn bg-main text-white m-2' onClick={() => upDateProductForCart(ahmed.product._id, ahmed.count + 1)} >+</button>

                    <button className='btn bg-main text-white m-2' onClick={() => upDateProductForCart(ahmed.product._id, ahmed.count - 1)}>-</button>

                  </div>
                </div>
              </div>
            </div>
          </>
        })}

      </div>
    </div>
      : ''}



  </>







}
