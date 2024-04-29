
import Threestep from '../../homeElement/home_threestep/Index';
import Topasutraila from '../../homeElement/home_topasutra/Index';
import Testimonial from '../../homeElement/home_testimonial/Index';
import HomeFaq from '../../homeElement/faq_home/Index';
import Banner from '../../homeElement/home_banner/Index';
import Learnsection from '../../homeElement/home_learn/Index';
import Meta from '../../layout/meta';
import { useEffect,useState } from 'react'
import HomeServices from '../../homeElement/home_service/Index';
import HomeBlogs from '../../homeElement/home_blog/Index';
import axios from 'axios';

export default function Index() {
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
      getData();
      // window.scroll (0,0);
  })
  return (
    <>
      <Meta rule={document.location.href.split('/')[document.location.href.split('/').length-1]}/>
      <Banner />
      <HomeServices />
      <Threestep />
      <Topasutraila />
      <Learnsection />
      {/* <FreeSample /> */}
      {/* <HomeReview /> */}
      <Testimonial />
      <HomeFaq />
      <HomeBlogs blogs={blogs}/>
    </>
  )
}
