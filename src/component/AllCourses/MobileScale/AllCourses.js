import React from "react";
import './AllCourses.css'
import ActiveCourses from "./ActiveCourses";
import EndCourses from "./EndCourses";
function AllCourses() {

  return (
    <div>
      <div className="container h-100">
          <div className="row h-100">
              <ActiveCourses />
              <div className="col-12 d-flex justify-content-center">
                  <hr className="col-10" style={{margin:"25px 0"}}/>
              </div>
              <EndCourses />
          </div>
      </div>
    </div>
  )
}

export default AllCourses;