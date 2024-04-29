import Innerbanner from '../InnerBanner'
import Breadcrumb from '../../layout/Breadcrumb'
import { sampleBanner } from '../bannerData'
import SidebarCategories from './SidebarCategories'
import { NavLink } from 'react-router-dom'
// import { sampleList } from './sampleData'
import { useEffect,useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from './actions';
import { PublicAssets } from '../../../config';
import Meta from '../../layout/meta';

export default function Sample_old() {
    const dispatch = useDispatch();
    const { data } = useSelector((state) => state.sample);
    const [samples, setSamples] = useState([]);
    const [sampleCat, setSampleCat] = useState([]);
    
    useEffect(() => {
      const pathname = window.location.pathname.replace(/\/+$/, '');
      if (window.location.pathname !== pathname) {
        window.location.replace(pathname);
      }
      window.scrollTo(0, 0);
      dispatch(fetchData());
    }, [dispatch]);
    
    useEffect(() => {
      if (data) {
          setSamples(data.sample.data);
          setSampleCat(data.sampleCategory);
      }
    }, [data, setSamples]);
    useEffect(() => {
      if (data && JSON.stringify(data) !== JSON.stringify(data)) {
          setSamples(data.sample.data);
          setSampleCat(data.sampleCategory);
      }
      }, [data]);
  return (
    <>
          <Meta rule={document.location.href.split('/')[document.location.href.split('/').length-1]}/>

        <Innerbanner {...sampleBanner}/>
        <Breadcrumb />
        <div className="other-body pd-40">
          <section className="sample-section">
            <div className="container">
              {/* Advance Directives Assignment */}
              <div className="row">
                <div className="col-lg-8 col-md-12">
                  <ul className='sample-box'>
                    {
                      samples.map((sampleItem,index) => {
                        return (
                          <li key={index}>
                              <aside className='aside left'>
                                  <NavLink to={sampleItem.path} className="img-box">
                                      <img src={`${PublicAssets}sample_pdf/${sampleItem.image}`} alt="" className='img-fluid' width={120}/>
                                  </NavLink>
                              </aside>
                              <aside className='aside right'>
                                  <div className="sample-content">
                                      <h2 className='sample-ttl'>
                                        <NavLink to={sampleItem.path}>{sampleItem.title}</NavLink>
                                      </h2>
                                      <p dangerouslySetInnerHTML={{ __html: sampleItem.meta_description }}/>
                                      <NavLink className='btn btn-sm' to={`sample/${sampleItem.slug}`}>Read More</NavLink>
                                  </div>
                              </aside>
                          </li>
                        )
                      })
                    }
                  </ul>
                </div>
                <div className="col-lg-4 col-md-12 d-flex">
                  <SidebarCategories sampleCat={sampleCat}/>
                </div>
              </div>
            </div> 
          </section>
        </div>  
    </>
  )
}
