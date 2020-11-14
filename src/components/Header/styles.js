import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
    root: {
        marginTop: '5rem',
        display: 'flex',
        justifyContent: 'space-between',
        marginBottom: '2rem'
    },

    sm: {
        marginTop: '2rem',
        display: 'flex',
        flexDirection: 'column',
        marginBottom: '1.4rem'
    },

    header: {
        marginBottom: '.5rem'
    }
    
}))

export { useStyles }