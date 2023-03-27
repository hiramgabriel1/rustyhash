import { Router } from "express";
import { hashPassword } from "../controllers/hashPassword.js";

const router = Router();

router.get("/hash/:password", hashPassword)

router.get("/", (req, res) => {
  res.json({ message: "nada" });
});

export default router;
