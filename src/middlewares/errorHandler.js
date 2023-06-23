const PageNotFoundHandler = (_req, res, next) => {
    res.status(404).send("Page not found!")
    next()
}

const errorHandler = (err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send('Something broke!')
}

module.exports = { PageNotFoundHandler, errorHandler }