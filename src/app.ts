import express from 'express'
import morgan from 'morgan';
import cors from 'cors';
import userRoutes from "./routes/user.router";
import containerRoutes from "./routes/container.router";
import provinceRoutes from "./routes/province.router"

import passportMiddleware from './middlewares/passport';
import passport from 'passport'

const app = express()
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());

app.use(express.urlencoded({extended: false}));
app.use(passport.initialize());
passport.use(passportMiddleware);


app.use("/api", userRoutes);
app.use("/api", containerRoutes);
app.use("/api", provinceRoutes);

export default app;
