import {Accordion, Card} from "react-bootstrap";
import CustomToggle from "../CustomToggle/CustomToggle";
import {AiFillCaretLeft} from "react-icons/ai";
import AddCategoryTree from "../AddCategoryTree/AddCategoryTree";
import React from "react";
import SetLawListSlug from "./SetLawListSlug";

function SetHtml({category_item}){
    if(category_item["children"].length !== 0){
        return(
             <Card className="border-info">
                <Card.Header className="border-0 bg-transparent CustomToggle" onClick={()=>SetLawListSlug(category_item['slug'])}>
                  <CustomToggle eventKey={`${category_item["id"]}`} defualt={category_item["title"]}><AiFillCaretLeft />{category_item["title"]}</CustomToggle>
                </Card.Header>
                <Accordion.Collapse eventKey={`${category_item["id"]}`} className="border-0">
                  <Card.Body className="border-0">
                      <AddCategoryTree children={category_item["children"]} id={category_item["id"]}/>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            )
    }else {
        return(
             <Card className="border-info">
                <Card.Header className="border-0 bg-transparent CustomToggle">
                  <CustomToggle eventKey={`${category_item["id"]}`} className="CustomToggle" defualt={category_item["title"]}><AiFillCaretLeft />{category_item["title"]}</CustomToggle>
                </Card.Header>
              </Card>
        )
    }
}

export default SetHtml;