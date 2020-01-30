const express = require('express');
const expressLayouts = require('express-ejs-layouts');

const app = express();

app.use(expressLayouts);
app.set('view engine', 'ejs');

app.use('/', require('./routes'));
app.use('/users', require('./routes/users'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));