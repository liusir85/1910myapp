var express = require('express')
var mysql = require('mysql')
var router = express.Router()

var connection = mysql.createConnection({
    host:'192.168.128.112',
    port:'3306',
    user:'root',
    password:'root',
    database:'shop'
})
connection.connect() //连接数据库
//列表页商品数据
router.get('/list',function (req,res) {
    var query1 ="select * from shop_goods"
    connection.query(query1,function(err,result){
        if(err)throw err;
        console.log(result)
        if(result.length==0){
            res.json({'status':"500",'message':"服务器错误"});
        }else{
            res.json({'status':"200",'message':"success","data":result});
        }
    })
})
module.exports = router;