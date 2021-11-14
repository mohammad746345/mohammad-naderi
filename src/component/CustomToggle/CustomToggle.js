import React, {useEffect, useState} from "react";
import {useAccordionButton} from "react-bootstrap";
import {AiFillCaretDown, AiFillCaretLeft} from "react-icons/ai";

function CustomToggle({ children, eventKey }) {
    const [listIcon, setListIcon] = useState(<div>{children}</div>)
    useEffect(()=>{
        setListIcon(<div>{children}</div>)
    },[children[1]])
    const [iconCondition, setIconCondition] = useState(true)
    const decoratedOnClick = useAccordionButton(eventKey, () =>{
        if(iconCondition){
            setListIcon(
                <div>
                    <AiFillCaretDown />
                    {children[1]}
                </div>
            )
            setIconCondition(false)
        }else {
              setListIcon(
                <div>
                    <AiFillCaretLeft />
                    {children[1]}
                </div>
              )
            setIconCondition(true)
        }
    }
    );

  return (
    <div className="col-12 bg-transparent" onClick={decoratedOnClick}>
      {listIcon}
    </div>
  );
}

export default CustomToggle;