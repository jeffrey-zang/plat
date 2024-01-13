const openai = require('openai')
const dotenv = require('dotenv')

dotenv.config()

const openaiInstance = new openai(process.env.CHATGPT_API_KEY);

router.get('/', async (req, res) =>{
  try {
    const prompt = "I love rythmHacks"

    const response = await openaiInstance.complete.create({
      engine: 'text-davinci-003', // This is the model of gpt, i dont know which one - jame
      prompt,
      max_tokens: 10 // change if needed
    });

    const chatResponse = response.data.choices[0].text;
    res.json({ chatResponse });
  } catch (error){
    console.log('ChatGPT generation failed: ', error.message);
    res.status(500).json({ error: 'ChatGPT generation failed'} )
  }
})