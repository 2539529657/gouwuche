const express = require('express')
const fs = require('fs')
const app = express()

app.all('*', function (req, res, next) {
  // 设置允许跨域的域名，*为全部
  res.header('Access-Control-Allow-Origin', '*')
  // 允许header类型
  res.header('Access-Control-Allow-Headers', 'content-type')
  // 跨域允许的请求方式
  res.header('Access-Control-Allow-Methods', 'DELETE,PUT,POST,GET,OPTIONS')

  if (req.method.toLowerCase() == 'options') {
    res.send(200)
  } else {
    next()
  }
})

app.get('/home/multidata', function (req, res) {

  fs.readFile('./data/multidata.json', function (err, data) {

    if (err) throw err;
    res.send(JSON.parse(data));

  })
})

app.get('/pop/recommendDB', function (req, res) {

  fs.readFile('./data/recommendDB.json', function (err, data) {

    if (err) throw err;
    res.send(JSON.parse(data));

  })
})

app.get('/category', function (req, res) {
  fs.readFile('./data/category.json', function (err, data) {

    if (err) throw err;
    res.send(JSON.parse(data));

  })
})

app.get('/subcategory3627', function (req, res) {
  fs.readFile('./data/subcategory3627.json', function (err, data) {
    if (err) throw err;
    res.send(JSON.parse(data))
  })
})

app.get('/subcategory582',function(req,res){
  fs.readFile('./data/subcategory582.json',function (err,data) {
    if(err) throw err;
    res.send(JSON.parse(data))
  })
})


app.listen(8000, function () {
  console.log('http://127.0.0.1:8000/home/multidata')
  console.log('http://127.0.0.1:8000/pop/recommendDB')
  console.log('http://127.0.0.1:8000/category')
  console.log('http://127.0.0.1:8000/subcategory3627')
  console.log('http://127.0.0.1:8000/subcategory582')
})


