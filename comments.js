// Create web server

// 1. Create web server
// 2. Create router
// 3. Create API
// 4. Create DB
// 5. Connect DB and API
// 6. Create front-end
// 7. Connect front-end and API

// 1. Create web server
const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
const publicPath = path.join(__dirname, '../public');
const cors = require('cors');

// 2. Create router
const apiRouter = require('./routes/api');

// 5. Connect DB and API
const db = require('./models');

// 3. Create API
// 4. Create DB
// 5. Connect DB and API
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(publicPath));
app.use(cors());

app.use('/api', apiRouter);

// 6. Create front-end
// 7. Connect front-end and API

// 1. Create web server
db.sequelize.sync().then(() => {
  app.listen(port, () => {
    console.log(`Server is running on ${port}`);
  });
});