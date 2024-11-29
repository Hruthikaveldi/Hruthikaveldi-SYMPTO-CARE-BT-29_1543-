document.addEventListener("DOMContentLoaded", () => {
    const articleContainer = document.getElementById("article-container");

    async function fetchArticles() {
        try {
            const response = await fetch("https://newsapi.org/v2/everything?q=health&apiKey=YOUR_API_KEY");
            const data = await response.json();
            displayArticles(data.articles);
        } catch (error) {
            console.error("Error fetching articles:", error);
            articleContainer.innerHTML = "<p>Unable to load articles at this time.</p>";
        }
    }

    function displayArticles(articles) {
        articleContainer.innerHTML = articles.map(article => `
            <article class="article">
                <img src="${article.urlToImage || 'default-image.jpg'}" alt="${article.title}" class="article-image">
                <h2>${article.title}</h2>
                <p>${article.description}</p>
                <a href="${article.url}" target="_blank">Read more</a>
            </article>
        `).join("");
    }

    fetchArticles();
});
