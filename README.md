# DiscoverNews
<p align="center">
    <img src="https://cdn.lensa.com/img/company-logos/bdc1584d250ab1a65f2b4b4a78f2c7ac" width="150">
  </a>
  <h4 align="center">Capital One Software Engineering Summit Submission</h4>
  
## What is Capital One Software Engineering Summit? 
Capital One Software Engineering Summit is a week-long undergraduate program for freshman and sophomores that are interested to learn more about Capital One's startup-minded and innovative culture while expanding and exploring technology and problem-solving skills valued by today’s top employers. To learn more about Capital One Software Engineering Summit, [click here](https://campus.capitalone.com/summits/ "Capital One SES") ! 

## Why I wish to attend Capital One Software Engineering Summit?
I would like to attend Capital One Software Engineering Summit to learn more about how Capital One's culture aligns with my career and personal goals. In addition, I would also like to network with other peers who have a similar vision and goals to me while particpating and improving our technical skillsets at Capital One Software Engineering Summit's Hackathon. Finally, Capital One Software Engineering Summit will allow me to narrow down my interests to one particular field. 

## What is DiscoverNews?
DiscoverNews is an React app created for the Capital One Software Engineering Summit 2021 that finds articles from three categories (Entertainment, Sports, and     Technology). The web application uses the [News API](https://newsapi.org/ "News API Documentation") to fetch information about the articles.  All of the information about the article is presented to a user in a material-ui card, which provides brief, important information about the article. In addition, each card is able to share the link of the article through Facebook, Twitter, or Email to other users. 

## How can I see DiscoverNews on the browser or local computer? 
You can view DiscoverNews in the browser at https://discover-news-mathew.herokuapp.com/ or locally at port 3000!

### Steps to locally viewing DiscoverNews 
1. Install the proper tools to run React Applications 
* [NodeJS](https://nodejs.org/en/ "NodeJS")
* [Create a New React App](https://github.com/facebook/create-react-app "Create a New React App")
* [Additional information and troubleshoot about React and its necessary tools](https://reactjs.org/tutorial/tutorial.html)
2. Install the dependencies from local node_modules folder and must be in the same directory or level of the node_modules folder
  ```
 npm install
 ```
3. Run the following command to run DiscoverNews locally
  ```
 npm run dev
 ```
## Features of DiscoverNews

<p align="center">
 <img src="http://g.recordit.co/sTa6RP8lhW.gif" width="800">
 <br>
 <em>Searching for Articles</em>
</p>

<p align="center">
 <img src="http://g.recordit.co/Co0hWXdpWe.gif" width="800">
 <br>
 <em>Sharing an Article through Facebook, Twitter, or Email</em>
</p>

## What did I used to build DiscoverNews?
#### [React](https://reactjs.org/ "React") 
* I utilized many prevalent concepts found in professional React development, including a modular component design, ReactDOM, ReactRouter, HTTP requests, hooks, and routes.
#### [Material-UI](https://material-ui.com/ "Material-UI") and [Material-UI UI/UX Guide](https://material.io/design "Material-UI Design UI/UX Guide")
* I incorporated many Material UI components in different aspects of DiscoverNews such as Tabs, Card, and Icons to present a user-friendly format that provides concise information about the news article. 
* In addition, I have followed and implemented the Material-UI designs choices from their documentation to build an amazing user experience!
#### [News API](https://newsapi.org/ "News API Documentation") 
*  I used News API, a simple and easy-to-use API that returns JSON metadata for headlines and articles live all over the web right now.
*  DiscoverNews sends HTTP Requests and recieves HTTP Response from the News API.
#### [Heroku](https://www.heroku.com/, "Heroku")
* I deployed DiscoverNews by using a Heroku web dyno.
#### [Moment.js](https://momentjs.com/ "Moment.js") 
* I used Moment.js to convert or parse the date of the article to be more readable for the user. 
#### [Material UI SearchBar](https://github.com/TeamWertarbyte/material-ui-search-bar, "Material-UI Searchbar") 
* Finally, I used this Material-UI Searchbar from a GitHub repo to create the searchbar for our users to search for articles on DiscoverNews 

## Missing Content in the News card 
In the response from the News API, some information may not appear for the card such as source of the article and summary. To handle the event of missing content from the News API, the user will see the following messages or events below. 
* Title of the Article - "Title is unavailable"
* Picture of the article - [Default Picture](https://github.com/MathewChanda/DiscoverNews/blob/master/src/Component/NewsCard/MissingImage.png, "Default Picture") 
* Source of the article - "Source is unavailable"
* Description of the article - "Description is unavailable" 
* Content of the article - "Content is unavailable"
* Date of the article - "Date is unavailable"
* Missing URL - Redirect the user to https://discover-news-mathew.herokuapp.com/missingurl
* Sharing a missing URL - Redirect the user to https://discover-news-mathew.herokuapp.com/missingurl

## What the hardest problem did I faced and how I solved it? 
One of the most diffcult technical problems in this project was placing the news card in a rows of 3. In order to achieve an row of 3 news card, I must set the flex basis to 30% of each news card. By setting the flex basis to 30% for each card, it allows each card to have an initial flex of 30% or having 30% of the width of the browser. 

## What did I learn from building DiscoverNews?
Although I had a bit of experience using React, I was not familar with any concepts relating to UI/UX design. Through further research on Google, I stumbled upon Material-UI design docs and Adobe XD. Quickly, I designed the front-end of DiscoverNews in Adobe XD and learned how to place React components in the correct place to build a better user-experience from the design documentation! In addition, I also learned how to deploy an application on Heroku. Finally, I learned how to budget time and energy for DiscoverNews while working a full-time Software Engineering job by planning deadlines to complete key features of DiscoverNews. 

## Future Features of DiscoverNews 
In the next iteration of DiscoverNews, I would like to implement many exciting features to improve the experience of finding new articles around the world : 
* Using Firebase for user authentication with Google sign-in 
* Bookmarking favorite articles 
* User history of viewing different articles 
* Build a cross-platform mobile application with React Native or Flutter 
* Voice to Text in the search bar 
</p>
