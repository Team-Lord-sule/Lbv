module.exports = {
  config: {
    name: "king",
    aliases: ["kng"],
    version: "1.0",
    author: "Loid Butter | haitani du toman",
    countDown: 10,
    role: 0,
    shortDescription: "Play miss, the oldest gambling game",
    longDescription: "Play miss, the oldest gambling game, and earn money",
    category: "game",
    guide: "{pn} <momon/ainz> <amount of money>"
  },

  onStart: async function ({ args, message, usersData, event }) {
    const betType = args[0];
    const betAmount = parseInt(args[1]);
    const user = event.senderID;
    const userData = await usersData.get(event.senderID);

    if (!["soy", "luna"].includes(betType)) {
      return message.reply("💙|𝙲𝙷𝙾𝙸𝚂𝙸 𝙴𝙽𝚃𝚁𝙴 '𝚊𝚒𝚗𝚣' 𝙴𝚃 '𝚖𝚘𝚖𝚘𝚗'");
    }

    if (!Number.isInteger(betAmount) || betAmount < 1000) {
      return message.reply("🥶| 𝘊𝘩𝘰𝘪𝘴𝘪 𝘶𝘫 𝘮𝘰𝘯𝘵𝘢𝘯𝘵 𝘴𝘶𝘱𝘦𝘳𝘪𝘦𝘶𝘳𝘦 𝘰𝘶 𝘦𝘨𝘢𝘭𝘦 𝘢 1000");
    }

    if (betAmount > userData.money) {
      return message.reply("💤| 𝘝𝘈 𝘍𝘈𝘐𝘙𝘌 𝘜𝘕 𝘗𝘙𝘌𝘛");
    }

    const dice = [1, 2, 3, 4, 5, 6];
    const results = [];

    for (let i = 0; i < 3; i++) {
      const result = dice[Math.floor(Math.random() * dice.length)];
      results.push(result);
    }

    const winConditions = {
      small: results.filter((num, index, arr) => num >= 1 && num <= 3 && arr.indexOf(num) !== index).length > 0,
      big: results.filter((num, index, arr) => num >= 4 && num <= 6 && arr.indexOf(num) !== index).length > 0,
    };

    const resultString = results.join(" | ");

    if ((winConditions[betType] && Math.random() <= 0.4) || (!winConditions[betType] && Math.random() > 0.4)) {
      const winAmount = 4 * betAmount;
      userData.money += winAmount;
      await usersData.set(event.senderID, userData);
      return message.reply(`🌊❄ 𝑪𝑶𝑪𝒀𝑻𝑼𝑺 ❄🌊\n____________________\n💙[ ${resultString} ]💙\n\n🎉 |𝑭𝑬𝑳𝑰𝑪𝑰𝑻𝑨𝑻𝑰𝑶𝑵 𝑯𝑼𝑴𝑨𝑰𝑵👤\n 𝑻𝒖 𝒓𝒆𝒎𝒑𝒐𝒓𝒕𝒆 𝒍𝒂 𝒎𝒂𝒖𝒅𝒊𝒕𝒆 𝒔𝒐𝒎𝒎𝒆 𝒅𝒆${winAmount}😶`);
    } else
      userData.money -= betAmount;
      await usersData.set(event.senderID, userData);
      return message.reply(`🌊❄ 𝑪𝑶𝑪𝒀𝑻𝑼𝑺 ❄🌊\n____________________\n😷[ ${resultString} ]😷\n\n🎯 | 𝑻𝑼 𝑷𝑬𝑹𝑫𝑺 𝑱𝑼𝑺𝑻𝑬 ${betAmount} 𝑹𝑰𝑬𝑵 𝑫𝑬 𝑮𝑹𝑨𝑽𝑬 😇`);
    }
  }
};
