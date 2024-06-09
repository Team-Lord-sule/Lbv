const fs = require("fs");

const path = require("path");

const axios = require("axios");



module.exports = {

  config: {

    name: "anime",

    aliases: ["gfx"],

    author: "ArYAN",

    version: "1.0",

    cooldowns: 10,

    role: 0,

    longDescription: {

      en: "Get random anime girl image",

      category: "media",

      guide: "{p} anime [ name ]",

    },

  },

  onStart: async function ({ message, args, api, event }) {

    api.setMessageReaction("🔎", event.messageID, (err) => {}, true);



    try {

      const name = args.join(" ");

      const type = args[0];



      if (!name || !validTypes.includes(type)) {

        return api.sendMessage(

          "⛔ 𝗜𝗻𝘃𝗮𝗹𝗶𝗱 𝗨𝘀𝗮𝗴𝗲\n━━━━━━━━━━━━━━━\n\nPlease provide a valid type: " + validTypes.join('\n'),

          event.threadID,

          event.messageID

        );

      }



      const baseUrl = `https://itsaryan.onrender.com/api/anime?type=${encodeURIComponent(name)}`;

      const res = await axios.get(baseUrl);

      const image = res.data.url;



      const stream = (await axios({ url: image, responseType: 'stream' })).data;

      api.sendMessage({

        body: "🖼 [ 𝗔𝗡𝗜𝗠𝗘 𝗚𝗙𝗫 ]\n━━━━━━━━━━━━━━━\n\n",

        attachment: stream

      }, event.threadID, () => {

        api.setMessageReaction("✅", event.messageID, (err) => {}, true);

      });

      

    } catch (error) {

      console.error("Error:", error);

      api.sendMessage("❌ An error occurred while processing your request.", event.threadID, event.messageID);

    }

  }

};



const validTypes = ['chase', 'cheer', 'cringe', 'cry', 'cuddle', 'dance', 'facepalm', 'glomp', 'handhold', 'happy', 'hi', 'highfive', 'hug', 'kiss', 'laugh', 'lick', 'love', 'nervous', 'nom', 'nope', 'panic', 'pat', 'poke', 'pout', 'punch', 'run', 'sad', 'shrug', 'slap'];
