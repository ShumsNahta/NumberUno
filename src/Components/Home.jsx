import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Image1 from '../Assets/Image1.jpg';
import NumberUnoLogo from '../Assets/NumberUnoLogo.jpeg';
import SlideImg1 from '../Assets/SlideImg1.jpg';
import SlideImg2 from '../Assets/SlideImg2.jpg';
import SlideImg3 from '../Assets/SlideImg3.jpg';
import Doodle from '../Assets/doodles-5960094.jpg';
import GirlImg from '../Assets/woman.jpg';
import ManCig from '../Assets/man.jpg';
import Purse from '../Assets/womanPurse.jpg';
import WineImg from '../Assets/wine.jpg';

const Home = () => {
    return (
        <>
            <div id='HomeDiv'>
                <img src={Image1} alt="" className='HomeImage1' />
                <img src={NumberUnoLogo} alt="" className='NumUnoLogo' />
                <div id='HomeHeading1'><p id='HomePara1'>THE BEAUTILITY AGENCY</p></div>
                <div className='Carousel'>
                    <div id="carouselExampleControls" className="carousel slide" data-ride="carousel" style={{ height: "100%", width: "70%" }}>
                        <div className="carousel-inner" style={{ height: "100%" }}>
                            <div class="carousel-item active" style={{ height: "100%" }}>
                                <img className="d-block w-100" src={SlideImg1} alt="First slide" style={{ objectFit: "cover", height: "100%" }} />
                            </div>
                            <div class="carousel-item" style={{ height: "100%" }}>
                                <img className="d-block w-100" src={SlideImg2} alt="Second slide" style={{ objectFit: "cover", height: "100%" }} />
                            </div>
                            <div class="carousel-item" style={{ height: "100%" }}>
                                <img className="d-block w-100" src={SlideImg3} alt="Third slide" style={{ objectFit: "cover", height: "100%" }} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='HomeChildDiv1'>
                    <div id='HomeChildDiv1-1'>
                        <p style={{ color: "white", paddingTop: '6%', textJustify: "left" }}>Bonjour Paris is an independent agency dedicated to creating tailored solutions with soul, expertise and passion.</p>
                    </div>
                    <div id='HomeChildDiv1-2'>
                        <p style={{ color: "white", paddingTop: '25%', textJustify: "left" }}>At Bonjour Paris, we imagine new brand territories and stories through logotypes, typefaces and content. We make people live a beautiful integrated experience and get them to share it.</p>
                        <p style={{ color: "white", paddingTop: '3%', textJustify: "left" }}>Bonjour and Bienvenue.</p>
                    </div>
                </div>
                <div className='HomeChildDiv2'>
                    <div className="HomeChildDiv2-1">
                        <img src={Doodle} alt="" id='HomeChildDiv2-1-img' />
                    </div>
                    <div className="HomeChildDiv2-1">
                        <div className='HomeChildDiv2-1-content'>
                            <img src={GirlImg} alt="" className='HomeChildDiv2-1-content-img' />
                            <p className='HomeChildDiv2-1-content-p'>
                                <h4 style={{ fontFamily: "sans-serif", fontSize: "1.5em" }}>
                                    Branding
                                </h4>
                                <p style={{ fontSize: "1em" }}>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, hic sit repudiandae ad illum nisi dolore vitae commodi quos inventore!
                                </p>
                            </p>
                        </div>
                    </div>
                    <div className="HomeChildDiv2-1">
                        <div className='HomeChildDiv2-1-content'>
                            <img src={ManCig} alt="" className='HomeChildDiv2-1-content-img' />
                            <p className='HomeChildDiv2-1-content-p'>
                                <h4 style={{ fontFamily: "sans-serif", fontSize: "1.5em" }}>
                                    Content
                                </h4>
                                <p style={{ fontSize: "1em" }}>
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum nemo ut minus ipsam illo delectus accusamus nobis debitis, dolorem praesentium.
                                </p>
                            </p>
                        </div>
                    </div>
                    <div className="HomeChildDiv2-1">
                        <div className='HomeChildDiv2-1-content'>
                            <img src={Purse} alt="" className='HomeChildDiv2-1-content-img' />
                            <p className='HomeChildDiv2-1-content-p'>
                                <h4 style={{ fontFamily: "sans-serif", fontSize: "1.5em" }}>
                                    Digital
                                </h4>
                                <p style={{ fontSize: "1em" }}>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam dignissimos error similique perspiciatis distinctio. Voluptatem maiores deserunt tempore enim sapiente?
                                </p>
                            </p>
                        </div>
                    </div>
                    <div className="HomeChildDiv2-1">
                        <div className='HomeChildDiv2-1-content'>
                            <img src={WineImg} alt="" className='HomeChildDiv2-1-content-img' />
                            <p className='HomeChildDiv2-1-content-p'>
                                <h4 style={{ fontFamily: "sans-serif", fontSize: "1.5em" }}>
                                    Social
                                </h4>
                                <p style={{ fontSize: "1em" }}>
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non tempore, eligendi voluptate necessitatibus ea cumque voluptatibus quam? Perspiciatis, commodi officia?
                                </p>
                            </p>
                        </div>
                    </div>
                </div>
                <div className='HomeChildDiv3'>
                    <div id='HomeChildDiv3-Child1'>
                        <div id='HomeChildDiv3-Child1-textButton'>
                            <p id='HomeChildDiv3-Child1-textButton-p'>NumberUno <br /> MARKET, <br />NOW OPEN</p>
                            <button id='HomeChildDiv3-Child1-textButton-btn'>SHOP NOW</button>
                        </div>
                    </div>
                    <div id='HomeChildDiv3-Child2'>
                        <p id='HomeChildDiv3-Child2-p'>STAY IN TOUCH !</p>
                    </div>
                    <div id='HomeChildDiv3-Child3'>

                        <div id='HomeChildDiv3-Child3-1'>
                            <button id='HomeChildDiv3-Child3-1-btn'><img id='HomeChildDiv3-Child3-1-btn-img' src={NumberUnoLogo} alt="" /><p id='HomeChildDiv3-Child3-1-btn-p'>MENU</p></button>
                        </div>
                        <div id='HomeChildDiv3-Child3-2'>
                            <div id='HomeChildDiv3-Child3-2-div1'>
                                <div id='HomeChildDiv3-Child3-2-div2'>
                                </div>
                            </div>
                        </div>

                        <div id='HomeChildDiv3-Child3-3'>
                            <input id='HomeChildDiv3-Child3-3-inp' type="search" placeholder="Newspaper" aria-label="Search" />
                            <button className="btn btn-outline-success" id='HomeChildDiv3-Child3-3-btn' type="submit">Search</button>
                        </div>

                        <div id='HomeChildDiv3-Child3-4'>
                            <a href="">
                                <i className="fa-brands fa-instagram HomeChildDiv3-Child3-4-icon" id='HomeChildDiv3-Child3-4-link-1'></i>
                            </a>
                            <a href="">
                                <i className="fa-brands fa-facebook-f HomeChildDiv3-Child3-4-icon" id='HomeChildDiv3-Child3-4-link-2'></i>
                            </a>
                            <a href="">
                                <i className="fa-brands fa-linkedin-in HomeChildDiv3-Child3-4-icon" id='HomeChildDiv3-Child3-4-link-3'></i>
                            </a>
                            <a href="">
                                <i className="fa-solid fa-phone HomeChildDiv3-Child3-4-icon" id='HomeChildDiv3-Child3-4-link-4'></i>
                            </a>
                            <a href="">
                                <i className="fa-regular fa-envelope HomeChildDiv3-Child3-4-icon" id='HomeChildDiv3-Child3-4-link-5'></i>
                            </a>
                        </div>
                        <div id='HomeChildDiv3-Child3-5'>
                            <span id='HomeChildDiv3-Child3-5-p1'>Portions of this content are © 2024 by individual NumberUno.com contributors. Content available under <span id='HomeChildDiv3-Child3-5-p2'>a Creative Commons license.</span></span>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;
