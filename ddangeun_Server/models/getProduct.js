const pool = require('../models/pool')

const product_tb = 'PRODUCT_TB';
const user_tb = 'USER_TB';
const product_img_tb = 'PRODUCT_IMG_TB';


module.exports = {
    getProductDetail: async(idx) => {
        const query = `SELECT *
        FROM ${product_tb}
        WHERE idx = ${idx} AND idx IN (SELECT notice_idx FROM ${keyword_collection_tb} 
        INNER JOIN ${notice_tb} ON
            ${keyword_collection_tb}.notice_idx = ${notice_tb}.idx
        WHERE
            ${keyword_collection_tb}.keyword_idx = ${keyword_idx})
        ORDER BY createdat DESC, idx 
        LIMIT 10 OFFSET ${page};`;
    try {
      return await pool.queryParam(query);
    } catch (error) {
      console.log('getSchoolMenu error : ', error);
      throw error;
    }
    }
}