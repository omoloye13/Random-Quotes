let button=document.getElementById("btn");
button.addEventListener("click", poll);
function poll() {
let randomQuote=[
    {
        Quote:"Without hustle, talent will only carry you so far.",
        Author:"Gary Vaynerchuk"
    },
    {
        Quote:"Hustle in silence and let your success make the noise.",
        Author:"Unknown"
    },
    {
        Quote:"All our dreams can come true if we have the courage to pursue them.",
        Author:"Walt disney"
    },
    {
        Quote:"The secret of getting ahead is getting started.",
        Author:"Mark Twain"
    },
    {
        Quote:"Only the Paranoid survive.",
        Author:"Andy Grove"
    },
    {
        Quote:"It's hard to beat a person who never gives up.",
        Author:"Babe Ruth"
    },
    {
        Quote:"I wake up every morning and think to myself, how far can i push this company in the next 24 hours.",
        Author:"Leah Busque"
    },
    {
        Quote:"If people are doubting how far you can go, go so far that you can't hear them anymore.",
        Author:"Michele Ruiz"
    },
    {
        Quote:"We need to accept that we won't always make the right decisions, that we'll screw up royally sometimes-understanding that failure is not the opposite of success, it's part of success.",
        Author:"Arianna Huffington"
    },
    {
        Quote:"Write it. Shoot it. Publish it. Crotchet it, saute it, whatever. MAKE.",
        Author:"Joss Whedon"
    },
    {
        Quote:"Everything you can imagine is real.",
        Author:"Pablo Picasso"
    },
    {
        Quote:"When one door of happiness closes, another opens; but often we look so long at the closed door that we do not see the one which has been opened for us.",
        Author:"Helen Keller"
    },
    {
        Quote:"Do one thing everyday that scares you.",
        Author:"Eleanor Roosevelt"
    },
    {
        Quote:"it's no use going back to yesterday because i was a different person then.",
        Author:"Lewis Carroll"
    },
    {
        Quote:"Smart people learn from everything and everyone, average people from their experiences, stupid people already have all the answers.",
        Author:"Socrates"
    },
    {
        Quote:"Do what you feel in your heart to be right-for you'll be criticized anyway.",
        Author:"Eleanor Roosevelt"
    },
    {
        Quote:"Happiness is not something ready made. It comes from your own actions.",
        Author:"Dalai Lama XIV"
    },
    {
        Quote:"Whatever you are, be a good one.",
        Author:"Abraham Lincoln"
    },
    {
        Quote:"If we have the attitude that it's going to be a great day it usually is.",
        Author:"Catherine Pulsifier"
    },
    {
        Quote:"Impossible is just an opinion.",
        Author:"Paulo Coelho"
    },
    {
        Quote:"Your passion is waiting for your courage to catch up.",
        Author:"Isabelle Lafleche"
    },
    {
        Quote:"Don't be afraid to give up the good to go for the great.",
        Author:"John D. Rockefeller"
    },
    {
        Quote:"Just another Magic Monday.",
        Author:"Unknown"
    },
    {
        Quote:"One day or day one. You decide.",
        Author:"Unknown"
    },
    {
        Quote:"It was a Monday and they walked on a tightrope to the sun.",
        Author:"Marcus Zusak"
    },
    {
        Quote:"Goodbye blue Monday.",
        Author:"Kurt Vonnegut"
    },
    {
        Quote:"When life gives you Monday, dip it in glitter and sparkle all day.",
        Author:"Ella Woodword"
    },
    {
        Quote:"Hold the vision, trust the process.",
        Author:"Unknown"
    },
    {
        Quote:"Invest in your dreams. Grind now. Shine later.",
        Author:"Unknown"
    },
    {
        Quote:"Hustlers don't sleep, they nap.",
        Author:"Unknown"
    }

];
let num=Math.floor(Math.random()*randomQuote.length);
let Random=randomQuote[num];
let myDisplay=document.getElementById("display");
let Cite=document.getElementById("cite")
myDisplay.innerHTML = `"${Random.Quote}"`
Cite.innerHTML = `"${Random.Author}"`
console.log(Random); 
console.log(num);

}
