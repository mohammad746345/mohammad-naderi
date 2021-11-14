import React from "react";
import "./PersonCard.css"

import PersonSample from "../../../images/PersonSample.png";
import PersonSample2 from "../../../images/PersonSample2.png"
import {Card, Carousel} from "react-bootstrap";
import {MdShare} from "react-icons/md";
import {BsBookmark} from "react-icons/bs";
import {GrPrevious} from "react-icons/gr";
import {GrNext} from "react-icons/gr";


function PersonCard() {
  return (
      <div className="mainPersonBox">
            <div className="container h-100">
                <div className="row h-100 d-flex flex-column align-items-center justify-content-center">
                    <div className="h-100 col-12 d-flex flex-row align-items-center justify-content-around">


                        <div className="col-6 d-flex flex-column justify-content-around align-items-center">
                              <Card className="col-12 bg-transparent border-0">
                                <Card.Header className="text-center bg-transparent border-0" style={{fontSize: "21px",fontWeight:"bold"}}>وکلای برتر</Card.Header>
                                <Card.Body style={{height:"280px"}} className="col-12 d-flex flex-column justify-content-center align-items-center">
                                    <Carousel className="h-100" fade={true} indicators={false} prevIcon={<GrPrevious size={30}/>} nextIcon={<GrNext size={30}/>} style={{zIndex:"5"}}>

                                        <Carousel.Item className="d-flex justify-content-center">
                                            <Card className="col-9" style={{height:"300px"}}>
                                                <Card.Body className="border-0 d-flex flex-column justify-content-between">
                                                    <div className="col-12 d-flex flex-row justify-content-between" style={{paddingLeft:"2%"}}>
                                                        <div className="col-8">
                                                            <p>آرش معصومی</p>
                                                        </div>
                                                        <div className="col-2 ">
                                                            <img src={PersonSample} alt="Person.png"/>
                                                        </div>
                                                    </div>
                                                    <Card className="col-12 border-0">
                                                        <Card.Title style={{fontSize:"14px"}}>توضیحات وکیل</Card.Title>
                                                        <Card.Text className="col-8 mt-4" style={{fontSize:"12px"}}>
                                                            لورم ایپسوم متن ساختگی با تولید
                                                            سادگی نامفهوم از صنعت چاپ و با استفاده از
                                                            طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله
                                                            در ستون و سطرآنچنان که لازم است
                                                        </Card.Text>
                                                        <Card.Body className="col-12 d-flex flex-row justify-content-between">
                                                            <div className="col-3">
                                                                <a style={{fontSize: "11px"}} href="#">درحواست همکاری</a>
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
                                            <Card className="col-9" style={{height:"300px"}}>
                                                <Card.Body className="border-0 d-flex flex-column justify-content-between">
                                                    <div className="col-12 d-flex flex-row justify-content-between" style={{paddingLeft:"2%"}}>
                                                        <div className="col-8">
                                                            <p>آرش معصومی</p>
                                                        </div>
                                                        <div className="col-2">
                                                            <img src={PersonSample} alt="Person.png"/>
                                                        </div>
                                                    </div>
                                                    <Card className="col-12 border-0">
                                                        <Card.Title style={{fontSize:"14px"}}>توضیحات وکیل</Card.Title>
                                                        <Card.Text className="col-8 mt-4" style={{fontSize:"12px"}}>
                                                            لورم ایپسوم متن ساختگی با تولید
                                                            سادگی نامفهوم از صنعت چاپ و با استفاده از
                                                            طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله
                                                            در ستون و سطرآنچنان که لازم است
                                                        </Card.Text>
                                                        <Card.Body className="col-12 d-flex flex-row justify-content-between">
                                                            <div className="col-3">
                                                                <a style={{fontSize: "11px"}} href="#">درحواست همکاری</a>
                                                            </div>
                                                            <div className="col-2 d-flex flex-row justify-content-around text-success">
                                                                <MdShare />
                                                                <BsBookmark />
                                                            </div>
                                                        </Card.Body>
                                                    </Card>
                                                </Card.Body>
                                            </Card>
                                        </Carousel.Item>


                                       <Carousel.Item className="d-flex justify-content-center">
                                            <Card className="col-9" style={{height:"300px"}}>
                                                <Card.Body className="border-0 d-flex flex-column justify-content-between">
                                                    <div className="col-12 d-flex flex-row justify-content-between" style={{paddingLeft:"2%"}}>
                                                        <div className="col-8">
                                                            <p>آرش معصومی</p>
                                                        </div>
                                                        <div className="col-2">
                                                            <img src={PersonSample} alt="Person.png"/>
                                                        </div>
                                                    </div>
                                                    <Card className="col-12 border-0">
                                                        <Card.Title style={{fontSize:"14px"}}>توضیحات وکیل</Card.Title>
                                                        <Card.Text className="col-8 mt-4" style={{fontSize:"12px"}}>
                                                            لورم ایپسوم متن ساختگی با تولید
                                                            سادگی نامفهوم از صنعت چاپ و با استفاده از
                                                            طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله
                                                            در ستون و سطرآنچنان که لازم است
                                                        </Card.Text>
                                                        <Card.Body className="col-12 d-flex flex-row justify-content-between">
                                                            <div className="col-3">
                                                                <a style={{fontSize: "11px"}} href="#">درحواست همکاری</a>
                                                            </div>
                                                            <div className="col-2 d-flex flex-row justify-content-around">
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
                            <button className="col-4 btn btn-light btnPerson" style={{zIndex:"5"}}>ورود به بخش وکلا</button>
                        </div>

                        <div className="col-6 d-flex flex-column justify-content-around align-items-center">
                            <Card className="col-12 bg-transparent border-0">
                                <Card.Header className="text-center bg-transparent border-0" style={{fontSize: "21px",fontWeight:"bold"}}>کارشناسان برتر</Card.Header>
                                <Card.Body style={{height:"280px"}}>
                                    <Carousel className="h-100" fade={true} indicators={false} prevIcon={<GrPrevious size={30}/>} nextIcon={<GrNext size={30}/>} style={{zIndex:"5"}}>

                                        <Carousel.Item className="d-flex justify-content-center">
                                            <Card className="col-9" style={{height:"300px"}}>
                                                <Card.Body className="border-0 d-flex flex-column justify-content-between">
                                                    <div className="col-12 d-flex flex-row justify-content-between" style={{paddingLeft:"2%"}}>
                                                        <div className="col-8">
                                                            <p>آرش معصومی</p>
                                                        </div>
                                                        <div className="col-2">
                                                            <img src={PersonSample2} alt="Person.png"/>
                                                        </div>
                                                    </div>
                                                    <Card className="col-12 border-0">
                                                        <Card.Title style={{fontSize:"14px"}}>توضیحات وکیل</Card.Title>
                                                        <Card.Text className="col-8 mt-4" style={{fontSize:"12px"}}>
                                                            لورم ایپسوم متن ساختگی با تولید
                                                            سادگی نامفهوم از صنعت چاپ و با استفاده از
                                                            طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله
                                                            در ستون و سطرآنچنان که لازم است
                                                        </Card.Text>
                                                        <Card.Body className="col-12 d-flex flex-row justify-content-between">
                                                            <div className="col-3">
                                                                <a style={{fontSize: "11px"}} href="#">درحواست همکاری</a>
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
                                            <Card className="col-9" style={{height:"300px"}}>
                                                <Card.Body className="border-0 d-flex flex-column justify-content-between">
                                                    <div className="col-12 d-flex flex-row justify-content-between" style={{paddingLeft:"2%"}}>
                                                        <div className="col-8">
                                                            <p>آرش معصومی</p>
                                                        </div>
                                                        <div className="col-2">
                                                            <img src={PersonSample2} alt="Person.png"/>
                                                        </div>
                                                    </div>
                                                    <Card className="col-12 border-0">
                                                        <Card.Title style={{fontSize:"14px"}}>توضیحات وکیل</Card.Title>
                                                        <Card.Text className="col-8 mt-4" style={{fontSize:"12px"}}>
                                                            لورم ایپسوم متن ساختگی با تولید
                                                            سادگی نامفهوم از صنعت چاپ و با استفاده از
                                                            طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله
                                                            در ستون و سطرآنچنان که لازم است
                                                        </Card.Text>
                                                        <Card.Body className="col-12 d-flex flex-row justify-content-between">
                                                            <div className="col-3">
                                                                <a style={{fontSize: "11px"}} href="#">درحواست همکاری</a>
                                                            </div>
                                                            <div className="col-2 d-flex flex-row justify-content-around text-success">
                                                                <MdShare />
                                                                <BsBookmark />
                                                            </div>
                                                        </Card.Body>
                                                    </Card>
                                                </Card.Body>
                                            </Card>
                                        </Carousel.Item>


                                       <Carousel.Item className="d-flex justify-content-center">
                                            <Card className="col-9" style={{height:"300px"}}>
                                                <Card.Body className="border-0 d-flex flex-column justify-content-between">
                                                    <div className="col-12 d-flex flex-row justify-content-between" style={{paddingLeft:"2%"}}>
                                                        <div className="col-8">
                                                            <p>آرش معصومی</p>
                                                        </div>
                                                        <div className="col-2">
                                                            <img src={PersonSample2} alt="Person.png"/>
                                                        </div>
                                                    </div>
                                                    <Card className="col-12 border-0">
                                                        <Card.Title style={{fontSize:"14px"}}>توضیحات وکیل</Card.Title>
                                                        <Card.Text className="col-8 mt-4" style={{fontSize:"12px"}}>
                                                            لورم ایپسوم متن ساختگی با تولید
                                                            سادگی نامفهوم از صنعت چاپ و با استفاده از
                                                            طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله
                                                            در ستون و سطرآنچنان که لازم است
                                                        </Card.Text>
                                                        <Card.Body className="col-12 d-flex flex-row justify-content-between">
                                                            <div className="col-3">
                                                                <a style={{fontSize: "11px"}} href="#">درحواست همکاری</a>
                                                            </div>
                                                            <div className="col-2 d-flex flex-row justify-content-around">
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
                            <button className="col-4 btn btn-light btnPerson" style={{zIndex:"5"}}>ورود به بخش کارشناسان</button>
                        </div>

                    </div>
                </div>
            </div>
      </div>
  )
}

export default PersonCard;