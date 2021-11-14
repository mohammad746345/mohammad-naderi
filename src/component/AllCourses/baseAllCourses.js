import React, {useEffect} from "react";
import  { Breakpoint } from 'react-socks';

import AllCoursesLarge from "./LargeScale/AllCourses";
import AllCoursesMobile from "./MobileScale/AllCourses";
import Authentication from "../Authentication/Authentication";

function BaseAllCourses() {
    useEffect(() => {
        Authentication()
    })

  return (
      <div className="bg-light">
        <Breakpoint large up>
            <AllCoursesLarge />
        </Breakpoint>
        <Breakpoint small down>
            <AllCoursesMobile />
        </Breakpoint>
      </div>
  )
}

export default BaseAllCourses;
