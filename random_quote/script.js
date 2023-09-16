const text = document.getElementById("quote");
const author = document.getElementById("author");
const tweetButton = document.getElementById("tweet");
const getNewQuote = async() => {
    //api for quote
    var url = "https://type.fit/api/quotes";
    //fetch data from api
    const response = await fetch(url);
    console.log(typeof response);
    //convert response to json and stored it in quotes array
    const allQuotes = await response.json();
    //generate a random number between 0 and the lenght of the quote array 
    const indx = Math.floor(Math.random() * allQuotes.length);

//store the quote present at the randomly generated index
const quote = allQuotes[indx].text;
//store the author of the respective quote
const auth = allQuotes[indx].author;
if (auth == null) {
    author = "Anonymous"
}
//function to dynamically display the quote and the author
text.innerHTML = quote;
author.innerHTML ="~ " + auth ;
tweetButton.href = "https://twitter.com/intent/tweet?text=" + quote + "~ " + auth;
};
getNewQuote();
