import React from "react";
import Header from "../../components/Header/Header";
import "./Financials.css";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { Card, Button, Image } from "react-bootstrap";
import impactreport from "../../assets/impact.png";
import finReport from "../../assets/finan.png"

function Financials() {
  const pdfLinks2023 = [
    {
      title: "MSF Financial Report",
      link: "https://maxscholars.org/media/financial_statements/Final_FS_-_MAX_Scholarship_Fund_2022.12.31.pdf",
      thumbnail: finReport,
    },
  ];

  const pdfLinks2022 = [
    {
      title: "MSF Financial Report",
      link: "https://maxscholars.org/media/financial_statements/Final_FS_-_MAX_Scholarship_Fund_2022.12.31.pdf",
      thumbnail: finReport,
    },
  ];

  const pdfLinks2021 = [
    {
      title: "MSF Financial Report",
      link: "https://maxscholars.org/media/financial_statements/Final_FS_-_MAX_Scholarship_Fund_2022.12.31.pdf",
      thumbnail: finReport,
    },
  ];

  return (
    <div>
      <Header
        title="MSF Financials"
        backgroundUrl="src/assets/landing-pag.png"
      />
      <div className="centered-content">
        <p className="centered-text">
        Explore the financial journey of MAX Scholarship Fund (MSF) by delving into our detailed financial reports spanning the past three years. These reports provide a transparent overview of our fiscal management, showcasing our commitment to accountability and responsible stewardship of funds. Your engagement is valued as we strive for financial transparency and integrity in supporting educational opportunities.

        </p>
      </div>
      <div className="centered-tabs-container">
          <Tabs
            defaultActiveKey="2023"
            id="uncontrolled-tab-example"
            // className="mb-1"
          >
            <Tab eventKey="2023" title="2023">
              <div
                className="tab-content centered-cards"
                style={{ display: "flex", flexWrap: "wrap"}}
              >
                {pdfLinks2023.map((pdf, index) => (
                  <Card
                    key={index}
                    className="pdf-card"
                    style={{ width: "18rem" }}
                  >
                    <a
                      href={pdf.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Image
                        src={pdf.thumbnail}
                        alt={pdf.title}
                        fluid
                        rounded
                        style={{
                          width: "100%",
                          height: "auto%" /* or set a specific height */,
                        }}
                      />
                    </a>
                    <Card.Body>
                      <Card.Title style={{ color: '#fff', fontStyle: 'normal' }} className="custom-card-title msf-title">
                        {pdf.title}
                      </Card.Title>
                      <Card.Text className="custom-link">
                        <a
                          href={pdf.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{
                            color: "#B6A165" /* set your desired link color */,
                          }}
                        >
                          View PDF
                        </a>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                ))}
              </div>
            </Tab>
            <Tab eventKey="2022" title="2022">
              <div
                className="tab-content centered-cards"
                style={{ display: "flex", flexWrap: "wrap" }}
              >
                {pdfLinks2022.map((pdf, index) => (
                  <Card
                    key={index}
                    className="pdf-card"
                    style={{ width: "18rem" }}
                  >
                    <a
                      href={pdf.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Image
                        src={pdf.thumbnail}
                        alt={pdf.title}
                        fluid
                        rounded
                        style={{
                          width: "100%",
                          height: "auto%" /* or set a specific height */,
                        }}
                      />
                    </a>
                    <Card.Body>
                      <Card.Title style={{ color: '#fff', fontStyle: 'normal' }} className="custom-card-title msf-title">
                        {pdf.title}
                      </Card.Title>
                      <Card.Text className="custom-link">
                        <a
                          href={pdf.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{
                            color: "#B6A165" /* set your desired link color */,
                          }}
                        >
                          View PDF
                        </a>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                ))}
              </div>
            </Tab>
            <Tab eventKey="2021" title="2021">
              <div
                className="tab-content centered-cards"
                style={{ display: "flex", flexWrap: "wrap" }}
              >
                {pdfLinks2021.map((pdf, index) => (
                  <Card
                    key={index}
                    className="pdf-card"
                    style={{ width: "18rem" }}
                  >
                    <a
                      href={pdf.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Image
                        src={pdf.thumbnail}
                        alt={pdf.title}
                        fluid
                        rounded
                        style={{
                          width: "100%",
                          height: "auto%" /* or set a specific height */,
                        }}
                      />
                    </a>
                    <Card.Body>
                      <Card.Title style={{ color: '#fff', fontStyle: 'normal' }} className="custom-card-title msf-title">
                        {pdf.title}
                      </Card.Title>
                      <Card.Text className="custom-link">
                        <a
                          href={pdf.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{
                            color: "#B6A165" /* set your desired link color */,
                          }}
                        >
                          View PDF
                        </a>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                ))}
              </div>
            </Tab>
          </Tabs>
      </div>
    </div>
  );
}

export default Financials;
