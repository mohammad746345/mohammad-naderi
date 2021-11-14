import React, {useEffect, useState} from "react";
import "../Course.css";
import {Card} from "react-bootstrap";
import Carousel from 'react-bootstrap/Carousel';
import {MdKeyboardArrowLeft} from "react-icons/md";
import {MdKeyboardArrowRight} from "react-icons/md"


function TeacherBox({data}) {
    const [carouselContent, setCarouselContent] = useState(<div />)

    useEffect(() => {
        setCarouselContent(data['teacher'].map((item) =>
            <Carousel.Item className="h-100 col-12">
                <div className="col-12 d-flex justify-content-center align-items-center">
                    <Card className="shadow" style={{height: "268px", borderRadius: "10px", width:"183px"}}>
                        <Card.Body className="p-0">
                            <div className="teacherImage1Mobile col-12 d-flex flex-column justify-content-end p-0" style={{backgroundImage:`linear-gradient(to bottom,rgba(0, 0, 0, 0.3) 10%, rgba(0, 0, 0, 0.3) 10%, rgba(0, 0, 0, 0.3) 10%, rgba(0,0,0,0) 70%),url(http://193.176.243.113${item['profile']})`}}>
                                <p className="teacherNameMobile">{item['name']}</p>
                            </div>
                            <p style={{fontSize: "10px", paddingRight:"3%", marginTop:"3%"}}>وکیل پایه 1 دادگستری</p>
                            <p style={{fontSize: "10px", paddingRight:"3%"}}>مدرس 5 دوره آموزشی</p>
                            <p className="pb-4" style={{fontSize: "10px", paddingRight:"3%", }}>عضو انجمن حمایت از حقوق شهروندی</p>
                        </Card.Body>
                    </Card>
                </div>
            </Carousel.Item>
        ))
    },[data])

  return (
      <div className="mainTeacherBoxMobile">
          <Card className="h-100 bg-transparent border-0">
              <Card.Header className="bg-transparent border-0 text-center" style={{fontSize:"27px", fontWeight:"bold", paddingTop:"18px"}}>اساتید</Card.Header>
              <Card.Body className="col-12 d-flex justify-content-center">
                <Carousel
                    className="col-11 h-100 d-flex align-items-center"
                    indicators={false}
                    nextIcon={<MdKeyboardArrowRight size={40} className=" teacherSliderIcon"/>}
                    prevIcon={<MdKeyboardArrowLeft size={40} className=" teacherSliderIcon"/>}
                >
                    {carouselContent}
                </Carousel>
              </Card.Body>
          </Card>
      </div>

  )
}

export default TeacherBox;