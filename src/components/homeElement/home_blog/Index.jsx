import { Container, Row, Col } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import Diamond from '../../layout/Diamond'
import { blogSlider } from './homeblogData'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { ImageAssets } from '../../../config'
export default function HomeBlogs({blogs}) {
    return (
        <>
            <div className="home-blog-section pd-30">
                <Container>
                    <div className="heading text-center">
                        <h2 className="ttl">Assignment Expert Help Latest Blogs</h2>
                        <Diamond />
                    </div>
                    <Row>
                        <Col md={12}>
                            <OwlCarousel className='owl-theme' {...blogSlider} nav>
                                {blogs?.map((item,index) => {
                                    return (
                                        <div key={index} className="item">
                                            <div className="blog_box">
                                                <NavLink to={'../blog/'+item.slug} className="img-wrap">
                                                    <img src={`${ImageAssets}${item.image}`} className="img-fluid" alt={item.alter} />
                                                </NavLink>
                                                <div className="blog_content">
                                                    <h3>
                                                        <NavLink to={'../blog/'+item.slug}>{item.title}</NavLink>
                                                    </h3>
                                                </div>
                                            </div>
                                        </div>
                                        );
                                    })}
                            </OwlCarousel>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}
