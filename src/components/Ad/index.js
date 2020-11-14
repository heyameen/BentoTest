import React from 'react'
import { Typography, Card, CardContent, CardActionArea, CardMedia} from  '@material-ui/core'
import { Skeleton } from '@material-ui/lab'
import { useStyles } from './style'

const AdBox = ({advert}) => {
    const classes = useStyles()

    console.log('ADVERT', advert)
    return (
        <>
        {
            !advert ? (
                <Skeleton variant="rect" height={150} animation="wave"/>
            ) : 
                (
            
                    <Card className={classes.card}>
                    <a href={advert.url} rel="noreferrer" target="_blank" style={{ textDecoration: 'none' }}>
                    <CardActionArea>  
                        <CardMedia
                        className={classes.media}
                        // title={advert.}
                        />
                        <CardContent className={classes.content}>
                            <Typography variant="h5" color="secondary">
                                <strong>AD:</strong> { advert.text }
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    </a>
                    </Card>
                )
        }
        </>
    )
}



export default AdBox
