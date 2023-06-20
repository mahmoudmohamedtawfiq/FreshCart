import React from 'react'
import { Navigate } from 'react-router-dom'



export default function YesOrNo({userData , children}) {
 



  if(userData){
    return children

  }else {
    return <Navigate to={'login'}/>
}
}