import { app } from "./app";

const port = process.env.PORT ? Number(process.env.PORT) : 3333;

app
  .listen({ port: port, host: "0.0.0.0" })
  .then(() => console.log("HTTP server running!"));
