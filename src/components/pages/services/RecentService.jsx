import React from 'react'
import { NavLink } from 'react-router-dom'
import Diamond from '../../layout/Diamond'
const recentServiceItem = [
    {
        image : "assets/images/blog1.webp",
        title : "Common Pitfalls in CIPD Assignments and How to Avoid Them",
        date : "November 24, 2023"
    },
    {
        image : "assets/images/blog3.webp",
        title : "Crafting a Compelling Nursing Case Study with Relevant Examples",
        date : "November 25, 2023"
    },
    {
        image : "assets/images/blog4.webp",
        title : "In-Depth Guide to Law Assignment Support",
        date : "November 26, 2023"
    }
]
export default function RecentService() {
  return (
    <>
        <div className='recent-sidebar recentService'>
            <h2 className='ttl'>Recent Services</h2>
            <Diamond />
            <ul className='recent-list recentService-List'>
                {
                    recentServiceItem.map((recentServiceList) => {
                        return(
                            <li className='list-item'>
                                <div className="recent_box">
                                    <aside className="asideright recent-content">
                                        {
                                            recentServiceList.title && (
                                            <h4 className='ttl'>
                                                <NavLink to='/single-blog'>{recentServiceList.title}</NavLink>
                                            </h4>
                                        )}
                                        {
                                            recentServiceList.date && (
                                            <span className='date'>{recentServiceList.date}</span>
                                        )}
                                        
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
