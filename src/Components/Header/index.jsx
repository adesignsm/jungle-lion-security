import { useEffect, useState } from 'react';
import sanityClient from '../../client';
import ImageUrlBuilder from '@sanity/image-url';

import './index.css';

export const Header = () => {
    const [leftSideItems, setLeftSideItems] = useState([]);
    const [rightSideItems, setRightSideItems] = useState([]);
    const [logo, setLogo] = useState([]);

    const builder = ImageUrlBuilder(sanityClient);

    const urlFor = (source) => {
        return builder.image(source);
    }
  
    const fetchData = async () => {
        try {
            const query = `*[_type == 'header'][0]`;
            const result = await sanityClient.fetch(query);
            setLogo(result.logo);
            setLeftSideItems(result.menu.leftSideItems);
            setRightSideItems(result.menu.rightSideItems);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    console.log(logo);

    return (
        <>
            <header className='header'>
                <nav>
                    <ul className='left'>
                        {leftSideItems && (
                            leftSideItems.map((item) => {
                                return (
                                    <li key={item._key}>
                                        <a href={item.menuItemAnchor.current === '/' ? '' : `#${item.menuItemAnchor.current}`}>
                                            {item.menuItemString}
                                        </a>
                                    </li>
                                )
                            })
                        )}
                    </ul>
                    {logo && (
                        <img className='logo' src={urlFor(logo.asset._ref).url()} />
                    )}
                    <ul className='right'>
                        {rightSideItems && (
                            rightSideItems.map((item) => {
                                return (
                                    <li key={item._key}>
                                        <a href={item.menuItemAnchor.current === '/' ? '' : `#${item.menuItemAnchor.current}`}>
                                            {item.menuItemString}
                                        </a>
                                    </li>
                                )
                            })
                        )}
                    </ul>
                </nav>
            </header>
        </>
    )
}