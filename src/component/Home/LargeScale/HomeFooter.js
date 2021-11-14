import React from "react";

import Logo from '../../../images/logo.png';
import {FaTelegramPlane} from "react-icons/fa";
import {AiOutlineWhatsApp} from "react-icons/all";
import Aparat from "../../../images/Aparat.png";
import Bale from "../../../images/bale.png";

function HomeFooter() {
  return (
    <div className="pt-2 pb-2 w-100 bg-light border-top">
        <div className="container">
            <div className="col-12 d-flex justify-content-start p-1 mt-2 mb-3">
                <div className="col-4 d-flex flex-column">
                    <div className="col-12 mb-2">
                        <img className="Logo col-2" src={Logo} rel="logo.png"/>
                    </div>
                    <p className="col-12 text-muted">مرکز وکلا، کارشناسان رسمی و مشاوران خانواده قوه قضاییه</p>
                    <div className="col-12 mt-3 mb-1 d-flex justify-content-start">
                        <div className="col-6 d-flex justify-content-around">
                            <i className="fab fa-instagram ml-3"></i>
                            <FaTelegramPlane />
                            <AiOutlineWhatsApp />
                            <img src={Aparat} alt="aparat.png" style={{height:"15px"}}/>
                            <img src={Bale} alt="bale.png" style={{height:"15px"}}/>
                        </div>
                    </div>
                    <p className="col-12 text-muted">در شبکه‌های اجتماعی دنبال کنید</p>
                </div>
                <div className="col-4 mt-2">
                    <p style={{fontWeight:"bold"}}>خدمات</p>
                    <p>وکالت معاضدتی</p>
                    <p>وکالت تسخیری</p>
                    <p>وکالت</p>
                </div>
                <div className="col-3 mt-2">
                    <p style={{fontWeight:"bold"}}>صفحات بینا</p>
                    <p>ارتباط با ما</p>
                    <p>درباره ما</p>
                    <p>قوانین</p>
                    <p>سوالات متداول</p>
                    <p>دانشنامه حقوق عامه</p>
                </div>
            </div>
        </div>
    </div>
  );
}

export default HomeFooter;