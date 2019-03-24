const fs = require('fs');

module.exports = { 
	loadUser: function(userID) {

		var data = fs.readFileSync('Users/' + userID + ".json", 'utf-8');

		let user = JSON.parse(data);
		
		return user;
	}
}