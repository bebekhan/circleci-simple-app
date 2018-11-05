var quotes = ['A', 'B', 'C', 'D']

function newQuote() {
	var randomNumber = Math.floor(Math.random() * (quotes.length));
	document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
}


module.exports = newQuote;