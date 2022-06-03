import React from 'react'
import './event.css'
import Rohit from './Rohit.jpg'

export default function event() {
  return (
    <div className='event'>
      <h1 className='text-center'>EVENTS</h1>
      <div className="accordion container" id="accordionExample">

      <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
              Upcoming Events
            </button>
          </h2>
          <div id="collapseTwo" className="accordion-collapse collapse show" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              <div className='d-flex justify-content-evenly'>
                <div className="card" style={{ width: "18rem" }}>
                  <img src={Rohit} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h6 className="card-title">Coders Evoke is a platform that is established for coding enthusiasts and freshers to help.</h6>
                    <a href="/" className="btn btn-primary">Register</a>
                  </div>
                </div>
                <div className="card" style={{ width: "18rem" }}>
                  <img src={Rohit} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h6 className="card-title">Coders Evoke is a platform that is established for coding enthusiasts and freshers to help.</h6>
                    <a href="/" className="btn btn-primary">Register</a>
                  </div>
                </div>
                <div className="card" style={{ width: "18rem" }}>
                  <img src={Rohit} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h6 className="card-title">Coders Evoke is a platform that is established for coding enthusiasts and freshers to help.</h6>
                    <a href="/" className="btn btn-primary">Register</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
              Past Events
            </button>
          </h2>
          <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              <div className='d-flex justify-content-evenly'>
                <div className="card" style={{ width: "18rem" }}>
                  <img src={Rohit} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h6 className="card-title">Coders Evoke is a platform that is established for coding enthusiasts and freshers to help.</h6>
                    <a href="/" className="btn btn-primary">Register</a>
                  </div>
                </div>
                <div className="card" style={{ width: "18rem" }}>
                  <img src={Rohit} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h6 className="card-title">Coders Evoke is a platform that is established for coding enthusiasts and freshers to help.</h6>
                    <a href="/" className="btn btn-primary">Register</a>
                  </div>
                </div>
                <div className="card" style={{ width: "18rem" }}>
                  <img src={Rohit} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h6 className="card-title">Coders Evoke is a platform that is established for coding enthusiasts and freshers to help.</h6>
                    <a href="/" className="btn btn-primary">Register</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
