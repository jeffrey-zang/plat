import { AssemblyAI } from 'assemblyai'
import dotenv from 'dotenv'

dotenv.config()

const client = new AssemblyAI({
  apiKey: process.env.ASSEMBLYAI_API_KEY
})

const audioUrl =
  'https://github.com/AssemblyAI-Examples/audio-examples/raw/main/20230607_me_canadian_wildfires.mp3'

const params = {
  audio: audioUrl
}

const run = async () => {
  const transcript = await client.transcripts.transcribe(params)
  console.log(transcript.text)
}

run()