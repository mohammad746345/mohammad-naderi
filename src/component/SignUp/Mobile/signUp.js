import React, {useEffect, useReducer, useState} from "react";
import { Container, Row, Col} from 'react-bootstrap';
import './signUp.css'
import SignUpReducer from "../signUp.reducer";
import {useHistory} from "react-router-dom";
import {phoneNumberValidator, verifyIranianNationalId} from "@persian-tools/persian-tools";
import {Button, FilledInput, FormControl, FormHelperText} from "@mui/material";
import {HiUserAdd} from "react-icons/hi";
import axios from "axios";
import {API_Register} from "../../../constants";
import Logo from "../../../images/logo.png";
import {MdKeyboardArrowLeft} from "react-icons/md"

function SignUp2 () {
  const [state, dispatch] = useReducer(SignUpReducer, {user:'normal', type:'0'})
  const [validated1, setValidated1] = useState(true)
  const [validated2, setValidated2] = useState(true)
  const [nationalId, setNationalId] = useState()
  const [phoneNumber, setPhoneNumber] = useState()
  const history = useHistory()

  const handleChangeNationalId = (e) => {
    setNationalId(e.target.value)
  }

  const handleChangePhoneNumber = (e) => {
    setPhoneNumber(e.target.value)
  }

  useEffect(() => {
    nationalId ? setValidated1(verifyIranianNationalId(nationalId)) : setValidated1(true)
    phoneNumber ? setValidated2(phoneNumberValidator(phoneNumber)) : setValidated2(true)
  },[nationalId, phoneNumber])

  const onSubmit = () => {
    if(nationalId && phoneNumber && validated1 && validated2) {
        axios({
            method: 'post',
            url: `${API_Register}`,
            data: {national_id: nationalId, username: phoneNumber},
        }).then(async () => {
                await localStorage.setItem("SignUp_status", "true")
                history.push(
                    {
                        pathname: "/SignUp2",
                        state: {
                            national_id: nationalId,
                            username: phoneNumber,
                            type: state.type
                        }
                    }
                )
            }
        )
    }}

  return (
    <Container className='h-100' style={{padding:`24px 22px 24px 22px` ,width:`${window.innerWidth-44}px`}}>
      <Row>
        <Col className="d-flex flex-column justify-content-between p-0 shadow rounded">
            <div className="col-12 d-flex flex-column justify-content-between MobileSignUpBackImage">
                <div className="col-12 d-flex flex-row justify-content-between">
                    <img src={Logo} alt={'logo.png'} style={{height:"32px", width:"32px",marginRight:"24px",marginTop:"24px"}}/>
                    <div className="BackArrowOfSignUp" style={{marginTop:"24px", marginLeft:"24px"}} onClick={() => history.push('/')}>
                        انصراف <MdKeyboardArrowLeft size={25}/>
                    </div>
                </div>
                <div className="col-12 d-flex flex-column justify-content-between">
                    <div className="col-12 d-flex flex-column justify-content-between">
                        <p className="m-0 text-center" style={{fontSize:"8px",color:"#0d616e"}}>
                            مطابق اصل ۴۴ قانون اساسی
                        </p>
                        <p className="m-0 text-center" style={{fontSize:"8px",color:"#0d616e"}}>
                            دادخواهی حق مسلم هر فرد است و اصلی‌ترین فلسفه تشکیل قوه قضاییه
                        </p>
                        <p className="m-0 text-center" style={{fontSize:"8px",color:"#0d616e"}}>
                            نیز تضمین حق دادخواهی و تحقق حق مذکور است.
                        </p>
                    </div>
                    <div className="col-12">
                        <p className="m-0 text-center" style={{fontSize:"7px",color:"#00af88", paddingTop:"16px"}}>
                            مرکز وکلا، کارشناسان رسمی و مشاوران قوه قضاییه
                        </p>
                    </div>
                </div>
            </div>
            <div  className="col-12 bg-light d-flex flex-column justify-content-between">
                <p className="col-12 text-center" style={{fontSize:"21px",marginTop:"10px"}}>ثبت نام</p>
                <div className="col-12 d-flex flex-row justify-content-around" style={{marginTop:"4px", marginBottom:"5px",paddingRight:"24px",paddingLeft:"24px"}}>
                    <div className="col-5 d-flex flex-column justify-content-between">
                      <div id="user_lawyer" className={(state.user === 'lawyer')?'signUp1RightTextSelectMobile d-flex align-items-center justify-content-center shadow-sm':'d-flex align-items-center justify-content-center signUp1RightTextMobile shadow-sm'} onClick={() => dispatch({type:'LAWYER'})}>من وکیل هستم</div>
                      <div id="user_expert" className={(state.user === 'expert')?'signUp1RightTextSelectMobile d-flex align-items-center justify-content-center shadow-sm':'d-flex align-items-center justify-content-center signUp1RightTextMobile shadow-sm'} onClick={() => dispatch({type:'EXPERT'})}>من کارشناس هستم</div>
                    </div>
                    <div id="user_normal" style={{height:"56px"}} className={(state.user === 'normal')?"p-0 m-0 col-5 d-flex flex-column align-items-center justify-content-center signUp1LeftTextSelectMobile shadow-sm":"p-0 m-0 col-5 d-flex flex-column align-items-center justify-content-center signUp1LeftTextMobile shadow-sm"} onClick={() => dispatch({type:'NORMAL'})}>
                      <p className="p-0 m-0" style={{fontSize:"10px",fontWeight:"bold"}}>من موکل هستم</p>
                      <p style={{paddingTop:"5px",marginBottom:"0",textAlign: "justify", width:"85px"}}>
                        برای درخواست وکیل آمده‌ام
                      </p>
                    </div>
                </div>
                <p className="col-12 text-center" style={{fontSize:"8px",color:"#303030"}}>
                 انتخاب یکی از این ۳ گزینه به ما به تشخیص خدمات مورد نیاز شما کمک می‌کند
                </p>
                <div className="col-12" style={{paddingRight:"10%",paddingLeft:"10%", marginTop:"32px"}}>
                    <div className="col-12" dir={'rtl'}>
                        <FormControl
                            variant="filled"
                            className="col-12"
                        >
                          {validated1 ?
                              <FilledInput
                                  id="component-filled"
                                  placeholder="کد ملی"
                                  style={{fontFamily: "IRANSansXFaNum", paddingBottom: "3%", height: "48px"}}
                                  onChange={handleChangeNationalId}
                              /> :
                              <FilledInput
                                  error
                                  id="filled-error-helper-text"
                                  placeholder="کد ملی"
                                  style={{fontFamily: "IRANSansXFaNum", paddingBottom: "3%", height: "48px"}}
                                  onChange={handleChangeNationalId}
                              />
                          }
                          {!validated1 && <FormHelperText id="component-error-text" style={{fontFamily:"IRANSansX"}} className="text-danger">کد ملی وارد شده صحیح نیست</FormHelperText>}
                        </FormControl>
                      </div>
                      <div className="col-12" dir={'rtl'} style={{paddingTop:"14px"}}>
                        <FormControl
                            variant="filled"
                            className="col-12"
                        >
                          {validated2 ?
                              <FilledInput
                                  id="component-filled"
                                  placeholder="شماره موبایل"
                                  style={{fontFamily: "IRANSansXFaNum", paddingBottom: "3%", height: "48px"}}
                                  onChange={handleChangePhoneNumber}
                              /> :
                              <FilledInput
                                  error
                                  id="filled-error-helper-text"
                                  placeholder="شماره موبایل"
                                  style={{fontFamily: "IRANSansXFaNum", paddingBottom: "3%", height: "48px"}}
                                  onChange={handleChangePhoneNumber}
                              />
                          }
                          {!validated2 && <FormHelperText id="component-error-text" style={{fontFamily:"IRANSansX"}} className="text-danger">شماره تلفن وارد شده صحیح نیست</FormHelperText>}
                        </FormControl>
                      </div>
                    <Button variant="contained" className="signUp1ButtonMobile d-flex justify-content-around" onClick={onSubmit}>
                        <HiUserAdd size={20}/>ثبت نام
                    </Button>
                      <Col lg={12} className="col-12 d-flex flex-lg-row justify-content-lg-start" style={{ marginTop:"32px",marginBottom:"16px" }}>
                        <p style={{ fontSize:"14px",marginLeft:"5px" }}>قبلا ثبت نام کرده اید؟</p>
                        <a href={'/login'} style={{ textDecoration:"none"}}>ورود</a>
                      </Col>
                </div>
            </div>
        </Col>
      </Row>
    </Container>
  );
}

export default SignUp2;