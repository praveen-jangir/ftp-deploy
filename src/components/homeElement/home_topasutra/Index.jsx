import React from 'react'
import Diamond from '../../layout/Diamond';
import { asutriaAre, asutriaTop } from './Topasutrailadata';
import { NavLink } from 'react-router-dom';
import { Col, Container, Row } from 'react-bootstrap';

export default function Topasutraila() {
  return (
    <>
        <div className="three-section top_austr pd-30">
            <Container>
                <div className="heading text-center mb-4">                    
                    <h2 className='ttl' dangerouslySetInnerHTML={{__html:asutriaTop.title}}></h2>
                    <p dangerouslySetInnerHTML={{__html:asutriaTop.text}}></p>
                    <Diamond />
                </div>
                <Row className="justify-content-center">
                    {asutriaAre.map((asutriawe) => {
                        return (
                            <>
                                <Col lg={4} md={6} sm={12} className="d-flex">
                                    <div className="learn-box text-center">
                                        <div className="img-box">
                                            <img src={asutriawe.image} width="80" height="80" className='img-fluid'/>
                                        </div>
                                        <div className="detail-box box_data">   
                                            <h2 dangerouslySetInnerHTML={{__html:asutriawe.title}}></h2>
                                            <p dangerouslySetInnerHTML={{__html:asutriawe.text}}></p>
                                        </div>
                                    </div>
                                </Col>
                            </>
                        );
                    })}
                    {/* <Col md={12}>
                        <div className="btn-block text-center">
                            <NavLink to='/order' className='btn btn-ordered'>Order Now</NavLink>
                        </div>
                    </Col> */}
                </Row>
            </Container>
        </div> 
    </>
  )
}



