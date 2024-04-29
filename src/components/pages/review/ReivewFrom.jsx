import {useState, useEffect} from 'react'
// import CountryCode from '../countrycode/CountryCode'
import PhoneInput from 'react-phone-input-2'
import { selectItemPages } from '../review/reviewData'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from 'axios';
import {Col, Button, Form, Alert} from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { BaseUrl } from '../../../config';
import { makeOrder } from './actions';
// import Razorpay from 'razorpay';

const ReivewFrom = () => {
    const formatCurrentDate = (startDate) => {
        const currentDate = startDate;
        const year = currentDate.getFullYear();
        const month = String(currentDate.getMonth() + 1).padStart(2, '0');
        const day = String(currentDate.getDate()).padStart(2, '0');
        const hours = String(currentDate.getHours()).padStart(2, '0');
        const minutes = String(currentDate.getMinutes()).padStart(2, '0');
        const seconds = String(currentDate.getSeconds()).padStart(2, '0');
        return `${year}${month}${day}${hours}${minutes}${seconds}`;
      };
    const dispatch = useDispatch();
    const { data } = useSelector((state) => state.order);
    const [startDate, setStartDate] = useState(new Date());
    const [subject, setSubject] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [page, setPage] = useState('');
    const [buttonText, setButtonText] = useState('Submit');
    const [file, setFile] = useState(null);
    const [fileName, setFileName] = useState("");
    const [progress, setProgress] = useState(0);
    const [show, setShow] = useState(false);
    const [validated, setValidated] = useState(false);
    const [response, setResponse] = useState('');
    // const [payment, setPayment] = useState(null);
    
  //   const options = {
  //     key: 'YOUR_RAZORPAY_KEY_ID', // Replace with your Razorpay key ID
  //     amount: 10000, // Amount in paisa
  //     currency: 'INR',
  //     name: 'Your Company Name',
  //     description: 'Purchase Description',
  //     image: 'your_logo_url',
  //     handler: function(response) {
  //         alert(response.razorpay_payment_id);
  //     },
  //     prefill: {
  //         name: 'Your Name',
  //         email: 'your_email@example.com',
  //         contact: 'your_contact_number',
  //     },
  //     notes: {
  //         address: 'Your Address',
  //     },
  //     theme: {
  //         color: '#F37254',
  //     },
  // };

  // const openPaymentModal = () => {
  //     const rzp = new Razorpay(options);
  //     rzp.open();
  // };
    const submitOrder = ()=>{
        const formData = new FormData();
        formData.append('name', name);
        formData.append('email', email);
        formData.append('phone', phone);
        formData.append('subject', subject);
        formData.append('page', page);
        let missingFields = [];

        if (!formData.get('name')) {
            missingFields.push('Name');
        }

        if (!formData.get('email')) {
            missingFields.push('Email');
        }

        if (!formData.get('phone')) {
            missingFields.push('Phone');
        }

        if (!formData.get('subject')) {
            missingFields.push('Subject');
        }

        if (!formData.get('page')) {
            missingFields.push('Page');
        }

        if (missingFields.length > 0) {
          setValidated(true);
            return null;
        }
        let amount = page * 6;
        let now = new Date();
        let year = now.getFullYear();
        let month = String(now.getMonth() + 1).padStart(2, '0');
        let day = String(now.getDate()).padStart(2, '0');
        let hours = String(now.getHours()).padStart(2, '0');
        let minutes = String(now.getMinutes()).padStart(2, '0');
        let seconds = String(now.getSeconds()).padStart(2, '0');

        let orderId = "QUK" + year + month + day + hours + minutes + seconds;
        formData.append('amount', amount);
        formData.append('orderId', orderId);
        formData.append('date', formatCurrentDate(startDate));
        formData.append('file', fileName);
        document.getElementById('loaderss').style.display = "";
        dispatch(makeOrder(formData,setShow));
        dispatch(
          makeOrder(
            formData,
            () => {
              setShow(true);
            },
            () => {
              history.push('/services'); // Redirect to services page on failure
            }
          )
        );
    }
    // const sendMessage = async () => {
    //   try {
    //     const accessToken = 'YOUR_FACEBOOK_ACCESS_TOKEN';
    //     const recipientId = 'RECIPIENT_ID';
  
    //     const messageData = {
    //       messaging_type: 'MESSAGE_TAG',
    //       recipient: {
    //         id: recipientId,
    //       },
    //       message: {
    //         attachment: {
    //           type: 'template',
    //           payload: {
    //             template_type: 'button',
    //             text: 'Hello, world!',
    //             buttons: [
    //               {
    //                 type: 'web_url',
    //                 url: 'https://example.com',
    //                 title: 'Visit Website',
    //               },
    //             ],
    //           },
    //         },
    //       },
    //     };
  
    //     const response = await axios.post(
    //       `https://graph.facebook.com/v18.0/me/messages?access_token=${accessToken}`,
    //       messageData
    //     );
  
    //     setResponse(response.data);
    //   } catch (error) {
    //     console.error('Error sending message:', error);
    //   }
    // };
      const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }

        setValidated(true);
      };

      const handleFileChange = async (e) => {
        setButtonText("Uploading");
        const selectedFiles = e.target.files;
        setFile(selectedFiles);
        e.preventDefault();
          
        try {
          const formDataFile = new FormData();
          for (let i = 0; i < selectedFiles.length; i++) {
            formDataFile.append('files[]', selectedFiles[i]);
            setFileName(selectedFiles[i].name+"||"+fileName);
          }
          await axios.post(`${BaseUrl}upload-file`, formDataFile, {
            onUploadProgress: (progressEvent) => {
              const percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
              setProgress(percentCompleted);
              if(percentCompleted == 100){
                setButtonText('Submit');
              }
            },
          });
          // console.log('File uploaded successfully');
          setFile(null);
        //   setProgress(0);
        } catch (error) {
          // console.error('Error uploading file:', error);
        }
      };
      useEffect(()=>{
        if(data && data.Status==200){
          setTimeout(function() {
            document.getElementById('loaderss').style.display = "none";
        }, 2000);
        }
      },[data])
  return (
    <>
        <Alert show={show} variant="success">
        <Alert.Heading>Thank you!</Alert.Heading>
        <p>
        We received your request. We`ll get back to you soon.
        </p>
        <hr />
        <div className="d-flex justify-content-end">
          <Button onClick={() => window.location.replace("./service")} variant="outline-success">
            Our Services
          </Button>
        </div>
      </Alert>
      <div className="after-effect">
        <div className="review-form">
            <h2>Get Free Quotation</h2>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Form.Group controlId="validationCustom01" className="form-group">
                    <Form.Control onChange={(e)=>setName(e.target.value)} type="text" className='form-control' placeholder='Enter Your Name' 
                    required />
                    <Form.Control.Feedback type="invalid">Please enter your name</Form.Control.Feedback>
                </Form.Group>
                <Form.Group controlId="validationCustom02" className="form-group">
                    <Form.Control onChange={(e)=>setEmail(e.target.value)} type="email" className='form-control' placeholder='Enter Your Email Address' 
                    required />
                    <Form.Control.Feedback type="invalid">Please enter your email.</Form.Control.Feedback>
                </Form.Group>
                <Form.Group controlId="validationCustom03" className="form-group">
                    <PhoneInput onChange={(e)=>setPhone(e)} phone={phone} country='gb' regions={'europe'}/>
                </Form.Group>
                <Form.Group controlId="validationCustom04" className="form-group row">
                    <Col sm={7} className="new_comp pr-0">
                        <Form.Select onChange={(e)=>setPage(e.target.value)} className="form-control form-select">
                        {
                            selectItemPages.map((selectPageItem,index) => {
                            return(
                                <option key={index} value={selectPageItem.value}>{selectPageItem.items}</option>
                            )})
                        }
                        </Form.Select>
                    </Col>
                    <Col sm={5} className="new_comp">
                        <DatePicker className="form-control form-date" selected={startDate} onChange={(date) => setStartDate(date)} />
                    </Col>
                </Form.Group>
                <Form.Group controlId="validationCustom05" className="form-group">
                    <Form.Control onChange={(e)=>setSubject(e.target.value)} type="text" className='form-control' placeholder='Enter Your Subject' 
                    required />
                    <Form.Control.Feedback type="invalid">Please enter your subject.</Form.Control.Feedback>
                </Form.Group>
                <Form.Group controlId="validationCustom06" className="form-group">
                    <Form.Control type="file" name="files" className='form-control' multiple onChange={handleFileChange} />
                    {
                        progress ? <span className='upload-num'>{progress} % Upload</span>:null
                    }                                
                </Form.Group>
                <div className="btn-block mt-3">
                    {
                        buttonText == "Submit" ? <button onClick={submitOrder} className='btn btn-warning w-100'>{buttonText}</button>:<button disabled className='btn btn-warning w-100'>{buttonText}</button>
                    }
                </div>
            </Form>
        </div>    
      </div>
    </>
  )
}
export default ReivewFrom;

