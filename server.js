const express = require('express');
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

const app = express();
const PORT = process.env.PORT || 3001;









app.get('/api/db', (req, res) => {
    res.json(db);
  });

app.listen(3001, () => {
    console.log(`API server now on port 3001!`);
  });