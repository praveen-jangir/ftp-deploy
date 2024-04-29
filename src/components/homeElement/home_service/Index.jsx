import React from 'react'
import Diamond from '../../layout/Diamond';
import { homeSerData, homeSerItem } from './homeServicesData';
import { Col, Container, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

export default function HomeServices() {
    return (
        <>
            <div className="three-section home_counter pd-30">
                <Container>
                    <div className="heading text-center mb-4">
                        <h2 className='ttl' dangerouslySetInnerHTML={{ __html: homeSerData.title }}></h2>
                        <p dangerouslySetInnerHTML={{ __html: homeSerData.text }}></p>
                        <Diamond />
                    </div>
                    <Row className="justify-content-center">
                        {homeSerItem.map((item) => {
                            const { image, alter, title, url } = item;
                            return (
                                <>
                                    <Col lg={3} md={6} sm={6} className="d-flex">
                                        <NavLink  to={url} className='w-100'>
                                            <div className="learn-box text-center">
                                                <div className="img-box">
                                                    <img src={image} width="70" height="70" alt={alter} className='img-fluid' />
                                                </div>
                                                <div className="detail-box box_data">
                                                    <h2>{title}</h2>
                                                </div>
                                            </div>
                                        </NavLink>
                                    </Col>
                                </>
                            );
                        })}
                    </Row>
                    <div className="btn-block text-center">
                        <a href={"../../service"} className='btn btn-md btn-ordered'>Get Service</a>
                    </div>
                </Container>
            </div>
        </>
    )
}
