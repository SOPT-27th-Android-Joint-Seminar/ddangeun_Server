const getProductModel = require('../models/getProduct')
const util = require('../utils/util')
const dateCalculate = require('date-utils');

module.exports = {
    getProductDetail : async(req, res, next) => {
        try {
            const idx = req.query.productIdx;
            const data = await getProductModel.getProductDetail(idx)
            //console.log(data)
            
            //const dataUpAgain = data[0].upAgain.format('YYYY MM DD HH:mm:ss')
            //const dataCreatedAt = data[0].createdAt
            
            //const dataUpAgain = new Date(data[0].upAgain)
            //console.log(dataUpAgain.toFormat("YYYY-MM-DD HH:MM:SS"))

            //시간 변환 처리
            const newUp = data[0].upAgain.toFormat("YYYY-MM-DD HH:MM:SS");
            const newCreate = data[0].createdAt.toFormat("YYYY-MM-DD HH:MM:SS");
            
            data[0].upAgain = newUp
            data[0].createdAt = newCreate

            return res
            .status(200)
            .send(util.success(200, '상세 페이지 조회 완료', data));

        } catch (error){
          next(error);
        }
    },
    getProductImage: async(req, res, next) => {
        try{
            const idx = req.query.productIdx;
            const data = await getProductModel.getProductImage(idx)

            return res
            .status(200)
            .send(util.success(200, '상세상품 이미지 조회 완료', data));

        } catch(error){
            next(error);
        }
    }
}