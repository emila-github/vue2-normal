module.exports = function(req, res, next) {
  var reqParams = req.body || {};
  var reqQueryParams = req.query || {};
  let data = {}
  if (reqParams.test === 'wcj') {
    data = {
      result: 'failure', // failure | success
      messages: ['表单提交失败'],
      data: true
    }
  } else if (reqParams.password === '123456') {
    data = {
      result: 'failure', // failure | success
      messages: ['表单提交有误'],
      data: {}
    }
  } else {
    data = {
      result: 'success', // failure | success
      messages: ['表单提交成功'],
      data: {
        userId: 53
      }
    }
  }
  data = JSON.stringify(data);
  res.end(data);
};
