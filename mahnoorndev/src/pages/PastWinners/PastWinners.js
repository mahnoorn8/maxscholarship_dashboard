import React, { useState } from "react";
import { Image, Tabs, Tab, Card, Button, Row, Col } from "react-bootstrap";
import "./PastWinners.css";
import impactreport from "../../assets/impact.png";
import Header from "../../components/Header/Header";

const PastWinners = () => {
  const [pastWinners, setPastWinners] = useState([
    {
      year: 2023,
      name: "Abdullah Al Azzawi",
      scholarshipName: "Barakah All Star Scholarship",
    },
    { year: 2023, name: "Jane Doe", scholarshipName: "ABC Scholarship" },
    { year: 2023, name: "Jane Doe", scholarshipName: "ABC Scholarship" },
    { year: 2023, name: "Jane Doe", scholarshipName: "ABC Scholarship" },
    { year: 2023, name: "Jane Doe", scholarshipName: "ABC Scholarship" },
    { year: 2022, name: "Jane Doe", scholarshipName: "ABC Scholarship" },
    { year: 2022, name: "Jane Doe", scholarshipName: "ABC Scholarship" },
  ]);

  return (
    <div>
      <Header title="Past Winners" backgroundUrl="src/assets/landing-pag.png" />

      <div className="centered-tabs pw">
        <Tabs
          defaultActiveKey="profile"
          id="uncontrolled-tab-example"
          className="mb-3"
        >
          <Tab eventKey="2023" title="2023">
            <div
              className="tab-content centered-cards pw"
              style={{ display: "flex", flexWrap: "wrap" }}
            >
              {pastWinners.filter((w) => w.year == 2023).length > 0 ? (
                <>
                  {pastWinners
                    .filter((w) => w.year == 2023)
                    .map((w) => (
                      <div className="winner-card pw">
                        <div className="winner-img-wrapper"></div>
                        <div className="winner-text-wrapper">
                          <p className="winner-name">{w.name}</p>
                          <p className="winner-scholarship">
                            {w.scholarshipName}
                          </p>
                        </div>
                      </div>
                    ))}
                </>
              ) : null}
            </div>
          </Tab>
          <Tab eventKey="2022" title="2022">
            <div
              className="tab-content centered-cards pw"
              style={{ display: "flex", flexWrap: "wrap" }}
            >
              {pastWinners.filter((w) => w.year == 2022).length > 0 ? (
                <>
                  {pastWinners
                    .filter((w) => w.year == 2022)
                    .map((w) => (
                      <div className="winner-card pw">
                        <div className="winner-img-wrapper"></div>
                        <div className="winner-text-wrapper">
                          <p className="winner-name">{w.name}</p>
                          <p className="winner-scholarship">
                            {w.scholarshipName}
                          </p>
                        </div>
                      </div>
                    ))}
                </>
              ) : null}
            </div>
          </Tab>
          <Tab eventKey="2021" title="2021">
            <div
              className="tab-content centered-cards"
              style={{ display: "flex", flexWrap: "wrap" }}
            ></div>
          </Tab>
          <Tab eventKey="2020" title="2020">
            <div
              className="tab-content centered-cards"
              style={{ display: "flex", flexWrap: "wrap" }}
            ></div>
          </Tab>
          <Tab eventKey="2019" title="2019">
            <div
              className="tab-content centered-cards"
              style={{ display: "flex", flexWrap: "wrap" }}
            ></div>
          </Tab>
          <Tab eventKey="2018" title="2018">
            <div
              className="tab-content centered-cards"
              style={{ display: "flex", flexWrap: "wrap" }}
            ></div>
          </Tab>
          <Tab eventKey="2017" title="2017">
            <div
              className="tab-content centered-cards"
              style={{ display: "flex", flexWrap: "wrap" }}
            ></div>
          </Tab>
          <Tab eventKey="2016" title="2016">
            <div
              className="tab-content centered-cards"
              style={{ display: "flex", flexWrap: "wrap" }}
            ></div>
          </Tab>
        </Tabs>
      </div>
    </div>
  );
};

export default PastWinners;
