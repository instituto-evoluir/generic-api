import express from "express";
import auth from "./authRoutes.js";
import books from "./ItemsRoutes.js";

const routes = (app) => {
  app.route("/").get((req, res) => res.status(200).send("Sim, está tudo funcionando."));
  app.use(express.json(), auth, books);
};

export default routes;
