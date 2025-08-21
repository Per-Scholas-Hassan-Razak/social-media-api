const client = require("../clients/mongoClient");

const connectToMongoDB = async () => {
    await client.connect();
    await client.db("admin").command({ ping: 1 });
    return client;
};

module.exports = connectToMongoDB
