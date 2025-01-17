import express from "express";
import passport from "passport";
import { url } from "../controllers/index.js";
import { authenticate, rateLimiter } from "../middlewares/index.js";

const router = express.Router();

// URL Shortening Route

router.post("/shorten", rateLimiter, authenticate, url.shortenUrl);

export default router;

