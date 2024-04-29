import { Col, Container, Row } from 'react-bootstrap'
import { moviebanner,servBanner } from '../review/reviewData'
import ReivewFrom from './ReivewFrom'


export default function ReviewBanner(title) {
    // console.log(props);
  return (
    <>
        <section className='ideal_banner page-header2' style={{backgroundImage:`url(${servBanner.backgroundImageUrl})`}}>
            <Container>
                <img src={servBanner.genderPic} alt="genderPic" className='img-fluid genderPic' width={300}  />
                <Row className='align-items-center'>
                    <Col lg={8} md={12} >
                        {/* <div className='ideal_box'>
                            <h1 className='ttl' dangerouslySetInnerHTML={{ __html: RevBanner.bannerttl }}></h1>
                            <p dangerouslySetInnerHTML={{ __html: RevBanner.text.replace('38983',props.count) }}></p>
                        </div> */}
                        
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
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                );
                            })}
                    </Col>
                    <Col lg={4} md={12}>
                        <ReivewFrom />
                    </Col>
                </Row>
            </Container>
        </section>      
    </>
  )
}
