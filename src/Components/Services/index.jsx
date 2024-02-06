import { useEffect, useState } from 'react';
import sanityClient from '../../client';
import ImageUrlBuilder from '@sanity/image-url';

import './index.css';

export const Services = () => {
    const [data, setData] = useState([]);

    const builder = ImageUrlBuilder(sanityClient);

    const urlFor = (source) => {
        return builder.image(source);
    }

    const fetchData = async () => {
        try {
            const query = `*[_type == 'services'][0]`;
            const result = await sanityClient.fetch(query);
            setData(result.serviceSection);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    console.log(data);

    return (
        <>
            <section id='services' className='services'>
                {data && data.sectionTitle && (
                    <h1 className='side-title'>{data.sectionTitle}</h1>
                )}
                <div className='section-text'>
                    {data && data.sectionText && (
                        <h1>{data.sectionText}</h1>
                    )}
                    <div className='button-container'>
                        {data && data.sectionButton && (
                            <button className='button'>
                                <a href={data.sectionButton.url}>
                                    {data.sectionButton.text}
                                </a>
                            </button>
                        )}
                    </div>
                </div>
            </section>
        </>
    )
}