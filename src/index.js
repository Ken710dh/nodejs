const express = require('express');
const path = require('path');
const app = express();
const morgan = require('morgan');
const port = 3000;
const { engine } = require('express-handlebars');
const bodyParser = require('body-parser');
const route = require('./routes/index');
const db = require('./config/database/db');
const helpersHbs = require('./helper/helpersHbs')
// Use `.hbs` for extensions and find partials in `views/partials`.
app.engine('.hbs', engine({extname: '.hbs', 
    helpers: helpersHbs,
    partialsDir: path.join(__dirname, 'views/partials/'),
}));
app.set('view engine', '.hbs');
app.set('views', './views');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static( path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
route(app)
db.connect();
//HTTP logger
app.use(morgan(':method :url :status :res[content-length] - :response-time ms'))


app.listen(port,()=>{
  console.log('Server is running on port: ' + port);
})