const { AssemblyAI } = require('assemblyai')
const dotenv = require('dotenv')
const router = require('express').Router()
const openai = require('openai')

dotenv.config()

const client = new AssemblyAI({
  apiKey: process.env.ASSEMBLYAI_API_KEY
})

const apiKey = process.env.CHATGPT_API_KEY;
const openaiInstance = new openai(apiKey);

router.get('/', async(req,res) =>{
  try{
    const prompt = "I love rythmHacks"

    const response = await openaiInstance.complete.create({
      engine: 'text-davinci-003', //This is the model of gpt, i dont know which one - jame
      prompt,
      max_tokens: 10 //change if needed
    });

    const chatResponse = response.data.choices[0].text;
    res.json({chatResponse});
  } catch (error){
    console.log('chatgpt api error', error.message);
    res.status(500).json({error: 'chatgpt setup error'})
  }
})

const audioUrl =
  './assets/dylan.mp3'

const params = {
  audio: audioUrl
}

const transcribe = async () => {
  const transcript = await client.transcripts.transcribe(params)
  console.log(transcript.text)
}

router.get('/', (req, res) => {
  res.send('Transcribe')
})

module.exports = router;