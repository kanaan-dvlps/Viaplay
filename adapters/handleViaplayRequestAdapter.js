const axios = require('axios');
const { handleViaplayRequestPort } = require('../ports/handleViaplayRequestPort');

const handleViaplayRequestAdapter = async (link) => {
  try {

    const response = await axios.get(link);
    const { data } = response;
    
    const result = await handleViaplayRequestPort(data);
    return result;

  } catch (error) {

    return {
      source: 'adapters/handleViaplayRequestAdapter.js',
      status: 500,
      error: error
    };
    
  }
}

module.exports = {
  handleViaplayRequestAdapter,
}