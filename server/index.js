const express = require("express");
const cors = require("cors");
const userRoutes = require("./routes/routes");

const app = express();

app.use(express.json());
app.use(cors());

const port = 8800;

app.use("/", userRoutes);

app.listen(port, () => {
  console.log(`Escutando a porta ${port}`);
});
