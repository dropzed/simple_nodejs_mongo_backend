const Router = require("express");
const router = new Router();
const controller = require("./authController.js");
const {check} = require("express-validator");
const authMiddleware = require("./middleware/authMiddleware.js");
const roleMiddleware = require("./middleware/roleMiddleware.js");

router.post('/reg', [
    check('username', 'Username field cannot be clear').notEmpty(),
    check('password', 'Password field cannot be empty').isLength({min: 8, max: 10}),
], controller.registration)
router.post('/login', controller.login)
router.get('/users', roleMiddleware(["USER", "ADMIN"]), controller.getUsers)



module.exports = router;