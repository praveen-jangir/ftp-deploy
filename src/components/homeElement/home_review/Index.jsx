import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';
import Diamond from '../../layout/Diamond';
import { reviewTitle, reviewItem, reviewSlider } from './homereviewData'
import { Container, Row } from 'react-bootstrap';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import axios from 'axios';


export default function HomeReview() {
    const [review, setReview] = useState([]);
    const getData = ()=>{
        axios.get('https://www.assignmentexperthelp.co.uk/admin/reviews-json')
          .then(response => {
            // console.log(response.data.review);
            setReview(response.data.review);
          })
        //   .catch(error => {
        //     // console.error('Axios error:', error);
        //   });
    }
    useEffect(() => {
        getData();
    }, []);
    // getData();
    return (
        <>
            <div className='homeiee pt-5'>
                <Container>
                    <div className="heading text-center mb-3">
                        <h2 className='ttl'dangerouslySetInnerHTML={{__html: reviewTitle.title}}></h2>
                        <p dangerouslySetInnerHTML={{__html: reviewTitle.desc}}></p>
                        <Diamond />
                    </div>
                    <Row>
                        <OwlCarousel className='owl-theme' {...reviewSlider} nav autoplay>
                            {
                                review?.map((item,index) => {
                                    const { rate, name, location, comment, service } = item;
                                    return (
                                        <div key={index} className="box_listing-view">
                                            <div className="review_bx">
                                                <div className="star_ar">
                                                    <div className="dated"><span>{rate}</span></div>
                                                </div>
                                                <strong>{service}</strong>
                                                <p><span>{location}</span></p>
                                                <div className="cont">
                                                    <p>{comment}</p>
                                                </div>
                                                <div className="u_info">
                                                    <p>
                                                        {/* <img src={"https://picsum.photos/200"} width={30} height={30} alt="image" className="img-rounded loaded" /> */}
                                                        <NavLink className="bld"><b>{name}</b></NavLink>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </OwlCarousel>
                    </Row>
                </Container>
            </div>
        </>
    )
}
