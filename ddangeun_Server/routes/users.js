var express = require('express');
var router = express.Router();
const pool = require('../modules/pool');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/productList', async (req, res) => {
  try {
    const query = 'SELECT PRODUCT_TB.*, USER_TB.local FROM PRODUCT_TB INNER JOIN USER_TB ON PRODUCT_TB.user_idx = USER_TB.idx;'
    const data = await pool.queryParam(query);
    console.log(data);

    return res
      .status(200)
      .send(data);
  } catch (err) {
    console.log('productList error: ', err);
    res
      .status(500)
      .send({status: 500});
  }
})


module.exports = router;
