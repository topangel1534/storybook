import axios from 'axios';

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

export const sdAPI = (payload) => {
  const data = JSON.stringify({
    key: 'G8sSXXiTmWbY7LFqZ9MqrzUIDE1ZQqL3MeVykjARGbzwKmgv7zb35NAcylY1',
    prompt: payload.description + ', illustration' + buildDisplayStyles(payload),
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
    mode: 'cors',
    url: 'https://stablediffusionapi.com/api/v3/text2img?key=G8sSXXiTmWbY7LFqZ9MqrzUIDE1ZQqL3MeVykjARGbzwKmgv7zb35NAcylY1',
    headers: {
      'Content-Type': 'application/json',
    },
    data,
  };

  return axios(config);
};
