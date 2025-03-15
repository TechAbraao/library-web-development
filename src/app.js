import express from 'express';
import routes from './router/router.js';
import dotenv from 'dotenv';
import bodyParser from 'body-parser'
import database from './configs/database.js';
import path from 'path';

dotenv.config();

const app = express();
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.json());


app.set('view engine', 'ejs');
app.set('views', './src/views');

app.use(express.static(path.resolve('public')));

const URLPrefix = "livraria";
app.use(`/${URLPrefix}/`, routes);

const HOST = process.env.HOST;
const PORT = process.env.PORT;

app.listen(PORT, async () => {
    try {
        await database.sync(({ force: false }));
        console.log(`Servidor: http://${HOST}:${PORT}/${URLPrefix}/inicio`);
    } catch (error) {
        console.log(`Erro ao inicializar a aplicação.\n${error}`)
    }
});
