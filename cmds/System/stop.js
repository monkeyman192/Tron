exports.data = {
	name: 'Stop',
	command: 'stop',
	description: 'Stops Bot.',
	group: 'System',
	syntax: 'stop',
	author: 'Aris A.',
	permissions: 3
};

exports.func = async (msg,args,bot) => {
	const log = require(`${bot.config.folders.lib}/log.js`)('Stop');
	try {
		await bot.stop(msg);
	} catch (err){
		msg.reply('Something went wrong.');
		log.error(`Something went wrong in stop.js: ${err}`);
	}
};
