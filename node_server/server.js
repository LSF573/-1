const http=require("http")
const url=require('url');
const querystring=require('querystring');
const fs=require('fs');
var server = http.createServer(function(req, res){ 
    //req：接收到的数据。 res：响应数据   
    let {pathname,query}=url.parse(req.url,true);
    // post
    let str="";
    // on 监听数据的传输
    req.on('data',data=>{
        str+=data;
    });
    req.on('end',()=>{
        // ?
        let post=querystring.parse(str);
        // ?
        let {user,pass}=query;
        switch(pathname){
            case '/res':
            if(!user){
                res.write('{"err":1,"msg":"请输入用户名"}');
            }else if(!pass){
                res.write('{"err":1,"msg":"请输入密码"}')
            }else if(!/^\w{8,32}$/.test(user)){
                res.write('{"err":1,"msg":"输入用户名格式不正确"}');
            }else if(/['|"]$/.test(pass)){
                res.write('{"err":1,"msg":"密码格式错误"}');

            }else if(users[user]){
                res.write('{"err":1,"msg":"用户名已存在"}');
            }else{
                users[user]=pass;
                res.write('{"err":0,"msg":"成功"}');
            }
            res.end();
            break;
            case '/login':
            if(!user){
                res.write('{"err":1,"msg":"请输入用户名"}');
            }else if(!pass){
                res.write('{"err":1,"msg":"请输入密码"}')
            }else if(!/^\w{8,32}$/.test(user)){
                res.write('{"err":1,"msg":"输入用户名格式不正确"}');
            }else if(/['|"]$/.test(pass)){
                res.write('{"err":1,"msg":"密码格式错误"}');

            }else if(!users[user]){
                res.write('{"err":1,"msg":"用户名不存在"}');
            }else if(users[user]!=pass){
               
                res.write('{"err":0,"msg":"用户名或密码错误"}');
            }else{
                res.write('{"err":0,"msg":"登录成功"}');
            }
            res.end();
            break;
            default:
            fs.readFile(`www${pathname}`,(err,data)=>{
                if(err){
                    res.writeHeader(404);
                    res.write('Not Found');
                }else{
                    res.write(data);
                }
                res.end();
            });
        }

    });
	
});


//这个对象有个叫做listen的方法，这个方法可以有个数值参数。
//指定这个HTTP服务器监听的端口号。
//当我们打开http://localhost:8080的时候，服务器就会接收数据，并且响应数据
server.listen(8088);

console.log('服务器已打开，可以运行 http://localhost:8080');