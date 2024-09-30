import express, { Application } from "express";
import Server from "./index";
import mongoose from "mongoose";

const app: Application = express();
const server: Server = new Server(app);
//const PORT: number = process.env.PORT ? parseInt(process.env.PORT, 10) : 8080;
const PORT: number = process.env.PORT ? parseInt(process.env.PORT, 10) : 3003;

app
  .listen(PORT, "localhost", function () {
    console.log(`Server is running on port ${PORT}.`);
  })
  .on("error", (err: any) => {
    if (err.code === "EADDRINUSE") {
      console.log("Error: address already in use");
    } else {
      console.log(err);
    }
  });

//configure mongoose
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


