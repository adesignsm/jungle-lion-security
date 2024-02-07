import { useEffect, useState } from 'react';
import sanityClient from '../../client';

import './index.css';

export const FAQ = () => {
    const [textData, setTextData] = useState([]);
    const [faqData, setFaqData] = useState([]);
    const [activeIndex, setActiveIndex] = useState(null);

    const fetchData = async () => {
        try {
            const query = `*[_type == 'faq'][0]`;
            const result = await sanityClient.fetch(query);
            setTextData(result.faqSection);
            setFaqData(result.questionAnswer);
        } catch (error) {
            console.error(error);
        }
    };

    const handleAccordionClick = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    }

    useEffect(() => {
        fetchData();
    }, []);

    console.log(textData);

    return (
        <>
            <section id='faq' className='faq'>
                <div className='column-one'>
                    {textData && textData.sectionTitle && (
                        <h1 className='side-title'>{textData.sectionTitle}</h1>
                    )}
                </div>
                <div className='column-two'>
                    <div className='section-text'>
                        {textData && textData.sectionText && (
                            <h1>{textData.sectionText}</h1>
                        )}
                    </div>
                    <div className="accordion">
                        {faqData.map((item, index) => (
                            <div key={index} className={`accordion-item`}>
                                <div className="accordion-header" onClick={() => handleAccordionClick(index)}>
                                    <span className='question'>{item.question}</span>
                                    <span className={`accordion-icon ${activeIndex === index ? 'minus' : 'plus'}`}>
                                        {activeIndex === index ? '\u2212' : '\u002B'}
                                    </span>
                                </div>
                                <div className={`accordion-content ${activeIndex === index ? 'active' : ''}`}>
                                <span className='answer'>{item.answer}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}