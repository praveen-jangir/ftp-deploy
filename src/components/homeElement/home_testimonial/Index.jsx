import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import Diamond from '../../layout/Diamond';
import { testiMaker, titleList } from './homeTestidata'
import { Container, Row, Col, Tab, Nav  } from "react-bootstrap";
import { NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react'
import axios from 'axios';



export default function Testimonial() {
    const [review, setReview] = useState([]);
    const getData = ()=>{
        axios.get('https://www.assignmentexperthelp.co.uk/admin/tab-expert')
          .then(response => {
            // console.log(response);
            setReview(response.data);
          })
          .catch(() => {
          });
    }
    useEffect(() => {
        getData();
    }, []);
  return (
    <>      
        <div className="testimoal-section pd-30">
            <Container>
                <div className="heading text-center mb-4">
                    <h2 className='ttl' dangerouslySetInnerHTML={{__html:titleList.title}} />
                    <p dangerouslySetInnerHTML={{__html:titleList.desc}} />
                    <Diamond />
                </div>
                <Tab.Container id="left-tabs-example" defaultActiveKey="308">
                    <Row>
                        <Col lg={5} md={12}>
                            <div className="outer">
                                <ul className="calc-box">
                                    {review.map((calc, index) => {
                                        const { id, menu_name} = calc;
                                        return (
                                            <li className="detail-box" key={index}>
                                                <Nav.Link eventKey={id}>{menu_name.replace("Help","Expert")}</Nav.Link>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                        </Col>
                        <Col lg={7} md={12}>
                            <Tab.Content>
                                {review.map((item) => {
                                    const { id } = item;
                                    return (
                                        <Tab.Pane eventKey={id} key={id}>
                                            <OwlCarousel dot {...testiMaker}>
                                                {item.expert.map((subCate, subIndex) => {
                                                    return (
                                                        <div key={subIndex} className="post-slide">
                                                            <div className="post-img">
                                                                <a href={'../../experts/'+subCate.slug}>
                                                                    <img src={'https://www.assignmentexperthelp.co.uk/admin/public/expert_image/'+subCate.image} alt="" className="img-fluid" width={100} />
                                                                </a>
                                                            </div>
                                                            <div className="post-review">
                                                                <a href={'../../experts/'+subCate.slug}>
                                                                    <h3 className="post-title text-center">{subCate.author}</h3>
                                                                </a>
                                                                <p className="post-description text-center">{subCate.meta_description}</p>
                                                            </div>
                                                        </div>
                                                    );
                                                })}
                                            </OwlCarousel>
                                            <div className="btn-block text-center">
                                                <NavLink to={'/experts?category='+item.page_name} rel="nofollow" className='btn btn-viewall btn-sm'>View All</NavLink>
                                            </div>
                                        </Tab.Pane>
                                    );
                                })}
                            </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>
            </Container>
        </div>
    </>
  )
}
