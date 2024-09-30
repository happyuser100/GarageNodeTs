import { Application } from "express";
import homeRoutes from "./home.routes";
import tutorialRoutes from "./tutorial.routes";
import garageRoutes from "./garage.routes";

export default class Routes {
  constructor(app: Application) {
    app.use("/api/garage", garageRoutes);    
    app.use("/api", homeRoutes);
    app.use("/api/tutorials", tutorialRoutes);
  }
}
