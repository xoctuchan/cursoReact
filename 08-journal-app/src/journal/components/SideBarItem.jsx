import { Box, Divider, Drawer, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from '@mui/material'
import { TurnedInNot } from '@mui/icons-material';
import React from 'react'
import { useMemo } from 'react';
import { setActiveNote } from '../../store/journal';
import { useDispatch } from 'react-redux';

export const SideBarItem = ({title, body, id, date, imageUrls}) => {

    const dispatch = useDispatch();

    const onClickSetActiveNote = ()=>{
        dispatch (setActiveNote({id, date, title, body, imageUrls}));
    }

    const newTitle = useMemo (()=>{
        return title.length >= 17 
            ? title.substring(0,17)+'...'
            : title ;
    },[title]);

    return (
        <ListItem disablePadding>
            <ListItemButton onClick={ onClickSetActiveNote }>
                <ListItemIcon>
                    <TurnedInNot />
                </ListItemIcon>
                <Grid container>
                    <ListItemText primary={ newTitle } />
                    <ListItemText secondary={ body } />
                </Grid>
            </ListItemButton>
        </ListItem>
    )
}
