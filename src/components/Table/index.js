import React, { useEffect, useState } from "react";
import { useStyles } from './styles'
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import TablePagination from "@material-ui/core/TablePagination";
import Paper from "@material-ui/core/Paper";
import { Typography, CircularProgress } from "@material-ui/core";
import api from "../../services/Api";
import Avatar from "../Avatar";
import Modal from "../Modal";
import Dialog from '../Dialog'
import AdBox from '../Ad';
import {ContactsContext} from '../../context/ContactsContext'




const DataTable = () => {
    const classes = useStyles();

    const [data, setData] = React.useContext(ContactsContext);
    const [activeData, setActiveData] = useState({})
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(6);
    const [total, setTotal] = React.useState(-1)
    const [adsData, setAdsData] = React.useState({})
    const [loading, setLoading] = React.useState(false)
    const [openModal, setModalState] = React.useState(false);
    const [openDialog, setOpenDialog] = useState(false);

    
    const getItems = (newPage = 0) => {
        setLoading(true)
        api.get(`/users?page=${newPage+1}&per_page=${rowsPerPage}`)
        .then(res => {
            setData(res.data.data)
            setTotal(res.data.total)  
            setAdsData(res.data.support) 
        })
        .catch(error => {
            setLoading(false)
            console.log("Error", error)
        }) 
        setLoading(false)       
    }

    const deleteContact = () => {
        
        api.get(`/users/${activeData.contact.id}`)
        .then(res => {
            res.status === 200 ?
                updateData(activeData.index)
            : 
            console.log('returned error')            
        })
        .catch(error => {
            setLoading(false)            
            console.log("Error", error)
        })    
    }

    const updateData = (index) => {
        let newData = [...data]
        newData.splice(index, 1)
        setData(newData)    
        setOpenDialog(false)
    }
    
    const handleModal = (contact, index) => {
        setActiveData({contact, index})
        setModalState(true)        
    }

    const handleClose = () => {
        setModalState(false)       
    }

    const handleDialogOpen = (contact, index) => {
        setOpenDialog(true)
        setActiveData({contact, index})
    }

    const handleDialogClose = () => {
        setOpenDialog(false)
    }  


    const handleChangePage = async (event, newPage) => {         
        setLoading(true)           
        setPage(newPage);       
        getItems(newPage)      
    };

    const handleChangeRowsPerPage = event => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const emptyRows =
        rowsPerPage - Math.min(rowsPerPage, total - page * rowsPerPage);

    useEffect(() => {   
        setLoading(true)     
        getItems()        
    },[])


    

    return (
        <>

        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell className={classes.tableheader}><Typography variant="subtitle1">Avatar</Typography></TableCell>
                        <TableCell className={classes.tableheader} align="right"><Typography variant="subtitle1">Email</Typography></TableCell>
                        <TableCell className={classes.tableheader} align="right"><Typography variant="subtitle1">First Name</Typography></TableCell>
                        <TableCell className={classes.tableheader} align="right"><Typography variant="subtitle1">Last Name</Typography></TableCell>
                        <TableCell className={classes.tableheader} align="right"><Typography variant="subtitle1">Action</Typography></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody className={classes.tableBody}>
                    {
                        loading  && !data ?
                        <CircularProgress size={24} />
                            :         
                            data.map((data, index) => (
                                <TableRow key={data.id}>
                                    <TableCell component="th" scope="row">
                                        <Avatar alt="contact image" src={data.avatar} width="55px" height="55px" />
                                    </TableCell>
                                    <TableCell align="right">{data.email}</TableCell>
                                    <TableCell align="right">{data.first_name}</TableCell>
                                    <TableCell align="right">{data.last_name}</TableCell>
                                    <TableCell align="right">
                                        <EditIcon onClick={() => handleModal(data, index)} className={classes.editIcon} /> 
                                        <DeleteIcon onClick={() => handleDialogOpen(data, index)} className={classes.deleteIcon}/>
                                    </TableCell>
                                </TableRow>
                            ))
                    }
                    {emptyRows > 0 && (
                        <TableRow style={{ height: 53 * emptyRows }}>
                            <TableCell colSpan={6} />
                        </TableRow>
                    )}
                </TableBody>
            </Table>
            <TablePagination
                rowsPerPageOptions={[6, 12]}
                component="div"
                count={total}
                rowsPerPage={rowsPerPage}
                page={page}
                onChangePage={handleChangePage}
                onChangeRowsPerPage={handleChangeRowsPerPage}
            />
        </TableContainer>


        <AdBox
            advert={adsData}
        />

            {/* Load Custom Modal COmponent */}
            {openModal === true &&
                (
                    <Modal openModal={openModal} view='editContact' handleClose={handleClose}  data={activeData}/>
                )
            }

            {/* Load Custom Dialog COmponent */}
            {openDialog === true &&
                (
                    <Dialog
                        handleClose={handleDialogClose}
                        openDialog={openDialog}
                        disableEscape={false}
                        view="deleteContact"
                        delete={deleteContact}        
                    />
                )
            }
        </>
    )
}

export default DataTable;
