import { Suspense, useEffect, useState } from "react";
import sanityClient from './client';
import ImageUrlBuilder from '@sanity/image-url';

import { Header } from "./Components/Header";
import { QuoteBlock } from "./Components/QuoteBlock";
import { Hero } from "./Components/Hero";
import { PostHero } from "./Components/PostHero";

export const App = () => {
    const [data, setData] = useState([]);

    const builder = ImageUrlBuilder(sanityClient);

    const urlFor = (source) => {
        return builder.image(source);
    }

    const fetchData = async () => {
        try {
            const query = `*[_type == 'fixedBgImages'][0]`;
            const result = await sanityClient.fetch(query);
            setData(result);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);
    
    const backgroundImageUrl = data && data.images && urlFor(data.images[0].asset._ref).url();

    return (
        <>
            <Suspense>
                <main className='main' style={{ backgroundImage: `url(${backgroundImageUrl})`}}>
                    <Header />
                    <QuoteBlock />
                    <Hero />
                    <PostHero />
                </main>
            </Suspense>
        </>
    )
}