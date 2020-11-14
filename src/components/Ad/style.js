import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
    
    card: { 
        borderRadius: '10px',
        backgroundColor: theme.palette.background.default,
        boxShadow: 'none',
        marginTop: '2rem',
        marginBottom: 'auto'
    },
    
    content: {
        padding: '1.5rem'
    }
}))

export { useStyles }