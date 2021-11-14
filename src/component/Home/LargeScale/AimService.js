import React from "react";
import "./AimService.css"
import {Card} from "react-bootstrap";

function AimService() {
  return (
      <div className="aimService shadow-sm">
            <div className="container h-100">
                <div className="row h-100">
                    <div className="col-4 aimBox bg-warning d-flex flex-column align-items-center justify-content-center">
                        <Card className="col-10 bg-transparent border-0">
                            <Card.Title style={{fontSize:"21px"}}>وکالت معاضدتی</Card.Title>
                                <Card.Text className="mt-4" style={{fontSize:"19px",textAlign: "justify"}}>    لورم ایپسوم متن ساختگی با تولید سادگی
                                    نامفهوم از صنعت چاپ، و با استفاده از طراحان
                                    گرافیک است، چاپگرها و متون بلکه روزنامه و مجل
                                    در ستون و سطرآنچنان که لازم است
                                    و برای شرایط فعلی
                                </Card.Text>
                        </Card>
                        <button className="btn btn-light col-3 mt-5 text-dark" disabled>مشاهده</button>
                    </div>
                </div>
            </div>
      </div>
  )
}

export default AimService;