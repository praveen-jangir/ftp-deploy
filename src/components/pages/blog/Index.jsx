import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Breadcrumb from '../../layout/Breadcrumb'
// import InnerBanner from '../InnerBanner'
// import Pagination from '../Pagination';
import { NavLink, useParams } from "react-router-dom";
import { fetchData } from './actions';
import { ImageAssets } from '../../../config';
// import { blogBanner } from '../bannerData';
import Diamond from '../../layout/Diamond';
import Meta from '../../layout/meta';
import { Col, Container, Row } from 'react-bootstrap';
export default function Blogs() {
    const dispatch = useDispatch();
    const { data } = useSelector((state) => state.blogs);
    const [blog, setBlog] = useState([]);
    const [pageNo, setPageNo] = useState(0);
    const [loader, setLoader] = useState(true);
    const { page } = useParams();
    useEffect(() => {
      document.getElementById('wifi-loader').style.display = "flex";
      const pathname = window.location.pathname.replace(/\/+$/, '');
      if (window.location.pathname !== pathname) {
        window.location.replace(pathname);
      }
        setLoader(true);
    if (page) {
      if (!page || isNaN(page)) {
        document.getElementById('wifi-loader').style.display = "none";
        window.location.href = '../404';
      }
        dispatch(fetchData(page));
        setPageNo(parseInt(page));
        document.getElementById('wifi-loader').style.display = "none";
      }else{
        dispatch(fetchData(1));
        setPageNo(1);
      }
    }, [dispatch,page]);

    useEffect(() => {
      window.scrollTo(0, 0); 
        setLoader(true);
    if (page) {
        setPageNo(parseInt(page));
    }else{
        setPageNo(1);
    }
    if (data && JSON.stringify(data) !== JSON.stringify(blog)) {
      document.getElementById('wifi-loader').style.display = "none";
        setBlog(data);
    }
    if (data !== null && data.length) {
        document.getElementById('wifi-loader').style.display = "none";
        setLoader(false);
    }else{
        setLoader(true);
    }
    }, [data, blog, page]);
    return (
      <>
        <Meta rule={document.location.href.split('/')[document.location.href.split('/').length-1]}/>
        {/* <InnerBanner {...blogBanner} /> */}
        <Breadcrumb />
        <div className="other-body pd-40">
          <section className="blog-section">
            <Container>
              <div className="heading text-center">
                <h2 className="ttl">Informative Articles for Assignment Writing</h2>  
                <Diamond />
              </div>
              {
                loader ?<div style={{'textAlign': 'center'}}>
                    <h2>Blog Not Found!!!</h2>
                </div>:
                <Row className="justify-content-center">
                  {
                    blog.map((item) => (
                      <Col key={item.id} lg={4} md={6} sm={6} className="d-flex">
                        <div className="blog_box">
                          <NavLink to={`/blog/${item.slug}`} className="img-wrap">
                            <img src={`${ImageAssets}${item.image}`} className="img-fluid" alt="" />
                          </NavLink>
                          <div className="blog_content">
                            <h3>
                              <NavLink to={`/blog/${item.slug}`}>{item.title}</NavLink>
                            </h3>
                            <p>{item.text}</p>
                          </div>
                        </div>
                      </Col>
                    ))
                  }
                </Row>
              }
              <div className="mt-4">
                {/* <Pagination page={blog.length}/> */}
              </div>
            </Container> 
          </section>
        </div>
      </>
    );
  }