import { FastifyReply, FastifyRequest, HookHandlerDoneFunction } from "fastify";
import { AppError } from "../error/app.error";

export function isAuth(
  req: FastifyRequest,
  reply: FastifyReply,
  done: HookHandlerDoneFunction
) {
  const { authorization } = req.headers;

  if (!authorization) {
    throw new AppError("Unauthorized", 401)
  }

  done();
}
