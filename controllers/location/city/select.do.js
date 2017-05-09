module.exports = function(req, res, next) {
    var reqParams = req.body || {};
    var reqQueryParams = req.query || {}; 
    let data = {
        result: 'success', // failure | success
        messages: ['登录成功'],
        "fieldErrors": {},
        "errors": [],
        "data": [
            {
                "code": "1101",
                "name": "北京"
            }
        ]
    }
    data = JSON.stringify(data);
    res.end(data);
};