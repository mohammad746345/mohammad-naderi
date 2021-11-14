import React, {useEffect, useState} from "react";
import {useHistory} from "react-router-dom";
import axios from "axios";
import {API_Course_List_all} from "../../../constants";
import {Button, Card, Carousel} from "react-bootstrap";
import {MdKeyboardArrowLeft, MdKeyboardArrowRight} from "react-icons/md";
import './AllCourses.css'
import ReactLoading from "react-loading";

function ActiveCourses() {
    const [activeCourses, setActiveCourses] = useState() //active
    const [activeCarouselItems, setActiveCarouselItems] = useState()
    const history = useHistory()

    useEffect(() => {
        axios({
            method: 'get',
            url: `${API_Course_List_all}?status=open`,
        }).then(resp => {
                setActiveCourses(resp.data)
                activeCourses && setActiveCarouselItems(activeCourses.map((item) =>
                        <Carousel.Item key={item['id']} className="h-100 d-flex justify-content-center align-items-center" dir={'rtl'}>
                            <div className="col-12 d-flex justify-content-center">
                                <Card style={{height: "148px", width: "243px", borderRadius: "10px"}}>
                                    <Card.Body className="h-100 p-0">
                                        <div className="cardImageHomeCoursesMobileScale d-flex flex-column justify-content-start" dir={'rtl'}>
                                            <p>{item['title']}</p>
                                            <p>{item['get_rial_price']}</p>
                                        </div>
                                        <Button className="btnAllCoursesMobileScale col-12" onClick={() => history.push({pathname:`/course/${item['id']}/`, state:{id:`${item['id']}`}})}>مشاهده دوره</Button>
                                    </Card.Body>
                                </Card>
                            </div>
                        </Carousel.Item>
                    ))
            }
        );
    },[!activeCourses])

  return (
    <div>
        <Card className="col-12 h-100 bg-transparent border-0">
            <Card.Header className="col-12 d-flex bg-transparent border-0"
                         style={{fontSize: "16px", fontWeight: "bold", marginTop: "24px", paddingRight: "9%"}}>دوره
                های در حال ثبت نام({activeCourses && activeCourses.length}دوره)</Card.Header>
            <Card.Body dir={'ltr'}>
                {activeCarouselItems ?
                    <div className="h-100 d-flex justify-content-center">
                        <Carousel
                            className="col-12"
                            indicators={false}
                            nextIcon={activeCarouselItems.length < 2?"":<MdKeyboardArrowRight className="text-black" size={40}/>}
                            prevIcon={activeCarouselItems.length < 2?"":<MdKeyboardArrowLeft className="text-black" size={40}/>}
                        >
                            {activeCarouselItems}
                        </Carousel>
                    </div>:
                      (<div className="col-12 d-flex justify-content-center align-content-center" style={{paddingBottom:"10%"}}>
                          <ReactLoading type={'bubbles'} color={'#00aeef'} className="loadingComp" width={100}/>
                      </div>)
                }
            </Card.Body>
        </Card>
    </div>
  )
}

export default ActiveCourses;