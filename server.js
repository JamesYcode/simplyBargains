const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const logger = require('morgan');
const PORT = process.env.PORT || 4000

const app = express();
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello World');
});

// app.use('/users', userRouter);
//
// app.use('/products', productRouter);
//
// app.use('/reviews', reviewRouter);


app.listen(PORT, ()=> console.log('listening on 4000'));
