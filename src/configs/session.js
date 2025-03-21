import session from "express-session"
import dotenv from 'dotenv';
dotenv.config();

const SESSION_SECRET = process.env.SESSION_SECRET

const sessionExpress = session({
    secret: SESSION_SECRET,
    resave: true,
    saveUninitialized: true,
    cookie: { maxAge: 10 * 60000 },
})


export default sessionExpress