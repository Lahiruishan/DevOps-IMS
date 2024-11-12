
export const isAuth = (req, res, next) => {   // User authentication using session variable
    if(req.session.isAuth) {
        next();
    } else {
        //res.redirect("/");   // if not Auth forward to home page
        res.status(403).send("Auth error");
    }
}




