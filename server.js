const express = require('express')
const ShortUrl = require('./models/shortUrl')
const connectDB = require('./config/db');
const routes = require("./routes/routes")

const app = express()
connectDB();
app.use(express.json());
app.use(express.urlencoded({ extended: false }))
app.use("/api/",routes)


app.listen(process.env.PORT || 3010);