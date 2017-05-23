var usersDatas = require('./users')
let {batchDelUser} = usersDatas

module.exports = function(req, res, next) {
    var reqParams = req.body || {};
    var reqQueryParams = req.query || {};

    //删除用户
    let ids = reqParams.ids
    batchDelUser(ids);

    let data = {
        result: 'success', // failure | success
        messages: ['批量删除成功'],
        "fieldErrors": {},
        "errors": [],
        "data": ids
    }

    data = JSON.stringify(data);
    res.end(data);
};