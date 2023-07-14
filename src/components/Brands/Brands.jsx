

import React, { useContext, useEffect, useState } from 'react'
import { ApiContext } from '../../Context/ApiContext'
import Spaner from './../spaner/Spaner';



export default function Brands() {

  const [Product, setProduct] = useState(null)

  const { getProduct } = useContext(ApiContext);

  async function handle() {

    let { data } = await getProduct()

    setProduct(data.data);


  };

  useEffect(() => {

    handle();

  }, [])




  return <>{Product ?

    <div className="container mt-3 ">
      <div className="container">
        <div className="row g-3">
          {Product.data.map((ahmed) => {

            return <>
              <div className="col-md-2  ">
                <div className="imgs p-2 border border-1 rounded-2">

                <img className='w-100 ' src={ahmed.brand.image} alt="" />
                </div>
              </div>
            </>
          })}

        </div>
      </div>

    </div >

    : <Spaner />
  }


  </>
}






