var usersDatas = require('./users')
let {updateUser} = usersDatas
module.exports = function(req, res, next) {
    var reqParams = req.body || {};
    var reqQueryParams = req.query || {};
    updateUser(reqParams)
    let data = {
        result: 'success', // failure | success
        messages: ['修改成功'],
        "fieldErrors": {},
        "errors": [],
        "data": reqParams.userId
    }

    data = JSON.stringify(data);
    res.end(data);
};