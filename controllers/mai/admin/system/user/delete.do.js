var usersDatas = require('./users')
let {delUser} = usersDatas

module.exports = function(req, res, next) {
    var reqParams = req.body || {};
    var reqQueryParams = req.query || {};

    //删除用户
    let id = reqParams.userId
    delUser(id);

    let data = {
        result: 'success', // failure | success
        messages: ['删除成功'],
        "fieldErrors": {},
        "errors": [],
        "data": id
    }

    data = JSON.stringify(data);
    res.end(data);
};