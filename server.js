//requirements
const path = require('path');
const express = require('express');
const session = require('express-session');
var exphbs  = require('express-handlebars');
const routes = require('./controllers');
const sequelize = require('./connection');
const helpers = require('./utils/helpers');
const app = express();
const PORT = process.env.PORT || 3001;

// Set up sessions
const sess = {
  secret: 'Super secret secret',
  resave: false,
  saveUninitialized: false,
};
app.use(session(sess));

//handlebars
const hbs = exphbs.create({ helpers });
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

//express
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`Now Listening at PORT https://localhost:${PORT}`));
});

