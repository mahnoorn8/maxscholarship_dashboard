import React, { Component } from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowRightToBracket} from "@fortawesome/free-solid-svg-icons";
import {faGraduationCap, faTrophy, faStar} from "@fortawesome/free-solid-svg-icons";
import './Home.css';
import logo from "./assets/img.png";
import logo1 from "./assets/sponsors/Hifzacademy.png";
import logo2 from "./assets/sponsors/Drsuleman.png";
import logo3 from "./assets/sponsors/Balyasny.png";
import winner1 from "./assets/winners/winner-1.png";

class Home extends Component{
    render(){
        return(
            <div className="home">
                <div className="cover">
                    <div className="cover-background">
                        <h5 className="cover-h5">MAX Scholarship Fund</h5>
                        <h2 className="cover-h2">Applications for 2023 are now open</h2>
                        <button className="apply-cover-button">
                            <FontAwesomeIcon icon={faArrowRightToBracket} className="nav-apply" />
                            Apply Now
                        </button>
                    </div>
                </div>
                <div className="about-section">
                    <div className="about-msf">
                        <iframe style={{width:"47.5%"}} width="560" height="315"
                                src="https://www.youtube.com/embed/NhG8rSA_nu4?si=bbGZtjppeV5FHm17"
                                title="YouTube video player" frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen>
                        </iframe>
                        <div className="about-msf-section">
                            <h2 style={{color: "#113377"}}> About MSF </h2>
                            <p style={{color: "#808080"}}> The MAX Scholarships Fund (MSF) awards well-rounded High School and University students who are eager to make an impact, learn and create. They are students who have contributed to their communities and Canada at large, achieved above-average marks and are recognized by their peers, Muslim and non Muslim alike. MSF is a registered charitable entity, and donors are eligible for a Charitable Tax Receipt. </p>
                            <button className="clear-button"> Apply for a scholarship </button>
                        </div>
                    </div>
                    <div className="about-two-button">
                        <button className="about-two-buttons"> Become a sponsor </button>
                        <button className="about-two-buttons"> View our scholarships </button>
                    </div>
                    <div className="about-sponsor">
                        <h2 style={{color: "#113377"}}> Our Sponsors </h2>
                        <div className="about-sponsors">
                            <img src={logo1} className="sponsor-logo"/>
                            <img src={logo2} className="sponsor-logo"/>
                            <img src={logo3} className="sponsor-logo"/>
                        </div>
                    </div>
                </div>
                <div className="about-highlights">
                    <h2 style={{color: "white",fontSize:"30px",}}>Since 2016 MSF has...</h2>
                    <div className="about-highlight-boxes">
                        <div className="about-highlight-box">
                            <FontAwesomeIcon icon={faGraduationCap} style={{color: "#ffffff",height:"50px",}} />
                            <p className="p-highlight">Awarded in scholarships</p>
                            <h2 className="h2-highlight">$798,000</h2>
                        </div>
                        <div className="about-highlight-box">
                            <FontAwesomeIcon icon={faTrophy} style={{color: "#ffffff",height:"50px",}} />
                            <p className="p-highlight">Awarded in scholarships</p>
                            <h2 className="h2-highlight">$798,000</h2>
                        </div>
                        <div className="about-highlight-box">
                            <FontAwesomeIcon icon={faStar} style={{color: "#ffffff",height:"50px",}} />
                            <p className="p-highlight">Awarded in scholarships</p>
                            <h2 className="h2-highlight">$798,000</h2>
                        </div>
                    </div>
                </div>
                <div className="about-winners">
                    <h2 style={{color: "#113377",fontSize:"40px",}}>MSF Winners</h2>
                    <img src={winner1} style={{height: "400px",fontSize:"40px",}}/>
                </div>
                <div className="bottomNavigation">
                    <h5>Copyright 2019</h5>
                    <button variant="text" color="inherit">Help</button>
                    <button href="https://github.com/bill-ahmed/SpendingTracker" target="_blank" variant="text" color="inherit">About Us</button>
                </div>
            </div>
        )
    }
}

export default Home;