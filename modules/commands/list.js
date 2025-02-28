module.exports.config = {
	name: 'list',
	version: '1.0.0',
	credits: 'NTKhang', //pls don't edit credis
	hasPermssion: 2,
	description: 'List of threads bots have joined',
	commandCategory: 'Admin',
	usages: 'listt',
	cooldowns: 15
};

module.exports.handleReply = async function({ api, event, client, args, Threads, handleReply }) {
  
if(handleReply.author != event.senderID) return;

var arg = event.body.split(" ");
var idgr = handleReply.groupid[arg[1]-1];


       switch(handleReply.type) {
    
    case "reply": {
      if(arg[0] == "ban" || arg[0] == "Ban") {
await Threads.setData(idgr, { banned: 1 });
			let dataThread = client.threadBanned.get(parseInt(idgr)) || {};
			dataThread["banned"] = 1;
			client.threadBanned.set(parseInt(idgr), dataThread);
		api.sendMessage(`[${idgr}] :\n${(await Threads.getData(idgr)).name}\nSuccessfully granted!`, event.threadID, event.messageID);
 }
				
		 if(arg[0] == "out" || arg[0] == "Out") {
api.removeUserFromGroup(`${api.getCurrentUserID()}`, idgr);
  api.sendMessage("Out of thread with id: " + idgr+"\n"+(await Threads.getData(idgr)).name, event.threadID, event.messageID);
			}
       break;}
    
    }
    
};


module.exports.run = async function({ api, event, client }) {
	var inbox = await api.getThreadList(100, null, ['INBOX']);
	let list = [...inbox].filter(group => group.isSubscribed && group.isGroup);

	var listthread = [];
	
	//////////
  

 for (var groupInfo of list) {
		let data = (await api.getThreadInfo(groupInfo.threadID));

		listthread.push({
			id: groupInfo.threadID,
			name: groupInfo.name,
			sotv: data.userInfo.length,
		});
		
	} //for

	var listbox = listthread.sort((a, b) => {
		if (a.sotv > b.sotv) return -1;
		if (a.sotv < b.sotv) return 1;
	});
	
	let msg = '', i = 1;
	var groupid = [];
	for (var group of listbox) {
		msg += `${i++}. ${group.name}\nTID: ${group.id}\nMember: ${group.sotv}\n\n`;
	groupid.push(group.id);
	}

	api.sendMessage(msg+'Reply "out" or "ban" + the number to exit or ban that thread!!', event.threadID, (e, data) => 
	   client.handleReply.push({
	    name: this.config.name,
	    author: event.senderID,
	    messageID: data.messageID,
	    groupid,
	    type: 'reply'
	  })
	  );
};
