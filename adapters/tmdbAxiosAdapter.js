const axios = require('axios');

const tmdbAxiosAdapter = async (id) => {
  try {
    console.log(id);
    const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${process.env.TMDB_API_KEY}&language=en-US`);
    console.log(response);
    const { data } = response;
    return data;

  } catch (error) {

    return {
      source: 'adapters/tmdbAxiosAdapter.js',
      status: 500,
      error: error
    };

  }
}

module.exports = {
  tmdbAxiosAdapter,
}