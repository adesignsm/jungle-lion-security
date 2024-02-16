import { useEffect, useState } from "react";
import sanityClient from '../../client';

import './index.css';

export const Contact = () => {
    const [data, setData] = useState([]);

    const fetchData = async () => {
        try {
            const query = `*[_type == 'contact'][0]`;
            const result = await sanityClient.fetch(query);
            setData(result.contact);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <>
            <section id='contact' className='contact'>
                <div className="container">
                    <div className='section-text'>
                        {data && data.title && (<h1>{data.title}</h1>)}
                    </div>
                    <div className='contact-button-container'>
                        {data && data.button ? (
                            <button>
                                <a href={`mailto:${data.button.email}`}>
                                    {data.button.text}
                                </a>
                            </button>
                        ) : (
                            null
                        )}
                    </div>
                </div>
            </section>
        </>
    )
}