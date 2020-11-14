import React from 'react'
import { Avatar as MuiAvatar } from '@material-ui/core'
import { useStyles } from './styles'


const Avatar = (props) => {
    const {alt, src, variant, children, width, height} = props
    const classes = useStyles(props)

    return (
        <MuiAvatar
            alt={alt}
            src={src}
            variant={variant}
            className={classes.root}
            style={{width: width, height: height }}
            >
            {children}
        </MuiAvatar>
    )
}

export default Avatar
