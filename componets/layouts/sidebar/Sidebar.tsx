import React from 'react';
import { Drawer, CssBaseline, Toolbar, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Divider } from '@mui/material';
import styles from './Sidebar.module.scss';
import { Info as InfoIcon, Home as HomeIcon, Dataset as DatasetIcon, Groups as GroupsIcon, SentimentVeryDissatisfied as SentimentVeryDissatisfiedIcon } from '@mui/icons-material';
import Box from '@mui/material/Box';

const drawerWidth = 240;

type Props = {
    displayFlag: boolean;
    handleMenuBtnClick: (page: string) => void;
}

const Sidebar = ({ displayFlag, handleMenuBtnClick }: Props) => {

    return (
        <Box sx={{ display: displayFlag ? 'flex' : 'none' }}>
            <CssBaseline />
            <Drawer
                className={styles.area}
                variant="permanent"
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
                }}
            >
                <Toolbar className={styles.title} >
                    <ListItemButton onClick={() => handleMenuBtnClick('top')}>
                        <ListItemIcon>
                            <HomeIcon />
                        </ListItemIcon>
                    </ListItemButton>
                </Toolbar>
                <Box sx={{ overflow: 'auto' }}>
                    <Divider />
                    <List>
                        <ListItem key='about' disablePadding>
                            <ListItemButton onClick={() => handleMenuBtnClick('about')}>
                                <ListItemIcon>
                                    <InfoIcon />
                                </ListItemIcon>
                                <ListItemText primary='ABOUT' />
                            </ListItemButton>
                        </ListItem>
                        <ListItem key='data' disablePadding>
                            <ListItemButton onClick={() => handleMenuBtnClick('about')}>
                                <ListItemIcon>
                                    <DatasetIcon />
                                </ListItemIcon>
                                <ListItemText primary='データ' />
                            </ListItemButton>
                        </ListItem>
                        <ListItem key='population' disablePadding>
                            <ListItemButton onClick={() => handleMenuBtnClick('population')}>
                                <ListItemIcon>
                                    <GroupsIcon />
                                </ListItemIcon>
                                <ListItemText primary='人口' />
                            </ListItemButton>
                        </ListItem>
                        <ListItem key='conflict' disablePadding>
                            <ListItemButton onClick={() => handleMenuBtnClick('conflict')}>
                                <ListItemIcon>
                                    <SentimentVeryDissatisfiedIcon />
                                </ListItemIcon>
                                <ListItemText primary='紛争' />
                            </ListItemButton>
                        </ListItem>
                    </List>
                    <Divider />
                </Box>
            </Drawer>
        </Box>
    );
}

export default Sidebar;