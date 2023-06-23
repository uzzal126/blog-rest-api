const express = require("express")
const { PageNotFoundHandler, errorHandler } = require("./src/middlewares/errorHandler")
const connectDb = require("./src/config/db")
const app = express()
require("dotenv").config()
const userRoutes = require("./src/routes/userRoutes")
const authRoutes = require("./src/routes/authRoutes")

// middleware
app.use(express.json())

app.get("/", (_req, res) => {
    res.send("Welcome to blog app")
})

app.use("/api/auth", authRoutes)
app.use("/api", userRoutes)

app.get("*", PageNotFoundHandler)
app.use(errorHandler)

const port = process.env.PORT || 6000
app.listen(port, () => {
    console.log(`Server is running on port http://localhost:${port}`)
    // database connection
    connectDb()
})
