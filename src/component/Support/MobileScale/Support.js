import React from "react";
import {Card} from "react-bootstrap";
import {Button, FormControl, OutlinedInput, TextareaAutosize} from "@mui/material";
import {MdLocalPhone} from "react-icons/md"
import {GrMap} from "react-icons/all";

function Support() {
  return (
      <div className="bg-light">
          <Card className="col-12 border-0 bg-transparent" style={{paddingTop:"40px"}}>
              <Card.Header className="col-12 border-0 bg-transparent" style={{fontSize:"32px", fontWeight:"bold", paddingRight:"8%"}}>پشتیبانی</Card.Header>
              <Card.Body className="col-12 d-flex flex-column justify-content-between" style={{height:"793px"}}>
                <Card className="col-12 border-0 bg-transparent">
                    <Card.Header className="col-12 border-0 bg-transparent d-flex flex-row justify-content-start" style={{fontSize:"23px", fontWeight:"bold"}}>
                        <div className="col-1">
                            <MdLocalPhone />
                        </div>
                        <p className="col-11">شماره تماس</p>
                    </Card.Header>
                    <Card.Body className="col-12 d-flex flex-column align-items-start">
                        <div dir="ltr" style={{fontFamily:"IRANSansXFaNum",fontSize:"19px", paddingRight:"8%"}}>021 - 86050436</div>
                    </Card.Body>
                </Card>
                <Card className="col-12 border-0 bg-transparent">
                    <Card.Header className="col-12 border-0 bg-transparent d-flex flex-row justify-content-start" style={{fontSize:"23px", fontWeight:"bold"}}>
                        <div className="col-1">
                            <GrMap />
                        </div>
                        <p className="col-11">آدرس</p>
                    </Card.Header>
                    <Card.Body className="col-12 d-flex flex-column align-items-start">
                        <p style={{fontFamily:"IRANSansX",fontSize:"21px", paddingRight:"8%"}}>
                            تهران، بلوار کشاورز، خیابان شوریده، پلاک 5
                        </p>
                    </Card.Body>
                </Card>
                <Card className="col-12 border-0 bg-transparent" style={{padding:"0 8%"}}>
                    <Card.Header className="col-12 border-0 bg-transparent" style={{fontSize:"23px", fontWeight:"bold"}}>
                        ارسال پیام متنی
                    </Card.Header>
                        <Card.Body style={{height:"340px"}} className="col-12 d-flex flex-column align-items-start justify-content-between">
                            <FormControl className="col-12">
                                <OutlinedInput
                                    id="component-outlined"
                                    className="SupportPersonalityInputsMobile col-12 bg-white"
                                    placeholder="نام کامل"
                                />
                            </FormControl>
                            <FormControl className="col-12">
                                <OutlinedInput
                                    id="component-outlined"
                                    className="SupportPersonalityInputsMobile col-12 bg-white"
                                    placeholder="شماره همراه"
                                />
                            </FormControl>
                            <TextareaAutosize
                              aria-label="minimum height"
                              placeholder="متن پیغام"
                              className="col-12"
                              style={{ height:"126px", fontSize:"12px"}}
                            />
                            <Button className="SupportPersonalityButton btn-warning" variant="contained" disabled>ارسال</Button>
                        </Card.Body>
                </Card>
              </Card.Body>
          </Card>
      </div>
  )
}

export default Support;