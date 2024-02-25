import { useEffect, useState } from 'react';
import sanityClient from '../../client';
import ImageUrlBuilder from '@sanity/image-url';

import './index.css';

export const PostHero = () => {
    const [data, setData] = useState([]);
    const [width] = useState(window.innerWidth);

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
            <section id='about us' className='post-hero'>
                {data && data.text && (
                    <h1>{data.text}</h1>
                )}
                <div className='clients-container'>
                    {data && data.clients && data.clients.length > 0 && width > 768 ? (
                        data.clients.map((client) => {
                            return (
                                <img key={client._key} src={urlFor(client.clientLogo.asset._ref).url()} />
                            )
                        })
                    ) : (
                        <marquee className='marquee' scrollamount="3" scrolldelay="100">
                            {data && data.clients && data.clients.map((client) => {
                                return (
                                    <img key={client._key} src={urlFor(client.clientLogo.asset._ref).url()} />
                                )
                            })}
                        </marquee>
                    )}
                </div>
            </section>
        </>
    )
}