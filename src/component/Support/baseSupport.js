import React, {useEffect} from "react";
import  { Breakpoint } from 'react-socks';

import SupportLarge from "./LargeScale/Support";
import SupportMobile from  "./MobileScale/Support"
import Authentication from "../Authentication/Authentication";

function BaseAboutUs() {
    useEffect(() => {
        Authentication()
    })

  return (
      <div>
        <Breakpoint large up>
            <SupportLarge />
        </Breakpoint>
        <Breakpoint small down>
            <SupportMobile />
        </Breakpoint>
      </div>
  )
}

export default BaseAboutUs;
