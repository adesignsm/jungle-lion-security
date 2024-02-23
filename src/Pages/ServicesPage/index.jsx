import { useEffect, useState } from 'react';
import sanityClient from '../../client';
import ImageUrlBuilder from '@sanity/image-url';

import './index.css';

export const ServicesPage = () => {
    const [data, setData] = useState([]);

    const builder = ImageUrlBuilder(sanityClient);

    const urlFor = (source) => {
        return builder.image(source);
    }

    const fetchData = async () => {
        try {
            const query = `*[_type == 'services'][0]`;
            const result = await sanityClient.fetch(query);
            setData(result.servicesPage);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <>
            <section className='services-page'>
                <div className='title'>
                    <h1>Services</h1>
                    <div className='line'></div>
                </div>
                <div className='services-list'>
                    {data && (
                        data.map((item) => {
                            return (
                                <>
                                    <div className='image-container'>
                                        <img src={urlFor(item.image.asset._ref).url()} />
                                    </div>
                                    <h1>{item.service}</h1>
                                </>
                            )
                        })
                    )}
                </div>
            </section>
        </>
    )
}