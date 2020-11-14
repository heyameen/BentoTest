import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
    formHeader:{
        display: 'flex',
        justifyContent: 'space-between',
        padding: '2rem 2rem 0'
    },
    fieldWrapper: {
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'wrap',
        '& > * ' : {
            minWidth: '100%',
            margin: theme.spacing(0,0,4,0),

            [theme.breakpoints.up('sm')]: {
                minWidth: '25ch',
                margin: theme.spacing(0,2,4,0),
            }

        },
        padding: '2rem 2rem 0',
    },
    icon: {
        '&:hover':{
            cursor: 'pointer',
            color: theme.palette.error.main
        }
    } 
}))

export { useStyles }