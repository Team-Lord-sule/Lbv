const fs = require('fs');

module.exports = {
  config: {
    name: "file",
    version: "1.0",
    author: "OtinXShiva",
    countDown: 5,
    role: 0,
    shortDescription: "Send bot script",
    longDescription: "Send bot specified file ",
    category: "owner",
    guide: "{pn} file name. Ex: .{pn} filename"
  },

  onStart: async function ({ message, args, api, event }) {
    const permission = ["61560050885709", "61553565805276","61560501479443"];
    if (!permission.includes(event.senderID)) {
      return api.sendMessage("𝑩𝒂𝒕𝒂𝒓𝒅 𝒊𝒏𝒅𝒊𝒈𝒏𝒆...😒🔑❌ 𝒔𝒆𝒖𝒍 Lord𖣘King 𝒆𝒕 Kolawole𖣘Suleiman 𝒑𝒆𝒖𝒗𝒆𝒏𝒕 𝒖𝒕𝒊𝒍𝒊𝒔𝒆𝒓 𝒄𝒆𝒕𝒕𝒆 𝒇𝒐𝒏𝒄𝒕𝒊𝒐𝒏...😒🔒🍀", event.threadID, event.messageID);
    }
    
    const fileName = args[0];
    if (!fileName) {
      return api.sendMessage("𝖡𝖺𝗅𝖺𝗇𝖼𝖾 𝗅𝖾 𝗇𝗈𝗆 𝖽𝗎 𝖿𝗂𝖼𝗁𝗂𝖾𝗋.", event.threadID, event.messageID);
    }

    const filePath = __dirname + `/${fileName}.js`;
    if (!fs.existsSync(filePath)) {
      return api.sendMessage(`File not found: ${fileName}.js`, event.threadID, event.messageID);
    }

    const fileContent = fs.readFileSync(filePath, 'utf8');
    api.sendMessage({ body: fileContent }, event.threadID);
  }
};
