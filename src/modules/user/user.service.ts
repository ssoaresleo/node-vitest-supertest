import { randomUUID } from "crypto";
import { AppError } from "../../error/app.error";

type UserProps = {
  id?: string;
  name: string;
  email: string;
};

class UserService {
  private readonly users: UserProps[] = [];

  getAll() {
    return this.users;
  }

  create(user: UserProps) {
    const userAlreadyExists = this.getUserByEmail(user.email);

    if (userAlreadyExists) {
      throw new AppError("User already exists", 400);
    }

    user.id = randomUUID();

    this.users.push(user);

    return user;
  }

  getUserByEmail(email: string) {
    return this.users.find((user) => user.email === email);
  }
}

export { UserService };
