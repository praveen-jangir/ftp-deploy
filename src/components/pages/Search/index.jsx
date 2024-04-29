import { Container } from 'react-bootstrap';
import Breadcrumb from '../../layout/Breadcrumb'
import Diamond from '../../layout/Diamond';
import InnerBanner from '../InnerBanner'
// Inner Banner Details
const banner = {
    bannerttl: "Your Search Results",
    backgroundImageUrl: "./assets/images/banner.webp"
};

export default function Search(data) {
  // console.log("Results ->",data);
    return (
      <>
        <InnerBanner {...banner} />
        <Breadcrumb />
        <div className="other-body pd-40">
          <section className="blog-section">
            <Container>
              <div className="heading text-center">
                <h2 className="ttl">Informative Articles for Assignment Writing</h2>
                <Diamond />
              </div>
            </Container> 
          </section>
        </div>
      </>
    );
  }