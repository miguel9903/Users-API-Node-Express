const validateEmptyFields = (req, res, next) => {
    const invalidProps = Object.values(req.body).filter(prop => prop.length == 0);
    if(invalidProps.length == 0) next();
    else {
        res.json({
            message: 'Empty fields are not allowed'
        });
    }
}

module.exports = {
    validateEmptyFields
};