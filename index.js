/*
 *
 ======= import and initialize dependencies =======
 *
*/
import express from 'express';
const app = express();
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();
const PORT = process.env.PORT || 5000;

/*
 *
 ======= configure express middleware ========
 *
*/
app.use(express.json({ limit: '30mb', extended: true }));
app.use(express.urlencoded({ limit: '30mb', extended: true }));
app.use(
  cors({
    origin: '*',
    methods: 'GET,PUT,PATCH,POST,DELETE',
    credentials: true,
  })
);

/*
 *
 ========== greetings from weebook =============
 *
*/
app.get('/', (req, res) => res.status(200).send('weebok API'));

/*
 *
 ========== import and use routes =============
 *
*/
import postRoutes from './routes/postRoutes.js';
app.use('/posts', postRoutes);

/*
 *
 ======== connect dB and start server =============
 *
*/
mongoose
  .connect(process.env.CONNECTION_URL, { dbName: process.env.DB_NAME })
  .then(() => app.listen(PORT, console.log(`server running on http://localhost:${PORT}`)))
  .catch((e) => console.log(`Unable to connect to database: ${e}`));
