const express = require('express');
const cors = require('cors');
const countryRoutes = require('./routes/country');

const app = express();
app.use(cors());

app.use("/countries", countryRoutes);

app.listen(3000, function() {
  console.log('escutando a porta 3000')
});