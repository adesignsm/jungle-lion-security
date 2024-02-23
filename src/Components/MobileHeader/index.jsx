import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import sanityClient from '../../client';
import ImageUrlBuilder from '@sanity/image-url';

import './index.css';

export const MobileHeader = () => {
    const [pathname] = useState(window.location.href);
    const [menuData, setMenuData] = useState([]);
    const [logo, setLogo] = useState([]);
    const [showMenu, setShowMenu] = useState(false);

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
            const combinedMenuItems = [...result.menu.leftSideItems, ...result.menu.rightSideItems];
            setMenuData(combinedMenuItems);
            setLogo(result.logo);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        fetchCtaData();
        fetchData();
    }, []);

    console.log(menuData)

    return (
        <>
            <header className='mobile-header'>
                <nav>
                    <a href='/'>home</a>
                    {logo && logo.asset && (
                        <a href='/'>
                            <img className='logo' src={urlFor(logo.asset._ref).url()} />
                        </a>
                    )}
                    <p onClick={() => setShowMenu(!showMenu)}>Menu</p>
                </nav>
                <div className={`menu-overlay ${showMenu ? 'show' : ''}`}>
                    <ul className='menu-list'>
                        {menuData && pathname.indexOf('/services') <= -1 && (
                            menuData.map((item) => {
                                return (
                                    <li onClick={() => setShowMenu(false)} key={item._key}>
                                        <a href={item.menuItemAnchor.current === '/' ? '' : `#${item.menuItemAnchor.current}`}>
                                            {item.menuItemString}
                                        </a>
                                    </li>
                                )
                            })
                        )}
                        {applyButtonData && (
                            <button className='mobile-apply-button cta'>
                                <a href={applyButtonData.url}>{applyButtonData.text}</a>
                            </button>
                        )}
                    </ul>
                </div>
            </header>
        </>
    )
}