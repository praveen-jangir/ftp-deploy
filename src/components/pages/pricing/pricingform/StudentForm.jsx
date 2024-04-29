import React, { useState, useEffect }   from 'react'
import { assignItems ,optUrgencyItems, optPagesItems} from '../pricingform/priceForm'
import { Col, Row } from 'react-bootstrap';


export default function StudentForm() {
    const [assignmentType, setAssignmentType] = useState('');
    const [urgency, setUrgency] = useState('');
    const [pages, setPages] = useState('');
    const [subtotal, setSubtotal] = useState('');

    useEffect(() => {
        const calculate = () => {
            const type = assignmentType;
            const days = urgency;
            const total = pages * 6;

            if(days !== '' && days <=3 ){
                setSubtotal((total + 2).toFixed(3));
            } else if (days > 3 && days <=5 ){
                setSubtotal((total + 1).toFixed(3));
            }else{
                setSubtotal((total).toFixed(3));
            }
        }
        calculate();
    }, [assignmentType, urgency, pages]);



    return (
        <>
            <div className="student-form">
                <Row className='align-items-center'>
                    <Col lg={8} md={12}>
                        <form action="#">
                            <div className="form-group">
                                <label for="assignment">Assignment</label>
                                <select className="form-control" id="assignType" name="nassignType" onChange={(e) => setAssignmentType(e.target.value)}>
                                    {
                                        assignItems.map((stunList, index) => {
                                            return(
                                                <option key={index} value={stunList.value}>{stunList.stunItem}</option>
                                            )
                                        })
                                    }
                                </select>
                            </div>
                            <div className="form-group">
                                <label for="urgency">Urgency</label>
                                <select className="form-control" id="optUrgency" name="option1_qty" onChange={(e) => setUrgency(e.target.value)}>
                                    {
                                        optUrgencyItems.map((stunList, index) => {
                                            return(
                                                <option key={index} value={stunList.value}>{stunList.stunItem}</option>
                                            )
                                        })
                                    }
                                </select>
                            </div>
                            <div className="form-group">
                                <label for="pages">Pages</label>
                                <select className="form-control" id="optPages" name="option2_qty" onChange={(e) => setPages(e.target.value)}>
                                    {
                                        optPagesItems.map((stunList, index) => {
                                            return(
                                                <option key={index} value={stunList.value}>{stunList.stunItem}</option>
                                            )
                                        })
                                    }
                                </select>
                            </div>
                            <div className="total-amonut mt-3">
                                <p><b>Subtotal:</b> <input type="text" className="form-control" readOnly value={subtotal}/> <span className="bagde">GBP</span></p>
                            </div>
                            <div className="btn-block text-left mt-3">
                                <a href='./order' className="btn btn-submit btn-md" type="button">Get Discounted Price</a>
                            </div>
                        </form>
                    </Col>
                    <Col lg={4} md={12}>
                        <div className="img-box text-center">
                            <img src='../../../assets/images/guarantee.webp' alt='guarantee icon' className='img-fluid' />
                        </div>
                    </Col>
                </Row>
            </div>
        </>
    )
}