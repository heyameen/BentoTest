import React from 'react'
import {Typography, Grid, useMediaQuery} from "@material-ui/core";
import { useStyles } from './styles'
import { useTheme } from '@material-ui/styles';
import Button from '../Button'
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import Modal from "../Modal";


const Header = ({title}) => {
    const classes = useStyles();
    const theme = useTheme();
    const isMobile= useMediaQuery(theme.breakpoints.down('xs'));

    const [openModal, setModalState] = React.useState(false);
    

    const handleModal = () => {        
        setModalState(true)        
    }

    const handleClose = () => {
        setModalState(false)       
    }

    
    return (
        <>
            <Grid
                className={isMobile ? classes.sm : classes.root}
                
            >
                <Typography variant="h3" className={classes.header}>
                    {title}
                </Typography>
                <Button 
                variant="contained" 
                color="secondary" 
                startIcon={<PersonAddIcon/>}
                onClick={handleModal}>
                    Add Contact
                </Button>
            </Grid>

            {/* Load Custom Modal COmponent */}
            {openModal === true &&
                (
                    <Modal openModal={openModal} view='addContact' handleClose={handleClose} />
                )
            }
        </>
    )
}

export default Header
