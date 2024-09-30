import { Router } from "express";
import GarageController from "../controllers/garage.controller";

class GarageRoutes {
  router = Router();
  controller = new GarageController();

  constructor() {
    this.intializeRoutes();
  }

  intializeRoutes() {
    // Create a new Garage
    this.router.post("/", this.controller.create);

    // Retrieve all Garages
    this.router.get("/", this.controller.findAll);

    // Retrieve a single Garage with id
    this.router.get("/:id", this.controller.findOne);

    // Update a Garage with id
    this.router.put("/:id", this.controller.update);

    // Delete a Garage with id
    this.router.delete("/:id", this.controller.delete);
  }
}

export default new GarageRoutes().router;


const express = require("express");
const {
  getAllAPIGarages,  
  createAllGarages,
  getAllGarages,
  createGarage,
  getGarageById,
  updateGarage,
  deleteGarage,
} = require("../controllers/GarageController");

const router = express.Router();

router.route("/").get(getAllAPIGarages);
router.route("/").post(createAllGarages);
router.route("/getAllGarages").get(getAllGarages)
router.route("/createGarage").post(createGarage);
router.route("/:id").get(getGarageById).put(updateGarage).delete(deleteGarage);

module.exports = router;
