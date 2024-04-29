import React from 'react'
import { NavLink } from 'react-router-dom'
import { sampleCateList } from '../sample/sampleData'
import { useEffect, useState } from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Diamond from '../../layout/Diamond';




export default function SidebarCategories(sampleCat) {
    const [sampleList, setSampleList] = useState(sampleCateList);
    useEffect(() => {
        if (sampleCat.sampleCat) {
            setSampleList(sampleCat.sampleCat);
        }
    }, [sampleCat]);

    return (
        <>
            <div className='recent-sidebar sampleCate'>
                <h2 className='ttl'>Sample Categories</h2>
                <Diamond />
                <ul className='recent-list sampleCate-List'>
                    {
                        sampleList.map((sampleCateItem, index) => {
                            return (
                                <li key={index}>
                                    <aside className='aside left'>
                                        <span className='fa fa-arrow-circle-right'></span>
                                    </aside>
                                    <aside className='aside right'>
                                        <NavLink to={`../../sample/${sampleCateItem.slug}`} className='ttl'>{sampleCateItem.category_name}</NavLink>
                                        {/* <NavLink to={sampleCateItem.slug} className='ttl'>{sampleCateItem.category_name}</NavLink> */}
                                    </aside>
                                </li>
                            );
                        })
                    }
                </ul>
            </div> 
        </>
    )
}

