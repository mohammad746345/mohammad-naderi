import React from "react";
import  { Breakpoint } from 'react-socks';

import LargeSignUp from './Large/signUp2'
import MobileSignUp from './Mobile/signUp2'

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
};

export default baseSignUp;