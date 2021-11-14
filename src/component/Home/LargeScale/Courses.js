import React, {useEffect, useState} from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./Courses.css";
import {API_Course_List_all} from "../../../constants/index"
import {Button, Card} from "react-bootstrap";
import CircularProgressWithLabel from "../../CircularProgressWithLabel/CircularProgressWithLabel";
import Timer from "../../Timer/Timer";
import axios from "axios";
import {useHistory} from "react-router-dom";
import {MdKeyboardArrowRight, MdKeyboardArrowLeft} from "react-icons/md";
import ReactLoading from "react-loading";


function Courses() {
    const responsive = {
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 4,
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
            url: `${API_Course_List_all}?status=all`,
        }).then(resp => {
                setAllCourses(resp.data)
                allCourses && allCourses.map((item) => setTimer(item['id'], item['secend_date']['end_date']))
                allCourses && setCarouselItems(allCourses.map((item) =>
                        <div className="h-100 d-flex justify-content-center align-items-center" key={item['id']}>
                            <Card style={{height: "357px", width: "243px", borderRadius: "10px"}}>
                                <Card.Body className="h-100 p-0">
                                    <div className="cardImageHomeCourse" dir={'rtl'}>
                                        {item['title']}
                                    </div>
                                    <div className="d-flex justify-content-around align-items-center" style={{height: "82px"}}
                                         dir={'rtl'}>
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
                                    <Button className="col-12 cardButtonHomeCourse" onClick={() => history.push({pathname:`/course/${item['id']}/`, state:{id:`${item['id']}`}})}>مشاهده دوره</Button>
                                </Card.Body>
                            </Card>
                        </div>
                    ))

            }
        );
    },[!allCourses])


  return (
    <div className="mainHomeCourses">
      <div className="container h-100">
          {carouselItems ?
              <div className="row h-100 pt-3 pb-3">
                  <Card className="col-12 h-100 bg-transparent border-0">
                      <Card.Header
                          className="col-12 d-flex justify-content-center align-items-center bg-transparent border-0"
                          style={{fontSize: "27px", fontWeight: "bold"}}>دوره های آموزشی</Card.Header>
                      <Card.Body dir={'ltr'}>
                          <Carousel
                              swipeable={true}
                              draggable={true}
                              showDots={false}
                              responsive={responsive}
                              infinite={false}
                              keyBoardControl={true}
                              transitionDuration={500}
                              containerClass="carousel-container"
                              centerMode={false}
                              customRightArrow={<MdKeyboardArrowRight size={90} className="HomeCarouselArrows"
                                                                      style={{right: "-2%"}}/>}
                              customLeftArrow={<MdKeyboardArrowLeft size={90} className="HomeCarouselArrows"
                                                                    style={{left: "-2%"}}/>}
                          >
                              {carouselItems ? carouselItems : <div/>}
                          </Carousel>
                      </Card.Body>
                  </Card>
              </div>:
              (<div className="h-100 col-12 d-flex justify-content-center align-content-center">
                  <ReactLoading type={'bubbles'} color={'#00aeef'} className="loadingComp" width={200}/>
              </div>)
          }
      </div>
    </div>
  )
}

export default Courses;
