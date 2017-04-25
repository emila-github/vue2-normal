module.exports = function(req, res, next) {
  var reqParams = req.body || {};
  var reqQueryParams = req.query || {};
  // console.log('reqParams====', reqParams, '========')
  // console.log('reqQueryParams====', reqQueryParams, '========')
  var msg = reqParams /**{
    id: 'm_1',
    threadID: 't_1',
    threadName: 'Jing and Bill',
    authorName: 'Bill',
    text: 'Hey Jing, want to give a Flux talk at ForwardJS?',
    timestamp: Date.now() - 99999
  } **/

  var data = {
    result: 'success', // success  | failure
    messages: ['会话超时，请重新选择商品', 'error2'],
    data: msg
  };

  data = JSON.stringify(data);
  res.contentType('json');
  res.send(data);
};
