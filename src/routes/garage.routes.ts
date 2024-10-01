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
        this.router.post("/", this.controller.createGarage);
        //this.router.post("/", this.controller.create);

        // Retrieve all Garages from API   
        this.router.get("/", this.controller.getAllAPIGarages);

        // Retrieve all Garages    
        this.router.get("/getAllGarages", this.controller.getAllGarages);
        //this.router.get("/", this.controller.findAll);
        
        this.router.post("/create", this.controller.createAllGarages);

        // Retrieve a single Garage with id
        // this.router.get("/:id", this.controller.findOne);

        // // Update a Garage with id
        // this.router.put("/:id", this.controller.update);

        // // Delete a Garage with id
        // this.router.delete("/:id", this.controller.delete);
    }
}

export default new GarageRoutes().router;
