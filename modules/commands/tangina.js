const fs = require("fs");
module.exports.config = {
	name: "tangina",
    version: "1.0.2",
	hasPermssion: 0,
	credits: "Choru TikTokers", 
	description: "no prefix",
	commandCategory: "No command marks needed",
	usages: "...",
    cooldowns: 1, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("pakyou")==0 || (event.body.indexOf("tangina")==0 || (event.body.indexOf("ina")==0 || (event.body.indexOf("HAHA")==0)))) {
		var msg = {
				body: "bobo kaba ahh"
    }
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}
