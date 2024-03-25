'use client';
import { AppBar, Toolbar } from '@mui/material';
import styles from './Header.module.scss';
import Text from '@/componets/elements/Text';
import MenuIcon from '@mui/icons-material/Menu';
import Sidebar from '../sidebar/Sidebar';
import IconButton from '@/componets/elements/IconButton';
import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';

const Header = () => {
    const [displayFlag, setDisplayFlag] = useState(false);
    const sidebarRef = useRef<HTMLDivElement>(null);
    const router = useRouter();

    const handleMenu = (): void => {
        setDisplayFlag(!displayFlag);
    };

    const handleTitle = (): void => {
        router.push('/top');
    };

    const handleMenuBtnClick = (page: string) => {
        router.push(`/${page}`);
    };

    const handleClickOutside = (event: MouseEvent) => {
        // クリックされた要素がsidebarRefが参照している要素に含まれているか確認
        if (sidebarRef.current && !sidebarRef.current.contains(event.target as Node)) { // event.targetをNodeにキャスト
            setDisplayFlag(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <>
            <AppBar className={styles.bar}>
                <Toolbar>
                    <IconButton
                        className=''
                        onClick={handleMenu}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Text
                        className={styles.title}
                        text='タイトル'
                        onClick={handleTitle}
                    />
                </Toolbar>
            </AppBar>
            <div ref={sidebarRef}>
                <Sidebar
                    displayFlag={displayFlag}
                    handleMenuBtnClick={handleMenuBtnClick}
                />
            </div>
        </>
    );
};

export default Header;