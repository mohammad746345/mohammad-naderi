import React, {useEffect, useState} from "react";

import {API_Category_Laws} from "../../constants/index";
import axios from "axios";
import {ListGroup} from "react-bootstrap";

function CategoryItemsLawList ({slug}){
    const [lawList, setLawList] = useState("")
    useEffect(() => {
        axios({
                method: 'get',
                url: `${API_Category_Laws}${slug}/`,
                auth: {
                    username: '09916110188',
                    password: '13770520m'
                },
            }).then(resp =>{
                setLawList(resp.data.map((law)=>
                    <ListGroup.Item>
                        <h5>{law["title"]}</h5>
                        <p dangerouslySetInnerHTML={{ __html: law["description"] }} />
                    </ListGroup.Item>
                ))
                }
            );
    },[slug])

    return(
        <div>
            {lawList}
        </div>
    )
}

export default CategoryItemsLawList;