const router = require('express').Router();
const { handleViaplayRequestAdapter } = require('../adapters/handleViaplayRequestAdapter');

router.post('/videos/viaplay', async (req, res) => {
  const { link } = req.body;
  
  try {
    
    const result = await handleViaplayRequestAdapter(link);

    res.status(200).send(result);

  } catch (error) {
    
    res.status(500).send(error.message);

    return {
      source: 'routes/trailer.js',
      status: 500,
      error: error
    };

  }
})

module.exports = router;