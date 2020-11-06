import React from 'react'
import { Typography } from '@material-ui/core';
import './ErrorPage.css'

/* 
    Page for error handling when a response is bad! 
*/ 

function ErrorPage(props){

    let code; 
    let message; 

    /* Checks if the prop.location.state is undefined or have codes 
    and message and what to set code and message for each scenario */ 
    if(props.location.state === undefined){
        code = "Code cannot be found"
        message = "Message cannot be found"
    }

    else{
        code = props.location.state.code
        message = props.location.state.message
    }

    return(
        <div id={"divStyle"}>
            <Typography variant="h1" color={'primary'} component="h1" align="center">
                Error :  {code}
            </Typography>
            <Typography color={"primary"} variant="h3" component="h3" >
                Message : {message}
            </Typography>
        </div>
    )
}

export default ErrorPage
