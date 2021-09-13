const { Router } = require('express');
const router = Router();
const userController = require('../controllers/users');

// Middlewares
const { validateEmptyFields } = require('../middlewares/validate-fields');
const { titleCase } = require('../middlewares/transform-names');

router.get('/getUsers', userController.getUsers);
router.get('/getUser/:id', userController.getUser);
router.get('/search/:name', userController.searchUser);

router.post('/addUser', [
    validateEmptyFields, 
    titleCase 
], userController.addUser);

router.put('/putUser/:id', [
    validateEmptyFields,
    titleCase 
] , userController.putUser);

router.delete('/deleteUser/:id', userController.deleteUser);

module.exports = router;