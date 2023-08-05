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


app.use(cors({ origin: "*", }));

// INICIALIZE NODE SERVER
app.listen({
  host: '0.0.0.0',
  port: process.env.PORT ? Number(process.env.PORT) : 3333,
})

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
