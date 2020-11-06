import React from 'react'; 
import SearchBar from "material-ui-search-bar";
import ReactDOM from 'react-dom';
import SearchIcon from '@material-ui/icons/Search';
import NewsCard from '../NewsCard/NewsCard.jsx';
import {Typography} from '@material-ui/core';
import {getArticles} from '../NewsCard/Articles.js'
import {Redirect} from 'react-router-dom';
import './ContentPage.css'

/*
    The following component is used by each categories. 
    It presents the main content of the web application with 
    a search bar and presenting news card when searching for 
    a particular keyword 
*/ 

class ContentPage extends React.Component{
    constructor(props){
        super()
        this.state = {
            artictleData : [], 
            status : "ok", 
            code : "", 
            message : "", 
            isLoading : false, 
            keyword : "",
            category: props.category, 
        }

        this.getLoading = this.getLoading.bind(this)
        this.getCards = this.getCards.bind(this)
    }

    // Update the states when transitioning between pages and removing the newscard if they are present
    componentWillReceiveProps(props){
        this.setState({
            articleData : [], 
            status : "ok", 
            code : "", 
            message : "", 
            isLoading : false, 
            keyword : "",
            category: props.category, 
        })
        ReactDOM.render(null, document.getElementById('contentStyle'));
    }

   // Gets new articles from the API and mount the new newscard into the contentStyle div 
   async getCards(){
       
        // When the user tries to enter an empty search into the searchbar 
        if(this.state.keyword === ""){
            alert("Please type a keyword in the searchbar")
        }
       
        // Parse the article data if available. Else, we return a text saying "No Result" 
        else{
            this.setState({isLoading : true,articleData : []})
            getArticles(this.state.category,this.state.keyword).then(
                data => {
                        this.setState({status : data["status"],articleData : data["articles"],code : data["code"],message : data["message"],isLoading : false})
                        if(Object.keys(this.state.articleData).length === 0){
                            let noResult = <Typography variant="h3" color={'primary'} component="h3" align="center"> No Result </Typography>
                            ReactDOM.render(noResult, document.getElementById('contentStyle'));
                        }
                
                        else{
                            let result = this.state.articleData.map(
                                (article,key) => {  
                                    let source = article["source"]["name"]
                                    let title = article["title"]
                                    let description = article["description"]
                                    let url = article["url"]
                                    let urlToImage = article["urlToImage"]
                                    let date = article["publishedAt"]
                                    let content = article["content"]
                                    return(<NewsCard 
                                            key={key}
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
        // Redirect to error page when errors occurs 
         if(this.state.status === "error"){
             return(<Redirect to={{pathname: '/error', state: { code : this.state.code, message: this.state.message }}}/>)
         }

        return(
            <div>
                {/* Title of the page */}
                <div id={"categoryStyle"}>
                    <Typography id={"titleStyle"} color={"white"} variant={"h1"} align={'center'}>{this.state.category}</Typography>
                </div>

                {/* Searchbar of the page*/ }
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

                  {/* Loading text of the page*/ }
                <div id={"loadingStyle"}>
                    {this.getLoading()}
                </div>

                  {/* NewsCard div */ }
                  <div id={"contentContainer"}>
                    <div id={"contentStyle"}> 
                    </div>
                  </div>
            </div>
        )
    }
}

export default ContentPage
