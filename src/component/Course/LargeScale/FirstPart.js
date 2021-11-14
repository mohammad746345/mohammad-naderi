import React, {useEffect, useState} from "react";
import "../Course.css";
import {Container} from "@mui/material";
import {Col, Row} from "react-bootstrap";
import {MdKeyboardArrowLeft} from "react-icons/md"
import {useHistory} from "react-router-dom";

function FirstPart({ data }) {
    const [title, setTitle] = useState('')
    const history = useHistory()

    useEffect(() => {
        if(data){
            setTitle(data['title'])
        }
    }, [data])

    const GoHome = () => {
        history.push("/")
    }
  return (
      <div className="mainFirstPart">
        <Container fluid className="h-100">
          <Row className="h-100">
            <Col lg={8} className="firstPartTitle d-flex flex-row justify-content-center align-items-end">{title}</Col>
            <Col lg={4} className="d-flex justify-content-center align-items-center goHome" onClick={GoHome}><p className="m-0 p-0">بازگشت به صفحه اصلی  </p><MdKeyboardArrowLeft size={30} /></Col>
          </Row>
        </Container>
      </div>
  )
}

export default FirstPart;