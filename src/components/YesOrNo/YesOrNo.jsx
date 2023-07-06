import React from 'react'
import { Navigate } from 'react-router-dom'



export default function YesOrNo({ children}) {
 



  if(localStorage.getItem("userdata")!=null){

    return children;

  }else {
    return <Navigate to={'/login'}/>
}
}