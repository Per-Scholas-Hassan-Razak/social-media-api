require("dotenv").config();
const express = require("express");
const app = express();
const port = 3001;
const clusterRoutes = require("./routes/clusterRoutes")

app.use("/", clusterRoutes);

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
