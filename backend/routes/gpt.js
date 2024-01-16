const OpenAI = require('openai')
const dotenv = require('dotenv')
const router = require('express').Router()

dotenv.config()

const openai = new OpenAI(process.env.OPENAI_API_KEY);

router.get('/', async (req, res) =>{
  try {
    const prompt = "Create an elevator pitch for a new b2b startup called Plat that provides realtime feedback on pitches."

    const completion = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [{ role: 'user', content: prompt }],
    });
  
    const chatResponse = completion.choices[0]?.message?.content;
    res.json({ chatResponse });
  } catch (error) {
    console.log('\n\x1b[31mChatGPT generation failed: ', error.message, "\x1b[0m");
    res.status(500).json({ error: 'ChatGPT generation failed'} )
  }
})

module.exports = router;