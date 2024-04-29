import React from 'react'
import { formSelect } from './formselectData' 
import { Form } from 'react-bootstrap'

export default function From(props) {
  return (
    <>
        <Form action="#">
            {
                formSelect.map((formSelectItem) => {
                    return (
                    <div className="form-group">
                        <select className="form-control form-select">
                            {
                                formSelectItem.optioned.map((innerSelectItem, index) => {
                                    return(
                                        <option key={index} value={formSelectItem.value[index]}>{innerSelectItem}</option>
                                    )
                                })
                            }
                        </select>
                    </div>
                    )
                })
            }
            <div className="price-off">
                <aside className="left side">
                    <span className='badge bg-success'>{props.offRate}</span> <del>{props.changedRate}</del>
                </aside>
                <aside className='right side'>
                    <span>{props.inr}</span>
                </aside>
            </div>
            <div className="btn-block mt-3">
                <button className='btn btn-warning w-100'>{props.btn}</button>
            </div>
        </Form> 
    </>
  )
}
