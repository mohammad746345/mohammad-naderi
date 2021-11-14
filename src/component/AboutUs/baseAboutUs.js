import React, {useEffect} from "react";
import  { Breakpoint } from 'react-socks';

import AboutUsLarge from "./LargeScale/AboutUs";
import AboutUsMobile from "./MobileScale/AboutUs";
import Authentication from "../Authentication/Authentication";

function BaseAboutUs() {
    useEffect(() => {
        Authentication()
    })

  return (
      <div>
        <Breakpoint large up>
            <AboutUsLarge />
        </Breakpoint>
        <Breakpoint small down>
            <AboutUsMobile />
        </Breakpoint>
      </div>
  )
}

export default BaseAboutUs;
