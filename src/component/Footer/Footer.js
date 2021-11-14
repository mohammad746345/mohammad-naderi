import React from "react";

import './Footer.css';
import Logo from '../../images/logo.png';

function Footer() {
  return (
    <div className="pt-2 pb-2 w-100 bg-light border-top">
        <div className="container">
            <div className="col-12 d-flex justify-content-start p-1 mt-2 mb-3">
                <div className="col-4 d-flex flex-column">
                    <div className="col-12 mb-2">
                        <img className="Logo col-2" src={Logo} rel="logo.png"/>
                    </div>
                    <p className="col-12 text-muted">مرکز وکلا، کارشناسان رسمی و مشاوران خانواده قوه قضاییه</p>
                    <div className="col-12 mt-3">
                        <i className="fab fa-instagram ml-3"></i>
                    </div>
                    <p className="col-12 text-muted">در شبکه‌های اجتماعی دنبال کنید</p>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Footer;