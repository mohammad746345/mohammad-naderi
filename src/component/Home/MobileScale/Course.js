import React, {useEffect, useState} from 'react';
import './HomeMobile.css'
import {Button, Card, Carousel} from "react-bootstrap";
import CircularProgressWithLabel from "../../CircularProgressWithLabel/CircularProgressWithLabel";
import Timer from "../../Timer/Timer";
import axios from "axios";
import {API_Course_List_all} from "../../../constants";
import {useHistory} from "react-router-dom";
import {MdKeyboardArrowLeft, MdKeyboardArrowRight} from "react-icons/md";

function Course(){
    const [allCourses, setAllCourses] = useState()
    const [carouselItems, setCarouselItems] = useState()
    const history = useHistory()
    let time_list = []

    const setTimer = (id, t) => {
        const time = new Date();
        time.setSeconds(time.getSeconds() +t)
        time_list.push([id, time])
    }

    useEffect(() => {
        axios({
            method: 'get',
            url: `${API_Course_List_all}/?status=all`,
        }).then(resp => {
                setAllCourses(resp.data)
            console.log(resp.data)
                allCourses && allCourses.map((item) => setTimer(item['id'], item['secend_date']['end_date']))
                allCourses && setCarouselItems(allCourses.map((item) =>
                        <Carousel.Item className="col-12" key={item['id']}>
                                <div className="col-12 d-flex justify-content-center">
                                    <Card className="bg-transparent border-0" style={{ width:"244px", height:"148px"}}>
                                        <Card.Body className="h-100 p-0">
                                            <div className="cardHomeMobileCourse d-flex flex-column justify-content-between" dir={'rtl'}>
                                                <div>{item['title']}</div>
                                                <div>{item['get_rial_price']}</div>
                                            </div>
                                            <Button className="col-12 cardButtonHomeCourseMobile" onClick={() => history.push({pathname:`/course/${item['id']}/`, state:{id:`${item['id']}`}})}>مشاهده دوره</Button>
                                        </Card.Body>
                                    </Card>
                                </div>
                            </Carousel.Item>
                    ))
            }
        );
    },[!allCourses])

    return(
        <div className="mainHomeMobileCourses shadow">
            <div className="container h-100">
                <div className="row h-100">
                    <div className="h-100 d-flex justify-content-center">
                        <Card className="col-12 bg-transparent border-0">
                            <Card.Header className="text-center border-0 bg-transparent" style={{ fontSize:"20px", fontWeight:"bold" }}>دوره های آموزشی</Card.Header>
                            <Card.Body className="col-12">
                                <Carousel
                                    className="col-12"
                                    indicators={false}
                                    nextIcon={<MdKeyboardArrowRight className="text-dark" size={35}/>}
                                    prevIcon={<MdKeyboardArrowLeft className="text-dark" size={35}/>}
                                >
                                    {carouselItems}
                                </Carousel>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Course;