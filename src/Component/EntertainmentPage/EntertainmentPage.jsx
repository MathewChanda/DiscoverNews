import React from 'react'; 
import {getArticles} from '../NewsCard/Articles.js'
import NewsCard from '../NewsCard/NewsCard.jsx';
import { Typography } from '@material-ui/core';
import { Redirect } from 'react-router-dom';
import './EntertainmentPage.css'

class EntertainmentPage extends React.Component{
    constructor(){
        super()
        this.state = {
            artictleData : [], 
            status : "", 
            code : "", 
            message : "ok"
        }
    }

     // Gets new articles from the API 
    async componentWillMount(){
        console.log("Executed")
        getArticles("entertainment").then(
            data => {
                let json = JSON.stringify(data)
                this.setState({status : data["status"],artictleData : data["articles"],code : data["code"],message : data["message"]})
             })
            
    }

    render(){
        // if(this.state.status !== "ok"){
        //     return(<Redirect to={"/error"}/>)
        // }

        return(
            <div>
                <div id={"headerStyling"}>
                    <Typography id={"headerStyle"} color={"white"} variant={"h1"} align={'center'}>Entertainment</Typography>
                </div>
                <div id={"contentStyle"}> 
                    {this.state.artictleData.map(
                        (article,key) => {  
                            let source = article["source"]["name"]
                            let title = article["title"]
                            let description = article["description"]
                            let url = article["url"]
                            let urlToImage = article["urlToImage"]
                            let date = article["publishedAt"]
                            let content = article["content"]
                            return(
                            <NewsCard 
                                    source={source} 
                                    title={title} 
                                    description={description} 
                                    url={url} 
                                    urlToImage={urlToImage} 
                                    date={date} 
                                    content={content}
                                />)
                        }
                    )}
                </div>
            </div>
        )
    }
}


export default EntertainmentPage