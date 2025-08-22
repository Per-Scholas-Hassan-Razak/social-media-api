require("dotenv").config();
const express = require("express");
const app = express();
const port = 3001;
const { MongoClient } = require("mongodb");
const uri = process.env.MONGO_URI;

const client = new MongoClient(uri);

const connectToServer = async () => {
  try {
    await client.connect();
    await client.db("admin").command({ ping: 1 });
    console.log("Connected to Atlas DB");

    app.get("/", async (req, res) => {
      const databaseList = await client.db().admin().listDatabases();
      res.json({ message: "Connected!", databases: databaseList });
    });

    app.listen(port, () => {
      console.log(`Server running on http://localhost:${port}`);
    });
  } catch (error) {
    console.error("MongoDB Connection Error!", error.message)
    process.exit(1)
  }
};

process.on("SIGINT", async () => {
  await client.close();
  console.log("🔌 MongoDB connection closed.");
  process.exit(0);
});

connectToServer();
