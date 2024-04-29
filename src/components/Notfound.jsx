import { NavLink } from 'react-router-dom'
import { Helmet } from "react-helmet";  

export default function Notfound() {


  return (
    <>
    <Helmet>
        <title>Page Not Found</title>
        <meta name="description" content="Page Not Found" />
        <meta name="robots" content="noindex"/>
        <meta http-equiv="status" content="404" />
      </Helmet>
        <div className='flex-container'>
            <div className='text-center'>
                <h1>
                  <span className='fade-in' id='digit1'>4</span>
                  <span className='fade-in' id='digit2'>0</span>
                  <span className='fade-in' id='digit3'>4</span>
                </h1>
                <h3 className='fadeIn'>PAGE NOT FOUND</h3>
                <NavLink to='/' className='btn back-btn'>Return To Home</NavLink>
            </div>
        </div>
    </>
  )
}