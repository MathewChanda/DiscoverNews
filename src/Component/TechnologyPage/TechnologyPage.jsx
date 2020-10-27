import React from 'react'; 
import {getArticles} from '../NewsCard/Articles.js'
import NewsCard from '../NewsCard/NewsCard.jsx';
import { Typography } from '@material-ui/core';
import './TechnologyPage.css'
import { Redirect } from 'react-router-dom';
import SearchBar from "material-ui-search-bar";
import ReactDOM from 'react-dom';
import SearchIcon from '@material-ui/icons/Search';


class TechnologyPage extends React.Component{
    constructor(){
        super()
        this.state = {
            artictleData : [], 
            status : "ok", 
            code : "", 
            message : "", 
            isLoading : false, 
            keyword : "",
        }

        this.getLoading = this.getLoading.bind(this)
        this.getCards = this.getCards.bind(this)
    }

   // Gets new articles from the API 
   async getCards(){
        this.setState({isLoading : true,artictleData : []})
        getArticles("technology",this.state.keyword).then(
            data => {
                    this.setState({status : data["status"],artictleData : data["articles"],code : data["code"],message : data["message"],isLoading : false})
                    if(Object.keys(this.state.artictleData).length === 0){
                        let noResult = <Typography variant="h3" color={'primary'} component="h3" align="center"> No Result </Typography>
                        ReactDOM.render(noResult, document.getElementById('contentStyle'));
                    }
            
                    else{
                        let result = this.state.artictleData.map(
                            (article,key) => {  
                                let source = article["source"]["name"]
                                let title = article["title"]
                                let description = article["description"]
                                let url = article["url"]
                                let urlToImage = article["urlToImage"]
                                let date = article["publishedAt"]
                                let content = article["content"]
                                return(<NewsCard 
                                        key = {key}
                                        source={source} 
                                        title={title} 
                                        description={description} 
                                        url={url} 
                                        urlToImage={urlToImage} 
                                        date={date} 
                                        content={content}
                                    />)
                            })
                        ReactDOM.render(result, document.getElementById('contentStyle'));
                    }
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
                        closeIcon={<SearchIcon/>}
                        onChange={(value) => this.setState({keyword : value})}
                        onCancelSearch={this.getCards}
                        onRequestSearch={this.getCards}
                        style={{width : 1200, borderRadius: 25}}
                        required={true}
                        openIcon={<SearchIcon/>}
                        
                    />
                </div>
                <div id={"loadingStyle"}>
                    {this.getLoading()}
                </div>
                <div id={"contentStyle"}> 
                             {}
                </div>
            </div>
        )
    }
}


export default TechnologyPage