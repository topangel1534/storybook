const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const axios = require('axios');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

dotenv.config();

app.use(express.json());

// parse urlencoded request body
app.use(express.urlencoded({ extended: true }));

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

app.use(
  cors({
    origin: '*',
  })
);

app.get('/api/:description/:isFantasy/:isAnime/:isPencil/:isNouveau/:isWatercolor/:isDeco/:isAcrylic', async (req, res) => {
  const data = JSON.stringify({
    key: 'G8sSXXiTmWbY7LFqZ9MqrzUIDE1ZQqL3MeVykjARGbzwKmgv7zb35NAcylY1',
    prompt: req.params.description + ', illustration' + buildDisplayStyles(req),
    negative_prompt: '',
    width: '512',
    height: '512',
    samples: '3',
    num_inference_steps: '30',
    seed: null,
    guidance_scale: 7.5,
    webhook: null,
    track_id: null,
  });

  const config = {
    method: 'post',
    url: 'https://stablediffusionapi.com/api/v3/text2img?key=G8sSXXiTmWbY7LFqZ9MqrzUIDE1ZQqL3MeVykjARGbzwKmgv7zb35NAcylY1',
    headers: {
      'Content-Type': 'application/json',
    },
    data,
  };

  try {
    const response = await axios(config);
    res.status(200).json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error });
    res.end();
  }
});

app.post('/api/authenticate', async (req, res) => {
  try {
    const { aiwp_logged_in } = req.body;
    const authUrl = process.env.REACT_APP_AUTH_URL;
    const { data } = await axios({
      method: 'post',
      url: authUrl,
      data: { aiwp_logged_in },
      headers: { 'Content-Type': 'multipart/form-data' },
    });
    res.status(200).json({ authentication: data });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error });
  }
});

app.use(express.static(path.join(__dirname, '/build')));

app.get('/*', (req, res) => {
  return res.sendFile(path.join(__dirname, '/build', 'index.html'));
});

app.listen(process.env.PORT || 5000, () => {
  console.log(`Example app listening on port 5000`);
});

const buildDisplayStyles = (request) => {
  let displayStyles = '';

  if (request.isFantasy === 'true') {
    console.log(`isFantasy: ${request.isFantasy}`);
    displayStyles += ', fantasy';
  }

  if (request.isAnime === 'true') {
    console.log(`isAnime: ${request.isAnime}`);
    displayStyles += ', anime';
  }

  if (request.isPencil === 'true') {
    console.log(`isPencil: ${request.isPencil}`);
    displayStyles += ', pencil';
  }

  if (request.isNouveau === 'true') {
    console.log(`isNouveau: ${request.isNouveau}`);
    displayStyles += ', art nouveau';
  }

  if (request.isWatercolor === 'true') {
    console.log(`isWatercolor: ${request.isWatercolor}`);
    displayStyles += ', watercolor, watercolour';
  }

  if (request.isDeco === 'true') {
    console.log(`isDeco: ${request.isDeco}`);
    displayStyles += ', art deco';
  }

  if (request.isAcrylic === 'true') {
    console.log(`isAcrylic: ${request.isAcrylic}`);
    displayStyles += ', acrylic painting';
  }

  return displayStyles;
};
