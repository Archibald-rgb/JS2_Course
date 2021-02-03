const fs = require('fs');
const moment = require('moment');

const logging = (action, productName) => {
	fs.readFile('server/db/log.json', (err, data) => {
		if (err) {
			console.log(err);
			return;
		}
		// moment.locale();
		let time = `${moment().format('L')} ${moment().format('LTS')}`
		let logJson = JSON.parse(data);
		let logItem = {
			action,
			productName,
			time
		}
		logJson.push(logItem);

		fs.writeFile('server/db/log.json', JSON.stringify(logJson, null, 4), (err) => {
			if (err) {
				console.log(err);
				return;
			}
		});
	})
};

module.exports = logging;