import React from 'react'
import './Pagecontent.css'

const Pagecontent = () => {
  return (
    <>
       <main className="page container">
      <div className="page-content">
        <h1>YOUR FEET DESERVE THE BEST</h1>
        <p>
          YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.
        </p>

        <div className="page-btn">
          <button>Shop Now </button>
          <button className="secondary-btn">Category</button>
        </div>

        <div className="shopping">
          <p>Also Available On</p>

          <div className="brand-icons">
          <img src="/images/flipkart.png" alt="flipkart-logo" />
            <img src="/images/amazon.png" alt="amazon-logo" />

            
          </div>
        </div>
      </div>
      <div className="page-image">
        <img src="/images/hero-image.png" alt="hero-image" />
      </div>
    </main>
    </>
  )
}

export default Pagecontent

