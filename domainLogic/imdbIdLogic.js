const { tmdbAxiosPort } = require('../ports/tmdbAxiosPort');

const movieImdbIdLogic = async (data) => {
  try {

    const imdbId = data._embedded["viaplay:blocks"][0]._embedded["viaplay:product"].content.imdb.id;
    const trailer = await tmdbAxiosPort(imdbId);
    let videos = [];

    for(const video of trailer.results) {
      videos.push(`https://www.youtube.com/watch?v=${video.key}`);
    }
    console.log(trailer);
    return videos;

  } catch (error) {

    return {
      source: 'domainLogic/movieImdbIdLogic.js',
      status: 500,
      error: error.message
    };

  }
}

module.exports = {
  movieImdbIdLogic,
}