import React from "react";
import  { Breakpoint } from 'react-socks';

import LargeLogin from './Large/Login2'
import MobileLogin from './Mobile/Login2'

const baseLogin2 = () => {
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

export default baseLogin2;