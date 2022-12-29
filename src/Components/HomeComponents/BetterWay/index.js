import React from 'react'
import "./index.scss"
function BetterWay() {
  return (
    <section className='mainSec'>
    <div className='insideSec'>
      <div className='better'>
        <h3>A better way to start building.</h3>
      </div>
      <div className='featured'>
        <div className='firstLine'>
          <div className='iconText'>
            <div className='iconİtem'><i class="fa-solid fa-folder-open"></i></div>
            <h4>Featured title</h4>
            <p>Paragraph of text beneath the heading to explain the heading. Here is just a bit more text.</p>
          </div>
          <div className='iconText'>
            <div className='iconİtem'><i class="fa-solid fa-building"></i></div>
            <h4>Featured title</h4>
            <p>Paragraph of text beneath the heading to explain the heading. Here is just a bit more text.</p>
          </div>
        </div>
        <div className='secondLine'>
        <div className='iconText'>
          <div className='iconİtem'><i class="fa-solid fa-sliders"></i></div>
          <h4>Featured title</h4>
          <p>Paragraph of text beneath the heading to explain the heading. Here is just a bit more text.</p>
        </div>
        <div className='iconText'>
          <div className='iconİtem'><i class="fa-solid fa-sliders"></i></div>
          <h4>Featured title</h4>
          <p>Paragraph of text beneath the heading to explain the heading. Here is just a bit more text.</p>
        </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default BetterWay