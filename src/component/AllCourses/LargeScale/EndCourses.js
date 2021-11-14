import React, {useEffect, useState} from "react";
import {useHistory} from "react-router-dom";
import axios from "axios";
import {API_Course_List_all} from "../../../constants";
import {Button, Card} from "react-bootstrap";
import CircularProgressWithLabel from "../../CircularProgressWithLabel/CircularProgressWithLabel";
import Timer from "../../Timer/Timer";
import Carousel from "react-multi-carousel";
import {MdKeyboardArrowLeft, MdKeyboardArrowRight} from "react-icons/md";
import './AllCourses.css'
import ReactLoading from "react-loading";

function EndCourses() {
    const responsive = {
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 2,
        slidesToSlide: 1 // optional, default to 1.
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
        slidesToSlide: 2 // optional, default to 1.
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        slidesToSlide: 1 // optional, default to 1.
      }
    };

    const [endCourses, setEndCourses] = useState() //active
    const [endCarouselItems, setEndCarouselItems] = useState()
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
            url: `${API_Course_List_all}?status=end`,
        }).then(resp => {
                setEndCourses(resp.data)
                endCourses && endCourses.map((item) => setTimer(item['id'], item['secend_date']['end_date']))
                endCourses && setEndCarouselItems(endCourses.map((item) =>
                        <div key={item['id']} className="h-100 d-flex justify-content-center align-items-center" dir={'rtl'}>
                            <Card style={{height: "366px", width: "448px", borderRadius: "10px"}}>
                                <Card.Body className="h-100 p-0">
                                    <div className="cardImageHomeCourses" dir={'rtl'}>
                                        {item['title']}
                                    </div>
                                    <div className="col-12 d-flex flex-column justify-content-around" style={{padding:"26px 16px 16px 16px", height:"131px"}}>
                                        <div className="col-12 d-flex flex-row justify-content-start">
                                            <p className="allCourseCardsTextTitle">
                                                تاریخ برگزاری:
                                            </p>
                                            <p className="allCourseCardsText">
                                                {item['get_div_date']}
                                            </p>
                                        </div>
                                        <div className="col-12 d-flex flex-row justify-content-start">
                                            <p className="allCourseCardsTextTitle col-2">
                                                اساتید دوره:
                                            </p>
                                            <p className="allCourseCardsText d-flex flex-row">
                                                {item['teacher'].length > 2?
                                                    <div className="col-12 d-flex flex-row">
                                                        <p>
                                                            {item['teacher'][0]['name']} ,
                                                        </p>
                                                        <p >
                                                             {item['teacher'][1]['name']} , ...
                                                        </p>
                                                    </div>:
                                                    item['teacher'].length !== 1?
                                                        <div className="col-12 d-flex flex-row">
                                                            <p>
                                                                 {item['teacher'][0]['name']} -
                                                            </p>
                                                            <p>
                                                                {item['teacher'][1]['name']}
                                                            </p>
                                                        </div>:
                                                        <div className="col-12 d-flex flex-row">
                                                            <p>
                                                                 {item['teacher'][0]['name']}
                                                            </p>
                                                        </div>
                                                    }
                                            </p>
                                        </div>
                                        <div className="col-12 d-flex flex-row justify-content-start">
                                            <p className="allCourseCardsTextTitle">
                                                هزینه دوره:
                                            </p>
                                            <p className="allCourseCardsText">
                                                {item['get_rial_price']}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="col-12 d-flex flex-row bg-light" style={{height:"76px"}}>
                                        <Button className="cardButtonHomeCourses col-5" onClick={() => history.push({pathname:`/course/${item['id']}/`, state:{id:`${item['id']}`}})} disabled>تمام شده</Button>
                                        <div className="col-7 d-flex flex-row justify-content-around align-items-center" dir={'rtl'}>
                                            <div className="col-4" style={{paddingRight: "10%"}}>
                                                <CircularProgressWithLabel value={parseInt(item['capcity_Percentage'].slice(0,-1))} style={{color: (100-parseInt(item['capcity_Percentage'].slice(0,-1)))<80?"#45b4c6":"#ff0000\n" +
                                                        "\n"}} size={60}/>
                                            </div>
                                            <div className="col-8 d-flex flex-column justify-content-center">
                                                <p className="col-12 text-center" style={{fontSize: "12px", fontWeight: "bold"}}>تا
                                                    اتمام ثبت نام</p>
                                                <Timer expiryTimestamp={time_list.find(i => i[0]===item['id'])[1]} style={{width: "194px"}} dataSize={10}/>
                                            </div>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </div>
                    ))

            }
        );
    },[!endCourses])

  return (
    <div>
      <Card className="col-12 h-100 bg-transparent border-0" style={{marginBottom:"60px"}}>
          <Card.Header className="col-12 d-flex bg-transparent border-0" style={{fontSize:"23px", fontWeight:"bold", paddingRight:"9%"}}>دوره های برگزار شده({endCourses && endCourses.length}دوره)</Card.Header>
          <Card.Body dir={'ltr'}>
                {endCarouselItems ?
                    (endCarouselItems.length > 1?
                    <Carousel
                        swipeable={true}
                        draggable={true}
                        showDots={false}
                        responsive={responsive}
                        infinite={false}
                        keyBoardControl={true}
                        transitionDuration={500}
                        containerClass={"carousel-container"}
                        centerMode={false}
                        customRightArrow={<MdKeyboardArrowRight size={90} className="HomeCarouselArrows"
                                                                style={{right: "-2%"}}/>}
                        customLeftArrow={<MdKeyboardArrowLeft size={90} className="HomeCarouselArrows"
                                                              style={{left: "-2%"}}/>}
                    >
                        {endCarouselItems}
                    </Carousel>:
                    <div className="col-12 justify-content-center">
                        {endCarouselItems}
                    </div>
                    ):
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