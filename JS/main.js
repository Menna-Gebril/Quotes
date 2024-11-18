var Quotes = [
    {
        quote:"It's not what happens to you, but how you react to it that matters.",
        author:"--Epictetus",
    },

    {
        quote:"The best revenge is massive success.",
        author:"--Frank Sinatra",
    },

    {
        quote:"Resentment is like drinking poison and waiting for your enemies to die.",
        author:"--Nelson Mandela",
    },

    {
        quote:"You miss 100% of the shots you don't take.",
        author:"--Wayne Gretzy",
    },
];


var index;

var lastIndex;

var displayQuote =[];


function getQuote(){
    if(displayQuote.length == Quotes.length){
        displayQuote=[];
    }


    do{
        index=Math.floor(Math.random() * Quotes.length);
    }
    while(index == lastIndex || displayQuote.includes(index) );
    lastIndex = index;

    displayQuote.push(index);

    console.log(index);
    document.getElementById('quote').innerHTML = Quotes[index].quote;
    document.getElementById('author').innerHTML = Quotes[index].author;
}

