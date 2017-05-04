module.exports = function(req, res, next) {
  var reqParams = req.body || {};
  var reqQueryParams = req.query || {};
  let data = {}
  if (reqParams.userName === 'wcj') {
    data = {
      result: 'failure', // failure | success
      messages: ['账号不存在'],
      data: true
    }
  } else if (reqParams.password === '123456') {
    data = {
      result: 'failure', // failure | success
      messages: ['密码有误'],
      data: {}
    }
  } else {
    data = {
      result: 'success', // failure | success
      messages: ['登录成功'],
      data: {
        token: "eyJhbGciOiJIUzI1NiJ9.eyJleHAiOjE0OTM5Njk4ODYsImNpZCI6MiwidWlkIjo1MywiaWF0IjoxNDkzODgzNDg2LCJqdGkiOiI0YmRmMTcxYy0xN2RlLTQxNjItYTMxZi1lZGI5ZDZjYmY0NWMifQ.PfV5S8-QY1Hds3sDRfQ_24AojyxMU1g2UVA5ClMCOaE",
        userId: 53
      }
    }
  }
  data = JSON.stringify(data);
  res.end(data);
};
