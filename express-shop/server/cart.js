const e = require("express");
const logging = require('./logging')

const add = (cart, req) => {
	cart.contents.push(req.body);
	logging('ADD', req.body.product_name);
	return JSON.stringify(cart, null, 4);
};

const change = (cart, req) => {
	let find = cart.contents.find(el => el.id_product === +req.params.id);
	find.quantity += req.body.quantity;
	if (!find.quantity) {
		let ind = cart.contents.indexOf(find);
		cart.contents.splice(ind, 1);

	}
	if (req.body.quantity < 0) {
		logging('DELETE', find.product_name);
	} else {
		logging('ADD', find.product_name);
	}
	return JSON.stringify(cart, null, 4);
}

module.exports = {
	add,
	change,
}