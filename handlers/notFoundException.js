module.exports = (res, error) => {
    res.status(404).json({
        message: error.message ? error.message : error
    })
}