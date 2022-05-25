import React from 'react'
import Arrow from './Arrow.png'
import LeftImage from './Left-Image.png'
import Doodle from './doodle.png'
import RightImage from './RIght-Image.png'

export default function about() {
    return (
        <div className='d-flex flex-row about'>
            {/* <div className='arrow'> */}
            {/* </div> */}
            <div className='left-img'>
                <img src={Arrow} alt="Arrow" width="300px" height="200px" />
                <img src={LeftImage} alt='left'/>
            </div>
            <div className='about-content'>
                <h1 className='about-heading text-center'>ABOUT US</h1>
                <p>Coders Evoke is a platform that is established for
                    coding enthusiasts and freshers to help them ace
                    their Interviews and get Deep-Level Knowledge
                    about the New Technologies in Emerging Markets.</p>
                <p>Coders Evoke is a platform that is established for
                    coding enthusiasts and freshers to help them .</p>
                <p>Coders Evoke is a platform that is established for
                    coding enthusiasts and freshers to help them ace
                    their Interviews and get Deep-Level Knowledge
                    about the New Technologies in Emerging Markets.</p>
            </div>
            <div className='right-img'>
                <img className='about-doodle' src={Doodle} alt="Doodle" />
                <img src={RightImage} alt='right'/>
            </div>
        </div>
    )
}
