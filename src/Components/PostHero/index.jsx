import { useEffect, useState } from 'react';
import sanityClient from '../../client';
import ImageUrlBuilder from '@sanity/image-url';

import './index.css';

export const PostHero = () => {
    const [data, setData] = useState([]);

    const builder = ImageUrlBuilder(sanityClient);

    const urlFor = (source) => {
        return builder.image(source);
    }

    const fetchData = async () => {
        try {
            const query = `*[_type == 'postHero'][0]`;
            const result = await sanityClient.fetch(query);
            setData(result);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <>
            <section className='post-hero'>
                {data && data.text && (
                    <h1>{data.text}</h1>
                )}
                <div className='clients-container'>
                    {data && data.clients && data.clients.length > 0 && (
                        data.clients.map((client) => {
                            return (
                                <img key={client._key} src={urlFor(client.clientLogo.asset._ref).url()} />
                            )
                        })
                    )}
                </div>
            </section>
        </>
    )
}