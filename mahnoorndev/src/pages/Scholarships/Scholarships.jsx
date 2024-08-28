import "./Scholarships.css";
import React, { useState } from "react";
import { Tabs, Tab, Card, Button, Row, Col } from "react-bootstrap";
import Header from "../../components/Header/Header";
const Scholarships = () => {
  const [key, setKey] = useState("postSecondary");
  const [postSecondaryData, setPostSecondaryData] = useState([
    {
      id: 1,
      title: "All Star Female",
      description: "Dr. Shiraz and Ayesha Suleman Scholarship for Women",
      amount: "CAS$5,000 x 1",
    },
    {
      id: 1,
      title: "All Star Female",
      description: "Dr. Shiraz and Ayesha Suleman Scholarship for Women",
      amount: "CAS$5,000 x 1",
    },
    {
      id: 1,
      title: "All Star Female",
      description: "Dr. Shiraz and Ayesha Suleman Scholarship for Women",
      amount: "CAS$5,000 x 1",
    },
    {
      id: 1,
      title: "All Star Female",
      description: "Dr. Shiraz and Ayesha Suleman Scholarship for Women",
      amount: "CAS$5,000 x 1",
    },
    {
      id: 1,
      title: "All Star Female",
      description: "Dr. Shiraz and Ayesha Suleman Scholarship for Women",
      amount: "CAS$5,000 x 1",
    },
    {
      id: 1,
      title: "All Star Female",
      description: "Dr. Shiraz and Ayesha Suleman Scholarship for Women",
      amount: "CAS$5,000 x 1",
    },
    {
      id: 1,
      title: "All Star Female",
      description: "Dr. Shiraz and Ayesha Suleman Scholarship for Women",
      amount: "CAS$5,000 x 1",
    },
    {
      id: 1,
      title: "All Star Female",
      description: "Dr. Shiraz and Ayesha Suleman Scholarship for Women",
      amount: "CAS$5,000 x 1",
    },
    // ... more objects representing post-secondary scholarships
  ]);
  const [highSchoolData, setHighSchoolData] = useState([
    {
      id: 1,
      title: "All Star Male",
      description: "Sample Info",
      amount: "CAS$5,000 x 1",
    },
    {
      id: 1,
      title: "All Star Male",
      description: "Sample Info",
      amount: "CAS$5,000 x 1",
    },
    {
      id: 1,
      title: "All Star Male",
      description: "Sample Info",
      amount: "CAS$5,000 x 1",
    },
    {
      id: 1,
      title: "All Star Male",
      description: "Sample Info",
      amount: "CAS$5,000 x 1",
    },
    {
      id: 1,
      title: "All Star Male",
      description: "Sample Info",
      amount: "CAS$5,000 x 1",
    },
    {
      id: 1,
      title: "All Star Male",
      description: "Sample Info",
      amount: "CAS$5,000 x 1",
    },
    {
      id: 1,
      title: "All Star Male",
      description: "Sample Info",
      amount: "CAS$5,000 x 1",
    },
    {
      id: 1,
      title: "All Star Male",
      description: "Sample Info",
      amount: "CAS$5,000 x 1",
    },
    {
      id: 1,
      title: "All Star Male",
      description: "Sample Info",
      amount: "CAS$5,000 x 1",
    },
    {
      id: 1,
      title: "All Star Male",
      description: "Sample Info",
      amount: "CAS$5,000 x 1",
    },

    // ... more objects representing post-secondary scholarships
  ]);

  const fetchTabData = (key) => {
    if (key == "postSecondary") return postSecondaryData;
    if (key == "highSchool") return highSchoolData;
  };

  return (
    <div className="my-component">
      <Header title="Scholarships" />
      <div className="main-div">
        <div className="scholarship-info text-center my-4">
          <p>
            The objective of the MAX Scholarship Fund is to recognize and reward
            High School and Post Secondary students who have excelled in
            academics and combined this achievement with outstanding
            contributions to their school and/or community.
          </p>
          <p>
            Applications for the 2023 Scholarship Cycle closed on Apr 2, 2023 @
            2:59 AM America/Toronto. The next scholarship cycle will be
            announced at a later time.
          </p>
        </div>
        <Row className="mb-4">
          <Col className="text-center apply-btns">
            <Button variant="primary app-btn" className="mx-2">
              Applicant Consent
            </Button>
            <Button variant="primary app-btn" className="mx-2">
              Apply for a scholarship
            </Button>
          </Col>
        </Row>

        <div className="scholarships-list-container">
          <div className="tabs-container">
            <div
              className="tab post-secondary-tab"
              onClick={() => setKey("postSecondary")}
            >
              Post Secondary
            </div>
            <div
              className="tab highschool-tab"
              onClick={() => setKey("highSchool")}
            >
              High School
            </div>
          </div>
          <div className="scholarships-list">
            {key && fetchTabData(key)
              ? fetchTabData(key).map((scholar) => (
                  <div className="scholar">
                    <p className="scholar-title">{scholar.title}</p>
                    <div className="scholar-details">
                      <img
                        className="scholar-photo"
                        src="/images/Drsuleman-img.png"
                      />
                      <p className="scholar-name">{scholar.description}</p>
                      <p className="scholar-amount">{scholar.amount}</p>
                      <a href="#" className="scholar-view-more">
                        View More
                      </a>
                    </div>
                  </div>
                ))
              : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Scholarships;

// <div className="my-component">
//       <HeaderHome title="Scholarships" />
//       <div className="main-div">
//         <div className="scholarship-info text-center my-4">
//           <p>
//             The objective of the MAX Scholarship Fund is to recognize and reward
//             High School and Post Secondary students who have excelled in
//             academics and combined this achievement with outstanding
//             contributions to their school and/or community.
//           </p>
//           <p>
//             Applications for the 2023 Scholarship Cycle closed on Apr 2, 2023 @
//             2:59 AM America/Toronto. The next scholarship cycle will be
//             announced at a later time.
//           </p>
//         </div>
//         <Row className="mb-4">
//           <Col className="text-center apply-btns">
//             <Button variant="primary app-btn" className="mx-2">
//               Applicant Consent
//             </Button>
//             <Button variant="primary app-btn" className="mx-2">
//               Apply for a scholarship
//             </Button>
//           </Col>
//         </Row>
//         <Tabs
//           id="controlled-tab-example"
//           activeKey={key}
//           onSelect={(k) => setKey(k)}
//           className="mb-3 tabs-container"
//         >
//           <Tab eventKey="postSecondary" title="Post Secondary">
//             {scholarshipData.postSecondary.map((scholarship) => (
//               <Row key={scholarship.id} className="mb-3">
//                 <Col md={6} className="d-flex">
//                   <Card className="flex-column">
//                     <div className="image-placeholder red-background"></div>
//                     <Card.Body className="card-body-container">
//                       <Card.Title>{scholarship.title}</Card.Title>
//                       <Card.Text>{scholarship.description}</Card.Text>
//                       <Card.Text>{scholarship.amount}</Card.Text>
//                       <Button variant="link">View more</Button>
//                     </Card.Body>
//                   </Card>
//                 </Col>
//               </Row>
//             ))}
//           </Tab>
//           <Tab eventKey="highSchool" title="High School">
//             {scholarshipData.highSchool.map((scholarship) => (
//               <Row key={scholarship.id} className="mb-3">
//                 <Col md={6} className="d-flex">
//                   <Card className="flex-row">
//                     <div className="image-placeholder red-background"></div>
//                     <Card.Body>
//                       <Card.Title>{scholarship.title}</Card.Title>
//                       <Card.Text>{scholarship.description}</Card.Text>
//                       <Card.Text>{scholarship.amount}</Card.Text>
//                       <Button variant="link">View more</Button>
//                     </Card.Body>
//                   </Card>
//                 </Col>
//               </Row>
//             ))}
//           </Tab>
//         </Tabs>
//       </div>
//     </div>

// return (
//     <>
//       <HeaderHome />
//       <Container className="my-component">
// <div className="scholarship-info text-center my-4">
//   <p>
//     The objective of the MAX Scholarship Fund is to recognize and reward
//     High School and Post Secondary students who have excelled in
//     academics and combined this achievement with outstanding
//     contributions to their school and/or community.
//   </p>
//   <p>
//     Applications for the 2023 Scholarship Cycle closed on Apr 2, 2023 @
//     2:59 AM America/Toronto. The next scholarship cycle will be
//     announced at a later time.
//   </p>
// </div>
// <Row className="mb-4">
//   <Col className="text-center apply-btns">
//     <Button variant="primary app-btn" className="mx-2">
//       Applicant Consent
//     </Button>
//     <Button variant="primary app-btn" className="mx-2">
//       Apply for a scholarship
//     </Button>
//   </Col>
// </Row>
//         <Row className="category-row text-center mb-3">
//           <Col>
//             <h2 className="post-secondary">Post Secondary</h2>
//           </Col>
//           <Col>
//             <h2 className="high-school">High School</h2>
//           </Col>
//         </Row>
//         {scholarshipData.map((scholarship) => (
//           <Row key={scholarship.id} className="mb-3">
//             <Col md={6} className="d-flex">
//               <div className="image-placeholder red-background"></div>
//               <Card.Body>
//                 <Card.Title>{scholarship.title}</Card.Title>
//                 <Card.Text>{scholarship.description}</Card.Text>
//                 <Card.Text>{scholarship.amount}</Card.Text>
//                 <Button variant="link">View more</Button>
//               </Card.Body>
//             </Col>
//             <Col md={6} className="d-flex">
//               {" "}
//               {/* Placeholder for the next scholarship */}
//               <div className="image-placeholder red-background"></div>
//             </Col>
//           </Row>
//         ))}
//       </Container>
//     </>
//   );
