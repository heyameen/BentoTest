import React from 'react'
import { Button as MuiButton, CircularProgress} from '@material-ui/core'
import { useStyles } from './styles'
// import CircularProgress from '@material-ui/icons/C'

const Button = (props) => {
    const { variant, color, onClick, size, disabled, startIcon, endIcon, children, loading } = props
    const classes = useStyles(props)
    
    return (
        <MuiButton
        variant={variant ? variant : undefined}
        className={classes.root}
        color={color}
        onClick={onClick}
        size={size}
        disabled={disabled}
        startIcon={startIcon}
        endIcon={endIcon}
        >
            { children }
            {loading && 
                <CircularProgress size={24} className={classes.buttonProgress}/>
            }           
        </MuiButton>
    )
}



export default Button;
