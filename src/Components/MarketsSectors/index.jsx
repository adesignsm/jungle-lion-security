import { useEffect, useState } from 'react';
import sanityClient from '../../client';

import './index.css';

export const MarketsSectors = () => {
    const [title, setTitle] = useState('');
    const [securityData, setSecurityData] = useState([]);
    const [miscData, setMiscData] = useState([]);
    const [activeTab, setActiveTab] = useState('security');

    const fetchData = async () => {
        try {
            const query = `*[_type == 'marketsSectors'][0]`;
            const result = await sanityClient.fetch(query);
            setSecurityData(result.security);
            setMiscData(result.misc);
            setTitle(result.title);
        } catch (error) {
            console.error(error);
        }
    };

    const handleTabClick = (e) => {
        if (e.target.attributes.name.value === 'security') {
            setActiveTab('security');
        } else if (e.target.attributes.name.value === 'misc') {
            setActiveTab('misc');
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <>
            <section id='markets-sectors' className='markets-sectors'>
                <div className='section-text'>
                    {title && (<h1>{title}</h1>)}
                </div>
                <div className='table'>
                    {securityData && miscData ? (
                        <div className='tabs'>
                            <h3 
                                className={`tab ${activeTab === 'security' ? 'active' : ''}`}
                                onClick={(e) => handleTabClick(e)} 
                                name='security'
                            >
                                    {securityData.tabTitle}
                            </h3>
                            <h3 
                                className={`tab ${activeTab === 'misc' ? 'active' : ''}`}
                                onClick={(e) => handleTabClick(e)} 
                                name='misc'
                            >
                                {miscData.tabTitle}
                            </h3>
                        </div>
                    ) : (
                        null
                    )}
                    <div className='content'>
                        <div className={`list security-content ${activeTab === 'security' ? 'active' : ''}`}>
                            {securityData.items ? (
                                <ul>
                                    {securityData.items.map((item, index) => {
                                        return <li key={index}>{item}</li>
                                    })}
                                </ul>
                            ) : (
                                <h3>Nothing to see here</h3>
                            )}
                        </div>
                        <div className={`list misc-content ${activeTab === 'misc' ? 'active' : ''}`}>
                            {miscData.items ? (
                                <ul>
                                    {miscData.items.map((item, index) => {
                                        return <li key={index}>{item}</li>
                                    })}
                                </ul>
                            ) : (
                                <h3>Nothing to see here</h3>
                            )}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}