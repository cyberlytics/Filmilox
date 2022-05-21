const jwt = require("jsonwebtoken");

const auth = async (req, res, next) => {
    try {
        const token = req.header("x-auth-token");
        if (!token)
            return res.status(401).json({
                msg: "No authentications token, authorisation Denied.",
            });

        const verified = jwt.verify(token, process.env.JWT_SECTRETS);

        if (!verified)
            return res.status(401).json({
                msg: "Token Verification failed, authorisation Denied.",
            });

        req.user = verified.id;

        next();
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

module.exports = auth;
