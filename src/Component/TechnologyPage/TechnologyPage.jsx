import React from 'react'; 
import {getArticles} from '../NewsCard/Articles.js'
import NewsCard from '../NewsCard/NewsCard.jsx';
import { Typography } from '@material-ui/core';
import './TechnologyPage.css'
import { Redirect } from 'react-router-dom';
import SearchBar from "material-ui-search-bar";

class TechnologyPage extends React.Component{
    constructor(){
        super()
        this.state = {
            artictleData : [], 
            status : "ok", 
            code : "", 
            message : "", 
            isLoading : false, 
            keyword : ""
        }

        this.getLoading = this.getLoading.bind(this)
        this.getCards = this.getCards.bind(this)
    }

   // Gets new articles from the API 
   getCards(){
        this.setState({isLoading : true})
        getArticles("technology",this.state.keyword).then(
            data => {
                let json = JSON.stringify(data)
                console.log(json)
                this.setState({status : data["status"],artictleData : data["articles"],code : data["code"],message : data["message"],isLoading : false})
             })
    }

    // Returns the loading text when we are loading news card 
    getLoading(){
        if(this.state.isLoading){
            return( 
                <Typography variant="h3" color={'primary'} component="h3" align="center">
                    Loading.......
                </Typography>)
        }
    }

    render(){
         if(this.state.status === "error"){
             return(<Redirect to={{pathname: '/error', state: { code : this.state.code, message: this.state.message }}}/>)
         }

        return(
            <div>
                <div id={"headerStyling"}>
                    <Typography id={"titleStyle"} color={"white"} variant={"h1"} align={'center'}>Technology</Typography>
                </div>
                <div id={"searchBarStyle"}>
                    <SearchBar 
                        value={this.state.keyword}
                        onChange={(value) => this.setState({keyword : value})}
                        onRequestSearch={this.getCards}
                        style={{width : 1200, borderRadius: 25}}
                    />
                </div>
                <div id={"loadingStyle"}>
                    {this.getLoading()}
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
                                    key = {key}
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


export default TechnologyPage