const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');

require('dotenv').config();

const app = express();

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/static', express.static('public'));

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.use(cookieParser())

app.use('*', (req, res) => {
    res.render('404')
});

app.listen(process.env.PORT, async() => {
    console.log('listening app at', process.env.PORT)
});