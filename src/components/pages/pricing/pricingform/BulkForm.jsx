import React,{useEffect,useState} from 'react'

import { useDispatch, useSelector } from 'react-redux';
import { makeOrder } from './actions';
import { Col, Row } from 'react-bootstrap';
export default function BulkForm() {  
    const dispatch = useDispatch();
    const { data } = useSelector((state) => state.order);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const submitOrder = ()=>{
        document.getElementById('wifi-loader').style.display = "block";
        const formData = new FormData();
        formData.append('name', name);
        formData.append('email', email);
        formData.append('phone', phone);
        dispatch(makeOrder(formData));
    }
      useEffect(()=>{
        if(data && data.response.Status==200){
            document.getElementById('wifi-loader').style.display = "none";
            // alert("Redirect To CheckOut Form");
        }
      },[data])
  return (
    <>  
        <div className='student-form'>
            <Row className="align-items-center">
              <Col lg={8} md={12}>
                <form action='#'>
                    <div className='form-group'>
                        <label htmlFor='name'>Name</label>
                        <input onChange={(e)=>{setName(e.target.value)}} type='text' className='form-control' id='name' name='name' placeholder='Enter Your Name' required/>
                    </div>
                    <div className='form-group'>
                        <label htmlFor='email'>Email</label>
                        <input onChange={(e)=>{setEmail(e.target.value)}} type='email' className='form-control' id='email' name='email' placeholder='Enter Your Email Address' required/>
                    </div>
                    <div className='form-group'>
                        <label htmlFor='contact'>Contact Number</label>
                        <input onChange={(e)=>{setPhone(e.target.value)}} type='text' className='form-control' id='contact' name='name' placeholder='Enter Your Contact Number' required/>
                    </div>
                    <div className="btn-block">
                        <button onClick={submitOrder} className='btn btn-submit btn-sm' type="button">Order Now</button>
                    </div>
                </form>
              </Col>
              <Col lg={4} md={12}>
                  <div className="img-box text-center">
                      <img src='../assets/images/guarantee.webp' alt='guarantee icon' className='img-fluid'/>
                  </div>
              </Col>
            </Row>
        </div>
    </>
  )
}

