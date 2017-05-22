module.exports = function(req, res, next) {
    var reqParams = req.body || {};
    var reqQueryParams = req.query || {};
    let data = {
        result: 'success', // failure | success
        messages: ['登录成功'],
        "fieldErrors": {},
        "errors": [],
        "data": {
            "totalCount": 10,
            "pageNo": 1,
            "pageSize": 20,
            "listData": [{
                "id": 10,
                "uid": "124836658",
                "userName": "qq_161451014@17173.com",
                "passStartTime": 1484012426817,
                "passEndTime": 1485878340000,
                "remark": "开发加白名单"
            }, {
                "id": 9,
                "uid": "33607614",
                "userName": "tmp_login187@17173.com",
                "passStartTime": 1483945404646,
                "passEndTime": 1484409540000,
                "remark": "test"
            }, {
                "id": 8,
                "uid": "33607441",
                "userName": "tmp_login106@17173.com",
                "passStartTime": 1469432965184,
                "passEndTime": null,
                "remark": "啊啊"
            }, {
                "id": 7,
                "uid": "105066047",
                "userName": "idestinycode@17173.com",
                "passStartTime": 1464677687184,
                "passEndTime": null,
                "remark": "test"
            }, {
                "id": 6,
                "uid": "33607434",
                "userName": "tmp_login99@17173.com",
                "passStartTime": 1464666121293,
                "passEndTime": null,
                "remark": "test"
            }, {
                "id": 5,
                "uid": "90044122",
                "userName": "dipin_llx@17173.com",
                "passStartTime": 1462875268687,
                "passEndTime": null,
                "remark": "dipin测试账号"
            }, {
                "id": 4,
                "uid": "94969938",
                "userName": "test_10006@17173.com",
                "passStartTime": 1462789255819,
                "passEndTime": null,
                "remark": "测试账号加白名单"
            }, {
                "id": 3,
                "uid": "33607459",
                "userName": "tmp_login123@17173.com",
                "passStartTime": 1462789026743,
                "passEndTime": null,
                "remark": "test"
            }, {
                "id": 2,
                "uid": "57303318",
                "userName": "mjkop1@17173.com",
                "passStartTime": 1459839521176,
                "passEndTime": null,
                "remark": "林锋"
            }, {
                "id": 1,
                "uid": "33608220",
                "userName": "tmp_login504@17173.com",
                "passStartTime": 1459160827333,
                "passEndTime": null,
                "remark": "测试的"
            }],
            "totalHit": 10
        }
    }

    data = JSON.stringify(data);
    res.end(data);
};