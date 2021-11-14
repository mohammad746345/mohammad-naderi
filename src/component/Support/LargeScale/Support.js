import React from "react";
import './Support.css'
import {Card, Container, Row} from "react-bootstrap";
import {Button, FormControl, OutlinedInput, TextareaAutosize} from "@mui/material";

function Support() {
  return (
      <div className="bg-light">
          <Container>
              <Row>
                  <Card style={{marginTop:"116px"}} className="col-12 border-0 bg-transparent">
                      <Card.Header className="col-12 border-0 bg-transparent" style={{fontSize:"27px", fontWeight:"bold"}}>پشتیبانی</Card.Header>
                      <Card.Body className="col-12 d-flex flex-row justify-content-between">
                          <div className="col-6 d-flex flex-column justify-content-between">
                            <Card style={{marginBottom:"54px"}} className="col-12 border-0 bg-transparent">
                                <Card.Header className="col-12 bg-transparent border-0" style={{fontSize:"21px", fontWeight:"bold"}}>شماره تماس</Card.Header>
                                <Card.Body className="col-12 d-flex flex-column align-items-start">
                                    <div dir="ltr" style={{fontFamily:"IRANSansXFaNum",fontSize:"19px"}}>021 - 86050436</div>
                                </Card.Body>
                            </Card>
                            <Card style={{marginBottom:"100px"}} className="col-12 border-0 bg-transparent">
                                <Card.Header className="col-12 bg-transparent border-0" style={{fontSize:"21px", fontWeight:"bold"}}>آدرس</Card.Header>
                                <Card.Body>
                                    <p style={{fontFamily:"IRANSansXFaNum",fontSize:"19px"}}>
                                        تهران، بلوار کشاورز، خیابان شوریده، پلاک 5
                                    </p>
                                </Card.Body>
                            </Card>
                          </div>
                          <div className="col-6 d-flex flex-column justify-content-between">
                            <Card className="col-12 border-0 bg-transparent">
                                <Card.Header className="col-12 bg-transparent border-0" style={{fontSize:"21px", fontWeight:"bold"}}>ارسال پیام متنی</Card.Header>
                                <Card.Body style={{height:"340px"}} className="col-12 d-flex flex-column align-items-start justify-content-between">
                                    <FormControl>
                                        <OutlinedInput
                                            id="component-outlined"
                                            className="SupportPersonalityInputs bg-white"
                                            placeholder="نام کامل"
                                        />
                                    </FormControl>
                                    <FormControl>
                                        <OutlinedInput
                                            id="component-outlined"
                                            className="SupportPersonalityInputs bg-white"
                                            placeholder="شماره همراه"
                                        />
                                    </FormControl>
                                    <TextareaAutosize
                                      aria-label="minimum height"
                                      placeholder="متن پیغام"
                                      style={{ width: "324px", height:"126px", fontSize:"12px"}}
                                    />
                                    <Button className="SupportPersonalityButton btn-warning" variant="contained" disabled>ارسال</Button>
                                </Card.Body>
                            </Card>
                          </div>
                      </Card.Body>
                  </Card>
              </Row>
          </Container>
      </div>
  )
}

export default Support;