import React,  { useState, useEffect } from 'react'
import { assignItems, optUrgencyItems, optPagesItems } from '../pricing/pricingform/priceForm'
import { Form } from 'react-bootstrap';

export default function ServicePricingForm({serviceList,slug}) {
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
        <div className="pricing--form">
            <h2>Price Calculation</h2>
            <Form action="#">
                <div className="form-group">
                    <label htmlFor="assignment">Assignment</label>
                    <select className="form-control" id="assignType" name="nassignType" onChange={(e) => setAssignmentType(e.target.value)}>
                        {
                            serviceList?.map((stunList, index) => {
                                return (
                                    <option key={index} value={stunList.page_name} {...(slug == stunList.page_name ? { selected: true } : {})}>{stunList.menu_name}</option>
                                )
                            })
                        }
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="urgency">Urgency</label>
                    <select className="form-control" id="optUrgency" name="option1_qty" onChange={(e) => setUrgency(e.target.value)}>
                        {
                            optUrgencyItems.map((stunList, index) => {
                                return (
                                    <option key={index} value={stunList.value} {...(index === 1 ? { selected: true } : {})}>{stunList.stunItem}</option>
                                )
                            })
                        }
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="pages">Pages</label>
                    <select className="form-control" id="optPages" name="option2_qty" onChange={(e) => setPages(e.target.value)}>
                        {
                            optPagesItems.map((stunList, index) => {
                                return (
                                    <option key={index} value={stunList.value} {...(index === 1 ? { selected: true } : {})}>{stunList.stunItem}</option>
                                )
                            })
                        }
                    </select>
                </div>
                <div className="total-amonut mt-3">
                    <p><b>Subtotal:</b> <input type="text" className="form-control" readOnly value={subtotal==0.0?'8.00':subtotal} /> <span className="bagde">GBP</span></p>
                </div>
                <div className="btn-block text-left mt-3">
                    <a href='../../order' className="btn btn-submit btn-sm" type="button">Get Discounted Price</a>
                </div>
            </Form>
        </div>
        </>
    )
}
