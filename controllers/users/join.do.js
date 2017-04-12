//var Mock = require('mockjs');
//var _ = require('lodash');
module.exports = function(req, res, next) {
    var reqParams = req.body || {};
    var data = {
        result: 'success', // success  | failure
        messages: ['会话超时，请重新选择商品', 'error2'],
        data: {}
    };

    data = JSON.stringify(data);
    res.contentType('json');
    res.send(data);
};
