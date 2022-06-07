import React from 'react'
import './team.css'
import Rohit from './Rohit.jpg'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

export default function team() {
    return (
        <div className='team'>
            <h1 className='text-center'>MEET THE TEAM</h1>
            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="true">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1" style={{ backgroundColor: "#fd5453" }}></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2" style={{ backgroundColor: "#fd5453" }}></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3" style={{ backgroundColor: "#fd5453" }}></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4" style={{ backgroundColor: "#fd5453" }}></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5" style={{ backgroundColor: "#fd5453" }}></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="5" aria-label="Slide 6" style={{ backgroundColor: "#fd5453" }}></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div className='container d-flex flex-row justify-content-around'>
                            <div className="card py-2 px-2">
                                <img src={Rohit} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title text-center">AYAN GUPTA</h5>
                                    <h6 className="card-text text-center">FOUNDER</h6>
                                    <div className='social-icons d-flex flex-row justify-content-evenly'>
                                        <a href='/'><FaGithub /></a>
                                        <a href='/'><FaLinkedin /></a>
                                        <a href='/'><FaTwitter /></a>
                                    </div>
                                </div>
                            </div>
                            <div className="card py-2 px-2">
                                <img src={Rohit} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title text-center">KRUPESH VITHLANI</h5>
                                    <h6 className="card-text text-center">LEAD</h6>
                                    <div className='social-icons d-flex flex-row justify-content-evenly'>
                                        <a href='/'><FaGithub /></a>
                                        <a href='/'><FaLinkedin /></a>
                                        <a href='/'><FaTwitter /></a>
                                    </div>
                                </div>
                            </div>
                            <div className="card py-2 px-2">
                                <img src={Rohit} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title text-center">ROHIT GUPTA</h5>
                                    <h6 className="card-text text-center">EVENT LEAD</h6>
                                    <div className='social-icons d-flex flex-row justify-content-evenly'>
                                        <a href='/'><FaGithub /></a>
                                        <a href='/'><FaLinkedin /></a>
                                        <a href='/'><FaTwitter /></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className='container d-flex flex-row justify-content-around'>
                            <div className="card py-2 px-2">
                                <img src={Rohit} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title text-center">AYAN GUPTA</h5>
                                    <h6 className="card-text text-center">FOUNDER</h6>
                                    <div className='social-icons d-flex flex-row justify-content-evenly'>
                                        <a href='/'><FaGithub /></a>
                                        <a href='/'><FaLinkedin /></a>
                                        <a href='/'><FaTwitter /></a>
                                    </div>
                                </div>
                            </div>
                            <div className="card py-2 px-2">
                                <img src={Rohit} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title text-center">KRUPESH VITHLANI</h5>
                                    <h6 className="card-text text-center">LEAD</h6>
                                    <div className='social-icons d-flex flex-row justify-content-evenly'>
                                        <a href='/'><FaGithub /></a>
                                        <a href='/'><FaLinkedin /></a>
                                        <a href='/'><FaTwitter /></a>
                                    </div>
                                </div>
                            </div>
                            <div className="card py-2 px-2">
                                <img src={Rohit} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title text-center">ROHIT GUPTA</h5>
                                    <h6 className="card-text text-center">EVENT LEAD</h6>
                                    <div className='social-icons d-flex flex-row justify-content-evenly'>
                                        <a href='/'><FaGithub /></a>
                                        <a href='/'><FaLinkedin /></a>
                                        <a href='/'><FaTwitter /></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className='container d-flex flex-row justify-content-around'>
                            <div className="card py-2 px-2">
                                <img src={Rohit} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title text-center">AYAN GUPTA</h5>
                                    <h6 className="card-text text-center">FOUNDER</h6>
                                    <div className='social-icons d-flex flex-row justify-content-evenly'>
                                        <a href='/'><FaGithub /></a>
                                        <a href='/'><FaLinkedin /></a>
                                        <a href='/'><FaTwitter /></a>
                                    </div>
                                </div>
                            </div>
                            <div className="card py-2 px-2">
                                <img src={Rohit} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title text-center">KRUPESH VITHLANI</h5>
                                    <h6 className="card-text text-center">LEAD</h6>
                                    <div className='social-icons d-flex flex-row justify-content-evenly'>
                                        <a href='/'><FaGithub /></a>
                                        <a href='/'><FaLinkedin /></a>
                                        <a href='/'><FaTwitter /></a>
                                    </div>
                                </div>
                            </div>
                            <div className="card py-2 px-2">
                                <img src={Rohit} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title text-center">ROHIT GUPTA</h5>
                                    <h6 className="card-text text-center">EVENT LEAD</h6>
                                    <div className='social-icons d-flex flex-row justify-content-evenly'>
                                        <a href='/'><FaGithub /></a>
                                        <a href='/'><FaLinkedin /></a>
                                        <a href='/'><FaTwitter /></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="carousel-item">
                        <div className='container d-flex flex-row justify-content-around'>
                            <div className="card py-2 px-2">
                                <img src={Rohit} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title text-center">AYAN GUPTA</h5>
                                    <h6 className="card-text text-center">FOUNDER</h6>
                                    <div className='social-icons d-flex flex-row justify-content-evenly'>
                                        <a href='/'><FaGithub /></a>
                                        <a href='/'><FaLinkedin /></a>
                                        <a href='/'><FaTwitter /></a>
                                    </div>
                                </div>
                            </div>
                            <div className="card py-2 px-2">
                                <img src={Rohit} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title text-center">KRUPESH VITHLANI</h5>
                                    <h6 className="card-text text-center">LEAD</h6>
                                    <div className='social-icons d-flex flex-row justify-content-evenly'>
                                        <a href='/'><FaGithub /></a>
                                        <a href='/'><FaLinkedin /></a>
                                        <a href='/'><FaTwitter /></a>
                                    </div>
                                </div>
                            </div>
                            <div className="card py-2 px-2">
                                <img src={Rohit} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title text-center">ROHIT GUPTA</h5>
                                    <h6 className="card-text text-center">EVENT LEAD</h6>
                                    <div className='social-icons d-flex flex-row justify-content-evenly'>
                                        <a href='/'><FaGithub /></a>
                                        <a href='/'><FaLinkedin /></a>
                                        <a href='/'><FaTwitter /></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className='container d-flex flex-row justify-content-around'>
                            <div className="card py-2 px-2">
                                <img src={Rohit} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title text-center">AYAN GUPTA</h5>
                                    <h6 className="card-text text-center">FOUNDER</h6>
                                    <div className='social-icons d-flex flex-row justify-content-evenly'>
                                        <a href='/'><FaGithub /></a>
                                        <a href='/'><FaLinkedin /></a>
                                        <a href='/'><FaTwitter /></a>
                                    </div>
                                </div>
                            </div>
                            <div className="card py-2 px-2">
                                <img src={Rohit} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title text-center">KRUPESH VITHLANI</h5>
                                    <h6 className="card-text text-center">LEAD</h6>
                                    <div className='social-icons d-flex flex-row justify-content-evenly'>
                                        <a href='/'><FaGithub /></a>
                                        <a href='/'><FaLinkedin /></a>
                                        <a href='/'><FaTwitter /></a>
                                    </div>
                                </div>
                            </div>
                            <div className="card py-2 px-2">
                                <img src={Rohit} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title text-center">ROHIT GUPTA</h5>
                                    <h6 className="card-text text-center">EVENT LEAD</h6>
                                    <div className='social-icons d-flex flex-row justify-content-evenly'>
                                        <a href='/'><FaGithub /></a>
                                        <a href='/'><FaLinkedin /></a>
                                        <a href='/'><FaTwitter /></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className='container d-flex flex-row justify-content-around'>
                            <div className="card py-2 px-2">
                                <img src={Rohit} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title text-center">AYAN GUPTA</h5>
                                    <h6 className="card-text text-center">FOUNDER</h6>
                                    <div className='social-icons d-flex flex-row justify-content-evenly'>
                                        <a href='/'><FaGithub /></a>
                                        <a href='/'><FaLinkedin /></a>
                                        <a href='/'><FaTwitter /></a>
                                    </div>
                                </div>
                            </div>
                            <div className="card py-2 px-2">
                                <img src={Rohit} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title text-center">KRUPESH VITHLANI</h5>
                                    <h6 className="card-text text-center">LEAD</h6>
                                    <div className='social-icons d-flex flex-row justify-content-evenly'>
                                        <a href='/'><FaGithub /></a>
                                        <a href='/'><FaLinkedin /></a>
                                        <a href='/'><FaTwitter /></a>
                                    </div>
                                </div>
                            </div>
                            <div className="card py-2 px-2">
                                <img src={Rohit} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title text-center">ROHIT GUPTA</h5>
                                    <h6 className="card-text text-center">EVENT LEAD</h6>
                                    <div className='social-icons d-flex flex-row justify-content-evenly'>
                                        <a href='/'><FaGithub /></a>
                                        <a href='/'><FaLinkedin /></a>
                                        <a href='/'><FaTwitter /></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                {/* <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true" style={{backgroundColor:'#fd5453'}}></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true" style={{backgroundColor:'#fd5453'}}></span>
                    <span className="visually-hidden">Next</span>
                </button> */}
            </div>
        </div>
    )
}
