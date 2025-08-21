const connectToMongoDB = require('../services/dbConnectionService')

const establishConnection = async(req, res) => {
      try{
        const client = await connectToMongoDB()
        const databaseList =  await client.db().admin().listDatabases();
        res.json({message:"Connected successfully", databases:databaseList})
    }catch(error){
        console.error("error in route", error)
        res.status(500).json({error:"Internal server error"})
    }
}

module.exports = {establishConnection}