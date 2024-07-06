import { test, expect, describe, beforeAll } from "vitest";
import { UserService } from "../user.service";

let userService: UserService;

beforeAll(() => {
  userService = new UserService();
});

describe("User Service", () => {
  test("Dever ser possivél criar um usuário", () => {
    const newUser = userService.create({
      name: "John Doe",
      email: "johndoe@example.com",
    });

    expect(newUser).toHaveProperty("id");
    expect(newUser.name).toBe("John Doe");
    expect(newUser.email).toBe("johndoe@example.com");
  });

  test("Não deve ser possivél criar um usuário com email já existente", () => {
    userService.create({
      name: "John Doe_2",
      email: "johndoe_2@example.com",
    });

    expect(() => {
      userService.create({
        name: "John Doe_2",
        email: "johndoe_2@example.com",
      });
    }).toThrow("User already exists");
  });

  test("Deve ser possivél buscar todos os usuários", () => {
    const users = userService.getAll();

    expect(Array.isArray(users));
  });
});
