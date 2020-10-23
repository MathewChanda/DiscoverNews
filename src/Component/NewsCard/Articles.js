/*
    The following function returns a promoise that contains JSON of the http reponse https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=1caaf78acfca4d9eb8476f35785f785d
*/ 
export async function getArticles(category){
    return fetch(`https://newsapi.org/v2/top-headlines`)
        .then(response => response.json())
}

