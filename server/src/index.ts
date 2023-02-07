import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import bookRouter from "./routes/book.routes";
import ratingRouter from "./routes/rating.route";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

app.use("/books", bookRouter);
app.use("/ratings", ratingRouter);

const server = app.listen(process.env.PORT, () =>
  console.log(`Server ready at: http://localhost:${process.env.PORT}`)
);
