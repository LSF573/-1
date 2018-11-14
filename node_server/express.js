const express=require('express');
var mysql=require('mysql');
// const query=require('querystring');
const app=express();
const bodyParser = require('body-parser');
const urlencoded=app.use(bodyParser.urlencoded({
    extended:true
}));
var connection=mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'zzq_lsf',
    port: '3306'    
});
module.exports.connection=connection;

//app.use(bodyParser.json());
app.listen(8888)
// sql.connection.connect();

// var str='';
//     req.on("data",chunk=>{     //监听缓冲区中的数据，不断从缓冲区中获取数据
//         str+=chunk;
//     })
//     req.on("end",()=>{          //监听数据是否获取完成
//         console.log(str);
//     })


//查
app.post('/login/mmm',(req,res)=>{
    // console.log(req.body.user);
    if(!req.body.user){
        res.write('{"err":1,"msg":"请输入用户名"}');
    }else if(!req.body.pass){
        res.write('{"err":1,"msg":"请输入密码"}')
    }else if(!/^\w{5,13}$/.test(req.body.user)){
        // 6~13位字母数字下划线
        res.write('{"err":1,"msg":"输入用户名格式不正确"}');
    }else if(/['|"]$/.test(req.body.pass)){
        res.write('{"err":1,"msg":"密码格式错误"}');

    }else{
        var sql=`select * from login where userName='${req.body.user}' And password='${req.body.pass}'`;
        let data=connect(sql);
        // console.log(data);
    }
    res.end();
 
//  let{userN,passW}=req.body;
//  console.log(userN,passW);
})

// //增
// app.post('/insertJob',function(req,res){
//    var_data=req.body;
//    var sql='insert into login (userName,password) values ('+_data.age+','+_data.id+',"'+_data.job+'")';
//    connect(res,sql);
// });
function connect(sql){
  connection.query(sql,(err,data)=>{
    if(data){
        console.log(data);
        return data
    }else{
        console.log(err);
    }
});
}

