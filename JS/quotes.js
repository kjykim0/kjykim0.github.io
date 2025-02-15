const quotes = [
    {
        quote: "A friend is someone who knows all about you and still loves you.",
        author: "Elbert Hubbard",
    },
    {
        quote: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
        author: "Albert Einstein",
    },
    {
        quote: "Be the change that you wish to see in the world.",
        author: "Mahatma Gandhi",
    },
    {
        quote: "It is better to be hated for what you are than to be loved for what you are not.",
        author: "Andre Gide",
    },
    {
        quote: "If you tell the truth, you don't have to remember anything.",
        author: "Mark Twain",
    },
    {
        quote: "We are all in the gutter, but some of us are looking at the stars.",
        author: "Oscar Wilde",
    },
    {
        quote: "There are only two ways to live your life. One is as though nothing is a miracle. The other is as though everything is a miracle.",
        author: "Albert Einstein",
    },
    {
        quote: "I have not failed. I've just found 10,000 ways that won't work.",
        author: "Thomas A. Edison",
    },
    {
        quote: "Never put off till tomorrow what may be done day after tomorrow just as well.",
        author: "Mark Twain",
    },
    {
        quote: "It is never too late to be what you might have been.",
        author: "George Eliot",
    },
];

const quote = document.querySelector("#quotes span:first-child");
const author = document.querySelector("#quotes span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = `"${todaysQuote.quote}"`;
author.innerText = ` - ${todaysQuote.author} - `;