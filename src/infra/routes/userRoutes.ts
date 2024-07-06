import { FastifyInstance } from "fastify";
import { UserService } from "../../modules/user/user.service";
import { isAuth } from "../../middlewares/isAuth";

const userService = new UserService();

type UserRequestProps = {
  name: string;
  email: string;
};

export default async function userRoutes(app: FastifyInstance) {
  app.post("/users", { preHandler: [isAuth] }, (req, res) => {
    const userData = req.body;

    const user = userService.create(userData as UserRequestProps);

    res.status(201).send(user);
  });
  app.get("/users", (req, res) => {
    const users = userService.getAll();

    res.send(users);
  });
}
