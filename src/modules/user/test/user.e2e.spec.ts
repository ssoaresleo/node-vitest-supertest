import { test, expect, describe, beforeAll } from "vitest";
import request from "supertest";
import { app } from "../../../infra/app";

describe("User E2E", () => {
  test("Dever ser possivél criar um usuário", async () => {
    await app.ready();

    await request(app.server)
      .post("/users")
      .set("Authorization", "Bearer tokenTestE2E")
      .send({ name: "UserTest E2E", email: "johntestE2E@example.com" })
      .expect(201);
  });
  test("Não dever ser possivél criar um usuário sem estar autenticado", async () => {
    await app.ready();

    await request(app.server)
      .post("/users")
      .send({ name: "UserTest E2E", email: "johntestE2E@example.com" })
      .expect(401);
  });
});
