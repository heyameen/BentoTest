import { Box, Container, Modal as MuiModal, Paper } from '@material-ui/core'
import React from 'react'
import ContactDetails from '../Forms/EditContact'
import NewContact from '../Forms/CreateContact'
import { useStyles } from './style'

const Modal = props => {
    const classes = useStyles()
    const { view,  openModal, handleClose, disableBackdropClick, data } = props
    console.log('props', props)

    return (
        <MuiModal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={openModal}
        onClose={handleClose}
        disableBackdropClick={disableBackdropClick}
        className={classes.root}
        >
            <Container maxWidth={'sm'} style={{ outline: 0 }} >
                <Box marginTop="8rem">                

                    { view === "editContact" && 
                        (
                            <Paper padding="1.5rem">
                                
                                <ContactDetails onClose={handleClose}  selectedData={data}/>
                            </Paper>
                        )
                    }

                    { view === "addContact" && 
                        (
                            <Paper padding="1.5rem">
                                
                                <NewContact onClose={handleClose} />
                            </Paper>
                        )
                    }                   
                </Box>
            </Container>
        </MuiModal>
    )
}



export default Modal
