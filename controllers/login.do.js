module.exports = function(req, res, next) {
  var data = {
    result: 'success',
    messages: ['错误信息1', '错误信息2'],
    data: true
  };
  data = JSON.stringify(data);
  res.end(data);
};
