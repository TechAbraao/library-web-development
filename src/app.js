import express from 'express';
import routes from './router/router.js';
import dotenv from 'dotenv';
import bodyParser from 'body-parser'
import database from './configs/database.js';
import path from 'path';
import sessionExpress from './configs/session.js';
import flash from "connect-flash"
import session from "express-session"



dotenv.config();

const app = express();
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.json());

app.set('view engine', 'ejs');
app.set('views', './src/views');

app.use(express.static(path.resolve('public')));
const SESSION_SECRET = process.env.SESSION_SECRET
app.use(sessionExpress)
app.use(flash())
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
        console.clear()
        console.log(`\n * Server started in: http://${HOST}:${PORT} \n`);
    } catch (error) {
        console.log(`Erro ao inicializar a aplicação.\n${error}`)
    }
});
