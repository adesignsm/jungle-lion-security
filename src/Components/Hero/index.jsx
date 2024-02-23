import { useEffect, useState } from 'react';
import sanityClient from '../../client';
import ImageUrlBuilder from '@sanity/image-url';

import './index.css';

import ARROW_DOWN from '../../Assets/Icons/arrow-down.svg';

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

    return (
        <>
            <section className='hero'>
                {data && data.text && (
                    <h1>{data.text}</h1>
                )}
                {data && data.logo && (
                    <img className='logo' src={urlFor(data.logo.asset._ref).url()} />
                )}
                <div className='arrow-down-container'>
                    <img className='arrow-down' src={ARROW_DOWN} />
                </div>
            </section>
        </>
    )
}