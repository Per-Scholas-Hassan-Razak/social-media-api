## Social Media API 

### Project setup 

```bash
    git clone https://github.com/Per-Scholas-Hassan-Razak/social-media-api.git
    cd  social-media-api
    npm run dev 
```

### Functionality

    - server.js entry point
    - app.use middleware to route incoming request to clusterRoutes file
    - clusterRoutes invokes controller clustercontroller method establish connection
    - establishConnect() is an async function with a try catch block that invokes the service layer
    - service layer has a connectToMonogoDB method that uses the MongoClient to connect to cluster. 
    - If the connection is successful then connectToMongoDB returns a client
    - the controller res back to the browser with a success or failure message


## REFERENCES
 - [Express Docs](https://expressjs.com/en/guide/database-integration.html#mongodb)


