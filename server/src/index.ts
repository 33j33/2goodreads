import express from "express";
import bookRouter from "./routes/book.routes";
import ratingRouter from "./routes/rating.route";

const app = express();

app.use(express.json());

app.use("/books", bookRouter);
app.use("/ratings", ratingRouter);

const server = app.listen(3000, () =>
  console.log(`Server ready at: http://localhost:3000`)
);
