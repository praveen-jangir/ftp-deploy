import React from 'react'
import { NavLink } from 'react-router-dom'
import { forgotData } from '../auth/authData'


export default function Forgot() {
  return (
    <>
        <div className='form-bg other-body pd-40'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-6 col-sm-8 mx-auto'>
                        <div className='form-container'>
                            <form className='form-horizontal'>
                                <NavLink to='/' className="logo">
                                    <img src="public/assets/images/logo.svg" className='img-fluid' alt="logo.svg" width={200}/>
                                </NavLink>
                                <h2 className='heading'> <i className='fa fa-unlock'></i> Reset Password</h2>
                                {
                                    forgotData.map((forgotDataItem) => {
                                        return (
                                            <div className='form-group'>
                                                <i className={`icon ${forgotDataItem.icon}`}></i>
                                                <input className={forgotDataItem.classess} type={forgotDataItem.type} placeholder={forgotDataItem.placeholder} />
                                            </div>
                                        )
                                    })
                                }
                                <div className="btn-block">
                                    <button type='button' className='btn btn-success btn-sm'> Reset Password </button>
                                </div>
                            </form>
                            <div className='login-form'>
                                <ul>
                                    <li>
                                        Go back to <NavLink to='/login'>Login Page!</NavLink>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}