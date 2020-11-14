import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import {Menu as MuiMenu} from '@material-ui/core';
import MenuItem from '@material-ui/core/MenuItem';

import MoreVertIcon from '@material-ui/icons/MoreVert';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import { ModalContext } from '../../context/ModalContext';

// const options = [
//     'None',
//     'Atria',

// ];

// const ITEM_HEIGHT = 48;

const Menu = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [openModal, setModalState] = React.useContext(ModalContext);
    
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    
    const handleModal = () => {
        console.log(openModal)
        setModalState(true)
    }

    return (
        <div>
            <IconButton
                aria-label="more"
                aria-controls="long-menu"
                aria-haspopup="true"
                onClick={handleClick}
            >
                <MoreVertIcon />
            </IconButton>
            <MuiMenu
                id="long-menu"
                anchorEl={anchorEl}
                keepMounted
                open={open}
                onClose={handleClose}
                
            >                
                <MenuItem onClick={handleModal}>
                    <ListItemIcon>
                        <EditIcon fontSize="small" />
                    </ListItemIcon>
                    <ListItemText primary="Edit data" /> 
                </MenuItem>
                <MenuItem>
                    <ListItemIcon>
                        <DeleteIcon fontSize="small" />
                    </ListItemIcon>
                    <ListItemText primary="Delete Data" /> 
                </MenuItem>
                
            </MuiMenu>

            
        </div>
    );
}

export default Menu