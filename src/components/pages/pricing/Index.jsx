import React from 'react'
import Breadcrumb from '../../layout/Breadcrumb'
import Diamond from '../../layout/Diamond'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { PricingBanner } from '../bannerData'
import { tabTitle } from './pricingform/priceForm'
import { tabTest } from './pricingform/priceForm'
import StudentForm from './pricingform/StudentForm';
import BulkForm from './pricingform/BulkForm';
import Innerbanner from '../InnerBanner';
import Meta from '../../layout/meta';
import { Col, Container, Row } from 'react-bootstrap';


export default function Pricing() {
    const pathname = window.location.pathname.replace(/\/+$/, '');
      if (window.location.pathname !== pathname) {
        window.location.replace(pathname);
      }
    window.scrollTo(0, 0);
  return (
    <>
        <Meta rule={document.location.href.split('/')[document.location.href.split('/').length-1]}/>
        <Innerbanner {...PricingBanner} />
        <Breadcrumb />
        <div className="other-body pd-40">
            <section className='pricing-section'>
                <Container>
                    <div className="heading text-center">
                        <h2>Who Are You ? </h2>
                        <p>Select Your Type And Get Amazing Deal And Be Partner Of Us</p>
                        <Diamond />
                    </div>
                    <div className="tab-pattle">
                        <Tabs>
                            <Row>
                                <Col lg={3} md={12}>
                                    <TabList>
                                        {
                                            tabTitle.map((tabTitleItem, index) => {
                                                return (
                                                    <Tab key={index} dangerouslySetInnerHTML={{__html:tabTitleItem.title}}></Tab>
                                                )
                                            })
                                        }
                                    </TabList>
                                </Col> 
                                <Col lg={9} md={12}>
                                    <div className="tab-pane">
                                        {
                                            tabTest.map((tabPanelItem, index) => {
                                                return (
                                                    <TabPanel key={index}>
                                                        <div className="student-pane">
                                                            <h2 dangerouslySetInnerHTML={{__html:tabPanelItem.text}}></h2>
                                                            {index === 0 ? <StudentForm/> : <BulkForm/> }
                                                        </div>
                                                    </TabPanel>
                                                )
                                            })
                                        }
                                    </div>
                                </Col>
                            </Row>
                        </Tabs>
                    </div>
                </Container>
            </section>
        </div> 
    </>
  )
}
