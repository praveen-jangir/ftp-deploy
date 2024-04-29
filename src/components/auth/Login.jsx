import React,{useState} from 'react'
import { NavLink } from 'react-router-dom'
import { signInData } from '../auth/authData'
import { BaseUrl,HEADERS } from '../../config';
import axios from 'axios';
import { useEffect } from 'react';
import {id} from './User';
export default function Login() {
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const login = () =>{
        const formData = new FormData();
        formData.append('email', email);
        formData.append('password', password);
        axios
        .post(`${BaseUrl}login-temp`,formData, {headers: {
                  'Content-Type': 'multipart/form-data',
              }})
        .then((response) => {
          const data = response.data;
          if(data.status == 200){
            localStorage.setItem('wqe2ewqe234rewr43r4wer4qwq3rwrr34rt4werwe', data.data.slice(9,data.data.indexOf("ju4j48eu")));
            // window.location.replace("/");
          }
        })
        .catch((error) => {
            // console.log(error);
        });
    }  
    useEffect(() => {
        if(id){
            window.location.replace("/");
        }
      }, []);
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
                                <h2 className='heading'> <i className='fa fa-user'></i> SIGN IN</h2>
                                {
                                    signInData.map((signinItem) => (
                                        <div className='form-group' key={signinItem.name}>
                                            <i className={`icon ${signinItem.icon}`}></i>
                                            {
                                                signinItem.type === "email" ? (
                                                    <input
                                                        onChange={(e) => setEmail(e.target.value)}
                                                        className={signinItem.classess}
                                                        type={signinItem.type}
                                                        placeholder={signinItem.placeholder}
                                                    />
                                                ) : signinItem.type === "password" ? (
                                                    <input
                                                        onChange={(e) => setPassword(e.target.value)}
                                                        className={signinItem.classess}
                                                        type={signinItem.type}
                                                        placeholder={signinItem.placeholder}
                                                    />
                                                ) : null
                                            }
                                        </div>
                                    ))
                                }
                                <div className="btn-block">
                                    <button type='button' className='btn btn-success btn-sm' onClick={login}>Submit </button>
                                </div>
                            </form>
                            <div className='login-form'>
                                <ul>
                                    <li>
                                        Don't have an acount? <NavLink to='/sign-up'>Register Here!</NavLink>
                                    </li>
                                    <li><NavLink to='/forgot-password'>Password Help <span className='fa fa-question '></span></NavLink></li>
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
