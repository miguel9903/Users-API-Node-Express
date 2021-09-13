const titleCase = (req, res, next) => {
    const userData = req.body;
    userData.nombre = userData.nombre.toLowerCase().split(' ').map(p => p.charAt(0).toUpperCase() + p.slice(1)).join(' ');
    next();
}

module.exports = {
    titleCase
}