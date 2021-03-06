const cors = require('cors');
const path = require('path');
const logger = require('morgan');
const express = require('express');
const createError = require('http-errors');
const cookieParser = require('cookie-parser');

const app = express();

require('dotenv').config();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({
  extended: false
}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Cors
app.use(cors({
  credentials: true,
  origin: ['http://localhost:3000'],
}));

// Routes
const indexRouter = require('./routes/index');
const category = require('./routes/category');
const items = require('./routes/items');

app.use('/api/category', category);
app.use('/api', indexRouter);
app.use('/api/items', items);

// If no routes match, send them the React HTML.
app.use((req, res, next) => {
  res.sendFile(__dirname + "/public/index.html");
});

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  
  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;