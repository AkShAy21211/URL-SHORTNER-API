import express from "express";
import passport from "passport";
import { url } from "../controllers/index.js";
import { authenticate, rateLimiter } from "../middlewares/index.js";

const router = express.Router();

// URL Shortening Route

router.post("/shorten", rateLimiter, authenticate, url.shortenUrl);
router.get("/:alias", rateLimiter, authenticate,url.redirectUrl);
router.get("/analytics/overall",rateLimiter, authenticate, url.getOverallAnalyticsOfUrlsByUser);
router.get("/analytics/:alias",rateLimiter, authenticate, url.getUrlAnalytics);
router.get("/analytics/topic/:topic",rateLimiter, authenticate, url.getUrlAnalyticsByTopic);

export default router;

