var sqlite3 = require('sqlite3').verbose();
//source de data base
const DBSource = 'caritas_db.db';

let db = new sqlite3.Database(DBSource, (err)=>{
    if(err){
        console.error(err.message);
        throw err;
    }else{
        console.log("Conectado a la base de datos");
    }
});

module.exports = db;
