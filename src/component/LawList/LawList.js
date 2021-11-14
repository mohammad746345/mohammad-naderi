import React, {useState} from "react";
import './LawList.css'
import {Link} from "react-router-dom";

import axios from "axios";
import { API_Law } from "../../constants/index";

function LawList() {
    const [listItem, setListItem] = useState();

    const search = (event) => {
        if (event.target.value){
            axios({
                method: 'get',
                url: `${API_Law}?search=${event.target.value}`,
                auth: {
                    username: '09916110188',
                    password: '13770520m'
                },
            }).then(resp => {
                setListItem(resp.data.map((law) =>
                    <Link to={`/law/${law["slug"]}`} className="container bg-white rounded-3 ListLink overflow-hidden lawScrollHeight mb-1 pb-0 pt-4">
                        <div className="col-12">
                            <h5 className="text-primary">{law["title"]}:</h5>
                            <div className="col-12 text-dark text-truncate pb-0" dangerouslySetInnerHTML={{ __html: law["description"] }} />
                        </div>
                    </Link>
                ));
            }
            );
        }else {
            setListItem("")
        }
    }
  return (
    <div className="BackListBox">
        <div className="container pt-5 pb-5">
            <div className="row">
                <div className="input-group mb-3">
                    <div className="input-group-prepend rounded-pill">
                        <span className="input-group-text TopSearch border-0 bg-transparent" id="basic-addon1"><i className="fas fa-search text-warning"/></span>
                    </div>
                    <input type="text" className="form-control rounded-3 TopSearch pr-4" placeholder="جستجوی متن در محتویات قانون ..." aria-label="Username"
                           aria-describedby="basic-addon1" onChange={search}/>
                </div>
                <div className="bg-light rounded-3 d-flex flex-column justify-content-start col-12 p-1" id="list_container">
                    {listItem}
                </div>
            </div>
        </div>
    </div>
  )
}

export default LawList;