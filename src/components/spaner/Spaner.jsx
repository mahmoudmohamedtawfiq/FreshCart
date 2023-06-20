import React from 'react'


import loding from '../../img/Loading-Icon-by-Kanggraphic-27.jpg'
export default function Spaner() {



  return <>

    <div style={{zIndex:"999999"}} className=' position-fixed start-0 top-0 w-100 bottom-0'>

      <img src={loding} className='w-100 fa-spin' alt="" />


    </div>

  </>


}
