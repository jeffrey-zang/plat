const { AssemblyAI } = require('assemblyai')
const dotenv = require('dotenv')
const router = require('express').Router()

dotenv.config()

const client = new AssemblyAI({
  apiKey: process.env.ASSEMBLYAI_API_KEY
})

const audioUrl =
  './assets/test/gary_trial_pitch.MOV' // see https://www.assemblyai.com/docs/Concepts/faq for supported file types

const params = {
  audio: audioUrl,
  disfluencies: true, // includes "um" and "uh" in transcript
  sentiment_analysis: true
}

const transcribe = async () => {
  const transcript = await client.transcripts.transcribe(params);
  return transcript.text
}

router.get('/', async (req, res) => {
  try {
    console.log('transcribing...')
    // const text = transcribe() 
    console.log(text)
    res.send('Transcribed text:\n\n' + text)
    console.log('transcribed')
  } catch (e) {
    console.log('\n\x1b[31mTranscription failed: ', e.message, "\x1b[0m");
    res.status(500).json({ error: 'Transcription failed' })
  }
})

module.exports = router;