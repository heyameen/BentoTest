import React from 'react'
import Header from '../Header'
import DataTable from '../Table'
import {Box} from '@material-ui/core';


const AppLayout = () => {
    return (
        <Box display="flex" flexDirection="column" justifyContent="center" padding="0 0">
            <Header title="Contact List"/>
            <DataTable/>
        </Box>
    )
}

export default AppLayout
