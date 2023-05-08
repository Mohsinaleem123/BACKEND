const Users = require('./models/Users');
const mongoose = require('mongoose');const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect('mongodb+srv://MASINNERX:KfU4xdm3irxtJTVx@cluster0.3ihlz.mongodb.net/FOOD_WASTAGE?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() =>{ console.log('Connected to MongoDB');
  
  //console.log("hi")
  

})
  .catch((err) => console.error('Failed to connect to MongoDB', err));
  app.get('/users', async (req, res) => {
    try {
      console.log("tryin")  ;
      const users = await Users.find();
      res.json(users);
      console.log("in")  ;
    } catch (err) {
      console.error(err);
      res.status(500).send('Internal server error');
    }
  });
  
  const port = process.env.PORT || 3000;
  app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
  });