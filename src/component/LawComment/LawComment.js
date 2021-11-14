import React, {useEffect, useState} from "react";
import {Card, FormControl, InputGroup, Nav} from "react-bootstrap";
import axios from "axios";

import {API_Get_Comment} from "../../constants";
import { GoPerson } from "react-icons/go";


function LawComment({id}) {

    const [newComment , setNewComment] = useState('')
    const [comments, setComments] = useState("")

    const addNewComment = (event) => {
        setNewComment(event.target.value)
    }

    const addComment = () => {
        axios({
            headers: {
                Authorization: `Bearer ${localStorage.getItem('access')}`
            },
            method: 'post',
            url: `${API_Get_Comment}${id}/`,
            data: {'body': newComment}
        }).then(resp => {
                console.log(resp.data)
            }
        );
    }

    useEffect(() => {
      axios({
          method: 'get',
          url: `${API_Get_Comment}${id}/`,
      }).then(resp => {
            setComments(resp.data['دیدگاها'].map((comment) =>
                <Card className="mt-3">
                    <Card.Header className="d-flex justify-content-around align-items-center">
                        <div className="col-6 d-flex justify-content-start text-primary"><GoPerson />:  {comment['author']['username']}</div>
                        <div className="col-6 d-flex justify-content-end text-success">{comment['jpublish']}</div>
                    </Card.Header>
                  <Card.Body>{comment['body']}</Card.Body>
                </Card>
            ))
          }
      );
    },[id])


  return (
      <div className="container pb-5 mt-5">
        <Nav variant="tabs" defaultActiveKey="/comment" className="border-info">
          <Nav.Item>
            <Nav.Link className="bg-light border-info text-secondary">دیدگاه ها:</Nav.Link>
          </Nav.Item>
        </Nav>

        <Card className="mt-2 mb-5 ">
          <Card.Header>ارسال سوالات :</Card.Header>
          <Card.Body className="p-1">
            <InputGroup style={{height: "200px"}}>
                <FormControl
                  as="textarea"
                  aria-label="With textarea"
                  placeholder="سوال ..."
                  onChange={addNewComment}
                  id="question_box"
                />
            </InputGroup>
              <div className="d-flex justify-content-end mt-1">
                <button type="button" className="btn btn-outline-secondary" onClick={addComment}>ارسال</button>
              </div>
          </Card.Body>
        </Card>

        <div className="row bg-light card rounded-3">
            <div className="card-header">
                سایر مکاتبات
            </div>
            <div className="p-2">
                {comments}
            </div>
        </div>
      </div>
  )
}

export default LawComment;