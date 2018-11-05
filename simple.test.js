const simple = require('./simple')

simple.newQuote = jest.fn(() => 'test')
test(`The text appears when button clicked.`, () => {
	const result = simple.newQuote()
	console.log(result)
	expect(result).toBe('test')
	expect(simple.newQuote).toHaveBeenCalled()
	console.log()
	expect(simple.newQuote).toHaveBeenCalledWith()
	console.log()
	});