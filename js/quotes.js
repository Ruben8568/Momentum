// Main purpose: Show a random famous quote on the screen.

// An array of objects that contains famous quotes and their authors
const quotes =[
    {
    quote: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
    author: "Albert Einstein"
},
{
    quote: "Here's to the crazy ones. The misfits. The rebels. The troublemakers. The round pegs in the square holes. The ones who see things differently. They're not fond of rules. And they have no respect for the status quo. You can quote them, disagree with them, glorify or vilify them. About the only thing you can't do is ignore them. Because they change things. They push the human race forward. And while some may see them as the crazy ones, we see genius. Because the people who are crazy enough to think they can change the world, are the ones who do.",
    author: "Steve Jobs"
},
{
    quote: "Good friends, good books, and a sleepy conscience: this is the ideal life.",
    author: "Mark Twain"
},
{
    quote: "I have not failed. I've just found 10,000 ways that won't work.",
    author: "Thomas A. Edison"
},
{
    quote: "If you judge people, you have no time to love them.",
    author: "Mother Teresa"
},
{
    quote: "If you only read the books that everyone else is reading, you can only think what everyone else is thinking.",
    author: "Haruki Murakami, Norwegian Wood"
},
{
    quote: "Everything you can imagine is real.",
    author: "Pablo Picasso"
},
{
    quote: "Folks are usually about as happy as they make their minds up to be.",
    author: "Abraham Lincoln"
},
{
    quote: "There is no friend as loyal as a book.",
    author: "Ernest Hemingway"
},
{
    quote: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
    author: "Winston S. Churchill"
},
];

// Assign html elements to variables
const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

// Get a random quote from the quotes array
const todayQuote = quotes[Math.floor(Math.random()*quotes.length)];

quote.innerText = todayQuote.quote;
author.innerText = todayQuote.author;