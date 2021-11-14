import React from "react";
import './SearchBox.css'
import Logo from '../../images/logo.png'

import Search from "../Search/Search";

function SearchBox() {
  return (
    <div className="Back BackImage">
        <div className="container">
            <div className="row">
                <div className="col-12 d-flex flex-column justify-content-around align-content-center">
                    <div className="col-12 d-flex justify-content-center mt-5">
                        <img className="col-lg-2 col-md-4 col-sm-5 p-3 mt-5 Logo_search" src={Logo} alt="logo.png"/>
                    </div>
                    <div className="col-12 mt-3 d-flex justify-content-center">
                        <div className="col-8">
                            <Search />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SearchBox;