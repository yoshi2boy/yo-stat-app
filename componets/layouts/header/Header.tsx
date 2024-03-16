'use client';
import { AppBar, Toolbar } from '@mui/material';
import styles from './Header.module.scss';
import Text from '@/componets/elements/Text';
import MenuIcon from '@mui/icons-material/Menu';
import Sidebar from '../sidebar/Sidebar';
import IconButton from '@/componets/elements/IconButton';
import { useState } from 'react';
import { redirect } from 'next/navigation';

const Header = () => {

    const [displayFlag, setDisplayFlag] = useState(false);

    const handleMenu = () => {
        setDisplayFlag(true);
    };

    const handleTitle = () => {
        redirect('/top');
    };

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
                        text='Title'
                        onClick={handleTitle}
                    />
                </Toolbar>
            </AppBar>
            <Sidebar displayFlag={displayFlag} />
        </>
    );
};

export default Header;
