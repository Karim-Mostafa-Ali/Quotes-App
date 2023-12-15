var quoteNumber;
var newNumber;

var quotes = [
    {
        quote : "“Be yourself; everyone else is already taken.”",
        author : "― Oscar Wilde"
    },
    {
        quote : "“It is better to be hated for what you are than to be loved for what you are not.”",
        author : "― Albert Einstein"
    },
    {
        quote : "“That which does not kill us makes us stronger.”",
        author : "― Friedrich Nietzsche"
    },
    {
        quote : "“So many books, so little time.”",
        author : "― Frank Zappa"
    },
    {
        quote : "“In three words I can sum up everything I've learned about life: it goes on.”",
        author : "― Robert Frost"
    },
    {
        quote : "“A room without books is like a body without a soul.”" ,
        author : "― Bernard M. Baruch"
    },
    {
        quote : "“To live is the rarest thing in the world. Most people exist, that is all.”",
        author : "― Oscar Wilde"
    },
    {
        quote : "“You know you're in love when you can't fall asleep because reality is finally better than your dreams.”",
        author : "― Dr. Seuss"
    },
    {
        quote : "“You only live once, but if you do it right, once is enough.”",
        author : "― Mae West"
    },
    {
        quote : "“Be the change that you wish to see in the world.”",
        author : "― Mahatma Gandhi"
    }

];

function generate() {
    newNumber = Math.floor(Math.random() * 10);
    while (newNumber == quoteNumber) {
    newNumber = Math.floor(Math.random() * 10);
    }
    quoteNumber = newNumber;
    document.getElementById("quote").innerHTML = quotes[quoteNumber].quote;
    document.getElementById("q_author").innerHTML = quotes[quoteNumber].author;
}
