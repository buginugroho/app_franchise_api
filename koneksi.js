var mysql = require('mysql');

//buat koneksi database
const conn = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'db_app_franchise'
});

conn.connect((err)=>{
    if(err) throw err;
    console.log('MySQL terkoneksi');
});

module.exports = conn;