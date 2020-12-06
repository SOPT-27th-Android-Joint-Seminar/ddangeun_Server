const getProductModel = require('../models/getProduct')
const util = require('../utils/util')


module.exports = {
    getProductDetail : async(req, res, next) => {
        try {
            const idx = req.query.productIdx;
            const data = await getProductModel.getProductDetail(idx)
            return res
            .status(200)
            .send(util.success(200, '상세 페이지 조회 완료', data));

        } catch (error){
          next(error);
        }

    }
}