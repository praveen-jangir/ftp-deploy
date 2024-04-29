import { useEffect, useState } from 'react';
import { NavLink, useParams } from "react-router-dom";
import Breadcrumb from '../../layout/Breadcrumb';
import Diamond from '../../layout/Diamond';
import Servicebanner from './Servicebanner';
import Servicereviews from './Servicereviews';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSingleService } from './actions';
import { Helmet } from "react-helmet";
import Servicefaq from './Servicefaq';
import Divider from '../../layout/Divider';
import ServicePricingForm from './ServicePricingForm';
import HomeBlogs from '../../homeElement/home_blog/Index';
import { Col, Container, Row } from 'react-bootstrap';
import Expert from '../../layout/Expert';
export default function Services() {
    const { slug } = useParams();
    const [serviceList, setServiceList] = useState([]);
    const { service } = useSelector((state) => state.singleService);
    const [singleService, setSingleService] = useState({});
    const [isFixed, setIsFixed] = useState(false);
    const [related, setRelated] = useState([]);
    const [expert, setExpert] = useState([]);
    const dispatch = useDispatch();
    const [blogs ,setBlogs] = useState([]);
    const getData=()=>{
        axios.get('https://www.assignmentexperthelp.co.uk/admin/blog-json/1')
                .then(response => {
                    document.getElementById('wifi-loader').style.display = "none";
                    // console.log(response.data);
                    setBlogs(response.data);
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return response.json();
                })
                .catch(() => {
                    // console.error('Axios error:', error);
                });
    }
    const getExpertData = ()=>{
        var url = "https://www.assignmentexperthelp.co.uk/admin/experts-json"
        if (slug) {
          url = `https://www.assignmentexperthelp.co.uk/admin/experts-json/${slug}`;
        }
          axios.get(url)
            .then(response => {
            //   console.log(response.data.data);
              setExpert(response.data.data);
            })
            .catch(error => {
              console.error('Axios error:', error);
            });
      }
    useEffect(() => {
        getExpertData();
        const pathname = window.location.pathname.replace(/\/+$/, '');
        if (window.location.pathname !== pathname) {
            window.location.replace(pathname);
        }
        dispatch(fetchSingleService(slug));
    }, [dispatch, slug]);

    useEffect(() => {
        document.getElementById('wifi-loader').style.display = "flex";
        if (service) {
            setSingleService(service);
            if (service == "404 page") {
                window.location.replace("/404");
            }
            axios.get('https://www.assignmentexperthelp.co.uk/admin/services-list')
                .then(response => {
                    document.getElementById('wifi-loader').style.display = "none";
                    response?.data?.map((item)=>{
                        if(item.page_name == slug){
                            setRelated(item.pagename);
                        }else{
                            item?.pagename?.map((item1)=>{
                                if(item1 == slug){
                                    setRelated(item.pagename);
                                }
                            })
                        }
                    })
                    setServiceList(response.data);
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return response.json();
                })
                .catch(() => {
                    // console.error('Axios error:', error);
                });
        }

    }, [service, singleService]);

    useEffect(() => {
        getData()
        window.scrollTo(0, document.getElementsByClassName('page-header2')[0].clientHeight - 50);
        const handleScroll = () => {
            const offset = window.scrollY;
            const threshold = 500;

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
            <Helmet>
                <title>{singleService.title}</title>
                <meta name="description" content={singleService.description} />
                <meta name="keywords" content={singleService.keyword} />
                <link rel="canonical" href={window.location.href}></link>
                <link rel="alternate" href={window.location.href} hrefLang="en-gb"></link>
                {singleService.other_script && (
                    document.head.insertAdjacentHTML('beforeend', singleService.other)
                )}
                <meta property="og:title" content={singleService.title} />
                <meta property="og:description" content={singleService.description} />
                <meta property="og:image" content="https://www.assignmentexperthelp.co.uk/services.jpg" />
                <meta property="og:url" content={window.location.href} />
                <meta property="og:type" content="website" />
                {/* Additional OG tags */}
                <meta property="og:site_name" content="Assignment Expert Help UK" />
                <meta property="og:locale" content="en_UK" />
                <meta property="og:article:author" content="Noah Patel" />
            </Helmet>
            <Servicebanner title={singleService} />
            <Breadcrumb />
            <div className="other-body pd-40">
                <section className='service_section single_service'>
                    <Container>
                        <div className="heading text-center">
                            {/* <h2 className="ttl" dangerouslySetInnerHTML={{__html: singleService.title}}></h2> */}
                            <Diamond />
                        </div>
                        <Row>
                            <Col lg={8} md={12} className='border-right'>
                                <div className="entry-body">
                                    <div className='entry-content'>
                                        <div dangerouslySetInnerHTML={{ __html: singleService?.contents?.split("<p>SAMPLEBANNER</p>")[0].split('<p>EXPERTSECTION</p>')[0] }} />
                                    </div>
                                    {expert.length!=0 &&(
                                        <Expert expert={expert}/>
                                    )}
                                    <div className='entry-content'>
                                        <div dangerouslySetInnerHTML={{ __html: singleService?.contents?.split("<p>SAMPLEBANNER</p>")[0].split('<p>EXPERTSECTION</p>')[1] }} />
                                    </div>
                                    {/* <div className="free--claim">
                                        <div className='row align-items-center'>
                                            <div className='col'>
                                                <div className="img-trap">
                                                    <img src="../assets/images/new_img/free-sample.webp" alt="free-sample.webp" className='img-fluid' />
                                                </div>
                                            </div>
                                            <div className='col'>
                                                <div className="sample--example">
                                                    <h3>Law Coursework Help</h3>
                                                    <p>
                                                        Referencing is an important part of the case study. It assists in avoiding 
                                                        risks of plagiarism and acknowledging the contribution of others in the 
                                                        accomplishment of your assignment. 
                                                    </p>
                                                    <div className="btn-block mt-4">
                                                        <Button className='btn btn-sample btn-sm'>Claim Free Sample</Button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div> */}
                                    <div className='entry-content'>
                                        <div dangerouslySetInnerHTML={{ __html: singleService?.contents?.split("<p>SAMPLEBANNER</p>")[1] }} />
                                    </div>
                                    <div className='text-center'><NavLink to={'../../order'} className="btn btn-hire btn-sm">Get Service</NavLink></div>
                                </div>
                            </Col>
                            <Col lg={4} md={12} className="shifting2">
                                <div className="offer-date">
                                    <img src="../assets/images/new_img/Thesis-Writing-Services.webp"
                                        alt="Thesis-Writing-Services.webp" className='img-fluid' />
                                </div>
                                <div className="service_tab releted-service">
                                    <h2>Related Service</h2>
                                    <ul className="service-list-item">
                                        {
                                            related.map((item) => {
                                                return (
                                                    <>
                                                        <li>
                                                            <h4 className='panel-title'>
                                                                <NavLink to={`/service/${item}`}>{item.replace('-'," ").replace('-'," ").replace('-'," ").replace('-'," ").split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}</NavLink>
                                                            </h4>
                                                        </li>
                                                    </>
                                                )
                                            })
                                        }
                                    </ul>
                                </div>
                                <div className={`service_tab ${isFixed ? 'fixed' : ''}`}>
                                    <div className="pricing--form--service">
                                        <ServicePricingForm serviceList={serviceList} slug={singleService.parentName}/>
                                    </div>
                                </div>
                            </Col>
                            <Col md={12} className="shifting3 mt-5">
                                <Divider />
                                <Servicefaq faqs={singleService.faqs} />
                                <Divider />
                                <Servicereviews reviews={singleService.reviews} />
                                <HomeBlogs blogs={blogs}/>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </div>
        </>
    )
}
