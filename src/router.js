const { response, request } = require('express');
const express = require('express');
const { getUser } = require('./controller');
const router = express.Router();

router.get('/:username', async (req = request, resp = response, next) => {
  const result = await getUser(req.params.username);
  resp.json(result);
});

module.exports = router;
