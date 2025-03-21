import express from 'express';
import routes from './router/router.js';
import dotenv from 'dotenv';
import bodyParser from 'body-parser'
import database from './configs/database.js';
import path from 'path';
// Sessions in Node.js
import session from 'express-session'
import flash from "connect-flash"


dotenv.config();

const app = express();
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.json());


app.set('view engine', 'ejs');
app.set('views', './src/views');

app.use(express.static(path.resolve('public')));
// Session and Flash Config
const SESSION_SECRET = process.env.SESSION_SECRET
app.use(session({
    secret: SESSION_SECRET,
    resave: true,
    saveUninitialized: true,
    cookie: { secure: false },
}))

app.use(flash())
// Middleware
app.use((req, res, next) => {
    res.locals.successMessage = req.flash("sucessMessage")
    res.locals.errorMessage = req.flash("errorMessage")
    next()
})

app.use(routes);

const HOST = process.env.HOST;
const PORT = process.env.PORT;

app.listen(PORT, async () => {
    try {
        await database.sync(({ force: false }));
        console.log(`Servidor: http://${HOST}:${PORT}/inicio`);
    } catch (error) {
        console.log(`Erro ao inicializar a aplicação.\n${error}`)
    }
});
