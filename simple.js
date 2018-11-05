
var quotes = ['The Journey is never ending...-unknown', 
'Live as if you were to die tomorrow. Learn as if you were to live forever.-Mahatma Gandhi', 
'Be brave enough to live life creatively.  The creative place where no one else has ever been.-Alan Alda', 
'Choosing to be positive and having a grateful attitude is going to determine how you are going to live your life.-Joel Osteen'
'I have not failed, I have just found 10k ways that will not work.-Thomas Alba Edison']

function newQuote() {
	var randomNumber = Math.floor(Math.random() * (quotes.length));
	document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
}


module.exports = newQuote;