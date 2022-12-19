//requirements
const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs  = require('express-handlebars');
// Create a new sequelize store using the express-session package so we can store session data so user can stay logged
const SequelizeStore = require("connect-session-sequelize")(session.Store);
const sequelize = require('./config/connection');

const routes = require('./controllers');
const helpers = require('./utils/helpers');
const app = express();
const PORT = process.env.PORT || 3000;

// Set up sessions
const sess = {
  secret: 'Super secret secret',
  cookie:{},
  resave: false,
  saveUninitialized: false,
  store: new SequelizeStore({
    db: sequelize,
  }),
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

