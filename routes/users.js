const express = require('express');
const router = express.Router();

const {register} = require('../controllers/users');

router.get('/login', (req, res) => {
    res.render('login')
})
router.get('/register', (req, res) => {
    res.render('register');
})
router.post('/register', register);

module.exports = router;