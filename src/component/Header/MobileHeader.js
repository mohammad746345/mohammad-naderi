import React, {useEffect, useState} from "react";
import Sidebar from "react-sidebar";
import "./Header.css"

import { MdReorder } from "react-icons/md"
import { useHistory } from "react-router-dom";
import {Button, Col, Image} from "react-bootstrap";
import Logo from "../../images/logo.png"
import {FaBookReader, FaIdBadge, FaWhmcs} from "react-icons/fa";
import {ImBooks} from "react-icons/im";
import {BiMessageRoundedError, BiSupport} from "react-icons/bi";
import {MdExitToApp} from "react-icons/md";
import {AiOutlineClose, AiOutlineQuestionCircle} from "react-icons/ai"
import Profile from "../../images/profile-header.png";

function MobileHeader () {
    const [loginState, setLoginState] = useState('false')
    const [sidebarOpen, setSidebarOpen] = useState(false)
    const history = useHistory()

    useEffect(() => {
        setLoginState(window.loginState)
    },[window.loginState])

    const onSetSidebarOpen = (open) => {
        setSidebarOpen(open);
    }
    const GoLogin = () => {
        history.push('/login')
    }
    const GoAboutUs = () => {
        history.push('/AboutUs')
    }
    const GoCourses = () => {
        history.push('/AllCourses')
    }
    const GoWiki = () => {
        history.push('/wiki')
    }
    const GoHome = () => {
        history.push('/')
    }
    const GoSupport = () => {
        history.push('/Support')
    }
    const sidebar_content = (
        <div className="h-100 d-flex flex-column justify-content-start">
            <div className="col-12 d-flex justify-content-end" style={{paddingTop:"2%", paddingLeft:"2%"}}>
                <AiOutlineClose onClick={() => onSetSidebarOpen(false)} className="sidebarCloseButtonMobile"/>
            </div>
            <Col lg={12} className="d-flex justify-content-center mb-4" style={{ marginTop:"60px" }}>
                <img src={Logo} alt="logo.png" style={{ height:"90px", width:"90px"}} className="HeaderLogo" onClick={GoHome}/>
            </Col>
            <Col lg={12} className="text-center" style={{ fontSize:"16px", fontWidth:"bold" }}>
                {/*<b>نام کاربر</b>*/}
            </Col>
            <Col lg={12} className="mt-3 d-flex flex-column justify-content-between" style={{ height:"130px", marginBottom:"93px"}}>
                {/*<Button variant="outline-info" onClick={GoHome} className="border-0 d-flex justify-content-start align-items-center sidebarButtonMobile" style={{height:"32px", fontSize: "11px", marginRight:"5%", marginLeft:"5%"}}><div className="col-12 d-flex justify-content-start text-dark sidebarButtonMobile"><FaWhmcs style={{ marginLeft:"10%"}} size={15}/><span>خدمات</span></div></Button>*/}
                {/*<Button variant="outline-info" className="border-0 d-flex justify-content-start align-items-center sidebarButtonMobile" style={{height:"32px", fontSize: "11px", marginRight:"5%", marginLeft:"5%"}}><div className="col-12 d-flex justify-content-start text-dark sidebarButtonMobile"><FaIdBadge style={{ marginLeft:"10%"}} size={15}/><span>معرفی وکلا و کارشناسان</span></div></Button>*/}
                <Button variant="outline-info" onClick={GoCourses} className="border-0 d-flex justify-content-start align-items-center sidebarButtonMobile" style={{height:"32px", fontSize: "11px", marginRight:"5%", marginLeft:"5%"}}><div className="col-12 d-flex justify-content-start text-dark sidebarButtonMobile"><ImBooks style={{ marginLeft:"10%"}} size={15}/><span>دوره ها</span></div></Button>
                <Button variant="outline-info" onClick={GoWiki} className="border-0 d-flex justify-content-start align-items-center sidebarButtonMobile" style={{height:"32px", fontSize: "11px", marginRight:"5%", marginLeft:"5%"}}><div className="col-12 d-flex justify-content-start text-dark sidebarButtonMobile"><FaBookReader style={{ marginLeft:"10%"}} size={15}/><span>دانشنامه حقوق عامه</span></div></Button>
                <Button variant="outline-info" onClick={GoAboutUs} className="border-0 d-flex justify-content-start align-items-center sidebarButtonMobile" style={{height:"32px", fontSize: "11px", marginRight:"5%", marginLeft:"5%"}}><div className="col-12 d-flex justify-content-start text-dark sidebarButtonMobile"><AiOutlineQuestionCircle style={{ marginLeft:"10%"}} size={15}/><span>درباره ما</span></div></Button>
                <Button variant="outline-info" onClick={GoSupport} className="border-0 d-flex justify-content-start align-items-center sidebarButtonMobile" style={{height:"32px", fontSize: "11px", marginRight:"5%", marginLeft:"5%"}}><div className="col-12 d-flex justify-content-start text-dark sidebarButtonMobile"><BiSupport style={{ marginLeft:"10%"}} size={15}/><span>پشتیبانی</span></div></Button>
            </Col>
            <div className="border-top mb-1" style={{ marginRight:"10%", marginLeft:"10%", height:"1%" }}/>
            <Col className="mt-0" style={{ marginRight:"5%", marginLeft:"5%" }}>
                <Button variant="outline-danger" className="col-12 border-0 d-flex justify-content-start align-items-center exitButtonMobile" style={{fontSize: "11px", height:"32px"}}><div className="col-12 d-flex justify-content-start"><MdExitToApp style={{ marginLeft:"10%"}} size={15}/><span>خروج</span></div></Button>
            </Col>
        </div>
    )

    return (
        <div className="mainMobileHeader">
            <Sidebar
                shadow={true}
                pullRight={true}
                sidebar={sidebar_content}
                open={sidebarOpen}
                onSetOpen={onSetSidebarOpen}
                styles={{ sidebar: { background: "white", width:"180px", zIndex:"110", position:"fixed" }, content:{ position:"fixed", zIndex:"100", backgroundColor:"white", height:"56px" } }}
                // sidebarClassName="bg-danger"
            >
                <div className="col-12 d-flex flex-row justify-content-between align-items-center">
                    <button className="btn btn-white mt-2 mb-2"  onClick={() => onSetSidebarOpen(true)}>
                      <MdReorder size={30}/>
                    </button>
                    {loginState ?
                        <div className="col-5 d-flex justify-content-end">
                            <div className="col-12 d-flex justify-content-between align-items-center">
                                <b style={{fontSize: "14px"}}>پنل شخصی</b>
                                <Image
                                    src={(localStorage.getItem('poster') !== null) ? Profile : localStorage.getItem('poster')}
                                    roundedCircle style={{height: "44px", width: "44px", marginLeft:"24px"}}/>
                            </div>
                        </div> :
                        <button className="col-3 btn btn-warning mt-2 mb-2 pt-1 pb-1"
                                style={{color: "#332800", fontSize: "11px", marginLeft: "5%", height: "32px"}}
                                onClick={GoLogin}>
                            ورود / ثبت نام
                        </button>
                    }
                </div>
            </Sidebar>
        </div>

    );
  }

export default MobileHeader;