import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
    
    dialog: {
        '& .MuiDialog-paper' : {
            backgroundColor: 'inherit',
            boxShadow: 'none',
            borderRadius: '0',
            
        }
    },

    paper:{
        padding: "2.5rem 1.5rem 1rem 1.5rem"
    }


    
}));

export { useStyles }