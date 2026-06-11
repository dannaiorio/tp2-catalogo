import { verifyToken } from "../utils/jwt.js";

const authMiddleware = (req, res, next) => {
    const token = req.headers.authorization?.split(" ")[1];
    
    if (!token) return res.status(401).json({ success: false, message: "Token requerido" });

    try {
        const decoded = verifyToken(token);
        req.usuario = decoded;
        next();
    } catch (error) {
        res.status(401).json({ success: false, message: "Token inválido o expirado" });
    }
};

export default authMiddleware;