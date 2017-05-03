'use strict'
var glob = require("glob");
var path = require('path');
module.exports = function(app) {

  //app.all('/store/list',require('./store/list.do.js'))
  //
  ////m
  //var mIndex = require('./m/index.html.js')
  //app.get('/m/index.html',mIndex)

  var controllers = './controllers';
  //静态页面路由
  var htmlFiles = glob.sync('./**/*.html.js');
  if(htmlFiles && htmlFiles.length > 0) {
    htmlFiles.forEach(function(fileName) {
      var extname = path.extname(fileName);
      var fileName = fileName.replace(controllers, '');
      var mapping = fileName.replace(extname,'');
      fileName = '.'+ fileName;
      //console.log('mapping=%s',mapping)
      //console.log('fileName=%s',fileName)
      //console.log('extname=%s',extname)
      app.all(mapping, require(fileName));
    });
  }

  //异步请求路由
  var ajaxFiles = glob.sync('./**/*.do.js');
  if(ajaxFiles && ajaxFiles.length > 0) {
    ajaxFiles.forEach(function(fileName) {
      var extname = path.extname(fileName);
      var fileName = fileName.replace(controllers, '');
      // var mapping = fileName.replace(extname,'').replace(/\.do$/,'');
      var mapping = fileName.replace(extname,'');
      fileName = '.'+ fileName;
      // console.log('mapping=%s',mapping)
      // console.log('fileName=%s',fileName)
      app.all(mapping, require(fileName));
    });
  }

  // app.get('/', (req, res) => {
  //   res.statusCode = 302
  //   res.setHeader("Location", '/index.html')
  //   res.end()
  // });
  // app.get('/m/', (req, res) => {
  //   res.statusCode = 302
  //   res.setHeader("Location", '/m/index.html')
  //   res.end()
  // });
}
