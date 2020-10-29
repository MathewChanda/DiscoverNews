/*
    The following function returns a promoise that contains JSON of the http reponse https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=1caaf78acfca4d9eb8476f35785f785d
*/ 
export async function getArticles(category,keyword){
    return fetch(`https://newsapi.org/v2/top-headlines?country=us&q=${keyword}&category=${category}&pageSize=100&apiKey=78b9d599c4f94f8fa3afb1a5458928d6`)
        .then(response => response.json())
}

