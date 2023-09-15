import { FastifyInstance } from "fastify";
import { prisma } from "../lib/prisma";

export async function getAllPromptsRoute(app: FastifyInstance) {
  app.post("/prompts", async () => {
    const prompts = await prisma.prompt.findMany();

    return prompts;
  });
}
