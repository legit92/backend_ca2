const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.post('/signup', (req, res) => {
    const { username, email, password } = req.body;

    if (!username) 
        return res.status(400).json({ error: "Username cannot be empty" });
    if (!email) 
        return res.status(400).json({ error: "Email cannot be empty" });
    if (!password || password.length < 8 || password.length > 16) {
        return res.status(400).json({ error: "Password must be 8-16 characters long" });
    }

    res.status(201).json({ message: "Signup successful!" });
});

app.listen(port, () => console.log(`Server running on port ${port}`));