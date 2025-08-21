const express = require("express");
const router = express.Router()
const {establishConnection} = require("../controllers/clusterController")


router.get('/', establishConnection)


module.exports = router