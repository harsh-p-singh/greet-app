const express = require('express');
const router = express.Router();

router.get('/greet', (req, res) => {
    const name = req.query.name;
    if (!name) {
        return res.json({ error: 'Name is required.' });
    }
    return res.json({ message: `Hello, ${name}! Welcome to Younglabs.` });
});

module.exports = router;
