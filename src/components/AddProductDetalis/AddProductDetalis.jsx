import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import Spaner from './../spaner/Spaner';
import { useParams } from 'react-router-dom';
import Slider from 'react-slick';
import { ApiContext } from '../../Context/ApiContext';
import { toast } from 'react-hot-toast';




export default function AddProductDetalis() {
    const {addProductTocart} = useContext(ApiContext);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1

    };

    const { id } = useParams()
    const [addproduct, setaddproduct] = useState([]);

    async function productDetulse() {



        let { data } = await axios.get(`https://route-ecommerce.onrender.com/api/v1/products/${id}`)
        setaddproduct(data.data);




    };

    async function handleBtnToCart(id){

        const {response} = await addProductTocart(id);
    
        if (response?.data?.status === 'success') {
    
          toast.success(response.data.message);
          
        }
      }

    useEffect(() => {

        productDetulse()

    }, []);




    return <div className="container">
         <div className="row mt-5">
            <div className="col-md-3">
                <Slider {...settings}>
                
                   {addproduct.images?addproduct.images.map((img)=> <img className='w-100' src={img}/>): ""}
                </Slider>
            </div>
            <div className="col-md-9 mt-5 ">
                <div className="row">
                    <div className="col-md-12 mt-5">
                        <span>{addproduct.description}</span>
                        <h5>{addproduct.quantity}</h5>
                        <div>
                            <h5>{addproduct.slug}</h5>
                        </div>
                        <div className='d-flex justify-content-between mt-5'>
                            <p> <span>{addproduct.price} Egypt</span></p>
                            <p><span><i className='fas fa-star rating-color font-sm '>{addproduct.ratingsQuantity}</i> Egy</span></p>
                        </div>
                        <button onClick={() => (handleBtnToCart(addproduct._id))} className='btn bg-main text-white w-100'>+ Add </button>                    </div>
                </div>
            </div>
        </div>
    </div>

}

