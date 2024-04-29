import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import './checkout.css'

const checker = [
  { labeled: `Topic :`, text: `Business Proposal`, col: ``, coll: `topic` },
  { labeled: `Page :`, text: `4 page/1000 words`, col: ``, coll: `page` },
  { labeled: `Delivery Date :`, text: `2024-04-15`, col: ``, coll: `date` },
  { labeled: `Amount :`, text: `£ 29.00`, col: `orignal`, coll: `amount` },
  { labeled: `Discount :`, text: `- £10`, col: `dicount`, coll: `offer` },
  { labeled: `Total Amount To Pay :`, text: `£ 19`, col: `total`, coll: `total_amount` },
]


export default function CheckOut() {
  return (
    <>
      <div className="other-body pd-40 bg-out">
        <Container>
          <Row>
            <Col lg={7} className='md-mb-3'>
              <aside className="asider aside-left">
                <div className="card">
                  <div className="card-body">
                    <div className="checkout--box">
                      <h2>Order : <span className="orderId">QUK210324123403</span> </h2>
                      <ul className='checkout--ul'>
                        {
                          checker.map((item) => {
                            const { labeled, text, col, coll } = item;
                            return(
                              <li>
                                <p className={`${col}`}><strong>{labeled} <span><em className={`${coll}`}>{text}</em></span></strong></p>
                              </li>
                            )
                          })
                        }
                      </ul>
                    </div>
                  </div>
                </div>
              </aside>
            </Col>
            <Col lg={5}>
              <aside className="asider aside-right">
                <div className="card">
                  <div className="card-body">
                    <div className="checkout--box">
                      <h2> Pay With Card  </h2>
                      <div className='checkout--ul'>
                        <div class="sec">
                                <h5>🔒 100% SECURE PAYMENT BY:</h5>
                                <div>
                                    <img src="public/assets/images/mastercard.webp" />
                                    <img src="public/assets/images/visa.webp" />
                                    <img src="public/assets/images/discover.webp" />
                                    <img src="public/assets/images/American.webp" />
                                    <img src="public/assets/images/McA.webp" />
                                    <img src="public/assets/images/Norton.webp" />
                                </div>
                            </div>
                      </div>
                    </div>
                  </div>
                </div>
              </aside>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}
