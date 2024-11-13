import express from "express";
import mongoose from "mongoose";
import routes from "./routes/index.mjs";  // routes api's
import cookieParser from "cookie-parser";
import session from "express-session";
import MongoStore from "connect-mongo";
import cors from "cors";
import bodyParser from "body-parser";


export function createApp() {
    const app = express();
    app.use(bodyParser.json());
    app.use(cors());
    app.use(express.json());
    app.use(cookieParser());
    app.use(session({
        secret: "userID",
        resave: false,
        saveUninitialized: false,
        cookie: {
            maxAge: 60000 * 60       // cookie span = 1 hour
        },
        store: MongoStore.create({
            client: mongoose.connection.getClient()
        })
    }));
    app.use(routes);

    return app;
}

