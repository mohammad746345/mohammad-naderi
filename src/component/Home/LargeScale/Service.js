import React, {useEffect, useState} from "react";
import "./Service.css"
import {Card} from "react-bootstrap";

import LawSVG from "../../../images/law.svg";
import ScalesSVG from "../../../images/scales.svg";
import {API_Service_List} from "../../../constants";
import axios from "axios";

function Service() {
    const [services, setServices] = useState([])
    const [servicesItem, setServicesItem] = useState([])

    useEffect(() => {
      axios({
        method: 'get',
        url: `${API_Service_List}`
      }).then(resp => {
            setServices(resp.data)
          }
      );
    },[!services])

    useEffect(() => {
        services && setServicesItem(services.map((item) =>
            <Card key={item['id']} className="col-3 d-flex flex-column justify-content-between Boxes" style={{height:"250px",marginLeft:"2%"}}>
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
        ))
    },[services])

  return (
      <div className="mainService">
            <div className="container h-100">
                <div className="row h-100">
                    <div className="col-12 h-100 d-flex flex-column align-items-center justify-content-center">

                        <img className="LawSVG" src={LawSVG} alt="Law.svg"/>
                        <img className="ScalesSVG" src={ScalesSVG} alt="Scales.svg"/>

                        <div className="col-12 d-flex justify-content-center mb-2">
                            <p style={{fontSize:"27px"}}>خدمات</p>
                        </div>
                        <div className="col-9 d-flex align-items-center justify-content-center">
                            {servicesItem}
                        </div>

                    </div>
                </div>
            </div>
      </div>
  )
}

export default Service;