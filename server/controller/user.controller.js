const express = require("express");
const zod = require("zod");
const { UserBeta } = require("../model/user.schema");
const router = express.Router();

const signBody = zod.object({
  email: zod.string().email(),
  name: zod.string(),
});

router.post("/signbeta", async (req, res) => {
  const result = signBody.safeParse(req.body);
  
  if (!result.success) {
    return res.status(400).json({
      message: "Invalid Input",
      errors: result.error.format(),
    });
  }

  try {
    const existingUser = await UserBeta.findOne({ email: req.body.email });

    if (existingUser) {
      return res.status(400).json({
        message: "User already exists",
      });
    }

    const user = await UserBeta.create({
      email: req.body.email,
      name: req.body.name,
    });

    res.status(201).json({
      message: "New User is successfully added for Beta",
    });
  } catch (error) {
    res.status(500).json({
      message: "An error occurred while processing your request.",
    });
  }
});

module.exports = router;