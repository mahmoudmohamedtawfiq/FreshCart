import React, { useContext, useEffect, useState } from 'react'
import { ApiContext } from '../../Context/ApiContext';
import Spaner from './../spaner/Spaner';
import { Link, Outlet } from 'react-router-dom';

import './Categories.module.css'

export default function Categories() {



  
  return <>
  
  
 
  <div className='align-items-center '>

    <div className='d-flex  align-items-start  justify-content-start' >
      <div>
      <ul className='ahmed'>
        <li className='liforcategoies p-2 text-center'>
          <Link to="">AllCategories</Link>
        </li> 
        <li className='liforcategoies p-2 text-center'>
          <Link to="Specificategory/6439d5b90049ad0b52b90048">MenCategory</Link>
        </li> 
        <li className='liforcategoies p-2 text-center'>
          <Link to="SubCategories">SubCategories</Link>
        </li> 
      </ul>
      </div> 
      <Outlet/>
    </div> 

 







 
  </div>

  
  
  
  </>
}
