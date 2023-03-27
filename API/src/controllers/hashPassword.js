// GET password and hash password
export const hashPassword = (req, res) => {
    // get password
  const password = req.params.password;
  
  // return password  
  res.json({ 
        message: password 
    });

    // console.log(password);
};

// POST password and save password in a simple file
export const savePasswordNotes = (req, res) => {
    const password = req.params.password;
    
}