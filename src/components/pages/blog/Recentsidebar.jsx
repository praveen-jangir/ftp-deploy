import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom'
import { ImageAssets } from '../../../config';
import Diamond from '../../layout/Diamond';
import axios from 'axios';
export default function Recentsidebar() {
    const [recentBlog, setRecentBlog] = useState([]);
    useEffect(() => {
          axios.get('https://www.assignmentexperthelp.co.uk/admin/blog-json/1')
            .then(response => {
                // console.log(response.data);
                setRecentBlog(response.data);
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
              return response.json();
            })
            .catch(error => {
                // console.error('Axios error:', error);
            });
      }, []);
  return (
    <>
        <div className='recent-sidebar'>
            <h2 className='ttl'>Recent Blogs</h2>
            <Diamond />
            <ul className='recent-list'>
                {
                    recentBlog.map((recentList,index) => {
                        return(
                            <li key={index} className='list-item'>
                                <div className="recent_box">
                                    <aside className="asideleft img-box">
                                        <NavLink to={`/blog/${recentList.slug}`}>
                                            <img src={`${ImageAssets}${recentList.image}`} alt="" width={80} height={80}/>
                                        </NavLink>
                                    </aside>
                                    <aside className="asideright recent-content">
                                        <h4 className='ttl'>
                                            <NavLink to={`/blog/${recentList.slug}`}>{recentList.title}</NavLink>
                                        </h4>
                                        <span className='date'>{recentList.date}</span>
                                    </aside>
                                </div>
                            </li>
                        )
                    })
                }
            </ul>
        </div> 
    </>
  )
}
