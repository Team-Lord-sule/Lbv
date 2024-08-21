const { getPrefix } = global.utils;
const { commands, aliases } = global.GoatBot;
const doNotDelete = "𝗟𝗢𝗥𝗗 𝗝𝗔𝗬𝗗𝗘𝗡 𝗦𝗠𝗜𝗧𝗛  \n____________________\nhttps://m.me/lordjaydenSmith.1\n____________________\n";
/** 
* @author NTKhang
* @author: do not delete it
* @message if you delete or edit it you will get a global ban
*/

const startTime = new Date(); // Store the bot's start time

module.exports = {
	config: {
		name: "uptime",
		aliases: ["up"],
		version: "1.0",
		author: "𝗟𝗢𝗥𝗗 𝗝𝗔𝗬𝗗𝗘𝗡 𝗦𝗠𝗜𝗧𝗛 𝗘𝗹𝗶𝘁𝗲𝘀",
		countDown: 5,
		role: 0,
		shortDescription: {
			vi: "Kiểm tra thời gian hoạt động của bot",
			en: "Check the bot's uptime"
		},
		longDescription: {
			vi: "Kiểm tra thời gian hoạt động của bot, bao gồm thời gian hoạt động, thông tin hệ thống và thông tin bot",
			en: "Check the bot's uptime, including uptime, system information, and bot details"
		},
		category: "info",
		guide: {
			vi: "{pn}",
			en: "{pn}"
		}
	},

	onStart: async function ({ api, event, args, usersData }) {
		const now = new Date();
		const uptime = now - startTime;

		// Calculate uptime in days, hours, minutes, and seconds
		const days = Math.floor(uptime / (1000 * 60 * 60 * 24));
		const hours = Math.floor((uptime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
		const minutes = Math.floor((uptime % (1000 * 60 * 60)) / (1000 * 60));
		const seconds = Math.floor((uptime % (1000 * 60)) / 1000);

		// Get system information (you'll need to install the 'os' and 'process' modules)
		const os = require('os');
		const cpuUsage = os.cpus()[0].times.user / os.cpus()[0].times.idle; // Example: CPU usage
		const memoryUsage = process.memoryUsage().rss / 1024 / 1024; // Example: Memory usage (in MB)

		// Replace with your actual bot information
		const botName = "My Bot";
		const botPrefix = "!";
		const botOwner = "Your Discord ID";

		// Format the uptime string
		const uptimeString = `${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`;

		// Send the uptime information in a formatted message
		api.sendMessage(`
		**${botName} Uptime**
		*Uptime:* ${uptimeString}
		*System:* CPU: ${cpuUsage.toFixed(2)}%, Memory: ${memoryUsage.toFixed(2)} MB
		*Bot Owner:* <@${botOwner}>
		*Bot Prefix:* ${botPrefix}
		`, event.threadID, event.messageID);
	}
};