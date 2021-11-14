import React, { useEffect, useState } from "react";

import FirstPartLarge from "./LargeScale/FirstPart";
import FirstNavLarge from "./LargeScale/FirstNav";
import InformPartLarge from "./LargeScale/InformPart";
import TeacherBoxLarge from "./LargeScale/TeacherBox";

import FirstPartSmall from "./MobileScale/FirstPart";
import InformPartSmall from "./MobileScale/InformPart";
import TeacherBoxSmall from "./MobileScale/TeacherBox";
import FirstNavSmall from "./MobileScale/FirstNav";

import LawLogoLarge from "../../images/law.svg";
import ScalesLogoLarge from "../../images/scales.svg";
import TeachLogoLarge from "../../images/teach.svg"
import axios from "axios";
import {API_Course_List_id} from "../../constants";
import ReactLoading from 'react-loading';
import  { Breakpoint } from 'react-socks';
import {useLocation} from "react-router-dom";
import Authentication from "../Authentication/Authentication";

function Course() {
    useEffect(() => {
        Authentication()
    })

    const [data, setData] = useState()
    const {state} = useLocation()

    async function GetData (){
        await axios({
            method: 'get',
            url: `${API_Course_List_id}/${state['id']}/`,
        }).then(resp => {
                setData(resp.data)
            }
        );
    }

    useEffect(() => {
        if(data === undefined){
            GetData().then()
        }
    })


  return data?(
      <div>
        <Breakpoint large up>
            <FirstPartLarge data={data}/>
            <FirstNavLarge data={data} />
            <InformPartLarge data={data}/>
            <TeacherBoxLarge data={data} />
            <FirstNavLarge data={data} />
            <img src={LawLogoLarge} className="lawLogoCourse" alt="LawLogo.png"/>
            <img src={ScalesLogoLarge} className="scaleLogoCourse" alt="LawLogo.png"/>
            <img src={TeachLogoLarge} className="teachLogoCourse" alt="LawLogo.png"/>
        </Breakpoint>
        <Breakpoint small down>
            <div className="overflow-auto h-100">
                <FirstPartSmall data={data}/>
                <InformPartSmall data={data}/>
                <TeacherBoxSmall data={data} />
                <FirstNavSmall data={data} />
            </div>
        </Breakpoint>
      </div>

  ):(<div style={{height:`${window.innerHeight - 64}px`}} className="h-100 col-12 d-flex justify-content-center align-content-center">
      <ReactLoading type={'spinningBubbles'} color={'#4eeaf2'} className="loadingComp" height={window.innerHeight - 64} width={375} />
  </div>)
}

export default Course;