import express, { Application } from "express";
import cors, { CorsOptions } from "cors";
import Routes from "./routes";
import mongoose from "mongoose";
import bodyParser from "body-parser";

export default class Server {
  constructor(app: Application) {
    this.config(app);
    this.mongoConnect();    
    new Routes(app);
  }

  private config(app: Application): void {
    const corsOptions: CorsOptions = {
      origin: "http://localhost:4200" 
    };

    app.use(cors(corsOptions));
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
  }

  //configure mongoose
  public mongoConnect() {
    //const database = "process.env.MONGO_URL ? process.env.MONGO_URL : 'mongodb://127.0.0.1:27017/garages";
    //const database = "process.env.MONGO_URL ? process.env.MONGO_URL : 'mongodb://localhost:27017/garages";
    const database = 'mongodb://localhost:27017/garages';
    
    const connect = async () => {
      await mongoose
        .connect(database)
        .then(() => console.log(`Database connection successful.....`))
        .catch((error) => {
          console.log("Unable to connect to the db: " + error.message);
          return process.exit(1);
        });
    };


    connect();
    mongoose.connection.on("disconnected", () => {
      console.log(`Db disconnected`);
    });
  }

  public closeConnection()
  {    
    mongoose.connection.close();    
  }
}
