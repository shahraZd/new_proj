const router = require("express").Router();
const User = require("../models/userModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const auth = require("../middleware/auth");

//LOGIN

router.post("/", async (req, res) => {
  try {
    const { email, password } = req.body;

    //validation

    if (!email || !password)
      return res.status(400).json({ msg: "خانات إلزامية." });

    const user = await User.findOne({ email: email });
    if (!user)
      return res
        .status(400)
        .json({ msg: "لا يوجد حساب موجود مع هذا البريد الإلكتروني." });
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch)
      return res.status(400).json({ msg: "بيانات الاعتماد غير صالحة." });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
    if (user.role === "USER") {
      res.json({
        token,
        user: {
          id: user._id,
          email: user.email,
          phone: user.phone,
          name: user.name,
          address: user.address,
          role: user.role,
        },
      });
    } else {
      res.json({
        token,
        user: {
          id: user._id,
          email: user.email,
          phone: user.phone,
          name: user.name,
          address: user.address,
          role: user.role,
          specialization: user.specialization,
          bankId: user.bankId,
          classing: user.classing,
        },
      });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
