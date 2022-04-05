import { Router } from "express";

const router = Router();

router.get("/", async (req, res) => {
  res.json({
    data: {
      message: "Pending Implementation",
    },
  });
});

export default router;
