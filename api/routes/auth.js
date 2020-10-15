const express = require('express');
const passport = require('passport');
const router = express.Router();

//@desc Auth with Twitter
//@route GET /auth/Twitter
router.get('/twitter',
  passport.authenticate('twitter'));

// @desc Twitter Auth callback
// @route GET /auth/twitter/callback
router.get('/twitter/callback', 
  passport.authenticate('twitter', { failureRedirect: '/' }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('http://localhost:3000/auth/twitter/callback');
  });

//@desc Logout User
//@route GET /auth/logout
router.get('/logout', (req,res) => {
    req.logout();
    res.redirect('http://localhost:3000/');
});


module.exports = router;