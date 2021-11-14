import React from "react";
import './AllCourses.css'
import ActiveCourses from "./ActiveCourses";
import EndCourses from "./EndCourses";

function AllCourses() {

  return (
    <div className="">
      <div className="container h-100">
          <div className="row h-100">
              <ActiveCourses />
              <hr className="col-12" style={{margin:"56px 0"}}/>
              <EndCourses />
          </div>
      </div>
    </div>
  )
}

export default AllCourses;