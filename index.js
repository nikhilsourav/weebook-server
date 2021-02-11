import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import postRoutes from './routes/postRoutes.js'; // main route

const PORT = process.env.PORT || 5000;
const CONNECTION_URL =
  'mongodb+srv://NikhilSourav:whatithinkCluster@whatithinkcluster.ln8db.mongodb.net/<dbname>?retryWrites=true&w=majority';

// express
const app = express();
app.use(bodyParser.json({ limit: '30mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));
app.use(cors());

// routes
app.use('/posts', postRoutes);

// mongoose
mongoose
  .connect(CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => app.listen(PORT, console.log(`server running on port ${PORT}`)))
  .catch((e) => console.log(e, `db connection error`));
