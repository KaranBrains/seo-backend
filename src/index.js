const express = require('express');
const cors = require('cors');

require('dotenv').config({
    path: './src/config/.env'
});

const dbService = require('./db/dbService');

const app = express();

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({extended:false}));

app.use((req, res) => {
    res.status(404).json({
        success: false,
        msg: "Page not found"
    })
})

const PORT = process.env.PORT;

app.listen(PORT,()=>{
    console.log('The Server is up on PORT ' + PORT);
})