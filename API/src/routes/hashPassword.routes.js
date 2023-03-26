import { Router } from "express";

const router = Router();

router.get("/hash", (req, res) => {
    res.json({ message: "Hello World!" });
})



export default router;