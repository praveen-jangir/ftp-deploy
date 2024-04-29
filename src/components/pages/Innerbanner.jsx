import { Col, Container, Row } from "react-bootstrap";

export default function Innerbanner(props) {
  return (
    <>
        <section className='inner_banner page-header' style={{backgroundImage:`url(${props.backgroundImageUrl})`}}>
            <Container>
                <Row>
                    <Col md={12}>
                        <div className='inner_banner'>
                            <h1 className='text-center' dangerouslySetInnerHTML={{ __html: props.bannerttl?props.bannerttl:props.headingbanner }}></h1>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section> 
    </>
  )
}
