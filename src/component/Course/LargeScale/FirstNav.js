import React, { useEffect, useState } from "react";
import "../Course.css"

import CircularProgressWithLabel from "../../CircularProgressWithLabel/CircularProgressWithLabel"
import {Container} from "@mui/material";
import {Col, Row} from "react-bootstrap";
import Timer from "../../Timer/Timer";
import MyVerticallyCenteredModal from "./CourseModal";

const getPosition = () => window.pageYOffset

function FirstNav({data}) {
    const [modalShow, setModalShow] = useState(false);
    const [scrollPosition, setScrollPosition] = useState(getPosition())
    const first_nav = document.getElementById("first_nav")

    const time = new Date()
    time.setSeconds(time.getSeconds() + (data['secend_date']['end_signup']))

    useEffect(() => {
        const handleScroll = () => {
          setScrollPosition(getPosition())
        }
        window.addEventListener("scroll", handleScroll)
    })

    useEffect(() => {
        if(first_nav){
            if(scrollPosition > 306) {
                first_nav.style.visibility = "visible";
                (window.innerHeight - scrollPosition) < 200 ? first_nav.style.visibility = "hidden" : first_nav.style.visibility = "visible"
            }else{
                first_nav.style.visibility = "hidden"
            }
        }
    },[first_nav, scrollPosition])



  return (
      <div>
          <div className="mainFirstNav">
            <Container fluid className="h-100">
              <Row className="h-100 d-flex justify-content-around align-items-center">
                <Col lg={3}>
                    <Timer expiryTimestamp={time} style={{width:"20px"}} dataSize={16}/>
                </Col>
                <Col lg={2} className="d-flex align-items-center justify-content-start p-0">
                    <p style={{fontSize:"16px", fontWeight:"bold"}}>تا اتمام ثبت نام</p>
                </Col>
                <Col lg={2} className="d-flex justify-content-center"><CircularProgressWithLabel value={parseInt(data['capcity_Percentage'].slice(0,-1))} style={{fontFamily:"IRANSansXFaNum", color: (100-parseInt(data['capcity_Percentage'].slice(0,-1)))<80?"#45b4c6":"#ff0000\n" +
                                                    "\n"}} size={69}/></Col>
                <Col lg={2} className="h-100 d-flex flex-column justify-content-center align-content-center">
                    <p style={{fontSize:"16px", fontWeight:"bold"}} className="m-0 text-center">قیمت</p>
                    <p style={{fontSize:"14px", color:"#707070"}} className="m-0 text-center">{data['get_rial_price']}</p>
                </Col>
                <Col lg={3}>
                    <button className="col-12 btn firstNavButton" style={{fontSize:"16px"}} onClick={() => setModalShow(true)}>ثبت نام</button>
                </Col>
                  <MyVerticallyCenteredModal
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                  />
              </Row>
            </Container>
          </div>
          <div id="first_nav" className="mainFirstNav2" style={{ visibility:"hidden" }}>
            <Container fluid className="h-100">
              <Row className="h-100 d-flex justify-content-around align-items-center">
                <Col lg={3}>
                    <Timer expiryTimestamp={time} style={{width:"20px", fontFamily:"IRANSansXFaNum"}} dataSize={16}/>
                </Col>
                <Col lg={2} className="d-flex align-items-center justify-content-start p-0">
                    <p style={{fontSize:"16px", fontWeight:"bold"}}>تا اتمام ثبت نام</p>
                </Col>
                <Col lg={2} className="d-flex justify-content-center"><CircularProgressWithLabel value={parseInt(data['capcity_Percentage'].slice(0,-1))} style={{color: (100-parseInt(data['capcity_Percentage'].slice(0,-1)))<80?"#45b4c6":"#ff0000\n" +
                                                    "\n"}} size={69}/></Col>
                <Col lg={2} className="h-100 d-flex flex-column justify-content-center align-content-center">
                    <p style={{fontSize:"16px", fontWeight:"bold"}} className="m-0 text-center">قیمت</p>
                    <p style={{fontSize:"14px", color:"#707070"}} className="m-0 text-center">{data['price']} ریال</p>
                </Col>
                <Col lg={3}>
                    <button className="col-12 btn firstNavButton" style={{fontSize:"16px"}} onClick={() => setModalShow(true)}>ثبت نام</button>
                </Col>
                  <MyVerticallyCenteredModal
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                    cost={data['price']}
                    course_id={data['id']}
                  />
              </Row>
            </Container>
          </div>
      </div>
  )
}

export default FirstNav;