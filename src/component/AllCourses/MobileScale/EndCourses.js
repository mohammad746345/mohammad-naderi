import React, {useEffect, useState} from "react";
import {useHistory} from "react-router-dom";
import axios from "axios";
import {API_Course_List_all} from "../../../constants";
import {Button, Card, Carousel} from "react-bootstrap";
import {MdKeyboardArrowLeft, MdKeyboardArrowRight} from "react-icons/md";
import './AllCourses.css'
import ReactLoading from "react-loading";

function EndCourses() {
    const [endCourses, setEndCourses] = useState() //active
    const [endCarouselItems, setEndCarouselItems] = useState()
    const history = useHistory()

    useEffect(() => {
        axios({
            method: 'get',
            url: `${API_Course_List_all}?status=end`,
        }).then(resp => {
                setEndCourses(resp.data)
                endCourses && setEndCarouselItems(endCourses.map((item) =>
                        <Carousel.Item key={item['id']} className="h-100" dir={'rtl'}>
                            <div className="col-12 d-flex justify-content-center">
                                <Card style={{height: "148px", width: "243px", borderRadius: "10px"}}>
                                    <Card.Body className="h-100 p-0">
                                        <div className="cardImageHomeCoursesMobileScale d-flex flex-column justify-content-start" dir={'rtl'}>
                                            <p>{item['title']}</p>
                                            <p>{item['get_rial_price']}</p>
                                        </div>
                                        <Button className="btnAllCoursesMobileScale col-12" onClick={() => history.push({pathname:`/course/${item['id']}/`, state:{id:`${item['id']}`}})} disabled>تموم شده</Button>
                                    </Card.Body>
                                </Card>
                            </div>
                        </Carousel.Item>
                    ))

            }
        );
    },[!endCourses])

  return (
    <div>
        <Card className="col-12 h-100 bg-transparent border-0" style={{marginBottom:"24px"}}>
            <Card.Header className="col-12 d-flex bg-transparent border-0"
                         style={{fontSize: "16px", fontWeight: "bold",paddingRight: "9%"}}>دوره
                های در حال ثبت نام({endCourses && endCourses.length}دوره)</Card.Header>
            <Card.Body dir={'ltr'}>
                {endCarouselItems ?
                    <div className="h-100 d-flex justify-content-center">
                        <Carousel
                            className="col-12"
                            indicators={false}
                            nextIcon={endCarouselItems.length < 2?"":<MdKeyboardArrowRight className="text-black" size={40}/>}
                            prevIcon={endCarouselItems.length < 2?"":<MdKeyboardArrowLeft className="text-black" size={40}/>}
                        >
                            {endCarouselItems}
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

export default EndCourses;