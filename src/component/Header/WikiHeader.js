import React from "react";
import {Link} from "react-router-dom";
import { Button } from 'react-bootstrap';
import './Header.css'
import {AiFillHome} from "react-icons/ai";

function WikiHeader() {
  return (
    <div className="pt-2 pb-2 w-100 bg-light border-bottom">
        <div className="container">
            <div className="col-12 d-flex justify-content-between p-1">
                <div className="col-lg-4 col-md-6 col-sm-10 d-flex justify-content-around">
                    <Link to="/">
                        <div className="pt-1">
                            <AiFillHome className="text-warning"/>
                        </div>
                    </Link>
                    <Link to="/support">
                        <Button className="btn btn-light">پشتیبانی</Button>
                    </Link>
                    <Link to="/contact">
                        <Button className="btn btn-light">تماس با ما</Button>
                    </Link>
                    <Link to="/announcement">
                        <Button className="btn btn-danger">اطلاعیه ها</Button>
                    </Link>
                </div>
            </div>
        </div>
    </div>
  );
}

export default WikiHeader;