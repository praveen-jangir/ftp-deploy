import { NavLink } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios';
import { BaseUrl,HEADERS } from '../../config';
// import logo from '../../../public/assets/images/logo.webp'
import { navItem } from '../layout/headerData'
import { Container, Navbar } from 'react-bootstrap';
export default function Header() {
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredResults, setFilteredResults] = useState([]); 
    const SearchResult = (query) =>{
        setFilteredResults([]);
        axios
        .get(`${BaseUrl}search?q=${query.toLowerCase()}`,HEADERS)
        .then((response) => {
          // console.log(response.data.search);
          setFilteredResults(response.data.search);
        })
        .catch(() => {
            setFilteredResults([]);
        });
    }
    const [hide, setHide] = useState(false)
    const [sticky, setSticky] = useState(false);
    const [toggle, setToggle] = useState(false);

        // on render, set listener
    useEffect(() => {
        setToggle(!toggle);
        window.addEventListener("scroll", isSticky);
        return () => {
          window.removeEventListener("scroll", isSticky);
        };
      }, []);
      const isSticky = () => {
        /* Method that will fix header after a specific scrollable */
        const scrollTop = window.scrollY;
        const stickyClass = scrollTop >= 100 ? "is-sticky" : "";
        setSticky(stickyClass);
      };
      const classes = `header ${sticky}`;

      
  
  return (
    <>
        <header className={classes}>
            <div className='topbar_mode'>
                <Container>
                    <div className='topbar'>
                        <aside className='left'>
                            <div className='call_bot'>
                                <NavLink to='tel:+447520644027'><i className='fa fa-phone'></i> +447520644027 </NavLink>                            
                                <NavLink to='mailto:support@assignmentexperthelp.co.uk'><i className='fa fa-envelope'></i> support@assignmentexperthelp.co.uk </NavLink>                            
                            </div>
                        </aside>
                        <aside className='right'>
                            <div className='call_bot'>
                                <p>UK’s No.1 Essay and Assignment Help. Get Upto 30% off</p>
                            </div>
                        </aside>
                    </div>
                </Container>
            </div>
            <div className='middle_mode'>
                <Navbar expand="lg" className="navbar-light bg-light">
                    <Container>
                        <NavLink className='navbar-brand' to='/'>
{/*                             <img src={ logo } alt="logo.svg" className='img-fluid' width={200} /> */}
                        </NavLink>
                        <div className="mobile">
                            <NavLink to='/order' className='btn btn-warning btn-sm' type='submit'>Order Now</NavLink>
                            <span className='fa fa-search ml-4 mr-3' id="toggle" onClick={() => setHide(!hide)}></span>
                            {/* <span className='fa fa-shopping-cart ml-4'>
                                <span className='point'>0</span>
                            </span> */}
                            <Navbar.Toggle aria-controls="navbarSupportedContent">
                                <label for="checkbox" class="toggle">
                                    <div class="bars" id="bar1"></div>
                                    <div class="bars" id="bar2"></div>
                                    <div class="bars" id="bar3"></div>
                                </label>
                            </Navbar.Toggle>
                        </div>
                        <Navbar.Collapse id="navbarSupportedContent">
                            <ul className='navbar-nav ml-auto'>
                                {
                                    navItem.map((navlinkItem) => {
                                        return(
                                            <li key={navlinkItem.item} className={`nav-item ${navlinkItem.subItem ? 'dropdown' : ''}`}>
                                                {
                                                    navlinkItem.subItem ? (
                                                        <>
                                                            <NavLink className='nav-link dropdown-toggle' to={navlinkItem.path} data-toggle="dropdown">{navlinkItem.item}</NavLink>
                                                            <div className='dropdown-menu'>
                                                                        {
                                                                            navlinkItem.subItem.map((subCate, index) => {
                                                                                return (
                                                                                    <NavLink className='dropdown-item' key={index} to={subCate} onClick={() => setToggle(!toggle)}>{subCate}</NavLink>
                                                                                )
                                                                            })
                                                                        }
                                                            </div>
                                                        </>
                                                    ) : (
                                                        <NavLink className='nav-link' to={navlinkItem.path} onClick={() => setToggle(!toggle)}>{navlinkItem.item}</NavLink>
                                                    )
                                                }
                                            </li>
                                        )
                                    })    
                                }
                                <li className='nav-item orde_it'>
                                    <NavLink to='/order' className='btn btn-warning btn-sm' type='submit'>Order Now</NavLink>
                                </li>
                                <li className='nav-item orde_it'>
                                    {/* <span className='fa fa-search ml-4' id='toggle' onClick={() => setHide(!hide)}></span> */}
                                    {/* <span className='fa fa-shopping-cart ml-4'> <span className='point'>0</span></span> */}
                                </li>
                            </ul>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        </header> 
            {hide && ( 
                <div className="search-main">
                    <div className="search-box-inner">
                        <Container>
                            <form method="post" action="search" className="search-form">
                                <div className="form-group">
                                    <input
                                     type="search" 
                                     name="search" 
                                     id="site_search" 
                                     className="form-control" 
                                     placeholder="What are you looking for" 
                                     value={searchQuery}
                                     onChange={(e) => {
                                        setSearchQuery(e.target.value);
                                        SearchResult(e.target.value);
                                      }}
                                     />
                                    <span className='fa fa-search'></span>
                                    <span className='fa fa-times' onClick={() => setHide(!hide)}></span>
                                </div>
                                {
                                    filteredResults && filteredResults.length > 0 && (
                                        <div className="resultBox">
                                            <ul>
                                            {filteredResults.map((result, index) => (
                                                <li key={index}>
                                                    <NavLink onClick={() => setHide(!hide)} to={result.slug}>{result.name}</NavLink>
                                                </li>
                                            ))}
                                            </ul>
                                        </div>
                                    )
                                }
                            </form>
                        </Container>
                    </div>
                </div>
            )}
    </>
  )
}
