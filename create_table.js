var mysql = require('mysql2');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "n_mydb"
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    var sql = "CREATE TABLE preguntas (id INTEGER AUTO_INCREMENT PRIMARY KEY,pregunta VARCHAR(255));"
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("Table created");
    });
    var sql_2="CREATE TABLE respuestas (id INTEGER AUTO_INCREMENT PRIMARY KEY, pregunta_id INTEGER REFERENCES preguntas,opciones VARCHAR(255),es_correcto BOOLEAN);";
    con.query(sql_2, function (err, result) {
        if (err) throw err;
        console.log("Table created");
    });
});