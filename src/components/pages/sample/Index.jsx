
import Breadcrumb from '../../layout/Breadcrumb'
import SidebarCategories from './SidebarCategories'
import { sampleItem, servBanner, moviebanner } from './sampleData'
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from './actions';
// import { PublicAssets } from '../../../config';
import Meta from '../../layout/meta';
import { Col, Container, Row } from 'react-bootstrap'
import SampleBanner from './SampleBanner'


export default function Sample() {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.sample);
  const [sampleCat, setSampleCat] = useState([]);
  
  // window.scrollTo(0, 0);

  useEffect(() => {
    const pathname = window.location.pathname.replace(/\/+$/, '');
    if (window.location.pathname !== pathname) {
      window.location.replace(pathname);
    }
    dispatch(fetchData());
  }, [dispatch]);

  useEffect(() => {
    if (data) {
      setSampleCat(data.sampleCategory);
    }
  }, [data]);
  useEffect(() => {
    if (data && JSON.stringify(data) !== JSON.stringify(data)) {
      setSampleCat(data.sampleCategory);
    }
  }, [data]);


  return (
    <>
      <Meta rule={document.location.href.split('/')[document.location.href.split('/').length - 1]} />
      <SampleBanner {...moviebanner} servBanner={servBanner} />
      <Breadcrumb />
      <div className="other-body pd-40">
        <section className="sample-section">
          <Container>
            {/* Advance Directives Assignment */}
            <Row>
              <Col lg={8} md={12}>
                <div className="sample-text-content">
                  <div>
                    <h2 className='ttl' dangerouslySetInnerHTML={{__html: sampleItem[0].title[0]}}/>
                    <h3 className='sub-ttl' dangerouslySetInnerHTML={{__html: sampleItem[0].subtitle[0]}} />
                    <ul className='sample-li'>
                      {sampleItem[0].text.map((item, index) => (
                        <li key={index}>
                          <p dangerouslySetInnerHTML={{ __html: item }}></p>
                        </li>
                      ))}
                    </ul>
                    <p dangerouslySetInnerHTML={{ __html: sampleItem[0].desc }}></p>
                  </div>
                  <div>
                    <h2 className='ttl' dangerouslySetInnerHTML={{__html: sampleItem[0].title[1]}}/>
                    <h3 className='sub-ttl' dangerouslySetInnerHTML={{__html: sampleItem[0].subtitle[1]}} />
                    <ul className='sample-li'>
                      {sampleItem[0].texted.map((item, index) => (
                        <li key={index}>
                          <p dangerouslySetInnerHTML={{ __html: item }}></p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Col>
              <Col lg={4} md={12} className="d-flex">
                <SidebarCategories sampleCat={sampleCat} />
              </Col>
            </Row>
          </Container>
        </section>
      </div>
    </>
  )
}
