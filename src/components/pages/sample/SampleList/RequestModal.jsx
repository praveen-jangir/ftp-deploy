import React from 'react'
import CountryCode from '../../countrycode/CountryCode'
// import { countryCode } from '../../sample/SampleList/FromData'


const modalData ={
    title : 'Request For More Sample',
    btn: 'Submit'
}
export default function RequestModal() {
  return (
    <>

        {/* Modal */}
        <div className='pattelMode modal fade' id='requestPop' tabindex='-1' role='dialog' aria-labelledby='requestPopTitle' 
            aria-hidden='true'>
            <div className='modal-dialog modal-dialog-centered' role='document'>
                <div className='modal-content'>
                    <div className='modal-header'>
                        <h5 className='modal-title' id='requestPopLongTitle'>{modalData.title}</h5>
                        <button type='button' className='close' data-dismiss='modal' aria-label='Close'>
                        <span aria-hidden='true'>&times;</span>
                        </button>
                    </div>
                    <div className='modal-body'>
                        <form action="#">
                            <div className="form-group">
                                <label htmlFor="name">Name</label>
                                <input type="text" className='form-control' placeholder='Enter Your Name' />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input type="text" className='form-control' placeholder='Enter Your Email Address' />
                            </div>
                            <div className="form-group">
                                <label htmlFor="countries">Country</label>
                                {/* <select class="form-control form-select" id="phone" name="country_code">
                                    {
                                        countryCode.map((countryItem) => {
                                            return (
                                                <option data-countrycode={countryItem.code} value={countryItem.pin}>{countryItem.item}</option>
                                            )
                                        })
                                    }
                                </select> */}
                                <CountryCode />
                                
                            </div>
                            <div className="form-group">
                                <label htmlFor="phone">Contact No.</label>
                                <input type="text" className='form-control' placeholder='0000-0000-00'/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="phone">Subject</label>
                                <input type="text" className='form-control' placeholder='Enter Your Subject'/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="phone">Comment</label>
                                <textarea type="text" className='form-control' placeholder='Drop Your Comment'></textarea>
                            </div>
                        </form>
                    </div>
                    <div className='modal-footer'>
                        <button type='button' className='btn btn-sm btn-success'>{modalData.btn}</button>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
