import fastify from "fastify";
import { AppError } from "../error/app.error";
import routes from "./routes";

const app = fastify();

app.register(routes);

app.setErrorHandler((err, request, reply) => {
  if (err instanceof AppError) {
    reply.code(err.statusCode).send(err.message);
  }

  reply.code(500).send();
});

export { app };
