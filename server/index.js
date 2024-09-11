  const express = require('express');
  const mongoose = require('mongoose');
  const bodyParser = require('body-parser');
  const cors = require('cors');
  const user = require('./router/User')
  const app = express();
  const port = process.env.PORT || 5000;
  const { config } = require('dotenv');
  const feedbackRouter = require('./router/feedback'); 
  // Middleware

  config();
  app.use(cors());
  app.use(bodyParser.json());

  // MongoDB Connection
  mongoose.connect('mongodb+srv://baxidaksh2004:dyJ7ahVnmgpOSV8M@cluster1.ifj4u.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }).then(() => console.log('MongoDB connected'))
    .catch((err) => console.log(err));

    app.use('/api/feedback', feedbackRouter);
  app.use('/api/user',user);

  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
