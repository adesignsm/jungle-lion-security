import { useEffect, useState } from 'react';
import sanityClient from '../../client';
import ImageUrlBuilder from '@sanity/image-url';

import './index.css';

export const Footer = () => {
    const [footerData, setFooterData] = useState([]);
    const [copyrightData, setCopyrightData] = useState([]);

    const builder = ImageUrlBuilder(sanityClient);

    const urlFor = (source) => {
        return builder.image(source);
    }

    const fetchData = async () => {
        try {
            const query = `*[_type == 'footer'][0]`;
            const result = await sanityClient.fetch(query);
            setFooterData(result.content);
            setCopyrightData(result.copyright);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    console.log(copyrightData);

    return (
        <>
            <footer className='footer'>
                <div className='content'>
                    {footerData && footerData.logo && (
                        <div className='logo-container'>
                            <img src={urlFor(footerData.logo.asset._ref).url()} />
                        </div>
                    )}
                    {footerData && footerData.copy && (
                        <div className='content-container'>
                            <h1>{footerData.copy.title}</h1>
                            <h3>
                                <a href={`https://www.google.com/maps/place/${footerData.copy.address}`}>
                                    {footerData.copy.address}
                                </a>
                            </h3>
                            <h3>
                                <a href={`mailto:${footerData.copy.email}`}>
                                    {footerData.copy.email}
                                </a>
                            </h3>
                            <h3>
                                <a href={`tel:${footerData.copy.phone}`}>
                                    {footerData.copy.phone}
                                </a>
                            </h3>
                        </div>
                    )}
                </div>
                <div className='copyright-section'>
                    {copyrightData && copyrightData.privacyPolicy && (
                        <>
                            <h3>{copyrightData.text}</h3>
                            <h3>
                                <a href={copyrightData.privacyPolicy.url}>
                                    {copyrightData.privacyPolicy.title}
                                </a>
                            </h3>
                        </>
                    )}
                </div>
            </footer>
        </>
    )
}