const pool = require('../modules/pool')

const product_tb = 'PRODUCT_TB';
const user_tb = 'USER_TB';
const product_img_tb = 'PRODUCT_IMG_TB';


module.exports = {
    getProductDetail: async(idx) => {
        const query = `SELECT *
        FROM ${product_tb}
        INNER JOIN ${user_tb} ON
            ${product_tb}.user_idx = ${user_tb}.idx
        WHERE
            ${product_tb}.idx = ${idx};`;
    try {
      return await pool.queryParam(query);
    } catch (error) {
      console.log('getProductDetail error : ', error);
      throw error;
    }
  },
    getProductImage: async(idx) => {
      const query = `SELECT * FROM ${product_img_tb} WHERE product_idx = ${idx}`;
      try {
        return await pool.queryParam(query);
      } catch (error) {
        console.log('getProductImage error : ', error);
        throw error;
      }
    }
}