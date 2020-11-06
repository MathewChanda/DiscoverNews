import React from 'react'
import { Typography } from '@material-ui/core';
import './MissingURLPage.css'

/* 
    A page where the URL link does not exists for a particular news card
*/ 

function MissingURLPage(props){
    return(
        <div id={"divStyle"}>
            <Typography variant="h1" color={'primary'} component="h1" align="center">
                URL for the article is unavailable! 
            </Typography>
            <Typography color={"primary"} variant="h3" component="h3" align="center">
                Please select another article by choosing a category in the navigation bar! 
            </Typography>
        </div>
    )
}

export default MissingURLPage
