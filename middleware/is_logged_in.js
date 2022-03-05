const isLoggedIn = (req, res, next) => {
    if (!req.session.email) {
        return error(401).json({
            message:
                'You are not authorized. Please log in or speak to Admin for permission.',
        });
    }
    next();
};

module.exports = isLoggedIn;
