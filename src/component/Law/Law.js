import React, {useEffect, useState} from "react";
import './Law.css';
import Arm from '../../images/arm.png';

import {useParams} from "react-router-dom";
import {Card} from "react-bootstrap";
import axios from "axios";
import {API_Law} from "../../constants";
import PageBreadcrumb from "../PageBreadcrumb/PageBreadcrumb";
import LawComment from "../LawComment/LawComment";
import LawTags from "../LawTags/LawTags";

function Law() {

    const [lawId, setLawId] = useState('')
    const {slug} = useParams()
    const [law, setLaw] = useState([])

    useEffect(()=> {
        window.scrollTo(0, 0);
    },[])

    const loadLawBox = async () => {
        await axios({
            method: 'get',
            url: API_Law,
        }).then(resp => {
                setLaw(resp.data.find(item => item["slug"] === slug))
            }
        );
    }

    useEffect(()=> {
            loadLawBox();
        }
        ,[])

    
    useEffect(() => {
        if(law["category"]){
            setLawId(law["category"][0]["id"])
        }
    },[law])



  return (
      <div id="container">
          <PageBreadcrumb title={law["title"]}/>
          <div className="LawBackground">
            <div className="container">
                <div className="row justify-content-center">
                    <Card className="col-10 mt-5 mb-5 shadow-lg d-flex flex-column LawImageBackground pb-0">
                        <div className="col-12 d-flex justify-content-center">
                            <img src={Arm} alt='arm.png' className="col-1 mt-5 mb-2"/>
                        </div>
                        <div className="row">
                            <div className="card-body d-flex flex-column col-12">
                                <h5 className="card-title col-12 d-flex justify-content-end mt-3 mb-1 p-5"> تاریخ: {law["jpublish"]}</h5>
                                <h3 className="card-title col-12 titlePosition">{law["title"]}</h3>
                                <p className="card-text col-12 textPosition lawText">
                                    <div className="lawText" dangerouslySetInnerHTML={{ __html: law["description"] }} />
                                </p>
                            </div>
                        </div>
                    </Card>
                </div>
            </div>
              <LawTags tags={law['tags']}/>
              <LawComment id={lawId}/>
        </div>
      </div>
  )
}

export default Law;