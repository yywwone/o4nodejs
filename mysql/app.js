
let http = require('http');

// 使用第三方模块来操作mysql数据库
let mysql = require('mysql');

// 通过 mysql 模块提供的方法
// 实现对mysql数据库的操作
// 方法如下:
// a) 连接数据库

let connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '123456',
    database : 'wish'
});

// b) 执行sql语句
// select * from lists;
connection.query('select * from lists', (err, rows) => {
    if(!err) {
        // console.log(rows);
    }
});

// insert into (id, username, content, no, datetime) values(null, 'web', '哈哈哈', 123123, '2017-10-27 12:03:06')
// connection.query('insert into lists (id, username, content, no, datetime) values(null, "web", "哈哈哈", 123123, "2017-10-27 12:03:06")');

// 查询 用户名为 itcast 的用户
// select * from lists where username = 'itcast';

let username = 'itcast';
let no = 21321;

// 为避免字符串的拼接，mysql 模块进行封装处理
// 可以使用 ? 充当一个占位符，表示此处将来会替换一个变量
connection.query("select * from lists where username = ? and no = ?", [username, no], (err, rows) => {
    // console.log(rows);
});

// 如果数据是对象会将对像转成  key=val,key1=val1...
// 此语没有结果输出
let s = connection.query('select * from lists where ?', {username: username, no: no}, (err, rows) => {
    // console.log(rows);
});

// 通过 query 方法的返回，可以获得
// query 真正执行 sql 语句
// console.log(s.sql);

// 插入
// insert into lists set key=val, key1=val1。。。

let app = http.createServer();

app.listen(3000, (err) => {
    if(!err) {
        console.log('服务器在端口 3000 启动成功！');
    }
})

app.on('request', (req, res) => {

    res.end('study mysql');
})