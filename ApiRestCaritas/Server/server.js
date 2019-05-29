var express = require('express');
var app = express();
var db = require('./database.js');
const router = express.Router();


//var PORT = 'https://apicaritas.herokuapp.com';

app.set('port',process.env.PORT || 8000);

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

app.listen(app.get('port'), () =>{
    console.log('Servidor corriendo en %PORT%'.replace('%PORT%',app.get('port')))
});

app.get('/',(req,res,next)=>{
	res.json({
	"Mensaje": "ok"
	})
})

app.get('/api/paciente',(req, res , next)=>{
    var sql = 'select Identidad, Nombre_Paciente, Edad , Genero, Estado_Civil, Oficio from Paciente';
    var params = [];
    db.all(sql,params,(err,rows)=>{
        if(err){
            res.status(400).json({"error": err.message})
        }
        res.json(rows);
    });
});
app.get('/api/paciente/:id',(req,res,next)=>{
    var sql = "select * from Paciente where Identidad = ?"
    var params = [req.params.id];
    db.get(sql,params,(err,row)=>{
        if(err){
            res.status(400).json({"error": err.message});
            return;
        }
        res.json(row);
    });
});

app.use(function(req,res){
    res.status(404);
});