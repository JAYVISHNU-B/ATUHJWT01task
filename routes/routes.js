import express from "express";
import {registerUser, loginUser, getUserInfo } from "../controllers/controller.js";
import verifyToken from "../middlewares/middleware.js";

const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/me', verifyToken, getUserInfo);

export default router;
