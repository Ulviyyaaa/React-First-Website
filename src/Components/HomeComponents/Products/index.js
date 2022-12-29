import React from 'react'
import "./index.scss"
function Production() {
  return (
    <section className='mainProd'>
      <div className='prodSec'>
        <div className='prodTxt'>
          <h2>New products, delivered to you.</h2>
          <p>Sign up for our newsletter for the latest updates.</p>
        </div>
        <div className='input'>
          <div className='inpbtn'>
            <input type={"text"} placeholder="  Email address..." />
            <button>Sign Up</button>
          </div>
          <div className='inpTxt'>
              <p>We care about privacy, and will never share your data.</p>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Production