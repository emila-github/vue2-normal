var usersDatas = require('./users')
let {addUser} = usersDatas
module.exports = function(req, res, next) {
    var reqParams = req.body || {};
    var reqQueryParams = req.query || {};
    addUser(reqParams)
    let data = {
        result: 'success', // failure | success
        messages: ['添加成功'],
        "fieldErrors": {},
        "errors": [],
        "data": 24
    }

    data = JSON.stringify(data);
    res.end(data);
};