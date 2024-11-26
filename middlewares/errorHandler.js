// middlewares/errorHandler.js

const errorHandler = (err, req, res, next) => {
    if (err) {
        res.status(500).send(err.message);
    } else {
        res.send("Success");
    }
};

module.exports = errorHandler;
