import React,{useEffect, useReducer, useState} from "react";
import { phoneNumberValidator, verifyIranianNationalId } from "@persian-tools/persian-tools"
import axios from "axios"
import "./signUp.css"
import { Container, Row, Col} from 'react-bootstrap';
import { HiUserAdd } from 'react-icons/hi';
import {API_Register} from "../../../constants";
import {Button, FilledInput, FormControl, FormHelperText} from "@mui/material";
import { useHistory } from "react-router-dom";
import SignUpReducer from "../signUp.reducer";
import Logo from "../../../images/logo.png";
import {MdKeyboardArrowLeft} from "react-icons/md";


const SignUp = () => {
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
        data: {national_id:nationalId, username:phoneNumber},
      }).then(async () => {
            await localStorage.setItem("SignUp_status", "true")
            history.push(
                {
                  pathname:"/SignUp2",
                  state:{
                    national_id: nationalId,
                    username: phoneNumber,
                    type: state.type
                  }
                }
            )
          }
      )
    }
  };

    return (
    <Container className='h-100' style={{marginTop:`${(window.innerHeight-667)/2}px`}}>
      <Row>
        <Col lg={12} sm={12} className="d-flex flex-lg-row flex-sm-column-reverse flex-xs-column-reverse justify-content-between shadow-lg p-0" style={{ height:"667px" }}>

          <div className="col-5 d-flex flex-column justify-content-between" style={{paddingRight:"69px",paddingLeft:"69px"}}>
            <div className="col-12 d-flex justify-content-start">
              <img src={Logo} alt={'logo.png'} style={{height:"48px", width:"48px",marginTop:"47px"}}/>
            </div>
            <div className="col-12 d-flex flex-column justify-content-between">
              <p className="col-12 text-center" style={{fontSize:"21px"}}>ثبت نام</p>
              <p className="col-12 text-center" style={{fontSize:"10px",color:"#303030"}}>
                انتخاب یکی از این ۳ گزینه به ما به تشخیص خدمات مورد نیاز شما کمک می‌کند
              </p>
              <div className="col-12 d-flex flex-row justify-content-center" style={{marginTop:"33.5px", marginBottom:"24px"}}>
                <div className="col-5 d-flex flex-column justify-content-between">
                  <div id="user_lawyer" className={(state.user === 'lawyer')?'signUp1RightTextSelect d-flex align-items-center justify-content-center shadow-sm':'d-flex align-items-center justify-content-center signUp1RightText shadow-sm'} onClick={() => dispatch({type:'LAWYER'})}>من وکیل هستم</div>
                  <div id="user_expert" className={(state.user === 'expert')?'signUp1RightTextSelect d-flex align-items-center justify-content-center shadow-sm':'d-flex align-items-center justify-content-center signUp1RightText shadow-sm'} onClick={() => dispatch({type:'EXPERT'})}>من کارشناس هستم</div>
                </div>
                <div id="user_normal" className={(state.user === 'normal')?"p-0 m-0 h-100 col-5 d-flex flex-column align-items-center justify-content-center signUp1LeftTextSelect shadow-sm":"p-0 m-0 h-100 col-5 d-flex flex-column align-items-center justify-content-center signUp1LeftText shadow-sm"} onClick={() => dispatch({type:'NORMAL'})}>
                  <p className="p-0 m-0" style={{fontSize:"10px",fontWeight:"bold"}}>من موکل هستم</p>
                  <p style={{width:"90px",paddingTop:"5px",marginBottom:"0",textAlign: "justify"}}>
                    برای درخواست وکیل یا کارشناس آمده‌ام
                  </p>
                </div>
              </div>
              <div className="col-12" dir={'rtl'}>
                <FormControl
                    variant="filled"
                    className="col-12"
                >
                  {validated1 ?
                      <FilledInput
                          id="component-filled"
                          className="bg-light"
                          placeholder="کد ملی"
                          style={{fontFamily: "IRANSansXFaNum", paddingBottom: "3%", height: "48px"}}
                          onChange={handleChangeNationalId}
                      /> :
                      <FilledInput
                          error
                          id="filled-error-helper-text"
                          className="bg-light"
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
                          className="bg-light"
                          placeholder="شماره موبایل"
                          style={{fontFamily: "IRANSansXFaNum", paddingBottom: "3%", height: "48px"}}
                          onChange={handleChangePhoneNumber}
                      /> :
                      <FilledInput
                          error
                          id="filled-error-helper-text"
                          className="bg-light"
                          placeholder="شماره موبایل"
                          style={{fontFamily: "IRANSansXFaNum", paddingBottom: "3%", height: "48px"}}
                          onChange={handleChangePhoneNumber}
                      />
                  }
                  {!validated2 && <FormHelperText id="component-error-text" style={{fontFamily:"IRANSansX"}} className="text-danger">شماره تلفن وارد شده صحیح نیست</FormHelperText>}
                </FormControl>
              </div>
              <Button variant="contained" className="signUp1Button d-flex justify-content-around" onClick={onSubmit}>
                <HiUserAdd />ثبت نام
              </Button>
              <Col lg={12} className="col-12 d-flex flex-lg-row justify-content-lg-start" style={{ marginTop:"20px",marginBottom:"51px" }}>
                <p style={{ fontSize:"14px",marginLeft:"5px" }}>قبلا ثبت نام کرده اید؟</p>
                <a href={'/login'} style={{ textDecoration:"none"}}>ورود</a>
              </Col>
            </div>
          </div>

          <div className="col-7 cardLogin d-flex flex-column justify-content-between">
            <div className="BackArrowOfSignUp d-flex justify-content-end" style={{marginTop:"47px", marginLeft:"7%"}} onClick={() => history.push('/')}>
                انصراف <MdKeyboardArrowLeft size={25}/>
            </div>

            <div className="d-flex flex-lg-column flex-sm-column">
              <p className="pb-0 mb-0 col-12 text-center" style={{ fontSize:"12px",color:"#0d616e" }}>
                مطابق اصل ۴۴ قانون اساسی دادخواهی حق مسلم هر فرد است
              </p>
              <p className="pt-0 mt-0 col-12 text-center" style={{ fontSize:"12px",color:"#0d616e" }}>
                و اصلی‌ترین فلسفه تشکیل قوه قضاییه نیز تضمین حق دادخواهی و تحقق حق مذکور است.
              </p>
              <p className="col-12 text-center" style={{ fontSize:"9px",color:"#00af88", marginBottom:"50px" }}>
                مرکز وکلا، کارشناسان رسمی و مشاوران قوه قضاییه
              </p>
            </div>
          </div>

        </Col>
      </Row>
    </Container>
    )

};

export default SignUp;







