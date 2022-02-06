require("dotenv").config();
const formatter = require('./format')
const axios = require("axios");

const getData = async (word) => {
    try {
        await axios.get(`https://od-api.oxforddictionaries.com/api/v2/entries/en-gb/${word}?fields=definitions&strictMatch=false`,
          {
            headers: {
              app_id: process.env.APP_ID,
              app_key: process.env.API_KEY,
            },
          }
        )
        .then((res) => {
            formatter(res)
        });
    } catch (err) {
      console.log(err);
    }
  };

module.exports = getData

