const express = require("express")
const fileUpload = require('express-fileupload');
const { notFoundHandler, errorHandler } = require("./src/middleware/errorHandler")
const connectDb = require("./src/config/db")
require("dotenv").config()

const userRoutes = require("./src/routes/userRoutes")
const authRoutes = require("./src/routes/authRoutes")
const postRoutes = require("./src/routes/postRoutes")

const app = express()

// middleware
app.use(express.json())
app.use(fileUpload({
    useTempFiles : true,
    tempFileDir : '/tmp/'
}));

// database connection
connectDb()

// home route
app.get("/", (_req, res) => {
    res.send("Welcome to blog app")
})

// Others routes
app.use("/api/auth", authRoutes)
app.use("/api/users", userRoutes)
app.use("/api/posts", postRoutes)

app.use(notFoundHandler)
app.use(errorHandler)

const port = process.env.PORT || 6000
app.listen(port, () => {
    console.log(`Server is running on port http://localhost:${port}`)
})
