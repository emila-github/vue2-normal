module.exports = function(req, res, next) {
    var reqParams = req.body || {};
    var reqQueryParams = req.query || {};
    let data = {}
    if (reqQueryParams.userCode === 'CY3846') {
        data = {
            result: 'success', // failure | success
            messages: ['用户已存在'],
            "fieldErrors": {},
            "errors": [],
            "data": false
        }
    } else {
        data = {
            result: 'success', // failure | success
            messages: ['检查通过，可以添加'],
            "fieldErrors": {},
            "errors": [],
            "data": true
        } 
    }
    data = JSON.stringify(data);
    res.end(data);
};