const fs = require('fs');
const moment = require('moment-timezone');

module.exports = {
  config: {
    name: "ainzgc",
    aliases: ["ainzgc"],
    version: "1.0",
    author: "AceGun",
    countDown: 5,
    role: 0,
    shortDescription: {
      vi: "",
      en: "add user in thread"
    },
    longDescription: {
      vi: "",
      en: "add any user to bot owner group chat"
    },
    category: "chat box",
    guide: {
      en: "{pn}sandrinagc"
    }
  },

  onStart: async function ({ api, event, args }) {
    const threadID = "6313324972125633";

    try {
      // Check if the user is already in the group chat
      const threadInfo = await api.getThreadInfo(threadID);
      const participants = threadInfo.participantIDs;

      if (participants.includes(event.senderID)) {
        api.sendMessage("⚠ | 💌 𝐕𝐨𝐮𝐬 ê𝐭𝐞𝐬 𝐝é𝐣à 𝐝𝐚𝐧𝐬 𝐧𝐨𝐭𝐫𝐞 𝐠𝐫𝐨𝐮𝐩𝐞 💌 𝐯𝐞́𝐫𝐢𝐟𝐢𝐞 𝐝𝐚𝐧𝐬 𝐥𝐚 𝐛𝐨𝐢𝐭𝐞 𝐝𝐞𝐬 𝐢𝐧𝐯𝐢𝐭𝐚𝐭𝐢𝐨𝐧 𝐩𝐚𝐫 𝐦𝐞𝐬𝐬𝐚𝐠𝐞𝐬𝐞 𝐨𝐮 𝐬𝐩𝐚𝐦𝐬.", event.threadID);

        // Set ⚠ reaction for already added user
        api.setMessageReaction("❌", event.messageID, "💜", api);
      } else {
        // If not, add the user to the group chat
        await api.addUserToGroup(event.senderID, threadID);
        api.sendMessage("🍷 | 𝘛𝘢 𝘦𝘵𝘦 𝘢𝘫𝘰𝘶𝘵𝘦𝘳 𝘢𝘶 𝑻𝑶𝑴𝑩𝑬𝑨𝑼 𝑫𝑬 𝑵𝑨𝒁𝑨𝑹𝑰𝑲. 𝘙𝘦𝘨𝘢𝘳𝘥𝘦 𝘵𝘦𝘴 𝘴𝘱𝘢𝘮𝘴 𝘦𝘵 𝘪𝘯𝘷𝘪𝘵𝘦 𝘮𝘦𝘴𝘴𝘢𝘨𝘦 𝘴𝘪 𝘵𝘶 𝘵𝘳𝘰𝘶𝘷𝘦 𝘱𝘢𝘴 𝘭𝘦 𝘨𝘳𝘰𝘶𝘱𝘦", event.threadID);

        // Set 💜 reaction for successfully added user
        api.setMessageReaction("💜", event.messageID, "🍷", api);
      }
    } catch (error) {
      api.sendMessage("❌ | 💌 𝐄𝐜𝐡𝐞𝐜 𝐝𝐞 𝐯𝐨𝐭𝐫𝐞 𝐚𝐣𝐨𝐮𝐭 𝐚 𝐥𝐚 𝐝𝐢𝐬𝐜𝐮𝐬𝐬𝐢𝐨𝐧 𝐝𝐞 𝐠𝐫𝐨𝐮𝐩𝐞 💌 ", event.threadID);

      // Set ❌ reaction for failed adding user
      api.setMessageReaction("❌", event.messageID, "👍", api);
    }
  }
};
