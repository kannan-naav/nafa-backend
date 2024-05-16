const passport = require('passport');

module.exports = {
    ensureAuth: function (req, res, next) {
        passport.authenticate('jwt', { session: false }, (err, user, info) => {
            if (err) {
                console.error(err);
                return res.status(500).json({ message: 'Server Error' });
            }
            if (!user) {
                return res.status(401).json({ message: 'Not Authorized' });
            }
            req.user = user;
            next();
        })(req, res, next);
    },

    ensureRole: function (...roles) {
        return (req, res, next) => {
            if (!req.user) {
                return res.status(401).json({ message: 'Not Authorized' });
            }
            if (!roles.includes(req.user.role)) {
                return res.status(403).json({ message: 'Forbidden' });
            }
            next();
        };
    },
};