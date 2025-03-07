const express = require('express');
const cors = require('cors');
const greetRoutes = require('./routes/greetRoute');

const app = express();
const port = 8000;

app.use(cors());
app.use('/api', greetRoutes);

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
