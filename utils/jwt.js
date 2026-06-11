import jwt from 'jsonwebtoken';
import { JWT_SECRET } from '../config/config.js';

export const generateToken = (payload) => {
  const token = jwt.sign(payload, JWT_SECRET);
    return token;
};


export const verifyToken = (token) => {
  return jwt.verify(token, JWT_SECRET);
};

export { generateToken, verifyToken };