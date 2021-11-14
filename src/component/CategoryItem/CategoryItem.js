import React, {useEffect, useState} from "react";
import './CategoryItem.css';

import axios from "axios";
import {API_Category_Tree} from "../../constants/index";
import {Accordion, ListGroup} from "react-bootstrap";
import { useParams } from "react-router-dom";
import PageBreadcrumb from "../PageBreadcrumb/PageBreadcrumb";
import SetHtml from "./SetHtml";
import CategoryItemsLawList from "./CategoryItemsLawList";

const ReturnLawSlug = () => {return window.LawSlug}
function CategoryItem() {
    const {slug} = useParams()
    const [category, setCategory] = useState({"children":""})
    const [treeItems, setTreeItems] = useState("")

    useEffect(()=>{
        axios({
            method: 'get',
            url: API_Category_Tree,
        }).then(resp =>{
            setCategory(resp.data.find(item => item["slug"] === slug))
            }
        );
        setTreeItems(<SetHtml category_item={category}/>);
    },[category, slug])

  return (
      <div>
          <PageBreadcrumb title={category["title"]}/>
          <div className="container pt-3 CategoryBody">
            <div className="row">
                <div className="col-3 border-1">
                    <Accordion className="border-0" defaultActiveKey="0" flush>
                        {treeItems}
                    </Accordion>
                </div>
                <div className="col-9 LawList">
                    <ListGroup>
                        <ListGroup.Item>
                            <ListGroup variant="flush" className="LawList overflow-auto">
                                <CategoryItemsLawList slug={window.LawSlug}/>
                            </ListGroup>
                        </ListGroup.Item>
                    </ListGroup>
                </div>
            </div>
        </div>
      </div>

  )
}

export default CategoryItem;