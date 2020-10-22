import { CodeSharp } from '@material-ui/icons';
import React from 'react'; 
import {getArticles} from '../NewsCard/Articles.js'
import NewsCard from '../NewsCard/NewsCard.jsx';
import './SetCards.css'

class SportPage extends React.Component{
    constructor(props){
        super()
        this.state = {
            artictleData : [], 
            status : "", 
            category : props.category
        }
    }

    componentWillReceiveProps(props){
        console.log(props)
        this.setState({category : props.category})
        getArticles(this.state.category).then(
            data => {
                let json = JSON.stringify(data)
                this.setState({status : data["status"]})
                this.setState({artictleData : data["articles"]})
             })
    }

    async componentWillMount(){
        getArticles(this.state.category).then(
            data => {
                let json = JSON.stringify(data)
                this.setState({status : data["status"]})
                this.setState({artictleData : data["articles"]})
             })
    }

    render(){
        return(
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
        )
    }
}


export default SportPage