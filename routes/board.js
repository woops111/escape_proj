const express = require('express');
const router = express.Router();
const { getList, regContent } = require('../controller/board')

// default
router.get('/:board_alias', async function(req, res, next) {
  var rst = await getList(req.params.board_alias)
  res.json(rst);
});

// list
router.get('/LIST/:board_alias', function(req, res, next) {
  res.send('respond with a resource');
});

// view
router.get('/LIST/:board_alias/:idx', function(req, res, next) {
  res.send('respond with a resource');
});

// reg / upd
router.get('/REG/:board_alias', function(req, res, next) {
  res.send('respond with a resource');
});

// reg / upd proc
router.post('/REG/', async function(req, res, next) {
  var rst = await regContent(req)
  res.json(rst);
});


module.exports = router;
