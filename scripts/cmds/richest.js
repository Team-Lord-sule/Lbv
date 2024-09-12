const axios = require("axios");
const fs = require("fs");

module.exports = {
 config: {
 name: "richest",
 aliases: [`ls`],
 version: "1.0",
 author: "lord || Şîłent",//This Command is modified by Jayden Smith don't change my author name
 role: 0,
 shortDescription: {
 en: "Top 5 Rich Users"
 },
 longDescription: {
 en: ""
 },
 category: "group",
 guide: {
 en: "{pn}"
 }
 },
 onStart: async function ({ api, args, message, event, usersData }) {

 const allUsers = await usersData.getAll();

 const topUsers = allUsers.sort((a, b) => b.money - a.money).slice(0, 5);

 const topUsersList = topUsers.map((user, index) => `┏━━━━━━━━━━━━❀\n📍 𝗨𝗦𝗘𝗥 𝗡𝗔𝗠𝗘\n[${index + 1} .]【 ${user.name}  】\n 💸 𝗨𝗦𝗘𝗥 𝗠𝗢𝗡𝗘𝗬\n 💰𝙱𝙰𝙻: 【 ${user.money} 】 \n┗━━━━━━━━━━━━❀`);

api.setMessageReaction('👑', event.messageID, () => {}, true);

 const messageText = `👑|𝗧𝗢𝗣 5 𝗨𝗦𝗘𝗥\n\n📌𝕆𝕌ℝ 𝕋𝕆ℙ 𝕌𝕊𝔼ℝ𝕊 𝕀ℕ𝕋ℝ𝕆𝔻𝕌ℂ𝔸𝕋𝕀𝕆ℕ\n🙏ℙ𝕃𝔼𝔸𝕊𝔼 ℝ𝔼𝕊ℙ𝔼ℂ𝕋 𝕆𝕌ℝ ℝ𝕀ℂℍ𝔼𝕊𝕋 𝕌𝕊𝔼ℝ𝕊,𝔹𝔼ℂ𝔸𝕌𝕊𝕌𝔼 ℍ𝔼 𝕀𝕊 𝕐𝕆𝕌ℝ 𝔻𝔸𝔻😼\n\n ${topUsersList.join('\n')}\n\n😉 𝗬𝗢𝗨𝗥 𝗨𝗜𝗗\n💦${event.senderID}💦\n\n🖇️𝗬𝗢𝗨𝗥 𝗚𝗥𝗢𝗨𝗣 𝗨𝗜𝗗\n✦ ${event.threadID} ✦`;

 message.reply(messageText);
 }
};