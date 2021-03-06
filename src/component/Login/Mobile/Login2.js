import React, { useState , useEffect} from "react";
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import {Link, useLocation, useHistory} from 'react-router-dom';
import axios from "axios"
import {Container, Row, Col, Alert} from 'react-bootstrap';
import { RiLoginBoxLine } from 'react-icons/ri';
import ReactCodeInput from "react-code-input";
import {API_Login} from "../../../constants";
import {Button} from "@mui/material";
import BackImage from "../../../images/v916-nunny-635-mobile.png";
import Logo from "../../../images/logo.png";
import {MdKeyboardArrowLeft} from "react-icons/md";
import Timer from "../../AuthenticationTimer/Timer";
import setLocalStorage from "../../setLocalStorage";


const Login2 = () => {
    const [alertShow, setAlertShow] = useState(false)
    const [alertText, setAlertText] = useState('')
    const [isPinCodeValid, setIsPinCodeValid] = useState(true);
    const [pinCode, setPinCode] = useState("");
    const [btnIsPressed, setBtnIsPressed] = useState(false);
    const history = useHistory()
    const {state} = useLocation()

    const handlePinChange = pinCode => {
        setPinCode(pinCode);
        setBtnIsPressed(false);
    };

    const GoBack = () => {
        localStorage.removeItem("Login_status")
        history.push('/login')
    }

    const validationSchema = Yup.object().shape({
        token: Yup.string().max(6),
    });

    const {
        handleSubmit,
        formState: { errors }
    } = useForm({
        resolver: yupResolver(validationSchema)
    });

    const onSubmit = () => {
        axios({
          method: 'put',
          url: `${API_Login}`,
          data:{national_id:state, token:pinCode},
          }).then(resp => {
              setIsPinCodeValid(true)
              history.push('/')
              setLocalStorage(resp)
              }
          ).catch(err => {
              setIsPinCodeValid(false)
              setAlertText(err.response.data['msg'])
              setAlertShow(true)
              window.loginState = false
        })
    };

    let time_duration = 1000;
    const [counter, setCounter] = useState(time_duration);
    useEffect(() => {
        const timer =
        counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
        return () => clearInterval(timer);
    }, [counter]);

    const time = new Date()
    time.setSeconds(time.getSeconds() + time_duration)

    return (
    <Container className='h-100' style={{padding:`24px 22px 24px 22px` ,width:`${window.innerWidth-44}px`}}>
      <Row>
        <Col className="d-flex flex-column justify-content-between p-0 shadow">
          <div className="col-12 d-flex justify-content-start LoginMobileBackImage">
            <div className="col-12 d-flex justify-content-between">
              <img src={Logo} alt={'logo.png'} style={{height:"32px", width:"32px",marginRight:"24px",marginTop:"24px"}}/>
              <div className="BackArrowOfSignUp" style={{marginTop:"24px", marginLeft:"24px"}} onClick={GoBack}>
                  ?????????? ?????????? <MdKeyboardArrowLeft size={25}/>
              </div>
            </div>
          </div>

          <div className="col-12 LoginMobileBackText d-flex flex-column justify-content-between">
            <div className="col-12 text-center d-flex flex-column justify-content-center" style={{fontSize:"8px", color:"#0d616e"}}>
              <p className="mb-0">
                ?????????? ?????? ???? ?????????? ??????????
              </p>
              <p className="mb-0">
                ???????????????? ???? ???????? ???? ?????? ?????? ?? ??????????????????? ?????????? ?????????? ?????? ????????????
              </p>
              <p>
                ?????? ?????????? ???? ???????????????? ?? ???????? ???? ?????????? ??????.
              </p>
            </div>
            <div className="col-12 text-center" style={{fontSize:"7px", color:"#00af88"}}>
              <p>
                ???????? ?????????? ?????????????????? ???????? ?? ?????????????? ?????? ????????????
              </p>
            </div>
          </div>

          <div className="col-12 d-flex flex-column justify-content-between" style={{height:"261px", padding:"0 27px 36px 27px", marginTop:"19px"}} dir='rtl'>
              <p className="col-12 d-flex justify-content-lg-start" style={{ fontSize:"21px",fontWeight:"bold",color:"#094049",marginBottom:"21px" }}>?????????? ????????</p>
              <div className="col-12" dir='rtl'>
                  <form onSubmit={handleSubmit(onSubmit)} className="col-12">
                    <div dir={'ltr'} className="form-group col-12 d-flex justify-content-end">
                        <ReactCodeInput
                              className="reactCodeInput col-12 d-flex flex-row justify-content-center"
                              id="pinCode"
                              type='text'
                              isValid={isPinCodeValid}
                              fields={6}
                              onChange={handlePinChange}
                              value={pinCode}
                              inputStyle={{
                                fontFamily: 'IRANSansXFaNum',
                                margin:  '4px',
                                MozAppearance: 'textfield',
                                borderRadius: '3px',
                                width: '36px',
                                fontSize: '21px',
                                height: '48px',
                                backgroundColor: '#f6f6f6',
                                border: 'none',
                                boxShadow:"0 3px 4px 0 rgba(0, 0, 0, 0.16)",
                                textAlign:"center"
                              }}
                              inputStyleInvalid={{
                                fontFamily: 'IRANSansXFaNum',
                                margin:  '4px',
                                MozAppearance: 'textfield',
                                borderRadius: '3px',
                                width: '36px',
                                fontSize: '21px',
                                height: '48px',
                                backgroundColor: '#f6f6f6',
                                border: '1px solid red',
                                textAlign:"center",
                                color: 'red',
                                boxShadow:"0 3px 4px 0 rgba(0, 0, 0, 0.16)",
                              }}
                            />
                        <p style={{color:"red", fontFamily:"IRANSansX"}}>{!isPinCodeValid && btnIsPressed && "???? ???????????? ???????? ????????"}</p>
                    </div>
                    <div className="col-12 h-100 d-flex justify-content-between align-items-center" style={{ marginBottom:"24px"}}>

                      {counter <= 0
                          ? <Button type="submit" variant="contained" className="buttonOfLogin1 d-flex justify-content-between" style={{ marginTop:"24px"}}  disabled>
                            <RiLoginBoxLine /> ?????????? ???? ????????
                            </Button>
                          :  <Button type="submit" variant="contained" className="buttonOfLogin1 d-flex justify-content-between" style={{ marginTop:"24px"}} >
                            <RiLoginBoxLine /> ?????????? ???? ????????
                          </Button>
                      }

                      <div className="d-flex align-items-center justify-content-around h-100">
                        {counter <= 0
                            ? <span>
                            <Link className="text-decoration-none" to="Signup">
                             <span style={{color: "#0053a2",fontSize:'14px',marginRight: "38px",marginTop:"30px"}}> ?????????? ???????????? ????  </span>
                            </Link>
                            </span>

                            : <span className="ml-5" style={{fontSize:'14px',marginRight: "10px",marginTop:"30px"}}  color='textSecondary'><Timer expiryTimestamp={time} dataSize={12} /></span>
                        }
                      </div>


                    </div>
                  </form>
                </div>
          </div>
        </Col>
        {alertShow &&
            <Alert variant="danger" onClose={() => setAlertShow(false)} className="alertMobileScaleLogin d-flex flex-row align-items-center" dismissible>
                <Alert.Heading style={{fontSize:"14px"}}>{alertText}</Alert.Heading>
            </Alert>
        }
      </Row>
    </Container>
    );
};

export default Login2;