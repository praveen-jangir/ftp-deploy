import React from 'react'
import { useState } from 'react'
import Diamond from '../../layout/Diamond';
import { questions } from './faqHomeData';
import { Col, Container, Row } from 'react-bootstrap';

export default function HomeFaq() {
    const [selected, setSelected] = useState(null);
    const toggle = (i) => {
        if (selected == i) {
            return setSelected(null)
        }
        setSelected(i)
    }
    return (
        <>
            <div className="faq-section pd-30 service_section">
                <Container>
                    <div className="heading text-center">
                        <h2 className='ttl'>Frequently Asked Questions About Assignment Writing Services</h2>
                        <Diamond />
                    </div>
                    <Row>
                        <Col md={12}>
                            <div className='panel-group' id='accordion'>
                                {
                                    questions.map((item, i) => {
                                        return (
                                            <>
                                                <div className='panel panel-default'>
                                                    <div className='panel-heading' role='tab'>
                                                        <h4 className='panel-title' onClick={() => toggle(i)}>
                                                            <a href='javascript:void(0)' className={selected === i ? 'active' : ''}>{item.question}</a>
                                                        </h4>
                                                    </div>
                                                    <div className={selected === i ? 'panel-collapse show' : 'panel-collapse'}>
                                                        <div className='panel-body'>
                                                            <p>{item.answer}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </>
                                        )
                                    })
                                }
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}
