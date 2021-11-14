import React, {useCallback, useEffect, useMemo, useState} from "react";
import "./LargeHeader.css"
import Logo from '../../images/logo.png';

import { FaBookReader } from "react-icons/fa";
import { FaSignInAlt } from "react-icons/fa";
import { ImBooks } from "react-icons/im";
import {useHistory, useLocation} from "react-router-dom/cjs/react-router-dom";
import {AiOutlineQuestionCircle} from "react-icons/ai";
import {BiSupport} from "react-icons/bi"
import {Image} from "react-bootstrap";
import Profile from "../../images/profile-header.png"
import axios from "axios";
import {API_Refresh_Token, API_Verify_Token} from "../../constants";

function LargeHeader() {
    const [loginState, setLoginState] = useState(false)
    const [btnAboutUsColor, setBtnAboutUsColor] = useState("")
    const [btnCourses, setBtnCourses] = useState("")
    const [btnSupport, setBtnSupport] = useState("")
    const { pathname } = useLocation()
    const history = useHistory()

    useEffect(() => {
        (pathname.toLowerCase() === "/aboutus") ? setBtnAboutUsColor("btn-warning") : setBtnAboutUsColor("");
        (pathname.toLowerCase() === "/allcourses") ? setBtnCourses("btn-warning") : setBtnCourses("");
        (pathname.toLowerCase() === "/support") ? setBtnSupport("btn-warning") : setBtnSupport("");
    },[pathname])

        for (let i = 0; i < 1; i++) {
          axios({
              method: 'post',
              url: `${API_Verify_Token}`,
              data:{token:localStorage.getItem('access')},
            }).then(() => {
                window.loginState = true
                setLoginState(window.loginState)
              }
            ).catch(() => {
                axios({
                    method: 'post',
                    url: `${API_Refresh_Token}`,
                    data: {refresh:localStorage.getItem('refresh')}
                }).then(resp => {
                    localStorage.setItem('access', resp['data']['access'])
                    window.loginState = true
                    setLoginState(window.loginState)
                }).catch(() => {
                    window.loginState = false
                    setLoginState(window.loginState)
                })
            })
    }


    const GoWiki = () => {
        history.push("/wiki")
    }
    const GoSingUp = () => {
        history.push("/login")
    }
    const GoCourses = () => {
        history.push("/AllCourses")
    }
    const GoHome = () => {
        history.push("/")
    }
    const GoAboutUs = () => {
        history.push('/AboutUs')
    }
    const GoSupport = () => {
        history.push('/Support')
    }
  return (
    <div className="main bg-white p-0 m-0">
        <div className="container">
            <div className="row d-flex align-items-center">
                <div className="col-1 d-flex justify-content-center align-items-center">
                    <img className="HeaderLogo" src={Logo} alt="logo.png" onClick={GoHome}/>
                </div>

                <div className="col-8 d-flex justify-content-around">
                    {/*<div className="d-flex justify-content-center">*/}
                    {/*    <button type="button" onClick={GoHome} className={`${btn1Color} btn  btnOfHeader`} style={{width:"104px",fontSize: "11px"}}><FaWhmcs size={15}/> خدمات<MdExpandMore /></button>*/}
                    {/*</div>*/}
                    {/*<div className="d-flex justify-content-center">*/}
                    {/*    <button type="button" className="btn btnOfHeader" style={{width:"141px",fontSize: "11px"}}><FaIdBadge size={15}/> وکلا و کارشناسان<MdExpandMore /></button>*/}
                    {/*</div>*/}
                    <div className="d-flex justify-content-center">
                        <button type="button" onClick={GoCourses} className={`${btnCourses} btn btnOfHeader`} style={{width:"86px",fontSize: "11px"}}><ImBooks size={15}/> دوره ها</button>
                    </div>
                    <div className="d-flex justify-content-center">
                        <button type="button" onClick={GoWiki} className="btn btnOfHeader" style={{width:"159px",fontSize: "11px"}}><FaBookReader size={15}/> دانشنامه حقوق عامه</button>
                    </div>
                    <div className="d-flex justify-content-center">
                        <button type="button" className={`${btnAboutUsColor} btn btnOfHeader`} style={{width:"90px",fontSize: "11px"}} onClick={GoAboutUs}><AiOutlineQuestionCircle size={15}/> درباره ما</button>
                    </div>
                    <div className="d-flex justify-content-center">
                        <button type="button" onClick={GoSupport} className={`${btnSupport} btn btnOfHeader`} style={{width:"92px",fontSize: "11px"}}><BiSupport size={15}/> پشتیبانی</button>
                    </div>
                </div>

                {loginState ?
                    <div className="col-3 d-flex justify-content-end">
                        <div className="col-5 d-flex justify-content-between align-items-center">
                            <b style={{fontSize:"14px"}}>پنل شخصی</b>
                            <Image src={(localStorage.getItem('poster')!== null)?Profile:localStorage.getItem('poster')} roundedCircle style={{height:"44px",width:"44px"}}/>
                        </div>
                    </div>:
                    <div className="col-3 d-flex justify-content-end">
                        <button type="button" onClick={GoSingUp} className="btn btn-warning btnOfHeader"
                                style={{width: "116px", fontSize: "11px"}}><FaSignInAlt size={15}/> ورود / ثبت نام
                        </button>
                    </div>
                }

            </div>
        </div>
    </div>
  );
}

export default LargeHeader;