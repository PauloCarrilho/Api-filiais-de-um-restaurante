const Filial = require("../models/modelsFilial");
const dao = require("../DAO/dao");
const loja = (app, dbFilial) => {
  const newDao = new dao(dbFilial);
  app.get("/loja", async (req, res) => {
    try {
      const response = await newDao.retornaFilial()
      res.status(200).json({ response })
    } catch (error) {
      res.status(404).json({ error });
    }
  });
  app.get("/loja/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id)
      const response = await newDao.retornaFilialId(id)
      res.status(200).json({ response })
    } catch (error) {
      res.status(404).json({ error });
    }
  });
  app.post("/loja", async (req, res) => {
    try {
      const body = req.body;
      const novaLoja = new Filial(...Object.values(body))
      const response = await newDao.incluiFilial(novaLoja)
      res.status(201).json({ response })
    } catch (error) {
      res.status(404).json({ error });
    }
  });
  app.delete("/loja/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id)
      const response = await newDao.removeFilial(id)
      res.status(200).json({ response })
    } catch (error) {
      res.status(404).json({ error });
    }
  });
  app.patch("/loja/:id", async (req, res) => {
    try {
      const body = req.body
      const id = parseInt(req.params.id)
      const novaLoja = new Filial(...Object.values(body))
      const response = await newDao.updateFilial(id, novaLoja)
      res.status(200).json({ response })
    } catch (error) {
      res.status(404).json({ error });
    }
  });
};
module.exports = loja;
