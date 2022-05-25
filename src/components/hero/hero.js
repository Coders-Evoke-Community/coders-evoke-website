import React from 'react';
import './hero.css'

export default function hero() {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className=' col-md-6 p-4 hero'>
                    <div className='hero-content'>
                        <h2>Welcome to</h2>
                        <h1>CODER'S EVOKE</h1>
                        <p>Coders Evoke is a platform that is established
                        for coding enthusiasts and freshers to help
                        them ace their Interviews and get Deep-Level
                        Knowledge about the New Technologies in
                    Emerging Markets.</p>
                        <button className='btn btn-primary mt-3'>Join Discord</button>
                    </div>

                </div>
                    <div className='col-md-6 hero-image'>

                    </div>


            </div>
        </div>
    )
}
