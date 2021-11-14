import React, {useEffect, useState} from "react";
import {Accordion, Card, useAccordionButton} from "react-bootstrap";
import { AiFillCaretLeft, AiFillCaretDown } from 'react-icons/ai';

import SetLawListSlug from "../CategoryItem/SetLawListSlug";

function CustomToggle({ children, eventKey, slug }) {
    const [listIcon, setListIcon] = useState(<div><AiFillCaretLeft />{children[1]}</div>)
    const [iconCondition, setIconCondition] = useState(true)
    const decoratedOnClick = useAccordionButton(eventKey, () =>{
        SetLawListSlug(slug)
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
    <div className="col-12 bg-transparent" onClick={decoratedOnClick} slug={slug}>
      {listIcon}
    </div>
  );
}

function AddCategoryTree({children, id}) {
    const [subBody, setSubBody] = useState()
    useEffect(()=>{
        setSubBody(children.map((child)=>{
            if(child["children"].length !== 0){
                return(
                      <Card className="border-0">
                        <Card.Header className="bg-transparent CustomToggle">
                          <CustomToggle eventKey={`${id}${child["id"]}`} slug={child["slug"]}><AiFillCaretLeft  />{child["title"]}</CustomToggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey={`${id}${child["id"]}`}>
                          <Card.Body>
                              <AddCategoryTree children={child["children"]} id={`${id}${child["id"]}`} />
                          </Card.Body>
                        </Accordion.Collapse>
                      </Card>
                )
            }else {
                return(
                  <Card className="border-0">
                    <Card.Header className="bg-transparent CustomToggle">
                      <CustomToggle eventKey={`${id}${child["id"]}`} slug={child["slug"]}><AiFillCaretLeft  />{child["title"]}</CustomToggle>
                    </Card.Header>
                  </Card>
                )
            }
        })
        )
    },[])
    return (
        <Accordion className="border-0" defaultActiveKey={`${id+1}`} flush>
            {subBody}
        </Accordion>
    )
}

export default AddCategoryTree;
