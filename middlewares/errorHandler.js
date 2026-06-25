const errorHandler = (err, req, res, next) => {
    if (err.name === "SequelizeValidationError") {
        return res.status(400).json({ 
            success: false, 
            message: err.errors[0].message 
        });
    }
    if (err.name === "SequelizeUniqueConstraintError") {
        return res.status(400).json({ 
            success: false, 
            message: "Ya existe un registro con ese valor" 
        });
    }
    res.status(500).json({ success: false, message: err.message });
};

export default errorHandler;