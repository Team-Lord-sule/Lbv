const axios = require('axios');

module.exports = {
  config: {
    name: 'advice',
    aliases: ['randomadvice', 'advices'],
    author: 'Hassan',
    version: '1.0',
    shortDescription: 'Get a random piece of advice',
    longDescription: 'Retrieve and send a random piece of advice.',
    category: 'fun',
    guide: {
      vi: '',
      en: 'Use the command to get a random piece of advice, e.g., `advice`',
    },
  },

  onStart: async function ({ message }) {
    try {
      const apiUrl = 'https://hassan-ad-api.onrender.com/advice';

      const response = await axios.get(apiUrl);

      if (response.status !== 200) {
        throw new Error('Advice not found');
      }

      const advice = response.data.advice;
      message.reply(advice);
    } catch (error) {
      console.error(error);
      message.reply('🚫 Couldn\'t fetch the advice. Please try again later.');
    }
  },
};
