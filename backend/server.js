import express from 'express';
import mongoose from 'mongoose';
import data from './data.js';
import productRouter from './routes/productRouter.js';
import userRouter from './routes/userRouter.js';

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
mongoose.set('strictQuery', false);
mongoose.connect(
  process.env.MONGODB_URL || 'mongodb://localhost/amazona_html_temp',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

app.use('/api/users', userRouter);
app.use('/api/products', productRouter);

app.get('/', (req, res) => {
  res.send('Server is ready');
});

app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message });
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server at http://localhost:${port}`);
});
