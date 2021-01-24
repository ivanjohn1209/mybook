const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const config = require('config');
const jwt = require('jsonwebtoken');
const User = require('../../model/User')

// @route GET api/users
// @desc Register new user
// @acces public
router.post('/', (req, res) => {
    const { name, email_number, password, birth_date, gender } = req.body;
    if (!name || !email_number || !password || !birth_date || !gender) {
        return res.status(400).json({ msg: 'Please enter all fields' });
    }
    if (password.length < 6) {
        return res.status(400).json({ msg: 'Set Minimum password length to at least a value of 6' });
    }
    // Check for existing user
    User.findOne({ email_number })
        .then(user => {
            if (user) return res.status(400).json({ msg: 'User already exist' });
            const newUser = new User({
                name,
                email_number,
                password,
                birth_date,
                gender
            });
            // Create salt & hash
            bcrypt.genSalt(10, (err, salt) => {
                bcrypt.hash(newUser.password, salt, (err, hash) => {
                    if (err) throw err;
                    newUser.password = hash;
                    newUser.save()
                        .then(user => {
                            jwt.sign(
                                { id: user.id },
                                config.get('jwtSecret'),
                                { expiresIn: 3600 },
                                (err, token) => {
                                    if (err) throw err;
                                    res.json({
                                        token,
                                        user: {
                                            id: user.id,
                                            name: user.name,
                                            email_number: user.email_number
                                        }
                                    })
                                }
                            )
                        });
                })
            })
        });
});

module.exports = router;