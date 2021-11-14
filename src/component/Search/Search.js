import React, {useState} from "react";
import './Search.css';

import {Card, InputGroup} from 'react-bootstrap';
import axios from "axios";
import {API_Law} from "../../constants";
import {Link} from "react-router-dom";

function Search() {
    const [searchList, setSearchList] = useState()
    const search = (event) => {
        const getListElement = document.getElementById("searchList");
        if(event.target.value ===''){
            getListElement.style.display = "none";
        }else {
            getListElement.style.display = "flex";
        }
        axios({
            method: 'get',
            url: `${API_Law}?search=${event.target.value}`,
            auth: {
                username: '09916110188',
                password: '13770520m'
            },
        }).then(resp => {
                setSearchList(resp.data.map((law) =>
                    <Link to={`/law/${law["slug"]}`} className="ListLink border-0">
                        <li className="list-group-item liTranslate">
                            <p className="text-black-50 pt-1 pb-1 mb-0">{law["title"]}</p>
                        </li>
                    </Link>
                ))
            }
        );
    }
  return (
      <div>
        <InputGroup>
            <span className="input-group-text bg-transparent border-0" id="basic-addon1"><i className="fas fa-search text-primary"/></span>
            <input type="text" className="form-control Searcher rounded-pill" placeholder="  جست و جوی عنوان قانون ..." aria-describedby="basic-addon1" onChange={search}/>
        </InputGroup>
        <Card className="rounded-3 SearchList bg-transparent border-0 overflow-auto" id="searchList">
            <ul className="list-group p-0 ulDisplay bg-transparent border-primary" id="searchList">
                {searchList}
            </ul>
        </Card>
      </div>
  )
}

export default Search;