import { useEffect, useState } from 'react';
import sanityClient from '../../client';
import ImageUrlBuilder from '@sanity/image-url';

import './index.css';

export const Hero = () => {
    const [data, setData] = useState([]);

    const builder = ImageUrlBuilder(sanityClient);

    const urlFor = (source) => {
        return builder.image(source);
    }

    const fetchData = async () => {
        try {
            const query = `*[_type == 'hero'][0]`;
            const result = await sanityClient.fetch(query);
            setData(result);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    console.log(data.text);
    const backgroundImageUrl = data && data.image && urlFor(data.image.asset._ref).url();

    return (
        <>
            <section className='hero' style={{ backgroundImage: `url(${backgroundImageUrl})` }}>
                {data && data.text && (
                    <h1>{data.text}</h1>
                )}
            </section>
        </>
    )
}