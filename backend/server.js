const express = require('express');
const cors = require('cors');
const { getQuote, getPhoto } = require('./api_functions');

const app = express();
app.use(cors());


// Getting random photo
app.get('/random-photo', async (req, res) => {
  try {
    const image_url = await getPhoto();
    res.send(image_url);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).send('Internal Server Error');
  }
})


// Getting random quote
app.get('/quote', async (req, res) => {
  try {
    const quote = await getQuote();
    res.send(quote);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).send('Internal Server Error');
  }
})




// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
