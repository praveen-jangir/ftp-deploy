import { servBanner, moviebanner } from './data'
import ReivewFrom from '../review/ReivewFrom'
import { NavLink } from 'react-router-dom'
import { Col, Container, Row } from 'react-bootstrap';


export default function Servicebanner(title) {
    return (
        <>
            <section className='ideal_banner page-header2' style={{ backgroundImage: `url(${servBanner.backgroundImageUrl})` }}>
                <Container>
                    <img src={servBanner.genderPic} alt="genderPic" className='img-fluid genderPic' width={300}  />
                    <Row className='align-items-center'>
                        <Col lg={8} md={12}>
                            {moviebanner.map((movie) => {
                                return (
                                    <>
                                        <div className="carousel-item active">
                                            <div className="detail-box">
                                                <div className="top-left">
                                                    <h1 className='ttl mb-3' dangerouslySetInnerHTML={{ __html: title.title ? title.title.headingbanner : movie.title }}></h1>
                                                    <p dangerouslySetInnerHTML={{ __html: title.title ? title.title.description : movie.desc }}></p>
                                                    <ul className="aff-icon">
                                                        {
                                                            movie.icoItem.map((subCate, subIndex) => {
                                                                return (
                                                                    <li key={subIndex}>
                                                                        <div className="iconfit">
                                                                            <img src={movie.image[subIndex]} alt={movie.alter[subIndex]} className='img-fluid' width={60} />
                                                                            <h4 dangerouslySetInnerHTML={{ __html: subCate }}></h4>
                                                                        </div>
                                                                    </li>
                                                                )
                                                            })
                                                        }
                                                    </ul>
                                                    <div className="button-card mt-4">
                                                        <NavLink to='/order' className='btn btn-warning'>Order Now</NavLink>
                                                        <NavLink rel="noopener noreferrer" to={'/write-review?id=' + (title.title && title.title.id ? title.title.id : '') + '&source_url=' + window.location.href} className='btn btn-danger ml-4'>Review</NavLink>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                );
                            })}
                        </Col>
                        <Col  lg={4} md={12} sm={12}>
                            <ReivewFrom />
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}



