import React  from "react";
import {Button, Modal} from "react-bootstrap";
import axios from "axios";
import {API_Create_Basket, API_Payment} from "../../../constants";
import {useHistory} from "react-router-dom";


function MyVerticallyCenteredModal(props) {
  const history = useHistory()

  const GoPay = () => {
    axios({
        headers: {
            Authorization: `Bearer ${localStorage.getItem('access')}`
        },
        method: 'post',
        url: API_Create_Basket,
        data:{course:parseInt(props.course_id)}
      }).then(resp =>
        axios({
          headers: {
              Authorization: `Bearer ${localStorage.getItem('access')}`
          },
          method: 'post',
          url: API_Payment,
        }).then(resp =>
           window.location.href = resp.data
        ).catch(err =>
            console.log(err)
        )
    ).catch(err =>
        console.log('error')
    )
  }
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header dir="rtl" className="col-12 d-flex justify-content-between">
        <Modal.Title id="contained-modal-title-vcenter">
          درخواست شما
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p className="text-center" style={{fontSize:"21px", fontWeight:"bold"}}>دوره جامع حقوق شهروندی</p>
        <p className="text-center text-secondary">قیمت :</p>
        <p className="text-center" style={{fontSize:"18px", fontWeight:"bold"}}>{props.cost} ریال</p>
      </Modal.Body>
      <Modal.Footer className="d-flex justify-content-around">
        <Button className="col-5 btn btn-success text-light" style={{height:"90px",fontSize:"21px", fontWeight:"bold"}} onClick={GoPay}>پرداخت</Button>
        <Button onClick={props.onHide} className="col-5 btn btn-light text-danger" style={{height:"90px",fontSize:"21px", fontWeight:"bold"}}>انصراف</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default MyVerticallyCenteredModal;