// Imports
const express = require("express");
const cors = require("cors");

//Import Routers

const itemRouter = require("./item/item.router")

// Porta do servidor
const port = process.env.PORT || 3000;

async function main() {
  // Cria o servidor `express`
  const app = express();

  // Middlewares
  app.use(cors());
  app.use(express.json());

  // Rota principal
  app.get("/", (req, res) => {
    res.send("Hello World!");
  });

  // Inicialização dos `Routers`
  app.use("/item", itemRouter);

  //Exercicio criar o Router de Categoria, com os endpoints ReadAll e Create

  // Category -> tera apenas name
  

  // Inicia o servidor
  app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
  });
}

main().catch((err) => console.error("Um erro inesperado ocorreu.\n", err));
