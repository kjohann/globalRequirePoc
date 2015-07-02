var a = require('./modulea');

module.exports = function(name) {
	console.log(a(name));
}