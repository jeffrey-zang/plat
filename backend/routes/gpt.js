const openai = require('openai')
const dotenv = require('dotenv')
const router = require('express').Router()

dotenv.config()

const openaiInstance = new openai(process.env.OPENAI_API_KEY);

router.get('/', async (req, res) =>{
  try {
    const prompt = "Create an elevator pitch for a new b2b startup called Plat that provides realtime feedback on pitches."

    const response = await openaiInstance.complete.create({
      engine: 'text-davinci-003', // This is the model of gpt, i dont know which one - jame
      prompt,
      max_tokens: 10 // change if needed
    });

    const chatResponse = response.data.choices[0].text;
    res.json({ chatResponse });
  } catch (error) {
    console.log('ChatGPT generation failed: ', error.message);
    res.status(500).json({ error: 'ChatGPT generation failed'} )
  }
})

module.exports = router;