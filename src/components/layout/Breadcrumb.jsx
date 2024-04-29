import React from 'react'
import { Container } from 'react-bootstrap';
import { NavLink, useLocation  } from 'react-router-dom'


export default function Breadcrumb() {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  return (
    <>
        <div className='bread_section'>
            <nav aria-label="breadcrumb" className="breadcrumb-nav">
              <Container>
                <div className="breadcrumb">
                    <div className="breadcrumb-item" itemscope itemtype="https://schema.org/BreadcrumbList">
                      <NavLink to="/" className='home_item'>Home</NavLink>
                      {
                        pathnames.map((name,index) => {
                          const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
                          const isLast = index === pathnames.length - 1;
                          return (
                            <li key={index} className={`bred ${isLast ? 'active':''}`}>
                              {
                                isLast ? (
                                  name.replace(/-|_/g, ' ').replace(/\b\w/g, c => c.toUpperCase())
                                ) : (
                                  <NavLink to={routeTo}>{name.replace(/-|_/g, ' ').replace(/\b\w/g, c => c.toUpperCase())}</NavLink>
                                )
                              }
                            </li>
                          )
                        })
                      }
                    </div>
                </div>   
              </Container>
            </nav>
        </div>
    </>
  )
}
