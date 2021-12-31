const { tmdbAxiosAdapter } = require('../adapters/tmdbAxiosAdapter');

const tmdbAxiosPort = async (id) => {
  try {
    
    const trailer = await tmdbAxiosAdapter(id);
    return trailer;
    
  } catch (error) {

    return {
      source: 'ports/tmdbAxiosPort.js',
      status: 500,
      error: error
    };
    
  }
}

module.exports = {
  tmdbAxiosPort,
}