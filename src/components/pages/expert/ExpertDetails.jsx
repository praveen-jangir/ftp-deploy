import { useEffect, useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { listItem } from './expertData';
import axios from 'axios';
import { Helmet } from "react-helmet";  
import { Col, Container, Row } from 'react-bootstrap';

export default function ExpertDetails() {
    const { slug } = useParams();
    const [expert, setExpert] = useState({
        "author": "",
        "date": "",
        "description": "",
        "description_2": "",
        "image": "treatassignment1709528832.jpg",
        "slug": "",
        "category": ""
    });
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
    const getData = (slug) => {
        axios.get('https://www.assignmentexperthelp.co.uk/admin/single-expert-json?slug=' + slug)
            .then(response => {
                // console.log(response);
                if(response){
                    setExpert(response.data);
                }
                setLoading(false);
            })
            .catch(error => {
                setError(error);
                setLoading(false);
            });
    }

    useEffect(() => {
        const pathname = window.location.pathname.replace(/\/+$/, '');
        if (window.location.pathname !== pathname) {
            window.location.replace(pathname);
        }
        getData(slug);
    }, [slug]); // Add slug as a dependency

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <>
            <Helmet>
                <title>{expert && expert.meta_title ? expert.meta_title : ''}</title>
                <meta name="description" content={expert && expert.meta_description ? expert.meta_description : ''} />
                <meta name="keywords" content={expert && expert.meta_keyword ? expert.meta_keyword : ''} />
                <link rel="canonical" href={window.location.href}></link>
                <link rel="alternate" href={window.location.href} hreflang="en-gb"></link>
                {expert.other_script && (
                    document.head.insertAdjacentHTML('beforeend', expert && expert.other_meta ? expert.other_meta : '')
                )}
            </Helmet>
            <div className="single--expert other-body pd-40">
                <Container>
                    <Row>
                        <Col md={12}>
                            <div className="expert--content">
                                <div className="expert--profile">
                                    <div className="flex-box">
                                        <div className="exp_flex">
                                            <div className="trap-wrap">
                                                
                                                <img src={`https://www.assignmentexperthelp.co.uk/admin/public/expert_image/${expert.image}`}
                                                className="img-fluid" alt={expert && expert.author ? expert.author : ''} width={150} height={150}/>
                                                <div className="accounting-tag">
                                                    {/* <NavLink to="/">{expert.category}</NavLink> */}
                                                <NavLink to={'/order'} className="btn btn-warning btn-sm">Hire Now</NavLink>
                                                </div>        
                                            </div>
                                            <div className="experts_bio">
                                                <NavLink to={expert && expert.main_menu ? '../service/'+expert.main_menu : '' }><span className='badge subjec_badge'>{expert && expert.main_menu ? expert.main_menu.replace(/-|_/g, ' ').replace(/\b\w/g, c => c.toUpperCase()) : '' }</span></NavLink>
                                                <h5 className='nameTag'>
                                                    <strong dangerouslySetInnerHTML={{ __html: expert && expert.author ? expert.author : '' }}></strong>
                                                </h5>
                                                <p dangerouslySetInnerHTML={{ __html: expert && expert.category ? expert.category : '' }}></p>
                                            </div>
                                        </div>
                                        <div className="right-aside">
                                            <div className="star-point">
                                                {listItem.star.map((starClass, index) => (
                                                    <span key={index} className={`fa ${starClass}`}></span>
                                                ))}
                                            </div>
                                            <NavLink to={'/write-review?id=' + expert.id + '&source_url=' + window.location.href} className="btn btn-success">Write a Review</NavLink>
                                        </div>
                                    </div>
                                    <div className="about-status">
                                        <h4 className='ttl'>About</h4>
                                        <p dangerouslySetInnerHTML={{ __html: expert && expert.a_pragraph ? expert.a_pragraph : '' }}></p>
                                    </div>
                                    <div className="expert-complete-detail">
                                        <div className="expert-complete-bx">
                                            <div className="subtitle">
                                                <span className={`fa fa-check-circle`}></span> <strong>{expert && expert.completed_orders ? expert.completed_orders : ''}</strong> Completed Orders
                                            </div>
                                        </div>
                                        {/* <div className="expert-complete-bx">
                                            <div className="subtitle">
                                                <span className={`fa fa-comments-o`}></span> <strong>{expert && expert.review ? expert.review : ''}</strong> Total Review
                                            </div>
                                        </div> */}
                                        <div className="expert-complete-bx">
                                            <div className="subtitle">
                                                <span className={`fa fa-calendar`}></span> <strong>{expert && expert.member_since ? expert.member_since : ''}</strong> Total Experience
                                            </div>
                                        </div>
                                        <div className="expert-complete-bx">
                                            <div className="subtitle">
                                                <span className={`fa fa-clock-o`}></span> <strong>{expert && expert.response_time ? expert.response_time : ''}</strong> Response Time
                                            </div>
                                        </div>
                                        <div className="expert-complete-bx">
                                            <div className="subtitle">
                                                <span className={`fa fa-star`}></span> <strong>{expert && expert.rating ? expert.rating : ''}</strong> Client Rating
                                            </div>
                                        </div>
                                        {/* {statusLoop.map((item, index) => {
                                            const { icon, digit, text } = item;
                                            return (
                                                <div key={index} className="expert-complete-bx">
                                                    <div className="subtitle">
                                                        <span className={`fa ${icon}`}></span> <strong>{digit}</strong> {text}
                                                    </div>
                                                </div>
                                            )
                                        })} */}
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
}
