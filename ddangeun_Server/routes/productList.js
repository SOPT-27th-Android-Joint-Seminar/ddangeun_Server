var express = require('express');
var router = express.Router();
const pool = require('../modules/pool');


router.get('/', async (req, res) => {
  try {
    const query = 'SELECT PRODUCT_TB.*, USER_TB.local FROM PRODUCT_TB INNER JOIN USER_TB ON PRODUCT_TB.user_idx = USER_TB.idx;'
    const data = await pool.queryParam(query);

    const dataWithImg = await Promise.all(data.map(async product => {
      const images = await pool.queryParam(`SELECT * FROM PRODUCT_IMG_TB WHERE product_idx=${product.idx};`);
      if(images.length === 0){
        return product;
      }else{
        product.imgLink = images[0].imgLink;
        return product;
      }
    }))

    return res
      .status(200)
      .send(dataWithImg);
  } catch (err) {
    console.log('productList error: ', err);
    res
      .status(500)
      .send({status: 500});
  }
});

module.exports = router;