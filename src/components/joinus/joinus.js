import React from 'react';
import './joinus.css';
import Joinus from './join-us.png';

export default function joinus() {
    return (
        <div className='join-us'>
            <div className='joinus-img'>
                <img src={Joinus} alt='joinus-img' />
            </div>
            <div className='joinus-content text-center'>
                <h1>Ready To <span className='heading'>Join Us ?</span></h1>
                <p>Coders Evoke is a platform that is established for coding enthusiasts and freshers
                    to help them ace their Interviews and get Deep-Level Knowledge about the New
                    Technologies in Emerging Markets.
                </p>
                <button className='joinBtn'>Join Us</button>
            </div>
        </div>
    )
}
