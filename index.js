const express = require('express');
const app = express();
app.get('/', (req, res) => res.send('<h1>Canyon Youth Soccer — Fall Schedule 2026</h1><p>Saturday games at Flat Iron Mesa Park, 9:00 and 10:30.</p><p><strong>Field 3 closed for drainage repair on 14 Nov.</strong></p>'));
app.listen(process.env.PORT || 3000, () => console.log('Schedule site running'));
