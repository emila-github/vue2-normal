var usersDatas = require('./users')
let {getUsers, getUsersLength} = usersDatas
module.exports = function(req, res, next) {
    var reqParams = req.body || {};
    var reqQueryParams = req.query || {};
    let pageNo = +reqQueryParams.pageNo || 1
    let pageSize = +reqQueryParams.pageSize || 20

    // //获取用户列表（分页）
    // let mockUsers = Users.filter((user, index) => {
    //     return index < pageSize * pageNo && index >= pageSize * (pageNo -1)
    // });

    let data = {
        result: 'success', // failure | success
        messages: ['列表加载成功'],
        "fieldErrors": {},
        "errors": [],
        "data": {
            "totalCount": getUsersLength(),
            "pageNo": pageNo,
            "pageSize": pageSize,
            "listData": getUsers(pageSize, pageNo)
        }
        // "data": {
        //     "users": Users,
        //     "totalCount": 2300,
        //     "pageNo": pageNo,
        //     "pageSize": pageSize,
        //     "listData": [{
        //         "id": 26,
        //         "userCode": "CYxxxx24",
        //         "trueName": "陈**承",
        //         "email": "zichxxxxx@163.com",
        //         "department": "VR",
        //         "status": 1,
        //         "roleId": 10001,
        //         "roleName": "超级管理员",
        //         "createTime": 1476069225560,
        //         "mobile": "13455558585"
        //     }, {
        //     //     "id": 25,
        //     //     "userCode": "CYxxxx67",
        //     //     "trueName": "吴**杰",
        //     //     "email": "ixxxxx@163.com",
        //     //     "department": "技术",
        //     //     "status": 1,
        //     //     "roleId": 10001,
        //     //     "roleName": "超级管理员",
        //     //     "createTime": 1475896893291,
        //     //     "mobile": "13455558585"
        //     // }, {
        //     //     "id": 24,
        //     //     "userCode": "CYxxxx60",
        //     //     "trueName": "洪**",
        //     //     "email": "mxxxxx@163.com",
        //     //     "department": "测试",
        //     //     "status": 1,
        //     //     "roleId": -1,
        //     //     "roleName": "自定义",
        //     //     "createTime": 1469156256391,
        //     //     "mobile": "13455558585"
        //     // }, {
        //     //     "id": 23,
        //     //     "userCode": "WB000124",
        //     //     "trueName": "林**志",
        //     //     "email": "inxxxxx@163.com",
        //     //     "department": "市场",
        //     //     "status": 1,
        //     //     "roleId": 10001,
        //     //     "roleName": "超级管理员",
        //     //     "createTime": 1466994223652,
        //     //     "mobile": "13455558585"
        //     // }, {
        //     //     "id": 21,
        //     //     "userCode": "CYxxxx",
        //     //     "trueName": "陈**翔",
        //     //     "email": "angcxxxxx@163.com",
        //     //     "department": "技术部",
        //     //     "status": 2,
        //     //     "roleId": null,
        //     //     "roleName": "",
        //     //     "createTime": 1457580289131,
        //     //     "mobile": "13455558585"
        //     // }, {
        //     //     "id": 15,
        //     //     "userCode": "CYxxxx",
        //     //     "trueName": "胡**男",
        //     //     "email": "nhu@17173-inc.com",
        //     //     "department": "测试",
        //     //     "status": 1,
        //     //     "roleId": -1,
        //     //     "roleName": "自定义",
        //     //     "createTime": 1444703939528,
        //     //     "mobile": "13455558585"
        //     // }, {
        //     //     "id": 17,
        //     //     "userCode": "CYxxxx",
        //     //     "trueName": "王**键",
        //     //     "email": "gjianwxxxxx@163.com",
        //     //     "department": "前端",
        //     //     "status": 1,
        //     //     "roleId": 10001,
        //     //     "roleName": "超级管理员",
        //     //     "createTime": 1444703939528,
        //     //     "mobile": "13455558585"
        //     // }, {
        //     //     "id": 18,
        //     //     "userCode": "CYxxxx",
        //     //     "trueName": "林**益",
        //     //     "email": "gyixxxxx@163.com",
        //     //     "department": "技术",
        //     //     "status": 2,
        //     //     "roleId": 10001,
        //     //     "roleName": "超级管理员",
        //     //     "createTime": 1444703939528,
        //     //     "mobile": "13455558585"
        //     // }, {
        //     //     "id": 19,
        //     //     "userCode": "CYxxxx",
        //     //     "trueName": "张**滢",
        //     //     "email": "yingzhxxxxx@163.com",
        //     //     "department": "市场部",
        //     //     "status": 1,
        //     //     "roleId": 10001,
        //     //     "roleName": "超级管理员",
        //     //     "createTime": 1444703939528,
        //     //     "mobile": "13455558585"
        //     // }, {
        //     //     "id": 20,
        //     //     "userCode": "CYxxxx",
        //     //     "trueName": "郭**金",
        //     //     "email": "nxxxxx@163.com",
        //     //     "department": "产品部",
        //     //     "status": 1,
        //     //     "roleId": 10002,
        //     //     "roleName": "模块管理员",
        //     //     "createTime": 1444703939528,
        //     //     "mobile": "13455558585"
        //     // }, {
        //     //     "id": 14,
        //     //     "userCode": "CYxxxx ",
        //     //     "trueName": "周**洁",
        //     //     "email": "ezhou@17173-inc.com",
        //     //     "department": "测试",
        //     //     "status": 2,
        //     //     "roleId": 10001,
        //     //     "roleName": "超级管理员",
        //     //     "createTime": 1444703939528,
        //     //     "mobile": "13455558585"
        //     // }, {
        //     //     "id": 13,
        //     //     "userCode": "CYxxxx",
        //     //     "trueName": "王**绍",
        //     //     "email": "haowxxxxx@163.com",
        //     //     "department": "技术",
        //     //     "status": 2,
        //     //     "roleId": 10001,
        //     //     "roleName": "超级管理员",
        //     //     "createTime": 1444703939528,
        //     //     "mobile": "13455558585"
        //     // }, {
        //     //     "id": 12,
        //     //     "userCode": "CYxxxx",
        //     //     "trueName": "汪**",
        //     //     "email": "gwxxxxx@163.com",
        //     //     "department": "技术",
        //     //     "status": 1,
        //     //     "roleId": -1,
        //     //     "roleName": "自定义",
        //     //     "createTime": 1444703939528,
        //     //     "mobile": "13455558585"
        //     // }, {
        //     //     "id": 3,
        //     //     "userCode": "CYxxxx1",
        //     //     "trueName": "李**迅",
        //     //     "email": "xxxxx@163.com",
        //     //     "department": "技术",
        //     //     "status": 1,
        //     //     "roleId": 10004,
        //     //     "roleName": "开发人员",
        //     //     "createTime": 1444703939528,
        //     //     "mobile": "13455558585"
        //     // }, {
        //     //     "id": 4,
        //     //     "userCode": "CYxxxx",
        //     //     "trueName": "陈**",
        //     //     "email": "chxxxxx@163.com",
        //     //     "department": "技术",
        //     //     "status": 1,
        //     //     "roleId": 10001,
        //     //     "roleName": "超级管理员",
        //     //     "createTime": 1444703939528,
        //     //     "mobile": "13455558585"
        //     // }, {
        //     //     "id": 5,
        //     //     "userCode": "CYxxxx",
        //     //     "trueName": "林**",
        //     //     "email": "xxxxx@163.com",
        //     //     "department": "市场",
        //     //     "status": 1,
        //     //     "roleId": 10001,
        //     //     "roleName": "超级管理员",
        //     //     "createTime": 1444703939528,
        //     //     "mobile": "13455558585"
        //     // }, {
        //     //     "id": 6,
        //     //     "userCode": "CYxxxx6",
        //     //     "trueName": "林**宇",
        //     //     "email": "ianxxxxx@163.com",
        //     //     "department": "市场",
        //     //     "status": 1,
        //     //     "roleId": -1,
        //     //     "roleName": "自定义",
        //     //     "createTime": 1444703939528,
        //     //     "mobile": "13455558585"
        //     // }, {
        //     //     "id": 7,
        //     //     "userCode": "ST000202 ",
        //     //     "trueName": "林**志",
        //     //     "email": "inxxxxx@163.com",
        //     //     "department": "市场",
        //     //     "status": 1,
        //     //     "roleId": 10001,
        //     //     "roleName": "超级管理员",
        //     //     "createTime": 1444703939528,
        //     //     "mobile": "13455558585"
        //     // }, {
        //     //     "id": 8,
        //     //     "userCode": "CYxxxx3",
        //     //     "trueName": "王**峰",
        //     //     "email": "lefxxxxx@163.com",
        //     //     "department": "产品",
        //     //     "status": 1,
        //     //     "roleId": 10001,
        //     //     "roleName": "超级管理员",
        //     //     "createTime": 1444703939528,
        //     //     "mobile": "13455558585"
        //     // }, {
        //         "id": 9,
        //         "userCode": "CYxxxx",
        //         "trueName": "黄**鹏",
        //         "email": "ggaopxxxxx@163.com",
        //         "department": "产品",
        //         "status": 1,
        //         "roleId": 10001,
        //         "roleName": "超级管理员",
        //         "createTime": 1444703939528,
        //         "mobile": "13455558585"
        //     }],
        //     "totalHit": 23
        // }
    }

    data = JSON.stringify(data);
    res.end(data);
};