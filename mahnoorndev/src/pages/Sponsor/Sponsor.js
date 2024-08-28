import React from 'react';
import Header from "../../components/Header/Header";
import "./Sponsor.css"
import { Card, Button, Image, Table } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import longArrowRight from "../../assets/longArrowRight.png";



function Sponsor() {
    return (
        <div>
            <Header
                title="Sponsor a MAX Scholarship"
                subtitle="Leave a Legacy"
                backgroundUrl="src/assets/landing-pag.png"
            />
            <div className="centered-content">
                <p className="centered-text">
                    Help us continue to elevate the brand of Muslims. Please join us in motivating and supporting the bright youth of the Muslim community to become positive and successful contributors to Canadian society. Leave a legacy by offering a scholarship in your family or company name, or by donating to a general All Star Scholarship.  
                </p>
            </div>
            <div className="aligned-center-content">
                <p className="aligned-center-text">
                    MSF is a registered charitable entity, and donors are eligible for a Charitable Tax Receipt.
                </p>
            </div>

            {/* Embed the Keela donation form using an iframe */}
            <iframe
                title="Donation Form"
                src="https://give-can.keela.co/embed/HXro9ABhzuh59aJvi"
                width="100%"
                height="660"
            />

            <div className="colored-box">
                <div className="content">
                    <h1>Sponsor a named scholarship in our next cycle</h1>
                    <p>Note: All scholarship donations come with a $500 fee. This fee helps to cover several operational and administrative costs of MSF</p>
                    <a href="/contact" style={{ textDecoration: 'none'}}>
                        <Card className="cardsp">
                        <Card.Body className="cardsp-bd">
                            <Card.Title className="cardsp-title">$3,500</Card.Title>
                            <Card.Text className="cardsp-text">
                            Scholarship amount: $3,000
                            </Card.Text>
                        </Card.Body>
                        </Card>
                    </a>
                    <a href="/contact" style={{ textDecoration: 'none' }}>
                        <Card className="cardsp">
                        <Card.Body>
                            <Card.Title className="cardsp-title">$5,500</Card.Title>
                            <Card.Text className="cardsp-text">
                            Scholarship amount: $5,000
                            </Card.Text>
                        </Card.Body>
                        </Card>
                    </a>
                    
                    <a href="/contact" style={{ textDecoration: 'none' }}>
                        <Card className="cardsp">
                        <Card.Body>
                            <Card.Title className="cardsp-title">$10,500</Card.Title>
                            <Card.Text className="cardsp-text">
                            Scholarship amount: $10,000
                            </Card.Text>
                        </Card.Body>
                        </Card>
                    </a>

                    <a href="/contact" style={{ textDecoration: 'none' }}>
                        <Card className="cardsp">
                        <Card.Body>
                            <Card.Title className="cardsp-title">$20,500</Card.Title>
                            <Card.Text className="cardsp-text">
                            Scholarship amount: $20,000
                            </Card.Text>
                        </Card.Body>
                        </Card>
                    </a>
                </div>
                <Button
                        variant="outline-secondary"
                        style={{
                            color: 'white',
                            borderColor: 'white',
                            backgroundColor: '#0260A8',
                            marginTop: '20px',
                            borderWidth: '3px',  // Adjust the border thickness
                            fontWeight: 'bold', // Make the font bold
                            fontSize: '18px'
                        }}
                    >                
                Contact MSF to Donate to a Named Scholarship
                </Button>
            </div>
            <div className="endowment-fund-box">
                <div className="ef-content">

                    <h1>Contribute cash/securities to our Endowment Fund for Perpetual Scholarships</h1>
                    <p>MSF provides families the opportunity to donate through Endowment Funds. The Donor receives a charitable tax receipt for the full endowed amount. The endowed amount is then used by the charity (MSF) to earn a stable return in perpetuity that generates a scholarship annually in perpetuity.
                    </p>
                    <h3>Option 1: Full Cash Contribution</h3>
                </div>
            </div>
            <div className="fullcash-table">
                <Table>
                    <thead>
                        <tr>
                        <th>One-time donation of:</th>
                        <th>will generate</th>
                        <th>an annual scholarship <br /> perpetuity of:</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td style={{ fontSize: '25px' }}>$60,000</td>
                            <td>
                                <img src={longArrowRight} alt="longArrowRight" style={{ height: "25px"}} />
                            </td>
                            <td style={{ fontSize: '25px' }}>$3,000</td>
                        </tr>
                        <tr>
                            <td style={{ fontSize: '25px' }}>$100,000</td>
                            <td>
                                <img src={longArrowRight} alt="longArrowRight" style={{ height: "25px"}} />
                            </td>
                            <td style={{ fontSize: '25px' }}>$5,000</td>
                        </tr>
                        <tr>
                            <td style={{ fontSize: '25px' }}>$120,000</td>
                            <td>
                               <img src={longArrowRight} alt="longArrowRight" style={{ height: "25px"}} />
                            </td>
                            <td style={{ fontSize: '25px' }}>$10,000</td>
                        </tr>
                        
                        
                    </tbody>
                </Table>
            </div>
            <div className="ef-option2">
                <h3>Option 2: Donate via publicly traded shares to MSF</h3>
                <Button
                        variant="outline-secondary"
                        style={{
                            color: '#0260A8',
                            borderColor: '#0260A8',
                            backgroundColor: 'white',
                            marginTop: '20px',
                            borderWidth: '3px',  // Adjust the border thickness
                            fontWeight: 'bold', // Make the font bold
                            fontSize: '18px'
                        }}
                    >                
                Contact MSF to Donate to a Named Scholarship
                </Button>
            </div>
        </div>
    );
}



export default Sponsor;
