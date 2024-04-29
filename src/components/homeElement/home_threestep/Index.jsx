import React from 'react'
import Diamond from '../../layout/Diamond';
import { threeAre, asutriaTop } from './threestepData';
import { Col, Container, Row } from 'react-bootstrap';


export default function Threestep() {
  return (
    <>
        <div className="three-section learn-section pd-30">
            <Container>
                <div className="heading text-center mb-4">
                    <h2 className='ttl' dangerouslySetInnerHTML={{__html:asutriaTop.title}}></h2>
                    <p dangerouslySetInnerHTML={{__html:asutriaTop.text}}></p>
                    <Diamond />
                </div>
                <Row className="justify-content-center">
                    {threeAre.map((threewe) => {
                        return (
                            <>
                                <Col lg={4} md={6} sm={12} className="d-flex">
                                    <div className="learn-box">
                                        <div className="img-box text-center">
                                            <img src={threewe.image} width="80" height="80" className='img-fluid'/>
                                        </div>
                                        <div className="detail-box box_data">
                                            <h2>{threewe.title}</h2>
                                            <p dangerouslySetInnerHTML={{__html:threewe.text}}></p>
                                            <ul>
                                                {
                                                    threewe.otp.map((subitem) => {
                                                        return(
                                                            <li><p dangerouslySetInnerHTML={{__html:subitem}}></p></li>
                                                        )
                                                    })
                                                }
                                            </ul>
                                        </div>
                                    </div>
                                </Col>
                            </>
                        );
                    })}
                    <Col md={12}>
                        <div className="btn-block text-center">
                            <a href='../../pricing' className='btn btn-ordered'>Discount Calculator</a>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div> 
    </>
  )
}

