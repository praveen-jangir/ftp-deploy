import React from 'react'
import Diamond from '../../layout/Diamond';
import { Col, Container, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const freeSmapleData = {
    title: `Try Our Free Sample`,
    image: `assets/images/new_img/free_sample.webp`,
    alter: `free_sample.webp`,
};

const freeSmapleItem = [
    { text: `Nursing`},
    { text: `Marketing`},
    { text: `Law`},
    { text: `Diploma`},
    { text: `Math`},
    { text: `Dissertation`},
    { text: `Economics`},
    { text: `Thesis`},
    { text: `CIPD`},
    { text: `Psychology`},
    { text: `Social Science`},
    { text: `HR`},
    { text: `Nursing`},
    { text: `Marketing`},
    { text: `Law`},
];


export default function FreeSample() {
    const { title, image, alter } = freeSmapleData;
    return (
        <>
            <div className="three-section free-sample pd-30">
                <Container>
                    <div className="heading text-center ">
                        <h2 className='ttl' dangerouslySetInnerHTML={{ __html: title }}></h2>
                        <Diamond />
                    </div>
                    <Row className='align-items-center'>
                        <Col md={4}>
                            <div className="img-trap text-center">
                                <img src={image} alt={alter} />
                            </div>
                        </Col>
                        <Col md={8}>
                            <ul className="sample-list">
                                {
                                    freeSmapleItem.map((item) => {
                                        const { text } = item;
                                        return(
                                            <li>
                                                <p dangerouslySetInnerHTML={{__html: text}}></p>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </Col>
                    </Row>
                    <Col md={12}>
                        <div className="btn-block text-center">
                            <NavLink to='/order' className='btn btn-ordered'>Order Now</NavLink>
                        </div>
                    </Col>
                </Container>
            </div>
        </>
    )
}
