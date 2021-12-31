const { movieImdbIdLogic } = require('../domainLogic/imdbIdLogic');

const handleViaplayRequestPort = async (data) => {
  try {

    const result = await movieImdbIdLogic(data);
    return result;

  } catch (error) {
    
    return {
      source: 'ports/handleViaplayRequestPort.js',
      status: 500,
      error: error
    };    

  }
}

module.exports = {
  handleViaplayRequestPort,
}