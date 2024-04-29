import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useParams } from 'react-router-dom';
import Recentsidebar from './Recentsidebar'
import Breadcrumb from '../../layout/Breadcrumb'
import { fetchSingleBlog } from './actions';
import { ImageBlogAssets } from '../../../config';
import Diamond from '../../layout/Diamond';
import axios from 'axios';
import { Helmet } from "react-helmet";
// import ReivewFrom from '../review/ReivewFrom';
import { Col, Container, Form, Row, Button } from 'react-bootstrap';
import HomeBlogs from '../../homeElement/home_blog/Index';

export default function SingleBlog() {
    const { slug } = useParams();
    const dispatch = useDispatch();
    const { blog } = useSelector((state) => state.singleBlog);
    const [singleBlog, setSingleBlog] = useState({});
    const [selected, setSelected] = useState(null);
    const [serviceList, setServiceList] = useState([]);
    const [tableOfContent, setTableOfContent] = useState([]);
    const { service } = useSelector((state) => state.singleService);
    const [isFixed, setIsFixed] = useState(false);
    const toggle = (i) => {
        if (selected == i) {
            return setSelected(null)
        }
        setSelected(i)
    }
    useEffect(() => {
        dispatch(fetchSingleBlog(slug));
    }, [dispatch, slug]);
    const [blogs ,setBlogs] = useState([]);
    const getData=()=>{
        axios.get('https://www.assignmentexperthelp.co.uk/admin/blog-json/1')
                .then(response => {
                    document.getElementById('wifi-loader').style.display = "none";
                    // console.log(response.data);
                    setBlogs(response.data);
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return response.json();
                })
                .catch(() => {
                    // console.error('Axios error:', error);
                });
    }
    useEffect(() => {
        window.scrollTo(0, 0);
        getData()
        if (blog) {
            var htmlContent = '<div>'+blog?.description+'</div>';
            var parser = new DOMParser();
            var doc = parser?.parseFromString(htmlContent, 'text/html');
            var containerDiv = doc?.querySelector('div');
            var h2Tags = doc?.querySelectorAll('h2');
            let tableOfContent = [];
            for (var i = 0; i < h2Tags?.length; i++) {
                h2Tags[i].setAttribute('id', 'section' + (i + 1));
                tableOfContent.push({'text':h2Tags[i].textContent,'id':'section' + (i + 1)});
            }
            var updatedHtmlContent = containerDiv.outerHTML;
            setTableOfContent(tableOfContent);
            blog.description = updatedHtmlContent
            setSingleBlog(blog);
        }
    }, [blog, singleBlog]);

    useEffect(() => {
        if (service) {
            axios.get('https://www.assignmentexperthelp.co.uk/admin/services-list')
            .then(response => {
                setServiceList(response.data);
                if (!response.ok) {
              throw new Error('Network response was not ok');
            }
              return response.json();
            })
            .catch(() => {
                // console.error('Axios error:', error);
            });
        }

    }, [service, serviceList]);


    useEffect(() => {
        const pathname = window.location.pathname.replace(/\/+$/, '');
        if (window.location.pathname !== pathname) {
            window.location.replace(pathname);
        }
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
                <title>{singleBlog.meta_title}</title>
                <meta name="description" content={singleBlog.meta_description} />
                <meta name="keywords" content={singleBlog.meta_keyword} />
                <link rel="canonical" href={window.location.href}></link>
                <link rel="alternate" href={window.location.href} hrefLang="en-gb"></link>
                {singleBlog.other_meta && (
                    document.head.insertAdjacentHTML('beforeend', singleBlog.other_meta)
                )}
            </Helmet>

            {/* <Innerbanner {...singleBlogBanner}/> */}
            <Breadcrumb />
            <div className="other-body pd-40">
                <section className='signle-blog-section'>
                    <Container>
                        <div className="heading text-center">
                            <h2 className="ttl">{singleBlog.title}</h2>
                            <Diamond />
                        </div>
                        <Row>
                            <Col lg={8} md={12}>
                                <div className="entry-body">
                                    <div className="entry-content">
                                        <div className="img-warp">
                                            <img src={`${ImageBlogAssets}${singleBlog.image}`} className="img-fluid w-100" alt="error-image" />
                                        </div>
                                        <div className="table-content">
                                            <h2 className='table-ttl'>Table Of Content</h2>
                                            <ul className="table-list">
                                                {tableOfContent?.map((item,index)=>{
                                                    return(
                                                        <li key={index}>
                                                            <a href={'#'+item.id}>{item.text}</a>
                                                        </li>
                                                    );
                                                })}
                                            </ul>
                                        </div>
                                        {/* <h2 className="entry-title">{singleBlog.title}</h2> */}
                                        <div className="entry-content editor-content">
                                            <div dangerouslySetInnerHTML={{ __html: singleBlog.description }} />
                                        </div>
                                        <div className="academic-help">
                                            <h2 className="ttl-help">Do you need any help? Get expert assistance!</h2>
                                            <Form action="#">
                                                <Form.Group>
                                                    <input type="text" className='form-control' name="" id="" placeholder='Type Question......' />
                                                </Form.Group>
                                                <Button onClick={() => { window.location = 'https://www.assignmentexperthelp.co.uk/' }} className='btn btn-sm'>Submit</Button>
                                            </Form>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={4} md={12}>
                                <div className="author-profile">
                                    <div className="profile">
                                        <img src={'https://www.assignmentexperthelp.co.uk/admin/public/expert_image/'+singleBlog.expert_image} width={80} height={80} alt="image" className="img-rounded loaded" />
                                        <NavLink to={'../experts/'+singleBlog.expert_slug} className="bld"><b>{singleBlog.author}</b></NavLink>
                                    </div>
                                    <div className="cont">
                                        <p>{singleBlog.expert_dec}</p>
                                    </div>
                                    <NavLink to={'../experts/'+singleBlog.expert_slug} className='btn btn-hire btn-sm'>Get in Touch</NavLink>
                                </div>
                                <div className={`single--form ${isFixed ? 'fixed' : ''}`}>
                                    <div className='recent-sidebar mb-3 d-none'>
                                        <div className='panel-group' id='accordion'>
                                            {
                                                serviceList.map((item, i) => {
                                                    return (
                                                        <>
                                                            <div className='panel panel-default'>
                                                                <div className='panel-heading' role='tab'>
                                                                    <h4 className={`panel-title ${selected === i ? 'active' : ''}`} onClick={() => toggle(i)}>
                                                                        <NavLink to={`/service/${item.page_name}`}>{item.menu_name}</NavLink>
                                                                    </h4>
                                                                </div>
                                                                <div className={selected === i ? 'panel-collapse show' : 'panel-collapse'}>
                                                                    <div className='panel-body'>
                                                                        <div className='services-list-body service__panel'>
                                                                            <ul className='list list-unstyled'>
                                                                                {
                                                                                    item.pagename.map((subItem, index) => (
                                                                                        <li key={index}>
                                                                                            <NavLink to={`/service/${item.pagename[index]}`}>{subItem}</NavLink>
                                                                                        </li>
                                                                                    ))
                                                                                }
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </>
                                                    )
                                                })
                                            }
                                        </div>
                                    </div>
                                    <Recentsidebar />
                                </div>
                            </Col>
                            <Col md={12}>
                                <HomeBlogs blogs={blogs}/>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </div>
        </>
    )
}
