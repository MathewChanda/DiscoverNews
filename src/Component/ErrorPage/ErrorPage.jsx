import React from 'react'
import { Typography } from '@material-ui/core';
import './ErrorPage.css'

/* 
    Page for error handling when a response is bad! 
*/ 

function ErrorPage(props){
    return(
        <div id={"divStyle"}>
            <Typography variant="h1" color={'primary'} component="h1" align="center">
                Error :  {props.location.state.code}
            </Typography>
            <Typography color={"primary"} variant="h3" component="h3" >
                Message : {props.location.state.message}
            </Typography>
        </div>
    )
}

export default ErrorPage
