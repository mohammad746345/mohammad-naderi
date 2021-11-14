import React, {useState} from "react";
import "../Course.css"

import CircularProgressWithLabel from "../../CircularProgressWithLabel/CircularProgressWithLabel"
import {Container} from "@mui/material";
import {Col, Row} from "react-bootstrap";
import Timer from "../../Timer/Timer";
import MyVerticallyCenteredModal from "../LargeScale/CourseModal";

function FirstNav({data}) {
    console.log(data)
    const [modalShow, setModalShow] = useState(false);

    const time = new Date();
    time.setSeconds(time.getSeconds() + data['secend_date']['end_signup'])

  return (
      <div className="mainFirstNavMobile">
        <Container fluid className="h-100">
          <Row className="h-100 d-flex flex-column">
              <Col lg={12} className="d-flex flex-row justify-content-center pt-4" style={{paddingRight:"10%"}}>
                  <Col lg={1} className="d-flex justify-content-center"><CircularProgressWithLabel value={parseInt(data['capcity_Percentage'].slice(0,-1))} style={{fontFamily:"IRANSansXFaNum", color: (100-parseInt(data['capcity_Percentage'].slice(0,-1)))<80?"#45b4c6":"#ff0000\n" +
                                                    "\n"}} size={69}/></Col>
                  <Col className="d-flex flex-column justify-content-center">
                      <p className="text-center" style={{fontSize:"12px", fontWeight:"bold"}}>تا اتمام ثبت نام</p>
                      <Timer expiryTimestamp={time} style={{ width:"194px", fontFamily:"IRANSansXFaNum" }}/>
                  </Col>
              </Col>
            <Col lg={12} className="h-100 d-flex flex-column justify-content-center align-content-center mt-4 mb-4">
                <p style={{fontSize:"16px"}} className="m-0 text-center"><b>قیمت </b><span style={{fontSize:"16px",color:"#707070"}}>{data['get_rial_price']}</span></p>
            </Col>
            <Col className="d-flex justify-content-center mb-4">
                <button className="col-6 btn firstNavButton" style={{fontSize:"16px"}} onClick={() => setModalShow(true)}>ثبت نام</button>
            </Col>
              <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
              />
          </Row>
        </Container>
      </div>
  )
}

export default FirstNav;