
const isAdmin = (req, res, next) => {
    if (req.usuario.rolId !== 1) {
        return res.status(403).json({
            success: false, message: "No estas autorizado."
        })
    }
    next();
};

export default isAdmin; 