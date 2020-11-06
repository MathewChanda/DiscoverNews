import React from 'react'
import { Typography } from '@material-ui/core';
import './NoPageFound.css'

/* 
    Page for all routes that are not specified and declared in the App.js. 
    The page is used for incorrect routes!
*/ 

function NoPageFound(props){
    return(
        <div id={"divStyle"}>
            <Typography variant="h1" color={'primary'} component="h1" align="center">
                No Page Found!
            </Typography>
        </div>
    )
}

export default NoPageFound
