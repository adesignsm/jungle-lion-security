import { useEffect, useState } from 'react';
import sanityClient from '../../client';

import './index.css';

import CLOSE from '../../Assets/Icons/close.svg';

export const QuoteBlock = () => {
    const [quoteBlockData, setQuoteBlockData] = useState([]);
    const [closeBlock, setCloseBlock] = useState(false);

    const fetchData = async () => {
        try {
            const query = `*[_type == 'fixedCtas'][0]`;
            const result = await sanityClient.fetch(query);
            setQuoteBlockData(result.quoteBlock);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const handleCloseClick = () => {
        setCloseBlock(true);
        console.log('hit')
    }

    return (
        <>
            {quoteBlockData && quoteBlockData.description && (
                <div className={`quote-block ${!closeBlock ? '' : 'inactive'}`}>
                    <div className='close-container'>
                        <img src={CLOSE} onClick={handleCloseClick}/>
                    </div>
                    {quoteBlockData.description[0] && (<p>{quoteBlockData.description[0].children[0].text}</p>)}
                    <div className='button-container'>
                        {quoteBlockData.applyCta && quoteBlockData.quoteCta ? (
                            <>
                                <button className='apply'>
                                    <a href={quoteBlockData.applyCta.url}>
                                        {quoteBlockData.applyCta.text}
                                    </a>
                                </button>
                                <button className='quote'>
                                    <a href={quoteBlockData.quoteCta.url}>
                                        {quoteBlockData.quoteCta.text}
                                    </a>
                                </button>
                            </>
                        ) : (
                            null
                        )}
                    </div>
                </div>
            )}
        </>
    )
}