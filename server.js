const express = require('express');
const app = express();
const products = require('./public/products.json');
const cors = require('cors');

app.use(cors({  origin: '*', // This allows all domains. You can restrict it to specific domains if needed.
}));

app.get('/api/products', (req, res) => {
  console.log('Products endpoint hit'); // Log when the endpoint is accessed
  res.json(products);
});

app.listen(3000, () => console.log('Server is running on port 3000'));