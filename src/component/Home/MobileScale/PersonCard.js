import React from "react";
import "./HomeMobile.css"

import PersonSample from "../../../images/PersonSample.png";
import {Button, Card, Carousel} from "react-bootstrap";
import {MdShare} from "react-icons/md";
import {BsBookmark} from "react-icons/bs";
import {GrPrevious} from "react-icons/gr";
import {GrNext} from "react-icons/gr";


function PersonCard() {
  return (
      <div className="mainHomeMobilePersonCard">
            <div className="container h-100">
                <div className="row h-100">
                    <div className="h-100 col-12 d-flex flex-column align-items-center justify-content-center">
                         <Card className="col-12 bg-transparent border-0">
                            <Card.Header className="text-center bg-transparent border-0" style={{fontSize: "21px",fontWeight:"bold"}}>وکلای برتر</Card.Header>
                            <Card.Body className="col-12 d-flex flex-column justify-content-center align-items-center">
                                <Carousel className="h-100" fade={true} indicators={false} prevIcon={<GrPrevious size={30}/>} nextIcon={<GrNext size={30}/>} style={{zIndex:"5"}}>

                                    <Carousel.Item className="d-flex justify-content-center">
                                        <Card style={{height:"280px", width:"300px"}}>
                                            <Card.Body className="border-0 d-flex flex-column justify-content-between">
                                                <div className="col-12 d-flex flex-row justify-content-between" style={{paddingLeft:"2%"}}>
                                                    <div className="col-7">
                                                        <b style={{ fontSize:"16px" }}>آرش معصومی</b>
                                                    </div>
                                                    <div className="col-3">
                                                        <img src={PersonSample} alt="Person.png"/>
                                                    </div>
                                                </div>
                                                <Card className="col-12 border-0">
                                                    <Card.Title style={{fontSize:"14px"}}>توضیحات وکیل</Card.Title>
                                                    <Card.Text className="col-8" style={{fontSize:"12px"}}>
                                                        لورم ایپسوم متن ساختگی با تولید
                                                        سادگی نامفهوم از صنعت چاپ و با استفاده از
                                                        طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله
                                                        در ستون و سطرآنچنان که لازم است
                                                    </Card.Text>
                                                    <Card.Body className="col-12 d-flex flex-row justify-content-between">
                                                        <div className="col-4">
                                                            <a style={{fontSize: "11px"}} href="#">درخواست همکاری</a>
                                                        </div>
                                                        <div className="col-2 d-flex flex-row justify-content-around text-info">
                                                            <MdShare />
                                                            <BsBookmark />
                                                        </div>
                                                    </Card.Body>
                                                </Card>
                                            </Card.Body>
                                        </Card>
                                    </Carousel.Item>

                                    <Carousel.Item className="d-flex justify-content-center">
                                        <Card style={{height:"280px", width:"300px"}}>
                                            <Card.Body className="border-0 d-flex flex-column justify-content-between">
                                                <div className="col-12 d-flex flex-row justify-content-between" style={{paddingLeft:"2%"}}>
                                                    <div className="col-7">
                                                        <b style={{ fontSize:"16px" }}>آرش معصومی</b>
                                                    </div>
                                                    <div className="col-3">
                                                        <img src={PersonSample} alt="Person.png"/>
                                                    </div>
                                                </div>
                                                <Card className="col-12 border-0">
                                                    <Card.Title style={{fontSize:"14px"}}>توضیحات وکیل</Card.Title>
                                                    <Card.Text className="col-8" style={{fontSize:"12px"}}>
                                                        لورم ایپسوم متن ساختگی با تولید
                                                        سادگی نامفهوم از صنعت چاپ و با استفاده از
                                                        طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله
                                                        در ستون و سطرآنچنان که لازم است
                                                    </Card.Text>
                                                    <Card.Body className="col-12 d-flex flex-row justify-content-between">
                                                        <div className="col-4">
                                                            <a style={{fontSize: "11px"}} href="#">درخواست همکاری</a>
                                                        </div>
                                                        <div className="col-2 d-flex flex-row justify-content-around text-info">
                                                            <MdShare />
                                                            <BsBookmark />
                                                        </div>
                                                    </Card.Body>
                                                </Card>
                                            </Card.Body>
                                        </Card>
                                    </Carousel.Item>


                                   <Carousel.Item className="d-flex justify-content-center">
                                        <Card style={{height:"280px", width:"300px"}}>
                                            <Card.Body className="border-0 d-flex flex-column justify-content-between">
                                                <div className="col-12 d-flex flex-row justify-content-between" style={{paddingLeft:"2%"}}>
                                                    <div className="col-7">
                                                        <b style={{ fontSize:"16px" }}>آرش معصومی</b>
                                                    </div>
                                                    <div className="col-3">
                                                        <img src={PersonSample} alt="Person.png"/>
                                                    </div>
                                                </div>
                                                <Card className="col-12 border-0">
                                                    <Card.Title style={{fontSize:"14px"}}>توضیحات وکیل</Card.Title>
                                                    <Card.Text className="col-8" style={{fontSize:"12px"}}>
                                                        لورم ایپسوم متن ساختگی با تولید
                                                        سادگی نامفهوم از صنعت چاپ و با استفاده از
                                                        طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله
                                                        در ستون و سطرآنچنان که لازم است
                                                    </Card.Text>
                                                    <Card.Body className="col-12 d-flex flex-row justify-content-between">
                                                        <div className="col-4">
                                                            <a style={{fontSize: "11px"}} href="#">درخواست همکاری</a>
                                                        </div>
                                                        <div className="col-2 d-flex flex-row justify-content-around text-info">
                                                            <MdShare />
                                                            <BsBookmark />
                                                        </div>
                                                    </Card.Body>
                                                </Card>
                                            </Card.Body>
                                        </Card>
                                    </Carousel.Item>

                                </Carousel>
                            </Card.Body>
                        </Card>
                        <Button variant="light" className="col-4 mb-2 shadow-sm" style={{height:"32px", fontSize:"10px"}}>ورود به بخش وکلا</Button>
                    </div>
                </div>
            </div>
      </div>
  )
}

export default PersonCard;