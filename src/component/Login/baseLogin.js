import React from "react";
import  { Breakpoint } from 'react-socks';

import LargeLogin from './Large/Login'
import MobileLogin from './Mobile/Login'

const baseLogin = () => {
  return (
      <div>
        <Breakpoint large up>
            <LargeLogin />
        </Breakpoint>
        <Breakpoint small down>
            <MobileLogin />
        </Breakpoint>
      </div>
  );
};

export default baseLogin;