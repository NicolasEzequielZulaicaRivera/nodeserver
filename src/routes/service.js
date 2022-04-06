import { Router } from "express";

const router = Router();

router.get("/", async (req, res) => {
  res.status(500).json({
    data: {
      message: "Pending Implementation",
    },
  });
});

export default router;
