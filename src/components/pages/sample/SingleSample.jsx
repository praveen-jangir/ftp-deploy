import { servBanner, moviebanner, authorSlider, SingleSampleItem } from './sampleData'
import RequestModal from './SampleList/RequestModal'
import Diamond from '../../layout/Diamond'
import { NavLink, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSingleSample } from './actions';
import { Helmet } from "react-helmet";
import { Col, Container, Row, Form, Button } from 'react-bootstrap'
import SampleBanner from './SampleBanner'

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';




export default function SingleSample() {
  const { slug } = useParams();
  const dispatch = useDispatch();
  const [isFixed, setIsFixed] = useState(false);
  const { sample } = useSelector((state) => state.singleSample);
  const [singleSample, setSingleSample] = useState({});
  
  useEffect(() => {
    dispatch(fetchSingleSample(slug));
  }, [dispatch, slug]);

  useEffect(() => {
    const pathname = window.location.pathname.replace(/\/+$/, '');
    if (window.location.pathname !== pathname) {
      window.location.replace(pathname);
    }
    if (sample) {
      setSingleSample(sample);
    }
  }, [sample]);

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
      <Helmet>
        <title>{singleSample.title}</title>
        <meta name="description" content={singleSample.meta_description} />
        <meta name="keywords" content={singleSample.meta_keyword} />
        {singleSample.other_meta && (
          document.head.insertAdjacentHTML('beforeend', singleSample.other_meta)
        )}
      </Helmet>
      <SampleBanner {...moviebanner} servBanner={servBanner} />
      <div className="other-body pd-40">
        <section className='sample-section signle-blog-section'>
          <Container>
            <div className="heading text-center">
              <h2 className="ttl">{singleSample.title}</h2>
              <Diamond />
            </div>
            <Row>
              <Col lg={8} md={12}>
                <div className="entry-body">
                  <div className="entry-body">
                    <div className="entry-content">
                      <h2>Introduction to Accounting</h2>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras congue nec dui malesuada molestie. Praesent malesuada mollis lobortis. Nullam sagittis pulvinar odio, ut placerat mauris semper eget. Vestibulum elit ante,
                        sodales a velit eget, pretium cursus nibh. Sed finibus sem sit amet quam sollicitudin finibus. Aenean vel convallis nisi, aliquet gravida orci. Suspendisse nec odio a diam pulvinar efficitur.
                      </p>
                      <p>
                        Curabitur pretium dolor tortor, vitae congue mauris pellentesque vel. Nulla efficitur eget leo sit amet aliquet. Sed quis eros at purus aliquet laoreet id in nisl. Praesent efficitur lorem nisl, vitae mollis quam rhoncus
                        eu. Etiam mi ipsum, gravida sed leo id, bibendum lobortis ipsum. Proin porttitor id leo vel tristique. Aenean bibendum hendrerit justo ut dapibus. Nulla ac egestas sapien. Aenean nec varius arcu, a gravida augue.
                        Maecenas varius mi velit, ac iaculis leo laoreet vel. Mauris a rhoncus ligula. Phasellus eu faucibus tellus. Cras in interdum nisi.
                      </p>

                      <p>
                        Sed iaculis leo eleifend, bibendum nunc sed, egestas tortor. Quisque eros urna, sodales non dictum vitae, bibendum quis dolor. In hac habitasse platea dictumst. Donec vitae nisl vitae libero tristique maximus tempor id
                        est. Nunc dapibus porttitor porta. Phasellus sit amet erat efficitur, rhoncus purus eget, interdum metus. Cras sem eros, facilisis quis turpis a, suscipit convallis turpis. Quisque aliquam, purus eu facilisis vestibulum,
                        ex massa rutrum neque, at gravida turpis ex scelerisque mi. Ut tempus nisl at quam dignissim, vel porta dolor cursus. Morbi feugiat id ex id pellentesque.
                      </p>
                      <p>
                        Sed iaculis leo eleifend, bibendum nunc sed, egestas tortor. Quisque eros urna, sodales non dictum vitae, bibendum quis dolor. In hac habitasse platea dictumst. Donec vitae nisl vitae libero tristique maximus tempor id
                        est. Nunc dapibus porttitor porta. Phasellus sit amet erat efficitur, rhoncus purus eget, interdum metus. Cras sem eros, facilisis quis turpis a, suscipit convallis turpis. Quisque aliquam, purus eu facilisis vestibulum,
                        ex massa rutrum neque, at gravida turpis ex scelerisque mi. Ut tempus nisl at quam dignissim, vel porta dolor cursus. Morbi feugiat id ex id pellentesque.
                      </p>
                      <div className="content-overlay">
                      <div className="form-banner">
                        <div className="academic-help">
                          <h2 className="ttl-help">Get 1000+ Samples Free of Cost</h2>
                          <Form action="#">
                            <Form.Group>
                              <input type="text" className='form-control' name="" id="" placeholder='Enter Your Mail ID......' />
                            </Form.Group>
                            <Button className='btn btn-sm'>Submit</Button>
                          </Form>
                        </div>
                      </div>
                        <p>
                          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta, perferendis voluptatum! Voluptatibus quaerat ullam quasi, praesentium, nam minima
                          eaque odit alias cumque velit amet obcaecati repellat ratione dolorem cum debitis dolor. Quas quia placeat debitis aliquam repellendus odit aut. 
                          Cum doloremque modi ea officiis unde accusamus adipisci aliquam maiores enim reprehenderit. Explicabo, nesciunt dolor. Ipsa blanditiis minus 
                          repellendus deleniti quasi. Nihil cupiditate vero, similique voluptas quasi error inventore eligendi enim ullam neque fuga, accusamus dignissimos 
                          quod nulla facere aliquam, molestiae veniam? Officia exercitationem vitae distinctio non possimus fuga aliquid ea aperiam magni? Maiores 
                          architecto itaque quasi vel pariatur tenetur odio.
                        </p>
                        <p>
                          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta, perferendis voluptatum! Voluptatibus quaerat ullam quasi, praesentium, nam minima
                          eaque odit alias cumque velit amet obcaecati repellat ratione dolorem cum debitis dolor. Quas quia placeat debitis aliquam repellendus odit aut. 
                          Cum doloremque modi ea officiis unde accusamus adipisci aliquam maiores enim reprehenderit. Explicabo, nesciunt dolor. Ipsa blanditiis minus 
                          repellendus deleniti quasi. Nihil cupiditate vero, similique voluptas quasi error inventore eligendi enim ullam neque fuga, accusamus dignissimos 
                          quod nulla facere aliquam, molestiae veniam? Officia exercitationem vitae distinctio non possimus fuga aliquid ea aperiam magni? Maiores 
                          architecto itaque quasi vel pariatur tenetur odio.
                        </p>
                        <p>
                          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta, perferendis voluptatum! Voluptatibus quaerat ullam quasi, praesentium, nam minima
                          eaque odit alias cumque velit amet obcaecati repellat ratione dolorem cum debitis dolor. Quas quia placeat debitis aliquam repellendus odit aut. 
                          Cum doloremque modi ea officiis unde accusamus adipisci aliquam maiores enim reprehenderit. Explicabo, nesciunt dolor. Ipsa blanditiis minus 
                          repellendus deleniti quasi. Nihil cupiditate vero, similique voluptas quasi error inventore eligendi enim ullam neque fuga, accusamus dignissimos 
                          quod nulla facere aliquam, molestiae veniam? Officia exercitationem vitae distinctio non possimus fuga aliquid ea aperiam magni? Maiores 
                          architecto itaque quasi vel pariatur tenetur odio.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

              </Col>
              <Col lg={4} md={12}>
                <div className={`single--form ${isFixed ? 'fixed' : ''}`}>
                  <div className="author-profile sample--proile--author">
                    <OwlCarousel className='owl-theme' {...authorSlider}>
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
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </div>
    </>
  )
}

