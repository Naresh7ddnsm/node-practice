/* Loading the environment variables from the file config.env. */
require('dotenv').config({path: "./config.env"})

var createError = require('http-errors');
const express = require('express')
const app = express();
const path = require('path')
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const connectDB = require("./config/db");

const routes= require('./routes');

/* ignore next */
if (!module.parent) {
  app.use(logger('dev'));
}

/* Connecting to the database. */
connectDB();

app.use(cookieParser());
app.use(express.urlencoded({ extended: true }))
app.use('/static', express.static(path.join(__dirname, 'public')))


/* Setting the view engine to pug. */
app.set('view engine', 'pug')


app.use((req, res, next) => {
  // We can check the updates that need before route change
  next();
})
 
/* Telling the app to use the routes in the routes folder. */
app.use('/', routes);

// catch 404 and forward to err handler
app.use((req, res, next)=>{
  next(createError(404));
});

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  res.status(err.status || 500);
  res.render('error');
});

/* Setting the port to the environment variable PORT or 3000 if the environment variable is not set. */
const PORT = process.env.PORT || 3000;

/* Listening to the port 3000. */
app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})