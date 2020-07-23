const express = require('express');
const request = require('request');
const router = express.Router();
const config = require('config');
const apiKey = config.get('apexApiKey');

// @route GET api/player
// @desc Get player data.
// @access Public
router.get('/:platform/:playerName', async(req, response) => {
  const platform = req.params.platform;
  const playerName = req.params.playerName;

  const headers = {
    'TRN-Api-Key': apiKey,
    'Accept': 'application/json'
  };
  request({url: `https://public-api.tracker.gg/v2/apex/standard/profile/${platform}/${playerName}`, headers: headers},
  (err, res, body) => {
    if (err) {
      if (err && res) {
        return res.json(JSON.parse(err));
      } else {
        console.log(err);
      }
    }
    response.json(JSON.parse(body));
  });
});

module.exports = router;
