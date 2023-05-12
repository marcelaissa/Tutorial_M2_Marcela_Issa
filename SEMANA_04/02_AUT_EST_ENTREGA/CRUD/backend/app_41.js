const express = require('express'); 
const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({ extended: false })

const sqlite3 = require('sqlite3').verbose();
const DBPATH = '../data/curriculo.db';

const hostname = '127.0.0.1';
const port = 3000;
const app = express();

/* Colocar toda a parte estática no frontend */
app.use(express.static("../frontend/"));

/* Definição dos endpoints */
/******** CRUD ************/
app.use(express.json());

// Retorna todos registros (é o R do CRUD - Read)
app.get('/Pessoa', (req, res) => {
    res.statusCode = 200;
    res.setHeader('Access-Control-Allow-Origin', '*');
    var db = new sqlite3.Database(DBPATH); // Abre o banco
    var sql = 'SELECT * FROM Pessoa ORDER BY Nome COLLATE NOCASE';
        db.all(sql, [],  (err, rows ) => {
            if (err) {
                throw err;
            }
            res.json(rows);
        });
        db.close(); // Fecha o banco
});

// Insere um registro (é o C do CRUD - Create)
app.post('/Pessoa', urlencodedParser, (req, res) => {
    res.statusCode = 200;
    res.setHeader('Access-Control-Allow-Origin', '*'); 
    var db = new sqlite3.Database(DBPATH); // Abre o banco
    sql = "INSERT INTO Pessoa (Nome, Foto) VALUES ('" + req.body.Nome + "', '" + req.body.Foto + "')";
    console.log(sql);
    db.run(sql, [],  err => {
        if (err) {
            throw err;
        }	
    });
    res.write('<p>PESSOA INSERIDA COM SUCESSO!</p><a href="/">VOLTAR</a>');
    db.close(); // Fecha o banco
    res.end();
});

// Monta o formulário para o update (é o U do CRUD - Update)
app.get('/Pessoa', (req, res) => {
    res.statusCode = 200;
    res.setHeader('Access-Control-Allow-Origin', '*'); 
    sql = "SELECT * FROM Pessoa WHERE Id_Pessoa="+ req.query.Id_Pessoa;
    console.log(sql);
    var db = new sqlite3.Database(DBPATH); // Abre o banco
    db.all(sql, [],  (err, rows ) => {
        if (err) {
            throw err;
        }
        res.json(rows);
    });
    db.close(); // Fecha o banco
});

// Atualiza um registro (é o U do CRUD - Update)
app.post('/Pessoa', urlencodedParser, (req, res) => {
    res.statusCode = 200;
    res.setHeader('Access-Control-Allow-Origin', '*'); 
    sql = "UPDATE Pessoa SET Nome='" + req.body.Nome + "', Foto = '" + req.body.Foto + "' WHERE Id_Pessoa ='" + req.body.Id_Pessoa + "'";
    console.log(sql);
    var db = new sqlite3.Database(DBPATH); // Abre o banco
    db.run(sql, [],  err => {
        if (err) {
            throw err;
        }
        res.end();
    });
    res.write('<p>PESSOA ATUALIZADA COM SUCESSO!</p><a href="/">VOLTAR</a>');
    db.close(); // Fecha o banco
});

// Exclui um registro (é o D do CRUD - Delete)
app.get('/Pessoa', urlencodedParser, (req, res) => {
    res.statusCode = 200;
    res.setHeader('Access-Control-Allow-Origin', '*'); 
    sql = "DELETE FROM Pessoa WHERE Id_Pessoa='" + req.query.Id_Pessoa + "'";
    console.log(sql);
    var db = new sqlite3.Database(DBPATH); // Abre o banco
    db.run(sql, [],  err => {
        if (err) {
            throw err;
        }
        res.write('<p>PESSOA REMOVIDA COM SUCESSO!</p><a href="/">VOLTAR</a>');
        res.end();
    });
    db.close(); // Fecha o banco
});

app.listen(port, hostname, () => {
console.log(`Servidor rodando em http://${hostname}:${port}/`);
});

app.get('/Dados_Pessoais', (req, res) => {
    res.statusCode = 200;
    res.setHeader('Access-Control-Allow-Origin', '*');
    var db = new sqlite3.Database(DBPATH); // Abre o banco
    var sql = 'SELECT * FROM Dados_Pessoais ORDER BY Id_Pessoa COLLATE NOCASE';
        db.all(sql, [],  (err, rows ) => {
            if (err) {
                throw err;
            }
            res.json(rows);
        });
        db.close(); // Fecha o banco
});

app.get('/Realizacoes', (req, res) => {
    res.statusCode = 200;
    res.setHeader('Access-Control-Allow-Origin', '*');
    var db = new sqlite3.Database(DBPATH); // Abre o banco
    var sql = 'SELECT * FROM Realizacoes ORDER BY Nome_realizacoes COLLATE NOCASE';
        db.all(sql, [],  (err, rows ) => {
            if (err) {
                throw err;
            }
            res.json(rows);
        });
        db.close(); // Fecha o banco
});

app.get('/Formacoes', (req, res) => {
    res.statusCode = 200;
    res.setHeader('Access-Control-Allow-Origin', '*');
    var db = new sqlite3.Database(DBPATH); // Abre o banco
    var sql = 'SELECT * FROM Formacoes ORDER BY Nome_formacoes COLLATE NOCASE';
        db.all(sql, [],  (err, rows ) => {
            if (err) {
                throw err;
            }
            res.json(rows);
        });
        db.close(); // Fecha o banco
});

app.get('/Idiomas', (req, res) => {
    res.statusCode = 200;
    res.setHeader('Access-Control-Allow-Origin', '*');
    var db = new sqlite3.Database(DBPATH); // Abre o banco
    var sql = 'SELECT * FROM Idiomas ORDER BY Nome_Idioma COLLATE NOCASE';
        db.all(sql, [],  (err, rows ) => {
            if (err) {
                throw err;
            }
            res.json(rows);
        });
        db.close(); // Fecha o banco
});

app.get('/Habilidades', (req, res) => {
    res.statusCode = 200;
    res.setHeader('Access-Control-Allow-Origin', '*');
    var db = new sqlite3.Database(DBPATH); // Abre o banco
    var sql = 'SELECT * FROM Habilidades ORDER BY Nome_habilidades COLLATE NOCASE';
        db.all(sql, [],  (err, rows ) => {
            if (err) {
                throw err;
            }
            res.json(rows);
        });
        db.close(); // Fecha o banco
});

app.get('/Projetos', (req, res) => {
    res.statusCode = 200;
    res.setHeader('Access-Control-Allow-Origin', '*');
    var db = new sqlite3.Database(DBPATH); // Abre o banco
    var sql = 'SELECT * FROM Projetos ORDER BY Nome_Projetos COLLATE NOCASE';
        db.all(sql, [],  (err, rows ) => {
            if (err) {
                throw err;
            }
            res.json(rows);
        });
        db.close(); // Fecha o banco
});

app.get('/Experiencias', (req, res) => {
    res.statusCode = 200;
    res.setHeader('Access-Control-Allow-Origin', '*');
    var db = new sqlite3.Database(DBPATH); // Abre o banco
    var sql = 'SELECT * FROM Experiencias ORDER BY Nome_experiencia COLLATE NOCASE';
        db.all(sql, [],  (err, rows ) => {
            if (err) {
                throw err;
            }
            res.json(rows);
        });
        db.close(); // Fecha o banco
});
