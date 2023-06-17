import React from 'react'
import { Navigate } from 'react-router-dom'



export default function YesOrNo(props) {
 



  if(localStorage.getItem('userdata')==null){

    return <Navigate to={'login'}/>
}else {
  return props.children
}
}