const express = require('express');
const { mongoose  } = require('mongoose');
const { MongoClient } = require('mongodb');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv/config');
const postsRout = require('./routes/post');

//Middlewares START
app.use(cors());

app.use(bodyParser.json());
app.use('/posts',postsRout);

// app.use(auth);

// app.use('/posts',(req,res)=>{
//     console.log("This is middleware running");
// });

//Middlewares END


//Routes START
//get,post,patch,delete

// app.get('/',(req,res)=>{
//     res.send("Hello World");
// });

// app.get('/posts',(req,res)=>{
//     res.send("Hello World this is post");
// });

// now put this code in router file

//Routes END


//Connect to DB START
async function main(){
    // const client = new MongoClient(process.env.DB_CONNECTION);
    // try {
    //     // Connect to the MongoDB cluster
    //     await client.connect();
    //     console.log('connected')
    //     // Make the appropriate DB calls
    //     // await  listDatabases(client);
    // } catch (e) {
    //     console.error(e);
    // } finally {
    //     await client.close();
    // }

    mongoose.connect(process.env.DB_CONNECTION, {
        serverSelectionTimeoutMS: 30000, // 30 seconds
        socketTimeoutMS: 45000, // 45 seconds
    });


}
main().catch(console.error);

//Connect to DB END


//How to listen server
app.listen(3001);