import { useEffect, useState } from 'react';
import { NavLink } from "react-router-dom";
import Breadcrumb from '../../layout/Breadcrumb';
import Diamond from '../../layout/Diamond';
import Servicebanner from './Servicebanner';
import Meta from '../../layout/meta';
import axios from 'axios';
import { Col, Container, Row } from 'react-bootstrap';

export default function Services() {
    const [selected, setSelected] = useState(null);
    const [serviceList, setServiceList] = useState([]);
    const toggle =(i) => {
        if(selected == i){
            return setSelected(null)
        }
        setSelected(i)
    }
    useEffect(() => {
        const pathname = window.location.pathname.replace(/\/+$/, '');
      if (window.location.pathname !== pathname) {
        window.location.replace(pathname);
      }
        window.scrollTo(0, document.getElementsByClassName('page-header2')[0].clientHeight-50);
        axios.get('https://www.assignmentexperthelp.co.uk/admin/services-list')
        .then(response => {
            setServiceList(response.data);
        })
        .catch(error => {
            // console.error('Axios error:', error);
        });
    }, []);
  return (
    <>
        <Meta rule={document.location.href.split('/')[document.location.href.split('/').length-1]}/>
        <Servicebanner />
        <Breadcrumb />
        <div className="other-body pd-40">
            <section className='service_section'>
                <Container>
                    <div className="heading text-center">
                        <h2 className="ttl">Requirement-Suited Help Service For UK Students By Subject Professionals</h2>
                        <Diamond />
                    </div>
                    <Row className="row">
                        <Col>
                            <div className='panel-group' id='accordion'>
                                    {
                                        serviceList.map((item, i) => {
                                            return (
                                                <>
                                                    <div className='panel panel-default'>
                                                        <div className='panel-heading' role='tab'>
                                                            <h4 className={`panel-title ${selected === i ? 'active' : ''}`}  onClick={() => toggle(i)}>
                                                                <NavLink to={`/service/${item.page_name}`}>{item.menu_name}</NavLink>
                                                            </h4>
                                                        </div>
                                                        <div className={selected === i ? 'panel-collapse show' : 'panel-collapse'}>
                                                            <div className='panel-body'>
                                                                <div className='services-list-body service__panel'>
                                                                    <ul className='list list-unstyled'>
                                                                        {
                                                                            item.pagename.map((subItem, index) => (
                                                                                <li key={index}>
                                                                                    <NavLink to={`/service/${item.pagename[index]}`}>{subItem.replace('-',' ').replace('-',' ').replace('-',' ').replace('-',' ')}</NavLink>
                                                                                </li>
                                                                            ))
                                                                        }
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </>
                                            )
                                        })
                                    }
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </div>
    </>
  )
}
