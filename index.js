const express = require('express')
const app = express();
const path = require('path')
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const routes= require('./routes');

const port = 3000

/* ignore next */
if (!module.parent) {
  app.use(logger('dev'));
}

app.set('view engine', 'pug')

app.use('/', routes);
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }))
app.use('/static', express.static(path.join(__dirname, 'public')))



// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})