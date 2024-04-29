import { useEffect, useState } from 'react'
import Diamond from '../../layout/Diamond'
import { radioList } from './orderformData'
import PhoneInput from 'react-phone-input-2'
import { useDropzone } from 'react-dropzone';
import Meta from '../../layout/meta';
import axios from 'axios';
import { BaseUrl } from '../../../config';

import { useDispatch, useSelector } from 'react-redux';
import { makeOrder } from '../review/actions';
import { Col, Container, Row } from 'react-bootstrap';

export default function OrderNow() {
 const [counting, setCounting] = useState(250);
  const [counterd, setCounterd] = useState(1);
  const [uploadedText, setUploadedText] = useState('');
  const [attachmentIndex, setAttachmentIndex] = useState([]);
  const [showCoupon, setShowCoupon] = useState(true);
  const [scrollEnabled, setScrollEnabled] = useState(true);
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
  const [name, setName] = useState('Name');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [page, setPage] = useState('');
  const [buttonText, setButtonText] = useState('Submit');
  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState("");
  const [progress, setProgress] = useState(0);
  const [des, setDes] = useState('');
  const submitOrder = ()=>{
    
      document.getElementById('wifi-loader').style.display = "block";
      const formData = new FormData();
      formData.append('name', name);
      formData.append('email', email);
      formData.append('phone', phone);
      formData.append('subject', subject);
      formData.append('page', counting);
      formData.append('des', des);
      let amount = (counting/250) * 6;
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
      dispatch(makeOrder(formData));
      dispatch(
        makeOrder(
          formData,
          () => {
            window.location.replace("./services");
          },
          () => {
            history.push('/services'); // Redirect to services page on failure
          }
        )
      );
  }
  const handleFileChange = async (e) => {
    setButtonText("Uploading");
    const selectedFiles = e.target.files;
    setFile(selectedFiles);
    e.preventDefault();
    setAttachmentIndex([...attachmentIndex, ...selectedFiles]);
      
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
  
  const onDrop = (acceptedFiles) => {
    const file = acceptedFiles[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const text = event.target.result;
        setUploadedText([...uploadedText, text]);
        setAttachmentIndex(attachmentIndex + 1);
      };
     reader.readAsText(file);
    }};
  const { getRootProps, getInputProps } = useDropzone({ onDrop });
  
  useEffect(() => {
    if (scrollEnabled) {
      window.scrollTo(0, 0);
    }
  }, [scrollEnabled]);
  const handleIncrement = () => {
    setCounting(counting + 250);
    setCounterd(counterd + 1);
    setScrollEnabled(false);
  };

  const handleDecrement = () => {
    if (counting > 0) {
      setCounting(counting - 250);
      setCounterd(counterd - 1);
      setScrollEnabled(false);
    }
  };
  const handleInputChange = (e) => {
    const value = parseInt(e.target.value, 10);
    if (!isNaN(value) && value >= 0) {
      setCounting(value);
      setCounterd(Math.ceil(value / 250));
      setScrollEnabled(false);
    }
  };
  
  const toggleCoupon  = () => {
    setShowCoupon(!showCoupon);
    setScrollEnabled(false);
};
  return (  
    <>
        <Meta rule={document.location.href.split('/')[document.location.href.split('/').length-1]}/>
        <div className='other-body pd-40'>
          <Container>
            <div className='heading'>
              <h2 className='ttl text-center'>Get expert help from 180+ experts for assignment assitance </h2>
              <Diamond />
            </div>
            <div className='radio-inputs'>
                {
                  radioList.map((radioItem,index) => {
                    return (
                      <label key={index} className='radio'>
                        <input type={radioItem.type} name={radioItem.name} defaultChecked={radioItem.defaultChecked}/> <span className='name'> {radioItem.label}</span>
                      </label>
                    )
                  })
                }
            </div>
            <div className="order-form pt-4">
              <div className="outer-form">
                <div action='#'>
                  <Row>
                    {/* Left Form */}
                    <Col lg={6} md={12}>
                      <div className="form-group">
                        <label htmlFor="email" className='inputed'>
                          <i className='fa fa-envelope-o' name='email'></i>
                          <input onChange={(e)=>setEmail(e.target.value)} type="email" className='form-control' placeholder='Enter email for communication' name='email'/>
                          <span className='labelspan'>Email Address</span>  
                        </label>
                      </div>
                      <div className="form-group">
                        <label htmlFor="coursecode" className='inputed'>
                          <PhoneInput value={phone}
                            onChange={phone => setPhone(phone )}/>
                          <span className='labelspan'>Phone Number</span>  
                        </label>
                      </div>
                      <div className="form-group">
                        <label htmlFor="coursecode" className='inputed'>
                          <i className='fa fa-envelope-o' name='coursecode'></i>
                          <input onChange={(e)=>setSubject(e.target.value)} type="text" className='form-control' placeholder='Eg. UNCC100 Self & Community' name='coursecode'/>
                          <span className='labelspan'>Subject/CourseCode</span>  
                        </label>
                      </div>
                      <div className="form-group inputed2">
                        <label className='labeltag'>Deadline <small> (5 days left)</small></label> <br/> 
                        <div className="row">
                          <div className="col-sm-6">
                            <div className='inputed'>
                              <i className='fa fa-calendar' name='date'></i>
                              <input type="date" className='form-control' name='date'/>
                            </div>
                          </div>
                          <div className="col-sm-6">
                            <div className='inputed '>
                              <i className='fa fa-clock-o' name='time'></i>
                              <select className="form-control form-select">
                                  <option value="2:00 AM">2:00 AM</option>
                                  <option value="4:00 AM">4:00 AM</option>
                                  <option value="6:00 AM">6:00 AM</option>
                                  <option value="8:00 AM">8:00 AM</option>
                                  <option value="10:00 AM">10:00 AM</option>
                                  <option value="12:00 PM">12:00 PM</option>
                                  <option value="2:00 PM">2:00 PM</option>
                                  <option value="4:00 PM">4:00 PM</option>
                                  <option value="6:00 PM">6:00 PM</option>
                                  <option value="8:00 PM">8:00 PM</option>
                                  <option value="10:00 PM">10:00 PM</option>
                                  <option value="11:59 PM">11:59 PM</option>
                              </select>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="form-group">
                        <label className='labeltag'>No. of pages <small> ( {counting} words = {counterd} page )</small></label>
                        <div className="btn-event">
                            <button className='minus btn' role='button' type='button' onClick={handleDecrement}>
                              <i className='fa fa-minus'></i>
                            </button>
                            <input type="text" className='form-plus' value={counting} onChange={handleInputChange}/>
                            <button className='plus btn' role='button' type='button' onClick={ handleIncrement }>
                              <i className='fa fa-plus'></i>
                            </button>
                            <span className='counter'>{counterd} Pages</span>
                        </div>
                      </div>
                    </Col>
                    {/* Right Form */}
                    <Col lg={6} md={12}>  
                      <div className="form-group plagiarism-shadow">
                        <label htmlFor="email" className='inputed'>
                          <textarea onChange={(e)=>setDes(e.target.value)} className='form-control' rows='5' cols='6' placeholder='Write assignment description'></textarea>
                          <span className='labelspan'>Enter Your Assignment Description</span>  
                        </label>
                        <div className="wrapper flexdid">
                          <div className="upload-box">
                              <input onChange={handleFileChange} name="file" id='fileInput' type="file" accept=".pdf,.docx,.doc,.txt,.pptx,.csv" hidden/>
                              <label for="fileInput" class="custom-upload-btn mb-0">Add File <i className="fa fa-paperclip"></i></label>
                          </div>
                          {
                            attachmentIndex && attachmentIndex.length > 0 && (
                              <div className='attach'>
                                  <span className='attachd'>
                                    {`${attachmentIndex.length} : Attachments`}
                                  </span>
                              </div>
                            )
                          }
                        </div>
                      </div>
                      <div className="form-group mt-4">
                      {showCoupon ? (
                          <div className='coupon' onClick={toggleCoupon}>
                            Have a coupon code?
                          </div>
                        ) : (
                          <label htmlFor="email" className='inputed'>
                            <input type="text" className='form-control pl-3' placeholder='Enter coupon code here' />
                            <span className='labelspan'>Coupon</span>  
                            <button className='apply btn btn-sm btn-success' type='button'>Apply</button>
                          </label>
                        )}
                      </div>
                      <div className="live">
                        <p><span>●</span> 178 live experts available now!</p>
                      </div>
                      <div className="form-group agreement">
                        <input type="checkbox" id="policies" name="policies" value="policies" />
                        <label htmlFor="policies"> I accept the T&C and other policies of the website and agree to receive offers and updates.</label>
                      </div>
                      <div className="btn-block text-right">
                        <button onClick={submitOrder} className='btn btn-warning btn-md'>Free assistance</button>
                      </div>
                    </Col>
                  </Row>
                </div>
              </div>
            </div>
          </Container>
        </div> 
    </>
  )
}
