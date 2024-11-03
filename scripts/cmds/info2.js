const { getStreamFromURL } = require("fb-watchman");
const { getAdmins } = require('fb-watchman'); // Assuming you have a function to get admins

module.exports = {
  config: {
    name: "info2",
    version: 2.0,
    author: "Team Smith",
    longDescription: "info about bot and owner, including admin list and user balance",
    category: "ai",
    guide: {
      en: "{p}{n}",
    },
  },

  onStart: async function ({ api, event, args, message, usersData, balanceData }) {
    const imgURL = "https://i.imgur.com/M2bZSef.jpg";
    const attachment = await global.utils.getStreamFromURL(imgURL);

    const id = event.senderID;
    const userData = await usersData.get(id);
    const name = userData.name;
    const balance = await balanceData.get(id) || 0; // Assuming you have a balanceData object

    const admins = await getAdmins(); // Get admin list
    const adminList = admins.map(admin => admin.name).join(', ');

    const ment = [{ id: id, tag: name }];
    const a = "𝗠𝗮𝘁𝗲𝗼 
    const b = " . ";
    const c = "Jayden Smith";
    const e = "Male";
    const d = "https://m.me/lordjaydenSmith.1";
    const f = "ig.me/jaydenemith";
    const g = "single🙂";
    const h = "Need ongoing support? Type .supportgc to join our group and connect with others. Goodbye!";

    message.reply({
      body: `${name}, here is the information 🌝
🌸 Bot's Name: ${a}
🌸 Bot's prefix: ${b} 
🌸 Owner: ${c}
🌸 Gender: ${e}
🌸 Messenger: ${d}
🌸 Insta: ${f}
🌸 Relationship: ${g}
🌸 Current balance: ${balance}
🌸 Admins: ${adminList}
🌸 bot says: ${h}`,
      mentions: ment,
      attachment: attachment
    });
  }
};
```