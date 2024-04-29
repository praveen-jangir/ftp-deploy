import Innerbanner from '../InnerBanner'
import Breadcrumb from '../../layout/Breadcrumb'
import { TermConditionBanner } from '../bannerData'
import Meta from '../../layout/meta';
import { useEffect } from 'react';
import { Container } from 'react-bootstrap';

export default function Condition() {
  useEffect(() => {
    const pathname = window.location.pathname.replace(/\/+$/, '');
      if (window.location.pathname !== pathname) {
        window.location.replace(pathname);
      }
    window.scrollTo(0, 0);
  })
return (
<>
  <Meta rule={document.location.href.split('/')[document.location.href.split('/').length-1]}/>
  <Innerbanner {...TermConditionBanner}/>
  <Breadcrumb />
  <div className="other-body pd-40">
    <div className="about--panel entry-body">
      <Container>
        <div className="entry-content content-page">
          <div className="caption">
            <h2 className='entry-title'>TERMS  &  CONDITIONS</h2>
            <p>
              Thank you for visiting the Assignment Expert Help Service, but before you go further please read all the terms and conditions carefully. As you select our service and place an order that means you have agreed to our terms and conditions. So we highly recommend that you go through our T&C first, because we want our customers to be acquainted with all the terms and conditions before they place an order. So both parties can be saved from any fuss later. One more thing is that our customers must agree to all our guidelines to be authorised to practice our services. Any defilement and or sense of violation will only lead to service termination.
            </p>
            <h3>Use Of Services</h3>
            <p>
              Assignment Expert Help Service has a team of writers and editors who provide exceptional writing services. Our experts only help for reference purposes, and we do not allow any delinquency or misconduct that leads us to any plagiarism or copyright issues. That is why we highly prohibited the reselling of our papers. 
            </p>
            <p>
            We strongly criticize all virtual misconduct. To avoid these cyber crimes and all wrongdoing activities we use end-to-end encryption. Also, we request that the customer provide authentic data and pieces of information, or else we have to take strong action against them. 
            </p>
            <p>
            Our terms & conditions will apply once a customer places their order. 
            </p>
            <p>
            We also provide a complete refund policy, so if any exceptional case, the customer is dissatisfied then they request free revision assistance or can ask for a complete refund. 
            </p>
            <p>
            If any customer uses the content or delivered papers for any unauthorised use then, it will straight to criminal consequences. After this, our website has the right to sue that client. 
            </p>
            <h3>Delivery Policy</h3>
            <p>
            Our service provides deliveries through email. So we request the correct email ID, so customers can get their deliveries easily and smoothly. 
            </p>
            <p>
            Our team never fails to deliver assignments on time, but in any exceptional case if we take time to deliver and you face any consequences then, you can claim a complete refund.
            </p>
            <p>
            Experts who are working on your papers always write after conducting thorough research, so we guarantee a quality work that matches your specific requirements.
            </p>
            <p>
            Please note that we provide free revision service but for only three times. So, it is better that you tell your concerns within these 3 times instead of coming up with changes again and again.
            </p>
            <p>
            Assignment Expert Help Service will not be responsible in any condition if the customer fails to submit their assignment because of any technical issues before their deadline.
            </p>
            <h3>Privacy & Protection Policy</h3>
            <p>
            We never reveal our customer’s private information in any condition. It doesn’t fall into our ethics. It`s our Responsibility to take care of your privacy. 
            </p>
            <p>
            We request customers provide correct information about them, so our team can deliver the document on time without any hassle.
            </p>
            <p>
            Our service uses an end-to-end encryption firewall so your privacy can never get invaded.
            </p>
            <h3>100% Plag-Free Assignments</h3>
            <p>
            We never reveal our customer’s private information in any condition. It doesn’t fall into our ethics. It`s our Responsibility to take care of your privacy. 
            </p>
            <p>
            We request customers provide correct information about them, so our team can deliver the document on time without any hassle.
            </p>
            <p>
            Our service uses an end-to-end encryption firewall so your privacy can never get invaded.
            </p>
            <ul>
              <li>We provide a policy of delivering 100% original work and with this policy, you have to agree that you will never share the document with any other party.</li>
              <li>You also have to agree that you will never sell the document we deliver to earn money. It will fall under illegal action and we lead it straight to the subject of that customer to criminal penalty.</li>
              <li>If our team offers any references or resources during writing your assignment then, it will be used for study purposes only.</li>
              <li>Assignment Expert Help Service has a policy of providing a free plagiarism report for every document, to make sure that students face no problems with submissions.</li>
            </ul>
            <h3>Payment System</h3>
            <p>
            We only allow only payments, so make sure you use your banking method to complete your payments. You can choose any payment gateway according to your convenience such as a Debit or Credit card, PayPal, Master card, or Western Union. 
            </p>
            <p>
            While placing an order, please fill in your information correctly and double-check to ensure it.
            </p>
            <p>
            Ensure that you have made the payment before getting your assignment delivered. Payment delay will result in a late service and late assignment delivery.
            </p>
            <h3>Service Amendments</h3>
            <p>
            We are authorised to make changes to our terms and conditions any time, so we request customers read it carefully before placing an order and be aware of the continuous changes. 
            </p>
            <p>
            We accept that it`s our responsibility to make changes to our site on time. So, no customers face any hurdles while taking our services.
            </p>
          </div>
        </div>
      </Container>
    </div>
  </div>
</>
)
}