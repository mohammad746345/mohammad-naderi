import React from "react";
import  { Breakpoint } from 'react-socks';

import LargeSignUp from './Large/signUp'
import MobileSignUp from './Mobile/signUp'

function baseSignUp(){
  return (
      <div>
        <Breakpoint large up>
            <LargeSignUp />
        </Breakpoint>
        <Breakpoint small down>
            <MobileSignUp />
        </Breakpoint>
      </div>
  );
}

export default baseSignUp;