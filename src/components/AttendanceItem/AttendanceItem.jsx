import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function AttendanceItem (props) {

    //------------<  Setup  >-------------
    const dispatch = useDispatch();

    const handleMessage = () => {
        console.log('this will open the option to send a specific user a message. Think "Hey, still able to make it today?"');
    }

    const checkUserIn = () => {
        console.log('this will update a piece of local state');
        dispatch({
            type: 'CHECK_USER_IN'
        })
    }

    return (
        <>
        <div>
         <input type="checkbox" id="customer" value="user?" onClick={checkUserIn}></input>
         <img src={props.customer.profile_image} alt="a pretty picture" />
         <label htmlFor="customer">{props.customer.username}</label>
         <button onClick={handleMessage}>Message user</button>
         </div>
        </>
    )
}

export default AttendanceItem