import { useRef,useState,useEffect } from 'react'
import Breadcrumb from '../../layout/Breadcrumb'
import Diamond from '../../layout/Diamond'
import ReviewBanner from './ReviewBanner'
import { selectService } from './reviewData'
import Meta from '../../layout/meta'
import axios from 'axios';
import { NavLink } from 'react-router-dom'; // Import NavLink from react-router-dom
import { Col, Container, Row } from 'react-bootstrap'

export default function Review() {
    window.scrollTo(0, 0);
    const slidersListRef = useRef();
    const [reviewList, setReviewList] = useState([]);
    const [reviewCount, setReviewCount] = useState(0);
    // const handleScroll = (direction) => {
    //   const slidersWidth = window.innerWidth < 767 ? 150 : direction === "right" ? 500 : -500;
    //   slidersListRef.current.scrollBy({ top: 0, left: slidersWidth, behavior: "smooth" });
    // };
    useEffect(() => {
        const pathname = window.location.pathname.replace(/\/+$/, '');
        if (window.location.pathname !== pathname) {
            window.location.replace(pathname);
        }
        axios.get('https://www.assignmentexperthelp.co.uk/admin/reviews-json')
          .then(response => {
            setReviewList(response.data.review);
            setReviewCount(response.data.count);
          })
          .catch(error => {
            // console.error('Axios error:', error);
          });
      }, []);
  return (
    <>
          <Meta rule={document.location.href.split('/')[document.location.href.split('/').length-1]}/>
        <ReviewBanner />
        <Breadcrumb />
        <div className="other-body pd-40">
            <section className="review-section">
                <Container>
                    {/* Heading */}
                    <Row className="align-items-center mb-2">
                        <Col md={6}>
                            <div className="heading ">
                                <h2 className="ttl">Recently Added Reviews</h2>
                            </div>
                        </Col>
                        <Col md={6}>
                            <div className="form-grp">
                                <form action="#">
                                {
                                    selectService.map((selectServiceItem,index) => {
                                        return (
                                        <div key={index} className="form-group">
                                            <select className="form-control form-select">
                                                {
                                                    selectServiceItem.optioned.map((innerSelectItem, index) => {
                                                        return(
                                                            <option key={index} value={selectServiceItem.value[index]}>{innerSelectItem}</option>
                                                        )
                                                    })
                                                }
                                            </select>
                                        </div>
                                        )
                                    })
                                }
                                </form>
                            </div>
                        </Col>
                    </Row>
                    {/* Review Ul Li */}
                    <div className="box_listing-view homeiee mt-4">
                        <Row className="revi-scroll" ref={slidersListRef}>
                            {
                                reviewList.slice(0,30).map((reviewListItem, index) => {
                                    return (    
                                    <Col lg={4} md={6} sm={12} className=' d-flex' key={index}>
                                        <div className="review_bx">
                                            <div className="star_ar">
                                                <div className="dated"><span>{reviewListItem.rate}</span></div>
                                            </div>
                                            <strong>{reviewListItem.name}</strong>
                                            <p><span>{reviewListItem.location}</span></p>
                                            <div className="cont">
                                                <p>{reviewListItem.comment}</p>
                                            </div>
                                            <div className="u_info">
                                                <p>
                                                    <img src="https://picsum.photos/200" width={30} height={30} alt="image" className="img-rounded loaded" />
                                                    <NavLink className="bld"><b>{reviewListItem.service}</b></NavLink>
                                                </p>
                                            </div>
                                        </div>
                                    </Col>
                                    )
                                })
                            }
                        </Row>
                    </div>
                </Container> 
            </section>
        </div>
    </>
  )
}


