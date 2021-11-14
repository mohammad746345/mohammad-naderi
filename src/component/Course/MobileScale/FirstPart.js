import React from "react";
import "../Course.css";
import {Container} from "@mui/material";
import {Col, Row} from "react-bootstrap";
import {MdKeyboardArrowLeft} from "react-icons/md"
import {useHistory} from "react-router-dom";

function FirstPart({data}) {
    const history = useHistory()

    const GoHome = () => {
        history.push("/")
    }
  return (
      <div className="mainFirstPartMobile">
        <Container fluid className="h-100">
          <Row className="h-100 d-flex flex-column justify-content-center">
            <Col lg={12} className="d-flex justify-content-end align-items-center goHome" onClick={GoHome} style={{fontSize:"10px", paddingLeft:"8%", zIndex:"5"}}><p className="p-0 m-0">بازگشت به صفحه اصلی  </p><MdKeyboardArrowLeft size={20} /></Col>
            <Col lg={12} className="firstPartTitleMobile d-flex flex-row justify-content-center align-items-end">{data['title']}</Col>
          </Row>
        </Container>
      </div>
  )
}

export default FirstPart;