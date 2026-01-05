import jwt  from "jsonwebtoken";

function authenticate(req, res, next) {
    const { username, password } = req.query;
    const token = req.headers['authorization'].split(" ")[1];
    
    if (!token) {
        return res.status(401).send("Access Denied: No Token Provided!");
    }

    try {
        const decoded = jwt.verify(token, "Se5ret");
        if (decoded.username !== username || decoded.password !== password) {
            return res.status(401).send("Access Denied: Invalid Token!");
        }       
        next();
    } catch (err) {
        return res.status(400).send("Invalid Token");
    }
}

export default authenticate;    