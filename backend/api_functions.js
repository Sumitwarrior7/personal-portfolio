const axios = require('axios');
require('dotenv').config();



// ----------------------------------------------------------- Unsplash API -----------------------------------------------------------
// Requires variables for the unsplash api
const apiUrl = 'https://api.unsplash.com/photos/random'
const accessKey = process.env.UNSPLASH_ACCESS_KEY
const secretKey = process.env.UNSPLASH_SECRET_KEY
const query = 'darkness';
const orientation = 'portrait';
const contentFilter = "high"
const count = 1;

// When using Async-Await functions, dont use Promises instead use try-catch
const getPhoto = async () => {
  try {
    const response = await axios.get(apiUrl, {
      params: {
        query: query,
        orientation: orientation,
        content_filter: contentFilter,
        count: count,
      },
      headers: {
        Authorization: `Client-ID ${accessKey}`
      }
    });
    // All Unsplash image urls
    const image_urls = response.data[0].urls;
    const regular_img = image_urls.regular
    const small_img = image_urls.small

    console.log("Unsplash Image :", regular_img)
    return regular_img;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};





// ----------------------------------------------------------- Quotes API -----------------------------------------------------------
const category = 'success';
const apiKey = process.env.QUOTES_API_KEY;


const getQuote = async () => {
  try {
    const response = await axios.get('https://api.api-ninjas.com/v1/quotes', {
      params: {
        category: category
      },
      headers: {
        'X-Api-Key': apiKey
      }
    })
    const quote = response.data[0].quote
    console.log("Response :", quote)
    return quote
  } 
  catch (error) {
    console.error('Error occured:', error);
    throw error;
  }
}



module.exports = {getQuote, getPhoto}
