import { useEffect, useState } from 'react'
import Innerbanner from '../InnerBanner'
import Breadcrumb from '../../layout/Breadcrumb'
import { expertBanner } from '../bannerData'
import { formOption } from './expertData'
import Diamond from '../../layout/Diamond'
import { NavLink } from 'react-router-dom'
import axios from 'axios';
import { Col, Container, Row } from 'react-bootstrap'
export default function Experts() {
    const url = new URL(window.location.href);
    const params = new URLSearchParams(url.search);
    const cat = params.get('category');
    const [ effect, setEffect ] = useState(2)
    const [ expert, setExpert ] = useState([]);
    const [ serviceList, setServiceList ] = useState([]);
    const handleSelect = (event) =>{
        // console.log(event.target.value);
        var url = "https://www.assignmentexperthelp.co.uk/admin/experts-json"
        axios.get(url)
          .then(response => {
            // console.log(response.data.data,event.target.value);
            const filteredExpert = response.data.data.filter(items => items.main_menu == event.target.value);
            setExpert(filteredExpert);
          })
          .catch(error => {
            console.error('Axios error:', error);
          });
    }
    const getData = ()=>{
        var url = "https://www.assignmentexperthelp.co.uk/admin/experts-json"
        if(cat != null){
            url = 'https://www.assignmentexperthelp.co.uk/admin/experts-json/'+cat;
        }
        axios.get(url)
          .then(response => {
            setExpert(response.data.data);
          })
          .catch(error => {
            console.error('Axios error:', error);
          });
    }
    useEffect(() => {
        axios.get('https://www.assignmentexperthelp.co.uk/admin/services-list')
        .then(response => {
            setServiceList(response.data);
        })
        .catch(error => {
            console.error('Axios error:', error);
        });
        const pathname = window.location.pathname.replace(/\/+$/, '');
      if (window.location.pathname !== pathname) {
        window.location.replace(pathname);
      }
        getData();
        window.scrollTo(0, 0);
    }, [cat])
    const handleView = () => {
        setEffect(effect => effect + 2);
    }
    
    return (
        <>
            <Innerbanner {...expertBanner} />
            <Breadcrumb />
            <div className="other-body pd-40">
                <div className="expert-div">
                    <Container>
                        <div className="heading">
                            <h2 className='ttl text-center'>Choose The Best Assignments Expert Near Your Location</h2>
                            <Diamond />
                            <form className="form-action" action="#">
                                <Row>
                                    {
                                        formOption.map((item, index) => {
                                            const { name, col, uniqe, classess } = item;
                                            return (
                                                <>
                                                {name=="SERVICES"?
                                                <Col key={index} className={`form-group ${col}`}>
                                                    <select
                                                        name={name}
                                                        className={classess}
                                                        onChange={handleSelect}>
                                                        {serviceList.map((serviceItem) => (
                                                            <option key={serviceItem.id} value={serviceItem.page_name}>
                                                                {serviceItem.menu_name}
                                                            </option>
                                                        ))}
                                                    </select>
                                                </Col>
                                                :<Col key={index} className={`form-group ${col}`}>
                                                    <select name={name} id={uniqe} className={classess} onChange={(e)=>handleSelect(name,e.target.value)}>
                                                        {item.otp.map((subitem, subIndex) => (
                                                            <option key={subIndex} value={item.value[subIndex]}>
                                                                {subitem}
                                                            </option>
                                                        ))
                                                        }
                                                    </select>
                                                </Col>}
                                                </>
                                            )
                                        })
                                    }
                                </Row>
                            </form>
                        </div>
                        <Row className="mt-4">
                            {
                                expert.slice(0, effect).map((item, index) => {
                                    const { slug, image, author, a_pragraph, completed_orders, rating,category } = item;
                                    return (
                                        <div key={index} className='col-lg-6 col-md-6 col-12'>
                                            <div key={index} className="experts_assignment">
                                                <NavLink to={slug} className="expert-box">
                                                    <div className="experts_ar">
                                                        <NavLink to={slug} className="img_ar">
                                                            <div className="experts_img">
                                                                <img className="img-fluid rounded-circle" src={'https://www.assignmentexperthelp.co.uk/admin/public/expert_image/'+image} alt={author} width={62} height={62} />
                                                            </div>
                                                        </NavLink>
                                                        <div className="experts_bio">
                                                            <NavLink to={slug}>
                                                                <strong>{author}</strong>
                                                            </NavLink>
                                                            <span className="badge subjec_badge">{category}</span>
                                                        </div>
                                                    </div>
                                                    <div className="descration_ar" dangerouslySetInnerHTML={{__html:a_pragraph}} >
                                                    </div>
                                                    <div className="client_order">
                                                        <span className="complete_order">
                                                            <i className="fa fa-check-circle"></i> <b><span dangerouslySetInnerHTML={{__html:completed_orders}}></span></b> Completed Orders
                                                        </span>
                                                        <span className="client_rating">
                                                            <i className='fa fa-star-o'></i> <b><span dangerouslySetInnerHTML={{__html:rating}}></span></b> Rating
                                                        </span>
                                                    </div>
                                                    <div className="btn-blocker">
                                                        <NavLink to={slug} className="btn btn-hire">View Details</NavLink>
                                                    </div>
                                                </NavLink>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                            <Col md={12}>
                            {effect < expert.length && (
                                <div className="viewMore">
                                    <button className='btn btn-success' type='button' onClick={handleView}> View More </button>
                                </div>
                            )}
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        </>
    )
}
