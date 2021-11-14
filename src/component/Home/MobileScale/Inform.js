import React from "react";
import "./HomeMobile.css";
import {Card} from "react-bootstrap";
import MarkGroup from "../../../images/MaskGroup .png"
import {useHistory} from "react-router-dom/cjs/react-router-dom";

function Inform() {

    const history = useHistory()
    const GoWiki = () => {
        history.push("/wiki")
    }
  return (
      <div className="mainHomeMobileInform">
            <div className="container h-100">
                <div className="row h-100 d-flex flex-column justify-content-center">
                    <div className="col-12 d-flex align-items-center justify-content-around">
                        <Card className=" col-8 border-0 h-100 bg-transparent">
                            <Card.Title className="mb-4" style={{fontSize:"12px",fontWeight:"bold"}}>دانش نامه حقوق عامه</Card.Title>
                            <Card.Text style={{fontSize:"11px",textAlign: "justify"}}>
                            لورم ایپسوم متن ساختگی با تولید سادگی
                                نامفهوم از صنعت چاپ، و با استفاده از طراحان
                                گرافیک است، چاپگرها و متون بلکه روزنامه و مجل
                                در ستون و سطرآنچنان که لازم است و برای شرایط فعلی
                            </Card.Text>
                        </Card>

                        <img style={{ height:"54px", width:"54px"}} src={MarkGroup} alt="reading.svg"/>
                    </div>
                    <div className="col-12 d-flex justify-content-center align-items-center mt-3">
                        <button className="col-4 btn btn-warning btnStyle d-flex align-items-center justify-content-center" style={{height:"24px", fontSize:"11px"}} onClick={GoWiki}>مشاهده</button>
                    </div>
                </div>
            </div>
      </div>
  )
}
                    // <div className="col-12 d-flex align-items-center justify-content-between">
                    //
                    //     </div>
                    //     <div className="col-1 smallBox d-flex justify-content-center align-items-center">
                    //         <img style={{ height:"54px", width:"54px"}} src={MarkGroup} alt="reading.svg"/>
                    //     </div>
                    // </div>
                    // <div className="mt-4 col-9 d-flex justify-content-end" style={{paddingLeft:"8%"}}>
                    //     <button className="col-2 btn btn-warning btnStyle" onClick={GoWiki}>مشاهده</button>
                    // </div>
export default Inform;