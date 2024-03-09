document.addEventListener("DOMContentLoaded", function() {
    const quoteElement = document.getElementById("quote");
    const newQuoteButton = document.getElementById("new-quote-btn");

    function fetchQuote() {
        fetch("https://quotesondesign.com/wp-json/wp/v2/posts/?orderby=rand")
            .then(response => response.json())
            .then(data => {
                const randomIndex = Math.floor(Math.random() * data.length);
                const quote = data[randomIndex];
                quoteElement.innerHTML = `<blockquote>"${quote.content.rendered}"</blockquote><cite>- ${quote.title.rendered}</cite>`;
            })
            .catch(error => {
                console.error("Error fetching quote:", error);
                quoteElement.innerHTML = "Failed to fetch quote. Please try again later.";
            });
    }

    fetchQuote();

    newQuoteButton.addEventListener("click", fetchQuote);
});
