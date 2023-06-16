import React from 'react'
import { Link } from 'react-router-dom'
import navbarone from '../../img/navbarlogo.svg'

export default function Navbar({userData}) {

  return <>

    <div className="container-fluid">
      <nav className="navbar navbar-expand-lg bg-body-tertiary bg-danger">
        <div className="container-fluid ">
          <Link className="navbar-brand" to="">
            <img src={navbarone} alt="" />
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
          {userData!==null?
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="cart">Cart</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="product">Products</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="cati">Category</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="brand">Brands</Link>
              </li>
            </ul>
            :null}
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="">
                  <i class="fa-brands fa-instagram"></i>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="">
                  <i class="fa-brands fa-tiktok"></i>
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="">
                  <i class="fa-brands fa-facebook"></i></Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="">
                  <i class="fa-brands fa-twitter"></i>
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="">
                  <i class="fa-brands fa-github"></i>
                </Link>
              </li>
            {userData===null?     <>
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="Register">
              Register
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="Login">
              Login
            </Link>
          </li>
          </>: <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="LogOut">
                  LogOut
                </Link>
              </li>}
           
         
            
        
      
           
            
           
             

             

            </ul>
          </div>
        </div>
      </nav>
    </div>




  </>
}
