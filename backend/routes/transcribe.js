const { AssemblyAI } = require('assemblyai')
const dotenv = require('dotenv')
const router = require('express').Router()

dotenv.config()

const client = new AssemblyAI({
  apiKey: process.env.ASSEMBLYAI_API_KEY
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