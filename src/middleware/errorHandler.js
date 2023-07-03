const notFoundHandler = (_req, res, next) => {
    res.status(404).json({message: "Page not found!"})
    next()
}

const errorHandler = (err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send('Something broke!')
}

module.exports = { notFoundHandler, errorHandler }