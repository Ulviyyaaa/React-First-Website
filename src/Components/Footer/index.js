import React from 'react'
import "./index.scss"
function Footer() {
  return (
    <footer className='footer'>
      <div className='mainFooter'>
        <div className='leftFooter'>
          <p>Copyright © Your Website 2022</p>
        </div>
        <div className='rightFooter'>
        <ul>
          <li>Privacy</li>
          <p>·</p>
          <li >Terms</li>
          <p>·</p>
          <li>Contact</li>
        </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer