module.exports = function(req, res, next) {
    var reqParams = req.body || {};
    var reqQueryParams = req.query || {};
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