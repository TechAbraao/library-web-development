const checkAuthenticated = (req, res, next) => {
    if (req.session.username) {
        return next();
    }
    res.status(400).render("pages/template");
};

export default checkAuthenticated