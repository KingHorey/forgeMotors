/* eslint-disable @typescript-eslint/no-explicit-any */
// src/index.js
import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import { Car } from "../models/cars";
import mongoose from "mongoose";

dotenv.config();

// import { MongoClient, ServerApiVersion } from "mongodb";

const port = process.env.PORT || 3004;

const mongoDb = process.env.DB || "forgeMotors";
const mongoUri = process.env.MONGO_URI || "mongodb://127.0.0.1:27017/";

const app: Express = express();
app.use(express.json());

mongoose
  .connect(mongoUri, {
    dbName: mongoDb,
  })
  .then(() => {
    console.log("connected to db");
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});

// export const client = new MongoClient(mongoUri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   },
// });

// async function startServer() {
//   try {
//     await client.connect();
//     await client.db(mongoDb).command({ ping: 1 });
//     console.log("successfully connected to DB");
//   } catch (err: any) {
//     console.error(err.message);
//     client.close();
//   }
// }

// startServer().catch(console.dir);

app.get("/get_cars", async (req: Request, res: Response) => {
  try {
    const allCars = await Car.find({});
    console.log(allCars);
    res.status(200).json(allCars);
  } catch (err: any) {
    res.status(500).json({ message: err.message });
  }
});

app.post("/add_car", async (req: Request, res: Response) => {
  try {
    const car = new Car({
      name: req.body.name,
      year: req.body.year,
      propulsion: req.body.propulsion,
      maxSpeedInMiles: req.body.maxSpeedInMiles,
      maxSpeedInKms: req.body.maxSpeedInKms,
      rangeInMiles: req.body.rangeInMiles,
      rangeInKms: req.body.rangeInKms,
      features: req.body.features,
      image: req.body.image,
    });
    car.save();
    res.status(201).json(car);
  } catch (err: any) {
    res.status(400).json({ message: err.message });
  }
});
