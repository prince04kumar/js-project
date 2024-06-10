let apiKey = '12cd6c6fd5684159affde2e10c0f38fc';

const blockContent = document.querySelector(".blockcontainer");

async function fetchRandomNews() {
    try {
        const apiUrl = `https://newsapi.org/v2/top-headlines?country=us&pageSize=10&apiKey=${apiKey}`
        const response = await fetch(apiUrl);
        const data = await response.json();
        console.log(data);
        return data.articles; // Return the articles array
    } catch (err) {
        console.log("Error in fetching News ", err);
        return []; // Return an empty array on error
    }
}

function displayBlocks(newsdata) {
   

    blockContent.innerHTML = "";
    newsdata.forEach((news) => {
        const div = document.createElement("div");
        div.classList.add("blockcard");
        const img = document.createElement("img");
        img.src = news.urlToImage;
        img.alt = news.title;
        const title = document.createElement("h2");
        title.textContent = news.title;
        const description = document.createElement("p");
        description.textContent = news.description;

        div.appendChild(img);
        div.appendChild(title);
        div.appendChild(description);
        blockContent.appendChild(div);
    });
}

(async () => {
    try {
        const newsData = await fetchRandomNews();
        displayBlocks(newsData);
    } catch (err) {
        console.log("Error in fetching News ", err);
    }
})();
// some thing will not run may be because of bad API keys
