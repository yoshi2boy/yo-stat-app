'use client';
import { AppBar, Toolbar } from '@mui/material';
import styles from './Header.module.scss';
import Text from '@/componets/elements/Text';
import MenuIcon from '@mui/icons-material/Menu';
import Sidebar from '../sidebar/Sidebar';
import IconButton from '@/componets/elements/IconButton';
import React, { useState, useEffect, useRef } from 'react';
import { redirect } from 'next/navigation';

const Header = () => {
    const [displayFlag, setDisplayFlag] = useState(false);
    const sidebarRef = useRef<HTMLDivElement>(null); // HTMLDivElement型を指定

    const handleMenu = (): void => {
        setDisplayFlag(!displayFlag); // displayFlagの状態をトグル
    };

    const handleTitle = (): void => {
        redirect('/top');
    };

    const handleClickOutside = (event: MouseEvent) => {
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
                <Sidebar displayFlag={displayFlag} />
            </div>
        </>
    );
};

export default Header;