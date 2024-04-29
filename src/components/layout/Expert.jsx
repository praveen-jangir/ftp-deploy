import { NavLink } from "react-router-dom";
import Diamond from "./Diamond";
import { Col, Row } from "react-bootstrap";

export default function Expert({expert}) {
  const start = 0;
  return (
    <>
      <div className="expert-slides text-center">
        <div className="heading text-center">
          <h2 className="ttl">Meet Our Expert Team for Academic Support</h2>
          <Diamond />
        </div>
        <Row className='justify-content-center'>
          {expert && expert.slice(start, start+3)?.map((reviewListItem, index) => {
            const { author, meta_description, image, slug} = reviewListItem;
            return (
              <Col key={index} sm={6} md={6} lg={4} className="expert--slide">
                <div className="expert_bx">
                  <div className="profile">
                    <img
                      src={'https://www.assignmentexperthelp.co.uk/admin/public/expert_image/'+image}
                      width={30} height={30} alt="image" className="img-rounded loaded" />
                    <NavLink className="bld">
                      <b>{author}</b>
                    </NavLink>
                  </div>
                  {/* <div className="star_ex">
                    {reviewListItem.ratingFa.map((item, index) => {
                      return <span key={index} className={`fa ${item}`}></span>;
                    })}
                  </div> */}
                  <div className="cont">
                    <p>{meta_description}</p>
                  </div>
                  <NavLink to={'../../experts/'+slug} className="btn btn-hire btn-sm">Hire Me</NavLink>
                </div>
              </Col>
            );
          })}
        </Row>
      </div>
    </>
  );
}
