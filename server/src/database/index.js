const mysql = require('mysql2');

var connMySQL = () => {
    return connection = mysql.createPool({
        host     : 'localhost',
        user     : 'root',
        password : '123456',
        database : 'todoList'
      });
};

module.exports = connMySQL;