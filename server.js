const express = require('express');
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

const PORT = process.env.PORT || 3001;
const app = express();










app.get('/api/db', (req, res) => {
    res.json(db);
  });

app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
  });