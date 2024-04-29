import { useEffect, useState } from 'react';
import { NavLink, useParams } from "react-router-dom";
import Breadcrumb from '../../layout/Breadcrumb';
// import { serviceList } from './data'
import Diamond from '../../layout/Diamond';
import Servicebanner from './Servicebanner';
//  Inner Banner Details
import Meta from '../../layout/meta';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSingleService } from './actions';

export default function Services() {
    const { slug } = useParams();
    const [selected, setSelected] = useState(null);
    const [serviceList, setServiceList] = useState([]);
    const { service } = useSelector((state) => state.singleService);
    const [singleService, setSingleService] = useState({});
    const [isFixed, setIsFixed] = useState(false);
    const dispatch = useDispatch();
    const toggle =(i) => {
        if(selected == i){
            return setSelected(null)
        }
        setSelected(i)
    }

    useEffect(() => {
        dispatch(fetchSingleService(slug));
      }, [dispatch, slug]);
      
      useEffect(() => {
        if (service) {
          setSingleService(service);
          axios.get('https://www.assignmentexperthelp.co.uk/admin/services-list')
            .then(response => {
                setServiceList(response.data);
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
              return response.json();
          })
            .catch(error => {
                // console.error('Axios error:', error);
            });
        }
        // console.log(setSingleService)
      }, [service, singleService]);

      useEffect(() => {
        const handleScroll = () => {
          const offset = window.scrollY;
          const threshold = 600; // Adjust this value based on when you want to fix the sidebar
    
          if (offset > threshold) {
            setIsFixed(true);
          } else {
            setIsFixed(false);
          }
        };
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);
  return (
    <>
        <Meta rule={document.location.href.split('/')[document.location.href.split('/').length-1]}/>
        <Servicebanner />
        <Breadcrumb />
        <div className="other-body pd-40">
            <section className='service_section'>
                <div className="container">
                    <div className="heading text-center">
                        <h2 className="ttl" dangerouslySetInnerHTML={{__html: singleService.title}}></h2>
                        <Diamond />
                    </div>
                    <div className="row">
                        <div className="col-md-3">
                            <div className={`service_tab ${isFixed ? 'fixed' : ''}`}>
                                <div className='panel-group' id='accordion'>
                                        {
                                            serviceList.map((item, i) => {
                                                return (
                                                    <>
                                                        <div className='panel panel-default'>
                                                            <div className='panel-heading' role='tab'>
                                                                <h4 className='panel-title' onClick={() => toggle(i)}>
                                                                    <a href='javascript:void(0)' className={selected === i ? 'active' : ''}>{item.menu_name}</a>
                                                                </h4>
                                                            </div>
                                                            <div className={selected === i ? 'panel-collapse show' : 'panel-collapse'}>
                                                                <div className='panel-body'>
                                                                    <div className='services-list-body service__panel'>
                                                                        <ul className='list list-unstyled'>
                                                                            {
                                                                                item.pagename.map((subItem, index) => (
                                                                                    <li key={index}>
                                                                                        <NavLink to={`/services/${item.pagename[index]}`}>{subItem}</NavLink>
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
                            </div>
                        </div>
                        <div className='col-md-9 border-left'>
                            <div className="entry-body">
                                <div className="entry-meta">
                                    <span className="entry-author">
                                        <NavLink to='javascript:void(0)'>{new Date(singleService.updated_at).toLocaleString()}</NavLink>
                                    </span>
                                    <span className="meta-views">
                                        <NavLink to='javascript:void(0)'>{singleService.views}</NavLink>
                                    </span>
                                </div>
                                <div className='entry-contents'>
                                    <div dangerouslySetInnerHTML={{ __html: singleService.contents }}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </>
  )
}
