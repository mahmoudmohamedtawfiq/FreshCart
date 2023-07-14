import axios from 'axios'
import { useFormik } from 'formik'
import { useState } from 'react'
import React from 'react'



import { useNavigate } from 'react-router-dom'

export default function Register() {
let navagito = useNavigate()

const [isloding, setisloding] = useState(false)
const [errorformik, seterrorformik] = useState()

  async function handleRegister(values) {
    setisloding(true)
    let { data } = await axios.post(`https://route-ecommerce.onrender.com/api/v1/auth/signup`, values).catch((e) =>{
      seterrorformik(`${e.response.data.errors.param}:${e.response.data.errors.msg}`) })

      if (data.message ==='success'){
        setisloding(false)
          navagito('/Login')
            
          }
    
  }

  function validate(value) {

    let error = {}
// validate for name
    if (!value.name) {
      error.name = 'Required'

    } else if (value.name.length > 2 && value.name.length < 8) {
      error.name = 'minimum length 2 maxmum length 8'
    }
    // validate for email 
    if (!value.email) {
      error.email = 'Required '
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value.email)) {
      error.email = 'Invalid email address'
    }
   
    // validate phone
    if(!value.phone){
      error.phone='Required'
    }else if (!/^[0125][0-9]{10}$/i.test(value.phone)){
      error.phone='phone not right'
    }
    // valedate for password  
if(!value.password){
  error.password='required'
}else if(!/^[A-Z][a-z 0-9]{5,10}$/i.test(value.password)){
  error.password='password not true'
}
    // valedate  repassword
    if(!value.rePassword){
      error.rePassword='required'
    }
    else if(value.password!==value.rePassword){

      error.rePassword='password not true'
    }
    return error
  }

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone: '',
      password: '',
      rePassword: '',

    },
    onSubmit: handleRegister

    ,
    validate
  });
  
  return <>

    <div className="container">
      <div className="alert alert-dangder">{errorformik}</div>
      <form onSubmit={formik.handleSubmit} >
        <div className="row mt-5">


          <div className="col-md-6 m-auto " >
            <h3 className='h1'>Regester Now :</h3>
            <label htmlFor="name">Name: </label>
            <input className='form-control' type="text" onBlur={formik.handleBlur} value={formik.values.name} onChange={formik.handleChange} name="name" id="name" />
            {formik.touched.name && formik.errors.name ? <div className="alert alert-danger">{formik.errors.name}</div> : null}

            <label htmlFor="name">email: </label>
            <input onBlur={formik.handleBlur}value={formik.values.email} onChange={formik.handleChange} className='form-control' type="emil" name="email" id="email" />
            {formik.touched.email && formik.errors.email ? <div className="alert alert-danger">{formik.errors.email}</div> : null}


            <label htmlFor="name">phone: </label>
            <input onBlur={formik.handleBlur} value={formik.values.phone} onChange={formik.handleChange} className='form-control' type="phone" name="phone" id="phone" />
            {formik.touched.phone && formik.errors.phone ? <div className="alert alert-danger">{formik.errors.phone}</div> : null}
            
            <label htmlFor="password">password :</label>
            <input onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.password} type='password' className='form-control' id='password' name='password'></input>
            {formik.touched.password&&formik.errors.password?<div className="alert alert-danger mt-3">{formik.errors.password}</div>:null}
             
              <label htmlFor="rePassword">rePassword :</label>
              <input onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.rePassword} type='password' className='form-control' id='rePassword' name='rePassword'></input>
              {formik.touched.rePassword&&formik.errors.rePassword?<div className="alert alert-danger mt-3">{formik.errors.rePassword}</div>:null}




{isloding? <button type="button" class="btn btn-success mt-3"><i class="fas fa-spinner fa-spin"></i></button>:<button disabled={!(formik.dirty && formik.isValid)} type="submit" class="btn btn-success mt-3">submit</button>}
          </div>
        </div>  
      </form>
    </div>









  </>
}




