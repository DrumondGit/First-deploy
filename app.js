// SERVER CONFIG
const express = require("express")
const mysql = require("mysql")
const cors = require("cors")

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true}))
app.use(cors())
app.use(express.static("public"))

// CONNECTION DATABASE CONFIG
const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "coxinha",
    database: "Goiaba",
});

//INICIALIZATION CONNECTION WITH DATABASE
connection.connect()

//CONNECTION TEST
connection.query("SELECT 1+1 AS solution", (err, rows, fields) => {
    if (err) throw err;

    console.log("The solution is: ", rows[0].solution)
});

app.use(cors({ origin: "*", }));

// INICIALIZE NODE SERVER
app.listen(5050, () => {
    console.info(`Server working!`)
});


// ROTES
app.post("/cadastro", function (req, res) {
    connection.query(
      `INSERT INTO elogio VALUES("${req.body.elogio}")`,
      (err, rows, fields) => {
        // Operação simples para testar o funcionamento
        if (err) {
          return res.json({
            tipo: "Erro de cadastro",
            mensagem: err,
          });
        }
      }
    );
});
