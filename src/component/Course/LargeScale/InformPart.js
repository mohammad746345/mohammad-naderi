import React from "react";
import "../Course.css";
import {Container, Col, Row} from "react-bootstrap";

function InformPart({ data }) {

  return (
      <div className="mainInformPart">
        <Container className="h-100">
            <Row className="h-100">
                <Col lg={7} className="d-flex flex-column" style={{padding:"5% 8% 1% 8%"}}>
                    <div dangerouslySetInnerHTML={{ __html: data['discriptions'] }} />
                </Col>
                <Col lg={5} className="d-flex justify-content-center" style={{paddingBottom:"5%"}}>
                    <img style={{width:"348px", height:"491px", marginTop:"36px", zIndex:"5"}} src={`http://193.176.243.113${data['poster']}`} alt="poster.png"/>
                </Col>
            </Row>
        </Container>
      </div>

  )
}

export default InformPart;