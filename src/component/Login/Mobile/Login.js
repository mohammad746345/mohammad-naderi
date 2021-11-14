import React, {useEffect, useState} from "react";
import { Container, Row, Col} from 'react-bootstrap';
import { FaSms } from 'react-icons/fa';
import axios from "axios"
import {Redirect, useHistory} from "react-router-dom";
import {API_Login} from "../../../constants";
import "./MobileLogin.css"
import {Button, FormControl, FormHelperText, Input} from "@mui/material";
import { verifyIranianNationalId } from "@persian-tools/persian-tools";
import BackImage from '../../../images/v916-nunny-635-mobile.png';
import Logo from "../../../images/logo.png";
import {MdKeyboardArrowLeft} from "react-icons/md";


function Login () {
  const [submitted, setSubmitted] = useState(false);
  const [data, setData] = useState('')
  const [validated, setValidated] = useState(true);
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

  // for(const [key, value] of Object.entries(test)){
  //   console.log(key, value);
  // }

  return (
    <Container className='h-100' style={{padding:`24px 22px 24px 22px` ,width:`${window.innerWidth-44}px`}}>
      <Row>
        <Col className="d-flex flex-column justify-content-between p-0 shadow rounded">
          <div className="col-12 d-flex justify-content-start LoginMobileBackImage">
            <div className="col-12 d-flex justify-content-between">
              <img src={Logo} alt={'logo.png'} style={{height:"32px", width:"32px",marginRight:"24px",marginTop:"24px"}}/>
              <div className="BackArrowOfSignUp" style={{marginTop:"24px", marginLeft:"24px"}} onClick={() => history.push('/')}>
                  انصراف <MdKeyboardArrowLeft size={25}/>
              </div>
            </div>
          </div>

          <div className="col-12 LoginMobileBackText d-flex flex-column justify-content-between">
            <div className="col-12 text-center d-flex flex-column justify-content-center" style={{fontSize:"8px", color:"#0d616e"}}>
              <p className="mb-0">
                مطابق اصل ۴۴ قانون اساسی
              </p>
              <p className="mb-0">
                دادخواهی حق مسلم هر فرد است و اصلی‌ترین فلسفه تشکیل قوه قضاییه
              </p>
              <p>
                نیز تضمین حق دادخواهی و تحقق حق مذکور است.
              </p>
            </div>
            <div className="col-12 text-center" style={{fontSize:"7px", color:"#00af88"}}>
              <p>
                مرکز وکلا، کارشناسان رسمی و مشاوران قوه قضاییه
              </p>
            </div>
          </div>

          <div className="col-12 d-flex flex-column justify-content-between" style={{height:"261px", padding:"0 27px 36px 27px", marginTop:"59px"}} dir='rtl'>
              <p className="col-12 d-flex justify-content-lg-start" style={{ fontSize:"17px",fontWeight:"bold",color:"#094049",marginBottom:"10px" }}>ورود</p>
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
              <Col lg={12} className="col-12 d-flex flex-lg-row justify-content-lg-start" style={{ marginTop:"50px" }}>
                <p style={{ fontSize:"14px",marginLeft:"5px" }}>قبلا ثبت نام نکرده اید؟</p>
                <a href={'/signUp'} style={{ textDecoration:"none"}}>ثبت نام</a>
              </Col>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Login;