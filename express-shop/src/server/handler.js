const cart = require('./cart');
const fs = require('fs');
const logging = require('./logging');

const handler = (req, res, action, file) => {
	fs.readFile(file, (err, data) => {
		if (err) {
			console.log(err);
			res.send({ result: 0, text: err });
			return;
		}

		let { newCart, name } = cart[action](JSON.parse(data), req);
		fs.writeFile(file, newCart, (err) => {
			if (err) {
				console.log(err);
				res.send({ result: 0, text: err });
				return;
			}
			logging(action, name);
			res.send({ result: 1 });
		});
	})
};

module.exports = handler;