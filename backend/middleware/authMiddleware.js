import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const authMiddleware = (req, res, next) => {
  const token = req.header("Authorization");

  if (!token) return res.status(401).json({ error: "denied for access" });
  try {
    const decoded = jwt.verify(token, process.env.Jwt_secret_key);
    req.user = decoded;
    next();
  } catch (error) {
    res.status(400).json({ error: "token not valid" });
  }
};

export default authMiddleware;
