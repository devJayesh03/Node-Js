const express = require('express');
require('dotenv').config()
const server = express();
const router = require('./routes/routes')
server.use(express.json());
const mongoose = require('mongoose');

// const process = require('.')

const cors = require('cors')

main().catch(err => console.log(err))

async function main() {
    await mongoose.connect(process.env.MONGO_DB_URL);
    console.log("Database Connected");

}


server.use(cors({
    origin: '*'
}));

server.use(express.static(process.env.PUBLIC_DIR))

server.use('/', router.router);

server.listen(8080, () => {
    console.log('Server Started');
})
