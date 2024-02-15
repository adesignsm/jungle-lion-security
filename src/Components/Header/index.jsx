import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import sanityClient from '../../client';
import ImageUrlBuilder from '@sanity/image-url';

import './index.css';

export const Header = () => {
    const [pathname] = useState(window.location.href);
    const [leftSideItems, setLeftSideItems] = useState([]);
    const [rightSideItems, setRightSideItems] = useState([]);
    const [logo, setLogo] = useState([]);

    const [applyButtonData, setApplyButtonData] = useState([]);

    const builder = ImageUrlBuilder(sanityClient);

    const urlFor = (source) => {
        return builder.image(source);
    }

    const fetchCtaData = async () => {
        try {
            const query = `*[_type == 'fixedCtas'][0]`;
            const result = await sanityClient.fetch(query);
            setApplyButtonData(result.applyButton);
        } catch (error) {
            console.error(error);
        }
    };
  
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
        fetchCtaData();
        fetchData();
    }, []);

    console.log(pathname)

    return (
        <>
            <header className='header'>
                <nav>
                    <ul className='left'>
                        {leftSideItems && pathname.indexOf('/services') <= -1 && (
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
                    {logo && logo.asset && (
                        <a href='/'>
                            <img className='logo' src={urlFor(logo.asset._ref).url()} />
                        </a>
                    )}
                    <ul className='right'>
                        {rightSideItems && pathname.indexOf('/services') <= -1 && (
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
                {applyButtonData && (
                    <button className='apply-button cta'>
                        <a href={applyButtonData.url}>{applyButtonData.text}</a>
                    </button>
                )}
            </header>
        </>
    )
}