import { useRef,useState,useEffect } from 'react'
import Breadcrumb from '../../layout/Breadcrumb'
import Diamond from '../../layout/Diamond'
import ReviewBanner from './ReviewBanner'
import { RevBanner, selectService } from './reviewData'
import Meta from '../../layout/meta'
import axios from 'axios';
import { NavLink } from 'react-router-dom'; // Import NavLink from react-router-dom

export default function Review() {
    window.scrollTo(0, 0);
    const slidersListRef = useRef();
    const [reviewList, setReviewList] = useState([]);
    const handleScroll = (direction) => {
      const slidersWidth = window.innerWidth < 767 ? 150 : direction === "right" ? 500 : -500;
      slidersListRef.current.scrollBy({ top: 0, left: slidersWidth, behavior: "smooth" });
    };
    useEffect(() => {
        axios.get('https://www.assignmentexperthelp.co.uk/admin/reviews-json')
          .then(response => {
            setReviewList(response.data.review);
          })
          .catch(error => {
            // console.error('Axios error:', error);
          });
      }, []);
  return (
    <>
          <Meta rule={document.location.href.split('/')[document.location.href.split('/').length-1]}/>
        <ReviewBanner  {...RevBanner}/>
        <Breadcrumb />
        <div className="other-body pd-40">
            <section className="review-section">
                <div className="container">
                    {/* Heading */}
                    <div className="row align-items-center mb-2">
                        <div className="col-md-6">
                            <div className="heading ">
                                <h2 className="ttl">Recently Added Reviews</h2>
                            </div>
                        </div>
                        <div className="col-md-6">
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
                        </div>
                    </div>
                    <Diamond />
                    {/* Review Ul Li */}
                    <div className="box_listing-view homeiee mt-4">
                        <div className="scrolltab">
                            <div className="scroll-icon scrollLeft" onClick={() => handleScroll("left")}>
                                <i className="fa fa-arrow-left"></i>
                            </div>
                            <div className="scroll-icon scrollRight"  onClick={() => handleScroll("right")}>
                                <i className="fa fa-arrow-right"></i>
                            </div>
                        </div>
                        <ul className="revi-scroll" ref={slidersListRef}>
                            {
                                reviewList.map((reviewListItem, index) => {
                                    return (    
                                    <li key={index}>
                                        <div className="review_bx">
                                            <div className="star_ar">
                                                <div className="star_container">
                                                    {/* {reviewListItem.icon.map((starRatingItem, i) => {
                                                        return (
                                                            <span key={i} className={starRatingItem}></span>
                                                        )} 
                                                    )} */}
                                                </div>
                                                <div className="dated"><span>{reviewListItem.rate}</span></div>
                                            </div>
                                            <strong>{reviewListItem.name}</strong>
                                            <p><span>{reviewListItem.location}</span></p>
                                            <div className="cont">
                                                <p>{reviewListItem.comment}</p>
                                            </div>
                                            <div className="u_info">
                                                <p>
                                                    <img src={"https://picsum.photos/200"} width={18} height={25} alt="image" className="loaded" />
                                                    <NavLink className="bld"><b>{reviewListItem.service}</b></NavLink>
                                                </p>
                                            </div>
                                        </div>
                                    </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div> 
            </section>
        </div>
    </>
  )
}


