import jwt from "jsonwebtoken";
import { errorHandler } from "./error.js";
const JWT_SECRET = 'd6005cd635f32bdf34f052b2bb9680893641ef470a6f8194730eb0d75ee8f41d';
export const verifyToken = (req, res, next) => {
  const token = req.cookies.access_token;
  console.log(req.cookies);
  if (!token) return next(errorHandler(401, "Unauthorized"));

  jwt.verify(token, JWT_SECRET, (err, user) => {
    if (err) return next(errorHandler(403, "Forbidden"));

    req.user = user;
    next();
  });
};
