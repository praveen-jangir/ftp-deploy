import React from 'react'
import Innerbanner from '../InnerBanner'
import Breadcrumb from '../../layout/Breadcrumb'
import { aboutBanner } from '../bannerData'
import Meta from '../../layout/meta';
import { Container } from 'react-bootstrap';

export default function AboutUs() {
  window.scrollTo(0, 0);
  const pathname = window.location.pathname.replace(/\/+$/, '');
      if (window.location.pathname !== pathname) {
        window.location.replace(pathname);
      }
return (
<>
  <Meta rule={document.location.href.split('/')[document.location.href.split('/').length-1]}/>
  <Innerbanner {...aboutBanner}/>
  <Breadcrumb />
  <div className="other-body pd-40">
    <div className="about--panel entry-body">
      <Container>
        <div className="entry-content content-page">
          <div className="caption">
            <h2 className='entry-title'>Assignment Help Online</h2>
            <p>
              <b>Assignment Expert Help</b> Service has proven its services by following every university guideline and taking care of every little requirement in your academic paper. Our exceptional services talk when it comes to providing the most reliable platform for assignment help service. Collaborating with great business and academic leaders also tells our success rates for providing top-class assistance in academics. Assignment Expert help service has only one motto, and that is to provide academic solutions to your fingertips with 100% proficiency.
            </p>
            <p>
            Our team of expert writers guides students through thick and thin and provides 24/7 customer support and rapid response. We not only aim to provide assistance but our team also encourages students to find their way to academic success. Our proficiency speaks louder in our services.
            </p>
            <p>
            To become the number one assignment help service, our team worked hard and delivered many well-written and quality assignments over a decade now. We are concerned about students and their deadlines, that is why we never miss one. Professionals always double-check the assignment before the delivery to ensure that all the requirements are fulfilled or not.
            </p>
            <p>
            With years of practical experience, writers draft every document from scratch, meaning no chance of plagiarism or any AI content. Our only vision is to make students satisfied with our academic service, so we made it a tradition and followed it since. With this tradition, we have built a great client satisfaction success rate, and it`s making us grow more
            </p>
            <h3>Our Vision - A Peddle To Success</h3>
            <p>
            To offer the best quality assignments to students and help them meet their tight deadlines without hitting them with any extra expenses. Yes, we work so that students can map their minds to academic success. Student satisfaction after getting our services is all we live for. Our vision is to help students peddle academically to get their desired grades. We have invested many years in this by delivering 100% high-quality content and accomplished a place. 
            </p>
            <h3>Our Mission</h3>
            <p>
            Our mission is to become students more preferable assignment help service providers. Assignment Expert Help Service has come a long way in this direction by providing several assignment deliveries Our team of experts is constantly working towards becoming the outstanding assignment service provider in the industry. We relentlessly aim to provide reliability, originality, accountability, and accuracy in our services with the highly secured system. It`s just the beginning, we are not stopping that soon. 
            </p>
            <p>
              We help students across the globe with our assignment writing services and our experts make sure to
            </p>
            <h3>Extra Perks Of Our Prominent & Exclusive Services</h3>
            <p>
              With our exclusive services, you will get to benefit from some perks. We deliver a box of advantages that you and your budget surely love and enjoy! 
            </p>
            <p>
              We help students across the globe with our assignment writing services and our experts make sure to
            </p>
            <ul>
              <li>180+ professional experts</li>
              <li>24/7 customer support</li>
              <li>Rapid response</li>
              <li>Quality assurance</li>
              <li>Free and unlimited rework & revision service</li>
              <li>100% plagiarism free</li>
              <li>Turnitin approved</li>
              <li>Well-researched & well-organised documents</li>
              <li>Refund policy</li>
              <li>Pocket-friendly prices & amazing discount Offers</li>
            </ul>
            <p>Whether it`s your coursework, essay, homework, or any dissertation, our experts provide stellar solutions to your every assignment query. We provide services for</p>
            <ul>
              <li>Assignment Help</li>
              <li>Dissertation Help</li>
              <li> Homework Help</li>
              <li>Coursework Help</li>
              <li>Essay Writing Help</li>
              <li> Report Writing Help</li>
              <li>Thesis & Case Study Help</li>
              <li>Editing & Proofreading Service</li>
            </ul>
            <p>If you want to boost your academic career and grades then, our assignment help service Is the best match. We have come a long way and we are proud of that. Our team of experts delivers proficiency and their professionalism makes our service the best. Our customer satisfaction success rate proves that our exceptional services rave just to provide ideal results.</p>
            <p>Select your paper while placing an order and let our experts boost your academic career. Go, place your order now.</p>
          </div>
        </div>
      </Container>
    </div>
  </div>
</>
)
}