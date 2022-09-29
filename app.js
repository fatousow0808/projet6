const quotes = [
    {
        quote: `Si j'ai pu voir plus loin,c'est que je me tenais sur les épaules de géants`,
        author:'Isaac Newton'
    },

    {
        quote: `Un probleme sans solution est un probleme mal posé`,
        author:'Albert Einstein'
        
    },

    {
        quote: `Quand on veut on peut`,
        author:'Jacques Chirac'
    },

    {
        quote: `les promesses n'engagent que ceux qui les recoivent`,
        author:'André Levy'
       
    },

    {
        quote: `le bonheur c'est de continuer à désirer ce qu'on possède`,
        author:'Babe Ruth'

    },
    {
        quote: `l'imagination est plus importante que le savoir`,
        author:'Albert Einstein'


    },
]

const quoteBtn = document.getElementById('quote-btn');
const quote = document.querySelector('.quote');
const author = document.querySelector('.author');

quoteBtn.addEventListener('click', () => {
    let random = Math.floor(Math.random() * quotes.length);

    quote.innerHTML = quotes[random].quote;
    author.innerHTML = quotes[random].author;
})