import React, { useContext, useEffect, useState } from 'react'
import { ApiContext } from '../../Context/ApiContext'
import Spaner from '../spaner/Spaner';




export default function Specificategory() {


  const [categore, setcategore] = useState(null)
  
   const  {GetSpecificCategory} = useContext(ApiContext);
  
  
  async function GetSpecificCategoryInId(){


    
                
       let {data } =  await GetSpecificCategory()
       setcategore(data.data)
    
  }



  useEffect(  ()=>{

    GetSpecificCategoryInId()

  },[]);



  return <>
  {categore ? 


    <div className="container">
<div className="row">
 
  {categore.map( (cat1)=><div className="col-md-2">

  <img className='w-100' src={cat1.image} alt="" />
    <h6>{cat1.name}</h6>
    <h6>{cat1.slug}</h6>
  </div> )}
</div>
    
    </div>
  
  : <Spaner/>}
  


  </>
}
