const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

dotenv.config();
connectDB();

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("BudgetBasket API is running");
});

app.use("/api/items", require("./routes/items"));
app.use("/api/prices", require("./routes/prices"));
app.use("/api/basket", require("./routes/basket"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});