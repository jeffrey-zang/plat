import { AssemblyAI } from 'assemblyai'
import dotenv from 'dotenv'

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