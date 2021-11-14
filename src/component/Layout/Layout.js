import React, {useEffect, useState} from "react";
import Header from "../Header/WikiHeader";
import Footer from "../Footer/Footer";

import LargeHeader from "../Header/LargeHeader";
import MainFooter from "../Footer/MainFooter";

import MobileHeader from "../Header/MobileHeader";

import {useLocation} from "react-router-dom/cjs/react-router-dom";
import  { Breakpoint } from 'react-socks';

function Layout({children}) {
    const { pathname } = useLocation()

    if(pathname === "/")
    {
        return (
            <div>
                <div>
                    <Breakpoint large up>
                        <LargeHeader/>
                    </Breakpoint>
                    <Breakpoint small down>
                        <MobileHeader />
                    </Breakpoint>
                </div>
                <div>
                    {children}
                </div>
                <MainFooter />
            </div>
        )
    }else if(pathname.toLowerCase().slice(0,7) === "/course") {
        return (
            <div>
                <Breakpoint large up>
                    <LargeHeader/>
                </Breakpoint>
                <Breakpoint small down>
                    <MobileHeader />
                </Breakpoint>
                <div>
                    {children}
                </div>
                <MainFooter />
            </div>
        )
    }else if(pathname.toLowerCase() === "/signup" || pathname.toLowerCase() === "/signup2" || pathname.toLowerCase() === "/login" || pathname.toLowerCase() === "/login2"){
        return (
            <div>
                {children}
            </div>
        )
    }else if(pathname.toLowerCase() === "/aboutus" || pathname.toLowerCase() === "/allcourses" || pathname.toLowerCase() === "/support"){
        return (
            <div>
                <Breakpoint large up>
                    <LargeHeader />
                </Breakpoint>
                <Breakpoint small down>
                    <MobileHeader />
                </Breakpoint>
                {children}
                <MainFooter />
            </div>
        )
    }else {
            return (
                <div>
                    <Header />
                    {children}
                    <Footer />
                </div>
            );
        }
}

export default Layout;