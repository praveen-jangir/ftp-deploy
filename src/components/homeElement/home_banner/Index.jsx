import React from 'react'
// import OwlCarousel from "react-owl-carousel";
// import "owl.carousel/dist/assets/owl.carousel.css";
// import "owl.carousel/dist/assets/owl.theme.default.css";
import Iconexperts from '../home_iconexpert/Index';
import { bnrImg, moviebanner } from './homeBannerData';
// import { formPrices } from '../homeElement/formElement/formselectData'
import ReivewFrom from '../../pages/review/ReivewFrom';
import { Container, Row, Col } from 'react-bootstrap';




export default function Banner() {
  return (
    <>
          <div className="main-body">
            <div className="banner banner--home" style={{backgroundImage: `url(${bnrImg.backgroundImageUrl})`}}>
                <Container>
                    <img src={bnrImg.genderPic} alt="genderPic" className='img-fluid genderPic' width={300}  />
                    <Row className='align-items-center'>
                        <Col lg={8} md={12}>
                            <div className="card-box">    
                                {moviebanner.map((movie) => {
                                    return (
                                        <>
                                            <div className="carousel-item active">
                                                <div className="detail-box">
                                                    <div className="top-left">
                                                        <h1 dangerouslySetInnerHTML={{__html:movie.title}}/>
                                                        <p dangerouslySetInnerHTML={{__html:movie.desc}}/>
                                                        <ul className="aff-icon">
                                                            {
                                                                movie.icoItem.map((subCate, subIndex) => {
                                                                    return(
                                                                        <li key={subIndex}>
                                                                            <div className="iconfit">
                                                                                <img src={movie.image[subIndex]} alt={movie.alter[subIndex]} className='img-fluid' width={60} />
                                                                                <h4 dangerouslySetInnerHTML={{__html: subCate}}></h4>
                                                                            </div>
                                                                        </li>
                                                                    )
                                                                })  
                                                            }
                                                        </ul>
                                                        <div className='rating-star'>
                                                            {
                                                               movie.rate.map((subBox) => {
                                                                return(
                                                                    <div className="star--img">
                                                                        <img src={subBox} alt={movie.alterto[subBox]} className='img-fluid' width={200}/>
                                                                    </div>
                                                                )
                                                               })
                                                            }
                                                        </div>
                                                    </div>
                                                    
                                                </div>
                                            </div>
                                        </>
                                    );
                                })}
                                {/* <OwlCarousel {...owlMaker} nav dot>
                                </OwlCarousel> */}
                            </div>
                        </Col>
                        <Col lg={4} md={12}>
                            <ReivewFrom />
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="four--icon pd-40">
                <Container fluid>
                    <Row>
                        <Col md={12}>
                            <Iconexperts />
                        </Col>
                    </Row>
                </Container>
            </div>
        </div> 
    </>
  )
}
