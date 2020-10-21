export async function getArticles(category){
    fetch(`https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=1caaf78acfca4d9eb8476f35785f785d`)
        .then(response => response.json())
        .then(data => console.log(data));
}

