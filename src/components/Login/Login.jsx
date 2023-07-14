import axios from 'axios'
import { useFormik } from 'formik'
import { useState } from 'react'
import React from 'react'

import { useNavigate } from 'react-router-dom'

export default function Login({saveUserData}) {
let navagito = useNavigate()

const [isloding, setisloding] = useState(false)
const [errorformik, seterrorformik] = useState()

  async function handleLogin(values) {
    setisloding(true)
    let { data } = await axios.post(`https://route-ecommerce.onrender.com/api/v1/auth/signin`, values).catch((e) =>{
      seterrorformik(e.response.data.message) })

      if (data.message==='success'){
        localStorage.setItem('userdata',data.token)
        saveUserData()
        setisloding(false);
        navagito('/');
            
          }
    
  }

  function validate(value) {

    let error = {};

    // validate for email 
    if (!value.email) {
      error.email = 'Required '
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value.email)) {
      error.email = 'Invalid email address'
    }
   
    // valedate for password  
if(!value.password){
  error.password='required'
}else if(!/^[A-Z][a-z 0-9]{5,10}$/i.test(value.password)){
  error.password='password not true'
}
    // valedate  repassword

    return error
  }

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
     

    },
    onSubmit: handleLogin

    ,
    validate
  })
  return <>
    <div className="container">
      <div className="alert alert-dangder">{errorformik}</div>
      <div className="m-aute">
      <div className="alert alert-dangder">{errorformik}</div>
      </div>
      <form onSubmit={formik.handleSubmit} >
    
        <div className="row mt-5">
          
    
          <div className="col-md-6 m-auto" >
          <h3 >Login:</h3>
            <label htmlFor="name">email: </label>
            <input onBlur={formik.handleBlur}value={formik.values.email} onChange={formik.handleChange} className='form-control' type="emil" name="email" id="email" />
            {formik.touched.email && formik.errors.email ? <div className="alert alert-danger">{formik.errors.email}</div> : null}


           
            <label htmlFor="password">password :</label>
            <input onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.password} type='password' className='form-control' id='password' name='password'></input>
            {formik.errors.password && formik.touched.password?<div className="alert alert-danger mt-3">{formik.errors.password}</div>:null}
             
             



{isloding? <button type="button" class="btn btn-success mt-3"><i class="fas fa-spinner fa-spin"></i></button>:<button disabled={!(formik.dirty && formik.isValid)} type="submit" class="btn btn-success mt-3">Login</button>}
          </div>
        </div>  
      </form>
    </div>









  </>
}




