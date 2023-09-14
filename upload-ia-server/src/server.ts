import { fastify } from "fastify"
import { getAllPromptsRoute } from "./routes/getAllPrompts"
import { uploadVideosRoute } from "./routes/uploadVideos"
import { createTranscriptionRoute } from "./routes/createTranscription"
import { generateAICompletionRoute } from "./routes/generateAICompletion"
import {fastifyCors} from "@fastify/cors"

const app = fastify()

app.register(fastifyCors, {
    origin: '*'
})

app.register(getAllPromptsRoute)
app.register(uploadVideosRoute)
app.register(createTranscriptionRoute)
app.register(generateAICompletionRoute)

app.listen({
    port: 3333
}).then(() => {
    console.log('https server running')
})