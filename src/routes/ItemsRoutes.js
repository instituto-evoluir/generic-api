import express from "express";
import ItemsController from "../controllers/ItemsController.js";

const routes = express.Router();

routes.get("/items", ItemsController.listAll);
routes.get("/items/:id", ItemsController.searchById);
routes.post("/items", ItemsController.create);
routes.patch("/items/:id", ItemsController.update);
routes.delete("/items/:id", ItemsController.remove);

export default routes;
