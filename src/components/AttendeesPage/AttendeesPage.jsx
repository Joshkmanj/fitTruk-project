import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import AttendanceItem from '../AttendanceItem/AttendanceItem';
//--------------< MUI IMPORTS >-----------------------------
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import SendIcon from '@mui/icons-material/Send'; // SEND MESSAGE TO CUSTOMER
import Typography from '@mui/material/Typography';




function AttendeesPage() {
    // =============================< SETUP >========================================
    //------------< TOOLS >-------------
    const dispatch = useDispatch();
    const history = useHistory();

    //---< FETCH ATTENDANCE >------
    useEffect(() => {
        dispatch({
            type: 'FETCH_CLASSES'
        })
        dispatch({
            type: 'FETCH_ATTENDANCE',
            payload: id
        })
        dispatch({
            type: 'FETCH_CLASS_DETAILS',
            payload: id
        });
    }, [])

    // -------< VARIABLES >---------
    const attendees = useSelector(store => store.attendees);
    const classDetails = useSelector(store => store.selectedClass.classDetails)
    const allClasses = useSelector(store => store.allClasses)
    const { id } = useParams()

    console.log('Class Details:', classDetails);


    // ==========================< CLICK LISTENERS >===============================

    // -------< CHECKING IN CUSTOMERS >---------
    const handleCheckIn = () => {
        console.log('send a dispatch to the server to update if users are checked in in the database');
        dispatch({
            type: 'UPDATE_ATTENDANCE',
            payload: {
                attendees,
                id
            }
        })
    };
    // ---------< GO BACK >--------------
    const handleReturnClick = () => {
        history.goBack();
        console.log('Clicked Cancel');
    }


    return (
        <>
            <Container>
                <Card sx={{ maxWidth: 345 }}>
                    <CardContent>
                        <Typography variant="h5" align="center">
                            {classDetails.week_day_name} {classDetails.abbreviated_date} 
                        </Typography>
                    </CardContent>
                </Card>
                {attendees.map(customer => {
                    return (
                        <Card key={customer.id}>
                            <CardContent>
                                <Avatar src={customer.profile_image} />

                                <Typography variant="h5">
                                    {customer.first_name} {customer.last_name}
                                </Typography>
                            </CardContent>
                        </Card>
                    );

                })}

            </Container>
            <button onClick={handleCheckIn}>Check-In</button>

            {/* {attendees.map((customer, i)=>(
                <AttendanceItem key={i} customer={customer}/>
            ))} */}

            <button onClick={handleReturnClick}>Back</button>
        </>
    );
};


export default AttendeesPage;