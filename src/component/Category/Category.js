import React, {useEffect, useState} from "react";
import './Category.css'
import {Link} from "react-router-dom";
import {Card} from "react-bootstrap";
import SetLawListSlug from "../CategoryItem/SetLawListSlug";
import axios from "axios";
import {API_Category_Parent} from "../../constants/index";

function Category() {
    const [parentCategory, setParentCategory] = useState();

        useEffect(() => {
            axios({
                method: 'get',
                url: API_Category_Parent,
                auth: {
                    username: '09916110188',
                    password: '13770520m'
                },
            }).then(resp =>{
                console.log(resp)
                setParentCategory(resp.data.map((category) =>
                    <Card className="col-lg-2 col-md-4 col-6">
                        <Link to={`/category/${category["slug"]}`} className="CategoryLink" onClick={()=>SetLawListSlug(category["slug"])}>
                            <div className="d-flex flex-column justify-content-around align-content-center card-body shadow">
                                <div className="col-12 d-flex justify-content-center mb-2">
                                    <img className="col-5" src={category["poster"]} alt="category.logo"/>
                                </div>
                                <p className="card-text bg-light text-dark text-center">{category["title"]}</p>
                            </div>
                        </Link>
                    </Card>
                ))
                }
            );
    }, []);

  return (
    <div className="BackCategory">
        <div className="container">
            <div className="row">
                <div className="col-12 d-flex justify-content-around flex-wrap mt-5 mb-5">
                    {parentCategory}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Category;