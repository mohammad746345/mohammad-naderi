import React, {useEffect, useState} from "react";
import "./HomeMobile.css"
import {Card, Carousel} from "react-bootstrap";

import ConnectivityAndHelpSVG from "../../../images/connectivity_and_help.svg";
import CourtSVG from "../../../images/court.svg";
import Lawyer2 from "../../../images/lawyer2.svg";
import {GrNext, GrPrevious} from "react-icons/gr"
import axios from "axios";
import {API_Service_List} from "../../../constants";

function Service() {
    const [services, setServices] = useState([])
    const [servicesItem, setServicesItem] = useState([])

    useEffect(() => {
      axios({
        method: 'get',
        url: `${API_Service_List}`
      }).then(resp => {
            setServices(resp.data)
            console.log(services)
          }
      );
    },[!services])

    useEffect(() => {
        services && setServicesItem(services.map((item) =>
              <Carousel.Item bsPrefix="carousel-item col-12" key={item['id']}>
                  <div className="col-12 d-flex justify-content-center">
                   <Card className="col-3 d-flex flex-column justify-content-between Boxes" style={{height:"250px", width:"242px",marginLeft:"2%"}}>
                        <div className="d-flex align-items-center justify-content-around mt-4">
                            <Card.Img variant="top" src={item['images']} style={{width:"34px", height:"41px"}}/>
                        </div>

                        <Card.Title className="text-center" style={{fontSize:"14px"}}>{item['title']}</Card.Title>
                        <Card.Text style={{fontSize:"10px",paddingRight:"10%", paddingLeft:"10%", textAlign: "justify"}}>
                            <div dangerouslySetInnerHTML={{ __html: item['text'] }} />
                        </Card.Text>
                        <div className="col-12 d-flex justify-content-center mb-3">
                            <button className="col-6 btn btn-warning btnOfBox" style={{fontSize:"9px"}} disabled>درخواست وکیل</button>
                        </div>

                    </Card>
                  </div>
              </Carousel.Item>
        ))
    },[services])


  return (
      <div className="mainHomeMobileService">
            <div className="container h-100">
                <div className="row h-100">
                    <div className="col-12 h-100 d-flex justify-content-center align-items-center">
                        <Card className="col-12 h-100 border-0 bg-transparent">
                            <Card.Header className="col-12 d-flex justify-content-center bg-transparent border-0" style={{fontWeight:"bold", fontSize:"21px"}}>خدمات</Card.Header>
                            <Card.Body className="col-12">
                                <Carousel className="col-12" indicators={false} nextIcon={<GrNext />} prevIcon={<GrPrevious />}>
                                  {/*<Carousel.Item bsPrefix="carousel-item col-12">*/}
                                  {/*    <div className="col-12 d-flex justify-content-center">*/}
                                  {/*     <Card className="col-3 d-flex flex-column justify-content-between Boxes" style={{height:"250px", width:"242px",marginLeft:"2%"}}>*/}
                                  {/*          <div className="d-flex align-items-center justify-content-around mt-4">*/}
                                  {/*              <Card.Img variant="top" src={ConnectivityAndHelpSVG} style={{width:"34px", height:"41px"}}/>*/}
                                  {/*          </div>*/}

                                  {/*          <Card.Title className="text-center" style={{fontSize:"14px"}}>وکالت معاضدتی</Card.Title>*/}
                                  {/*          <Card.Text style={{fontSize:"10px",paddingRight:"10%", paddingLeft:"10%", textAlign: "justify"}}>*/}
                                  {/*                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است*/}
                                  {/*          </Card.Text>*/}
                                  {/*          <div className="col-12 d-flex justify-content-center mb-3">*/}
                                  {/*              <button className="col-6 btn btn-warning btnOfBox" style={{fontSize:"9px"}}>درخواست وکیل</button>*/}
                                  {/*          </div>*/}

                                  {/*      </Card>*/}
                                  {/*    </div>*/}
                                  {/*</Carousel.Item>*/}
                                  {/*<Carousel.Item bsPrefix="carousel-item col-12">*/}
                                  {/*    <div className="col-12 d-flex justify-content-center">*/}
                                  {/*      <Card className="col-3 d-flex flex-column justify-content-between Boxes" style={{height:"250px", width:"242px",marginLeft:"2%"}}>*/}
                                  {/*          <div className="d-flex align-items-center justify-content-around mt-4 mb-1">*/}
                                  {/*              <Card.Img variant="top" src={CourtSVG} style={{width:"34px", height:"34px"}}/>*/}
                                  {/*          </div>*/}

                                  {/*          <Card.Title className="text-center" style={{fontSize:"14px"}}>وکالت تسخیری</Card.Title>*/}
                                  {/*          <Card.Text style={{fontSize:"10px",paddingRight:"10%", paddingLeft:"10%", textAlign: "justify"}}>*/}
                                  {/*                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است*/}
                                  {/*          </Card.Text>*/}
                                  {/*          <div className="col-12 d-flex justify-content-center mb-3">*/}
                                  {/*              <button className="col-6 btn btn-warning btnOfBox" style={{fontSize:"9px"}}>درخواست وکیل</button>*/}
                                  {/*          </div>*/}

                                  {/*      </Card>*/}
                                  {/*    </div>*/}
                                  {/*</Carousel.Item>*/}
                                  {/*<Carousel.Item bsPrefix="carousel-item col-12">*/}
                                  {/*    <div className="col-12 d-flex justify-content-center">*/}
                                  {/*      <Card className="col-3 d-flex flex-column justify-content-between Boxes" style={{height:"250px", width:"242px",marginLeft:"2%"}}>*/}
                                  {/*          <div className="d-flex align-items-center justify-content-around mt-4 mb-1">*/}
                                  {/*              <Card.Img variant="top" src={Lawyer2} style={{width:"34px", height:"33px"}}/>*/}
                                  {/*          </div>*/}

                                  {/*          <Card.Title className="text-center" style={{fontSize:"14px"}}>وکالت</Card.Title>*/}
                                  {/*          <Card.Text style={{fontSize:"10px",paddingRight:"10%", paddingLeft:"10%", textAlign: "justify"}}>*/}
                                  {/*                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است*/}
                                  {/*          </Card.Text>*/}
                                  {/*          <div className="col-12 d-flex justify-content-center mb-3">*/}
                                  {/*              <button className="col-6 btn btn-warning btnOfBox" style={{fontSize:"9px"}}>درخواست وکیل</button>*/}
                                  {/*          </div>*/}

                                  {/*      </Card>*/}
                                  {/*    </div>*/}
                                  {/*</Carousel.Item>*/}
                                    {servicesItem}
                                </Carousel>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </div>
      </div>
  )
}

export default Service;