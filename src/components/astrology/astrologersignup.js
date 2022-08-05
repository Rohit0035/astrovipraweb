import React from "react"
// import render  from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bs-stepper/dist/css/bs-stepper.min.css';
import Stepper from 'bs-stepper'
import LayoutOne from "../../layouts/LayoutOne";
import { Container, Row,  Col, Input, InputGroup, Form,Button } from "reactstrap";
import astrologinbg  from "../../assets/img/astrologin-bg.jpg";

class AstrologerSignup extends React.Component {
 
  constructor() {
    super();
    this.state = {
      name: 'React',
    };
  }

  componentDidMount() {
    this.stepper = new Stepper(document.querySelector('#stepper1'), {
      linear: false,
      animation: true
    })
  }

  onSubmit(e) {
    e.preventDefault()
  }
  

  render() {
    
    return (
          <section className=""
          style={{
          backgroundImage: `url(${astrologinbg})`,
            width: "100%",
            padding:"50px 0px",
            height: "100%",
            backgroundSize:"cover"
          }}
        >
         <Container>
              <section className="mtb-50">
                <div className="stp-1">
                    <h2 className="th-1">AstroVipra</h2>
                    <h4 className="th-2">Astrologer Register</h4>
                  <div id="stepper1" class="bs-stepper">
                    <div class="bs-stepper-header">
                      <div class="step" data-target="#test-l-1">
                        <button class="step-trigger">
                          <span class="bs-stepper-circle">1</span>
                          <span class="bs-stepper-label">Personal Details</span>
                        </button>
                      </div>
                      <div class="line"></div>
                      <div class="step" data-target="#test-l-2">
                        <button class="step-trigger">
                          <span class="bs-stepper-circle">2</span>
                          <span class="bs-stepper-label">Skill Details</span>
                        </button>
                      </div>
                      <div class="line"></div>
                      <div class="step" data-target="#test-l-3">
                        <button class="step-trigger">
                          <span class="bs-stepper-circle">3</span>
                          <span class="bs-stepper-label">Other Details</span>
                        </button>
                      </div>
                    </div>
                    <div class="bs-stepper-content">
                      <form onSubmit={this.onSubmit}>
                        <div id="test-l-1" class="content">
                           <Row>
                               <Col md="6">
                                    <div class="form-group mtb-10">
                                          <label for="exampleInputEmail1">Name*</label>
                                          <input type="email" class="form-control"  placeholder="Name" />
                                    </div>
                               </Col>
                               <Col md="6">
                                    <div class="form-group mtb-10">
                                          <label for="exampleInputEmail1">Email address</label>
                                          <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Enter email" />
                                    </div>
                               </Col>
                               <Col md="6">
                                    <div class="form-group mtb-10">
                                          <label for="exampleInputEmail1">Mobile Number*</label>
                                          <input type="text" class="form-control" id="exampleInputEmail1" placeholder="223232323232" />
                                    </div>
                               </Col>
                           </Row>
                        
                          <button class="btn btn-primary" onClick={() => this.stepper.next()}>Next</button>
                        </div>
                        <div id="test-l-2" class="content">
                          <div class="form-group">
                            <label for="exampleInputPassword1">Password</label>
                            <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
                          </div>
                          <button class="btn btn-primary" onClick={() => this.stepper.next()}>Next</button>
                        </div>
                        <div id="test-l-3" class="content text-center">
                          <button type="submit" class="btn btn-primary mt-5">Submit</button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </section>
          </Container>
          </section>
    );
  }
}


export default AstrologerSignup;
