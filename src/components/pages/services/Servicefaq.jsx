
import { useEffect, useState } from 'react'
// import { questions } from './data';
import Diamond from '../../layout/Diamond';

export default function Servicefaq(faqs) {
    const [selected, setSelected] = useState(null);
    const [questions, setQuestions] = useState([]);
    const [faq, setFaq] = useState([]);
    const toggle = (i) => {
        if (selected == i) {
            return setSelected(null)
        }
        setSelected(i)
    }
    useEffect(()=>{
        if (faqs.faqs && faqs.faqs.length > 0) {
            // console.log(faqs.faqs[0].question);
            var data = JSON.parse(faqs.faqs[0].question);
            setQuestions(Object.keys(data));
            setFaq(Object.values(data));
        }
    },[faqs]);
    return (
        <>
            <div className="faq-section pd-20 service_section">
                <div className="heading text-center mb-4">
                    <h2 className='ttl'>Frequently Asked Questions</h2>
                    <Diamond />
                </div>
                <div className='panel-group' id='accordion'>
                    {
                        questions.map((item, i) => {
                            return (
                                <>
                                {item &&(
                                    <div className='panel panel-default'>
                                    <div className='panel-heading' role='tab'>
                                        <h4 className='panel-title' onClick={() => toggle(i)}>
                                            <a href='javascript:void(0)' className={selected === i ? 'active' : ''}>{item}</a>
                                        </h4>
                                    </div>
                                    <div className={selected === i ? 'panel-collapse show' : 'panel-collapse'}>
                                        <div className='panel-body'>
                                            <div dangerouslySetInnerHTML={{ __html: faq[i] }}/>
                                        </div>
                                    </div>
                                </div>
                                )}
                                </>
                            )
                        })
                    }
                </div>
            </div>

        </>
    )
}
