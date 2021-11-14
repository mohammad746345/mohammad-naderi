import React from "react";
import "../Course.css";
import {Container, Col, Row} from "react-bootstrap";

function InformPart({ data }) {
  return (
      <div className="mainInformPartMobile">
        <Container className="h-100">
            <Row className="h-100">
                <Col lg={12} className="d-flex justify-content-center">
                    <img style={{width:"292px", height:"414px"}} src={`http://193.176.243.113${data['poster']}`} alt="poster.png"/>
                </Col>
                <Col lg={12} className="d-flex flex-column informPartMobileText" style={{padding:"5% 8%"}}>
                    <div dangerouslySetInnerHTML={{ __html: data['discriptions'] }} />
                </Col>
            </Row>
        </Container>
      </div>

  )
}

export default InformPart;