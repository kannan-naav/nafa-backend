const express = require('express');
const router = express.Router();

const UserController = require('../controllers/UserController');
const { ensureAuth, ensureRole } = require('../middlewares/authHandler');

router.post('/register', UserController.register);
router.post('/login', UserController.login);
router.post('/logout', ensureAuth, UserController.logout);
router.get('/profile', ensureAuth, UserController.getProfile);
router.put('/profile', ensureAuth, UserController.updateProfile);
router.delete('/profile', ensureAuth, ensureRole('admin'), UserController.deleteUser);

module.exports = router;