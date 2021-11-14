import React, {useEffect} from "react";
import  { Breakpoint } from 'react-socks';

import ServiceLarge from "./LargeScale/Service";
import AimServiceLarge from "./LargeScale/AimService";
import InformLarge from "./LargeScale/Inform";
// import PersonCardLarge from "./LargeScale/PersonCard";
import CoursesLarge from "./LargeScale/Courses";

import ServiceMobile from "./MobileScale/Service";
import AimServiceMobile from "./MobileScale/AimService";
import InformMobile from "./MobileScale/Inform";
// import PersonCardMobile from "./MobileScale/PersonCard";
import CoursesMobile from "./MobileScale/Course";

import Authentication from "../Authentication/Authentication";

function Home() {
    useEffect(() => {
        Authentication()
    })

  return (
      <div>
        <Breakpoint large up>
            <CoursesLarge />
            <AimServiceLarge />
            <ServiceLarge />
            <InformLarge />
        </Breakpoint>
        <Breakpoint small down>
            <ServiceMobile />
            <AimServiceMobile />
            <CoursesMobile />
            <InformMobile />
        </Breakpoint>
      </div>
  )
}

export default Home;
