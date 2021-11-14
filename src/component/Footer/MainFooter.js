import React from "react";

import './Footer.css';
import Logo from '../../images/logo.png';
import Instagram from '../../images/Instagram.svg';
import Telegram from '../../images/telegram_app.svg';
import Bale from '../../images/bale.png'
import {Container, Row} from "react-bootstrap";
import {useHistory} from "react-router-dom";

function Footer() {
    const history = useHistory()

    const GoLogin = () => {
        history.push('/login')
    }
    const GoSignUp = () => {
        history.push('/signUp')
    }
    const GoAboutUs = () => {
        history.push('/AboutUs')
    }
    const GoCourses = () => {
        history.push('/AllCourses')
    }
    const GoSupport = () => {
        history.push('/Support')
    }
  return (
    <div className="mainLargeFooter">
        <Container className="h-100">
            <Row className="h-100">
                <div className="col-lg-12 col-sm-12 h-100 d-lg-flex d-sm-flex flex-sm-column flex-lg-row justify-content-lg-between justify-content-sm-between" style={(window.innerWidth<480)?{paddingTop:"16px", paddingBottom:"23px", paddingRight:"48px"}:{paddingTop:"16px", paddingBottom:"23px"}}>
                    <div className={`col-lg-3 col-sm-12 d-flex flex-column ${(window.innerWidth<500)?"h-25 justify-content-start":"justify-content-between"}`}>
                        <div className="col-12 d-flex flex-column justify-content-between">
                            <div className="col-12 d-flex justify-content-start">
                                <div className="d-flex justify-content-center align-items-center bg-white" style={{height:"48px", width:"48px", borderRadius:"50%", marginBottom:"4px"}}>
                                    <img src={Logo} alt="logo.png" style={{height:"36px", width:"36px"}}/>
                                </div>
                            </div>
                            <p className="col-10 text-white" style={{fontSize:"14px"}}>
                                در این قسمت توضیح مختصری از سامانه بینا در چند خط کوتاه داده می‌شود
                            </p>
                        </div>
                        <div className="col-12 d-flex justify-content-start">
                            <div className="col-4 d-flex justify-content-between">
                                <img src={Instagram} alt="instagram.svg" style={{width:"18px"}}/>
                                <img src={Telegram} alt="telegram.svg" style={{width:"18px"}}/>
                                <img src={Bale} alt="bale.png" style={{width:"18px"}}/>
                            </div>
                        </div>
                    </div>
                    <div className={`col-lg-3 col-sm-12 d-flex flex-column justify-content-center ${(window.innerWidth<500)&& "h-25"}`}>
                        <div className="col-10 d-flex flex-column justify-content-between">
                            <p className="mainLargeFooterTopics" onClick={GoAboutUs}>
                                درباره ما
                            </p>
                            <p className="mainLargeFooterTopics" onClick={GoSupport}>
                                پشتیبانی
                            </p>
                            <p className="mainLargeFooterTopics">
                                معرفی وکلا و کارشناسان
                            </p>
                        </div>
                    </div>
                    <div className={`col-lg-3 col-sm-12 d-flex flex-column justify-content-center ${(window.innerWidth<500)&& "h-25"}`}>
                        <div className="col-10 d-flex flex-column justify-content-start">
                            <div className="col-8 d-flex flex-column justify-content-between">
                                <p className="mainLargeFooterTopics" onClick={GoCourses}>
                                    دوره ها
                                </p>
                                <p className="mainLargeFooterTopics">
                                    خدمات
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className={`col-lg-3 col-sm-12 d-flex flex-column justify-content-center ${(window.innerWidth<500)&& "h-25"}`}>
                        <div className="col-10 d-flex flex-column justify-content-start">
                            <div className="col-8 d-flex flex-column justify-content-between">
                                <p className="mainLargeFooterTopics" onClick={GoSignUp}>
                                    ثبت نام
                                </p>
                                <p className="mainLargeFooterTopics" onClick={GoLogin}>
                                    ورود
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </Row>
        </Container>
    </div>
  );
}

export default Footer;