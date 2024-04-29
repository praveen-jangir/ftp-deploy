import React from 'react'
import Innerbanner from '../InnerBanner'
import Breadcrumb from '../../layout/Breadcrumb'
import { TermConditionBanner } from '../bannerData'
import { termsText } from '../../pages/termcondition/TermsData'
import { Container } from 'react-bootstrap'

export default function TermsCondition() {
  return (
    <>
        <Innerbanner {...TermConditionBanner} />
        <Breadcrumb />
        <div className="other-body pd-40">
            <div className="about--panel entry-body">
                <Container>
                    <div className="entry-content content-page">
                        <div className="caption">
                            {
                                termsText.map((termsItems => {
                                    return (
                                        <p>{termsItems.text}</p>
                                    )
                                }))
                            }
                        </div>
                    </div>
                </Container>
            </div>
        </div>
    </>
  )
}
