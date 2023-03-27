import bcrypt from "bcrypt";

// GET password and hash password
export const hashPassword = async (req, res) => {
  // get password
  const password = req.params.password;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    console.log(hashedPassword);
    res.json({
      hashedPassword,
    });
  } catch (err) {
    console.error(err);
  }
};

// POST password and save password in a simple file
export const savePasswordNotes = (req, res) => {
  const password = req.body.password;
};