import { useState, useEffect } from 'react'
import Diamond from '../../layout/Diamond';
import { reviewSlider } from '../../homeElement/home_review/homereviewData'
import { Container, Row } from 'react-bootstrap';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

export default function Servicereviews(reviews) {
    const [reviewList, setReviewList] = useState([]);

        useEffect(() => {
            if(reviews.reviews){
                setReviewList(reviews.reviews)
            }
          }, [reviews]);
    return (
        <>
            
            <div className='homeiee pt-5'>
                <Container>
                    <div className="heading text-center mb-3">
                        <h2 className='ttl'>Reviews</h2>
                        <Diamond />
                    </div>
                    <Row>
                        <OwlCarousel className='owl-theme' {...reviewSlider} nav>
                            {
                                reviewList?.map((reviewListItem,index) => {
                                    const { rate, location, comment, service } = reviewListItem;
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
                                                {/* <div className="u_info">
                                                    <p>
                                                        <img src={"https://picsum.photos/200"} width={30} height={30} alt="image" className="img-rounded loaded" />
                                                        <NavLink className="bld"><b>{author}</b></NavLink>
                                                    </p>
                                                </div> */}
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
