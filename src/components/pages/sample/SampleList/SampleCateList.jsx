import { useEffect, useState } from 'react'
import { authorSlider, SingleSampleItem, servBanner, moviebanner } from '../sampleData'
import { NavLink } from 'react-router-dom'
import Breadcrumb from '../../../layout/Breadcrumb'
// import RequestModal from './RequestModal'
import { Col, Container, Row } from 'react-bootstrap'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import SampleBanner from '../SampleBanner'
import { useDispatch, useSelector } from 'react-redux';
import {  useParams } from 'react-router-dom';
import { fetchData } from '../actions'
import axios from 'axios';
import { PublicAssets } from '../../../../config'
export default function SampleCateList() {
  const { slug } = useParams();
  const [isFixed, setIsFixed] = useState(false);
  const [effect, setEffect] = useState(8);
  const dispatch = useDispatch();
  // const { sample } = useSelector((state) => state.singleSample);
  const { data } = useSelector((state) => state.sample);
  const [sampleCat, setSampleCat] = useState([]);
  const [sampleCase, setSampleCase] = useState([]);
  const [sampleSubCat, setSampleSubCat] = useState([{category_name:'Fetching Sub Category',slug:''}]);
  const handleView = () => {
    setEffect(effect => effect + 4);
  }
  useEffect(() => {
    if (data) {
      setSampleCat(data.sampleCategory);
    }
  }, [data]);
  const fetchSubaCat = (slug)=>{
    axios.get('https://www.assignmentexperthelp.co.uk/admin/sample-json-cat/'+slug)
      .then(response => {
        setSampleSubCat(response.data);
        fetchMainSample(slug);
      })
  }
  const fetchMainSample = (slug)=>{
    axios.get('https://www.assignmentexperthelp.co.uk/admin/sample-by-main/'+slug)
      .then(response => {
        setSampleCase(response.data);
      })
  }
  useEffect(() => {
    // fetchMainSample(slug);
    dispatch(fetchData());
  }, [dispatch, slug]);
  useEffect(() => {
    window.scrollTo(0, 0);
    const handleScroll = () => {
        const offset = window.scrollY;
        const threshold = 100;
        if (offset > threshold) {
            setIsFixed(true);
        } else {
            setIsFixed(false);
        }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
        window.removeEventListener('scroll', handleScroll);
    };
}, []);

  return (
    <>
      <SampleBanner {...moviebanner} servBanner={servBanner} />
      <Breadcrumb />
      <div className="other-body pd-40">
        <section className="sample-section">
          <Container>
            {/* Advance Directives Assignment */}
            <Row>
              <Col md={12} className='mb-4'>
                <form className="form-action" action="#">
                  <div className="row">
                    <div className={`form-group col-sm-4 col-12 mx-auto`}>
                      <select name={"main"} className={"form-control form-select"} id={'main'} onChange={(e)=>{fetchSubaCat(e.target.value)}}>
                        {sampleCat.map((option, idx) => (
                            <option key={idx} value={option.slug} selected={option.slug === slug}>
                              {option.category_name}
                            </option>
                        ))}
                      </select>
                    </div>
                    <div className={`form-group col-sm-4 col-12 mx-auto`}>
                      <select name={"sub"} className={"form-control form-select"} id={'main'}>
                        {sampleSubCat.map((option, idx) => (
                              <option key={idx} value={option.slug}>
                                {option.category_name}
                              </option>
                          ))}
                      </select>
                    </div>
                    <div className={`form-group col-sm-4 col-12 mx-auto`}>
                      <div name={"sub"} className={"form-control form-select"} id={'main'}>
                        <h5>Our Feature</h5>
                        {/* {sampleSubCat.map((option, idx) => (
                              <option key={idx} value={option.slug}>
                                {option.category_name}
                              </option>
                          ))} */}
                      </div>
                    </div>
                  </div>
                </form>
              </Col>
              <Col md={12} lg={8}>
                <ul className='sample-box'>
                  {
                    sampleCase.slice(0, effect).map((sampleItem,index) => {
                      return (
                        <li key={index}>
                          <aside className='aside left'>
                            <NavLink to={sampleItem.path} className="img-box">
                              <img src={PublicAssets+'/sample_pdf/'+sampleItem.image} alt="" className='img-fluid' width={120} />
                            </NavLink>
                          </aside>
                          <aside className='aside right'>
                            <div className="sample-content">
                              <h2 className='sample-ttl'>
                                <NavLink to={'../../../sample-viewer/'+sampleItem.slug}>{sampleItem.title}</NavLink>
                              </h2>
                              <p>{sampleItem.meta_description}</p>
                              <NavLink className='btn btn-sm' to={'../../../sample-viewer/'+sampleItem.slug}>{sampleItem.btn}</NavLink>
                            </div>
                          </aside>
                        </li>
                      )
                    })
                  }
                  {effect < sampleCase.length && (
                    <div className="viewMore mt-3">
                      <button className='btn btn-success' type='button' onClick={handleView}> Load More </button>
                    </div>
                  )}
                </ul>
                {/*<div className="btn-block">
                  <button type='button' className='btn btn-sm btn-assignment' data-toggle='modal' data-target='#requestPop'>
                    Request Sample From Team
                  </button>
                   RequestModal Modal Popup 
                  <RequestModal />
                </div>*/}
              </Col>
              <Col lg={4} md={12}>
                  <div className={`single--form ${isFixed ? 'fixed' : ''}`}>
                      {/* OwlCarousel */}
                      <div className="author-profile sample--proile--author">
                        <OwlCarousel className='owl-theme' {...authorSlider} autoplay>
                          {
                            SingleSampleItem.map((item, index) => {
                              return (
                                <div key={index} className="item">
                                  <div className="profile">
                                    <img src={item.image} width={80} height={80} alt="image" className="img-rounded loaded" />
                                    <NavLink to='/' className="bld"><b>{item.author}</b></NavLink>
                                  </div>
                                  <div className="cont">
                                    <p>{item.expert_dec}</p>
                                  </div>
                                  <NavLink to='javascrpit:void(0)' className='btn btn-hire btn-sm'>Get in Touch</NavLink>
                                </div>
                              )
                            })
                          }
                        </OwlCarousel>
                      </div>
                      {/* offer-date */}
                      <div className="offer-date">
                        <img src="../assets/images/new_img/Thesis-Writing-Services.webp" alt="Thesis-Writing-Services.webp" className='img-fluid' />
                      </div>
                  </div>
              </Col>
            </Row>
          </Container>
        </section>
      </div>
    </>
  )
}
