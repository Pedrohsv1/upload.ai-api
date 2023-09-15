import fastify from "fastify";
import { getAllPromptsRoute } from "./routes/get-all-prompts";
import { uploadVideoRoute } from "./routes/upload-video";
import { createTranscriptionRoute } from "./routes/create-transcription";
import { generateAICompletion } from "./routes/generate-ai-completion";
import fastifyCors from "@fastify/cors";
import "dotenv/config";
import { getAllVideosRoute } from "./routes/get-all-videos";

const app = fastify();

app.register(require("@fastify/postgres"), {
  connectionString: process.env.DATABASE_URL,
});

app.register(fastifyCors, {
  origin: "*",
});

app.register(getAllPromptsRoute);
app.register(uploadVideoRoute);
app.register(createTranscriptionRoute);
app.register(generateAICompletion);
app.register(getAllVideosRoute);

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log("Server is running!");
  });
