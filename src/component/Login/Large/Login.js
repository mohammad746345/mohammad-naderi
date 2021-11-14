import React, {useEffect, useState} from "react";
import { Container, Row, Col} from 'react-bootstrap';
import { FaSms } from 'react-icons/fa';
import axios from "axios"
import {Redirect, useHistory} from "react-router-dom";
import {API_Login} from "../../../constants";
import "./login.css"
import {Button, FormControl, FormHelperText, Input} from "@mui/material";
import { verifyIranianNationalId } from "@persian-tools/persian-tools"
import Logo from "../../../images/logo.png";
import {MdKeyboardArrowLeft} from "react-icons/md";


const Login = () => {
  const [submitted, setSubmitted] = useState(false);
  const [data, setData] = useState('')
  const [validated, setValidated] = useState(true)
  const history = useHistory()

  const InputLogin = (e) => {
    setData(e.target.value)
  }

  useEffect(() => {
    data ? setValidated(verifyIranianNationalId(data)) : setValidated(true)
  },[data])

  const onSubmit = () => {
    if(data && validated) {
      axios({
        method: 'post',
        url: `${API_Login}`,
        data: {national_id:data},
      }).then(async () => {
            await localStorage.setItem("Login_status", "true")
            history.push(
                {
                  pathname:"login2",
                  state: data
                }
            )
          }
      )
    }
  };


  return (
    <Container className='h-100' style={{marginTop:`${(window.innerHeight-667)/2}px`}}>
      <Row>
        <Col lg={12} sm={12} className="d-flex flex-row justify-content-between shadow-lg p-0" style={{ height:"667px" }}>
          <div className="col-5 d-flex flex-column justify-content-between" style={{ paddingLeft:"7%",paddingRight:"7%",paddingBottom:"7%" }}>
            <div className="col-12 d-flex justify-content-start">
              <img src={Logo} alt={'logo.png'} style={{height:"48px", width:"48px",marginTop:"47px"}}/>
            </div>

            <Col lg={12} className="d-flex flex-column justify-content-between">
              <p className="col-12 d-flex justify-content-start" style={{ fontSize:"21px",fontWeight:"bold",color:"#094049",marginBottom:"10px" }}>ورود</p>
              <div className="col-12" dir='rtl'>
                <FormControl
                    variant="filled"
                    className="col-12"
                >
                  {validated?
                    <Input
                        id="component-filled"
                        className="bg-light border-0 rounded-0 col-12 form-control d-flex align-items-center"
                        style={{height: "48px", fontFamily: "IRANSansXFaNum", paddingBottom: "1%"}}
                        placeholder="کد ملی"
                        onChange={InputLogin}
                    />:
                    <Input
                        error
                        id="filled-error-helper-text"
                        className="bg-light border-0 rounded-0 col-12 form-control d-flex align-items-center"
                        style={{height: "48px", fontFamily: "IRANSansXFaNum", paddingBottom: "1%"}}
                        placeholder="کد ملی"
                        onChange={InputLogin}
                    />
                  }
                    {!validated &&
                        <FormHelperText id="component-error-text" className="text-danger"
                                        style={{fontFamily: "IRANSansXFaNum"}}>کد ملی باید 10 رقم صحیح
                          باشد.</FormHelperText>
                    }

                  <Button type="submit" variant="contained" className="buttonOfLogin1 d-flex justify-content-between" style={{ marginTop:"30px"}} onClick={onSubmit}><FaSms/> دریافت کد ورود</Button>
                </FormControl>
              </div>
              <Col lg={12} className="col-12 d-flex flex-row justify-content-start" style={{ marginTop:"50px" }}>
                <p style={{ fontSize:"14px",marginLeft:"5px" }}>ثبت نام نکرده اید؟</p>
                <a href={'/signUp'} style={{ textDecoration:"none"}}>ثبت نام</a>
              </Col>
            </Col>
          </div>

          <div className="col-7 cardLogin d-flex flex-column justify-content-between">
            <div className="BackArrowOfSignUp d-flex justify-content-end" style={{marginTop:"47px", marginLeft:"7%"}} onClick={() => history.push('/')}>
                انصراف <MdKeyboardArrowLeft size={25}/>
            </div>

            <Col lg={12} sm={12} className="d-flex flex-column">
              <p className="pb-0 mb-0 col-12 text-center" style={{ fontSize:"12px",color:"#0d616e" }}>
                مطابق اصل ۴۴ قانون اساسی دادخواهی حق مسلم هر فرد است
              </p>
              <p className="pt-0 mt-0 col-12 text-center" style={{ fontSize:"12px",color:"#0d616e" }}>
                و اصلی‌ترین فلسفه تشکیل قوه قضاییه نیز تضمین حق دادخواهی و تحقق حق مذکور است.
              </p>
              <p className="col-12 text-center" style={{ fontSize:"9px",color:"#00af88", marginBottom:"50px" }}>
                مرکز وکلا، کارشناسان رسمی و مشاوران قوه قضاییه
              </p>
            </Col>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;