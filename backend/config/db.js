import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

mongoose.connect(process.env.MongoDB_URL);

const db = mongoose.connection;
db.on("open", () => {
  console.log("MongoDB Connect");
});
db.on("err", () => {
  console.log("connection failed", err);
});

export default db;
