import React from "react";
import "./Inform.css";
import {Card} from "react-bootstrap";
import LaWBookSVG from "../../../images/law_book2.svg";
import LawyerSVG from "../../../images/lawyer.svg"
import MarkGroup from "../../../images/MaskGroup .png"
import {useHistory} from "react-router-dom/cjs/react-router-dom";

function Inform() {

    const history = useHistory()
    const GoWiki = () => {
        history.push("/wiki")
    }
  return (
      <div className="mainInform">
            <div className="container h-100">

                <img className="LawBookSVG" src={LaWBookSVG} alt="LawBook.svg"/>
                <img className="LawyerSVG" src={LawyerSVG} alt="LawBook.svg"/>

                <div className="row h-100 d-flex flex-column align-items-center justify-content-center">
                    <div className="col-9 d-flex align-items-center justify-content-around">
                        <div className="p-4 col-7 bigBox">
                            <Card className="border-0">
                                <Card.Title className="mb-4" style={{fontSize:"24px"}}>دانش نامه حقوق عامه</Card.Title>
                                <Card.Text style={{fontSize:"21px",textAlign: "justify"}}>
                                لورم ایپسوم متن ساختگی با تولید سادگی
                                    نامفهوم از صنعت چاپ، و با استفاده از طراحان
                                    گرافیک است، چاپگرها و متون بلکه روزنامه و مجل
                                    در ستون و سطرآنچنان که لازم است و برای شرایط فعلی
                                </Card.Text>
                            </Card>
                        </div>
                        <div className="col-3 smallBox d-flex justify-content-center align-items-center">
                            <img src={MarkGroup} alt="reading.svg"/>
                        </div>
                    </div>
                    <div className="mt-4 col-9 d-flex justify-content-end" style={{paddingLeft:"8%"}}>
                        <button className="col-2 btn btn-warning btnStyle" onClick={GoWiki}>مشاهده</button>
                    </div>
                </div>
            </div>
      </div>
  )
}

export default Inform;