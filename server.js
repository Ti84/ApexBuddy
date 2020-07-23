const express = require('express');

const app = express();

// API Routes
app.get('/', (req, res) => res.send('Apex Api.'));
app.use('/players', require('./routes/api/players'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));