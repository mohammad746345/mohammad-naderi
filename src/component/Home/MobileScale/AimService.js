import React from "react";
import "./HomeMobile.css"
import {Button, Card} from "react-bootstrap";

function AimService() {
  return (
      <div className="mainHomeMobileAimService shadow-sm">
            <div className="container h-100">
                <div className="row h-100 d-flex justify-content-center">
                    <Card className="col-10 h-100 bg-transparent border-0">
                      <Card.Body className="d-flex flex-column justify-content-center align-items-start">
                        <Card.Title style={{ fontSize:"12px", fontWeight:"bold",marginBottom:"16px"}}>لورم ایپسوم</Card.Title>
                        <Card.Text style={{ fontSize:"11px",marginBottom:"16px"}}>
                              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجل در ستون و سطرآنچنان که لازم است و برای شرایط فعلی
                        </Card.Text>
                          <div className="col-12 d-flex justify-content-center">
                              <Button className="col-6 text-white mt-2 d-flex align-items-center justify-content-center btnHomeMobileAimService" style={{ fontSize:"11px", backgroundColor:"#00aeef", borderColor:"#00aeef", height:"24px"}} disabled>مشاهده</Button>
                          </div>
                      </Card.Body>
                    </Card>
                </div>
            </div>
      </div>
  )
}

export default AimService;