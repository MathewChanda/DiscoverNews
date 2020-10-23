import React from 'react'
import { Typography } from '@material-ui/core';
import './ErrorPage.css'

function ErrorPage(props){
    return(
        <div id={"divStyle"}>
            <Typography variant="h1" color={'primary'} component="h1" align="center">
                Error 
            </Typography>
            <Typography color={"primary"} variant="h3" component="h3" >
                Message : 
            </Typography>
        </div>
    )
}

export default ErrorPage