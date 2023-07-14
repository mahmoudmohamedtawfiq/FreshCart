import React from 'react'

export default function Footer() {


  return <> 
    <footer className='overflow-hidden '>
      <div className="container-fluid bg-dark mt-5 text-white fooooter ">
        <div className="row    border-botton py-3">
          <div className="col-md-12 p-2 ">
            <h2 className='opacity-75'>Get the Fresh Cart app </h2>
            <h6 className='opacity-75'>We will send a link open it on you phone to dowlnload the app </h6>
            <div className="row py-3">
              <div className="col-md-9">
                <input placeholder='Email' type="email " className='form-control py-1' />

              </div>
              <div className="col-md-3">

                <button style={{ background: "var(--main-color)" }} className='btn  text-white'> Share App Link</button>
              </div>
            </div>

            <div className="row border-bottom">
              <div className="col-md-6  py-2">
              <div className='d-flex  align-items-center '>
              <h4 className='opacity-75'>payment Pratners</h4>
              <a target="_blank" href="https://www.amazon.com">
                    <img style={{ width: "100px" }} className='' src={require('../../img/امازون مصر.png')} alt="" />

                  </a>
                  <a target="_blank" href="https://www.americanexpress.com/">
                    <img style={{ width: "80px" }} className='' src={require('../../img/American-Express-Logo-PNG-Image.png')} alt="" />
                  </a>
                  <a target="_blank" href="https://www.paypal.com/eg/home">
                    <img style={{ width: "80px" }} className='' src={require('../../img/paypal_PNG9.png')} alt="" />
                  </a>
              </div>
                <div>
               
                </div>
              </div>
              <div className="col-md-6 d-flex align-items-center ">
                <h6 className='me-4 opacity-75'> Cet Delivries  With FreshCart</h6>
                <div>
                </div>
                <div>
                  <a className='me-3' target="_blank" href="https://play.google.com/store/apps">
                    <img style={{ width: "150px" }} className='' src={require('../../img/Google_Play_Store_badge_FR.svg.png')} alt="" />
                  </a>
                </div>
                <div>
                  <a target="_blank" href="https://www.apple.com/eg-ar/app-store">
                    <img style={{ width: "150px" }} className='' src={require('../../img/logo-app-store.png')} alt="" />
                  </a>
                </div>
              </div>
            </div>

<div className="row opacity-75">
<div className="col-md-12 text-center align-items-center  pt-4">
  <span >By : mahmoud tawfiq ❤😊</span >
</div>
</div>


          </div>
        </div>
      </div>

    </footer>


  </>


}
