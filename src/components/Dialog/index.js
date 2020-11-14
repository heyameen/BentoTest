import React from 'react'

import { useStyles } from './style'
import { Dialog as MuiDialog, DialogActions,  Typography, Button as MuiButton, Box, Paper } from '@material-ui/core'



const Dialog = (props) => {
    const classes = useStyles();  
    

    return (
        <MuiDialog
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        open={props.openDialog}
        onClose={props.handleClose}
        disableBackdropClick={props.disableEscape}
        disableEscapeKeyDown={props.disableEscape}
        className={classes.dialog}
        >
            <Box textAlign="center" paddingTop="3rem" paddingBottom="3rem">
                <Paper className={classes.paper}>

                    { props.view === "deleteContact" &&
                        (
                            <>
                                <Typography variant="h4" align="center" gutterBottom>
                                    Are you sure you want to delete this contact?
                                </Typography>
                                
                                <DialogActions>
                                    <MuiButton onClick={props.handleClose} color="primary">
                                        No, go back
                                    </MuiButton>
                                    <MuiButton onClick={props.delete} style={{color: "#FD2D55"}}>
                                        Yes, delete
                                    </MuiButton>
                                </DialogActions>
                            </>
                        )
                    }

                </Paper>    
            </Box>
        </MuiDialog>
    )
}



export default Dialog
