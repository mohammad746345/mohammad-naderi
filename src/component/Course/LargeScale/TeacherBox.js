import React, {useEffect, useState} from "react";
import "../Course.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {Card} from "react-bootstrap";
import {MdKeyboardArrowLeft, MdKeyboardArrowRight} from "react-icons/md";


function TeacherBox({data}) {
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

    const [carouselContent, setCarouselContent] = useState(<div />)
    let teacher = data['teacher']
    
    useEffect(() => {
        setCarouselContent(teacher.map((item) =>
            <div className="h-100 d-flex justify-content-center align-items-center" dir={'rtl'} >
                <Card className="shadow"
                      style={{width:"243px", height: "357px", borderRadius: "10px"}}>
                    <Card.Body className="teacherImage1" style={{backgroundImage:`linear-gradient(to top, rgba(0, 0, 0, 0.55) 100%, rgba(0, 0, 0, 0.1) 52%, rgba(0, 0, 0, 0.3) 4%),url(http://193.176.243.113${item['profile']})`}}>
                        <p className="teacherName">{item['name']}</p>
                        <p style={{fontSize: "12px"}}>وکیل پایه 1 دادگستری</p>
                        <p style={{fontSize: "12px"}}>مدرس 5 دوره آموزشی</p>
                        <p style={{fontSize: "12px"}}>عضو انجمن حمایت از حقوق شهروندی</p>
                    </Card.Body>
                </Card>
            </div>
        ))
    },[teacher])

  return (
      (teacher.length !== 1)?
      <div className="mainTeacherBox">
          <Card className="h-100 bg-transparent border-0">
              <Card.Header className="bg-transparent border-0 text-center" style={{fontSize:"27px", fontWeight:"bold", paddingTop:"18px"}}>اساتید</Card.Header>
              <Card.Body className="col-12 d-flex justify-content-center" dir={'ltr'}>
                  <div className="col-5">
                    <Carousel
                        containerClass="carousel-container"
                        centerMode={false}
                        swipeable={true}
                        draggable={true}
                        showDots={false}
                        responsive={responsive}
                        infinite={false}
                        keyBoardControl={true}
                        transitionDuration={500}
                        customRightArrow={<MdKeyboardArrowRight size={90} className="HomeCarouselArrows" style={{right:"-5%"}} />}
                        customLeftArrow={<MdKeyboardArrowLeft size={90} className="HomeCarouselArrows" style={{left:"-5%"}} />}
                        itemClass="courseCarouselItems"
                    >
                        {carouselContent}
                    </Carousel>
                  </div>
              </Card.Body>
          </Card>
      </div>:
      <div className="mainTeacherBox">
          <Card className="h-100 bg-transparent border-0">
              <Card.Header className="bg-transparent border-0 text-center" style={{fontSize:"27px", fontWeight:"bold", paddingTop:"18px"}}>اساتید</Card.Header>
              <Card.Body className="col-12 d-flex justify-content-center" dir={'ltr'}>
                  <div className="col-5">
                        {carouselContent}
                  </div>
              </Card.Body>
          </Card>
      </div>

  )
}

export default TeacherBox;