const fs = require('fs');
const moment = require('moment');

const logging = (action, productName) => {
	fs.readFile('dist/server/db/log.json', (err, data) => {
		if (err) {
			console.log(err);
			return;
		}

		let logJson = JSON.parse(data);
		logJson.push({
			time: `${moment().format('L')} ${moment().format('LTS')}`,
			action,
			productName: productName
		});

		fs.writeFile('dist/server/db/log.json', JSON.stringify(logJson, null, 4), (err) => {
			if (err) {
				console.log(err);
				return;
			}
		});
	})
};

module.exports = logging;